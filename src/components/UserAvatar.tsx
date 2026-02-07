import { computed } from '@preact/signals';
import { onlineUsers, pendingMention } from '@/stores/chat';
import { showProfileCard } from '@/stores/ui';
import { useLongPress } from '@/hooks/useLongPress';

interface UserAvatarProps {
    uid: string | number;
    src: string;
    nickname: string;
    className?: string; // Allow additional classes
}

export function UserAvatar({ uid, src, nickname, className = '' }: UserAvatarProps) {
    // Reactive online status
    // uid=0 is system user (Bangumi), always online
    const isOnline = computed(() => {
        const uidStr = String(uid);
        return uidStr === '0' || onlineUsers.value.has(uidStr);
    });

    const handleShortClick = (e: MouseEvent | TouchEvent) => {
        // Prevent default to stop "ghost click" on mobile which might close the profile card immediately
        if (e.cancelable && e.type !== 'click') {
            e.preventDefault();
        }
        e.stopPropagation();

        // For uid=0 (bot), show profile card for uid 3605
        const profileUid = (uid === 0 || String(uid) === '0') ? '3605' : String(uid);
        showProfileCard(profileUid, e.target as HTMLElement);
    };

    const handleLongPress = (e: MouseEvent | TouchEvent) => {
        e.stopPropagation();

        // For uid=0 (bot), use special 'bot' uid for plain text mention
        if (uid === 0 || String(uid) === '0') {
            pendingMention.value = { uid: 'bot', nickname: 'Bangumi娘' };
        } else {
            pendingMention.value = { uid: String(uid), nickname };
        }

        // Mobile vibration feedback
        if (navigator.vibrate) navigator.vibrate(50);
    };

    const longPressProps = useLongPress({
        onLongPress: handleLongPress,
        onClick: handleShortClick,
        threshold: 500
    });

    return (
        <img
            class={`avatar ${isOnline.value ? 'online' : ''} ${className}`}
            src={src}
            alt={nickname}
            data-uid={uid}
            onContextMenu={(e) => {
                // Prevent context menu on avatar (especially for mobile long press)
                e.preventDefault();
                e.stopPropagation();
            }}
            {...longPressProps}
        />
    );
}
