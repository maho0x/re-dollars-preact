import { render, type ComponentChildren } from 'preact';
import { useEffect, useRef } from 'preact/hooks';

// 把内容渲染到聊天根节点（或 body），脱离带 backdrop-filter 的输入框容器，
// 使浮层自身的毛玻璃背景模糊能够正常生效。
export function FloatingPortal({ children }: { children: ComponentChildren }) {
    const hostRef = useRef<HTMLDivElement | null>(null);

    if (!hostRef.current) {
        hostRef.current = document.createElement('div');
    }

    useEffect(() => {
        const host = hostRef.current;
        if (!host) return;

        const root = document.getElementById('dollars-chat-root') ?? document.body;
        root.appendChild(host);
        return () => {
            render(null, host);
            host.remove();
        };
    }, []);

    useEffect(() => {
        const host = hostRef.current;
        if (host) {
            render(<>{children}</>, host);
        }
    }, [children]);

    return null;
}
