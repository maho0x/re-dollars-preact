import { computed, signal } from '@preact/signals';
import { unreadJumpList } from '@/stores/chatState';
import { settings, userInfo } from '@/stores/user';
import { fetchNotifications, markAllNotificationsRead, markNotificationRead } from '@/utils/api/messages';
import type { BangumiNotifyPmItem } from '@/services/bangumiPm/notify';
import type { Notification } from '@/types';
import type { PmNotification } from '@/types/pm';

export const dollarsNotifications = signal<Notification[]>([]);
export const pmNotificationCards = signal<PmNotification[]>([]);
export const dockIconFlashing = signal(false);
export const notificationCardCount = computed(
    () => dollarsNotifications.value.length + pmNotificationCards.value.length
);

function notificationMessageId(notification: Notification) {
    return Number(notification.message_id || notification.message?.id || 0);
}

function syncUnreadJumpList() {
    unreadJumpList.value = dollarsNotifications.value
        .map(notificationMessageId)
        .filter(id => Number.isFinite(id) && id > 0)
        .sort((a, b) => a - b);
}

function shouldFlashDock() {
    return settings.value.notificationType === 'simple';
}

export function stopDockFlashing() {
    dockIconFlashing.value = false;
}

export async function loadDollarsNotifications() {
    if (!userInfo.value.id) return;

    const data = await fetchNotifications(userInfo.value.id);
    if (!Array.isArray(data) || !data.length) return;

    const existingIds = new Set(dollarsNotifications.peek().map(item => item.id));
    const incoming = data.filter(item => !existingIds.has(item.id));
    if (!incoming.length) return;

    dollarsNotifications.value = [...incoming.reverse(), ...dollarsNotifications.peek()];
    syncUnreadJumpList();

    if (shouldFlashDock()) {
        dockIconFlashing.value = true;
    }
}

export function addDollarsNotification(notification: Notification) {
    if (dollarsNotifications.peek().some(item => item.id === notification.id)) return;

    dollarsNotifications.value = [notification, ...dollarsNotifications.peek()];
    syncUnreadJumpList();

    if (shouldFlashDock()) {
        dockIconFlashing.value = true;
    }
}

export function removeDollarsNotification(id: number) {
    if (!dollarsNotifications.peek().some(item => item.id === id)) return;
    dollarsNotifications.value = dollarsNotifications.peek().filter(item => item.id !== id);
    syncUnreadJumpList();
}

export function clearDollarsNotifications() {
    if (dollarsNotifications.peek().length) {
        dollarsNotifications.value = [];
    }
    unreadJumpList.value = [];
    dockIconFlashing.value = false;
}

export function addPmNotification(item: BangumiNotifyPmItem, avatar = '') {
    const card: PmNotification = {
        id: item.id,
        href: item.href,
        nickname: item.peerName,
        avatar,
        title: item.title,
        unreadCount: item.unreadCount,
    };
    const rest = pmNotificationCards.peek().filter(existing => existing.id !== item.id);
    pmNotificationCards.value = [card, ...rest];
}

export function dismissPmNotification(id: string) {
    if (!pmNotificationCards.peek().some(item => item.id === id)) return;
    pmNotificationCards.value = pmNotificationCards.peek().filter(item => item.id !== id);
}

export function clearPmNotifications() {
    if (pmNotificationCards.peek().length) {
        pmNotificationCards.value = [];
    }
}

export function prunePmNotifications(unreadIds: Set<string>) {
    if (!pmNotificationCards.peek().some(card => !unreadIds.has(card.id))) return;
    pmNotificationCards.value = pmNotificationCards.peek().filter(card => unreadIds.has(card.id));
}

export async function markDollarsNotificationRead(notification: Notification) {
    removeDollarsNotification(notification.id);

    if (!userInfo.value.id) return;
    try {
        await markNotificationRead(notification.id, userInfo.value.id);
    } catch {
        // Optimistic local dismissal is enough for transient API failures.
    }
}

export async function markAllNotificationCardsRead() {
    clearDollarsNotifications();
    clearPmNotifications();

    if (!userInfo.value.id) return;
    try {
        await markAllNotificationsRead(userInfo.value.id);
    } catch {
        // Optimistic local dismissal is enough for transient API failures.
    }
}

export function markMessageAsSeenIfNotified(messageId: number) {
    const notification = dollarsNotifications.peek().find(item => notificationMessageId(item) === messageId);
    if (!notification) return;

    removeDollarsNotification(notification.id);

    if (userInfo.value.id) {
        markNotificationRead(notification.id, userInfo.value.id).catch(() => {});
    }
}
