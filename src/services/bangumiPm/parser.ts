import type {
    BangumiPmComposeForm,
    BangumiPmConversation,
    BangumiPmConversationDetail,
    BangumiPmForm,
    BangumiPmInboxPage,
    BangumiPmMessage,
} from '@/types/pm';
import { escapeHTML } from '@/utils/format';
import { processBBCode } from '@/utils/bbcode';

const FALLBACK_ORIGIN = 'https://bangumi.tv';
// 与 sanitizePmBody 阶段无关：pmPresentationText 复原 BBCode 时需要跳过这些危险标签，
// 避免把 <script> 之类的文本内容混进渲染文本。
const BLOCKED_TAGS = new Set(['IFRAME', 'MATH', 'OBJECT', 'SCRIPT', 'STYLE', 'SVG', 'TEMPLATE']);

// Bangumi 会把行内格式 BBCode 渲染成带 style 的 <span>，这里按样式还原回对应的 BBCode，
// 交给 processBBCode 走和 Dollars 主聊天一致的渲染。
const STYLE_TO_BBCODE: Array<[RegExp, string]> = [
    [/font-weight\s*:\s*(?:bold|bolder|[6-9]00)/i, 'b'],
    [/font-style\s*:\s*italic/i, 'i'],
    [/text-decoration[^;]*\bline-through\b/i, 's'],
    [/text-decoration[^;]*\bunderline\b/i, 'u'],
];

export class BangumiPmParseError extends Error {}

function parseDocument(html: string) {
    return new DOMParser().parseFromString(html, 'text/html');
}

function getOrigin() {
    return typeof window !== 'undefined' && window.location?.origin
        ? window.location.origin
        : FALLBACK_ORIGIN;
}

export function toSameOriginPmPath(value: string, baseUrl = getOrigin()) {
    try {
        const url = new URL(value, baseUrl);
        if (!url.pathname.startsWith('/pm')) return null;
        return `${url.pathname}${url.search}${url.hash}`;
    } catch {
        return null;
    }
}

function safeResourceUrl(value: string, baseUrl: string) {
    try {
        const url = new URL(value, baseUrl);
        if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
        return url.href;
    } catch {
        return null;
    }
}

