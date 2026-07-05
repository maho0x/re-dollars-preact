import type { Message } from '@/types';
import { processBBCode, renderReplyQuote } from '@/utils/bbcode';
import { escapeHTML } from '@/utils/format';

export type BubbleTimestampMode = 'hidden' | 'trailing' | 'stacked' | 'overlay';

export function hasRichBubbleContent(
    messageText: string,
    hasReplyQuote: boolean,
    hasLinkPreviewCards: boolean,
    hasCollapseToggle: boolean
) {
    if (hasReplyQuote || hasLinkPreviewCards || hasCollapseToggle) {
        return true;
    }

    return /\[(?:img|emoji|sticker|audio|video|code|quote)\]|\[file=.*?\]|\((?:musume|blake)_\d+\)/i.test(messageText);
}

export function getBubbleTimestampMode(
    isGroupedWithNext: boolean,
    editedAt: number | undefined,
    isDeleted: boolean,
    isSticker: boolean,
    prefersTrailing: boolean
): BubbleTimestampMode {
    if (isGroupedWithNext && !(editedAt && !isDeleted)) {
        return 'hidden';
    }

    if (isSticker) {
        return 'overlay';
    }

    return prefersTrailing ? 'trailing' : 'stacked';
}

// 单条消息仅由一个可渲染的媒体（图片/表情贴纸/大表情）构成时才使用 sticker 样式。
// [img]/[emoji]/[sticker] 的内容必须是合法的 http(s) URL，否则乱填的文字不会被渲染成图片，
// 也就不应套用无气泡的 sticker 布局。
const STICKER_MESSAGE_REGEX =
    /^(?:\[img\]\s*https?:\/\/[^\s<>"'[\]]+\s*\[\/img\]|\[(?:emoji|sticker)\]\s*https?:\/\/[^\s<>"'[\]]+\s*\[\/(?:emoji|sticker)\]|\((?:musume|blake)_\d+\))$/i;

export function isStickerMessage(messageText: string, isDeleted: boolean | undefined, replyToId: number | undefined) {
    if (isDeleted) return false;
    const raw = (messageText || '').trim();
    return STICKER_MESSAGE_REGEX.test(raw) && !replyToId;
}

export function renderMessageContent(message: Message) {
    if (message.is_deleted) {
        return '<div class="text-content deleted">此消息已撤回</div>';
    }

    const previews: string[] = [];
    let html = processBBCode(
        escapeHTML(message.message),
        message.image_meta || {},
        {
            replyToId: message.reply_to_id,
            replyDetails: message.reply_details,
            previewsCollector: previews,
        },
        message.link_previews || {}
    );

    if (message.reply_to_id && message.reply_details) {
        html = renderReplyQuote(message.reply_details, message.reply_to_id) + html;
    }

    if (previews.length > 0) {
        html += '<div class="message-previews">' + previews.join('') + '</div>';
    }

    return html;
}
