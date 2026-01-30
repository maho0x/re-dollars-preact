import { escapeHTML, calculateImageStyle, getAvatarUrl } from './format';
import { settings } from '@/stores/user';
import { SMILIES } from './smilies';

// 标准化 Bangumi 链接，将 bangumi.tv/bgm.tv/chii.in 转换为相对路径
function normalizeBangumiUrl(url: string): string {
    try {
        const urlObj = new URL(url);
        const hostname = urlObj.hostname.toLowerCase();

        // 检查是否是 Bangumi 相关域名
        if (hostname === 'bangumi.tv' || hostname === 'bgm.tv' || hostname === 'chii.in') {
            // 返回相对路径（去掉协议和域名）
            return urlObj.pathname + urlObj.search + urlObj.hash;
        }
    } catch (e) {
        // URL 解析失败，返回原始 URL
    }
    return url;
}

// 生成预览卡片 HTML
function generatePreviewCardHTML(
    data: { title?: string; description?: string; image?: string },
    originalUrl: string
): string {
    if (!data) return '';
    const normalizedUrl = normalizeBangumiUrl(originalUrl);
    const title = escapeHTML(data.title || originalUrl);
    const desc = data.description ? escapeHTML(data.description) : '';
    const domain = originalUrl.includes('//') ? originalUrl.split('/')[2].replace(/^www\\./, '') : '';

    // 封面图处理
    let coverHTML = '';
    if (data.image) {
        coverHTML = `<div class="cover"><img src="${escapeHTML(data.image)}" loading="lazy" referrerPolicy="no-referrer"></div>`;
    } else {
        coverHTML = `<div class="cover"><div style="font-size: 32px; text-align: center; line-height: 80px; color: var(--dollars-text-placeholder);">🔗</div></div>`;
    }

    return `
        <a href="${escapeHTML(normalizedUrl)}" target="_blank" rel="noopener noreferrer" class="dollars-preview-card" data-entity-type="generic">
            ${coverHTML}
            <div class="inner">
                <p class="title" title="${title}">${title}</p>
                ${desc ? `<p class="info">${desc}</p>` : ''}
                <p class="rateInfo">${escapeHTML(domain)}</p>
            </div>
        </a>`;
}

/**
 * 处理 BBCode
 */
