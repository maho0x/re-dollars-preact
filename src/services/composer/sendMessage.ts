import {
    addMessage,
    addOptimisticMessage,
    markMessageFailed,
    retryMessage,
    updateMessage,
} from '@/stores/messageStore';
import {
    cancelReplyOrEdit,
    editingMessage,
    replyingTo,
} from '@/stores/composerState';
import { clearDraft } from '@/stores/drafts';
import { userInfo } from '@/stores/user';
import { confirmSentMessage, editMessage as apiEditMessage, postChatMessage } from '@/utils/api/messages';
import { uploadFile } from '@/utils/api/media';
import { lookupUsersByName } from '@/utils/api/users';
import { transformMentions } from '@/utils/mentions';
import { sendPendingMessage } from '@/services/websocket/client';
import type { VoiceDraft } from '@/hooks/useVoiceRecorder';
import type { Message } from '@/types';

export type ComposerImageMeta = Record<string, { width: number; height: number }>;

export interface SubmitComposerMessageOptions {
    content: string;
    imageMeta: ComposerImageMeta;
    voiceDraft?: VoiceDraft | null;
    clearInput: (focus?: boolean) => void;
    clearMediaPreview: () => void;
    clearVoiceDraft?: () => void;
}

interface ComposerActions {
    clearInput: (focus?: boolean) => void;
    clearMediaPreview: () => void;
    clearVoiceDraft?: () => void;
}

interface PreparedNewMessage {
    content: string;
    imageMeta?: ComposerImageMeta;
    replyToId?: number;
    replyDetails?: NonNullable<Message['reply_details']>;
}

interface PreparedEdit {
    id: number;
    content: string;
    imageMeta?: ComposerImageMeta;
}

interface PendingDelivery {
    tempId: number;
    stableKey: string;
    content: string;
}

function optionalImageMeta(imageMeta: ComposerImageMeta) {
    return Object.keys(imageMeta).length > 0 ? imageMeta : undefined;
}

async function uploadVoiceDraft(voiceDraft: VoiceDraft) {
    const result = await uploadFile(voiceDraft.file);
    if (result.status && result.url) return `[audio]${result.url}[/audio]`;
    throw new Error(result.error || '语音上传失败');
}

async function attachVoice(content: string, voiceDraft?: VoiceDraft | null) {
    if (!voiceDraft) return content;

    const voiceBBCode = await uploadVoiceDraft(voiceDraft);
    return content ? `${content}\n${voiceBBCode}` : voiceBBCode;
}

function quoteReply(content: string) {
    const reply = replyingTo.value;
    return reply ? `[quote=${reply.id}][/quote]${content}` : content;
}

function replyDetails(): Pick<PreparedNewMessage, 'replyToId' | 'replyDetails'> {
    const reply = replyingTo.value;
    if (!reply) return {};

    return {
        replyToId: Number(reply.id),
        replyDetails: {
            uid: Number(reply.uid),
            nickname: reply.user,
            avatar: reply.avatar,
            content: reply.text,
        },
    };
}

function restoreHiddenQuote(content: string) {
    const hiddenQuote = editingMessage.value?.hiddenQuote;
    return hiddenQuote ? `${hiddenQuote}\n${content}` : content;
}

async function normalizeMentions(content: string) {
    return transformMentions(content, lookupUsersByName);
}

async function prepareEdit(content: string, imageMeta: ComposerImageMeta): Promise<PreparedEdit | null> {
    const editing = editingMessage.value;
    if (!editing || !content) return null;

    return {
        id: Number(editing.id),
        content: await normalizeMentions(restoreHiddenQuote(content)),
        imageMeta: optionalImageMeta(imageMeta),
    };
}

async function prepareNewMessage(
    content: string,
    imageMeta: ComposerImageMeta,
    voiceDraft?: VoiceDraft | null,
): Promise<PreparedNewMessage | null> {
    const contentWithVoice = await attachVoice(content, voiceDraft);
    if (!contentWithVoice) return null;

    return {
        content: await normalizeMentions(quoteReply(contentWithVoice)),
        imageMeta: optionalImageMeta(imageMeta),
        ...replyDetails(),
    };
}

async function submitEdit(draft: PreparedEdit, clearInput: (focus?: boolean) => void) {
    const result = await apiEditMessage(draft.id, draft.content);
    if (!result.status) {
        throw new Error(result.error || '编辑失败');
    }

    clearInput();
    if (draft.imageMeta) {
        updateMessage(draft.id, { image_meta: draft.imageMeta });
    }
    cancelReplyOrEdit();
}

function stageOptimisticMessage(draft: PreparedNewMessage): PendingDelivery {
    const user = userInfo.value;
    const { tempId, stableKey } = addOptimisticMessage(
        draft.content,
        { id: user.id, nickname: user.nickname, avatar: user.avatar },
        draft.replyToId,
        draft.replyDetails,
        draft.imageMeta,
    );

    return { tempId, stableKey, content: draft.content };
}

function clearSubmittedComposer(actions: ComposerActions) {
    actions.clearInput(true);
    actions.clearMediaPreview();
    actions.clearVoiceDraft?.();
    clearDraft();
    cancelReplyOrEdit();
}

/**
 * 发送一条乐观消息对应的内容。这是初次发送与失败重试共用的唯一出口：
 * - 'rejected'（Bangumi 明确拒绝）→ 标记失败，供用户重试；
 * - 'sent' / 'unknown' → 保留 sending 气泡，由 WS 回流或看门狗对账，
 *   绝不在此重发，从根源杜绝"发两条一样的"。
 */
async function deliver({ tempId, stableKey, content }: PendingDelivery) {
    sendPendingMessage(stableKey, content);
    const outcome = await postChatMessage(content);
    if (outcome === 'rejected') {
        markMessageFailed(tempId);
    }
}

/**
 * 重试一条失败的消息。重发前先确认它上次是否其实已经落库——
 * 若已落库则直接对账、不重发，保证重试的幂等性。
 */
export async function retryFailedMessage(tempId: number) {
    const revived = retryMessage(tempId);
    if (!revived) return;

    const existing = await confirmSentMessage(revived.content, 2);
    if (existing) {
        addMessage(existing, revived.stableKey);
        return;
    }

    await deliver({ tempId, stableKey: revived.stableKey, content: revived.content });
}

export async function submitComposerMessage({
    content,
    imageMeta,
    voiceDraft,
    clearInput,
    clearMediaPreview,
    clearVoiceDraft,
}: SubmitComposerMessageOptions) {
    const trimmedContent = content.trim();
    const actions = { clearInput, clearMediaPreview, clearVoiceDraft };

    if (editingMessage.value) {
        const draft = await prepareEdit(trimmedContent, imageMeta);
        if (draft) await submitEdit(draft, clearInput);
        return;
    }

    const draft = await prepareNewMessage(trimmedContent, imageMeta, voiceDraft);
    if (!draft) return;

    const pending = stageOptimisticMessage(draft);
    clearSubmittedComposer(actions);
    await deliver(pending);
}
