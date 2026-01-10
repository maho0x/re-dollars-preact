import { conversations, activeConversationId, setActiveConversation } from '@/stores/chat';
import { isNarrowLayout, setMobileChatView } from '@/stores/ui';
import { formatDate } from '@/utils/format';

export function ConversationList({ searchTerm = '' }: { searchTerm?: string }) {
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
