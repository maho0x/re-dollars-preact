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
    priority?: number;  // 排序优先级，越大越靠前
}

/**
 * 存储外部注册的会话项
 */
export const extensionConversations = signal<ExtensionConversationItem[]>([]);

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
 * 获取所有扩展会话项（已排序）
 */
export function getExtensionConversations(): ExtensionConversationItem[] {
    return [...extensionConversations.value].sort((a, b) => (b.priority || 0) - (a.priority || 0));
}
