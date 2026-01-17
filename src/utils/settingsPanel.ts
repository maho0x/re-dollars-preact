import { settings, saveSettings, isLoggedIn, userInfo } from '@/stores/user';
import { isChatOpen } from '@/stores/chat';
import { performLogin, performLogout } from '@/utils/api';
import type { Settings } from '@/types';
import { getChiiLib } from '@/utils/globals';

interface SettingsConfigItem {
    key: keyof Settings | 'auth_control_group';
    type: 'checkbox' | 'radio' | 'auth_control_group';
    label: string;
    options?: Record<string, string>;
    onchange?: () => void;
}

const settingsConfig: SettingsConfigItem[] = [
    {
        key: 'auth_control_group',
        type: 'auth_control_group',
        label: 'Bangumi 授权',
    },
    {
        key: 'showCard',
        type: 'checkbox',
        label: '首页显示 Re:Dollars 卡片',
        onchange: applyHomeCardDisplay,
    },
    {
        key: 'linkPreview',
        type: 'checkbox',
        label: '启用链接预览',
    },
    {
        key: 'sharePresence',
        type: 'checkbox',
        label: '分享在线状态',
    },
    {
        key: 'notificationType',
        type: 'radio',
        label: '消息通知',
        options: {
            detail: '详细',
            simple: '精简',
            off: '关闭',
        },
    },
    {
        key: 'loadImages',
        type: 'checkbox',
        label: '默认加载图片',
    },
    {
        key: 'rememberOpenState',
        type: 'checkbox',
        label: '记忆窗口状态',
        onchange: handleRememberOpenStateChange,
    },
    {
        key: 'sendShortcut',
        type: 'radio',
        label: '发送快捷键',
        options: {
            CtrlEnter: 'Ctrl+Enter 发送',
            Enter: 'Enter 发送',
        },
    },
    {
        key: 'backgroundMode',
        type: 'radio',
        label: '主题背景',
        options: {
            transparent: '透明',
            lines: '线条',
            tint: '色调',
        },
        onchange: applyBackgroundPattern,
    },
];

function applyHomeCardDisplay() {
    const card = document.getElementById('dollars-card');
    if (card) {
        card.style.display = settings.value.showCard ? '' : 'none';
    }
}

function applyBackgroundPattern() {
    const root = document.getElementById('dollars-chat-root');
    if (root) {
        root.dataset.bgMode = settings.value.backgroundMode;
        root.classList.remove('no-background-pattern');
    }
}

function handleRememberOpenStateChange() {
    // 如果关闭了记忆状态，清除所有保存的窗口状态
    if (!settings.value.rememberOpenState) {
        localStorage.removeItem('dollars.isChatOpen');
        localStorage.removeItem('dollars.isMaximized');
        localStorage.removeItem('dollars.mobileChatViewActive');
        localStorage.removeItem('dollarsChatPosition');
    } else {
        // 如果开启了记忆状态，保存当前所有窗口状态
        localStorage.setItem('dollars.isChatOpen', JSON.stringify(isChatOpen.value));
        
        // 导入 UI 状态
        import('@/stores/ui').then(({ isMaximized, mobileChatViewActive }) => {
            localStorage.setItem('dollars.isMaximized', JSON.stringify(isMaximized.value));
            localStorage.setItem('dollars.mobileChatViewActive', JSON.stringify(mobileChatViewActive.value));
        }).catch(() => {
            // 忽略错误
        });
    }
}

export function applyAllSettings() {
    applyHomeCardDisplay();
    applyBackgroundPattern();
}

function generateApiConfig() {
    return settingsConfig.map((s) => {
        if (s.type === 'auth_control_group') {
            return {
                title: s.label,
                name: 'dollars_auth_action',
                type: 'radio' as const,
                defaultValue: isLoggedIn.value ? 'logged_in' : 'logged_out',
                getCurrentValue: () => (isLoggedIn.value ? 'logged_in' : 'logged_out'),
                onChange: (value: string) => {
                    if (value === 'logged_in') {
                        performLogin();
                    } else if (value === 'logged_out') {
                        performLogout();
                    }
                },
                options: [
                    { value: 'logged_in', label: isLoggedIn.value ? `已授权：${userInfo.value.nickname}` : '点击授权' },
                    { value: 'logged_out', label: isLoggedIn.value ? '撤销授权' : '未授权' },
                ],
            };
        } else if (s.type === 'checkbox') {
            return {
                title: s.label,
                name: s.key,
                type: 'radio' as const,
                defaultValue: String(settings.value[s.key as keyof Settings] ?? true),
                getCurrentValue: () => String(settings.value[s.key as keyof Settings]),
                onChange: (value: string) => {
                    settings.value = {
                        ...settings.peek(),
                        [s.key]: value === 'true',
                    };
                    saveSettings();
                    if (s.onchange) s.onchange();
                },
                options: [
                    { value: 'true', label: '开启' },
                    { value: 'false', label: '关闭' },
                ],
            };
        } else if (s.type === 'radio' && s.options) {
            return {
                title: s.label,
                name: s.key,
                type: 'radio' as const,
                defaultValue: String(settings.value[s.key as keyof Settings] ?? Object.keys(s.options)[0]),
                getCurrentValue: () => String(settings.value[s.key as keyof Settings]),
                onChange: (value: string) => {
                    settings.value = {
                        ...settings.peek(),
                        [s.key]: value,
                    };
                    saveSettings();
                    if (s.onchange) s.onchange();
                },
                options: Object.entries(s.options).map(([value, label]) => ({ value, label })),
            };
        }
        return null;
    }).filter((x): x is any => x !== null);
}

export function integrateWithNativeSettingsPanel() {
    const apiConfig = generateApiConfig();

    getChiiLib().ukagaka.addPanelTab({
        tab: 'dollars_chat_settings',
        label: 'Re:Dollars',
        type: 'options',
        config: apiConfig,
    });

    const settingsBtnHeader = document.getElementById('dollars-settings-btn-header');
    if (settingsBtnHeader) {
        settingsBtnHeader.title = '打开聊天设置';
        settingsBtnHeader.addEventListener('click', (e) => {
            e.stopPropagation();
            getChiiLib().ukagaka.showCustomizePanelWithTab('dollars_chat_settings');
        });
    }
}

export function openSettingsPanel() {
    getChiiLib().ukagaka.showCustomizePanelWithTab('dollars_chat_settings');
}
