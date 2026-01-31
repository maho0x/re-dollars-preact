import { BACKEND_URL } from './constants';
import { getAuthHeaders } from '@/stores/user';
import { getChiiApp } from '@/utils/globals';
import type { Message } from '@/types';

// 统一的消息响应解析器
const parseMessages = (data: any): Message[] =>
    Array.isArray(data) ? data : data?.messages || data?.results || [];

/**
 * 获取最近消息
 */
export async function fetchRecentMessages(limit = 50): Promise<Message[]> {
    const res = await fetch(`${BACKEND_URL}/api/messages?limit=${limit}`);
    if (!res.ok) return [];
    return parseMessages(await res.json());
}

/**
 * 获取历史消息 (向上滚动)
 */
export async function fetchHistoryMessages(beforeId: number, limit = 30): Promise<Message[]> {
    const res = await fetch(`${BACKEND_URL}/api/messages?before_id=${beforeId}&limit=${limit}`);
    if (!res.ok) return [];
    return parseMessages(await res.json());
}

/**
 * 获取更新消息 (向下滚动)
 */
export async function fetchNewerMessages(afterId: number, limit = 30): Promise<Message[]> {
    const res = await fetch(`${BACKEND_URL}/api/messages?since_db_id=${afterId}&limit=${limit}`);
    if (!res.ok) return [];
    return parseMessages(await res.json());
}

/**
 * 获取消息上下文响应结构
 */
export interface MessageContextResponse {
    messages: Message[];
    target_id: number;
    target_index: number;
    has_more_before: boolean;
    has_more_after: boolean;
}

/**
 * 获取未读数量
 */
export async function getUnreadCount(sinceId: number, uid: number): Promise<{
    count: number;
    latest_id: number;
} | null> {
    try {
        const res = await fetch(`${BACKEND_URL}/api/messages/unread-count?since_db_id=${sinceId}&uid=${uid}`);
        if (!res.ok) return null;
        const data = await res.json();
        return {
            count: data.count || 0,
            latest_id: data.latest_id || 0
        };
    } catch (e) {
        return null;
    }
}

/**
 * 获取消息上下文
 */
export async function fetchMessageContext(messageId: number, before = 30, after = 30): Promise<MessageContextResponse | null> {
    const res = await fetch(`${BACKEND_URL}/api/messages/context/${messageId}?before=${before}&after=${after}&extended=1`);
    if (!res.ok) return null;

    const data = await res.json();

    return {
        messages: parseMessages(data.messages || data),
        target_id: data.target_id ?? messageId,
        target_index: data.target_index ?? 0,
        has_more_before: data.has_more_before ?? true,
        has_more_after: data.has_more_after ?? true
    };
}

/**
 * 发送消息
 */
export async function sendMessage(content: string): Promise<{ status: boolean; message?: Message; error?: string }> {
    try {
        const { userInfo } = await import('@/stores/user');
        const formhash = userInfo.value.formhash;

        const params = new URLSearchParams();
        params.append('message', content);
        params.append('formhash', formhash);

        // 使用 Bangumi 原生接口发送消息
        const res = await fetch('/dollars?ajax=1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: params,
        });

        if (res.ok) {
            return { status: true };
        } else {
            return { status: false, error: 'Network response was not ok' };
        }
    } catch (e) {
        return { status: false, error: String(e) };
    }
}

/**
 * 获取指定日期的第一条消息 ID
 */
export async function getFirstMessageIdByDate(date: string): Promise<number | null> {
    try {
        const res = await fetch(`${BACKEND_URL}/api/messages/by-date?date=${date}&first_id_only=true`);
        if (!res.ok) return null;
        const data = await res.json();
        return data.status ? data.id : null;
    } catch (e) {
        return null;
    }
}

/**
 * 编辑消息
 */
