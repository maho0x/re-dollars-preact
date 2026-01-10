import { useEffect, useCallback } from 'preact/hooks';
import { signal, computed } from '@preact/signals';
import { escapeHTML, getAvatarUrl, stripBBCode, decodeHTML } from '@/utils/format';
import { fetchNotifications, markNotificationRead, markAllNotificationsRead } from '@/utils/api';
import { toggleChat, unreadJumpList, pendingJumpToMessage } from '@/stores/chat';
import { userInfo, settings } from '@/stores/user';
import type { Notification } from '@/types';

// Notification store
export const notifications = signal<Notification[]>([]);
export const notificationCount = computed(() => notifications.value.length);

// Dock 图标闪烁状态 (用于精简模式)
export const dockIconFlashing = signal(false);

// Initialize and load notifications
export async function loadNotifications() {
    if (!userInfo.value.id) return;

    try {
        const data = await fetchNotifications(userInfo.value.id);
        if (Array.isArray(data)) {
            // Add new notifications, avoiding duplicates
            const existingIds = new Set(notifications.value.map(n => n.id));
            const newNotifs = data.filter(n => !existingIds.has(n.id));
            notifications.value = [...newNotifs.reverse(), ...notifications.value];
            updateUnreadJumpList();

            // 精简模式下，如果有通知则闪烁图标
            if (settings.value.notificationType === 'simple' && notifications.value.length > 0) {
                dockIconFlashing.value = true;
            }
        }
    } catch (e) {
        // ignore
    }
}

// Add a notification (from WebSocket)
export function addNotification(n: Notification) {
    // Avoid duplicates
    if (notifications.value.some(existing => existing.id === n.id)) return;
    notifications.value = [n, ...notifications.value];
    updateUnreadJumpList();

    // 精简模式下闪烁图标
    if (settings.value.notificationType === 'simple') {
        dockIconFlashing.value = true;
    }
}

// Remove a notification
export function removeNotification(id: number) {
    notifications.value = notifications.value.filter(n => n.id !== id);
    updateUnreadJumpList();
}

// Clear all notifications
export function clearAllNotifications() {
    notifications.value = [];
    unreadJumpList.value = [];
    dockIconFlashing.value = false;
}

// 停止闪烁 (当用户打开聊天窗口时调用)
export function stopDockFlashing() {
    dockIconFlashing.value = false;
}

// Update the unreadJumpList in chat store
function updateUnreadJumpList() {
    unreadJumpList.value = notifications.value
        .map(n => {
            const id = n.message_id || n.message?.id;
            return Number(id);
        })
        .filter((id): id is number => !isNaN(id) && id > 0)
        .sort((a, b) => a - b);
}

/**
 * 当消息在聊天中变为可见时，检查是否有对应的未读通知
 * 如有，自动标记为已读并移除
 */
export function markMessageAsSeenIfNotified(messageId: number) {
    // 查找是否有对应此消息的通知
    const notif = notifications.value.find(n => {
        const nMsgId = Number(n.message_id || n.message?.id);
        return nMsgId === messageId;
    });

    if (!notif) return;

    // 移除通知（会自动更新 unreadJumpList）
    removeNotification(notif.id);

    // 调用 API 标记已读（静默失败）
    if (userInfo.value.id) {
        markNotificationRead(notif.id, userInfo.value.id).catch(() => {});
    }
}

export function NotificationManager() {
    // Load notifications on mount (only if not 'off' mode)
    // Note: In 'detail' and 'simple' modes, loadNotifications is called from App.tsx
    // This effect is kept for backward compatibility and edge cases
    useEffect(() => {
        // Don't auto-load here anymore - it's handled in App.tsx based on settings
        // loadNotifications();
    }, []);

    // Mark single notification as read
    const handleMarkRead = useCallback(async (notif: Notification) => {
        removeNotification(notif.id);

        if (userInfo.value.id) {
            try {
                await markNotificationRead(notif.id, userInfo.value.id);
            } catch (e) {
                // ignore
            }
        }
    }, []);

    // Handle view action
    const handleView = useCallback(async (notif: Notification) => {
        handleMarkRead(notif);
        toggleChat(true);

        const messageId = notif.message_id || notif.message?.id;
        if (messageId) {
            // 使用信号触发 ChatBody 中的跳转
            pendingJumpToMessage.value = messageId;
        }
    }, [handleMarkRead]);

    // Handle mark all read
    const handleMarkAllRead = useCallback(async () => {
        clearAllNotifications();

        if (userInfo.value.id) {
            try {
                await markAllNotificationsRead(userInfo.value.id);
            } catch (e) {
                // ignore
            }
        }
    }, []);

    const count = notificationCount.value;

    // 精简模式下不显示通知面板 (只闪烁图标)
    if (settings.value.notificationType === 'simple') {
        return null;
    }

    if (count === 0) {
        return null;
    }

    return (
        <div id="unified-notifier" class={count > 0 ? 'show' : ''}>
            <div class="un-header">
                <span>
                    通知 (<span class="un-count">{count}</span>)
                </span>
                <a
                    href="#"
                    class="un-clear-all"
                    onClick={(e) => {
                        e.preventDefault();
                        handleMarkAllRead();
                    }}
                >
                    全部已读
                </a>
            </div>
            <div class="un-body">
                <ul>
                    {notifications.value.map((notif) => (
                        <NotificationItem
                            key={notif.id}
                            notification={notif}
                            onView={() => handleView(notif)}
                            onDismiss={() => handleMarkRead(notif)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

interface NotificationItemProps {
    notification: Notification;
    onView: () => void;
    onDismiss: () => void;
}

function NotificationItem({ notification, onView, onDismiss }: NotificationItemProps) {
    const isReply = notification.type === 'reply';
    const typeLabel = isReply ? '回复了你' : '提到了你';

    // Get content text
    const rawText = stripBBCode(
        decodeHTML(notification.message?.message || notification.content || '')
    );
    const text = rawText.substring(0, 20) + (rawText.length > 20 ? '...' : '');

    // Get avatar and nickname
    const avatarSrc = getAvatarUrl(
        notification.message?.avatar || notification.avatar || '',
        'm'
    );
    const nickname = notification.message?.nickname || notification.nickname || 'Unknown';

    return (
        <li
            class="un-item"
            id={`un-item-${notification.id}`}
            data-notif-id={notification.id}
            data-message-id={notification.message_id || notification.message?.id}
        >
            <span
                class="avatarNeue avatarReSize40"
                style={{ backgroundImage: `url('${avatarSrc}')` }}
            />
            <div class="content">
                <strong class="un-widget-title">
                    {escapeHTML(nickname)}{' '}
                    <span style={{ fontWeight: 'normal', color: '#999', fontSize: '11px' }}>
                        {typeLabel}
                    </span>
                </strong>
                <span class="un-widget-message">{escapeHTML(text)}</span>
                <div class="actions">
                    <a
                        href="#"
                        class="un-action-btn btnRedSmall ll"
                        onClick={(e) => {
                            e.preventDefault();
                            onView();
                        }}
                    >
                        <span>查看</span>
                    </a>
                    <a
                        href="#"
                        class="un-action-btn btnGraySmall ll"
                        style={{ marginLeft: '6px' }}
                        onClick={(e) => {
                            e.preventDefault();
                            onDismiss();
                        }}
                    >
                        <span>忽略</span>
                    </a>
                </div>
            </div>
        </li>
    );
}
