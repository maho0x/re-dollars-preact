import { signal } from '@preact/signals';
import { settings } from '@/stores/user';
import { loadWindowState, saveMaximizedState, saveMobileChatViewState } from '@/utils/windowState';

// Re-export all panel state and functions from the unified panel manager
export {
    // Panel open/closing signals
    isSmileyPanelOpen,
    isSmileyPanelClosing,
    isContextMenuOpen,
    isContextMenuClosing,
    isReactionPickerOpen,
    isReactionPickerClosing,
    isUserProfilePanelOpen,
    isUserProfilePanelClosing,
    isSearchActive,
    isImageViewerOpen,

    // Panel-specific extra state
    contextMenuPosition,
    contextMenuTargetId,
    contextMenuImageUrl,
    contextMenuBmoCode,
    userProfilePanelUserId,
    imageViewerItems,
    imageViewerIndex,
    imageViewerSource,
    imageViewerTimelineState,
    reactionPickerPosition,
    searchGalleryMode,

    // Panel functions
    showContextMenu,
    hideContextMenu,
    showReactionPicker,
    hideReactionPicker,
    toggleSmileyPanel,
    showUserProfile,
    hideUserProfile,
    showImageViewer,
    hideImageViewer,
    toggleSearch,

} from '@/stores/panels';

const browserWindow = typeof window !== 'undefined' ? window : undefined;

// UI 状态
export const isMobileViewport = signal((browserWindow?.innerWidth || 1024) <= 768);
export const isNarrowLayout = signal(false);

// 初始化时不恢复状态，等待设置加载后再决定
export const isMaximized = signal(false);
// 侧边栏可见性（mobileChatViewActive === true 表示隐藏侧边栏、只显示聊天）。
// 完全由用户手动切换并持久化，不再随窗口尺寸自动变化；启动时恢复上次状态。
export const mobileChatViewActive = signal(loadWindowState().mobileChatViewActive ?? false);
export const chatLayoutReady = signal(false);

export const inputAreaHeight = signal(60); // 默认为 60px

// 监听窗口大小
browserWindow?.addEventListener?.('resize', () => {
    isMobileViewport.value = browserWindow.innerWidth <= 768;
});

// 切换最大化
export function toggleMaximize() {
    isMaximized.value = !isMaximized.value;

    if (settings.value.rememberOpenState) {
        saveMaximizedState(isMaximized.value);
    }
}

export function setMobileChatView(active: boolean) {
    mobileChatViewActive.value = active;

    if (settings.value.rememberOpenState) {
        saveMobileChatViewState(active);
    }
}

// 重置布局检测状态（在聊天窗口首次挂载时调用）
export function resetLayoutCheck() {
    chatLayoutReady.value = false;
}

// 检查并更新 narrow 布局。
// 仅根据宽度切换布局模式（并排 vs 滑动单视图），不再自动改变侧边栏可见性。
export function checkNarrowLayout(width: number) {
    isNarrowLayout.value = width < 600 || isMobileViewport.value;
}

// 在聊天窗口打开时调用：更新布局模式并标记布局就绪。
// 不再强制进入聊天视图——侧边栏可见性由用户手动控制并已从存储恢复。
export function ensureNarrowLayoutChatView(width: number) {
    isNarrowLayout.value = width < 600 || isMobileViewport.value;
    chatLayoutReady.value = true;
}