export async function editMessage(messageId: number, content: string): Promise<{ status: boolean; error?: string }> {
    const res = await fetch(`${BACKEND_URL}/api/messages/${messageId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
        },
        credentials: 'include',
        body: JSON.stringify({ content }),
    });

    return res.json();
}

/**
 * 删除消息
 */
export async function deleteMessage(messageId: number): Promise<{ status: boolean; error?: string }> {
    const res = await fetch(`${BACKEND_URL}/api/messages/${messageId}`, {
        method: 'DELETE',
        headers: getAuthHeaders(),
        credentials: 'include',
    });

    return res.json();
}

/**
 * 切换表情反应
 */
export async function toggleReaction(messageId: number, emoji: string): Promise<{ status: boolean; action?: 'add' | 'remove' }> {
    const { userInfo } = await import('@/stores/user');

    const res = await fetch(`${BACKEND_URL}/api/messages/${messageId}/reactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeaders(),
        },
        credentials: 'include',
        body: JSON.stringify({
            emoji,
            user_id: userInfo.value.id,
            nickname: userInfo.value.nickname,
        }),
    });

    return res.json();
}


/**
 * 搜索消息
 */
export async function searchMessages(query: string, offset = 0, limit = 20): Promise<{
    messages: Message[];
    hasMore: boolean;
}> {
    const res = await fetch(
        `${BACKEND_URL}/api/search?q=${encodeURIComponent(query)}&offset=${offset}&limit=${limit}`
    );
    const data = await res.json();

    if (data.status) {
        return {
            messages: data.results || [],
            hasMore: data.hasMore || false,
        };
    }

    return { messages: [], hasMore: false };
}

/**
 * 上传文件
 */
export async function uploadFile(file: File): Promise<{
    status: boolean;
    url?: string;
    width?: number;
    height?: number;
    placeholder?: string;
    error?: string;
}> {
    const formData = new FormData();
    const isVideo = file.type.startsWith('video/') || file.type.startsWith('audio/');
    const fieldName = isVideo ? 'video' : 'image';
    const endpoint = isVideo ? `${BACKEND_URL}/api/upload/video` : `${BACKEND_URL}/api/upload`;

    formData.append(fieldName, file);

    const res = await fetch(endpoint, {
        method: 'POST',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: formData,
    });

    const data = await res.json();
    // 兼容后端返回字段: imageUrl/videoUrl -> url
    if (data.status && data.imageUrl) {
        data.url = data.imageUrl;
    }
    if (data.status && data.videoUrl) {
        data.url = data.videoUrl;
    }
    // 确保 URL 是完整路径
    if (data.status && data.url && !data.url.startsWith('http')) {
        data.url = `${BACKEND_URL}${data.url}`;
    }
    return data;
}

/**
 * 检查登录状态
 * 如果 cookie 验证失败但存在云端同步的 token，则尝试 token-login 恢复会话
 */
