import { signal } from '@preact/signals';
import { saveChatOpenState } from '@/utils/windowState';
import { restoreActiveConversation } from '@/stores/conversations';

export const scrollButtonMode = signal<'to-unread' | 'to-bottom'>('to-bottom');

// 初始化时不从 localStorage 恢复，等待 settings 加载后再决定
export const isChatOpen = signal(false);
export const isLoadingHistory = signal(false);
export const historyFullyLoaded = signal(false);
export const historyOldestId = signal<number | null>(null);
export const historyNewestId = signal<number | null>(null);
export const timelineIsLive = signal(true);
export const isContextLoading = signal(false);
export const initialMessagesLoaded = signal(false);

// 未读计数
export const unreadWhileScrolled = signal(0);
export const unreadJumpList = signal<number[]>([]);

// 搜索
export const searchQuery = signal('');

export const currentDateLabel = signal<string | null>(null);
export const showScrollBottomBtn = signal(false);
export const newMessageIds = signal<Set<number>>(new Set());
export const pendingJumpToMessage = signal<number | null>(null);

// 新消息到达时请求滚动到底部 (仅当已经在底部时生效)
export const pendingScrollToBottom = signal(false);
// 手动请求滚动到底部 (强制生效)
export const manualScrollToBottom = signal(0);
// 用户是否在底部 (由 ChatBody 更新，用于 WebSocket 判断是否增加未读计数)
export const isAtBottom = signal(true);

// WebSocket 状态
export const wsConnected = signal(false);
export const onlineUsers = signal<Map<string, { name: string; avatar: string }>>(new Map());
export const onlineCount = signal(0);
export const typingUsers = signal<Map<string, string>>(new Map());

/**
 * 打开/关闭聊天窗口
 * @param open - 是否打开
 * @param skipSave - 是否跳过保存到 localStorage（用于初始化恢复）
 */
export function toggleChat(open?: boolean, skipSave = false) {
    const newState = open ?? !isChatOpen.value;
    if (newState) {
        restoreActiveConversation();
    }
    isChatOpen.value = newState;

    if (!skipSave) {
        saveChatOpenState(newState);
    }
}
