import { signal } from '@preact/signals';
import { activeConversationId, setActiveConversation } from './conversations';
import { isChatOpen } from './chatState';
import { chatLayoutReady, isNarrowLayout, mobileChatViewActive, setMobileChatView, toggleSearch } from '@/stores/ui';
import { createPm, fetchPmConversation, fetchPmInbox, sendPmReply } from '@/services/bangumiPm/client';
import { toSameOriginPmPath } from '@/services/bangumiPm/parser';
import { getAvatarUrl } from '@/utils/format';
import type { BangumiPmConversation, BangumiPmConversationDetail } from '@/types/pm';

export const pmConversations = signal<BangumiPmConversation[]>([]);
export const pmDetails = signal<Record<string, BangumiPmConversationDetail>>({});
export const pmInboxLoading = signal(false);
export const pmMoreInboxLoading = signal(false);
export const pmInboxError = signal('');
export const pmNextInboxPage = signal<string | null>(null);
export const pmDetailLoading = signal(false);
export const pmDetailError = signal('');
export const pmComposeReceiver = signal('');

let inboxRequest: Promise<void> | null = null;
const detailRequests = new Map<string, Promise<void>>();
let hasLoadedMoreInboxPages = false;
let lastInboxLoadedAt = 0;
const lastDetailLoadedAt = new Map<string, number>();

const PM_INBOX_REFRESH_INTERVAL = 120_000;
const PM_DETAIL_REFRESH_INTERVAL = 30_000;

function arePmConversationsEqual(
    current: BangumiPmConversation[],
    next: BangumiPmConversation[]
) {
    return current.length === next.length && current.every((item, index) => {
        const candidate = next[index];
        return candidate
            && item.id === candidate.id
            && item.href === candidate.href
            && item.nickname === candidate.nickname
            && item.avatar === candidate.avatar
            && item.dateText === candidate.dateText
            && item.lastMessage === candidate.lastMessage
            && item.unreadCount === candidate.unreadCount;
    });
}

function arePmFormsEqual(
    current: BangumiPmConversationDetail['replyForm'],
    next: BangumiPmConversationDetail['replyForm']
) {
    if (!current || !next) return current === next;
    const currentFields = Object.entries(current.fields);
    const nextFields = Object.entries(next.fields);
    return current.action === next.action
        && currentFields.length === nextFields.length
        && currentFields.every(([key, value]) => next.fields[key] === value);
}

function arePmDetailsEqual(
    current: BangumiPmConversationDetail | undefined,
    next: BangumiPmConversationDetail
) {
    return !!current
        && current.id === next.id
        && current.nickname === next.nickname
        && current.username === next.username
        && current.avatar === next.avatar
        && arePmFormsEqual(current.replyForm, next.replyForm)
        && current.messages.length === next.messages.length
        && current.messages.every((message, index) => {
            const candidate = next.messages[index];
            return candidate
                && message.id === candidate.id
                && message.isSelf === candidate.isSelf
                && message.avatar === candidate.avatar
                && message.userHref === candidate.userHref
                && message.bodyHtml === candidate.bodyHtml
                && message.bodyText === candidate.bodyText
                && message.presentationText === candidate.presentationText
                && message.timestamp === candidate.timestamp
                && message.timestampText === candidate.timestampText
                && message.topic === candidate.topic;
        });
}

export function isBangumiLoggedIn() {
    return Number(window.CHOBITS_UID || 0) > 0;
}

export function activePmId() {
    return activeConversationId.value.match(/^pm:(\d+)$/)?.[1] || null;
}

function shouldLoadPmInbox() {
    if (!chatLayoutReady.peek()) return false;
    if (!isNarrowLayout.peek()) return true;
    return !mobileChatViewActive.peek();
}

export function loadPmInbox(force = false) {
    if (!isBangumiLoggedIn()) {
        pmConversations.value = [];
        return Promise.resolve();
    }
    if (inboxRequest) return inboxRequest;
    if (!force && lastInboxLoadedAt && Date.now() - lastInboxLoadedAt < PM_INBOX_REFRESH_INTERVAL) {
        return Promise.resolve();
    }

    const isInitialLoad = pmConversations.peek().length === 0;
    if (isInitialLoad) {
        pmInboxLoading.value = true;
        pmInboxError.value = '';
    }
    inboxRequest = fetchPmInbox()
        .then(page => {
            let nextConversations = page.conversations;
            if (hasLoadedMoreInboxPages) {
                const firstPageIds = new Set(page.conversations.map(item => item.id));
                nextConversations = [
                    ...page.conversations,
                    ...pmConversations.peek().filter(item => !firstPageIds.has(item.id)),
                ];
            } else {
                pmNextInboxPage.value = page.nextPageUrl;
            }
            if (!arePmConversationsEqual(pmConversations.peek(), nextConversations)) {
                pmConversations.value = nextConversations;
            }
            lastInboxLoadedAt = Date.now();
            if (pmInboxError.peek()) pmInboxError.value = '';
        })
        .catch(error => { pmInboxError.value = error instanceof Error ? error.message : '短信列表加载失败'; })
        .finally(() => {
            if (isInitialLoad) pmInboxLoading.value = false;
            inboxRequest = null;
        });
    return inboxRequest;
}

