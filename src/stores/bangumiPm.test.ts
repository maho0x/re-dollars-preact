// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from 'vitest';

const mocks = vi.hoisted(() => ({
    fetchPmInbox: vi.fn(async () => ({ conversations: [] as any[], nextPageUrl: null })),
    fetchPmConversation: vi.fn(async () => ({
        id: '63455',
        nickname: 'Peer',
        username: 'peer',
        avatar: '',
        messages: [],
        replyForm: null,
    })),
    sendPmReply: vi.fn(),
}));

vi.mock('@/services/bangumiPm/client', () => ({
    createPm: vi.fn(),
    fetchPmConversation: mocks.fetchPmConversation,
    fetchPmInbox: mocks.fetchPmInbox,
    sendPmReply: mocks.sendPmReply,
}));

import { isChatOpen } from './chatState';
import { activeConversationId } from './conversations';
import { chatLayoutReady, isNarrowLayout, mobileChatViewActive } from './ui';
import { pmConversations, pmDetails, pmNewMessageIds, openPmConversationFromHref, openPmForUser, retryPmReply, startPmPolling, submitPmReply } from './bangumiPm';

describe('Bangumi PM polling', () => {
    beforeEach(() => {
        window.CHOBITS_UID = '1';
        isChatOpen.value = false;
        activeConversationId.value = 'dollars';
        chatLayoutReady.value = true;
        isNarrowLayout.value = false;
        mobileChatViewActive.value = false;
        pmConversations.value = [];
        pmDetails.value = {};
        pmNewMessageIds.value = new Set();
        mocks.fetchPmInbox.mockResolvedValue({ conversations: [], nextPageUrl: null });
        mocks.fetchPmInbox.mockClear();
        mocks.fetchPmConversation.mockClear();
        mocks.sendPmReply.mockReset();
    });

    it('does not load the PM inbox while a narrow Re:Dollars chat view is active', async () => {
        isNarrowLayout.value = true;
        mobileChatViewActive.value = true;
        isChatOpen.value = true;

        const stop = startPmPolling();
        await Promise.resolve();

        expect(mocks.fetchPmInbox).not.toHaveBeenCalled();
        expect(mocks.fetchPmConversation).not.toHaveBeenCalled();
        stop();
    });

    it('does not load the PM inbox before chat layout has been measured', async () => {
        chatLayoutReady.value = false;
        isNarrowLayout.value = false;
        mobileChatViewActive.value = false;
        activeConversationId.value = 'dollars';
        isChatOpen.value = true;

        const stop = startPmPolling();
        await Promise.resolve();

        expect(mocks.fetchPmInbox).not.toHaveBeenCalled();
        expect(mocks.fetchPmConversation).not.toHaveBeenCalled();
        stop();
    });

    it('does not load the PM inbox when narrow layout becomes ready in the Re:Dollars chat view', async () => {
        chatLayoutReady.value = false;
        isNarrowLayout.value = true;
        mobileChatViewActive.value = false;
        activeConversationId.value = 'dollars';
        isChatOpen.value = true;

        const stop = startPmPolling();
        await Promise.resolve();
        expect(mocks.fetchPmInbox).not.toHaveBeenCalled();

        mobileChatViewActive.value = true;
        chatLayoutReady.value = true;
        await Promise.resolve();

        expect(mocks.fetchPmInbox).not.toHaveBeenCalled();
        expect(mocks.fetchPmConversation).not.toHaveBeenCalled();
        stop();
    });

    it('loads the PM inbox when narrow layout becomes ready in the conversation list view', async () => {
        chatLayoutReady.value = false;
        isNarrowLayout.value = true;
        mobileChatViewActive.value = false;
        activeConversationId.value = 'dollars';
        isChatOpen.value = true;

        const stop = startPmPolling();
        chatLayoutReady.value = true;

        await vi.waitFor(() => expect(mocks.fetchPmInbox).toHaveBeenCalledOnce());
        stop();
    });

    it('refreshes only the active PM detail in a narrow PM chat view', async () => {
        isNarrowLayout.value = true;
        mobileChatViewActive.value = true;
        activeConversationId.value = 'pm:63455';
        isChatOpen.value = true;

        const stop = startPmPolling();

        await vi.waitFor(() => expect(mocks.fetchPmConversation).toHaveBeenCalledOnce());
        expect(mocks.fetchPmInbox).not.toHaveBeenCalled();
        stop();
    });

    it('stays idle while chat is closed and ignores focus refreshes', async () => {
        const stop = startPmPolling();
        expect(mocks.fetchPmInbox).not.toHaveBeenCalled();

        window.dispatchEvent(new Event('focus'));
        await Promise.resolve();
        expect(mocks.fetchPmInbox).not.toHaveBeenCalled();
        stop();
    });

    it('opens a PM conversation directly from a native notice href', async () => {
        const opened = openPmConversationFromHref('https://bgm.tv/pm/conversation/777.chii');

        expect(opened).toBe(true);
        expect(activeConversationId.value).toBe('pm:777');
        expect(mocks.fetchPmConversation).toHaveBeenCalledWith('/pm/conversation/777.chii');
        expect(mocks.fetchPmInbox).toHaveBeenCalledOnce();
    });

    it('opens an existing PM conversation from cached user details', async () => {
        pmDetails.value = {
            '42': {
                id: '42',
                nickname: 'Peer',
                username: 'peer',
                avatar: '',
                messages: [],
                replyForm: null,
            },
        };

        const result = await openPmForUser({ username: 'peer', nickname: 'Peer', avatar: '' });

        expect(result).toBe('conversation');
        expect(activeConversationId.value).toBe('pm:42');
        expect(mocks.fetchPmInbox).not.toHaveBeenCalled();
        expect(mocks.fetchPmConversation).toHaveBeenCalledWith('/pm/conversation/42.chii');
    });

    it('refreshes inbox and opens an existing PM conversation by nickname', async () => {
        mocks.fetchPmInbox.mockResolvedValueOnce({
            conversations: [{
                id: '88',
                href: '/pm/conversation/88.chii',
                nickname: 'Target',
                avatar: '',
                dateText: '',
                lastMessage: 'hello',
                unreadCount: 0,
            }],
            nextPageUrl: null,
        });

        const result = await openPmForUser({ username: 'target_user', nickname: 'Target', avatar: '' });

        expect(result).toBe('conversation');
        expect(activeConversationId.value).toBe('pm:88');
        expect(mocks.fetchPmInbox).toHaveBeenCalledOnce();
        expect(mocks.fetchPmConversation).toHaveBeenCalledWith('/pm/conversation/88.chii');
    });

    it('adds an optimistic PM reply and reconciles it with the sent detail', async () => {
        pmDetails.value = {
            '42': {
                id: '42',
                nickname: 'Peer',
                username: 'peer',
                avatar: 'peer.jpg',
                messages: [],
                replyForm: { action: '/pm/conversation/42.chii', fields: {} },
            },
        };
        let resolveSend: (value: any) => void = () => {};
        mocks.sendPmReply.mockReturnValue(new Promise(resolve => { resolveSend = resolve; }));

        const pending = submitPmReply('42', 'hello');

        const optimistic = pmDetails.value['42'].messages[0];
        expect(optimistic).toMatchObject({
            isSelf: true,
            bodyText: 'hello',
            state: 'sending',
        });
        expect(optimistic.id).toMatch(/^temp-/);
        expect(pmNewMessageIds.value.has(optimistic.id)).toBe(true);

        resolveSend({
            status: 'sent',
            detail: {
                id: '42',
                nickname: 'Peer',
                username: 'peer',
                avatar: 'peer.jpg',
                messages: [{
                    id: '99',
                    isSelf: true,
                    avatar: '',
                    userHref: '/user/me',
                    bodyHtml: 'hello',
                    bodyText: 'hello',
                    presentationText: 'hello',
                    timestamp: optimistic.timestamp,
                    timestampText: '刚刚',
                }],
                replyForm: { action: '/pm/conversation/42.chii', fields: {} },
            },
        });
        await pending;

        expect(pmDetails.value['42'].messages).toHaveLength(1);
        expect(pmDetails.value['42'].messages[0].id).toBe('99');
        expect(pmDetails.value['42'].messages[0]).toMatchObject({
            stableKey: optimistic.stableKey,
            state: 'sent',
        });
        expect(pmNewMessageIds.value.has('99')).toBe(false);
    });

    it('marks an optimistic PM reply failed when Bangumi rejects it and retries from the failed bubble', async () => {
        pmDetails.value = {
            '42': {
                id: '42',
                nickname: 'Peer',
                username: 'peer',
                avatar: 'peer.jpg',
                messages: [],
                replyForm: { action: '/pm/conversation/42.chii', fields: {} },
            },
        };
        mocks.sendPmReply.mockResolvedValueOnce({ status: 'rejected', error: 'too fast' });

        const result = await submitPmReply('42', 'hello');
        const failed = pmDetails.value['42'].messages[0];

        expect(result).toEqual({ status: 'rejected', error: 'too fast' });
        expect(failed.state).toBe('failed');
        expect(failed.timestampText).toBe('发送失败');

        mocks.sendPmReply.mockResolvedValueOnce({
            status: 'sent',
            detail: {
                id: '42',
                nickname: 'Peer',
                username: 'peer',
                avatar: 'peer.jpg',
                messages: [{
                    id: '100',
                    isSelf: true,
                    avatar: '',
                    userHref: '/user/me',
                    bodyHtml: 'hello',
                    bodyText: 'hello',
                    presentationText: 'hello',
                    timestamp: failed.timestamp,
                    timestampText: '刚刚',
                }],
                replyForm: { action: '/pm/conversation/42.chii', fields: {} },
            },
        });

        await retryPmReply('42', failed.id);

        expect(mocks.sendPmReply).toHaveBeenLastCalledWith(expect.anything(), 'hello');
        expect(pmDetails.value['42'].messages).toHaveLength(1);
        expect(pmDetails.value['42'].messages[0].id).toBe('100');
    });

    it('keeps unknown PM replies pending when a forced refresh cannot confirm them', async () => {
        pmDetails.value = {
            '42': {
                id: '42',
                nickname: 'Peer',
                username: 'peer',
                avatar: 'peer.jpg',
                messages: [],
                replyForm: { action: '/pm/conversation/42.chii', fields: {} },
            },
        };
        mocks.sendPmReply.mockResolvedValueOnce({ status: 'unknown', error: 'unknown' });
        mocks.fetchPmConversation.mockResolvedValueOnce({
            id: '42',
            nickname: 'Peer',
            username: 'peer',
            avatar: 'peer.jpg',
            messages: [],
            replyForm: { action: '/pm/conversation/42.chii', fields: {} },
        } as any);

        await submitPmReply('42', 'hello');

        expect(pmDetails.value['42'].messages).toHaveLength(1);
        expect(pmDetails.value['42'].messages[0]).toMatchObject({
            bodyText: 'hello',
            state: 'sending',
        });
    });
});
