import { MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT } from '@/utils/constants';

const CHAT_OPEN_KEY = 'dollars.isChatOpen';
const MAXIMIZED_KEY = 'dollars.isMaximized';
const MOBILE_CHAT_VIEW_KEY = 'dollars.mobileChatViewActive';
const CHAT_POSITION_KEY = 'dollarsChatPosition';

export interface WindowRect {
    left: number;
    top: number;
    width: number;
    height: number;
}

/**
 * 将窗口矩形约束在当前视口内。
 *
 * 先夹取尺寸，使其不超过视口（同时不小于最小尺寸），再夹取位置，
 * 保证窗口完整可见（左/上不为负、右/下不越界）。
 *
 * 用于两种场景：
 *  - 恢复记忆的位置时，保存值可能来自更大的屏幕/窗口；
 *  - 浏览器窗口缩小时，避免窗口底/右边缘溢出视口。
 */
export function fitWindowRectToViewport(
    rect: WindowRect,
    viewportWidth: number = window.innerWidth,
    viewportHeight: number = window.innerHeight,
): WindowRect {
    const width = Math.max(MIN_WINDOW_WIDTH, Math.min(rect.width, viewportWidth));
    const height = Math.max(MIN_WINDOW_HEIGHT, Math.min(rect.height, viewportHeight));

    const maxLeft = Math.max(0, viewportWidth - width);
    const maxTop = Math.max(0, viewportHeight - height);
    const left = Math.min(Math.max(0, rect.left), maxLeft);
    const top = Math.min(Math.max(0, rect.top), maxTop);

    return { left, top, width, height };
}

export interface SavedChatWindowPosition {
    x: number;
    y: number;
    width?: number;
    height?: number;
}

export interface SavedWindowState {
    isChatOpen: boolean | null;
    isMaximized: boolean | null;
    mobileChatViewActive: boolean | null;
    position: SavedChatWindowPosition | null;
}

function readBoolean(key: string): boolean | null {
    try {
        const raw = localStorage.getItem(key);
        return raw === null ? null : JSON.parse(raw);
    } catch {
        return null;
    }
}

export function loadWindowState(): SavedWindowState {
    return {
        isChatOpen: readBoolean(CHAT_OPEN_KEY),
        isMaximized: readBoolean(MAXIMIZED_KEY),
        mobileChatViewActive: readBoolean(MOBILE_CHAT_VIEW_KEY),
        position: loadWindowPosition(),
    };
}

export function saveChatOpenState(isOpen: boolean): void {
    localStorage.setItem(CHAT_OPEN_KEY, JSON.stringify(isOpen));
}

export function saveMaximizedState(isMaximized: boolean): void {
    localStorage.setItem(MAXIMIZED_KEY, JSON.stringify(isMaximized));
}

export function saveMobileChatViewState(active: boolean): void {
    localStorage.setItem(MOBILE_CHAT_VIEW_KEY, JSON.stringify(active));
}

export function saveWindowPosition(position: SavedChatWindowPosition): void {
    localStorage.setItem(CHAT_POSITION_KEY, JSON.stringify(position));
}

export function loadWindowPosition(): SavedChatWindowPosition | null {
    try {
        const raw = localStorage.getItem(CHAT_POSITION_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

export function clearWindowState(): void {
    localStorage.removeItem(CHAT_OPEN_KEY);
    localStorage.removeItem(MAXIMIZED_KEY);
    localStorage.removeItem(MOBILE_CHAT_VIEW_KEY);
    localStorage.removeItem(CHAT_POSITION_KEY);
}
