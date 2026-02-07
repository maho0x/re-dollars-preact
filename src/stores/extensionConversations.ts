import { signal } from '@preact/signals';

/**
 * 扩展会话项接口
 */
export interface ExtensionConversationItem {
    id: string;
    title: string;
    subtitle?: string;
    avatar: string;
    badge?: number | string;
    onClick: () => void;
    onDeactivate?: () => void;  // 当扩展项被取消激活时调用(如关闭游戏)
    priority?: number;  // 排序优先级，越大越靠前
    statusLabel?: string; // 自定义在线状态文本 (例如 "在画")
}

/**
 * 存储外部注册的会话项
 */
export const extensionConversations = signal<ExtensionConversationItem[]>([]);

/**
 * 当前激活的扩展项 ID
 */
export const activeExtensionId = signal<string | null>(null);

/**
 * 注册一个扩展会话项
 * @returns 取消注册函数
 */
export function registerConversationItem(item: ExtensionConversationItem): () => void {
    // 检查是否已存在同 ID 的项
    const existing = extensionConversations.value.find(i => i.id === item.id);
    if (existing) {
        // 更新现有项
        extensionConversations.value = extensionConversations.value.map(i =>
            i.id === item.id ? item : i
        );
    } else {
        // 添加新项
        extensionConversations.value = [...extensionConversations.value, item];
    }

    // 返回取消注册函数
    return () => {
        extensionConversations.value = extensionConversations.value.filter(i => i.id !== item.id);
    };
}

/**
 * 更新扩展会话项
 */
export function updateConversationItem(id: string, updates: Partial<ExtensionConversationItem>) {
    extensionConversations.value = extensionConversations.value.map(item =>
        item.id === id ? { ...item, ...updates } : item
    );
}

/**
 * 获取所有扩展会话项(已排序)
 */
export function getExtensionConversations(): ExtensionConversationItem[] {
    return [...extensionConversations.value].sort((a, b) => (b.priority || 0) - (a.priority || 0));
}

/**
 * 设置激活的扩展项
 * 激活扩展项时,会清除普通会话的激活状态
 */
export function setActiveExtension(extensionId: string) {
    activeExtensionId.value = extensionId;
    // 清除普通会话的激活状态
    // 使用动态导入避免循环依赖
    import('./chat').then(({ activeConversationId }) => {
        activeConversationId.value = '';
    });
}
