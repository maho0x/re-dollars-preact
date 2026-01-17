import { signal, computed, batch } from '@preact/signals';
import type { Message, Notification, Conversation } from '@/types';
import { MESSAGE_GROUP_TIME_GAP } from '@/utils/constants';
import { debounce } from '@/utils/format';
import { getChiiApp } from '@/utils/globals';

// 浏览位置持久化
const BROWSE_POS_KEY = 'dollars_pos_dollars';
const LAST_READ_KEY = 'dollars_last_read';

interface BrowsePosition {
    top: number;
    bottom: number;
}

export const lastBrowsePosition = signal<BrowsePosition | null>(null);
export const lastBrowseMessageId = signal<number | null>(null);
export const lastReadId = signal<number | null>(null);
export const scrollButtonMode = signal<'to-unread' | 'to-bottom'>('to-bottom');

// 追踪上一次保存到云端的值
let lastSavedBrowseValue = '';
let lastSavedReadValue = '';

// 防抖保存浏览位置
const debouncedSaveBrowseToCloud = debounce((position: BrowsePosition | null) => {
    try {
        const cloud = getChiiApp().cloud_settings;
        const valueStr = position ? JSON.stringify(position) : '';

        if (valueStr === lastSavedBrowseValue) return;

        if (position) {
            cloud.update({ [BROWSE_POS_KEY]: valueStr });
        } else {
            cloud.delete(BROWSE_POS_KEY);
        }

        cloud.save();
        lastSavedBrowseValue = valueStr;
    } catch (e) {
        // ignore
    }
}, 1000);

// 防抖保存已读位置
const debouncedSaveReadToCloud = debounce((readId: number | null) => {
    try {
        const cloud = getChiiApp().cloud_settings;
        const valueStr = readId ? String(readId) : '';

        if (valueStr === lastSavedReadValue) return;

        if (readId) {
            cloud.update({ [LAST_READ_KEY]: valueStr });
        } else {
            cloud.delete(LAST_READ_KEY);
        }

        cloud.save();
        lastSavedReadValue = valueStr;
    } catch (e) {
        // ignore
    }
}, 1000);

export function saveBrowsePosition(topId: number, bottomId: number) {
    const position = { top: topId, bottom: bottomId };
    lastBrowsePosition.value = position;
    lastBrowseMessageId.value = topId;
    debouncedSaveBrowseToCloud(position);
}

export function loadBrowsePosition(): BrowsePosition | null {
    try {
        const cloud = getChiiApp().cloud_settings;
        const settings = cloud.getAll();
        const value = settings?.[BROWSE_POS_KEY];
        if (value) {
            const parsed = JSON.parse(value) as BrowsePosition;
            if (parsed.top && parsed.bottom) {
                lastBrowsePosition.value = parsed;
                lastBrowseMessageId.value = parsed.top;
                return parsed;
            }
        }
    } catch (e) { /* ignore */ }
    return null;
}

export function clearBrowsePosition() {
    lastBrowsePosition.value = null;
    lastBrowseMessageId.value = null;
    debouncedSaveBrowseToCloud(null);
}

export function updateLastReadId(messageId: number) {
    const current = lastReadId.value;
    if (!current || messageId > current) {
        lastReadId.value = messageId;
        debouncedSaveReadToCloud(messageId);
    }
}

export function loadLastReadId(): number | null {
    try {
        const cloud = getChiiApp().cloud_settings;
        const settings = cloud.getAll();
        const value = settings?.[LAST_READ_KEY];
        if (value) {
            const parsed = parseInt(value, 10);
            if (!isNaN(parsed)) {
                const current = lastReadId.value;
                // 只有当云端值更大时才更新，确保已读位置只增不减
                if (!current || parsed > current) {
                    lastReadId.value = parsed;
                }
                return Math.max(parsed, current || 0) || parsed;
            }
        }
    } catch (e) { /* ignore */ }
    return null;
}

export function getFirstUnreadId(): number | null {
    const readId = lastReadId.value;
    if (!readId) return null;

    const ids = messageIds.peek();
    for (const id of ids) {
        if (id > readId) return id;
    }
    return null;
}

export function hasUnreadMessages(): boolean {
    const readId = lastReadId.value;
    if (!readId) return false;

    const ids = messageIds.peek();
    return ids.length > 0 && ids[ids.length - 1] > readId;
}

