import { signal } from '@preact/signals';

// UI 状态
export const isMobileViewport = signal(window.innerWidth <= 768);
export const isNarrowLayout = signal(false);
export const isMaximized = signal(false);
export const mobileChatViewActive = signal(false); // 初始化为 false，等布局检测后再应用

// 面板状态
export const isSmileyPanelOpen = signal(false);
export const isSmileyPanelClosing = signal(false);
export const isContextMenuOpen = signal(false);
export const isContextMenuClosing = signal(false);
export const isSearchActive = signal(false);
export const inputAreaHeight = signal(60); // 默认为 60px

// 上下文菜单
export const contextMenuPosition = signal({ x: 0, y: 0 });
export const contextMenuTargetId = signal<string | null>(null);
export const contextMenuImageUrl = signal<string | null>(null);
export const contextMenuBmoCode = signal<string | null>(null);

// 用户资料卡
export const profileCardUserId = signal<string | null>(null);
export const profileCardAnchor = signal<HTMLElement | null>(null);
export const isProfileCardClosing = signal(false);

// 图片查看器
export const isImageViewerOpen = signal(false);
export const imageViewerImages = signal<string[]>([]);
export const imageViewerIndex = signal(0);

// 监听窗口大小
if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
        isMobileViewport.value = window.innerWidth <= 768;
    });
}

// 显示上下文菜单
export function showContextMenu(x: number, y: number, targetId: string | null, imageUrl?: string | null, bmoCode?: string | null) {
    contextMenuPosition.value = { x, y };
    contextMenuTargetId.value = targetId;
    contextMenuImageUrl.value = imageUrl ?? null;
    contextMenuBmoCode.value = bmoCode ?? null;
    isContextMenuOpen.value = true;
}

// 隐藏上下文菜单 (带动画)
export function hideContextMenu() {
    if (!isContextMenuOpen.value || isContextMenuClosing.value) return;
    isContextMenuClosing.value = true;
    // 同时关闭反应选择器
    hideReactionPicker();
    setTimeout(() => {
        isContextMenuOpen.value = false;
        isContextMenuClosing.value = false;
        contextMenuTargetId.value = null;
        contextMenuImageUrl.value = null;
        contextMenuBmoCode.value = null;
    }, 150);
}

// 浮动表情选择器 (ContextMenu 触发)
export const isReactionPickerOpen = signal(false);
export const isReactionPickerClosing = signal(false);
export const reactionPickerPosition = signal({ x: 0, y: 0, width: 280 }); // Default width

export function showReactionPicker(x: number, y: number, width?: number) {
    reactionPickerPosition.value = { x, y, width: width || 280 };
    isReactionPickerClosing.value = false;
    isReactionPickerOpen.value = true;
}

// 隐藏反应选择器 (带动画)
export function hideReactionPicker() {
    if (!isReactionPickerOpen.value || isReactionPickerClosing.value) return;
    isReactionPickerClosing.value = true;
    setTimeout(() => {
        isReactionPickerOpen.value = false;
        isReactionPickerClosing.value = false;
    }, 150);
}

// 切换表情面板 (带动画)
export function toggleSmileyPanel(open?: boolean) {
    const shouldOpen = open ?? !isSmileyPanelOpen.value;
    if (shouldOpen) {
        isSmileyPanelClosing.value = false;
        isSmileyPanelOpen.value = true;
    } else {
        if (!isSmileyPanelOpen.value || isSmileyPanelClosing.value) return;
        isSmileyPanelClosing.value = true;
        setTimeout(() => {
            isSmileyPanelOpen.value = false;
            isSmileyPanelClosing.value = false;
        }, 200);
    }
}

// 显示/切换用户资料卡
export function showProfileCard(userId: string, anchor: HTMLElement) {
    // 如果点击同一用户的头像，则关闭卡片
    if (profileCardUserId.value === userId) {
        hideProfileCard();
        return;
    }
    profileCardUserId.value = userId;
    profileCardAnchor.value = anchor;
}

// 隐藏用户资料卡 (带动画)
export function hideProfileCard() {
    if (!profileCardUserId.value || isProfileCardClosing.value) return;
    isProfileCardClosing.value = true;
    setTimeout(() => {
        profileCardUserId.value = null;
        profileCardAnchor.value = null;
        isProfileCardClosing.value = false;
    }, 200); // 匹配 CSS 动画时长
}

// 显示图片查看器
export function showImageViewer(images: string[], index: number = 0) {
    imageViewerImages.value = images;
    imageViewerIndex.value = index;
    isImageViewerOpen.value = true;
}

// 隐藏图片查看器
export function hideImageViewer() {
    isImageViewerOpen.value = false;
    imageViewerImages.value = [];
    imageViewerIndex.value = 0;
}

// 切换搜索
export function toggleSearch(active?: boolean) {
    isSearchActive.value = active ?? !isSearchActive.value;
}

// 切换最大化
export function toggleMaximize() {
    isMaximized.value = !isMaximized.value;
}

export function setMobileChatView(active: boolean) {
    mobileChatViewActive.value = active;
    localStorage.setItem('dollars.mobileChatViewActive', JSON.stringify(active));
}

// 标记是否已完成首次布局检测
let hasInitializedLayout = false;

// 重置布局检测状态（在聊天窗口首次挂载时调用）
export function resetLayoutCheck() {
    hasInitializedLayout = false;
}

// 检查并更新 narrow 布局
export function checkNarrowLayout(width: number) {
    const wasNarrow = isNarrowLayout.value;
    const isNowNarrow = width < 600 || isMobileViewport.value;
    isNarrowLayout.value = isNowNarrow;

    // 首次检测：直接设置状态
    if (!hasInitializedLayout) {
        hasInitializedLayout = true;
        if (isNowNarrow) {
            mobileChatViewActive.value = true;
        } else {
            mobileChatViewActive.value = false;
        }
        return;
    }

    // 后续检测（resize）：只在状态变化时切换
    if (!wasNarrow && isNowNarrow) {
        // wide → narrow: 进入聊天视图
        mobileChatViewActive.value = true;
    } else if (wasNarrow && !isNowNarrow) {
        // narrow → wide: 退出单视图模式
        mobileChatViewActive.value = false;
    }
}

// 在聊天窗口打开时调用，确保窄布局下进入聊天视图
export function ensureNarrowLayoutChatView(width: number) {
    const isNowNarrow = width < 600 || isMobileViewport.value;
    isNarrowLayout.value = isNowNarrow;

    if (isNowNarrow && !mobileChatViewActive.value) {
        mobileChatViewActive.value = true;
    }
}
