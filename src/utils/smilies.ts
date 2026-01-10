export interface SmileyRange {
    name: string;
    start?: number;
    end?: number;
    path?: (id: number) => string;
}

// 表情范围配置 - 统一定义
export const smileyRanges: SmileyRange[] = [
    {
        name: 'TV',
        start: 24,
        end: 125,
        path: (id: number) => `/img/smiles/tv/${String(id - 23).padStart(2, '0')}.gif`
    },
    {
        name: 'BGM',
        start: 1,
        end: 23,
        path: (id: number) => {
            const ext = (id === 11 || id === 23) ? 'gif' : 'png';
            return `/img/smiles/bgm/${String(id).padStart(2, '0')}.${ext}`;
        }
    },
    {
        name: 'VS',
        start: 200,
        end: 238,
        path: (id: number) => `/img/smiles/tv_vs/bgm_${id}.png`
    },
    {
        name: '500',
        start: 500,
        end: 529,
        path: (id: number) => {
            const gifIds = new Set([500, 501, 505, 515, 516, 517, 518, 519, 521, 522, 523]);
            const ext = gifIds.has(id) ? 'gif' : 'png';
            return `/img/smiles/tv_500/bgm_${id}.${ext}`;
        }
    },
    { name: 'BMO' },
    { name: '收藏' }
];

// 不包含收藏的表情范围（用于 ReactionPicker）
export const smileyRangesWithoutFavorites = smileyRanges.filter(r => r.name !== '收藏');

// 获取表情 URL
export function getSmileyUrl(code: string | number): string | null {
    let id: number;
    if (typeof code === 'string') {
        const match = code.match(/\(bgm(\d+)\)/);
        if (!match) return null;
        id = parseInt(match[1], 10);
    } else {
        id = code;
    }

    const range = smileyRanges.find(r => r.start && r.end && id >= r.start && id <= r.end);
    if (range && range.path) {
        return range.path(id);
    }
    return null;
}

// 生成表情代码列表
export function generateSmileyCodes(groupName: string): string[] {
    const range = smileyRanges.find(r => r.name === groupName);
    if (!range || !range.start || !range.end) return [];

    const codes: string[] = [];
    for (let i = range.start; i <= range.end; i++) {
        codes.push(`(bgm${i})`);
    }
    return codes;
}

// 兼容旧的导出名称（用于 bbcode.ts）
export const SMILIES = smileyRanges.filter(r => r.start && r.end && r.path) as Array<{
    name: string;
    start: number;
    end: number;
    path: (id: number) => string;
}>;