export async function loadMorePmConversations() {
    const path = pmNextInboxPage.value;
    if (!path || pmMoreInboxLoading.value) return;
    pmMoreInboxLoading.value = true;
    pmInboxError.value = '';
    try {
        const page = await fetchPmInbox(path);
        const known = new Set(pmConversations.value.map(item => item.id));
        pmConversations.value = [
            ...pmConversations.value,
            ...page.conversations.filter(item => !known.has(item.id)),
        ];
        pmNextInboxPage.value = page.nextPageUrl;
        hasLoadedMoreInboxPages = true;
    } catch (error) {
        pmInboxError.value = error instanceof Error ? error.message : '更多短信会话加载失败';
    } finally {
        pmMoreInboxLoading.value = false;
    }
}

export function loadPmDetail(id: string, path = `/pm/conversation/${id}.chii`, force = false) {
    const existing = detailRequests.get(id);
    if (existing) return existing;
    const cachedDetail = pmDetails.peek()[id];
    const lastLoadedAt = lastDetailLoadedAt.get(id) || 0;
    if (!force && cachedDetail && Date.now() - lastLoadedAt < PM_DETAIL_REFRESH_INTERVAL) {
        return Promise.resolve();
    }

    if (!cachedDetail) {
        pmDetailLoading.value = true;
        pmDetailError.value = '';
    }
    const request = fetchPmConversation(path)
        .then(detail => {
            if (!arePmDetailsEqual(pmDetails.peek()[id], detail)) {
                pmDetails.value = { ...pmDetails.peek(), [id]: detail };
            }
            if (pmConversations.peek().some(item => item.id === id && item.unreadCount > 0)) {
                pmConversations.value = pmConversations.peek().map(item =>
                    item.id === id ? { ...item, unreadCount: 0 } : item
                );
            }
            lastDetailLoadedAt.set(id, Date.now());
            if (pmDetailError.peek()) pmDetailError.value = '';
        })
        .catch(error => { pmDetailError.value = error instanceof Error ? error.message : '短信会话加载失败'; })
        .finally(() => {
            detailRequests.delete(id);
            pmDetailLoading.value = detailRequests.size > 0;
        });
    detailRequests.set(id, request);
    return request;
}

export function openPmConversation(conversation: BangumiPmConversation) {
    toggleSearch(false);
    setActiveConversation(`pm:${conversation.id}`);
    if (isNarrowLayout.peek()) setMobileChatView(true);
    void loadPmDetail(conversation.id, conversation.href);
}

export function openPmConversationFromHref(href: string) {
    const path = toSameOriginPmPath(href);
    const id = path?.match(/^\/pm\/conversation\/(\d+)\.chii/)?.[1];
    if (!path || !id) return false;

    const knownConversation = pmConversations.peek().find(item => item.id === id);
    toggleSearch(false);
    setActiveConversation(`pm:${id}`);
    if (isNarrowLayout.peek()) setMobileChatView(true);
    void loadPmDetail(id, knownConversation?.href || path);
    if (!knownConversation) void loadPmInbox(true);
    return true;
}

export function openPmCompose(receiver = '') {
    toggleSearch(false);
    pmComposeReceiver.value = receiver;
    setActiveConversation('pm:new');
    if (isNarrowLayout.peek()) setMobileChatView(true);
}

function normalizeText(value: string | null | undefined) {
    return (value || '').trim().toLowerCase();
}

