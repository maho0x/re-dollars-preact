// 配置常量
const DEFAULT_BACKEND_URL = 'https://rd.ry.mk';

function trimTrailingSlash(value: string): string {
    return value.replace(/\/+$/, '');
}

export const BACKEND_URL = trimTrailingSlash(
    import.meta.env.VITE_DOLLARS_BACKEND_URL || DEFAULT_BACKEND_URL
);
export const BACKEND_API_URL = trimTrailingSlash(
    import.meta.env.VITE_DOLLARS_BACKEND_API_URL || `${BACKEND_URL}/api/v1`
);
export const UPLOAD_BASE_URL = trimTrailingSlash(
    import.meta.env.VITE_DOLLARS_UPLOAD_BASE_URL || 'https://up.ry.mk'
);
export const UPLOAD_API_URL = trimTrailingSlash(
    import.meta.env.VITE_DOLLARS_UPLOAD_API_URL || `${UPLOAD_BASE_URL}/api/upload`
);
export const FILE_UPLOAD_API_URL = trimTrailingSlash(
    import.meta.env.VITE_DOLLARS_FILE_UPLOAD_API_URL || `${UPLOAD_API_URL}/file`
);
export const WEBSOCKET_URL = (
    import.meta.env.VITE_DOLLARS_WEBSOCKET_URL ||
    `${BACKEND_URL.replace(/^http/, 'ws')}/ws`
);
export const AUTH_BASE_URL = trimTrailingSlash(
    import.meta.env.VITE_DOLLARS_AUTH_BASE_URL || 'https://auth.ry.mk'
);
export const AUTH_CLIENT = import.meta.env.VITE_DOLLARS_AUTH_CLIENT || 're-dollars';
export const BGM_APP_ID = 'bgm460268b348b05f082';
export const BGM_CALLBACK_URL = `${BACKEND_API_URL}/auth/callback`;

// UI 常量
export const MESSAGE_GROUP_TIME_GAP = 300;

// 聊天窗口最小尺寸 (px)
export const MIN_WINDOW_WIDTH = 280;
export const MIN_WINDOW_HEIGHT = 200;

// 时间常量 (ms)
export const TYPING_STOP_DELAY = 2500;
export const DRAFT_SAVE_DELAY = 1000;
export const SEARCH_DEBOUNCE = 500;
export const MENTION_DEBOUNCE = 300;
export const READ_STATE_SYNC_DELAY = 500;
export const PRESENCE_SYNC_DELAY = 120;
export const TYPING_AUTO_CLEAR = 10000;
export const HEARTBEAT_INTERVAL = 25000;
export const RECONNECT_DELAY = 2000;
export const CONNECTION_CHECK_INTERVAL = 10000;
// 发出 ping 后等待任意入站消息（含 pong）的存活窗口；超时则判定为半开连接并主动重连。
// 必须小于 HEARTBEAT_INTERVAL，否则下一次 ping 会在超时前重置计时器，掩盖僵尸连接。
export const PONG_TIMEOUT = 10000;

// 滚动阈值 (px)
export const SCROLL_BOTTOM_THRESHOLD = 50;
export const NEAR_BOTTOM_THRESHOLD = 150;
export const HISTORY_LOAD_THRESHOLD = 200;

// DOM 限制
export const MAX_DOM_MESSAGES = 100;
export const MAX_MENTION_RESULTS = 10;
export const MAX_AVATARS_SHOWN = 5;
export const COLLAPSE_MAX_HEIGHT = 300;

// 动画时长 (ms)
export const PANEL_CLOSE_DURATION = 300;
export const SCROLL_ANIMATION_DURATION = 700;
export const HIGHLIGHT_ANIMATION_DURATION = 800;
export const NEW_MESSAGE_ANIMATION = 350;

// 右键菜单快捷表情 (6 items for horizontal row)
export const CONTEXT_MENU_REACTIONS = [67, 63, 38, 124, 46, 106].map(n => `(bgm${n})`);
