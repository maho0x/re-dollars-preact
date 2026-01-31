import { conversations, activeConversationId, setActiveConversation } from '@/stores/chat';
import { isNarrowLayout, setMobileChatView } from '@/stores/ui';
import { extensionConversations } from '@/stores/extensionConversations';
import { formatDate } from '@/utils/format';

export function ConversationList({ searchTerm = '' }: { searchTerm?: string }) {
    // 过滤扩展会话项
    const extensionItems = extensionConversations.value
        .filter(item => !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => (b.priority || 0) - (a.priority || 0));

    const filteredConversations = searchTerm
        ? conversations.value.filter(conv =>
            conv.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : conversations.value;

    const handleClick = (conversationId: string) => {
        setActiveConversation(conversationId);
        // 在 narrow 模式下，切换到聊天视图
        if (isNarrowLayout.value) {
            setMobileChatView(true);
        }
    };

    return (
        <div id="dollars-conversation-list">
            {/* 扩展项 (置于顶部) */}
            {extensionItems.map(item => (
                <div
                    key={`ext-${item.id}`}
                    class="conversation-item extension-item"
                    onClick={item.onClick}
                >
                    <img src={item.avatar} class="avatar" alt={item.title} loading="lazy" />
                    <div class="dollars-conv-content">
                        <div class="dollars-conv-title">
                            <span class="dollars-conv-nickname">{item.title}</span>
                        </div>
                        {item.subtitle && <div class="dollars-conv-last-message">{item.subtitle}</div>}
                    </div>
                    {item.badge && <div class="unread-badge">{item.badge}</div>}
                </div>
            ))}
            {/* 原有会话列表 */}
            {filteredConversations.map(conv => {
                const isActive = conv.id === activeConversationId.value;
                const title = conv.type === 'channel' ? conv.title : conv.user?.nickname || conv.title;
                const avatarUrl = conv.type === 'channel' ? conv.avatar : conv.user?.avatar || conv.avatar;
                const lastMessageText = (conv.lastMessage.text || '').replace(/\[.*?\]/g, '').trim();
                const timeText = conv.lastMessage.timestamp ? formatDate(conv.lastMessage.timestamp, 'time') : '';

                return (
                    <div
                        key={conv.id}
                        class={`conversation-item ${isActive ? 'active' : ''}`}
                        data-conversation-id={conv.id}
                        onClick={() => handleClick(conv.id)}
                    >
                        <img src={avatarUrl} class="avatar" alt={title} loading="lazy" />
                        <div class="dollars-conv-content">
                            <div class="dollars-conv-title">
                                <span class="dollars-conv-nickname">{title}</span>
                                <span class="dollars-conv-timestamp">{timeText}</span>
                            </div>
                            <div class="dollars-conv-last-message">{lastMessageText || ' '}</div>
                        </div>
                        {conv.unreadCount > 0 && (
                            <div class="unread-badge">{conv.unreadCount}</div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
