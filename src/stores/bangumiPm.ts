import { signal } from '@preact/signals';
import { activeConversationId, setActiveConversation } from './conversations';
import { isChatOpen } from './chatState';
import { chatLayoutReady, isNarrowLayout, mobileChatViewActive, setMobileChatView, toggleSearch } from '@/stores/ui';
import { createPm, fetchPmConversation, fetchPmInbox, sendPmReply } from '@/services/bangumiPm/client';
import { fetchNotify, type BangumiNotify } from '@/services/bangumiPm/notify';
import { toSameOriginPmPath } from '@/services/bangumiPm/parser';
import { settings, userInfo } from '@/stores/user';
import { escapeHTML, getAvatarUrl } from '@/utils/format';
import { processBBCode } from '@/utils/bbcode';
import { NEW_MESSAGE_ANIMATION } from '@/utils/constants';
import {
    createOptimisticStableKey,
    mergeOptimisticList,
    optimisticTimestamp,
    type OptimisticMessageAdapter,
} from '@/utils/optimisticMessages';
import { updateSignalSet } from '@/utils/signalMap';
import { addPmNotification, dismissPmNotification, prunePmNotifications } from '@/stores/notifications';
import type { BangumiPmConversation, BangumiPmConversationDetail, BangumiPmMessage, BangumiPmSendOutcome } from '@/types/pm';

export const pmConversations = signal<BangumiPmConversation[]>([]);
export const pmDetails = signal<Record<string, BangumiPmConversationDetail>>({});
export const pmInboxLoading = signal(false);
export const pmMoreInboxLoading = signal(false);
export const pmInboxError = signal('');
export const pmNextInboxPage = signal<string | null>(null);
export const pmDetailLoading = signal(false);
export const pmDetailError = signal('');
export const pmComposeReceiver = signal('');
export const pmNewMessageIds = signal<Set<string>>(new Set());
// 未读短信总数（来自 /json/notify）。即使聊天面板关闭也会更新，用于 Dock 角标。
export const pmUnreadCount = signal(0);
// 每会话未读数（来自 /json/notify，id → 未读数）。始终新鲜，不依赖收件箱 HTML 解析，
// 用于「在会话视图里也能反映其他会话的新消息」这类角标。
export const pmUnreadByConversation = signal<Record<string, number>>({});

function isSameUnreadMap(a: Record<string, number>, b: Record<string, number>) {
    const keysA = Object.keys(a);
    if (keysA.length !== Object.keys(b).length) return false;
    return keysA.every(key => a[key] === b[key]);
}
// 本地把某会话标记为已读：立刻扣减 notify 派生的角标信号，不必等下一次轮询。
// （读取会话页会在服务端标记已读，下一次 notify 会与此一致。）
function markPmConversationRead(id: string) {
    const prev = pmUnreadByConversation.peek()[id] || 0;
    if (prev <= 0) return;
    const next = { ...pmUnreadByConversation.peek() };
    delete next[id];
    pmUnreadByConversation.value = next;
    pmUnreadCount.value = Math.max(0, pmUnreadCount.peek() - prev);
}

let inboxRequest: Promise<void> | null = null;
const detailRequests = new Map<string, Promise<void>>();
let hasLoadedMoreInboxPages = false;
let lastInboxLoadedAt = 0;
const lastDetailLoadedAt = new Map<string, number>();
let nextOptimisticPmId = -1;

const pmOptimisticAdapter: OptimisticMessageAdapter<BangumiPmMessage> = {
    state: message => message.state,
    stableKey: message => message.stableKey,
    contentKey: message => normalizePmMessageText(message.rawBody || message.presentationText || message.bodyText),
    senderKey: message => message.isSelf ? 'self' : message.userHref || 'peer',
    timestamp: message => message.timestamp,
};

const PM_INBOX_REFRESH_INTERVAL = 120_000;
const PM_DETAIL_REFRESH_INTERVAL = 30_000;
// /json/notify 极轻量，可持续轮询以驱动全局角标与变更探测。
// 面板打开时用更快的节奏，尽快发现对方新消息；关闭时只需维持角标，放慢即可。
const PM_NOTIFY_POLL_INTERVAL_OPEN = 5_000;
const PM_NOTIFY_POLL_INTERVAL_IDLE = 15_000;

