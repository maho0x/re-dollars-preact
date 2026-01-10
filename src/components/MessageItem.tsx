import { useMemo, useRef, useEffect, useCallback } from 'preact/hooks';
import { isMobile } from '@/utils/detect';
import { memo } from 'preact/compat';
import { DollarsBlurHash } from '@/utils/blurhash';
import { messageStore, setReplyTo, newMessageIds, pendingMessageIds } from '@/stores/chat';
import type { Message } from '@/types';
import { processBBCode, renderReplyQuote, stripQuotes } from '@/utils/bbcode';
import { escapeHTML, formatDate, getAvatarUrl, generateReactionTooltip } from '@/utils/format';
import { showContextMenu, showImageViewer, isContextMenuOpen, isSmileyPanelOpen, profileCardUserId } from '@/stores/ui';
import { UserAvatar } from './UserAvatar';
import { toggleReaction } from '@/utils/api';
import { userInfo } from '@/stores/user';
import { getSmileyUrl } from '@/utils/smilies';
import { markMessageAsSeenIfNotified } from './NotificationManager';

interface MessageItemProps {
    message: Message;
    isSelf: boolean;
    isGrouped: boolean;
    isGroupedWithNext?: boolean;
}

// 使用自定义比较函数优化 memo
function arePropsEqual(prev: MessageItemProps, next: MessageItemProps): boolean {
    // 比较原始值和关键字段，而不是整个对象引用
    return (
        prev.message.id === next.message.id &&
        prev.message.message === next.message.message &&
        prev.message.is_deleted === next.message.is_deleted &&
        prev.message.edited_at === next.message.edited_at &&
        prev.message.reactions === next.message.reactions &&
        prev.message.link_previews === next.message.link_previews &&
        prev.message.image_meta === next.message.image_meta &&
        prev.isSelf === next.isSelf &&
        prev.isGrouped === next.isGrouped &&
        prev.isGroupedWithNext === next.isGroupedWithNext
    );
}

