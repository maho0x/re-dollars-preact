import { onlineCount, toggleChat } from '@/stores/chatState';
import { conversations, activeConversationId } from '@/stores/conversations';
import { isMaximized, toggleMaximize, toggleSearch, isSearchActive, isNarrowLayout, mobileChatViewActive, setMobileChatView, isUserProfilePanelOpen, hideUserProfile } from '@/stores/ui';
import { activeExtensionId, extensionConversations } from '@/stores/extensionConversations';
import { openSettingsPanel } from '@/utils/settingsPanel';
import type { Conversation } from '@/types';
import { activePmId, pmComposeReceiver, pmConversations, pmDetails, pmUnreadByConversation } from '@/stores/bangumiPm';

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

    const handleToggleSidebar = () => {
        setMobileChatView(!mobileChatViewActive.value);
    };

    // 获取当前会话信息
    const activeConv = conversations.value.find((c: Conversation) => c.id === activeConversationId.value);
    const activeExtension = activeExtensionId.value
        ? extensionConversations.value.find(e => e.id === activeExtensionId.value)
        : null;
    const pmId = activePmId();
    const activePm = pmId ? pmDetails.value[pmId] : null;
    const activePmConversation = pmId ? pmConversations.value.find(item => item.id === pmId) : null;
    const isPmActive = activeConversationId.value.startsWith('pm:');

    const isShowingChatView = isNarrowLayout.value && mobileChatViewActive.value;

    // 当前会话以外的未读数：窄视图下返回按钮上加角标，提示列表里还有新消息。
    // 短信未读取自 notify（始终新鲜），频道未读取自会话列表，均排除当前会话。
    const otherUnread = conversations.value.reduce(
        (sum, c) => (c.id === activeConversationId.value ? sum : sum + (c.unreadCount || 0)),
        0
    ) + Object.entries(pmUnreadByConversation.value).reduce(
        (sum, [id, count]) => (`pm:${id}` === activeConversationId.value ? sum : sum + (count || 0)),
        0
    );
    const otherUnreadLabel = otherUnread > 99 ? '99+' : String(otherUnread);

    // 动态标题
    let mainTitle = 'Re:Dollars';
    let avatarUrl = 'https://lsky.ry.mk/i/2025/09/06/68bc5540a8c51.webp';
    let showOnlineStatus = true;
    let statusLabel = '在线';

    if (isNarrowLayout.value && !isShowingChatView) {
        mainTitle = '会话列表';
        showOnlineStatus = false;
    } else if (isPmActive) {
        mainTitle = activeConversationId.value === 'pm:new'
            ? (pmComposeReceiver.value ? `发短信给 ${pmComposeReceiver.value}` : '新建 Bangumi 短信')
            : activePm?.nickname || activePmConversation?.nickname || 'Bangumi 短信';
        avatarUrl = activePm?.avatar || activePmConversation?.avatar || '';
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

    // 用户资料页面模式（仅窄视图/全屏时接管 header）
    if (isUserProfilePanelOpen.value && isNarrowLayout.value) {
        return (
            <div class="chat-header">
                <div class="chat-header-left-pane">
                    <button
                        id="dollars-back-btn"
                        class="header-btn"
                        title="返回"
                        onClick={hideUserProfile}
                    />
                </div>
                <div class="title-wrapper">
                    <div class="header-text-column">
                        <span class="header-main-title">用户资料</span>
                    </div>
                </div>
                <div class="header-buttons">
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
                {/* Sidebar toggle - wide mode only; reuses the back-arrow icon */}
                {!isNarrowLayout.value && (
                    <button
                        id="dollars-sidebar-toggle-btn"
                        class="header-btn"
                        title={mobileChatViewActive.value ? '显示会话列表' : '隐藏会话列表'}
                        onClick={handleToggleSidebar}
                        style={{ transform: mobileChatViewActive.value ? 'scaleX(-1)' : 'none' }}
                    />
                )}
                {/* Back button - shown only in narrow mode when chat is active。
                    按钮用 mask-image 上色，角标必须作为兄弟节点放在外层容器，否则会被 mask 裁成图标形状。 */}
                <span class="header-back-wrap" style={{ display: isShowingChatView ? 'inline-flex' : 'none' }}>
                    <button
                        id="dollars-back-btn"
                        class="header-btn"
                        title={otherUnread > 0 ? `返回（其他会话有 ${otherUnread} 条新消息）` : '返回'}
                        onClick={handleBack}
                    />
                    {otherUnread > 0 && <span class="header-btn-badge">{otherUnreadLabel}</span>}
                </span>
            </div>

            <div class="title-wrapper">
                {avatarUrl && (!isNarrowLayout.value || isShowingChatView) && (
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
                {!isPmActive && (
                    <button
                        id="dollars-search-btn"
                        class="header-btn"
                        title="搜索"
                        onClick={handleSearch}
                    />
                )}

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
