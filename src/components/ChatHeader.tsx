import { onlineCount, conversations, activeConversationId, toggleChat } from '@/stores/chat';
import { isMaximized, toggleMaximize, toggleSearch, isSearchActive, isNarrowLayout, mobileChatViewActive, setMobileChatView } from '@/stores/ui';
import { activeExtensionId, extensionConversations } from '@/stores/extensionConversations';
import { SVGIcons } from '@/utils/constants';
import { openSettingsPanel } from '@/utils/settingsPanel';
import type { Conversation } from '@/types';

export function ChatHeader() {
    const handleClose = () => {
        toggleChat(false);
    };

    const handleMaximize = () => {
        toggleMaximize();
    };

    const handleSearch = () => {
        toggleSearch(!isSearchActive.value);
    };

    const handleSettings = () => {
        openSettingsPanel();
    };

    const handleBack = () => {
        setMobileChatView(false);
    };

    // 获取当前会话信息
    const activeConv = conversations.value.find((c: Conversation) => c.id === activeConversationId.value);
    const activeExtension = activeExtensionId.value
        ? extensionConversations.value.find(e => e.id === activeExtensionId.value)
        : null;

    const isShowingChatView = isNarrowLayout.value && mobileChatViewActive.value;

    // 动态标题
    let mainTitle = 'Re:Dollars';
    let avatarUrl = 'https://lsky.ry.mk/i/2025/09/06/68bc5540a8c51.webp';
    let showOnlineStatus = true;
    let statusLabel = '在线';

    if (isNarrowLayout.value && !isShowingChatView) {
        mainTitle = '会话列表';
        showOnlineStatus = false;
    } else if (activeExtension) {
        mainTitle = activeExtension.title;
        avatarUrl = activeExtension.avatar;
        if (activeExtension.statusLabel) {
            showOnlineStatus = true;
            statusLabel = activeExtension.statusLabel;
        } else {
            showOnlineStatus = false;
        }
    } else if (activeConv) {
        mainTitle = activeConv.type === 'channel' ? activeConv.title : activeConv.user?.nickname || activeConv.title;
        avatarUrl = activeConv.type === 'channel' ? activeConv.avatar : activeConv.user?.avatar || activeConv.avatar;
        showOnlineStatus = activeConv.type === 'channel';
    }

    return (
        <div class="chat-header">
            <div class="chat-header-left-pane">
                {/* Settings button - hidden when showing chat in narrow mode */}
                <button
                    id="dollars-settings-btn-header"
                    class="header-btn"
                    title="设置"
                    onClick={handleSettings}
                    style={{ display: isShowingChatView ? 'none' : 'flex' }}
                />
                {/* Back button - shown only in narrow mode when chat is active */}
                <button
                    id="dollars-back-btn"
                    class="header-btn"
                    title="返回"
                    onClick={handleBack}
                    style={{ display: isShowingChatView ? 'flex' : 'none' }}
                    dangerouslySetInnerHTML={{ __html: SVGIcons.arrowLeft || '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" fill="none"/></svg>' }}
                />
            </div>

            <div class="title-wrapper">
                {(!isNarrowLayout.value || isShowingChatView) && (
                    <img
                        class="header-chat-icon"
                        src={avatarUrl}
                        alt={mainTitle}
                    />
                )}
                <div class="header-text-column">
                    <span class="header-main-title">{mainTitle}</span>
                    {showOnlineStatus && (
                        <span class="online-status">
                            <span class="online-dot"></span>
                            <span id="dollars-online-count">{onlineCount.value}</span> {statusLabel}
                        </span>
                    )}
                </div>
            </div>

            <div class="header-buttons">
                <button
                    id="dollars-search-btn"
                    class="header-btn"
                    title="搜索"
                    onClick={handleSearch}
                />

                <button
                    id="dollars-maximize-btn"
                    class="header-btn maximize-btn"
                    title={isMaximized.value ? '还原' : '最大化'}
                    onClick={handleMaximize}
                />

                <button
                    class="header-btn close-btn"
                    title="关闭"
                    onClick={handleClose}
                />
            </div>
        </div>
    );
}
