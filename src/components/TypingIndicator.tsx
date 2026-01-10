import { typingUsers } from '@/stores/chat';
import { useRef, useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';

export function TypingIndicator() {
    const users = Array.from(typingUsers.value.values());
    const lastText = useRef('');
    const isVisible = useSignal(false);

    // 当有用户输入时，更新文本并显示
    useEffect(() => {
        if (users.length > 0) {
            let text = '';
            if (users.length === 1) {
                text = `${users[0]} 正在输入...`;
            } else if (users.length === 2) {
                text = `${users[0]} 和 ${users[1]} 正在输入...`;
            } else {
                text = `${users[0]} 和其他 ${users.length - 1} 人正在输入...`;
            }
            lastText.current = text;
            isVisible.value = true;
        } else {
            // 延迟隐藏，让淡出动画完成
            isVisible.value = false;
        }
    }, [users.length]);

    return (
        <div id="dollars-typing-indicator" class={isVisible.value ? 'visible' : ''}>
            {lastText.current || '\u00A0'}
        </div>
    );
}
