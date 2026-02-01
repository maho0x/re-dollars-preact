import { signal, computed, batch } from '@preact/signals';
import type { Message, Conversation } from '@/types';
import { MESSAGE_GROUP_TIME_GAP } from '@/utils/constants';

// 导出新的已读状态和浏览位置管理模块
export * from './readState';
export * from './browsePosition';

// UI 状态
export const scrollButtonMode = signal<'to-unread' | 'to-bottom'>('to-bottom');

function getCurrentUserId(): string {
    return String((window as any).CHOBITS_UID || '');
}

// 消息存储
export const messageMap = signal<Map<number, Message>>(new Map());
export const messageStore = signal<Map<string, { raw: string }>>(new Map());

export const messageIds = computed<number[]>(() => {
    const map = messageMap.value;
    return Array.from(map.keys()).sort((a, b) => {
        const msgA = map.get(a)!;
        const msgB = map.get(b)!;
        return msgA.timestamp - msgB.timestamp || a - b;
    });
});

// 会话列表
export const conversations = signal<Conversation[]>([
    {
        id: 'dollars',
        type: 'channel',
        title: 'Re:Dollars',
        avatar: 'https://lsky.ry.mk/i/2025/09/06/68bc5540a8c51.webp',
        lastMessage: { text: '', timestamp: 0 },
        unreadCount: 0
    }
]);

// 初始化时不从 localStorage 恢复，等待 settings 加载后再决定
export const isChatOpen = signal(false);
export const activeConversationId = signal('dollars');
export const isLoadingHistory = signal(false);
export const historyFullyLoaded = signal(false);
export const historyOldestId = signal<number | null>(null);
export const historyNewestId = signal<number | null>(null);
export const timelineIsLive = signal(true);
export const isContextLoading = signal(false);
export const initialMessagesLoaded = signal(false);

// 回复/编辑
export const replyingTo = signal<{
    id: string;
    uid: string;
    user: string;
    text: string;
    raw: string;
    avatar: string;
} | null>(null);

export const editingMessage = signal<{
    id: string;
    raw: string;
    hiddenQuote?: string;
} | null>(null);

// 未读计数
export const unreadWhileScrolled = signal(0);
export const unreadJumpList = signal<number[]>([]);

// 搜索
export const searchQuery = signal('');

export const pendingMention = signal<{ uid: string; nickname: string } | null>(null);
export const currentDateLabel = signal<string | null>(null);
export const showScrollBottomBtn = signal(false);
export const newMessageIds = signal<Set<number>>(new Set());
export const pendingJumpToMessage = signal<number | null>(null);
let nextOptimisticId = -1;

// 待确认消息的超时定时器 (tempId -> timeoutId)
const pendingTimeouts = new Map<number, ReturnType<typeof setTimeout>>();
const PENDING_TIMEOUT_MS = 10000; // 10秒超时

// WebSocket 状态
export const wsConnected = signal(false);
export const onlineUsers = signal<Map<string, { name: string; avatar: string }>>(new Map());
export const onlineCount = signal(0);
export const typingUsers = signal<Map<string, string>>(new Map());



export function getMessageGrouping(msgId: number): { isSelf: boolean; isGrouped: boolean; isGroupedWithNext: boolean } {
    const map = messageMap.peek();
    const ids = messageIds.peek();
    const userId = getCurrentUserId();

    const msg = map.get(msgId);
    if (!msg) {
        return { isSelf: false, isGrouped: false, isGroupedWithNext: false };
    }

    const index = ids.indexOf(msgId);
    const prevId = index > 0 ? ids[index - 1] : null;
    const nextId = index < ids.length - 1 ? ids[index + 1] : null;

    const prevMsg = prevId ? map.get(prevId) : null;
    const nextMsg = nextId ? map.get(nextId) : null;

    const isSameUserAsPrev =
        prevMsg &&
        String(prevMsg.uid) === String(msg.uid) &&
        msg.timestamp - prevMsg.timestamp < MESSAGE_GROUP_TIME_GAP;

    const isSameUserAsNext =
        nextMsg &&
        String(nextMsg.uid) === String(msg.uid) &&
        nextMsg.timestamp - msg.timestamp < MESSAGE_GROUP_TIME_GAP;

    return {
        isSelf: String(msg.uid) === String(userId),
        isGrouped: !!isSameUserAsPrev,
        isGroupedWithNext: !!isSameUserAsNext,
    };
}

// 新消息到达时请求滚动到底部 (仅当已经在底部时生效)
export const pendingScrollToBottom = signal(false);
// 手动请求滚动到底部 (强制生效)
export const manualScrollToBottom = signal(0);
// 用户是否在底部 (由 ChatBody 更新，用于 WebSocket 判断是否增加未读计数)
export const isAtBottom = signal(true);

// ============================================================================
// 消息操作函数
// ============================================================================

/**
 * 添加单条消息 (通常由 WebSocket 新消息触发)
 * @param msg - 消息对象
 * @param tempId - 可选的临时 ID (stableKey)，由后端提供用于直接匹配乐观消息
 */
