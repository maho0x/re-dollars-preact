import { Fragment } from 'preact';
import { useRef, useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';
import {
    currentDateLabel,
    showScrollBottomBtn,
    manualScrollToBottom,
    unreadWhileScrolled,
    unreadJumpList,
    timelineIsLive,
    historyOldestId,
    historyNewestId,
    historyFullyLoaded,
    setMessages,
    pendingJumpToMessage,
    scrollButtonMode,
    clearBrowsePosition,
    getFirstUnreadId,
    hasUnreadMessages,
    updateLastReadId,
    messageIds,
    getUnreadMessageCount
} from '@/stores/chat';
import { inputAreaHeight } from '@/stores/ui';
import { fetchRecentMessages } from '@/utils/api';
import { blockedUsers } from '@/stores/user';
import { syncPresenceSubscriptions } from '@/hooks/useWebSocket';

export function FloatingUI() {
    // 保留上一次的日期文本，用于淡出动画
    const lastDateLabel = useRef('');
    const isDateVisible = useSignal(false);

    useEffect(() => {
        const label = currentDateLabel.value;
        if (label) {
            lastDateLabel.current = label;
            isDateVisible.value = true;
        } else {
            isDateVisible.value = false;
        }
    }, [currentDateLabel.value]);

    /**
     * Telegram-style 滚动按钮处理
     * - Mode 'to-unread': 跳转到第一条未读消息
     * - Mode 'to-bottom': 跳转到最新消息
     */
    const handleScrollBottom = async (e: Event) => {
        e.preventDefault();

        // Mode 1: 跳转到未读消息
        if (scrollButtonMode.value === 'to-unread' && hasUnreadMessages()) {
            const firstUnreadId = getFirstUnreadId();
            if (firstUnreadId) {
                pendingJumpToMessage.value = firstUnreadId;
                // 跳转后切换到 to-bottom 模式
                scrollButtonMode.value = 'to-bottom';
                return;
            }
        }

        // Mode 2: 跳转到底部
        // 清除浏览位置 (已到达底部)
        clearBrowsePosition();

        // 更新已读位置到最新消息
        const ids = messageIds.value;
        if (ids.length > 0) {
            updateLastReadId(ids[ids.length - 1]);
        }

        // 如果已经在 live 模式，直接平滑滚动到底部
        if (timelineIsLive.value) {
            manualScrollToBottom.value++;
            return;
        }

        // 非 live 模式：重新加载最新消息
        try {
            const recentMessages = await fetchRecentMessages(50);
            if (recentMessages.length > 0) {
                const filtered = recentMessages.filter(m => !blockedUsers.value.has(String(m.uid)));
                setMessages(filtered);

                if (filtered.length > 0) {
                    historyOldestId.value = filtered[0].id;
                    historyNewestId.value = filtered[filtered.length - 1].id;
                }
                historyFullyLoaded.value = false;
                timelineIsLive.value = true;
                unreadWhileScrolled.value = 0;
                showScrollBottomBtn.value = false;

                syncPresenceSubscriptions();

                // 等待 DOM 更新后滚动到底部
                requestAnimationFrame(() => {
                    manualScrollToBottom.value++;
                });
            }
        } catch (e) {
            // ignore
        }
    };

    // 跳转到下一个提及消息
    const handleScrollToMention = (e: Event) => {
        e.preventDefault();
        const jumpList = unreadJumpList.value;
        if (jumpList.length === 0) return;
        const nextMentionId = jumpList[0];
        unreadJumpList.value = jumpList.slice(1);
        pendingJumpToMessage.value = nextMentionId;
    };

    // 计算按钮位置
    const bottomBtnBottom = inputAreaHeight.value + 20;
    const mentionBtnBottom = bottomBtnBottom + 50;

    const showMentionBtn = unreadJumpList.value.length > 0;
    const scrollBtnClasses = `nav-btn ${showScrollBottomBtn.value ? 'visible' : ''} mode-${scrollButtonMode.value}`;
    // 使用 lastReadId 计算未读数量
    const unreadCount = getUnreadMessageCount();

    const getTooltip = () => {
        return scrollButtonMode.value === 'to-unread' ? '跳转到未读消息' : '跳转到最新消息';
    };

    return (
        <Fragment>
            <div id="dollars-floating-date" class={isDateVisible.value ? 'visible' : ''}>
                {lastDateLabel.current || currentDateLabel.value}
            </div>

            <div
                id="dollars-scroll-mention-btn"
                class={`nav-btn ${showMentionBtn ? 'visible' : ''}`}
                onClick={handleScrollToMention}
                style={{ bottom: `${mentionBtnBottom}px` }}
                title="跳转到提及消息"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 5v14m-7-7l7 7 7-7" />
                </svg>
                {unreadJumpList.value.length > 0 && (
                    <div id="dollars-mention-badge" style={{
                        display: 'block',
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        minWidth: '18px',
                        height: '18px',
                        borderRadius: '9px',
                        backgroundColor: 'var(--primary-color)',
                        color: '#fff',
                        fontSize: '11px',
                        fontWeight: 700,
                        lineHeight: '18px',
                        textAlign: 'center',
                        padding: '0 5px',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                    }}>
                        {unreadJumpList.value.length > 99 ? '99+' : unreadJumpList.value.length}
                    </div>
                )}
            </div>

            <div
                id="dollars-scroll-bottom-btn"
                class={scrollBtnClasses}
                onClick={handleScrollBottom}
                style={{ bottom: `${bottomBtnBottom}px` }}
                title={getTooltip()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 5v14m-7-7l7 7 7-7" />
                </svg>
                {unreadCount > 0 && (
                    <div id="dollars-unread-badge" style={{ display: 'block' }}>
                        {unreadCount > 99 ? '99+' : unreadCount}
                    </div>
                )}
            </div>
        </Fragment>
    );
}
