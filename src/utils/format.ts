/**
 * HTML 转义
 */
export const escapeHTML = (str: string): string =>
    (str || '').replace(/[&<>"']/g, m => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[m] || m));

/**
 * HTML 解码
 */
export const decodeHTML = (str: string): string => {
    try {
        const div = document.createElement('div');
        div.innerHTML = String(str ?? '');
        return div.textContent || '';
    } catch {
        return String(str ?? '');
    }
};

/**
 * 时间格式化
 */
export const formatDate = (ts: number, fmt: 'time' | 'key' | 'full' | 'label' = 'time'): string => {
    const d = new Date(ts * 1000);
    const pad = (n: number) => String(n).padStart(2, '0');

    if (fmt === 'key') return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    if (fmt === 'time') return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    if (fmt === 'full') return d.toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-');

    // Label format
    const diff = Math.round((new Date().setHours(0, 0, 0, 0) - new Date(d).setHours(0, 0, 0, 0)) / 86400000);
    if (diff === 0) return '今天';
    if (diff === 1) return '昨天';
    if (diff > 1 && diff < 7) return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][d.getDay()];
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

/**
 * 移除所有 BBCode 标签
 */
export const stripAllBBCodes = (t: string): string =>
    t?.replace(/\[.*?\]/g, '').replace(/\s+/g, ' ').trim() || '';

// Alias for stripAllBBCodes
export const stripBBCode = stripAllBBCodes;

// stripQuotes moved to bbcode.ts to avoid duplication

/**
 * 获取头像 URL
 * API 返回的 avatar 字段格式如: "000/85/32/853241_WZoz2.jpg?r=1767410726&hd=1"
 * 需要拼接成: "//lain.bgm.tv/pic/user/l/000/85/32/853241_WZoz2.jpg?r=1767410726&hd=1"
 */
export const getAvatarUrl = (avatar: string, size: 's' | 'm' | 'l' = 'l', fallback = 'icon.jpg'): string => {
    if (!avatar || typeof avatar !== 'string') {
        return `//lain.bgm.tv/pic/user/${size}/${fallback}`;
    }

    // 已经是完整 URL（包含 //）
    if (avatar.includes('//')) {
        // 替换尺寸
        return avatar.replace(/\/pic\/user\/[sml]\//, `/pic/user/${size}/`);
    }

    // 移除开头的斜杠（如果有）
    const cleanPath = avatar.replace(/^\/+/, '');

    // 拼接完整 URL
    return `https://lain.bgm.tv/pic/user/${size}/${cleanPath}`;
};

/**
 * 防抖函数
 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay = 400) {
    let t: ReturnType<typeof setTimeout>;
    const debounced = (...args: Parameters<T>) => {
        clearTimeout(t);
        t = setTimeout(() => fn(...args), delay);
    };
    (debounced as any).flush = (...args: Parameters<T>) => {
        clearTimeout(t);
        fn(...args);
    };
    return debounced as T & { flush: T };
}

/**
 * 判断是否接近底部
 */
export const isNearBottom = (el: HTMLElement, threshold = 100): boolean =>
    el.scrollHeight - el.scrollTop - el.clientHeight <= threshold;

/**
 * 计算图片样式
 */
export const calculateImageStyle = (meta?: { width?: number; height?: number }): string => {
    if (meta?.width && meta?.height) {
        const MAX_IMG_WIDTH = 320;
        const MAX_IMG_HEIGHT = 350;
        let w = Number(meta.width);
        let h = Number(meta.height);

        if (w > MAX_IMG_WIDTH) {
            h = (MAX_IMG_WIDTH / w) * h;
            w = MAX_IMG_WIDTH;
        }
        if (h > MAX_IMG_HEIGHT) {
            w = (MAX_IMG_HEIGHT / h) * w;
            h = MAX_IMG_HEIGHT;
        }

        return `aspect-ratio: ${meta.width} / ${meta.height}; width: ${Math.round(w)}px; max-width: 100%;`;
    }
    return `aspect-ratio: 1 / 1; width: 200px; max-width: 100%;`;
};



export const generateReactionTooltip = (users: Array<{ id?: number | string; user_id?: number | string; nickname: string }>): string => {
    if (!users || users.length === 0) return '';
    return users.map(u => {
        // API returns 'user_id' typically, but check both.
        // Also ensure we handle 0 (system user) correctly though unlikely in reactions.
        const id = (u.user_id !== undefined && u.user_id !== null) ? u.user_id : u.id;
        return `<a href="/user/${id}" target="_blank" class="dollars-tooltip-link">${escapeHTML(u.nickname)}</a>`;
    }).join('、');
};