export async function checkAuth(): Promise<{
    isLoggedIn: boolean;
    user?: {
        id: string;
        nickname: string;
        avatar: string;
    };
}> {
    try {
        const res = await fetch(`${BACKEND_URL}/api/auth/me`, {
            headers: getAuthHeaders(),
            credentials: 'include'
        });
        const data = await res.json();

        const localUid = window.CHOBITS_UID ? String(window.CHOBITS_UID) : null;

        // 检查 cookie-based 登录是否有效（用户 id 需要匹配当前账号）
        if (data.status && (!localUid || String(data.user.id) === localUid)) {
            return { isLoggedIn: true, user: data.user };
        }

        // Cookie 验证失败，尝试使用云端同步的 token 恢复会话
        const cloud = getChiiApp()?.cloud_settings;
        const token = cloud?.getAll()?.dollarsAuthToken;

        if (token) {
            try {
                const loginRes = await fetch(`${BACKEND_URL}/api/auth/token-login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token }),
                    credentials: 'include'
                });
                const loginData = await loginRes.json();

                if (loginData.status) {
                    return { isLoggedIn: true, user: loginData.user };
                }
            } catch (tokenErr) {
                // ignore
            }
        }
    } catch (e) {
        // ignore
    }

    return { isLoggedIn: false };
}

/**
 * 获取用户资料
 */
export async function fetchUserProfile(userId: string): Promise<{
    id: number;
    nickname: string;
    username: string;
    avatar: string;
    sign?: string;
    url: string;
    lastActive?: number;
    stats?: {
        message_count: number;
        average_messages_per_day: number;
        first_message_time: string;
        last_message_time: string;
    };
} | null> {
    try {
        const res = await fetch(`${BACKEND_URL}/api/users/${userId}`);
        const data = await res.json();

        if (data.status && data.data) {
            const d = data.data;
            return {
                id: d.id,
                nickname: d.nickname,
                username: d.username,
                avatar: d.avatar?.large || d.avatar?.medium || d.avatar?.small || '',
                sign: d.sign,
                url: d.url,
                lastActive: d.stats?.last_message_time ? Math.floor(Date.parse(d.stats.last_message_time) / 1000) : undefined,
                stats: d.stats
            };
        }
    } catch (e) {
        // ignore
    }
    return null;
}

/**
 * 获取通知
 */
export async function fetchNotifications(uid: string): Promise<any[]> {
    try {
        const res = await fetch(`${BACKEND_URL}/api/notifications?uid=${uid}`);
        const data = await res.json();

        if (data.status && data.notifications) {
            return data.notifications;
        }
    } catch (e) {
        // ignore
    }

    return [];
}

/**
 * 标记通知已读
 */
export async function markNotificationRead(notifId: number, uid: string): Promise<void> {
    await fetch(`${BACKEND_URL}/api/notifications/${notifId}/read`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid }),
    });
}

/**
 * 标记所有通知已读
 */
export async function markAllNotificationsRead(uid: string): Promise<void> {
    await fetch(`${BACKEND_URL}/api/notifications/read-all`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uid }),
    });
}

/**
 * 执行 OAuth 登录
 */
export function performLogin() {
    const BGM_APP_ID = 'bgm460268b348b05f082';
    const BGM_CALLBACK_URL = `${BACKEND_URL}/api/auth/callback`;

    const width = 600, height = 700;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    const currentHost = window.location.hostname;
    const authUrl = `https://${currentHost}/oauth/authorize?client_id=${BGM_APP_ID}&response_type=code&redirect_uri=${encodeURIComponent(BGM_CALLBACK_URL)}`;

    const loginWindow = window.open(authUrl, 'BangumiLogin', `width=${width},height=${height},top=${top},left=${left}`);

    const messageHandler = (event: MessageEvent) => {
        if (event.data && event.data.type === 'bgm_login_success') {
            if (event.data.token) {
                const cloud = getChiiApp()?.cloud_settings;
                if (cloud) {
                    cloud.update({ dollarsAuthToken: event.data.token });
                    cloud.save();
                }
            }
            // 重新检查登录状态
            checkAuth().then(result => {
                if (result.isLoggedIn) {
                    window.location.reload();
                }
            });
            window.removeEventListener('message', messageHandler);
            loginWindow?.close();
        }
    };

    window.addEventListener('message', messageHandler);
}

/**
 * 执行注销
 */
export async function performLogout() {
    try {
        await fetch(`${BACKEND_URL}/api/auth/logout`, {
            method: 'POST',
            credentials: 'include',
        });

        // 清除本地 token
        const cloud = getChiiApp()?.cloud_settings;
        if (cloud) {
            cloud.delete('dollarsAuthToken');
            cloud.save();
        }

        window.location.reload();
    } catch (e) {
        // ignore
    }
}
/**
 * 批量查询用户 UID
 */
export async function lookupUsersByName(usernames: string[]): Promise<Record<string, { id: number; nickname: string }>> {
    try {
        const res = await fetch(`${BACKEND_URL}/api/users/lookup-by-name`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usernames }),
        });
        if (!res.ok) return {};
        const data = await res.json();
        return data.data || {};
    } catch (e) {
        return {};
    }
}
