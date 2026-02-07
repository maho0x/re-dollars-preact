/**
 * Re:Dollars 扩展 API
 * 允许第三方脚本扩展本项目的功能
 */

import { type Signal } from '@preact/signals';
import { isChatOpen, toggleChat } from '@/stores/chat';
import { showProfileCard } from '@/stores/ui';
import { isLoggedIn, userInfo } from '@/stores/user';
import type { UserInfo } from '@/types';
import { extensionConversations, registerConversationItem, updateConversationItem, type ExtensionConversationItem } from '@/stores/extensionConversations';

// 导入 UI 组件
import { UserAvatar } from '@/components/UserAvatar';

// API 版本
const API_VERSION = '1.0.0';

// 事件回调存储
type EventCallback = (...args: any[]) => void;
const eventListeners = new Map<string, Set<EventCallback>>();

/**
 * 扩展会话项接口 (对外暴露)
 */
export interface ConversationItem {
    id: string;
    title: string;
    subtitle?: string;
    avatar: string;
    badge?: number | string;
    onClick: () => void;
    priority?: number;
    statusLabel?: string;
}

/**
 * DollarsAPI 接口定义
 */
export interface DollarsAPIInterface {
    version: string;

    // 1. 会话列表扩展
    conversationList: {
        registerItem(item: ConversationItem): () => void;
        updateItem(id: string, updates: Partial<ConversationItem>): void;
        getItems(): ConversationItem[];
    };

    // 2. UI 组件导出
    components: {
        UserAvatar: typeof UserAvatar;
    };

    // 3. 状态访问 (只读)
    state: {
        isChatOpen: Signal<boolean>;
        isLoggedIn: Signal<boolean>;
        userInfo: Signal<UserInfo>;
    };

    // 4. 事件监听
    events: {
        on(event: string, callback: EventCallback): () => void;
        off(event: string, callback: EventCallback): void;
        emit(event: string, ...args: any[]): void;
    };

    // 5. 操作
    actions: {
        toggleChat(open?: boolean): void;
        showProfileCard(userId: string, anchor: HTMLElement): void;
    };
}

// 扩展全局 Window 接口
declare global {
    interface Window {
        DollarsAPI?: DollarsAPIInterface;
    }
}

/**
 * 创建 DollarsAPI 实例
 */
function createDollarsAPI(): DollarsAPIInterface {
    return {
        version: API_VERSION,

        conversationList: {
            registerItem(item: ConversationItem): () => void {
                return registerConversationItem(item as ExtensionConversationItem);
            },
            updateItem(id: string, updates: Partial<ConversationItem>): void {
                updateConversationItem(id, updates as Partial<ExtensionConversationItem>);
            },
            getItems(): ConversationItem[] {
                return [...extensionConversations.value];
            }
        },

        components: {
            UserAvatar,
        },

        state: {
            isChatOpen,
            isLoggedIn,
            userInfo,
        },

        events: {
            on(event: string, callback: EventCallback): () => void {
                if (!eventListeners.has(event)) {
                    eventListeners.set(event, new Set());
                }
                eventListeners.get(event)!.add(callback);

                // 返回取消订阅函数
                return () => {
                    eventListeners.get(event)?.delete(callback);
                };
            },
            off(event: string, callback: EventCallback): void {
                eventListeners.get(event)?.delete(callback);
            },
            emit(event: string, ...args: any[]): void {
                const listeners = eventListeners.get(event);
                if (listeners) {
                    listeners.forEach(callback => {
                        try {
                            callback(...args);
                        } catch (e) {
                            console.error(`[DollarsAPI] Event callback error for '${event}':`, e);
                        }
                    });
                }
            }
        },

        actions: {
            toggleChat(open?: boolean): void {
                toggleChat(open);
            },
            showProfileCard(userId: string, anchor: HTMLElement): void {
                showProfileCard(userId, anchor);
            }
        }
    };
}

/**
 * 初始化并注册全局 API
 */
export function initDollarsAPI(): void {
    const api = createDollarsAPI();
    window.DollarsAPI = api;

    // 监听聊天窗口状态变化并触发事件
    isChatOpen.subscribe((isOpen) => {
        api.events.emit(isOpen ? 'chatOpen' : 'chatClose');
    });

    console.log(`[Re:Dollars] Extension API v${API_VERSION} initialized`);
}

/**
 * 获取 API 实例
 */
export function getDollarsAPI(): DollarsAPIInterface | undefined {
    return window.DollarsAPI;
}

/**
 * 触发事件 (供内部使用)
 */
export function emitEvent(event: string, ...args: any[]): void {
    window.DollarsAPI?.events.emit(event, ...args);
}