function avatarFrom(element: Element | null, baseUrl: string) {
    const avatar = element?.querySelector<HTMLElement>('.avatarNeue') ?? element as HTMLElement | null;
    const styleValue = avatar?.style.backgroundImage || avatar?.getAttribute('style') || '';
    const match = styleValue.match(/url\(["']?(.+?)["']?\)/i);
    return match ? safeResourceUrl(match[1], baseUrl) || '' : '';
}

function parsePmTimestamp(value: string) {
    const match = value.match(/^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{2})/);
    if (!match) return null;
    const [, year, month, day, hour, minute] = match;
    const timestamp = new Date(
        Number(year),
        Number(month) - 1,
        Number(day),
        Number(hour),
        Number(minute)
    ).getTime() / 1000;
    return Number.isFinite(timestamp) ? timestamp : null;
}

function wrapBBCode(tag: string, content: string) {
    return content ? `[${tag}]${content}[/${tag}]` : '';
}

function mediaUrl(element: Element, baseUrl: string) {
    const raw = element.getAttribute('src')
        || element.querySelector('source')?.getAttribute('src')
        || '';
    return safeResourceUrl(raw, baseUrl);
}

function presentSpan(element: Element, content: string): string {
    if (!content) return content;
    if (element.classList.contains('text_mask') || element.classList.contains('mask')) {
        return wrapBBCode('mask', content);
    }
    const style = element.getAttribute('style') || '';
    for (const [pattern, tag] of STYLE_TO_BBCODE) {
        if (pattern.test(style)) return wrapBBCode(tag, content);
    }
    return content;
}

// 把 Bangumi 短信正文的 DOM 复原成 Dollars 风格的 BBCode 文本，
// 再交由 processBBCode 渲染，从而与主聊天保持完全一致（[code]、加粗、引用等）。
function pmPresentationText(source: Node, baseUrl: string): string {
    if (source.nodeType === Node.TEXT_NODE) return source.textContent || '';
    if (!(source instanceof Element)) return '';
    if (BLOCKED_TAGS.has(source.tagName)) return '';

    const content = Array.from(source.childNodes).map(node => pmPresentationText(node, baseUrl)).join('');
    switch (source.tagName) {
        case 'BR':
            return '\n';
        case 'IMG': {
            if (source.classList.contains('smile')) return source.getAttribute('alt') || '';
            const src = safeResourceUrl(source.getAttribute('src') || '', baseUrl);
            return src ? `[img]${src}[/img]` : '';
        }
        case 'BLOCKQUOTE':
            return wrapBBCode('quote', content);
        case 'PRE':
            return wrapBBCode('code', source.textContent || '');
        case 'CODE':
            return source.parentElement?.tagName === 'PRE' ? content : wrapBBCode('code', content);
        case 'VIDEO': {
            const src = mediaUrl(source, baseUrl);
            return src ? `[video]${src}[/video]` : '';
        }
        case 'AUDIO': {
            const src = mediaUrl(source, baseUrl);
            return src ? `[audio]${src}[/audio]` : '';
        }
        case 'A': {
            const href = safeResourceUrl(source.getAttribute('href') || '', baseUrl);
            if (!href) return content;
            // 裸链接交给 processBBCode 的自动链接逻辑，与主聊天一致
            return content.trim() === href ? href : `[url=${href}]${content}[/url]`;
        }
        case 'B':
        case 'STRONG':
            return wrapBBCode('b', content);
        case 'I':
        case 'EM':
            return wrapBBCode('i', content);
        case 'U':
            return wrapBBCode('u', content);
        case 'S':
        case 'DEL':
        case 'STRIKE':
            return wrapBBCode('s', content);
        case 'SPAN':
            return presentSpan(source, content);
        default:
            return content;
    }
}

function renderPmBody(presentationText: string): string {
    return processBBCode(escapeHTML(presentationText), {}, {}, {});
}

function extractForm(form: HTMLFormElement, baseUrl: string): BangumiPmForm {
    const fields: Record<string, string> = {};
    for (const control of Array.from(form.elements)) {
        if (!(control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement || control instanceof HTMLSelectElement)) continue;
        if (!control.name || control.disabled) continue;
        if (control instanceof HTMLInputElement) {
            if ((control.type === 'checkbox' || control.type === 'radio') && !control.checked) continue;
            if (control.type === 'submit' || control.type === 'button' || control.type === 'file') continue;
        }
        fields[control.name] = control.value;
    }

    return {
        action: toSameOriginPmPath(form.action || '/pm/create.chii', baseUrl) || '/pm/create.chii',
        fields,
    };
}

function ensurePmPage(document: Document) {
    if (document.querySelector('#loginForm') || document.querySelector('input[name="email"][type="text"]')) {
        throw new BangumiPmParseError('Bangumi 登录已失效');
    }
}

function findNextConversationPage(document: Document, baseUrl: string) {
    const current = new URL(baseUrl, FALLBACK_ORIGIN);
    const currentPage = Number.parseInt(current.searchParams.get('page') || '1', 10);
    const candidates = Array.from(document.querySelectorAll<HTMLAnchorElement>('#pm_pager a'))
        .flatMap(link => {
            const path = toSameOriginPmPath(link.href, baseUrl);
            if (!path) return [];
            const page = Number.parseInt(new URL(link.href, baseUrl).searchParams.get('page') || '', 10);
            return Number.isFinite(page) && page > currentPage ? [{ path, page }] : [];
        })
        .sort((a, b) => a.page - b.page);
    return candidates[0]?.path || null;
}

export function parsePmInbox(html: string, baseUrl = getOrigin()): BangumiPmInboxPage {
    const document = parseDocument(html);
    ensurePmPage(document);
    const container = document.querySelector('#contentPM');
    if (!container) throw new BangumiPmParseError('无法识别 Bangumi 短信列表');

    const conversations: BangumiPmConversation[] = Array.from(container.querySelectorAll<HTMLAnchorElement>('a.pm-conversation-item')).flatMap(item => {
        const path = toSameOriginPmPath(item.href, baseUrl);
        const id = path?.match(/^\/pm\/conversation\/(\d+)\.chii/)?.[1];
        if (!path || !id) return [];
        return [{
            id,
            href: path,
            nickname: item.querySelector('.pm-conversation-name')?.textContent?.trim() || '',
            avatar: avatarFrom(item, baseUrl),
            dateText: item.querySelector('.pm-conversation-date')?.textContent?.trim() || '',
            lastMessage: item.querySelector('.pm-conversation-desc')?.textContent?.trim() || '',
            unreadCount: Number.parseInt(item.querySelector('.pm-conversation-unread')?.textContent || '0', 10) || 0,
        }];
    });
    return { conversations, nextPageUrl: findNextConversationPage(document, baseUrl) };
}

export function parsePmConversation(html: string, baseUrl: string): BangumiPmConversationDetail {
    const document = parseDocument(html);
    ensurePmPage(document);
    const list = document.querySelector('.pm-message-list');
    const id = new URL(baseUrl, FALLBACK_ORIGIN).pathname.match(/^\/pm\/conversation\/(\d+)\.chii/)?.[1]
        || document.querySelector<HTMLAnchorElement>('a.pm-conversation-item.selected')?.href.match(/\/conversation\/(\d+)\.chii/)?.[1];
    if (!list || !id) throw new BangumiPmParseError('无法识别 Bangumi 短信会话');

    const peerLink = document.querySelector<HTMLAnchorElement>('.pm-chat-title strong a[href*="/user/"]');
    const username = peerLink?.pathname.match(/^\/user\/(.+)$/)?.[1] || '';
    const messages: BangumiPmMessage[] = [];
    let topic: string | undefined;

    for (const child of Array.from(list.children)) {
        if (child.classList.contains('pm-thread-label')) {
            topic = child.textContent?.trim() || undefined;
            continue;
        }
        if (!child.classList.contains('pm-message')) continue;
        const messageId = child.id.match(/^msg_(\d+)$/)?.[1];
        const body = child.querySelector('.pm-message-body');
        if (!messageId || !body) continue;
        const userLink = child.querySelector<HTMLAnchorElement>('a[href*="/user/"]');
        const info = child.querySelector('.pm-message-info small')?.textContent || '';
        const timestampText = info.split('/')[0]?.trim() || '';
        const presentationText = Array.from(body.childNodes).map(node => pmPresentationText(node, baseUrl)).join('').trim();
        messages.push({
            id: messageId,
            isSelf: child.classList.contains('pm-message-self'),
            avatar: avatarFrom(child, baseUrl),
            userHref: userLink ? new URL(userLink.href, baseUrl).pathname : '',
            bodyHtml: renderPmBody(presentationText),
            bodyText: body.textContent?.trim() || '',
            presentationText,
            timestamp: parsePmTimestamp(timestampText),
            timestampText,
            topic,
        });
    }

    const formElement = document.querySelector<HTMLFormElement>('#pmReplyForm');
    return {
        id,
        nickname: peerLink?.textContent?.trim() || '',
        username: decodeURIComponent(username),
        avatar: avatarFrom(document.querySelector('.pm-chat-header'), baseUrl),
        messages,
        replyForm: formElement ? extractForm(formElement, baseUrl) : null,
    };
}

export function parsePmComposeForm(html: string, baseUrl: string): BangumiPmComposeForm {
    const document = parseDocument(html);
    ensurePmPage(document);
    const form = document.querySelector<HTMLFormElement>('#pmForm, form[action*="/pm/create.chii"]');
    if (!form) throw new BangumiPmParseError('无法识别 Bangumi 短信表单');
    const parsed = extractForm(form, baseUrl);
    return { form: parsed, receiver: parsed.fields.msg_receivers || '' };
}

export function findPmError(html: string) {
    const document = parseDocument(html);
    if (document.querySelector('#loginForm')) return 'Bangumi 登录已失效';
    const error = document.querySelector('.error, .message, .alert, #robot_speech_js');
    const text = error?.textContent?.trim();
    return text && /错误|失败|拒绝|不存在|不能为空|无权限|频繁/.test(text) ? text : null;
}