// 把 notify 结果压成一个签名：未读总数 + 每个未读会话的 id:未读数。
// 只有签名变化时才触发昂贵的收件箱/会话 HTML 刷新。
function pmNotifySignature(notify: BangumiNotify) {
    const conversations = notify.pmList
        .map(item => `${item.id}:${item.unreadCount}`)
        .sort()
        .join(',');
    return `${notify.pmCount}|${conversations}`;
}

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
                && message.topic === candidate.topic
                && message.state === candidate.state
                && message.stableKey === candidate.stableKey;
        });
}

function normalizePmMessageText(value: string | null | undefined) {
    return (value || '').replace(/\s+/g, ' ').trim();
}

function mergeLocalPmMessages(
    current: BangumiPmConversationDetail | undefined,
    next: BangumiPmConversationDetail
) {
    const currentById = new Map((current?.messages || []).map(message => [message.id, message]));
    const messages = mergeOptimisticList(current?.messages, next.messages, pmOptimisticAdapter, {
        isIncomingCandidate: message => message.isSelf,
        timestampWindowSeconds: 60,
        mergeMatched: (incoming, local) => local.stableKey
            ? { ...incoming, stableKey: local.stableKey, state: 'sent' as const }
            : incoming,
    }).map(message => {
        const currentMessage = currentById.get(message.id);
        return currentMessage?.stableKey && !message.stableKey
            ? { ...message, stableKey: currentMessage.stableKey, state: currentMessage.state === 'sent' ? 'sent' as const : message.state }
            : message;
    });
    return messages === next.messages ? next : { ...next, messages: [...messages] };
}

function markPmMessageNew(id: string) {
    updateSignalSet(pmNewMessageIds, set => set.add(id));
    setTimeout(() => updateSignalSet(pmNewMessageIds, set => set.delete(id)), NEW_MESSAGE_ANIMATION);
}

function setPmDetail(id: string, detail: BangumiPmConversationDetail) {
    const current = pmDetails.peek()[id];
    const merged = mergeLocalPmMessages(current, detail);
    if (!arePmDetailsEqual(current, merged)) {
        pmDetails.value = { ...pmDetails.peek(), [id]: merged };
    }
    if (current) {
        const currentIds = new Set(current.messages.map(message => message.id));
        const currentStableKeys = new Set(current.messages.map(message => message.stableKey).filter(Boolean));
        for (const message of merged.messages) {
            if (currentIds.has(message.id)) continue;
            if (message.stableKey && currentStableKeys.has(message.stableKey)) continue;
            markPmMessageNew(message.id);
        }
    }
}

function renderOptimisticPmBody(body: string) {
    return processBBCode(escapeHTML(body), {}, {}, {});
}

function selfPmAvatar(detail: BangumiPmConversationDetail) {
    return [...detail.messages].reverse().find(message => message.isSelf)?.avatar || userInfo.peek().avatar || '';
}

function selfPmHref(detail: BangumiPmConversationDetail) {
    return [...detail.messages].reverse().find(message => message.isSelf)?.userHref
        || (window.CHOBITS_USERNAME ? `/user/${window.CHOBITS_USERNAME}` : '');
}

function addOptimisticPmMessage(id: string, body: string) {
    const detail = pmDetails.peek()[id];
    if (!detail) return null;

    const lastTimestamp = detail.messages[detail.messages.length - 1]?.timestamp || 0;
    const timestamp = optimisticTimestamp(lastTimestamp);

    const stableKey = createOptimisticStableKey('pm-temp');
    const message: BangumiPmMessage = {
        id: `temp-${nextOptimisticPmId--}`,
        isSelf: true,
        avatar: selfPmAvatar(detail),
        userHref: selfPmHref(detail),
        bodyHtml: renderOptimisticPmBody(body),
        bodyText: body,
        presentationText: body,
        timestamp,
        timestampText: '发送中',
        stableKey,
        rawBody: body,
        state: 'sending',
    };

    pmDetails.value = {
        ...pmDetails.peek(),
        [id]: { ...detail, messages: [...detail.messages, message] },
    };
    markPmMessageNew(message.id);

    return message.id;
}

function updateLocalPmMessage(id: string, messageId: string, updates: Partial<BangumiPmMessage>) {
    const detail = pmDetails.peek()[id];
    if (!detail) return;

    pmDetails.value = {
        ...pmDetails.peek(),
        [id]: {
            ...detail,
            messages: detail.messages.map(message =>
                message.id === messageId ? { ...message, ...updates } : message
            ),
        },
    };
}

