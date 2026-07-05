import type { Message } from '@/types';
import {
    addMessage,
    updateMessage,
    deleteMessage,
    getMessageById,
    addMessagesBatch,
    messageIds,
} from '@/stores/messageStore';
import { updateConversationLastMessage } from '@/stores/conversations';
import {
    unreadWhileScrolled,
    isAtBottom,
    timelineIsLive,
    showScrollBottomBtn,
    isChatOpen,
} from '@/stores/chatState';
import { markSentMessageAsRead } from '@/stores/readState';
import { userInfo, blockedUsers } from '@/stores/user';
import { addDollarsNotification, markMessageAsSeenIfNotified } from '@/stores/notifications';
import { getUnreadCount, fetchNewerMessages } from '@/utils/api/messages';
import { lastReadId } from '@/stores/readState';

/**
 * 标准化消息对象（与原版一致）
 */
export function normalizeMessage(msg: any): Message {
    const normalized = { ...msg };
    if (normalized.db_id) {
        normalized.id = normalized.db_id;
    }
    if (msg.id && msg.db_id) {
        normalized.bangumi_id = msg.id;
    }
    if (normalized.msg && !normalized.message) {
        normalized.message = normalized.msg;
    }
    return normalized as Message;
}

/**
 * 处理新消息
 */
export function handleNewMessages(data: any) {
    const payload = Array.isArray(data.payload) ? data.payload : [];
    if (!payload.length) return;

    const filteredPayload = payload.filter(
        (msg: any) => !blockedUsers.value.has(String(msg.uid))
    );
    if (!filteredPayload.length) return;

    const lastMsg = filteredPayload[filteredPayload.length - 1];
    updateConversationLastMessage(
        'dollars',
        lastMsg.msg || lastMsg.message || '',
        lastMsg.timestamp
    );

    let newUnreadCount = 0;
    const currentUserId = String(userInfo.value.id);

    for (const msg of filteredPayload) {
        const normalizedMsg = normalizeMessage(msg);
        if (!getMessageById(normalizedMsg.id)) {
            const tempId = msg.tempId as string | undefined;
            addMessage(normalizedMsg, tempId);

            if (String(normalizedMsg.uid) === currentUserId) {
                markSentMessageAsRead(normalizedMsg.id);
            } else {
                newUnreadCount++;
            }
        }
    }

    if (newUnreadCount > 0 && timelineIsLive.value && !isAtBottom.value) {
        unreadWhileScrolled.value += newUnreadCount;
        showScrollBottomBtn.value = true;
    }
}

/**
 * 处理新私信
 */
export function handleNewPM(data: any) {
    const payload = data.payload;
    if (!payload) return;
    if (blockedUsers.value.has(String(payload.uid))) return;
    const normalizedMsg = normalizeMessage(payload);
    if (!getMessageById(normalizedMsg.id)) {
        addMessage(normalizedMsg);
    }
}

/**
 * 处理通知
 */
export function handleNotification(data: any) {
    const n = data.payload;
    addDollarsNotification(n);

    if (isChatOpen.value && unreadWhileScrolled.value === 0) {
        const mid = Number(n.message_id || n.message?.id);
        if (mid) {
            setTimeout(() => markMessageAsSeenIfNotified(mid), 100);
        }
    }
}

/**
 * 处理消息删除
 */
export function handleMessageDelete(data: any) {
    const { id } = data.payload;
    deleteMessage(Number(id));
}

/**
 * 处理消息编辑
 */
export function handleMessageEdit(data: any) {
    const fullMsg = data.payload;
    updateMessage(fullMsg.id, normalizeMessage(fullMsg));
}

/**
 * 页面恢复可见时检查漏掉的消息
 */
export function checkMissedMessages() {
    if (!isChatOpen.value) return;
    const ids = messageIds.value;
    if (ids.length === 0) return;

    const lastId = ids[ids.length - 1];
    getUnreadCount(lastId, Number(userInfo.value.id)).then(async res => {
        if (res && res.count > 0) {
            const newMessages = await fetchNewerMessages(lastId, 100);
            if (newMessages.length > 0) {
                addMessagesBatch(newMessages);
            }
        }
    });
}

/**
 * 处理已读状态更新 (来自其他客户端的 WebSocket 推送)
 * 直接更新本地 lastReadId，无需额外 API 调用
 */
export function handleReadStateUpdate(data: any) {
    const payload = data.payload;
    if (!payload) return;

    const remoteReadId = Number(payload.last_read_id);
    if (!remoteReadId || isNaN(remoteReadId)) return;

    // 只增不减：仅当远端 ID 大于本地值时更新
    const currentReadId = lastReadId.value || 0;
    if (remoteReadId > currentReadId) {
        lastReadId.value = remoteReadId;
    }
}
