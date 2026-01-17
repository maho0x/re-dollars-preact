import { signal } from '@preact/signals';
import type { UserInfo, Settings } from '@/types';
import { getChiiApp } from '@/utils/globals';

// 用户状态
export const isLoggedIn = signal(false);
export const userInfo = signal<UserInfo>({
    id: window.CHOBITS_UID?.toString() || '',
    name: window.CHOBITS_USERNAME || '',
    nickname: '',
    avatar: '',
    formhash: '',
});

// 设置
export const settings = signal<Settings>({
    showCard: true,
    linkPreview: true,
    sendShortcut: 'CtrlEnter',
    sharePresence: false,
    notificationType: 'off',
    loadImages: true,
    rememberOpenState: false,

    backgroundMode: 'tint',
});

// 屏蔽用户
export const blockedUsers = signal<Set<string>>(new Set());

// 初始化屏蔽用户列表
export async function initializeBlockedUsers() {
    const list = (window as any).data_ignore_users || [];
    if (!list.length) return;

    const newBlockedUsers = new Set<string>();
    let cache: Record<string, string> = {};
    let cacheDirty = false;

    // 从云设置加载缓存
    try {
        const cloudSettings = getChiiApp().cloud_settings.getAll();
        if (cloudSettings?.dollars_blocked_cache) {
            cache = JSON.parse(cloudSettings.dollars_blocked_cache);
        }
    } catch (e) {
        console.warn('[Re:Dollars] Failed to parse blocked users cache', e);
    }

    const fetchPromises: Promise<void>[] = [];

    for (const u of list) {
        const uStr = String(u);

        if (/^\d+$/.test(uStr)) {
            // 已经是 UID
            newBlockedUsers.add(uStr);
        } else {
            // 是用户名，需要解析为 UID
            if (cache[uStr]) {
                newBlockedUsers.add(String(cache[uStr]));
            } else {
                fetchPromises.push(
                    fetch(`https://api.bgm.tv/v0/users/${uStr}`)
                        .then(r => r.ok ? r.json() : null)
                        .then(d => {
                            if (d?.id) {
                                const id = String(d.id);
                                newBlockedUsers.add(id);
                                cache[uStr] = id;
                                cacheDirty = true;
                            }
                        })
                        .catch((e) => console.error(`[Re:Dollars] Failed to resolve user ${uStr}`, e))
                );
            }
        }
    }

    if (fetchPromises.length) {
        await Promise.all(fetchPromises);
    }

    blockedUsers.value = newBlockedUsers;

    // 保存缓存到云设置
    if (cacheDirty) {
        try {
            const cloud = getChiiApp().cloud_settings;
            cloud.update({ dollars_blocked_cache: JSON.stringify(cache) });
            cloud.save();
        } catch (e) {
            // ignore
        }
    }
}

// 初始化用户信息
export function initUserInfo() {
    const nicknameEl = document.querySelector('#dock .content ul li:first-child a span');
    const avatarEl = document.querySelector('.avatarNeue.avatarSize32') as HTMLElement;
    const formhashEl = document.querySelector('input[name="formhash"]') as HTMLInputElement;

    userInfo.value = {
        ...userInfo.value,
        nickname: nicknameEl?.textContent?.trim() || window.CHOBITS_USERNAME || '',
        avatar: avatarEl?.style.backgroundImage?.slice(5, -2) || '',
        formhash: formhashEl?.value || '',
    };
}

// 从云设置加载
export function loadSettingsFromCloud() {
    const cloudSettings = getChiiApp().cloud_settings.getAll();
    if (!cloudSettings) return;

    const defaults = settings.peek();
    const newSettings = { ...defaults };

    for (const key in cloudSettings) {
        if (key in defaults) {
            const defaultValue = defaults[key as keyof Settings];
            if (typeof defaultValue === 'boolean') {
                (newSettings as any)[key] = cloudSettings[key] === 'true';
            } else {
                (newSettings as any)[key] = cloudSettings[key];
            }
        }
    }

    settings.value = newSettings;
}

// 保存设置到云
export function saveSettings() {
    const cloud = getChiiApp().cloud_settings;
    const settingsToSave: Record<string, string> = {};
    const currentSettings = settings.peek();

    for (const key in currentSettings) {
        settingsToSave[key] = String((currentSettings as any)[key]);
    }

    cloud.update(settingsToSave);
    cloud.save();
}

// 获取 Token
export function getToken(): string | null {
    return getChiiApp().cloud_settings.getAll()?.dollarsAuthToken || null;
}

// 获取认证 Headers
export function getAuthHeaders(): Record<string, string> {
    const token = getToken();
    return token ? { 'Authorization': `Bearer ${token}` } : {};
}
