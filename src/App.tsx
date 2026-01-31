import { useEffect, useRef } from 'preact/hooks';
import { ChatWindow } from './components/ChatWindow';
import { initUserInfo, loadSettingsFromCloud, isLoggedIn, userInfo, settings, initializeBlockedUsers } from '@/stores/user';
import { isChatOpen } from '@/stores/chat';
import { isMaximized } from '@/stores/ui';
import { initFavorites } from '@/stores/favorites';
import { checkAuth } from '@/utils/api';
import { integrateWithNativeSettingsPanel, applyAllSettings } from '@/utils/settingsPanel';
import { ContextMenu } from './components/ContextMenu';
import { ProfileCard } from './components/ProfileCard';
import { DockButton } from './components/DockButton';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ImageViewer } from './components/ImageViewer';
import { NotificationManager, loadNotifications } from './components/NotificationManager';
import { initWebSocket } from '@/hooks/useWebSocket';
import { signal } from '@preact/signals';

// 标记设置是否已加载完成
export const settingsLoaded = signal(false);

export function App() {
    const hasInitializedRef = useRef(false);

    // 初始化
    useEffect(() => {
        // 基础初始化 (立即执行)
        initUserInfo();
        loadSettingsFromCloud();
        applyAllSettings();
        initializeBlockedUsers(); // 初始化屏蔽用户列表

        // 检查登录状态并集成设置面板 (立即执行，不依赖聊天窗口打开)
        checkAuth().then(({ isLoggedIn: loggedIn, user }) => {
            isLoggedIn.value = loggedIn;
            if (user) {
                userInfo.value = { ...userInfo.value, ...user };
            }
            // 集成设置面板
            integrateWithNativeSettingsPanel();
            // 再次应用以确保状态同步
            applyAllSettings();

            settingsLoaded.value = true;

            // 恢复窗口状态（如果启用了记忆状态）
            if (settings.value.rememberOpenState) {
                try {
                    // 恢复窗口打开状态
                    const savedChatOpen = localStorage.getItem('dollars.isChatOpen');
                    if (savedChatOpen !== null) {
                        isChatOpen.value = JSON.parse(savedChatOpen);
                    }

                    // 恢复最大化状态
                    const savedMaximized = localStorage.getItem('dollars.isMaximized');
                    if (savedMaximized !== null) {
                        isMaximized.value = JSON.parse(savedMaximized);
                    }
                } catch (e) {
                    // 忽略错误
                }
            }

            const notifType = settings.value.notificationType;
            if (notifType === 'detail') {
                // 详细模式: 连接 WebSocket + 加载通知
                initWebSocket();
                loadNotifications();
            } else if (notifType === 'simple') {
                // 精简模式: 只加载通知 API，不连 WebSocket
                loadNotifications();
            }
            // off 模式: 不做任何事，等聊天窗口打开时再连接
        });

        // 延迟初始化 (监听聊天窗口打开状态)
        const dispose = isChatOpen.subscribe((isOpen) => {
            if (isOpen && !hasInitializedRef.current) {
                hasInitializedRef.current = true;

                // 加载 BMO 表情库 (确保 BMO 表情能在聊天中渲染)
                if (typeof (window as any).CHOBITS_VER !== 'undefined') {
                    const bmoScript = document.createElement('script');
                    bmoScript.src = `/js/lib/bmo/bmo.js?${(window as any).CHOBITS_VER}`;
                    document.head.appendChild(bmoScript);
                }

                initFavorites();
            }
        });

        return dispose;
    }, []);

    // 追踪是否曾经打开过（用于延迟首次渲染，同时保留关闭动画）
    // wasOpenOnMount: 页面加载时就是打开状态，跳过入场动画
    const hasEverOpened = useRef(false);
    const wasOpenOnMount = useRef(isChatOpen.peek());
    if (isChatOpen.value) {
        hasEverOpened.current = true;
    }

    // 计算是否需要入场动画
    const needsEntryAnimation = hasEverOpened.current && !wasOpenOnMount.current;
    // 用完后重置，这样关闭再打开时也有动画
    if (hasEverOpened.current) {
        wasOpenOnMount.current = false;
    }

    return (
        <div id="dollars-chat-root" data-bg-mode={settings.value.backgroundMode}>
            <DockButton />
            <NotificationManager />
            {hasEverOpened.current && (
                <ErrorBoundary>
                    <ChatWindow skipEntryAnimation={!needsEntryAnimation && isChatOpen.value} />
                    <ContextMenu />
                    <ProfileCard />
                    <ImageViewer />
                </ErrorBoundary>
            )}
        </div>
    );
}