export function addMessage(msg: Message, tempId?: string) {
    batch(() => {
        const map = new Map(messageMap.value);
        let replacedOptimistic = false;
        let inheritedStableKey: string | undefined;
        let matchedTempId: number | undefined;

        // 使用后端提供的 tempId 进行直接匹配
        if (tempId) {
            for (const [id, m] of map) {
                if (m.state === 'sending' && m.stableKey === tempId) {
                    inheritedStableKey = m.stableKey;
                    matchedTempId = id;
                    map.delete(id);
                    replacedOptimistic = true;
                    break;
                }
            }
        }

        // 清理超时定时器
        if (matchedTempId !== undefined) {
            const timeout = pendingTimeouts.get(matchedTempId);
            if (timeout) {
                clearTimeout(timeout);
                pendingTimeouts.delete(matchedTempId);
            }
        }

        // 将确认消息添加到 map，如果有 stableKey 则继承，标记为 sent
        const confirmedMsg = inheritedStableKey
            ? { ...msg, stableKey: inheritedStableKey, state: 'sent' as const }
            : { ...msg, state: 'sent' as const };
        map.set(confirmedMsg.id, confirmedMsg);
        messageMap.value = map;

        const store = new Map(messageStore.value);
        store.set(String(confirmedMsg.id), { raw: confirmedMsg.message });
        messageStore.value = store;

        // 添加到新消息集合以触发入场动画 (只对非替换消息触发)
        if (!replacedOptimistic) {
            const newIds = new Set(newMessageIds.value);
            newIds.add(confirmedMsg.id);
            newMessageIds.value = newIds;

            setTimeout(() => {
                const ids = new Set(newMessageIds.value);
                ids.delete(confirmedMsg.id);
                newMessageIds.value = ids;
            }, 350);
        }

        pendingScrollToBottom.value = true;
    });
}

/**
 * 添加乐观消息 (发送前立即显示的临时消息)
 * @returns 包含临时消息 ID 和 stableKey 的对象
 */
export function addOptimisticMessage(
    content: string,
    user: { id: string; nickname: string; avatar: string },
    replyToId?: number,
    replyDetails?: any,
    imageMeta?: Record<string, { width: number; height: number }>
): { tempId: number; stableKey: string } {
    const tempId = nextOptimisticId--;
    const stableKey = `temp-${Math.random().toString(36).slice(2)}`;

    const optimisticMsg: Message = {
        id: tempId,
        uid: Number(user.id),
        nickname: user.nickname,
        avatar: user.avatar,
        message: content,
        timestamp: Math.floor(Date.now() / 1000),
        reply_to_id: replyToId,
        reply_details: replyDetails,
        image_meta: imageMeta,
        stableKey,
        state: 'sending',
    };

    batch(() => {
        const map = new Map(messageMap.value);
        map.set(tempId, optimisticMsg);
        messageMap.value = map;

        const store = new Map(messageStore.value);
        store.set(String(tempId), { raw: content });
        messageStore.value = store;

        // 添加入场动画
        const newIds = new Set(newMessageIds.value);
        newIds.add(tempId);
        newMessageIds.value = newIds;

        setTimeout(() => {
            const ids = new Set(newMessageIds.value);
            ids.delete(tempId);
            newMessageIds.value = ids;
        }, 350);

        // 强制滚动到底部（自己发送的消息）
        manualScrollToBottom.value++;
    });

    // 设置超时检测
    const timeoutId = setTimeout(() => {
        markMessageFailed(tempId);
        pendingTimeouts.delete(tempId);
    }, PENDING_TIMEOUT_MS);
    pendingTimeouts.set(tempId, timeoutId);

    return { tempId, stableKey };
}

/**
 * 标记消息为发送失败
 */
export function markMessageFailed(tempId: number) {
    const map = new Map(messageMap.value);
    const msg = map.get(tempId);
    if (msg && msg.state === 'sending') {
        map.set(tempId, { ...msg, state: 'failed' });
        messageMap.value = map;
    }
}

/**
 * 移除乐观消息 (发送失败时调用)
 */
export function removeOptimisticMessage(tempId: number) {
    // 清理超时定时器
    const timeout = pendingTimeouts.get(tempId);
    if (timeout) {
        clearTimeout(timeout);
        pendingTimeouts.delete(tempId);
    }

    batch(() => {
        const map = new Map(messageMap.value);
        map.delete(tempId);
        messageMap.value = map;

        const store = new Map(messageStore.value);
        store.delete(String(tempId));
        messageStore.value = store;
    });
}

/**
 * 重试发送失败的消息
 */
export function retryMessage(tempId: number): { content: string; stableKey: string } | null {
    const map = messageMap.value;
    const msg = map.get(tempId);
    if (!msg || msg.state !== 'failed') return null;

    const content = msg.message;
    const stableKey = msg.stableKey || `temp-${Math.random().toString(36).slice(2)}`;

    // 更新状态为 sending
    const newMap = new Map(map);
    newMap.set(tempId, { ...msg, state: 'sending' });
    messageMap.value = newMap;

    // 重新设置超时检测
    const timeoutId = setTimeout(() => {
        markMessageFailed(tempId);
        pendingTimeouts.delete(tempId);
    }, PENDING_TIMEOUT_MS);
    pendingTimeouts.set(tempId, timeoutId);

    return { content, stableKey };
}

