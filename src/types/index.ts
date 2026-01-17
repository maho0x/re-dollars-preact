// 会话类型
export interface Conversation {
    id: string;
    type: 'channel' | 'pm';
    title: string;
    avatar: string;
    user?: { nickname: string; avatar: string };
    lastMessage: { text: string; timestamp: number };
    unreadCount: number;
}

// 消息类型
export interface Message {
    id: number;
    uid: number;
    bangumi_id?: number;
    nickname: string;
    avatar: string;
    message: string;
    timestamp: number;
    color?: string;
    reply_to_id?: number;
    reply_details?: ReplyDetails;
    reactions?: Reaction[];
    image_meta?: Record<string, ImageMeta>;
    link_previews?: Record<string, LinkPreview>;
    is_deleted?: boolean;
    edited_at?: number;
}

export interface ReplyDetails {
    uid: number;
    nickname: string;
    avatar: string;
    content: string;
}

export interface Reaction {
    emoji: string;
    user_id: number;
    nickname: string;
    avatar?: string;
}

export interface ImageMeta {
    width: number;
    height: number;
    blurhash?: string;
}

export interface LinkPreview {
    title: string;
    description?: string;
    image?: string;
    url: string;
}

// 用户类型
export interface UserInfo {
    id: string;
    name: string;
    nickname: string;
    avatar: string;
    formhash: string;
}

// 设置类型
export interface Settings {
    showCard: boolean;
    linkPreview: boolean;
    sendShortcut: 'Enter' | 'CtrlEnter';
    sharePresence: boolean;
    notificationType: 'off' | 'detail' | 'simple';
    loadImages: boolean;
    rememberOpenState: boolean;

    backgroundMode: 'tint' | 'transparent' | 'lines';
}

// 通知类型
export interface Notification {
    id: number;
    type: 'reply' | 'mention';
    message_id: number;
    message?: Message;
    content?: string;
    nickname?: string;
    avatar?: string;
}

// WebSocket 消息类型
export type WSMessage =
    | { type: 'message'; data: Message }
    | { type: 'reaction'; data: { message_id: number; emoji: string; user_id: number; nickname: string; action: 'add' | 'remove' } }
    | { type: 'typing_start'; user_id: number; nickname: string }
    | { type: 'typing_stop'; user_id: number }
    | { type: 'presence'; users: Array<{ id: string; name: string; avatar: string }> }
    | { type: 'delete'; message_id: number }
    | { type: 'edit'; data: Message }
    | { type: 'online_count'; count: number }
    | { type: 'notification'; data: Notification };
