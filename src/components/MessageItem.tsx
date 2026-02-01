import { useMemo, useRef, useEffect, useCallback, useState } from 'preact/hooks';
import { isMobile } from '@/utils/format';
import { memo } from 'preact/compat';
import { DollarsBlurHash } from '@/utils/blurhash';
import { messageStore, setReplyTo, newMessageIds, retryMessage } from '@/stores/chat';
import { settings } from '@/stores/user';
import type { Message } from '@/types';
import { processBBCode, renderReplyQuote, stripQuotes } from '@/utils/bbcode';
import { escapeHTML, formatDate, getAvatarUrl } from '@/utils/format';
import { showContextMenu, showImageViewer } from '@/stores/ui';
import { UserAvatar } from './UserAvatar';
import { markMessageAsSeenIfNotified } from './NotificationManager';
import { useSwipeToReply } from '@/hooks/useSwipeToReply';
import { MessageReactions } from './MessageReactions';

interface MessageItemProps {
    message: Message;
    isSelf: boolean;
    isGrouped: boolean;
    isGroupedWithNext?: boolean;
}

// 使用自定义比较函数优化 memo
function arePropsEqual(prev: MessageItemProps, next: MessageItemProps): boolean {
    const prevKey = prev.message.stableKey || prev.message.id;
    const nextKey = next.message.stableKey || next.message.id;

    return (
        prevKey === nextKey &&
        prev.message.message === next.message.message &&
        prev.message.is_deleted === next.message.is_deleted &&
        prev.message.edited_at === next.message.edited_at &&
        prev.message.reactions === next.message.reactions &&
        prev.message.link_previews === next.message.link_previews &&
        prev.message.image_meta === next.message.image_meta &&
        prev.message.state === next.message.state &&
        prev.isSelf === next.isSelf &&
        prev.isGrouped === next.isGrouped &&
        prev.isGroupedWithNext === next.isGroupedWithNext
    );
}

// 长消息折叠阈值 (字符数)
const COLLAPSE_THRESHOLD = 500;

