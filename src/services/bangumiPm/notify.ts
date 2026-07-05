import { toSameOriginPmPath } from './parser';

// Bangumi 的轻量通知端点：一次极小的 JSON 请求即可拿到未读短信总数与未读会话列表，
// 无需拉取/解析整张收件箱 HTML。用作变更探测器（决定何时刷新重的 HTML）与全局未读角标来源。
export interface BangumiNotifyPmItem {
    id: string;
    peerUid: number;
    peerName: string;
    title: string;
    unreadCount: number;
    href: string;
}

export interface BangumiNotify {
    pmCount: number;
    pmList: BangumiNotifyPmItem[];
    // /pm/ignore_unread.chii?gh=<formhash>，用于「全部标记已读」（Phase 2 预留）
    pmIgnoreUrl: string | null;
}

export async function fetchNotify(signal?: AbortSignal): Promise<BangumiNotify> {
    const response = await fetch(`/json/notify?_=${Date.now()}`, {
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json, text/javascript, */*; q=0.01',
            'X-Requested-With': 'XMLHttpRequest',
        },
        signal,
    });
    if (!response.ok) throw new Error(`Bangumi 通知请求失败 (${response.status})`);
    const data = await response.json();

    const pmList: BangumiNotifyPmItem[] = Array.isArray(data?.pm_list)
        ? data.pm_list.flatMap((item: any) => {
            const id = item?.conversation_id != null ? String(item.conversation_id) : '';
            if (!id) return [];
            return [{
                id,
                peerUid: Number(item.peer_uid) || 0,
                peerName: typeof item.peer_name === 'string' ? item.peer_name : '',
                title: typeof item.title === 'string' ? item.title : '',
                unreadCount: Number(item.unread_count) || 0,
                href: (item.url && toSameOriginPmPath(item.url)) || `/pm/conversation/${id}.chii`,
            }];
        })
        : [];

    return {
        pmCount: Number(data?.pm_count) || 0,
        pmList,
        pmIgnoreUrl: typeof data?.pm_ignore_url === 'string' ? toSameOriginPmPath(data.pm_ignore_url) : null,
    };
}