/**
 * 批量添加消息 (支持去重，用于加载历史/更新消息)
 */
export function addMessagesBatch(newMessages: Message[]) {
    if (newMessages.length === 0) return;

    batch(() => {
        const map = new Map(messageMap.value);
        const store = new Map(messageStore.value);

        for (const msg of newMessages) {
            // 只有当消息不存在或更新时间更新时才覆盖
            const existing = map.get(msg.id);
            if (!existing || (msg.edited_at && msg.edited_at > (existing.edited_at || 0))) {
                map.set(msg.id, msg);
                store.set(String(msg.id), { raw: msg.message });
            }
        }

        messageMap.value = map;
        messageStore.value = store;
    });
}

/**
 * 更新消息 (优化版：直接更新 Map 中的消息)
 */
export function updateMessage(id: number, updates: Partial<Message>) {
    const map = new Map(messageMap.value);
    const existing = map.get(id);

    if (existing) {
        map.set(id, { ...existing, ...updates });
        messageMap.value = map;

        // 如果更新了消息内容，同步更新 messageStore
        if (updates.message !== undefined) {
            const store = new Map(messageStore.value);
            store.set(String(id), { raw: updates.message });
            messageStore.value = store;
        }
    }
}

/**
 * 按 ID 获取消息 (O(1) 查找)
 */
export function getMessageById(id: number): Message | undefined {
    return messageMap.value.get(id);
}

/**
 * 删除消息 (标记为已删除)
 */
export function deleteMessage(id: number) {
    updateMessage(id, { is_deleted: true });
}

/**
 * 清空消息
 */
export function clearMessages() {
    batch(() => {
        messageMap.value = new Map();
        messageStore.value = new Map();
    });
}

/**
 * 设置消息列表 (API 初始加载时使用)
 */
export function setMessages(newMessages: Message[]) {
    batch(() => {
        const map = new Map<number, Message>();
        const store = new Map<string, { raw: string }>();

        for (const msg of newMessages) {
            map.set(msg.id, msg);
            store.set(String(msg.id), { raw: msg.message });
        }

        messageMap.value = map;
        messageStore.value = store;
    });
}

// 别名导出，保持 API 兼容性
export const prependMessages = addMessagesBatch;
export const appendMessages = addMessagesBatch;

/**
 * 加载消息上下文 (用于跳转)
 * @returns 包含目标消息索引的结果，或 null 如果加载失败
 */
export async function loadMessageContext(messageId: number): Promise<{ targetIndex: number } | null> {
    isLoadingHistory.value = true;
    try {
        const { fetchMessageContext } = await import('@/utils/api');
        const result = await fetchMessageContext(messageId);

        if (result && result.messages.length > 0) {
            batch(() => {
                clearMessages(); // 清空现有消息，避免时间线断裂
                addMessagesBatch(result.messages);

                historyOldestId.value = result.messages[0].id;
                historyNewestId.value = result.messages[result.messages.length - 1].id;
                historyFullyLoaded.value = !result.has_more_before;
                timelineIsLive.value = false; // 标记为非实时模式
            });
            return { targetIndex: result.target_index };
        }
    } catch (e) {
        // ignore
    } finally {
        isLoadingHistory.value = false;
    }
    return null;
}

// ============================================================================
// UI 状态操作函数
// ============================================================================

/**
 * 打开/关闭聊天窗口
 * @param open - 是否打开
 * @param skipSave - 是否跳过保存到 localStorage（用于初始化恢复）
 */
export function toggleChat(open?: boolean, skipSave = false) {
    const newState = open ?? !isChatOpen.value;
    isChatOpen.value = newState;

    // 保存状态（除非明确跳过）
    if (!skipSave) {
        localStorage.setItem('dollars.isChatOpen', JSON.stringify(newState));
    }
}

/**
 * 设置回复
 */
export function setReplyTo(data: typeof replyingTo.value) {
    replyingTo.value = data;
    editingMessage.value = null;
}

/**
 * 设置编辑
 */
export function setEditingMessage(data: typeof editingMessage.value) {
    editingMessage.value = data;
    replyingTo.value = null;
}

/**
 * 取消回复/编辑
 */
export function cancelReplyOrEdit() {
    replyingTo.value = null;
    editingMessage.value = null;
}

/**
 * 设置当前会话
 */
export function setActiveConversation(conversationId: string) {
    activeConversationId.value = conversationId;
    localStorage.setItem('dollars.activeConversationId', conversationId);
}

/**
 * 更新会话最后消息
 */
export function updateConversationLastMessage(conversationId: string, text: string, timestamp: number) {
    conversations.value = conversations.value.map(conv =>
        conv.id === conversationId
            ? { ...conv, lastMessage: { text, timestamp } }
            : conv
    );
    // 按时间排序
    conversations.value = [...conversations.value].sort(
        (a, b) => (b.lastMessage.timestamp || 0) - (a.lastMessage.timestamp || 0)
    );
}