export const MessageItem = memo(({ message, isSelf, isGrouped, isGroupedWithNext }: MessageItemProps) => {
    const messageRef = useRef<HTMLDivElement>(null);

    // 提取原始值用于依赖
    const messageId = message.id;
    const messageText = message.message;
    const isDeleted = message.is_deleted;
    const editedAt = message.edited_at;
    const replyToId = message.reply_to_id;
    const replyDetails = message.reply_details;
    const imageMeta = message.image_meta;
    const linkPreviews = message.link_previews;

    // 渲染消息内容 - 使用原始值作为依赖
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

        // 添加回复引用
        if (replyToId && replyDetails) {
            html = renderReplyQuote(replyDetails, replyToId) + html;
        }

        // Append previews
        if (previews.length > 0) {
            html += '<div class="message-previews">' + previews.join('') + '</div>';
        }

        return html;
    }, [messageId, messageText, isDeleted, replyToId, replyDetails, imageMeta, linkPreviews]);

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

            // 渲染 BMO 表情
            const bmoji = (window as any).Bmoji;
            if (bmoji && typeof bmoji.renderAll === 'function') {
                const bmoSpans = el.querySelectorAll('.bmo:not(.bmo-rendered)');
                if (bmoSpans.length > 0) {
                    bmoji.renderAll(el, { width: 21, height: 21 });
                    el.querySelectorAll('.bmo').forEach(span => {
                        span.classList.add('bmo-rendered');
                    });
                }
            }
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

    // 处理图片点击 (Lightbox) - 需要 cleanup，单独放
    useEffect(() => {
        const el = messageRef.current;
        if (!el) return;

        const imgs = el.querySelectorAll('.full-image');
        if (imgs.length === 0) return;

        const imageUrls = Array.from(imgs).map(img => (img as HTMLImageElement).src);
        const handlers: Array<{ el: Element, fn: (e: Event) => void }> = [];

        imgs.forEach((img, index) => {
            const handler = (e: Event) => {
                e.preventDefault();
                e.stopPropagation();
                showImageViewer(imageUrls, index);
            };
            img.addEventListener('click', handler);
            (img as HTMLElement).style.cursor = 'zoom-in';
            handlers.push({ el: img, fn: handler });
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
        return /^(\[img\]|\[emoji\])[\s\S]+?(\[\/img\]|\[\/emoji\])$/i.test(raw) && !replyToId;
    }, [messageText, isDeleted, replyToId]);

    // 时间戳
    const timeText = formatDate(message.timestamp, 'time') +
        (editedAt && !isDeleted ? ' (已编辑)' : '');
    const fullTimeText = formatDate(message.timestamp, 'full');

    // 头像 URL
    const avatarUrl = getAvatarUrl(message.avatar, 'l');

    // 昵称颜色
    const nickColor = message.color || 'var(--primary-color)';

    // 在线状态逻辑已移至 UserAvatar 组件
    // const isOnline = ...


    const handleContextMenu = useCallback((e: MouseEvent) => {
        let imageUrl: string | null = null;
        let bmoCode: string | null = null;
        const target = e.target as HTMLElement;

        if (target.tagName === 'IMG') {
            imageUrl = (target as HTMLImageElement).src;
        } else if (target.classList.contains('bmo')) {
            bmoCode = target.dataset.code || null;
        } else if (target.classList.contains('emoji') || target.style.backgroundImage) {
            const bg = window.getComputedStyle(target).backgroundImage;
            const match = bg.match(/url\(["']?(.*?)["']?\)/);
            if (match && match[1]) {
                imageUrl = match[1];
            }
        }

        // 移动端：只有长按图片/表情才显示自定义菜单，文本则允许原生行为（选择复制）
        if (isMobile() && !imageUrl && !bmoCode) {
            return;
        }

        e.preventDefault();
        showContextMenu(e.clientX, e.clientY, String(messageId), imageUrl, bmoCode);
    }, [messageId]);

    // ----------------------------------------------------------------------------
    // Swipe to Reply Logic
    // ----------------------------------------------------------------------------

    const swipeState = useRef({
        startX: 0,
        startY: 0,
        currentTranslate: 0,
        isSwiping: false,
        startTime: 0,
    });

    // 触发回复
    const triggerReply = useCallback(() => {
        // 使用 peek() 避免订阅信号
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
        // Focus textarea
        const textarea = document.querySelector('#dollars-main-chat textarea') as HTMLTextAreaElement;
        if (textarea) textarea.focus();
    }, [messageId, messageText, message.uid, message.nickname, message.avatar]);

    const handleTouchStart = useCallback((e: TouchEvent) => {
        if (e.touches.length !== 1) return;
        // Don't swipe if touching interactive elements
        if ((e.target as HTMLElement).closest('.reaction-item, button')) return;

        swipeState.current = {
            startX: e.touches[0].clientX,
            startY: e.touches[0].clientY,
            currentTranslate: 0,
            isSwiping: false,
            startTime: Date.now(),
        };

        if (messageRef.current) {
            messageRef.current.style.transition = 'none';
        }
    }, []);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!messageRef.current) return;

        const deltaX = e.touches[0].clientX - swipeState.current.startX;
        const deltaY = e.touches[0].clientY - swipeState.current.startY;

        // Determine if scrolling or swiping
        if (!swipeState.current.isSwiping) {
            if (Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
                swipeState.current.isSwiping = true;
            } else {
                return; // Let native scroll handle it
            }
        }

        if (swipeState.current.isSwiping) {
            e.preventDefault(); // Prevent scroll while swiping

            // Apply elastic resistance
            const translate = deltaX < 0
                ? -60 * (1 - Math.exp(-(-deltaX / 150)))
                : 0;

            swipeState.current.currentTranslate = translate;
            messageRef.current.style.transform = `translateX(${translate}px)`;

            // Handle indicator
            const indicatorEl = messageRef.current.querySelector('.swipe-reply-indicator') as HTMLElement;
            if (indicatorEl) {
                const progress = Math.min(Math.abs(translate) / 40, 1);
                indicatorEl.style.opacity = String(progress);
                indicatorEl.style.transform = `translateY(-50%) scale(${0.5 + 0.5 * progress})`;
            }
        }
    }, []);

    const handleTouchEnd = useCallback((e: TouchEvent) => {
        if (!messageRef.current) return;

        messageRef.current.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        messageRef.current.style.transform = '';

        // Reset indicator
        const indicatorEl = messageRef.current.querySelector('.swipe-reply-indicator') as HTMLElement;
        if (indicatorEl) {
            indicatorEl.style.transition = 'all 0.2s ease';
            indicatorEl.style.opacity = '0';
            indicatorEl.style.transform = 'translateY(-50%) scale(0.5)';
        }

        const touch = e.changedTouches[0];
        const dist = Math.sqrt(
            Math.pow(touch.clientX - swipeState.current.startX, 2) +
            Math.pow(touch.clientY - swipeState.current.startY, 2)
        );

        const duration = Date.now() - swipeState.current.startTime;
        // Tap condition: not swiping, short duration, AND small movement
        const isTap = !swipeState.current.isSwiping && duration < 300 && dist < 10;

        if (swipeState.current.isSwiping) {
            if (swipeState.current.currentTranslate < -35) {
                triggerReply();
            }
        } else if (isTap) {
            // Mobile tap to open menu (except images/links/quotes/avatars/masks)
            const target = e.target as HTMLElement;
            const isImage = target.tagName === 'IMG' || target.closest('.full-image');
            const isLink = target.closest('a');
            const isQuote = target.closest('.chat-quote[data-jump-to-id]');
            const isAvatar = target.closest('.avatar');
            const isMask = target.closest('.text_mask');

            if (!isImage && !isLink && !isQuote && !isAvatar && !isMask) {
                // If menu is already open, don't open a new one (let click close it)
                if (isContextMenuOpen.peek()) return;
                // Don't open context menu if profile card or smiley panel is open (let click close them)
                if (isSmileyPanelOpen.peek() || profileCardUserId.peek()) return;

                // Prevent ghost click that might trigger the menu immediately
                if (e.cancelable) e.preventDefault();

                showContextMenu(touch.clientX, touch.clientY, String(messageId), null);
            }
        }

        swipeState.current.isSwiping = false;
    }, [triggerReply, messageId]);

    const className = [
        'chat-message',
        isSelf && 'self',
        isGrouped && 'is-grouped-with-prev',
        isGroupedWithNext && 'is-grouped-with-next',
        editedAt && !isDeleted && 'is-edited',
        newMessageIds.value.has(messageId) && 'new-message',
        pendingMessageIds.value.has(messageId) && 'pending',
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
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

                <div class={`bubble ${isSticker ? 'sticker-mode' : ''}`}>
                    {/* 气泡尾巴 */}
                    <svg viewBox="0 0 11 20" width="11" height="20" class="bubble-tail">
                        <use href="#message-tail-filled" />
                    </svg>

                    {/* 内部昵称 */}
                    <span class="bubble-nickname" style={{ '--nick-color': nickColor } as any}>
                        {message.nickname}
                    </span>

                    {/* 消息内容 */}
                    <div
                        class="text-content"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />

                    {/* 内部时间戳 */}
                    <span class="bubble-timestamp" title={fullTimeText}>
                        {timeText}
                    </span>
                </div>



                {/* 表情反应 */}
                {message.reactions && message.reactions.length > 0 && (
                    <div class="reactions-container likes_grid">
                        {/* 按 emoji 分组 */}
                        {Object.entries(
                            message.reactions.reduce((acc, r) => {
                                if (!acc[r.emoji]) acc[r.emoji] = [];
                                acc[r.emoji].push(r);
                                return acc;
                            }, {} as Record<string, typeof message.reactions>)
                        ).map(([emoji, users]) => (
                            <ReactionItem key={emoji} emoji={emoji} users={users} messageId={messageId} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}, arePropsEqual);

interface ReactionItemProps {
    emoji: string;
    users: Array<{ user_id: number; nickname: string; avatar?: string }>;
    messageId: number;
}

const MAX_AVATARS_SHOWN = 5;

function ReactionItem({ emoji, users, messageId }: ReactionItemProps) {
    const url = getSmileyUrl(emoji);
    const itemRef = useRef<HTMLDivElement>(null);
    const isBmo = emoji.startsWith('(bmo');

    // 使用 peek() 避免订阅信号
    const isSelected = users.some(u => String(u.user_id) === String(userInfo.peek().id));

    // 分离有头像和无头像的用户
    const usersWithAvatar = users.filter(u => u.avatar);
    const anonymousCount = users.length - usersWithAvatar.length;

    // 限制显示的头像数量
    const avatarsToShow = usersWithAvatar.slice(0, MAX_AVATARS_SHOWN);
    const extraAvatarCount = usersWithAvatar.length - MAX_AVATARS_SHOWN;

    // 计算额外人数显示 (超出的头像用户 + 匿名用户)
    const extraCount = Math.max(0, extraAvatarCount) + anonymousCount;

    useEffect(() => {
        const el = itemRef.current;
        if (!el) return;

        // Bmoji rendering
        if (isBmo && (window as any).Bmoji) {
            (window as any).Bmoji.renderAll(el, { width: 20, height: 20 });
        }

        // 设置 tooltip 内容
        const tooltipHtml = generateReactionTooltip(users);
        el.setAttribute('data-original-title', tooltipHtml);

        // 初始化 jQuery Tooltip (如果存在)
        // @ts-ignore
        const $ = window.$;
        if (typeof $ !== 'undefined' && typeof $.fn.tooltip === 'function') {
            try {
                const $el = $(el);
                // 销毁旧的 tooltip 实例以防止重复
                try { $el.tooltip('dispose'); } catch (e) { }
                try { $el.tooltip('destroy'); } catch (e) { }

                $el.tooltip({
                    container: 'body',
                    html: true,
                    placement: 'top',
                    animation: true,
                    trigger: 'manual',
                    template: '<div class="tooltip dollars-tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
                });

                let hideTimeout: any;
                const scheduleHide = () => {
                    hideTimeout = setTimeout(() => { $el.tooltip('hide'); }, 300);
                };

                const mouseEnterHandler = () => {
                    clearTimeout(hideTimeout);
                    $el.tooltip('show');
                    const tooltipData = $el.data('tooltip') || $el.data('bs.tooltip');
                    if (tooltipData) {
                        const $tip = tooltipData.$tip || (typeof tooltipData.tip === 'function' ? $(tooltipData.tip()) : null);
                        if ($tip) {
                            $tip.off('mouseenter.dollars mouseleave.dollars');
                            $tip.on('mouseenter.dollars', () => clearTimeout(hideTimeout));
                            $tip.on('mouseleave.dollars', () => scheduleHide());
                        }
                    }
                };

                const mouseLeaveHandler = () => {
                    scheduleHide();
                };

                $el.on('mouseenter', mouseEnterHandler);
                $el.on('mouseleave', mouseLeaveHandler);

                return () => {
                    $el.off('mouseenter', mouseEnterHandler);
                    $el.off('mouseleave', mouseLeaveHandler);
                    try { $el.tooltip('hide'); } catch (e) { }
                };
            } catch (e) {
                // ignore
            }
        }
    }, [users, isBmo]);

    const handleToggle = async (e: MouseEvent) => {
        e.stopPropagation();
        await toggleReaction(messageId, emoji);
    };

    return (
        <div
            ref={itemRef}
            class={`reaction-item item ${isSelected ? 'selected' : ''}`}
            data-emoji={emoji}
            data-toggle="tooltip"
            title="" // Leave title empty as we use data-original-title
            onClick={handleToggle}
        >
            <span
                class="emoji"
                style={url ? { backgroundImage: `url('${url}')` } : undefined}
            >
                {!url && !isBmo && emoji}
                {isBmo && <span class="bmo" data-code={emoji}></span>}
            </span>

            {/* 头像列表 */}
            {avatarsToShow.length > 0 && (
                <span class="reaction-avatars">
                    {avatarsToShow.map((u, i) => (
                        <img
                            key={u.user_id}
                            class="reaction-avatar"
                            src={getAvatarUrl(u.avatar!, 's')}
                            alt={u.nickname}
                            style={{ zIndex: MAX_AVATARS_SHOWN - i }}
                        />
                    ))}
                </span>
            )}

            {/* 纯数字计数 (无头像时) 或 额外人数 */}
            {avatarsToShow.length === 0 ? (
                <span class="num">{users.length}</span>
            ) : extraCount > 0 ? (
                <span class="num extra">+{extraCount}</span>
            ) : null}
        </div>
    );
}

