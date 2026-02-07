import { signal, computed, batch } from '@preact/signals';
import type { Message, Conversation } from '@/types';
import { MESSAGE_GROUP_TIME_GAP, BACKEND_URL } from '@/utils/constants';
import { getAuthHeaders } from './user';

// ============================================================================
// Browse Position (formerly browsePosition.ts)
// ============================================================================

const BROWSE_POSITION_KEY = 'dollars_browse_position';

export interface BrowsePosition {
    anchorMessageId: number;
    timestamp: number;
}

export const browsePosition = signal<BrowsePosition | null>(null);

/**
 * 保存浏览位置到 localStorage
 */
export function saveBrowsePosition(anchorMessageId: number): void {
    const position: BrowsePosition = {
        anchorMessageId,
        timestamp: Date.now(),
    };
    browsePosition.value = position;
    localStorage.setItem(BROWSE_POSITION_KEY, JSON.stringify(position));
}

/**
 * 从 localStorage 加载浏览位置
 */
export function loadBrowsePosition(): BrowsePosition | null {
    try {
        const saved = localStorage.getItem(BROWSE_POSITION_KEY);
        if (!saved) return null;

        const position = JSON.parse(saved) as BrowsePosition;

        // 检查是否过期 (24小时)
        const MAX_AGE = 24 * 60 * 60 * 1000;
        if (Date.now() - position.timestamp > MAX_AGE) {
            clearBrowsePosition();
            return null;
        }

        browsePosition.value = position;
        return position;
    } catch {
        return null;
    }
}

/**
 * 清除浏览位置
 */
export function clearBrowsePosition(): void {
    browsePosition.value = null;
    localStorage.removeItem(BROWSE_POSITION_KEY);
}

/**
 * 判断是否应该恢复浏览位置
 * @param unreadCount 当前未读消息数量
 * @returns 是否应该恢复浏览位置（未读数 > 阈值）
 */
export function shouldRestoreBrowsePosition(unreadCount: number): boolean {
    const THRESHOLD = 5;
    return unreadCount > THRESHOLD;
}

// ============================================================================
// Drafts (formerly drafts.ts)
// ============================================================================

const DRAFT_KEY_PREFIX = 'dollars_draft_';
const DRAFT_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 天过期

export interface ReplyInfo {
    id: string;
    uid: string;
    user: string;
    avatar: string;
    text: string;
}

export interface Draft {
    content: string;
    replyTo: ReplyInfo | null;
    timestamp: number;
}

// 当前草稿 signal
export const currentDraft = signal<Draft | null>(null);

/**
 * 获取草稿的 localStorage key
 * 现在只使用一个主草稿键，因为回复信息也保存在草稿中
 */
function getDraftKey(): string {
    return `${DRAFT_KEY_PREFIX}main`;
}

/**
 * 保存草稿到 localStorage
 */
export function saveDraft(content: string, replyTo: ReplyInfo | null = null): void {
    if (!content.trim() && !replyTo) {
        // 内容为空且没有回复，删除草稿
        clearDraft();
        return;
    }

    const draft: Draft = {
        content,
        replyTo,
        timestamp: Date.now(),
    };

    const key = getDraftKey();
    localStorage.setItem(key, JSON.stringify(draft));
    currentDraft.value = draft;
}

/**
 * 从 localStorage 加载草稿
 */
export function loadDraft(): Draft | null {
    try {
        const key = getDraftKey();
        const saved = localStorage.getItem(key);

        if (!saved) return null;

        const draft = JSON.parse(saved) as Draft;

        // 检查是否过期
        if (Date.now() - draft.timestamp > DRAFT_EXPIRY) {
            clearDraft();
            return null;
        }

        currentDraft.value = draft;
        return draft;
    } catch {
        return null;
    }
}

/**
 * 清除草稿
 */
export function clearDraft(): void {
    const key = getDraftKey();
    localStorage.removeItem(key);
    currentDraft.value = null;
}

/**
 * 清除过期草稿
 */
export function cleanupExpiredDrafts(): void {
    const draft = loadDraft();
    // loadDraft already handles expiry cleanup
    if (!draft) {
        clearDraft();
    }
}

/**
 * 获取当前草稿（如果存在）
 */
export function getAllDrafts(): Draft[] {
    const draft = loadDraft();
    return draft ? [draft] : [];
}

/**
 * 检查是否有草稿
 */
export function hasDraft(): boolean {
    const draft = loadDraft();
    return draft !== null && (draft.content.trim().length > 0 || draft.replyTo !== null);
}

// ============================================================================
// Core Chat State
// ============================================================================

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
        if (msgA.timestamp !== msgB.timestamp) return msgA.timestamp - msgB.timestamp;
        // Bot messages (uid=0) should come after user messages when timestamps are equal
        if (msgA.uid === 0 && msgB.uid !== 0) return 1;
        if (msgA.uid !== 0 && msgB.uid === 0) return -1;
        return a - b;
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

