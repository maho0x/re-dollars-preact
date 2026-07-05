import { useCallback } from 'preact/hooks';
import { escapeHTML, getAvatarUrl, stripBBCode, decodeHTML } from '@/utils/format';
import { isChatOpen, toggleChat, pendingJumpToMessage } from '@/stores/chatState';
import { settings } from '@/stores/user';
import { openPmConversationFromHref } from '@/stores/bangumiPm';
import {
    dollarsNotifications,
    dismissPmNotification,
    markAllNotificationCardsRead,
    markDollarsNotificationRead,
    notificationCardCount,
    pmNotificationCards,
} from '@/stores/notifications';
import type { Notification } from '@/types';
import type { PmNotification } from '@/types/pm';

export function NotificationManager() {
    const handleView = useCallback((notif: Notification) => {
        void markDollarsNotificationRead(notif);
        toggleChat(true);

        const messageId = notif.message_id || notif.message?.id;
        if (messageId) {
            pendingJumpToMessage.value = messageId;
        }
    }, []);

    const handleMarkAllRead = useCallback(async () => {
        await markAllNotificationCardsRead();
    }, []);

    const handleViewPm = useCallback((notif: PmNotification) => {
        dismissPmNotification(notif.id);
        openPmConversationFromHref(notif.href);
        toggleChat(true);
    }, []);

    const count = notificationCardCount.value;

    if (isChatOpen.value) {
        return null;
    }

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
                    {pmNotificationCards.value.map((notif) => (
                        <PmNotificationItem
                            key={`pm-${notif.id}`}
                            notification={notif}
                            onView={() => handleViewPm(notif)}
                            onDismiss={() => dismissPmNotification(notif.id)}
                        />
                    ))}
                    {dollarsNotifications.value.map((notif) => (
                        <NotificationItem
                            key={notif.id}
                            notification={notif}
                            onView={() => handleView(notif)}
                            onDismiss={() => markDollarsNotificationRead(notif)}
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

interface PmNotificationItemProps {
    notification: PmNotification;
    onView: () => void;
    onDismiss: () => void;
}

function PmNotificationItem({ notification, onView, onDismiss }: PmNotificationItemProps) {
    const rawTitle = decodeHTML(notification.title || '');
    const title = rawTitle.substring(0, 20) + (rawTitle.length > 20 ? '...' : '');
    const label = notification.unreadCount > 1 ? `发来 ${notification.unreadCount} 条短信` : '发来短信';

    return (
        <li class="un-item" data-pm-id={notification.id}>
            {notification.avatar && (
                <span
                    class="avatarNeue avatarReSize40"
                    style={{ backgroundImage: `url('${getAvatarUrl(notification.avatar, 'm')}')` }}
                />
            )}
            <div class="content">
                <strong class="un-widget-title">
                    {escapeHTML(notification.nickname || 'Bangumi 用户')}{' '}
                    <span style={{ fontWeight: 'normal', color: 'var(--dollars-text-placeholder)', fontSize: '11px' }}>
                        {label}
                    </span>
                </strong>
                <span class="un-widget-message">{escapeHTML(title)}</span>
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
                    <span style={{ fontWeight: 'normal', color: 'var(--dollars-text-placeholder)', fontSize: '11px' }}>
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
