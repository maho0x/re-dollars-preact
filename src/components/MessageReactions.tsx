import { useRef, useEffect } from 'preact/hooks';
import { userInfo } from '@/stores/user';
import { toggleReaction } from '@/utils/api';
import { getSmileyUrl } from '@/utils/smilies';
import { getAvatarUrl, generateReactionTooltip } from '@/utils/format';
import type { Reaction } from '@/types';

interface MessageReactionsProps {
    reactions: Reaction[];
    messageId: number;
}

export function MessageReactions({ reactions, messageId }: MessageReactionsProps) {
    if (!reactions || reactions.length === 0) return null;

    // 按 emoji 分组
    const grouped = reactions.reduce((acc, r) => {
        if (!acc[r.emoji]) acc[r.emoji] = [];
        acc[r.emoji].push(r);
        return acc;
    }, {} as Record<string, Reaction[]>);

    return (
        <div class="reactions-container likes_grid">
            {Object.entries(grouped).map(([emoji, users]) => (
                <ReactionItem key={emoji} emoji={emoji} users={users} messageId={messageId} />
            ))}
        </div>
    );
}

interface ReactionItemProps {
    emoji: string;
    users: Reaction[];
    messageId: number;
}

const MAX_AVATARS_SHOWN = 5;

function ReactionItem({ emoji, users, messageId }: ReactionItemProps) {
    const url = getSmileyUrl(emoji);
    const itemRef = useRef<HTMLDivElement>(null);
    const isBmo = emoji.startsWith('(bmo');

    // 使用 peek() 避免订阅信号
    const isSelected = users.some(u => String(u.user_id) === String(userInfo.peek().id));

    // 分离有头像和无头像的用户
    const usersWithAvatar = users.filter(u => u.avatar);
    const anonymousCount = users.length - usersWithAvatar.length;

    // 限制显示的头像数量
    const avatarsToShow = usersWithAvatar.slice(0, MAX_AVATARS_SHOWN);
    const extraAvatarCount = usersWithAvatar.length - MAX_AVATARS_SHOWN;

    // 计算额外人数显示 (超出的头像用户 + 匿名用户)
    const extraCount = Math.max(0, extraAvatarCount) + anonymousCount;

    useEffect(() => {
        const el = itemRef.current;
        if (!el) return;

        // 设置 tooltip 内容
        const tooltipHtml = generateReactionTooltip(users);
        el.setAttribute('data-original-title', tooltipHtml);

        // 初始化 jQuery Tooltip (如果存在)
        // @ts-ignore
        const $ = window.$;
        if (typeof $ !== 'undefined' && typeof $.fn.tooltip === 'function') {
            try {
                const $el = $(el);
                // 销毁旧的 tooltip 实例以防止重复
                try { $el.tooltip('dispose'); } catch (e) { }
                try { $el.tooltip('destroy'); } catch (e) { }

                $el.tooltip({
                    container: 'body',
                    html: true,
                    placement: 'top',
                    animation: true,
                    trigger: 'manual',
                    template: '<div class="tooltip dollars-tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
                });

                let hideTimeout: any;
                const scheduleHide = () => {
                    hideTimeout = setTimeout(() => { $el.tooltip('hide'); }, 300);
                };

                const mouseEnterHandler = () => {
                    clearTimeout(hideTimeout);
                    $el.tooltip('show');
                    const tooltipData = $el.data('tooltip') || $el.data('bs.tooltip');
                    if (tooltipData) {
                        const $tip = tooltipData.$tip || (typeof tooltipData.tip === 'function' ? $(tooltipData.tip()) : null);
                        if ($tip) {
                            $tip.off('mouseenter.dollars mouseleave.dollars');
                            $tip.on('mouseenter.dollars', () => clearTimeout(hideTimeout));
                            $tip.on('mouseleave.dollars', () => scheduleHide());
                        }
                    }
                };

                const mouseLeaveHandler = () => {
                    scheduleHide();
                };

                $el.on('mouseenter', mouseEnterHandler);
                $el.on('mouseleave', mouseLeaveHandler);

                return () => {
                    $el.off('mouseenter', mouseEnterHandler);
                    $el.off('mouseleave', mouseLeaveHandler);
                    try { $el.tooltip('hide'); } catch (e) { }
                };
            } catch (e) {
                // ignore
            }
        }
    }, [users, isBmo]);

    const handleToggle = async (e: MouseEvent) => {
        e.stopPropagation();
        await toggleReaction(messageId, emoji);
    };

    return (
        <div
            ref={itemRef}
            class={`reaction-item item ${isSelected ? 'selected' : ''}`}
            data-emoji={emoji}
            data-toggle="tooltip"
            title="" // Leave title empty as we use data-original-title
            onClick={handleToggle}
        >
            <span
                class="emoji"
                style={url ? { backgroundImage: `url('${url}')` } : undefined}
            >
                {!url && !isBmo && emoji}
                {isBmo && <span class="bmo" data-code={emoji}></span>}
            </span>

            {/* 头像列表 */}
            {avatarsToShow.length > 0 && (
                <span class="reaction-avatars">
                    {avatarsToShow.map((u, i) => (
                        <img
                            key={u.user_id}
                            class="reaction-avatar"
                            src={getAvatarUrl(u.avatar!, 's')}
                            alt={u.nickname}
                            style={{ zIndex: MAX_AVATARS_SHOWN - i }}
                        />
                    ))}
                </span>
            )}

            {/* 纯数字计数 (无头像时) 或 额外人数 */}
            {avatarsToShow.length === 0 ? (
                <span class="num">{users.length}</span>
            ) : extraCount > 0 ? (
                <span class="num extra">+{extraCount}</span>
            ) : null}
        </div>
    );
}
