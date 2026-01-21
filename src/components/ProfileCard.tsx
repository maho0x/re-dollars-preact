import { useEffect, useRef, useState } from 'preact/hooks';
import { profileCardUserId, profileCardAnchor, hideProfileCard, toggleSearch, isProfileCardClosing } from '@/stores/ui';
import { searchQuery } from '@/stores/chat';
import { fetchUserProfile } from '@/utils/api';
import { getAvatarUrl, formatDate } from '@/utils/format';
import { SVGIcons } from '@/utils/constants';

interface UserProfile {
    id: number;
    nickname: string;
    username: string;
    avatar: string;
    sign?: string;
    url: string;
    lastActive?: number;
    stats?: {
        message_count: number;
        average_messages_per_day: number;
        first_message_time: string;
        last_message_time: string;
    };
}

export function ProfileCard() {
    const cardRef = useRef<HTMLDivElement>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(false);

    const userId = profileCardUserId.value;
    const anchor = profileCardAnchor.value;

    useEffect(() => {
        if (!userId) {
            setProfile(null);
            return;
        }

        const loadProfile = async () => {
            setLoading(true);
            const data = await fetchUserProfile(userId);
            if (data) {
                setProfile(data);
            }
            setLoading(false);
        };

        loadProfile();
    }, [userId]);

    // 定位逻辑
    useEffect(() => {
        if (!userId || !anchor || !cardRef.current) return;

        const card = cardRef.current;
        const rect = anchor.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        let top = rect.top;
        let left = rect.right + 10; // 默认显示在右侧

        // 边界检查
        if (left + cardRect.width > window.innerWidth) {
            left = rect.left - cardRect.width - 10; // 显示在左侧
        }

        // 进一步确保不超出屏幕可见范围
        left = Math.max(10, Math.min(left, window.innerWidth - cardRect.width - 10));
        top = Math.max(10, Math.min(top, window.innerHeight - cardRect.height - 10));

        card.style.top = `${top}px`;
        card.style.left = `${left}px`;
    }, [userId, anchor, profile]);

    // 点击外部关闭
    useEffect(() => {
        if (!userId) return;

        // 使用 setTimeout 延迟添加监听器，避免触发 showProfileCard 的同一个点击事件
        const timeoutId = setTimeout(() => {
            const handleClickOutside = (e: MouseEvent | TouchEvent) => {
                if (
                    cardRef.current &&
                    !cardRef.current.contains(e.target as Node) &&
                    anchor &&
                    !anchor.contains(e.target as Node)
                ) {
                    hideProfileCard();
                }
            };

            document.addEventListener('click', handleClickOutside);
            document.addEventListener('touchend', handleClickOutside);
            
            // 存储清理函数
            (window as any).__dollarsProfileCardCleanup = () => {
                document.removeEventListener('click', handleClickOutside);
                document.removeEventListener('touchend', handleClickOutside);
            };
        }, 0);

        return () => {
            clearTimeout(timeoutId);
            if ((window as any).__dollarsProfileCardCleanup) {
                (window as any).__dollarsProfileCardCleanup();
                delete (window as any).__dollarsProfileCardCleanup;
            }
        };
    }, [userId, anchor]);

    if (!userId) return null;

    const handleHistory = () => {
        if (profile) {
            searchQuery.value = `user:${profile.username}`;
            toggleSearch(true);
            hideProfileCard();
        }
    };

    const handleHomepage = () => {
        if (profile) {
            window.open(`https://bgm.tv/user/${profile.username}`, '_blank');
            hideProfileCard();
        }
    };

    return (
        <div
            id="dollars-profile-card"
            ref={cardRef}
            class={`${userId ? 'visible' : ''} ${isProfileCardClosing.value ? 'closing' : ''}`}
        >
            <div class="dollars-profile-banner"></div>

            <div class="dollars-profile-body">
                <div class="dollars-profile-top-row">
                    <div class="dollars-profile-identity">
                        <img
                            class="dollars-profile-avatar"
                            src={profile ? getAvatarUrl(profile.avatar, 'l') : ''}
                            alt="avatar"
                        />
                        <div class="dollars-profile-names">
                            <div class="dollars-profile-nickname">
                                {profile ? profile.nickname : 'Loading...'}
                            </div>
                            <div class="dollars-profile-username">
                                @{profile ? profile.username : userId}
                            </div>
                        </div>
                    </div>

                    <div class="dollars-profile-actions">
                        <button
                            class="dollars-profile-btn"
                            title="搜索历史发言"
                            onClick={handleHistory}
                            dangerouslySetInnerHTML={{ __html: SVGIcons.history }}
                        />
                        <button
                            class="dollars-profile-btn"
                            title="主页"
                            onClick={handleHomepage}
                            dangerouslySetInnerHTML={{ __html: SVGIcons.home }}
                        />
                    </div>
                </div>

                <div class="dollars-profile-sign">
                    {profile?.sign || '这个人很懒，什么都没有写...'}
                </div>

                <div class={`dollars-profile-footer ${(!loading && profile?.stats?.last_message_time && formatDate(new Date(profile.stats.last_message_time).getTime() / 1000, 'label') === '今天') ? 'active' : ''}`}>
                    {loading ? '加载中...' : (
                        profile?.stats?.last_message_time ? (() => {
                            const date = new Date(profile.stats.last_message_time);
                            const ts = date.getTime() / 1000;
                            const label = formatDate(ts, 'label');
                            const time = formatDate(ts, 'time');
                            return `最近活跃: ${label} ${time}`;
                        })() : '暂无发言记录'
                    )}
                </div>
            </div>
        </div>
    );
}
