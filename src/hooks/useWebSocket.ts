import { useEffect, useRef, useCallback } from 'preact/hooks';
import { WEBSOCKET_URL } from '@/utils/constants';
import {
    wsConnected,
    onlineUsers,
    onlineCount,
    typingUsers,
    addMessage,
    updateMessage,
    deleteMessage,
    getMessageById,
    isChatOpen,
    updateConversationLastMessage,
    addMessagesBatch,
    messageIds,
    messageMap,
    unreadWhileScrolled,
    isAtBottom,
    timelineIsLive,
    showScrollBottomBtn,
} from '@/stores/chat';

import { getUnreadCount, fetchNewerMessages } from '@/utils/api';
import { userInfo, settings, blockedUsers } from '@/stores/user';
import { addNotification, markMessageAsSeenIfNotified } from '@/components/NotificationManager';
import type { Message } from '@/types';

let ws: WebSocket | null = null;
let reconnectTimer: ReturnType<typeof setTimeout> | null = null;
let heartbeatTimer: ReturnType<typeof setInterval> | null = null;
let connectionCheckTimer: ReturnType<typeof setInterval> | null = null;
let isInitialConnection = true;
let presenceSubscribed = new Set<string>();
let syncPresenceTimer: ReturnType<typeof setTimeout> | null = null;
let wsInitialized = false;

/**
 * 标准化消息对象（与原版一致）
 */
