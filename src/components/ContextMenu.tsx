import { useEffect, useLayoutEffect, useCallback, useRef } from 'preact/hooks';
import {
    isContextMenuOpen,
    isContextMenuClosing,
    contextMenuPosition,
    contextMenuTargetId,
    contextMenuImageUrl,
    contextMenuBmoCode,
    hideContextMenu,
    showReactionPicker,
    hideReactionPicker,
    isReactionPickerOpen,
} from '@/stores/ui';
import { setReplyTo, setEditingMessage, messageMap, messageStore } from '@/stores/chat';
import { userInfo } from '@/stores/user';
import { toggleReaction as apiToggleReaction, deleteMessage as apiDeleteMessage } from '@/utils/api';
import { CONTEXT_MENU_REACTIONS, SVGIcons } from '@/utils/constants';
import { getSmileyUrl } from '@/utils/smilies';
import { stripQuotes } from '@/utils/bbcode';
import { decodeHTML } from '@/utils/format';
import { addFavorite } from '@/stores/favorites';
import { ReactionPickerFloating } from './ReactionPickerFloating';

export function ContextMenu() {
    const menuRef = useRef<HTMLDivElement>(null);

    // 点击外部关闭
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const menu = menuRef.current;
            const picker = document.getElementById('dollars-reaction-picker-floating');
            if (menu && !menu.contains(e.target as Node) && (!picker || !picker.contains(e.target as Node))) {
                hideContextMenu();
            }
        };

        if (isContextMenuOpen.value) {
            document.addEventListener('click', handleClick);
        }

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [isContextMenuOpen.value]);

    // 防止溢出屏幕
    useLayoutEffect(() => {
        if (isContextMenuOpen.value && menuRef.current) {
            const el = menuRef.current;
            const rect = el.getBoundingClientRect();
            let { x, y } = contextMenuPosition.value;
            let hasChanged = false;

            // X 轴修正
            if (x + rect.width > window.innerWidth) {
                x = Math.max(10, window.innerWidth - rect.width - 10); // 右侧留 10px 边距
                hasChanged = true;
            }
            if (x < 10) {
                x = 10;
                hasChanged = true;
            }

            // Y 轴修正
            if (y + rect.height > window.innerHeight) {
                y = Math.max(10, window.innerHeight - rect.height - 10); // 底部留 10px 边距
                hasChanged = true;
            }
            if (y < 10) {
                y = 10;
                hasChanged = true;
            }

            if (hasChanged) {
                el.style.left = `${x}px`;
                el.style.top = `${y}px`;
            }
        }
    }, [isContextMenuOpen.value, contextMenuPosition.value]);

    // Render BMO emojis when menu opens
    useEffect(() => {
        if (isContextMenuOpen.value && menuRef.current) {
            setTimeout(() => {
                if ((window as any).Bmoji && menuRef.current) {
                    (window as any).Bmoji.renderAll(menuRef.current, { width: 24, height: 24 });
                }
            }, 0);
        }
    }, [isContextMenuOpen.value]);

    const handleReaction = useCallback(async (emoji: string) => {
        const targetId = contextMenuTargetId.value;
        if (!targetId) return;

        hideContextMenu();
        await apiToggleReaction(Number(targetId), emoji);
    }, []);

    const handleMoreReactions = useCallback((e: MouseEvent) => {
        e.stopPropagation();

        // 如果已打开则关闭
        if (isReactionPickerOpen.value) {
            hideReactionPicker();
            return;
        }

        const button = e.currentTarget as HTMLElement;
        const reactionsRow = button.closest('.context-menu-reactions');

        if (reactionsRow) {
            const rect = reactionsRow.getBoundingClientRect();
            // Align with the left edge of the reactions row (same as items)
            // 8px gap matches the gap between reactions and items
            showReactionPicker(rect.left, rect.bottom + 8, rect.width);
        }
    }, []);

    const handleReply = useCallback(() => {
        const targetId = contextMenuTargetId.value;
        if (!targetId) return;

        hideContextMenu();

        const msgData = messageStore.value.get(targetId);
        const messageEl = document.getElementById(`db-${targetId}`);
        if (!msgData || !messageEl) return;

        const uid = messageEl.dataset.uid || '';
        const user = messageEl.querySelector('.nickname a')?.textContent?.trim() || '';
        const avatar = (messageEl.querySelector('.avatar') as HTMLImageElement)?.src || '';

        const text = stripQuotes(decodeHTML(msgData.raw))
            .replace(/\[img\].*?\[\/img\]/gi, '[图片]')
            .replace(/\n/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        setReplyTo({
            id: targetId,
            uid,
            user,
            text,
            raw: msgData.raw,
            avatar,
        });
    }, []);

    const handleEdit = useCallback(() => {
        const targetId = contextMenuTargetId.value;
        if (!targetId) return;

        hideContextMenu();

        const msgData = messageStore.value.get(targetId);
        if (!msgData) return;

        const rawContent = msgData.raw;
        const quoteRegex = /^(\[quote(?:=[^\]]*)?\][\s\S]*?\[\/quote\])\s*/i;
        const match = rawContent.match(quoteRegex);

        let hiddenQuote = '';
        let editableText = rawContent;

        if (match) {
            hiddenQuote = match[1];
            editableText = rawContent.substring(match[0].length);
        }

        setEditingMessage({
            id: targetId,
            raw: editableText,
            hiddenQuote
        });
    }, []);

    const handleCopy = useCallback(async () => {
        const targetId = contextMenuTargetId.value;
        if (!targetId) return;

        hideContextMenu();

        const msgData = messageStore.value.get(targetId);
        if (!msgData) return;

        const plainText = decodeHTML(msgData.raw).replace(/\[.*?\]/g, '').trim();

        try {
            await navigator.clipboard.writeText(plainText);
        } catch (e) {
            // ignore
        }
    }, []);

    const handleDelete = useCallback(async () => {
        const targetId = contextMenuTargetId.value;
        if (!targetId) return;

        hideContextMenu(); // Close first to improve responsiveness

        if (!confirm('确认撤回这条消息吗？')) {
            return;
        }

        const result = await apiDeleteMessage(Number(targetId));
        if (!result.status) {
            alert(result.error || '撤回失败');
        }
    }, []);

    const handleFavorite = useCallback((e: MouseEvent) => {
        // e.stopPropagation(); // Don't stop propagation immediately so we can close menu? No, handleFavorite calls hideContextMenu.
        const button = e.currentTarget as HTMLButtonElement;
        const originalText = button.querySelector('span:not(.context-icon)')?.textContent || '收藏表情';

        if (contextMenuBmoCode.value) {
            // Logic adapted from legacy script for BMO
            const bmoCode = contextMenuBmoCode.value;
            try {
                const key = 'chii_saved_bmo';
                const saved = JSON.parse(localStorage.getItem(key) || '[]');

                if (!saved.some((i: any) => i.code === bmoCode)) {
                    saved.push({ code: bmoCode, name: bmoCode });
                    localStorage.setItem(key, JSON.stringify(saved));

                    // Refresh if panel is open/active? 
                    // Legacy code refreshed the tab if it was 'BMO', but we don't have easy access to that here.

                    const span = button.querySelector('span:not(.context-icon)');
                    if (span) span.textContent = '已存入BMO面板';
                } else {
                    const span = button.querySelector('span:not(.context-icon)');
                    if (span) span.textContent = '已存在';
                }
            } catch (err) {
                const span = button.querySelector('span:not(.context-icon)');
                if (span) span.textContent = '收藏失败';
            }
        } else if (contextMenuImageUrl.value) {
            // Logic for regular images
            try {
                addFavorite(contextMenuImageUrl.value);
                const span = button.querySelector('span:not(.context-icon)');
                if (span) span.textContent = '已收藏';
            } catch (err) {
                const span = button.querySelector('span:not(.context-icon)');
                if (span) span.textContent = '收藏失败';
            }
        }

        // Close menu after a delay to show feedback
        setTimeout(() => {
            hideContextMenu();
            // Reset text (though component unmounts, so maybe not needed, but good for cleanup)
            // But since we hide it, it will re-render next time.
        }, 1000);
    }, []);



    if (!isContextMenuOpen.value) {
        return null;
    }

    const { x, y } = contextMenuPosition.value;
    const targetId = contextMenuTargetId.value;
    const msg = targetId ? messageMap.value.get(Number(targetId)) : null;
    const isSelf = msg && String(msg.uid) === String(userInfo.value.id);
    const hasImage = !!contextMenuImageUrl.value || !!contextMenuBmoCode.value;

    return (
        <>
            <div
                id="dollars-context-menu"
                ref={menuRef}
                class={`visible has-items-wrapper ${hasImage ? 'image-mode' : ''} ${isContextMenuClosing.value ? 'closing' : ''}`}
                style={{ left: `${x}px`, top: `${y}px`, pointerEvents: 'auto' }}
            >
                {/* 快捷表情行 - Telegram 风格 */}
                {targetId && (
                    <div class="context-menu-reactions">
                        {CONTEXT_MENU_REACTIONS.map((emoji) => {
                            const url = getSmileyUrl(emoji);
                            const isBmo = emoji.startsWith('(bmo');
                            return (
                                <div
                                    key={emoji}
                                    class="reaction-item"
                                    data-emoji={emoji}
                                    onClick={() => handleReaction(emoji)}
                                >
                                    {url && <img src={url} alt={emoji} />}
                                    {isBmo && <span class="bmo" data-code={emoji}></span>}
                                </div>
                            );
                        })}
                        {/* More button */}
                        <button
                            class={`context-menu-reactions-more ${isReactionPickerOpen.value ? 'expanded' : ''}`}
                            onClick={handleMoreReactions}
                            title="更多表情"
                            dangerouslySetInnerHTML={{ __html: SVGIcons.expand }}
                        />
                    </div>
                )}

                {/* 菜单项 */}
                {/* 菜单项 - 当表情选择器打开时隐藏 */}
                {!isReactionPickerOpen.value && (
                    <div class="context-menu-items">
                        <button data-action="reply" onClick={handleReply}>
                            <span class="context-icon" dangerouslySetInnerHTML={{ __html: SVGIcons.reply }} />
                            <span>回复</span>
                        </button>
                        <button data-action="copy" onClick={handleCopy}>
                            <span class="context-icon" dangerouslySetInnerHTML={{ __html: SVGIcons.copy }} />
                            <span>复制</span>
                        </button>

                        {hasImage && (
                            <button class="image-action" data-action="favorite" onClick={handleFavorite}>
                                <span class="context-icon" dangerouslySetInnerHTML={{ __html: SVGIcons.favorite }} />
                                <span>收藏表情</span>
                            </button>
                        )}

                        {isSelf && (
                            <>
                                <button class="auth-action" data-action="edit" onClick={handleEdit}>
                                    <span class="context-icon" dangerouslySetInnerHTML={{ __html: SVGIcons.edit }} />
                                    <span>编辑</span>
                                </button>
                                <button class="auth-action danger" data-action="delete" onClick={handleDelete}>
                                    <span class="context-icon" dangerouslySetInnerHTML={{ __html: SVGIcons.delete }} />
                                    <span>撤回</span>
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>

            {/* 浮动表情选择器 */}
            <ReactionPickerFloating />
        </>
    );
}
