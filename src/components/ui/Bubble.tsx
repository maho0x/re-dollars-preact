import { memo } from 'preact/compat';
import type { ComponentChildren } from 'preact';

interface BubbleProps {
    /** 是否为贴纸模式（无背景） */
    isSticker?: boolean;
    /** 发送者昵称 */
    nickname?: string;
    /** 昵称颜色 */
    nickColor?: string;
    /** 时间戳文本 */
    timestamp?: string;
    /** 完整时间戳（用于title） */
    fullTimestamp?: string;
    /** 是否已删除 */
    isDeleted?: boolean;
    /** 子元素 */
    children: ComponentChildren;
}

/**
 * 消息气泡组件
 * 封装气泡样式、尾巴、昵称显示和时间戳
 */
export const Bubble = memo(({
    isSticker = false,
    nickname,
    nickColor = 'var(--primary-color)',
    timestamp,
    fullTimestamp,
    isDeleted = false,
    children
}: BubbleProps) => {
    return (
        <div class={`bubble ${isSticker ? 'sticker-mode' : ''}`}>
            {/* 气泡尾巴 */}
            <svg viewBox="0 0 11 20" width="11" height="20" class="bubble-tail">
                <use href="#message-tail-filled" />
            </svg>

            {/* 内部昵称 */}
            {nickname && (
                <span class="bubble-nickname" style={{ '--nick-color': nickColor } as any}>
                    {nickname}
                </span>
            )}

            {/* 消息内容 */}
            {children}

            {/* 内部时间戳 */}
            {!isDeleted && timestamp && (
                <span class="bubble-timestamp" title={fullTimestamp}>
                    {timestamp}
                </span>
            )}
        </div>
    );
});