function normalizeMessage(msg: any): Message {
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
 * 收集可见消息中的用户 ID（用于订阅在线状态）
 */
function collectUidsForPresence(): string[] {
    const ids = messageIds.peek();
    const recentIds = ids.slice(-150);
    const uids = new Set<string>();
    const map = messageMap.peek();

    for (const id of recentIds) {
        const msg = map.get(id);
        if (msg && msg.uid) {
            uids.add(String(msg.uid));
        }
    }

    return Array.from(uids);
}

/**
 * 同步在线状态订阅（带防抖）
 */
export function syncPresenceSubscriptions() {
    if (syncPresenceTimer) {
        clearTimeout(syncPresenceTimer);
    }

    syncPresenceTimer = setTimeout(() => {
        syncPresenceTimer = null;

        if (!ws || ws.readyState !== WebSocket.OPEN || !isChatOpen.value) {
            if (presenceSubscribed.size > 0) {
                sendMessage({ type: 'presence_unsubscribe' });
                presenceSubscribed.clear();
            }
            return;
        }

        const want = new Set(collectUidsForPresence());
        const toAdd = [...want].filter(u => !presenceSubscribed.has(u));
        const toDel = [...presenceSubscribed].filter(u => !want.has(u));

        if (toDel.length) {
            sendMessage({ type: 'presence_unsubscribe', uids: toDel });
        }
        if (toAdd.length) {
            sendMessage({ type: 'presence_subscribe', uids: toAdd });
            sendMessage({ type: 'presence_query', uids: toAdd });
        }

        presenceSubscribed = want;
    }, 120);
}

/**
 * 更新反应 UI
 */
function updateReactionUI(messageId: number, reaction: { user_id: number | string; nickname: string; emoji: string; avatar?: string }, action: 'add' | 'remove') {
    const msg = getMessageById(messageId);
    if (!msg) return;

    const reactions = [...(msg.reactions || [])];
    const reactionUserId = String(reaction.user_id);

    if (action === 'add') {
        const existingIdx = reactions.findIndex(r => r.emoji === reaction.emoji && String(r.user_id) === reactionUserId);
        if (existingIdx === -1) {
            reactions.push({
                emoji: reaction.emoji,
                user_id: reaction.user_id as number,
                nickname: reaction.nickname,
                avatar: reaction.avatar,
            });
        }
    } else {
        const idx = reactions.findIndex(r => r.emoji === reaction.emoji && String(r.user_id) === reactionUserId);
        if (idx !== -1) {
            reactions.splice(idx, 1);
        }
    }

    updateMessage(messageId, { reactions });

    if (action === 'add' && String(reaction.user_id) === String(userInfo.value.id)) {
        setTimeout(() => {
            const el = document.querySelector(`#db-${messageId} .reaction-item[data-emoji="${reaction.emoji}"]`);
            if (el) {
                el.classList.add('live_selected');
                setTimeout(() => el.classList.remove('live_selected'), 1000);
            }
        }, 10);
    }
}

/**
 * 初始化 WebSocket 连接 (由 App.tsx 在设置加载完成后调用)
 */
export function initWebSocket() {
    if (wsInitialized) return;
    wsInitialized = true;
    connectWebSocket();
    startConnectionMonitoring();
}

/**
 * 连接 WebSocket
 */
function connectWebSocket() {
    if (ws && ws.readyState === WebSocket.OPEN) return;
    if (ws && ws.readyState === WebSocket.CONNECTING) return;

    if (ws) {
        ws.close();
        ws = null;
    }

    isInitialConnection = true;
    ws = new WebSocket(WEBSOCKET_URL);

    ws.onopen = () => {
        wsConnected.value = true;

        if (reconnectTimer) {
            clearTimeout(reconnectTimer);
            reconnectTimer = null;
        }

        startHeartbeat();
        sendMessage({ type: 'identify', uid: userInfo.value.id });

        if (settings.value.sharePresence) {
            sendMessage({
                type: 'join',
                user: {
                    id: userInfo.value.id,
                    name: userInfo.value.nickname,
                    avatar: userInfo.value.avatar,
                },
            });
        }

        if (isChatOpen.value) {
            sendMessage({ type: 'presence', open: true });
            setTimeout(syncPresenceSubscriptions, 0);
        }

        isInitialConnection = false;
    };

    ws.onmessage = (event) => {
        try {
            const data = JSON.parse(event.data);
            handleWebSocketMessage(data);
        } catch (e) {
            // ignore
        }
    };

    ws.onclose = (e) => {
        wsConnected.value = false;
        stopHeartbeat();

        onlineUsers.value = new Map();
        typingUsers.value = new Map();
        presenceSubscribed.clear();

        // 只有在 detail 模式或聊天窗口打开时才重连
        if (settings.value.notificationType === 'detail' || isChatOpen.value) {
            scheduleReconnect();
        }
    };

    ws.onerror = () => {
        // ignore
    };
}

function disconnectWebSocket() {
    if (reconnectTimer) {
        clearTimeout(reconnectTimer);
        reconnectTimer = null;
    }
    stopHeartbeat();
    stopConnectionMonitoring();
    if (ws) {
        ws.close();
        ws = null;
    }
    wsConnected.value = false;
}

function startConnectionMonitoring() {
    if (connectionCheckTimer) return;
    connectionCheckTimer = setInterval(() => {
        const shouldBeConnected = settings.value.notificationType === 'detail' || isChatOpen.value;
        if (shouldBeConnected && (!ws || ws.readyState !== WebSocket.OPEN)) {
            connectWebSocket();
        }
    }, 10000);
}

function stopConnectionMonitoring() {
    if (connectionCheckTimer) {
        clearInterval(connectionCheckTimer);
        connectionCheckTimer = null;
    }
}

function scheduleReconnect() {
    if (reconnectTimer) {
        clearTimeout(reconnectTimer);
    }
    reconnectTimer = setTimeout(() => {
        reconnectTimer = null;
        ws = null;
        connectWebSocket();
    }, 2000);
}

function startHeartbeat() {
    stopHeartbeat();
    if (document.hidden) return;
    heartbeatTimer = setInterval(() => {
        sendMessage({ type: 'ping' });
    }, 25000);
}

function stopHeartbeat() {
    if (heartbeatTimer) {
        clearInterval(heartbeatTimer);
        heartbeatTimer = null;
    }
}

/**
 * 发送 WebSocket 消息
 */
function sendMessage(data: any) {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(data));
    }
}

/**
 * WebSocket hook (用于组件中获取连接状态和触发连接)
 */