export const MessageItem = memo(({ message, isSelf, isGrouped, isGroupedWithNext }: MessageItemProps) => {
    const messageRef = useRef<HTMLDivElement>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    // 提取原始值用于依赖
    const messageId = message.id;
    const messageText = message.message;
    const isDeleted = message.is_deleted;
    const editedAt = message.edited_at;
    const replyToId = message.reply_to_id;
    const replyDetails = message.reply_details;
    const imageMeta = message.image_meta;
    const linkPreviews = message.link_previews;

    // 渲染消息内容
    const content = useMemo(() => {
        if (isDeleted) {
            return '<div class="text-content deleted">此消息已撤回</div>';
        }

        const previews: string[] = [];
        let html = processBBCode(
            escapeHTML(messageText),
            imageMeta || {},
            {
                replyToId: replyToId,
                replyDetails: replyDetails,
                previewsCollector: previews,
            },
            linkPreviews || {}
        );

        if (replyToId && replyDetails) {
            html = renderReplyQuote(replyDetails, replyToId) + html;
        }

        if (previews.length > 0) {
            html += '<div class="message-previews">' + previews.join('') + '</div>';
        }

        return html;
    }, [messageId, messageText, isDeleted, replyToId, replyDetails, imageMeta, linkPreviews, settings.value.linkPreview, settings.value.loadImages]);

    // 使用 IntersectionObserver 延迟渲染重内容
    useEffect(() => {
        const el = messageRef.current;
        if (!el) return;

        let hasRendered = false;

        const handleVisibility = () => {
            if (hasRendered) return;
            hasRendered = true;

            markMessageAsSeenIfNotified(messageId);

            // 渲染 Blurhash
            const placeholders = el.querySelectorAll('.blurhash-canvas:not(.is-rendered)');
            placeholders.forEach((canvas: Element) => {
                const canvasEl = canvas as HTMLCanvasElement;
                const blurhash = canvasEl.dataset.blurhash;
                if (!blurhash) return;

                canvasEl.classList.add('is-rendered');
                try {
                    const wrapper = canvasEl.closest('.image-container, .image-placeholder');
                    const rect = wrapper ? wrapper.getBoundingClientRect() : null;
                    const targetW = Math.max(1, Math.round(rect?.width || 32));
                    const targetH = Math.max(1, Math.round(rect?.height || 32));
                    const srcW = 32, srcH = 32;

                    const pixels = DollarsBlurHash.decode(blurhash, srcW, srcH);
                    const tmp = document.createElement('canvas');
                    tmp.width = srcW;
                    tmp.height = srcH;
                    const ctx = tmp.getContext('2d');
                    if (ctx) {
                        ctx.putImageData(new ImageData(pixels, srcW, srcH), 0, 0);
                        const destCtx = canvasEl.getContext('2d');
                        if (destCtx) {
                            canvasEl.width = targetW;
                            canvasEl.height = targetH;
                            destCtx.imageSmoothingEnabled = true;
                            destCtx.imageSmoothingQuality = 'high';
                            destCtx.drawImage(tmp, 0, 0, srcW, srcH, 0, 0, targetW, targetH);
                        }
                    }
                } catch (e) {
                    canvasEl.style.backgroundColor = 'var(--dollars-bg)';
                }
            });

            // 处理图片加载状态
            const imgs = el.querySelectorAll('.full-image');
            imgs.forEach((img: Element) => {
                const image = img as HTMLImageElement;
                const container = image.closest('.image-container');

                const handleLoad = () => {
                    image.classList.add('is-loaded');
                    if (container) container.classList.add('is-loaded');
                };

                const handleError = () => {
                    image.src = '/img/no_img.gif';
                    image.classList.add('is-loaded', 'load-failed');
                    if (container) container.classList.add('is-loaded');
                };

                if (image.complete) {
                    if (image.naturalWidth > 0) {
                        handleLoad();
                    } else {
                        handleError();
                    }
                } else {
                    image.addEventListener('load', handleLoad, { once: true });
                    image.addEventListener('error', handleError, { once: true });
                }
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        handleVisibility();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '100px' }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
        };
    }, [content, messageId]);

    // 处理图片点击 (Lightbox)
    useEffect(() => {
        const el = messageRef.current;
        if (!el) return;

        const handlers: Array<{ el: Element, fn: (e: Event) => void }> = [];

        const addImageViewerHandler = (img: HTMLImageElement) => {
            const handler = (e: Event) => {
                e.preventDefault();
                e.stopPropagation();
                const allImgs = el.querySelectorAll('.full-image');
                const imageUrls = Array.from(allImgs).map(i => (i as HTMLImageElement).src);
                const index = imageUrls.indexOf(img.src);
                showImageViewer(imageUrls, Math.max(0, index));
            };
            img.addEventListener('click', handler);
            img.style.cursor = 'zoom-in';
            handlers.push({ el: img, fn: handler });
        };

        // 处理占位符点击加载图片
        const placeholders = el.querySelectorAll('.image-placeholder[data-src]');
        placeholders.forEach((placeholder) => {
            const container = placeholder as HTMLElement;
            const handler = (e: Event) => {
                e.preventDefault();
                e.stopPropagation();

                const src = container.dataset.src;
                if (!src) return;

                const hint = container.querySelector('.image-load-hint');
                if (hint) hint.remove();

                const img = document.createElement('img');
                img.src = src;
                img.className = 'full-image';
                img.alt = 'image';
                img.loading = 'lazy';
                img.decoding = 'async';
                img.referrerPolicy = 'no-referrer';

                img.onload = () => {
                    img.classList.add('is-loaded');
                    container.classList.add('is-loaded');
                    container.classList.remove('image-placeholder');
                    addImageViewerHandler(img);
                };

                img.onerror = () => {
                    img.src = '/img/no_img.gif';
                    img.classList.add('is-loaded', 'load-failed');
                    container.classList.add('is-loaded');
                    container.classList.remove('image-placeholder');
                };

                container.appendChild(img);
                container.removeEventListener('click', handler);
            };
            container.addEventListener('click', handler);
            handlers.push({ el: container, fn: handler });
        });

        // 处理已加载图片的点击 (Lightbox)
        const imgs = el.querySelectorAll('.full-image');
        imgs.forEach((img) => {
            addImageViewerHandler(img as HTMLImageElement);
        });

        return () => {
            handlers.forEach(({ el, fn }) => {
                el.removeEventListener('click', fn);
            });
        };
    }, [content]);

    // 判断是否为贴纸模式
    const isSticker = useMemo(() => {
        if (isDeleted) return false;
        const raw = (messageText || '').trim();
        return /^(\[img\][^\[]+\[\/img\]|\[emoji\][^\[]+\[\/emoji\])$/i.test(raw) && !replyToId;
    }, [messageText, isDeleted, replyToId]);

    // 时间戳
    const timeText = formatDate(message.timestamp, 'time') +
        (editedAt && !isDeleted ? ' (已编辑)' : '');
    const fullTimeText = formatDate(message.timestamp, 'full');

    // 头像 URL
    const avatarUrl = getAvatarUrl(message.avatar, 'l');

    // 昵称颜色
    const nickColor = message.color || 'var(--primary-color)';

    // 上下文菜单
    const handleContextMenu = useCallback((e: MouseEvent) => {
        let imageUrl: string | null = null;
        let bmoCode: string | null = null;
        const target = e.target as HTMLElement;

        const bmoElement = target.closest('.bmo') as HTMLElement | null;
        if (bmoElement) {
            bmoCode = bmoElement.dataset.code || null;
        } else if (target.tagName === 'IMG') {
            imageUrl = (target as HTMLImageElement).src;
        } else if (target.classList.contains('emoji') || target.style.backgroundImage) {
            const bg = window.getComputedStyle(target).backgroundImage;
            const match = bg.match(/url\(["']?(.*?)["']?\)/);
            if (match && match[1]) {
                imageUrl = match[1];
            }
        }

        if (isMobile() && !imageUrl && !bmoCode) {
            return;
        }

        e.preventDefault();
        showContextMenu(e.clientX, e.clientY, String(messageId), imageUrl, bmoCode);
    }, [messageId]);

    // 触发回复
    const triggerReply = useCallback(() => {
        const rawContent = (messageStore.peek().get(String(messageId))?.raw || messageText || '').trim();
        const text = stripQuotes(escapeHTML(rawContent))
            .replace(/\[img\].*?\[\/img\]/gi, '[图片]')
            .replace(/\n/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        setReplyTo({
            id: String(messageId),
            uid: String(message.uid),
            user: message.nickname,
            text: text,
            raw: rawContent,
            avatar: message.avatar
        });
        const textarea = document.querySelector('#dollars-main-chat textarea') as HTMLTextAreaElement;
        if (textarea) textarea.focus();
    }, [messageId, messageText, message.uid, message.nickname, message.avatar]);

    // 重试发送失败的消息
    const handleRetry = useCallback(async () => {
        const result = retryMessage(messageId);
        if (result) {
            const [{ sendPendingMessage }, { sendMessage: apiSendMessage }] = await Promise.all([
                import('@/hooks/useWebSocket'),
                import('@/utils/api')
            ]);
            sendPendingMessage(result.stableKey, result.content);
            apiSendMessage(result.content);
        }
    }, [messageId]);

    // 气泡点击处理
    const handleBubbleClick = useCallback((e: MouseEvent) => {
        if (message.state === 'failed') {
            e.stopPropagation();
            handleRetry();
        }
    }, [message.state, handleRetry]);

    // 滑动回复
    const { onTouchStart, onTouchMove, onTouchEnd } = useSwipeToReply({
        messageId,
        onReply: triggerReply,
        elementRef: messageRef,
    });

    const className = [
        'chat-message',
        isSelf && 'self',
        isGrouped && 'is-grouped-with-prev',
        isGroupedWithNext && 'is-grouped-with-next',
        editedAt && !isDeleted && 'is-edited',
        newMessageIds.value.has(messageId) && 'new-message',
        message.state === 'sending' && 'pending',
        message.state === 'failed' && 'failed',
    ].filter(Boolean).join(' ');

    return (
        <div
            id={`db-${messageId}`}
            ref={messageRef}
            class={className}
            data-db-id={messageId}
            data-uid={message.uid}
            data-timestamp={message.timestamp}
            onContextMenu={handleContextMenu}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchEnd}
        >
            <div class="swipe-reply-indicator"></div>

            <UserAvatar
                uid={message.uid}
                src={avatarUrl}
                nickname={message.nickname}
            />

            <div class="message-content">
                <span class="nickname">
                    <a
                        href={message.uid === 0 ? '/user/bangumi' : `/user/${message.uid}`}
                        target="_blank"
                        rel="noopener"
                    >
                        {message.nickname}
                    </a>
                </span>

                <div
                    class={`bubble ${isSticker ? 'sticker-mode' : ''}`}
                    onClick={message.state === 'failed' ? handleBubbleClick : undefined}
                    style={message.state === 'failed' ? { cursor: 'pointer' } : undefined}
                >
                    <svg viewBox="0 0 11 20" width="11" height="20" class="bubble-tail">
                        <use href="#message-tail-filled" />
                    </svg>

                    <span class="bubble-nickname" style={{ '--nick-color': nickColor } as any}>
                        {message.nickname}
                    </span>

                    {(() => {
                        const shouldCollapse = !isDeleted && messageText.length > COLLAPSE_THRESHOLD && !isExpanded;
                        return (
                            <>
                                <div
                                    class={`text-content ${shouldCollapse ? 'is-collapsed' : ''}`}
                                    dangerouslySetInnerHTML={{ __html: content }}
                                />
                                {!isDeleted && messageText.length > COLLAPSE_THRESHOLD && (
                                    <button
                                        class="expand-toggle-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsExpanded(!isExpanded);
                                        }}
                                    >
                                        {isExpanded ? '收起' : '展开全文'}
                                    </button>
                                )}
                            </>
                        );
                    })()}

                    <span class="bubble-timestamp" title={fullTimeText}>
                        {timeText}
                    </span>
                </div>

                <MessageReactions reactions={message.reactions || []} messageId={messageId} />
            </div>
        </div>
    );
}, arePropsEqual);