export function getUnreadMessageCount(): number {
    const readId = lastReadId.value;
    if (!readId) return 0;

    const ids = messageIds.value;
    let count = 0;
    for (const id of ids) {
        if (id > readId) count++;
    }
    return count;
}

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
export const searchOffset = signal(0);
export const isSearching = signal(false);
export const hasMoreSearchResults = signal(false);

export const pendingMention = signal<{ uid: string; nickname: string } | null>(null);
export const currentDateLabel = signal<string | null>(null);
export const showScrollBottomBtn = signal(false);
export const newMessageIds = signal<Set<number>>(new Set());
export const pendingJumpToMessage = signal<number | null>(null);
export const pendingMessageIds = signal<Set<number>>(new Set());
let nextOptimisticId = -1;

// WebSocket 状态
export const wsConnected = signal(false);
export const onlineUsers = signal<Map<string, { name: string; avatar: string }>>(new Map());
export const onlineCount = signal(0);
export const typingUsers = signal<Map<string, string>>(new Map());

// 通知
export const notifications = signal<Notification[]>([]);

// 计算属性
export const unreadCount = computed(() => unreadJumpList.value.length);

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
 */
export function addMessage(msg: Message) {
    batch(() => {
        const map = new Map(messageMap.value);
        let replacedOptimistic = false;

        // 如果是自己发的消息，检查是否有对应的乐观消息需要替换
        // 通过匹配消息内容来找到对应的乐观消息
        const pendingIds = pendingMessageIds.peek();
        if (pendingIds.size > 0) {
            for (const pendingId of pendingIds) {
                const pendingMsg = map.get(pendingId);
                if (pendingMsg && pendingMsg.message === msg.message && pendingMsg.uid === msg.uid) {
                    // 找到匹配的乐观消息，删除它
                    map.delete(pendingId);
                    const newPendingIds = new Set(pendingIds);
                    newPendingIds.delete(pendingId);
                    pendingMessageIds.value = newPendingIds;
                    replacedOptimistic = true;
                    break;
                }
            }
        }

        map.set(msg.id, msg);
        messageMap.value = map;

        const store = new Map(messageStore.value);
        store.set(String(msg.id), { raw: msg.message });
        messageStore.value = store;

        // 添加到新消息集合以触发入场动画 (只对非替换消息触发)
        if (!replacedOptimistic) {
            const newIds = new Set(newMessageIds.value);
            newIds.add(msg.id);
            newMessageIds.value = newIds;

            // 动画完成后移除
            setTimeout(() => {
                const ids = new Set(newMessageIds.value);
                ids.delete(msg.id);
                newMessageIds.value = ids;
            }, 350);
        }

        pendingScrollToBottom.value = true;
    });
}

/**
 * 添加乐观消息 (发送前立即显示的临时消息)
 * @returns 临时消息 ID
 */
export function addOptimisticMessage(content: string, user: { id: string; nickname: string; avatar: string }, replyToId?: number, replyDetails?: any): number {
    const tempId = nextOptimisticId--;

    const optimisticMsg: Message = {
        id: tempId,
        uid: Number(user.id),
        nickname: user.nickname,
        avatar: user.avatar,
        message: content,
        timestamp: Math.floor(Date.now() / 1000),
        reply_to_id: replyToId,
        reply_details: replyDetails,
    };

    batch(() => {
        const map = new Map(messageMap.value);
        map.set(tempId, optimisticMsg);
        messageMap.value = map;

        const store = new Map(messageStore.value);
        store.set(String(tempId), { raw: content });
        messageStore.value = store;

        // 标记为待发送
        const pending = new Set(pendingMessageIds.value);
        pending.add(tempId);
        pendingMessageIds.value = pending;

        // 添加入场动画
        const newIds = new Set(newMessageIds.value);
        newIds.add(tempId);
        newMessageIds.value = newIds;

        setTimeout(() => {
            const ids = new Set(newMessageIds.value);
            ids.delete(tempId);
            newMessageIds.value = ids;
        }, 350);

        pendingScrollToBottom.value = true;
    });

    return tempId;
}

/**
 * 移除乐观消息 (发送失败时调用)
 */
export function removeOptimisticMessage(tempId: number) {
    batch(() => {
        const map = new Map(messageMap.value);
        map.delete(tempId);
        messageMap.value = map;

        const store = new Map(messageStore.value);
        store.delete(String(tempId));
        messageStore.value = store;

        const pending = new Set(pendingMessageIds.value);
        pending.delete(tempId);
        pendingMessageIds.value = pending;
    });
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
