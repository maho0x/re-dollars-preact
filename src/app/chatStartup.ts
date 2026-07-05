import { signal } from '@preact/signals';
import { useEffect, useRef } from 'preact/hooks';
import { initWebSocketClient } from '@/services/websocket/client';
import { initFavorites } from '@/stores/favorites';
import { isChatOpen } from '@/stores/chatState';
import { isMaximized } from '@/stores/ui';
import {
    initUserInfo,
    loadSettingsFromCloud,
    isLoggedIn,
    userInfo,
    settings,
    initializeBlockedUsers,
} from '@/stores/user';
import { checkAuth } from '@/utils/api/auth';
import { ensureBmoji } from '@/utils/bmo';
import { installBangumiPmNoticeOpenHandler, installHomeCard } from '@/app/hostIntegrations';
import { integrateWithNativeSettingsPanel, refreshNativeSettingsPanelAuthState, applyAllSettings } from '@/utils/settingsPanel';
import { loadWindowState } from '@/utils/windowState';
import { startPmPolling } from '@/stores/bangumiPm';
import { restoreActiveConversation } from '@/stores/conversations';
import { loadDollarsNotifications } from '@/stores/notifications';

// 标记设置是否已加载完成
export const settingsLoaded = signal(false);

function restoreRememberedWindowState() {
    const savedState = loadWindowState();
    if (savedState.activeConversationId !== null) {
        restoreActiveConversation();
    }

    if (!settings.value.rememberOpenState) return;

    if (savedState.isChatOpen !== null) {
        isChatOpen.value = savedState.isChatOpen;
    }
    if (savedState.isMaximized !== null) {
        isMaximized.value = savedState.isMaximized;
    }
}

function startNotificationMode() {
    const notifType = settings.value.notificationType;
    if (notifType === 'detail') {
        initWebSocketClient();
        void loadDollarsNotifications();
    } else if (notifType === 'simple') {
        void loadDollarsNotifications();
    }
}

function applyAuthState(result: Awaited<ReturnType<typeof checkAuth>>) {
    isLoggedIn.value = result.isLoggedIn;
    if (result.user) {
        userInfo.value = { ...userInfo.value, ...result.user };
    }
    refreshNativeSettingsPanelAuthState();
}

async function syncAuthState() {
    applyAuthState(await checkAuth());
}

function initializeSession() {
    initUserInfo();
    loadSettingsFromCloud();
    applyAllSettings();
    installHomeCard();
    installBangumiPmNoticeOpenHandler();
    integrateWithNativeSettingsPanel();
    void initializeBlockedUsers();

    settingsLoaded.value = true;

    restoreRememberedWindowState();
    startNotificationMode();
    void syncAuthState();
}

export function useAppStartup() {
    useEffect(() => {
        initializeSession();
        return startPmPolling();
    }, []);
}

export function useDeferredChatStartup() {
    const hasInitializedRef = useRef(false);

    useEffect(() => {
        return isChatOpen.subscribe((isOpen) => {
            if (!isOpen || hasInitializedRef.current) return;

            hasInitializedRef.current = true;
            ensureBmoji();
            initFavorites();
        });
    }, []);
}

export function useChatWindowMountState() {
    const hasEverOpened = useRef(false);
    const wasOpenOnMount = useRef(isChatOpen.peek());

    if (isChatOpen.value) {
        hasEverOpened.current = true;
    }

    const needsEntryAnimation = hasEverOpened.current && !wasOpenOnMount.current;
    if (hasEverOpened.current) {
        wasOpenOnMount.current = false;
    }

    return {
        hasEverOpened: hasEverOpened.current,
        skipEntryAnimation: !needsEntryAnimation && isChatOpen.value,
    };
}