function localPmMessage(id: string, messageId: string) {
    return pmDetails.peek()[id]?.messages.find(message => message.id === messageId);
}

async function finishPmReply(
    id: string,
    tempId: string,
    result: BangumiPmSendOutcome
) {
    if (result.status === 'sent') {
        setPmDetail(id, result.detail);
        lastDetailLoadedAt.set(id, Date.now());
        void loadPmInbox(true);
    } else if (result.status === 'unknown') {
        await loadPmDetail(id, undefined, true);
    } else {
        updateLocalPmMessage(id, tempId, { state: 'failed', timestampText: '发送失败' });
    }
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
            setPmDetail(id, detail);
            if (pmConversations.peek().some(item => item.id === id && item.unreadCount > 0)) {
                pmConversations.value = pmConversations.peek().map(item =>
                    item.id === id ? { ...item, unreadCount: 0 } : item
                );
            }
            // 会话被读取后（服务端已标记已读），撤掉卡片并立即扣减各处角标
            dismissPmNotification(id);
            markPmConversationRead(id);
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
    const tempId = addOptimisticPmMessage(id, body);
    const result = await sendPmReply(detail, body);
    if (tempId) await finishPmReply(id, tempId, result);
    return result;
}

export async function retryPmReply(id: string, tempId: string) {
    const message = localPmMessage(id, tempId);
    const detail = pmDetails.value[id];
    if (!detail || !message?.rawBody || message.state !== 'failed') {
        return { status: 'rejected' as const, error: '无法重试这条短信' };
    }

    updateLocalPmMessage(id, tempId, { state: 'sending', timestampText: '发送中' });
    const result = await sendPmReply(detail, message.rawBody);
    await finishPmReply(id, tempId, result);
    return result;
}

export async function submitNewPm(receiver: string, title: string, body: string) {
    const result = await createPm(receiver, title, body);
    if (result.status === 'sent') {
        setPmDetail(result.detail.id, result.detail);
        lastDetailLoadedAt.set(result.detail.id, Date.now());
        setActiveConversation(`pm:${result.detail.id}`);
        void loadPmInbox(true);
    }
    return result;
}

