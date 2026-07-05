import { wsConnected, isChatOpen } from '@/stores/chatState';
import { userInfo, settings } from '@/stores/user';
import { WEBSOCKET_URL, HEARTBEAT_INTERVAL, RECONNECT_DELAY, CONNECTION_CHECK_INTERVAL, PONG_TIMEOUT } from '@/utils/constants';
import { resetPresence, syncPresenceSubscriptions as syncPresenceWithSocket } from '@/hooks/ws/presenceHandlers';
import { checkMissedMessages } from '@/hooks/ws/messageHandlers';
import { routeWebSocketMessage } from './router';
import type { OutgoingWSMessage } from './types';

let ws: WebSocket | null = null;
let reconnectTimer: ReturnType<typeof setTimeout> | null = null;
let heartbeatTimer: ReturnType<typeof setInterval> | null = null;
let pongTimeoutTimer: ReturnType<typeof setTimeout> | null = null;
let connectionCheckTimer: ReturnType<typeof setInterval> | null = null;
let wsInitialized = false;

export function sendWebSocketMessage(data: OutgoingWSMessage) {
    if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(data));
    }
}

export function isWebSocketConnected(): boolean {
    return !!ws && ws.readyState === WebSocket.OPEN;
}

export function initWebSocketClient() {
    if (wsInitialized) return;
    wsInitialized = true;
    connectWebSocket();
    startConnectionMonitoring();
}

export function connectWebSocket() {
    if (ws && ws.readyState === WebSocket.OPEN) return;
    if (ws && ws.readyState === WebSocket.CONNECTING) return;

    if (ws) {
        ws.close();
        ws = null;
    }
    ws = new WebSocket(WEBSOCKET_URL);

    ws.onopen = () => {
        wsConnected.value = true;

        if (reconnectTimer) {
            clearTimeout(reconnectTimer);
            reconnectTimer = null;
        }

        startHeartbeat();
        sendWebSocketMessage({ type: 'identify', uid: userInfo.value.id });

        if (settings.value.sharePresence) {
            sendWebSocketMessage({
                type: 'join',
                user: {
                    id: userInfo.value.id,
                    name: userInfo.value.nickname,
                    avatar: userInfo.value.avatar,
                },
            });
        }

        if (isChatOpen.value) {
            sendWebSocketMessage({ type: 'presence', open: true });
            setTimeout(() => syncPresenceSubscriptions(), 0);
        }

        // 断线期间广播的消息不会重放，重连后主动补洞。
        setTimeout(() => checkMissedMessages(), 100);
    };

    ws.onmessage = (event) => {
        // 任意入站消息都证明连接存活，重置 pong 超时判定。
        clearPongTimeout();
        try {
            routeWebSocketMessage(JSON.parse(event.data), sendWebSocketMessage);
        } catch {
            // ignore malformed websocket payloads
        }
    };

    ws.onclose = () => {
        wsConnected.value = false;
        stopHeartbeat();
        resetPresence();

        if (settings.value.notificationType === 'detail' || isChatOpen.value) {
            scheduleReconnect();
        }
    };

    ws.onerror = () => {
        // close/reconnect is handled by onclose and connection monitoring
    };
}

export function disconnectWebSocket() {
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

export function startConnectionMonitoring() {
    if (connectionCheckTimer) return;
    connectionCheckTimer = setInterval(() => {
        const shouldBeConnected = settings.value.notificationType === 'detail' || isChatOpen.value;
        if (shouldBeConnected && !isWebSocketConnected()) {
            connectWebSocket();
        }
    }, CONNECTION_CHECK_INTERVAL);
}

export function hasConnectionMonitoring() {
    return connectionCheckTimer !== null;
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
    }, RECONNECT_DELAY);
}

export function startHeartbeat() {
    stopHeartbeat();
    if (document.hidden) return;
    heartbeatTimer = setInterval(() => {
        sendWebSocketMessage({ type: 'ping' });
        armPongTimeout();
    }, HEARTBEAT_INTERVAL);
}

export function stopHeartbeat() {
    if (heartbeatTimer) {
        clearInterval(heartbeatTimer);
        heartbeatTimer = null;
    }
    clearPongTimeout();
}

// 发出 ping 后启动存活计时器：若在 PONG_TIMEOUT 内没有收到任何入站消息，
// 判定为半开（僵尸）连接并主动关闭，触发 onclose -> 重连 -> 补洞。
function armPongTimeout() {
    clearPongTimeout();
    pongTimeoutTimer = setTimeout(() => {
        pongTimeoutTimer = null;
        if (ws) ws.close();
    }, PONG_TIMEOUT);
}

function clearPongTimeout() {
    if (pongTimeoutTimer) {
        clearTimeout(pongTimeoutTimer);
        pongTimeoutTimer = null;
    }
}

export function pauseWebSocketForHiddenDocument() {
    if (settings.value.notificationType !== 'detail') {
        stopHeartbeat();
    }
}

export function syncPresenceSubscriptions() {
    syncPresenceWithSocket(sendWebSocketMessage, isWebSocketConnected);
}

export function sendTypingStart() {
    if (isWebSocketConnected() && settings.value.sharePresence) {
        sendWebSocketMessage({ type: 'typing_start' });
    }
}

export function sendTypingStop() {
    if (isWebSocketConnected() && settings.value.sharePresence) {
        sendWebSocketMessage({ type: 'typing_stop' });
    }
}

export function sendPendingMessage(tempId: string, content: string) {
    if (isWebSocketConnected()) {
        sendWebSocketMessage({ type: 'pending_message', tempId, content });
    }
}

export function resumeWebSocketAfterVisibilityChange() {
    startHeartbeat();
    setTimeout(() => {
        const shouldConnect = isChatOpen.value || settings.value.notificationType === 'detail';
        if (shouldConnect && !isWebSocketConnected()) {
            connectWebSocket();
        }
        checkMissedMessages();
    }, 100);
}
