import { memo } from 'preact/compat';
import { getAvatarUrl } from '@/utils/format';

interface AvatarProps {
    /** 头像路径或URL */
    avatar: string;
    /** 显示名称 */
    alt?: string;
    /** 头像尺寸 */
    size?: 's' | 'm' | 'l';
    /** 是否在线 */
    online?: boolean;
    /** 用户ID (用于profile card) */
    uid?: string | number;
    /** 点击事件 */
    onClick?: (e: MouseEvent) => void;
    /** 额外的class */
    className?: string;
}

/**
 * 统一的头像组件
 * 支持在线状态显示、尺寸变化、点击事件
 */
export const Avatar = memo(({
    avatar,
    alt = '',
    size = 'm',
    online = false,
    uid,
    onClick,
    className = ''
}: AvatarProps) => {
    const src = getAvatarUrl(avatar, size);
    const classes = [
        'avatar',
        `avatar-${size}`,
        online && 'online',
        className
    ].filter(Boolean).join(' ');

    return (
        <img
            class={classes}
            src={src}
            alt={alt}
            data-uid={uid}
            onClick={onClick}
        />
    );
});
