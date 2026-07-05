import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const sendMessageMock = vi.hoisted(() => vi.fn());
const confirmSentMessageMock = vi.hoisted(() => vi.fn());
const editMessageMock = vi.hoisted(() => vi.fn());
const sendPendingMessageMock = vi.hoisted(() => vi.fn());
const uploadFileMock = vi.hoisted(() => vi.fn());
const lookupUsersByNameMock = vi.hoisted(() => vi.fn());

vi.hoisted(() => {
    Object.defineProperty(globalThis, 'window', {
        value: {
            CHOBITS_UID: '1',
            CHOBITS_USERNAME: 'tester',
        },
        configurable: true,
        writable: true,
    });
});

vi.mock('@/utils/api/messages', () => ({
    postChatMessage: sendMessageMock,
    confirmSentMessage: confirmSentMessageMock,
    editMessage: editMessageMock,
}));

vi.mock('@/utils/api/users', () => ({
    lookupUsersByName: lookupUsersByNameMock,
}));

vi.mock('@/utils/api/media', () => ({
    uploadFile: uploadFileMock,
}));

vi.mock('@/services/websocket/client', () => ({
    sendPendingMessage: sendPendingMessageMock,
}));

import { submitComposerMessage } from './sendMessage';
import {
    editingMessage,
    replyingTo,
} from '@/stores/composerState';
import {
    addMessage,
    messageMap,
} from '@/stores/messageStore';
import { userInfo } from '@/stores/user';

beforeEach(() => {
    vi.useFakeTimers();
    const storage = new Map<string, string>();
    vi.stubGlobal('localStorage', {
        getItem: vi.fn((key: string) => storage.get(key) ?? null),
        setItem: vi.fn((key: string, value: string) => storage.set(key, value)),
        removeItem: vi.fn((key: string) => storage.delete(key)),
    });
    messageMap.value = new Map();
    replyingTo.value = null;
    editingMessage.value = null;
    userInfo.value = {
        id: '1',
        name: 'tester',
        nickname: 'Tester',
        avatar: 'avatar.jpg',
        formhash: '',
    };
    sendMessageMock.mockReset();
    confirmSentMessageMock.mockReset();
    editMessageMock.mockReset();
    sendPendingMessageMock.mockReset();
    uploadFileMock.mockReset();
    lookupUsersByNameMock.mockReset();
    lookupUsersByNameMock.mockResolvedValue({});
    vi.stubGlobal('alert', vi.fn());
});

afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    vi.unstubAllGlobals();
});

