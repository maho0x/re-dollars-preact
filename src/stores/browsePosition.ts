import { signal } from '@preact/signals';

const BROWSE_POSITION_KEY = 'dollars_browse_position';

export interface BrowsePosition {
    anchorMessageId: number;
    timestamp: number;
}

export const browsePosition = signal<BrowsePosition | null>(null);

/**
 * 保存浏览位置到 localStorage
 */
export function saveBrowsePosition(anchorMessageId: number): void {
    const position: BrowsePosition = {
        anchorMessageId,
        timestamp: Date.now(),
    };
    browsePosition.value = position;
    localStorage.setItem(BROWSE_POSITION_KEY, JSON.stringify(position));
}

/**
 * 从 localStorage 加载浏览位置
 */
export function loadBrowsePosition(): BrowsePosition | null {
    try {
        const saved = localStorage.getItem(BROWSE_POSITION_KEY);
        if (!saved) return null;
        
        const position = JSON.parse(saved) as BrowsePosition;
        
        // 检查是否过期 (24小时)
        const MAX_AGE = 24 * 60 * 60 * 1000;
        if (Date.now() - position.timestamp > MAX_AGE) {
            clearBrowsePosition();
            return null;
        }
        
        browsePosition.value = position;
        return position;
    } catch {
        return null;
    }
}

/**
 * 清除浏览位置
 */
export function clearBrowsePosition(): void {
    browsePosition.value = null;
    localStorage.removeItem(BROWSE_POSITION_KEY);
}

/**
 * 判断是否应该恢复浏览位置
 * @param unreadCount 当前未读消息数量
 * @returns 是否应该恢复浏览位置（未读数 > 阈值）
 */
export function shouldRestoreBrowsePosition(unreadCount: number): boolean {
    const THRESHOLD = 5;
    return unreadCount > THRESHOLD;
}