export function processBBCode(
    text: string,
    imageMeta: Record<string, { width?: number; height?: number; blurhash?: string; placeholder?: string }> = {},
    options: {
        previewsCollector?: string[];
        replyToId?: number;
        replyDetails?: { uid: number; nickname: string; avatar: string; content: string };
        isInsideQuote?: boolean;
    } = {},
    linkPreviews: Record<string, { title: string; description?: string; image?: string }> = {}
): string {
    let html = text;

    // 代码块
    html = html.replace(/\[code\]([\s\S]+?)\[\/code\]/gi, '<div class="codeHighlight"><pre>$1</pre></div>');

    // 话题标签
    html = html.replace(/(^|\s)(#[\p{L}\p{N}_]{1,50})(?=$|\s|[.,!?;:)])/gu, '$1<span class="chat-tag">$2</span>');

    // 基础格式化
    const bbMap: Record<string, string> = { b: 'strong', i: 'em', u: 'u', s: 's' };
    html = html.replace(/\[(b|i|u|s)\]([\s\S]+?)\[\/\1\]/gi, (_, tag, content) =>
        `<${bbMap[tag.toLowerCase()]}>${processBBCode(content, imageMeta, { ...options, isInsideQuote: true }, linkPreviews)}</${bbMap[tag.toLowerCase()]}>`
    );

    // 遮罩
    html = html.replace(/\[mask\]([\s\S]+?)\[\/mask\]/gi, '<span class="text_mask"><span class="inner">$1</span></span>');

    // 遮罩内的图片 - 特殊处理：显示 blurhash，点击后加载
    html = html.replace(/<span class="text_mask"><span class="inner">\[img\]([\s\S]+?)\[\/img\]<\/span><\/span>/gi, (m, src) => {
        const cleanSrc = src.replace(/<[^>]*>?/gm, '').trim();
        if (!/^https?:\/\/[^\s<>"']+$/i.test(cleanSrc)) return escapeHTML(m);

        if (options.isInsideQuote) {
            return `<span class="text_mask"><span class="inner"><a href="${cleanSrc}" target="_blank">[图片]</a></span></span>`;
        }

        const meta = imageMeta[cleanSrc];
        const imageStyle = calculateImageStyle(meta);
        const hasBlurhash = meta && (meta.placeholder || meta.blurhash);

        const blurhashCanvasHTML = hasBlurhash
            ? `<canvas class="blurhash-canvas" data-blurhash="${meta.placeholder || meta.blurhash}"></canvas>`
            : `<div style="background-color: var(--bgm-bg-odd); width:100%; height:100%;"></div>`;

        // 遮罩图片始终使用占位符模式
        return `<div class="image-container image-placeholder image-masked" style="${imageStyle}" data-iw="${meta?.width || ''}" data-ih="${meta?.height || ''}" data-src="${cleanSrc}">
            ${blurhashCanvasHTML}
            <div class="image-load-hint">显示图片</div>
        </div>`;
    });

    // 自定义表情
    html = html.replace(/\[emoji\]([\s\S]+?)\[\/emoji\]/gi, (m, src) => {
        if (!/^https?:\/\/[^\s<>"']+$/i.test(src)) return escapeHTML(m);
        const isCommunityEmoji = src.includes('/emojis/');
        const className = isCommunityEmoji ? 'smiley' : 'custom-emoji';
        return `<img src="${src}" class="${className}" alt="emoji" loading="lazy" decoding="async" fetchpriority="low" referrerpolicy="no-referrer">`;
    });

    // 音频
    html = html.replace(/\[audio\]([\s\S]+?)\[\/audio\]/gi, (m, src) => {
        const cleanSrc = src.replace(/<[^>]*>?/gm, '').trim();
        if (!/^https?:\/\/[^\s<>"']+$/i.test(cleanSrc)) return escapeHTML(m);
        if (options.isInsideQuote) {
            return `<a href="${cleanSrc}" target="_blank">[音频]</a>`;
        }
        return `<div class="audio-player-container" style="margin: 5px 0;"><audio controls preload="metadata" style="max-width: 100%; width: 300px; border-radius: 20px;"><source src="${cleanSrc}">您的浏览器不支持音频播放。</audio></div>`;
    });

    // 视频
    html = html.replace(/\[video\]([\s\S]+?)\[\/video\]/gi, (m, src) => {
        const cleanSrc = src.replace(/<[^>]*>?/gm, '').trim();
        if (!/^https?:\/\/[^\s<>"']+$/i.test(cleanSrc)) return escapeHTML(m);
        if (options.isInsideQuote) {
            return `<a href="${cleanSrc}" target="_blank">[视频]</a>`;
        }
        return `<div class="video-player-container" style="max-width: 100%; margin: 5px 0;"><video controls preload="metadata" style="max-width: 100%; max-height: 400px; border-radius: 8px; background: #000;"><source src="${cleanSrc}" type="video/mp4"><source src="${cleanSrc}" type="video/webm">您的浏览器不支持视频播放。</video></div>`;
    });

    // 图片
    html = html.replace(/\[img\]([\s\S]+?)\[\/img\]/gi, (m, src) => {
        const cleanSrc = src.replace(/<[^>]*>?/gm, '').trim();
        if (!/^https?:\/\/[^\s<>"']+$/i.test(cleanSrc)) return escapeHTML(m);

        if (options.isInsideQuote) {
            return `<a href="${cleanSrc}" target="_blank">[图片]</a>`;
        }

        const meta = imageMeta[cleanSrc];
        const imageStyle = calculateImageStyle(meta);
        const hasBlurhash = meta && (meta.placeholder || meta.blurhash);
        const shouldLoadImage = settings.value.loadImages;

        const blurhashCanvasHTML = hasBlurhash
            ? `<canvas class="blurhash-canvas" data-blurhash="${meta.placeholder || meta.blurhash}"></canvas>`
            : `<div style="background-color: var(--bgm-bg-odd); width:100%; height:100%;"></div>`;

        // 如果不自动加载图片，只显示 blurhash 占位符，点击后加载
        if (!shouldLoadImage) {
            return `<div class="image-container image-placeholder" style="${imageStyle}" data-iw="${meta?.width || ''}" data-ih="${meta?.height || ''}" data-src="${cleanSrc}">
                ${blurhashCanvasHTML}
                <div class="image-load-hint">点击加载图片</div>
            </div>`;
        }

        return `<div class="image-container" style="${imageStyle}" data-iw="${meta?.width || ''}" data-ih="${meta?.height || ''}">
            ${blurhashCanvasHTML}
            <img src="${cleanSrc}" class="full-image" alt="image" loading="lazy" decoding="async" referrerpolicy="no-referrer">
        </div>`;
    });

    // 用户提及
    html = html.replace(/\[user=(.+?)\]([\s\S]+?)\[\/user\]/gi, '<a href="/user/$1" target="_blank" class="user-mention">@$2</a>');

    // BGM 表情
    html = html.replace(/\(bgm(\d+)\)/g, (match, p1, offset, str) => {
        // 检查是否在 HTML 标签内
        const before = str.slice(0, offset);
        if (before.lastIndexOf('<') > before.lastIndexOf('>')) return match;

        const num = parseInt(p1, 10);
        const range = SMILIES.find(r => num >= r.start && num <= r.end);

        if (range && range.path) {
            const src = range.path(num);
            return `<img src="${src}" class="smiley" alt="${match}" width="21" height="21">`;
        }
        return match;
    });

    // BMO 表情
    html = html.replace(/\((bmo(?:C|_)[a-zA-Z0-9_-]+)\)/g, (match, _code, offset, str) => {
        const before = str.slice(0, offset);
        if (before.lastIndexOf('<') > before.lastIndexOf('>')) return match;
        return `<span class="bmo" data-code="${match}"></span>`;
    });

    // URL 链接
    html = html.replace(/\[url=([^\]]+?)\]([\s\S]+?)\[\/url\]/gi, (_, url, label) => {
        const normalizedUrl = normalizeBangumiUrl(url);
        const linkHtml = `<a href="${escapeHTML(normalizedUrl)}" target="_blank" rel="noopener noreferrer">${label}</a>`;

        // 如果不在引用内且启用了链接预览，收集预览卡片到 collector
        if (!options.isInsideQuote && settings.value.linkPreview && linkPreviews && linkPreviews[url] && options.previewsCollector) {
            const previewHtml = generatePreviewCardHTML(linkPreviews[url], url);
            options.previewsCollector.push(previewHtml);
        }
        return linkHtml;
    });

    // 引用块 (简化处理)
    html = html.replace(/\[quote(?:=(\d+))?\]([\s\S]*?)\[\/quote\]\n?/gi, (_, id, content) => {
        // 如果提供了回复详情，则主内容中的 [quote] 应该丢弃以防重复显示
        if (options.replyDetails) return '';
        if (!content.trim()) return '';
        const attrs = id ? `data-jump-to-id="${id}" title="点击跳转到原文"` : '';
        const processedContent = processBBCode(content, imageMeta, { ...options, isInsideQuote: true }, linkPreviews);
        return `<blockquote class="chat-quote" ${attrs}><div class="quote-content" style="white-space: pre-wrap;">${processedContent}</div></blockquote>`;
    });

    // 自动链接
    html = html.replace(/(https?:\/\/[^\s<>"'\]\[]+)/g, (url, _g1, offset, str) => {
        const before = str.slice(0, offset);
        const after = str.slice(offset + url.length);

        // 跳过已在标签内的链接
        if ((before.endsWith('>') && after.startsWith('</a>')) || (before.endsWith('src="') && after.startsWith('"'))) return url;
        const lastOpen = before.lastIndexOf('<');
        const lastClose = before.lastIndexOf('>');
        if (lastOpen > lastClose) return url;

        const normalizedUrl = normalizeBangumiUrl(url);
        const linkHtml = `<a href="${normalizedUrl}" target="_blank" rel="noopener noreferrer">${url}</a>`;

        // 如果不在引用内且启用了链接预览，收集预览卡片到 collector
        if (!options.isInsideQuote && settings.value.linkPreview && linkPreviews && linkPreviews[url] && options.previewsCollector) {
            const previewHtml = generatePreviewCardHTML(linkPreviews[url], url);
            options.previewsCollector.push(previewHtml);
        }
        return linkHtml;
    });

    // 移除引用块后的换行
    html = html.replace(/(<\/blockquote>)<br\s*\/?>/gi, '$1');

    // 换行
    html = html.replace(/\n/g, '<br>');

    return html;
}

/**
 * 渲染回复引用块
 */
export function renderReplyQuote(details: {
    uid: number;
    nickname: string;
    avatar: string;
    content: string;
    firstImage?: string;
}, replyToId: number): string {
    const content = stripQuotes(details.content).substring(0, 80);
    const avatarSrc = getAvatarUrl(details.avatar, 's');

    // 图片缩略图（如果有）
    const imageHTML = details.firstImage
        ? `<img src="${details.firstImage}" class="quote-thumbnail" loading="lazy">`
        : '';

    // 头像（如果没有图片缩略图则显示）
    const avatarHTML = details.firstImage
        ? ''
        : `<img src="${avatarSrc}" class="quote-avatar" loading="lazy">`;

    return `<blockquote class="chat-quote" data-jump-to-id="${replyToId}" title="点击跳转到原文">${imageHTML}<div class="quote-text-wrapper"><div class="quote-header">${avatarHTML}<span class="quote-nickname">${escapeHTML(details.nickname)}</span></div><div class="quote-content">${escapeHTML(content)}${details.content.length > 80 ? '...' : ''}</div></div></blockquote>`;
}

/**
 * 去除引用块
 */
export function stripQuotes(text: string): string {
    return (text || '').replace(/\[quote(?:=\d+)?\][\s\S]*?\[\/quote\]/gi, '').trim();
}