// ============================================================================
// Read State (formerly readState.ts)
// ============================================================================

export const lastReadId = signal<number | null>(null);
export const pendingReadId = signal<number | null>(null);
export const isReadStateSyncing = signal<boolean>(false);

export const hasUnreadMessages = computed(() => {
    const readId = lastReadId.value;
    if (!readId) return false;
    const newestId = historyNewestId.value;
    return newestId !== null && newestId > readId;
});

export const unreadCount = computed(() => {
    const readId = lastReadId.value;
    if (!readId) return 0;
    const ids = messageIds.value;
    return ids.filter(id => id > readId).length;
});

function getReadStateUserId(): number | null {
    const uid = (window as any).CHOBITS_UID;
    return uid ? Number(uid) : null;
}

/**
 * 从后端加载已读状态
 */
export async function loadReadState(): Promise<number | null> {
    try {
        const userId = getReadStateUserId();
        if (!userId) {
            console.warn('Cannot load read state: user not logged in');
            return null;
        }

        isReadStateSyncing.value = true;
        const response = await fetch(`${BACKEND_URL}/api/messages/read?user_id=${userId}`, {
            headers: getAuthHeaders(),
            credentials: 'include',
        });

        if (!response.ok) return null;

        const data = await response.json();
        if (data.status && typeof data.last_read_id === 'number') {
            // 取本地和远程的最大值
            const remoteId = data.last_read_id;
            const localId = lastReadId.value || 0;
            const effectiveId = Math.max(remoteId, localId);
            lastReadId.value = effectiveId;

            // 如果本地值更大，推送到后端
            if (localId > remoteId) {
                syncReadStateToBackend(localId);
            }

            return effectiveId;
        }
        return null;
    } catch (e) {
        console.error('Failed to load read state:', e);
        return null;
    } finally {
        isReadStateSyncing.value = false;
    }
}

/**
 * 更新已读状态 (只增不减)
 */
export function updateReadState(messageId: number): void {
    const current = lastReadId.value;
    if (current !== null && messageId <= current) return;

    lastReadId.value = messageId;
    pendingReadId.value = messageId;
    debouncedSyncToBackend();
}

/**
 * 防抖同步到后端 (500ms)
 */
let syncTimer: number | null = null;
function debouncedSyncToBackend(): void {
    if (syncTimer) clearTimeout(syncTimer);
    syncTimer = window.setTimeout(() => {
        const pending = pendingReadId.value;
        if (pending !== null) {
            syncReadStateToBackend(pending);
            pendingReadId.value = null;
        }
    }, 500);
}

/**
 * 同步已读状态到后端
 */
async function syncReadStateToBackend(messageId: number): Promise<void> {
    try {
        const userId = getReadStateUserId();
        if (!userId) {
            console.warn('Cannot sync read state: user not logged in');
            return;
        }

        const response = await fetch(`${BACKEND_URL}/api/messages/read`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...getAuthHeaders(),
            },
            credentials: 'include',
            body: JSON.stringify({ user_id: userId, last_read_id: messageId }),
        });

        if (!response.ok) {
            // 网络错误时保留 pendingReadId，等待重试
            pendingReadId.value = messageId;
            return;
        }

        const data = await response.json();
        // 后端返回实际生效的值 (可能因并发更高)
        if (data.status && typeof data.effective_last_read_id === 'number') {
            const effective = data.effective_last_read_id;
            if (effective > (lastReadId.value || 0)) {
                lastReadId.value = effective;
            }
        }
    } catch (e) {
        console.error('Failed to sync read state:', e);
        // 网络错误时保留 pendingReadId，等待重试
        pendingReadId.value = messageId;
    }
}

/**
 * 处理自己发送的消息
 */
export function markSentMessageAsRead(messageId: number): void {
    updateReadState(messageId);
}

/**
 * 获取第一条未读消息 ID
 */
export function getFirstUnreadId(): number | null {
    const readId = lastReadId.value;
    if (!readId) return null;

    const ids = messageIds.peek();
    for (const id of ids) {
        if (id > readId) return id;
    }
    return null;
}

// ============================================================================
// Message Grouping
// ============================================================================

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

    // 清除扩展项的激活状态并调用 onDeactivate 回调
    // 使用动态导入避免循环依赖
    import('./extensionConversations').then(({ activeExtensionId, extensionConversations }) => {
        if (activeExtensionId.value !== null) {
            // 找到当前激活的扩展项并调用其 onDeactivate
            const activeExt = extensionConversations.value.find(
                (item: { id: string }) => item.id === activeExtensionId.value
            );
            if (activeExt?.onDeactivate) {
                activeExt.onDeactivate();
            }
            activeExtensionId.value = null;
        }
    });
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
