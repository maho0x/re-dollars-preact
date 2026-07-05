// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
    fetchNotifications: vi.fn(),
    markNotificationRead: vi.fn(),
    markAllNotificationsRead: vi.fn(),
}));

vi.mock('@/utils/api/messages', () => mocks);

import { unreadJumpList } from './chatState';
import { settings, userInfo } from './user';
import {
    addDollarsNotification,
    addPmNotification,
    dockIconFlashing,
    dollarsNotifications,
    loadDollarsNotifications,
    markAllNotificationCardsRead,
    markMessageAsSeenIfNotified,
    notificationCardCount,
    pmNotificationCards,
    prunePmNotifications,
} from './notifications';
import type { Notification } from '@/types';

function notification(id: number, messageId: number): Notification {
    return {
        id,
        type: 'mention',
        message_id: messageId,
        user_id: 2,
        created_at: '2026-01-01T00:00:00Z',
    } as Notification;
}

beforeEach(() => {
    userInfo.value = {
        id: '1',
        name: 'tester',
        nickname: 'Tester',
        avatar: '',
        formhash: '',
    };
    settings.value = {
        ...settings.peek(),
        notificationType: 'detail',
    };
    dollarsNotifications.value = [];
    pmNotificationCards.value = [];
    unreadJumpList.value = [];
    dockIconFlashing.value = false;
    mocks.fetchNotifications.mockReset();
    mocks.markNotificationRead.mockReset();
    mocks.markAllNotificationsRead.mockReset();
    mocks.markNotificationRead.mockResolvedValue(undefined);
    mocks.markAllNotificationsRead.mockResolvedValue(undefined);
});

describe('notification store', () => {
    it('loads new Dollars notifications once and keeps the jump list sorted', async () => {
        dollarsNotifications.value = [notification(1, 20)];
        mocks.fetchNotifications.mockResolvedValue([
            notification(1, 20),
            notification(2, 10),
            notification(3, 30),
        ]);

        await loadDollarsNotifications();

        expect(dollarsNotifications.value.map(item => item.id)).toEqual([3, 2, 1]);
        expect(unreadJumpList.value).toEqual([10, 20, 30]);
    });

    it('flashes the dock in simple mode when a notification arrives', () => {
        settings.value = { ...settings.peek(), notificationType: 'simple' };

        addDollarsNotification(notification(1, 10));

        expect(dockIconFlashing.value).toBe(true);
    });

    it('marks a visible notified message as read optimistically', () => {
        addDollarsNotification(notification(1, 10));

        markMessageAsSeenIfNotified(10);

        expect(dollarsNotifications.value).toEqual([]);
        expect(unreadJumpList.value).toEqual([]);
        expect(mocks.markNotificationRead).toHaveBeenCalledWith(1, '1');
    });

    it('upserts and prunes PM notification cards', () => {
        addPmNotification({
            id: '42',
            peerUid: 2,
            peerName: 'Peer',
            title: 'first',
            unreadCount: 1,
            href: '/pm/conversation/42.chii',
        }, 'avatar-a');
        addPmNotification({
            id: '42',
            peerUid: 2,
            peerName: 'Peer',
            title: 'second',
            unreadCount: 2,
            href: '/pm/conversation/42.chii',
        }, 'avatar-b');

        expect(pmNotificationCards.value).toEqual([{
            id: '42',
            href: '/pm/conversation/42.chii',
            nickname: 'Peer',
            avatar: 'avatar-b',
            title: 'second',
            unreadCount: 2,
        }]);
        expect(notificationCardCount.value).toBe(1);

        prunePmNotifications(new Set(['99']));

        expect(pmNotificationCards.value).toEqual([]);
        expect(notificationCardCount.value).toBe(0);
    });

    it('clears both notification queues before calling the bulk read API', async () => {
        addDollarsNotification(notification(1, 10));
        addPmNotification({
            id: '42',
            peerUid: 2,
            peerName: 'Peer',
            title: 'hello',
            unreadCount: 1,
            href: '/pm/conversation/42.chii',
        });

        await markAllNotificationCardsRead();

        expect(dollarsNotifications.value).toEqual([]);
        expect(pmNotificationCards.value).toEqual([]);
        expect(mocks.markAllNotificationsRead).toHaveBeenCalledWith('1');
    });
});