function userAvatarKey(value: string | null | undefined) {
    if (!value) return '';
    try {
        const url = new URL(value, window.location.origin);
        return url.pathname.replace(/\/pic\/user\/[sml]\//, '/pic/user/*/');
    } catch {
        return value;
    }
}

function findPmConversationForUser(username: string, nickname: string, avatar: string) {
    const targetUsername = normalizeText(username);
    const targetNickname = normalizeText(nickname);
    const targetAvatar = userAvatarKey(avatar ? getAvatarUrl(avatar, 'm') : '');

    const detailMatch = Object.values(pmDetails.peek()).find(detail =>
        normalizeText(detail.username) === targetUsername
            || normalizeText(detail.replyForm?.fields.msg_receivers) === targetUsername
    );
    if (detailMatch) {
        return pmConversations.peek().find(item => item.id === detailMatch.id) || {
            id: detailMatch.id,
            href: `/pm/conversation/${detailMatch.id}.chii`,
            nickname: detailMatch.nickname,
            avatar: detailMatch.avatar,
            dateText: '',
            lastMessage: '',
            unreadCount: 0,
        };
    }

    return pmConversations.peek().find(item => {
        const avatarMatches = !!targetAvatar && userAvatarKey(item.avatar) === targetAvatar;
        const nicknameMatches = !!targetNickname && normalizeText(item.nickname) === targetNickname;
        const usernameMatches = !!targetUsername && normalizeText(item.nickname) === targetUsername;
        return avatarMatches || nicknameMatches || usernameMatches;
    }) || null;
}

export async function openPmForUser(user: { username: string; nickname: string; avatar: string }) {
    let conversation = findPmConversationForUser(user.username, user.nickname, user.avatar);
    if (!conversation) {
        await loadPmInbox(true);
        conversation = findPmConversationForUser(user.username, user.nickname, user.avatar);
    }

    if (conversation) {
        openPmConversation(conversation);
        return 'conversation' as const;
    }

    openPmCompose(user.username);
    return 'compose' as const;
}

export async function submitPmReply(id: string, body: string) {
    const detail = pmDetails.value[id];
    if (!detail) return { status: 'rejected' as const, error: '会话尚未加载' };
    const result = await sendPmReply(detail, body);
    if (result.status === 'sent') {
        pmDetails.value = { ...pmDetails.value, [id]: result.detail };
        lastDetailLoadedAt.set(id, Date.now());
        void loadPmInbox(true);
    } else if (result.status === 'unknown') {
        await loadPmDetail(id, undefined, true);
    }
    return result;
}

export async function submitNewPm(receiver: string, title: string, body: string) {
    const result = await createPm(receiver, title, body);
    if (result.status === 'sent') {
        pmDetails.value = { ...pmDetails.value, [result.detail.id]: result.detail };
        lastDetailLoadedAt.set(result.detail.id, Date.now());
        setActiveConversation(`pm:${result.detail.id}`);
        void loadPmInbox(true);
    }
    return result;
}

export function startPmPolling() {
    if (!isBangumiLoggedIn()) return () => {};
    let timer: ReturnType<typeof setTimeout> | null = null;
    let stopped = false;

    const refresh = () => {
        if (!isChatOpen.peek() || document.visibilityState !== 'visible') return;
        if (shouldLoadPmInbox()) void loadPmInbox();
        const id = activePmId();
        if (id) void loadPmDetail(id);
    };
    const hasPollingWork = () => shouldLoadPmInbox() || !!activePmId();
    const schedule = () => {
        if (timer) clearTimeout(timer);
        if (stopped || !isChatOpen.peek() || document.visibilityState !== 'visible') return;
        if (!hasPollingWork()) return;
        timer = setTimeout(() => {
            refresh();
            schedule();
        }, activePmId() ? PM_DETAIL_REFRESH_INTERVAL : PM_INBOX_REFRESH_INTERVAL);
    };
    const refreshAndSchedule = () => {
        refresh();
        schedule();
    };
    const handleVisibility = () => {
        if (document.visibilityState === 'visible') refresh();
        schedule();
    };
    const unsubscribe = activeConversationId.subscribe(schedule);
    const unsubscribeChatOpen = isChatOpen.subscribe(open => {
        if (open) refresh();
        schedule();
    });
    const unsubscribeChatLayoutReady = chatLayoutReady.subscribe(refreshAndSchedule);
    const unsubscribeNarrowLayout = isNarrowLayout.subscribe(refreshAndSchedule);
    const unsubscribeMobileChatView = mobileChatViewActive.subscribe(refreshAndSchedule);
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', refresh);

    return () => {
        stopped = true;
        if (timer) clearTimeout(timer);
        unsubscribe();
        unsubscribeChatOpen();
        unsubscribeChatLayoutReady();
        unsubscribeNarrowLayout();
        unsubscribeMobileChatView();
        document.removeEventListener('visibilitychange', handleVisibility);
        window.removeEventListener('focus', refresh);
    };
}
