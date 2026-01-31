import { signal } from '@preact/signals';

const DRAFT_KEY_PREFIX = 'dollars_draft_';
const DRAFT_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 天过期

export interface ReplyInfo {
    id: string;
    uid: string;
    user: string;
    avatar: string;
    text: string;
}

export interface Draft {
    content: string;
    replyTo: ReplyInfo | null;
    timestamp: number;
}

// 当前草稿 signal
export const currentDraft = signal<Draft | null>(null);

/**
 * 获取草稿的 localStorage key
 * 现在只使用一个主草稿键，因为回复信息也保存在草稿中
 */
function getDraftKey(): string {
    return `${DRAFT_KEY_PREFIX}main`;
}

/**
 * 保存草稿到 localStorage
 */
export function saveDraft(content: string, replyTo: ReplyInfo | null = null): void {
    if (!content.trim() && !replyTo) {
        // 内容为空且没有回复，删除草稿
        clearDraft();
        return;
    }

    const draft: Draft = {
        content,
        replyTo,
        timestamp: Date.now(),
    };

    const key = getDraftKey();
    localStorage.setItem(key, JSON.stringify(draft));
    currentDraft.value = draft;
}

/**
 * 从 localStorage 加载草稿
 */
export function loadDraft(): Draft | null {
    try {
        const key = getDraftKey();
        const saved = localStorage.getItem(key);

        if (!saved) return null;

        const draft = JSON.parse(saved) as Draft;

        // 检查是否过期
        if (Date.now() - draft.timestamp > DRAFT_EXPIRY) {
            clearDraft();
            return null;
        }

        currentDraft.value = draft;
        return draft;
    } catch {
        return null;
    }
}

/**
 * 清除草稿
 */
export function clearDraft(): void {
    const key = getDraftKey();
    localStorage.removeItem(key);
    currentDraft.value = null;
}

/**
 * 清除过期草稿
 */
export function cleanupExpiredDrafts(): void {
    const draft = loadDraft();
    // loadDraft already handles expiry cleanup
    if (!draft) {
        clearDraft();
    }
}

/**
 * 获取当前草稿（如果存在）
 */
export function getAllDrafts(): Draft[] {
    const draft = loadDraft();
    return draft ? [draft] : [];
}

/**
 * 检查是否有草稿
 */
export function hasDraft(): boolean {
    const draft = loadDraft();
    return draft !== null && (draft.content.trim().length > 0 || draft.replyTo !== null);
}