export function startPmPolling() {
    if (!isBangumiLoggedIn()) return () => {};
    let stopped = false;
    let notifyTimer: ReturnType<typeof setTimeout> | null = null;
    let notifyController: AbortController | null = null;
    let lastSignature = '';
    let hasSignature = false;
    // 收件箱 HTML 实际同步到的 notify 签名。与最新签名不同即视为过期，需强制刷新。
    // 关键：在会话视图里 notify 看到新短信时无法刷新收件箱，此值会落后；
    // 一旦返回列表（收件箱可刷新）就据此补刷，让列表的预览与角标跟上。
    let inboxSyncedSignature = '';
    // 上一轮各会话未读数，用于识别「新到消息」（未读数增加或会话新出现）。
    const previousUnread = new Map<string, number>();
    let hasBaseline = false;

    // 面板可见时的按需加载：沿用各 store 内建的节流间隔，不会造成刷屏。
    // 由聊天开关/布局/会话切换等订阅在初始与变化时触发。
    const loadVisibleData = () => {
        if (!isChatOpen.peek() || document.visibilityState !== 'visible') return;
        if (shouldLoadPmInbox()) {
            // notify 指示收件箱已过期（如刚从会话视图返回列表）时强制刷新，否则走普通节流。
            if (hasSignature && lastSignature !== inboxSyncedSignature) {
                inboxSyncedSignature = lastSignature;
                void loadPmInbox(true);
            } else {
                void loadPmInbox();
            }
        }
        const id = activePmId();
        if (id) void loadPmDetail(id);
    };

    const emitPmNotifications = (notify: BangumiNotify) => {
        // 首个轮询只建立基线，避免为进入页面时的历史未读集中刷屏。
        // 聊天窗打开时不生成卡片（面板内已能看到），但仍更新基线，避免关闭时集中补弹。
        if (settings.value.notificationType === 'detail' && hasBaseline && !isChatOpen.peek()) {
            for (const item of notify.pmList) {
                if (item.unreadCount <= (previousUnread.get(item.id) || 0)) continue;
                const known = pmConversations.peek().find(conversation => conversation.id === item.id);
                addPmNotification(item, known?.avatar || '');
            }
        }
        // 在别处（其它标签页/原站）已读的会话不再出现在未读列表里，撤掉其残留卡片。
        const unreadIds = new Set(notify.pmList.map(item => item.id));
        prunePmNotifications(unreadIds);

        previousUnread.clear();
        for (const item of notify.pmList) previousUnread.set(item.id, item.unreadCount);
        hasBaseline = true;
    };

    const applyNotify = (notify: BangumiNotify) => {
        // 全局角标：无论聊天是否打开都更新。
        if (pmUnreadCount.peek() !== notify.pmCount) pmUnreadCount.value = notify.pmCount;

        const unreadMap: Record<string, number> = {};
        for (const item of notify.pmList) unreadMap[item.id] = item.unreadCount;
        if (!isSameUnreadMap(pmUnreadByConversation.peek(), unreadMap)) {
            pmUnreadByConversation.value = unreadMap;
        }

        emitPmNotifications(notify);

        const signature = pmNotifySignature(notify);
        const changed = !hasSignature || signature !== lastSignature;
        lastSignature = signature;
        hasSignature = true;

        if (!isChatOpen.peek() || document.visibilityState !== 'visible') return;
        // 收件箱可刷新且签名落后时强制刷新（signature 只在真正刷新后才记为已同步，
        // 因此在会话视图里「消费」不掉，返回列表时仍会补刷）。
        if (shouldLoadPmInbox() && signature !== inboxSyncedSignature) {
            inboxSyncedSignature = signature;
            void loadPmInbox(true);
        }
        // 活动会话：有变化且该会话有新未读时刷新。
        if (changed) {
            const id = activePmId();
            if (id && notify.pmList.some(item => item.id === id)) {
                void loadPmDetail(id, undefined, true);
            }
        }
    };

    const pollNotify = async () => {
        if (stopped || document.visibilityState !== 'visible') return;
        notifyController?.abort();
        notifyController = new AbortController();
        try {
            const notify = await fetchNotify(notifyController.signal);
            if (!stopped) applyNotify(notify);
        } catch {
            // 瞬时网络/解析错误：忽略，下个周期重试。
        }
    };

    const scheduleNotify = () => {
        if (notifyTimer) clearTimeout(notifyTimer);
        if (stopped || document.visibilityState !== 'visible') return;
        const interval = isChatOpen.peek() ? PM_NOTIFY_POLL_INTERVAL_OPEN : PM_NOTIFY_POLL_INTERVAL_IDLE;
        notifyTimer = setTimeout(async () => {
            await pollNotify();
            scheduleNotify();
        }, interval);
    };

    const kickNotify = () => {
        void pollNotify();
        scheduleNotify();
    };

    const handleVisibility = () => {
        if (document.visibilityState === 'visible') {
            loadVisibleData();
            kickNotify();
        } else {
            if (notifyTimer) clearTimeout(notifyTimer);
            notifyController?.abort();
        }
    };

    let lastChatOpen = isChatOpen.peek();
    const unsubscribeConversation = activeConversationId.subscribe(loadVisibleData);
    const unsubscribeChatOpen = isChatOpen.subscribe(open => {
        loadVisibleData();
        if (open === lastChatOpen) return; // 忽略订阅时的首次立即触发
        lastChatOpen = open;
        // 打开时立即拉取并切到快节奏；关闭时重排到慢节奏。
        if (open) kickNotify();
        else scheduleNotify();
    });
    const unsubscribeChatLayoutReady = chatLayoutReady.subscribe(loadVisibleData);
    const unsubscribeNarrowLayout = isNarrowLayout.subscribe(loadVisibleData);
    const unsubscribeMobileChatView = mobileChatViewActive.subscribe(loadVisibleData);
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', loadVisibleData);

    kickNotify();

    return () => {
        stopped = true;
        if (notifyTimer) clearTimeout(notifyTimer);
        notifyController?.abort();
        unsubscribeConversation();
        unsubscribeChatOpen();
        unsubscribeChatLayoutReady();
        unsubscribeNarrowLayout();
        unsubscribeMobileChatView();
        document.removeEventListener('visibilitychange', handleVisibility);
        window.removeEventListener('focus', loadVisibleData);
    };
}