export function useWebSocket() {
    const wsRef = useRef<WebSocket | null>(null);

    const connect = useCallback(() => {
        connectWebSocket();
        wsRef.current = ws;
    }, []);

    const disconnect = useCallback(() => {
        disconnectWebSocket();
    }, []);

    // 页面可见性处理
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                if (settings.value.notificationType !== 'detail') {
                    stopHeartbeat();
                }
            } else {
                startHeartbeat();
                setTimeout(() => {
                    const shouldConnect = isChatOpen.value || settings.value.notificationType === 'detail';
                    if (shouldConnect && (!ws || ws.readyState !== WebSocket.OPEN)) {
                        connectWebSocket();
                    }

                    // 检查是否有漏掉的消息
                    if (isChatOpen.value) {
                        const ids = messageIds.value;
                        if (ids.length > 0) {
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
                    }
                }, 100);
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    // 聊天窗口打开时连接 (如果还没连接)
    useEffect(() => {
        if (isChatOpen.value && (!ws || ws.readyState !== WebSocket.OPEN)) {
            connectWebSocket();
            if (!connectionCheckTimer) {
                startConnectionMonitoring();
            }
        }
    }, [isChatOpen.value]);

    return { connect, disconnect, send: sendMessage, isConnected: wsConnected };
}

/**
 * 处理 WebSocket 消息
 */
function handleWebSocketMessage(data: any) {
    if (data.ackId) {
        sendMessage({ type: 'ack', ackId: data.ackId });
    }

    switch (data.type) {
        case 'online_count_update':
            onlineCount.value = data.count;
            break;

        case 'presence_result':
            if (Array.isArray(data.users)) {
                const newOnlineUsers = new Map(onlineUsers.value);
                data.users.forEach(({ id, active }: { id: string; active: boolean }) => {
                    const uid = String(id);
                    if (active) {
                        newOnlineUsers.set(uid, true as any);
                    } else {
                        newOnlineUsers.delete(uid);
                    }
                });
                onlineUsers.value = newOnlineUsers;
            }
            break;

        case 'presence_update': {
            const u = data.user;
            if (u && u.id != null) {
                const uid = String(u.id);
                const isActive = !!u.active;
                const newOnlineUsers = new Map(onlineUsers.value);
                if (isActive) {
                    newOnlineUsers.set(uid, true as any);
                } else {
                    newOnlineUsers.delete(uid);
                }
                onlineUsers.value = newOnlineUsers;
            }
            break;
        }

        case 'typing_start': {
            const typingUserId = String(data.user?.id);
            // 忽略自己和屏蔽用户的输入状态
            if (typingUserId === String(userInfo.value.id)) return;
            if (blockedUsers.value.has(typingUserId)) return;
            typingUsers.value = new Map(typingUsers.value).set(
                typingUserId,
                data.user.name || data.user.nickname
            );
            break;
        }

        case 'typing_stop': {
            const newTyping = new Map(typingUsers.value);
            newTyping.delete(String(data.user?.id));
            typingUsers.value = newTyping;
            break;
        }

        case 'reaction_add':
            updateReactionUI(data.payload.message_id, data.payload.reaction, 'add');
            break;

        case 'reaction_remove': {
            const { message_id, user_id, emoji, nickname } = data.payload;
            updateReactionUI(message_id, { user_id, nickname: nickname || '', emoji }, 'remove');
            break;
        }

        case 'new_messages': {
            const payload = Array.isArray(data.payload) ? data.payload : [];
            if (!payload.length) break;

            // 过滤屏蔽用户的消息
            const filteredPayload = payload.filter(
                (msg: any) => !blockedUsers.value.has(String(msg.uid))
            );
            if (!filteredPayload.length) break;

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
                    addMessage(normalizedMsg);
                    if (String(normalizedMsg.uid) !== currentUserId) {
                        newUnreadCount++;
                    }
                }
            }

            if (newUnreadCount > 0 && timelineIsLive.value && !isAtBottom.value) {
                unreadWhileScrolled.value += newUnreadCount;
                showScrollBottomBtn.value = true;
            }
            break;
        }

        case 'new_pm': {
            const payload = data.payload;
            if (!payload) break;
            // 过滤屏蔽用户的私信
            if (blockedUsers.value.has(String(payload.uid))) break;
            const normalizedMsg = normalizeMessage(payload);
            if (!getMessageById(normalizedMsg.id)) {
                addMessage(normalizedMsg);
            }
            break;
        }

        case 'notification': {
            const n = data.payload;
            addNotification(n);

            if (isChatOpen.value && unreadWhileScrolled.value === 0) {
                const mid = Number(n.message_id || n.message?.id);
                if (mid) {
                    setTimeout(() => markMessageAsSeenIfNotified(mid), 100);
                }
            }
            break;
        }

        case 'message_delete': {
            const { id } = data.payload;
            deleteMessage(Number(id));
            break;
        }

        case 'message_edit': {
            const fullMsg = data.payload;
            updateMessage(fullMsg.id, normalizeMessage(fullMsg));
            break;
        }

        case 'pong':
            break;
    }
}

/**
 * 发送输入状态
 */
export function sendTypingStart() {
    if (ws && ws.readyState === WebSocket.OPEN && settings.value.sharePresence) {
        sendMessage({ type: 'typing_start' });
    }
}

export function sendTypingStop() {
    if (ws && ws.readyState === WebSocket.OPEN && settings.value.sharePresence) {
        sendMessage({ type: 'typing_stop' });
    }
}
