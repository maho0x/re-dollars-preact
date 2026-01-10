import { useRef, useCallback, useEffect, useState } from 'preact/hooks';
import { escapeHTML } from '@/utils/format';

interface MentionUser {
    id: number;
    username: string;
    nickname: string;
    avatar_url?: string;
}

interface MentionCompleterProps {
    textareaRef: React.RefObject<HTMLTextAreaElement>;
}

export function MentionCompleter({ textareaRef }: MentionCompleterProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [users, setUsers] = useState<MentionUser[]>([]);
    const [matchStart, setMatchStart] = useState(-1);
    const queryRef = useRef<string | null>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Check for @mention pattern in input
    const checkInput = useCallback(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const cursor = textarea.selectionStart;
        const text = textarea.value.slice(0, cursor);

        // Match @ followed by any characters (supports Chinese/Japanese)
        const match = text.match(/(?:^|\s)(@[^\s]*)$/);

        if (!match) {
            hide();
            return;
        }

        const newMatchStart = cursor - match[1].length;
        setMatchStart(newMatchStart);

        const currentQuery = match[1].slice(1); // Remove @

        if (currentQuery === queryRef.current && visible) return;
        queryRef.current = currentQuery;

        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (!currentQuery) {
            hide();
            return;
        }

        // Debounce API call
        timerRef.current = setTimeout(() => fetchUsers(currentQuery), 300);
    }, [textareaRef, visible]);

    // Fetch users from API
    const fetchUsers = async (query: string) => {
        try {
            const res = await fetch(
                `https://bgm.ry.mk/search/users?q=${encodeURIComponent(query)}&exact=true&limit=10`
            );

            // Check if query changed while fetching
            if (query !== queryRef.current) return;

            const json = await res.json();
            const data = json.data || [];

            if (data.length > 0) {
                setUsers(data);
                setVisible(true);
            } else {
                hide();
            }
        } catch (e) {
            hide();
        }
    };

    // Hide completer
    const hide = useCallback(() => {
        setVisible(false);
        queryRef.current = null;
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    }, []);

    // Replace mention in textarea
    const selectUser = useCallback((user: MentionUser) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        textarea.setRangeText(
            `@${user.username} `,
            matchStart,
            textarea.selectionStart,
            'end'
        );

        hide();
        textarea.focus();
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
    }, [textareaRef, matchStart, hide]);

    // Listen for input events
    useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const handleInput = () => checkInput();
        const handleBlur = (e: FocusEvent) => {
            // Don't hide if clicking on the mention list
            if (containerRef.current?.contains(e.relatedTarget as Node)) return;
            setTimeout(hide, 150);
        };
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && visible) {
                e.preventDefault();
                hide();
            }
        };

        textarea.addEventListener('input', handleInput);
        textarea.addEventListener('blur', handleBlur);
        textarea.addEventListener('keydown', handleKeyDown);

        return () => {
            textarea.removeEventListener('input', handleInput);
            textarea.removeEventListener('blur', handleBlur);
            textarea.removeEventListener('keydown', handleKeyDown);
        };
    }, [textareaRef, checkInput, hide, visible]);

    if (!visible || users.length === 0) {
        return null;
    }

    return (
        <div
            ref={containerRef}
            id="dollars-mention-list"
            class="visible"
        >
            {users.map((user) => (
                <div
                    key={user.id || user.username}
                    class="mention-item"
                    onClick={() => selectUser(user)}
                >
                    <img
                        src={user.avatar_url || '//lain.bgm.tv/pic/user/m/000/00/00/0.jpg'}
                        alt=""
                    />
                    <div class="mention-item-info">
                        <span class="mention-item-nick">
                            {escapeHTML(user.nickname || user.username)}
                        </span>
                        <span class="mention-item-user">
                            @{escapeHTML(user.username)}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}