describe('submitComposerMessage', () => {
    it('creates an optimistic message, posts it, and reconciles when the message is broadcast back', async () => {
        sendMessageMock.mockResolvedValue('sent');
        const clearInput = vi.fn();
        const clearMediaPreview = vi.fn();

        await submitComposerMessage({
            content: ' hello ',
            imageMeta: {},
            clearInput,
            clearMediaPreview,
        });

        const pending = [...messageMap.value.values()].find(msg => msg.state === 'sending');
        expect(pending).toBeDefined();
        expect(sendPendingMessageMock).toHaveBeenCalledWith(expect.stringMatching(/^temp-/), 'hello');
        expect(clearInput).toHaveBeenCalledWith(true);
        expect(clearMediaPreview).toHaveBeenCalledOnce();
        expect(sendMessageMock).toHaveBeenCalledWith('hello');
        // Happy path must not poll confirm — reconciliation rides the broadcast.
        expect(confirmSentMessageMock).not.toHaveBeenCalled();

        // Simulate the scraper broadcasting the canonical row back to us.
        addMessage({
            id: 123,
            uid: 1,
            nickname: 'Tester',
            avatar: 'avatar.jpg',
            message: 'hello',
            timestamp: 1000,
        });

        expect(messageMap.value.has(pending!.id)).toBe(false);
        expect(messageMap.value.get(123)).toMatchObject({
            id: 123,
            stableKey: pending?.stableKey,
            state: 'sent',
        });
    });

    it('marks the optimistic message failed when Bangumi explicitly rejects it', async () => {
        sendMessageMock.mockResolvedValue('rejected');

        await submitComposerMessage({
            content: 'hello',
            imageMeta: {},
            clearInput: vi.fn(),
            clearMediaPreview: vi.fn(),
        });

        const messages = [...messageMap.value.values()];
        expect(messages).toHaveLength(1);
        expect(messages[0].state).toBe('failed');
    });

    it('keeps the message pending on an unknown outcome so it is neither lost nor duplicated', async () => {
        sendMessageMock.mockResolvedValue('unknown');

        await submitComposerMessage({
            content: 'hello',
            imageMeta: {},
            clearInput: vi.fn(),
            clearMediaPreview: vi.fn(),
        });

        const messages = [...messageMap.value.values()];
        expect(messages).toHaveLength(1);
        expect(messages[0].state).toBe('sending');
    });

    it('wraps replies in the sent content and stores reply metadata on the optimistic message', async () => {
        sendMessageMock.mockResolvedValue('sent');
        replyingTo.value = {
            id: '7',
            uid: '2',
            user: 'Peer',
            avatar: 'peer.jpg',
            text: 'old text',
            raw: 'old raw',
        };

        await submitComposerMessage({
            content: 'reply',
            imageMeta: {},
            clearInput: vi.fn(),
            clearMediaPreview: vi.fn(),
        });

        const pending = [...messageMap.value.values()][0];
        expect(sendPendingMessageMock).toHaveBeenCalledWith(expect.stringMatching(/^temp-/), '[quote=7][/quote]reply');
        expect(sendMessageMock).toHaveBeenCalledWith('[quote=7][/quote]reply');
        expect(pending).toMatchObject({
            reply_to_id: 7,
            reply_details: {
                uid: 2,
                nickname: 'Peer',
                avatar: 'peer.jpg',
                content: 'old text',
            },
        });
        expect(replyingTo.value).toBeNull();
    });

    it('uploads and sends a voice draft without text content', async () => {
        uploadFileMock.mockResolvedValue({ status: true, url: 'https://rd.ry.mk/uploads/voice.webm' });
        sendMessageMock.mockResolvedValue('sent');
        const clearInput = vi.fn();
        const clearMediaPreview = vi.fn();
        const clearVoiceDraft = vi.fn();

        await submitComposerMessage({
            content: ' ',
            imageMeta: {},
            voiceDraft: {
                file: new File(['voice'], 'voice.webm', { type: 'audio/webm' }),
                url: 'blob:voice',
                duration: 2,
            },
            clearInput,
            clearMediaPreview,
            clearVoiceDraft,
        });

        expect(uploadFileMock).toHaveBeenCalledWith(expect.objectContaining({ name: 'voice.webm' }));
        expect(sendPendingMessageMock).toHaveBeenCalledWith(expect.stringMatching(/^temp-/), '[audio]https://rd.ry.mk/uploads/voice.webm[/audio]');
        expect(sendMessageMock).toHaveBeenCalledWith('[audio]https://rd.ry.mk/uploads/voice.webm[/audio]');
        expect(clearInput).toHaveBeenCalledWith(true);
        expect(clearMediaPreview).toHaveBeenCalledOnce();
        expect(clearVoiceDraft).toHaveBeenCalledOnce();
    });

    it('keeps the voice draft when voice upload fails', async () => {
        uploadFileMock.mockResolvedValue({ status: false, error: 'upload failed' });
        const clearInput = vi.fn();
        const clearMediaPreview = vi.fn();
        const clearVoiceDraft = vi.fn();

        await expect(submitComposerMessage({
            content: '',
            imageMeta: {},
            voiceDraft: {
                file: new File(['voice'], 'voice.webm', { type: 'audio/webm' }),
                url: 'blob:voice',
                duration: 2,
            },
            clearInput,
            clearMediaPreview,
            clearVoiceDraft,
        })).rejects.toThrow('upload failed');

        expect(sendPendingMessageMock).not.toHaveBeenCalled();
        expect(sendMessageMock).not.toHaveBeenCalled();
        expect(clearInput).not.toHaveBeenCalled();
        expect(clearMediaPreview).not.toHaveBeenCalled();
        expect(clearVoiceDraft).not.toHaveBeenCalled();
    });

    it('edits the active message and preserves image metadata', async () => {
        messageMap.value = new Map([[5, {
            id: 5,
            uid: 1,
            nickname: 'Tester',
            avatar: 'avatar.jpg',
            message: 'old',
            timestamp: 1000,
        }]]);
        editingMessage.value = { id: '5', raw: 'old' };
        editMessageMock.mockResolvedValue({ status: true });
        const clearInput = vi.fn();

        await submitComposerMessage({
            content: 'new',
            imageMeta: { 'https://example.com/a.jpg': { width: 640, height: 480 } },
            clearInput,
            clearMediaPreview: vi.fn(),
        });

        expect(editMessageMock).toHaveBeenCalledWith(5, 'new');
        expect(clearInput).toHaveBeenCalledOnce();
        expect(messageMap.value.get(5)?.image_meta).toEqual({
            'https://example.com/a.jpg': { width: 640, height: 480 },
        });
        expect(editingMessage.value).toBeNull();
    });

    it('restores hidden quotes and transforms mentions before editing', async () => {
        editingMessage.value = {
            id: '5',
            raw: '@Alice hi',
            hiddenQuote: '[quote=1][/quote]old',
        };
        lookupUsersByNameMock.mockResolvedValue({
            Alice: { id: 42, nickname: 'Alice' },
        });
        editMessageMock.mockResolvedValue({ status: true });

        await submitComposerMessage({
            content: '@Alice hi',
            imageMeta: {},
            clearInput: vi.fn(),
            clearMediaPreview: vi.fn(),
        });

        expect(lookupUsersByNameMock).toHaveBeenCalledWith(['Alice']);
        expect(editMessageMock).toHaveBeenCalledWith(5, '[quote=1][/quote]old\n[user=42]Alice[/user] hi');
    });

    it('keeps the editor state intact when editing fails', async () => {
        editingMessage.value = { id: '5', raw: 'old' };
        editMessageMock.mockResolvedValue({ status: false, error: 'nope' });
        const clearInput = vi.fn();

        await expect(submitComposerMessage({
            content: 'new',
            imageMeta: {},
            clearInput,
            clearMediaPreview: vi.fn(),
        })).rejects.toThrow('nope');

        expect(clearInput).not.toHaveBeenCalled();
        expect(editingMessage.value).toEqual({ id: '5', raw: 'old' });
    });

    it('ignores empty submissions before touching composer side effects', async () => {
        const clearInput = vi.fn();
        const clearMediaPreview = vi.fn();

        await submitComposerMessage({
            content: '   ',
            imageMeta: {},
            clearInput,
            clearMediaPreview,
        });

        expect(messageMap.value.size).toBe(0);
        expect(sendPendingMessageMock).not.toHaveBeenCalled();
        expect(sendMessageMock).not.toHaveBeenCalled();
        expect(clearInput).not.toHaveBeenCalled();
        expect(clearMediaPreview).not.toHaveBeenCalled();
    });
});
