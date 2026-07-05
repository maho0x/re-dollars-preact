export type BangumiPmConversation = {
    id: string;
    href: string;
    nickname: string;
    avatar: string;
    dateText: string;
    lastMessage: string;
    unreadCount: number;
};

export type BangumiPmInboxPage = {
    conversations: BangumiPmConversation[];
    nextPageUrl: string | null;
};

export type BangumiPmMessage = {
    id: string;
    isSelf: boolean;
    avatar: string;
    userHref: string;
    bodyHtml: string;
    bodyText: string;
    presentationText: string;
    timestamp: number | null;
    timestampText: string;
    topic?: string;
};

export type BangumiPmForm = {
    action: string;
    fields: Record<string, string>;
};

export type BangumiPmConversationDetail = {
    id: string;
    nickname: string;
    username: string;
    avatar: string;
    messages: BangumiPmMessage[];
    replyForm: BangumiPmForm | null;
};

export type BangumiPmComposeForm = {
    form: BangumiPmForm;
    receiver: string;
};

// 右下角通知卡片用的短信通知（来自 /json/notify 的 pm_list 增量）
export type PmNotification = {
    id: string;
    href: string;
    nickname: string;
    avatar: string;
    title: string;
    unreadCount: number;
};

export type BangumiPmSendOutcome =
    | { status: 'sent'; detail: BangumiPmConversationDetail }
    | { status: 'rejected'; error: string }
    | { status: 'unknown'; error: string };
