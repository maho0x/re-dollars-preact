import { useRef, useEffect, useState } from 'preact/hooks';
import { isChatOpen } from '@/stores/chat';
import { isMobileViewport, isMaximized, isSearchActive, isNarrowLayout, mobileChatViewActive, checkNarrowLayout, resetLayoutCheck, ensureNarrowLayoutChatView } from '@/stores/ui';
import { settings } from '@/stores/user';
import { ChatHeader } from './ChatHeader';
import { ChatBody } from './ChatBody';
import { ChatInput } from './ChatInput';
import { SearchPanel } from './SearchPanel';
import { FloatingUI } from './FloatingUI';
import { Sidebar } from './Sidebar';
import { useWebSocket } from '@/hooks/useWebSocket';

interface ChatWindowProps {
    skipEntryAnimation?: boolean;
}

// 辅助函数：保存窗口位置和大小（仅在启用记忆状态时）
function saveWindowPosition(element: HTMLDivElement) {
    if (!settings.value.rememberOpenState) return;

    localStorage.setItem('dollarsChatPosition', JSON.stringify({
        x: element.offsetLeft,
        y: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight
    }));
}

export function ChatWindow({ skipEntryAnimation = false }: ChatWindowProps) {
    const windowRef = useRef<HTMLDivElement>(null);
    useWebSocket();

    // 入场动画控制
    const [animateIn, setAnimateIn] = useState(skipEntryAnimation);

    useEffect(() => {
        if (!skipEntryAnimation) {
            // 需要入场动画：下一帧添加 visible 类
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setAnimateIn(true);
                });
            });
        }
    }, []);

    // 拖拽状态
    const dragState = useRef({
        isDragging: false,
        startX: 0,
        startY: 0,
        initialLeft: 0,
        initialTop: 0,
    });

    // 处理拖拽开始
    const handleDragStart = (e: MouseEvent) => {
        if (isMobileViewport.value || isMaximized.value) return;
        const target = e.target as HTMLElement;
        if (!target.closest('.chat-header') || target.closest('button')) return;

        e.preventDefault();
        dragState.current = {
            isDragging: true,
            startX: e.clientX,
            startY: e.clientY,
            initialLeft: windowRef.current?.offsetLeft || 0,
            initialTop: windowRef.current?.offsetTop || 0,
        };

        document.addEventListener('mousemove', handleDragMove);
        document.addEventListener('mouseup', handleDragEnd);
    };

    const handleDragMove = (e: MouseEvent) => {
        if (!dragState.current.isDragging || !windowRef.current) return;

        const dx = e.clientX - dragState.current.startX;
        const dy = e.clientY - dragState.current.startY;

        const width = windowRef.current.offsetWidth;
        const height = windowRef.current.offsetHeight;
        const maxLeft = Math.max(0, window.innerWidth - width);
        const maxTop = Math.max(0, window.innerHeight - height);

        // 限制在窗口范围内
        const newLeft = Math.min(Math.max(0, dragState.current.initialLeft + dx), maxLeft);
        const newTop = Math.min(Math.max(0, dragState.current.initialTop + dy), maxTop);

        windowRef.current.style.left = `${newLeft}px`;
        windowRef.current.style.top = `${newTop}px`;
    };

    const handleDragEnd = () => {
        dragState.current.isDragging = false;
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);

        // 保存位置和大小
        if (windowRef.current) {
            saveWindowPosition(windowRef.current);
        }
    };

    // 恢复位置和大小
    useEffect(() => {
        if (isMobileViewport.value || isMaximized.value || !settings.value.rememberOpenState) return;

        try {
            const saved = localStorage.getItem('dollarsChatPosition');
            if (saved && windowRef.current) {
                const { x, y, width, height } = JSON.parse(saved);
                windowRef.current.style.left = `${x}px`;
                windowRef.current.style.top = `${y}px`;
                if (width) windowRef.current.style.width = `${width}px`;
                if (height) windowRef.current.style.height = `${height}px`;
            }
        } catch (e) {
            // 忽略
        }
    }, []);

    // 监听浏览器窗口大小变化，确保位置不越界
    useEffect(() => {
        let rafId: number;

        const handleResize = () => {
            if (rafId) return;

            rafId = requestAnimationFrame(() => {
                rafId = 0;
                if (!windowRef.current || isMobileViewport.value || isMaximized.value) return;

                const rect = windowRef.current.getBoundingClientRect();
                const width = rect.width;
                const height = rect.height;
                const maxLeft = Math.max(0, window.innerWidth - width);
                const maxTop = Math.max(0, window.innerHeight - height);

                let newLeft = rect.left;
                let newTop = rect.top;
                let needsUpdate = false;

                if (newLeft > maxLeft) {
                    newLeft = maxLeft;
                    needsUpdate = true;
                }
                if (newTop > maxTop) {
                    newTop = maxTop;
                    needsUpdate = true;
                }

                if (needsUpdate) {
                    windowRef.current.style.left = `${newLeft}px`;
                    windowRef.current.style.top = `${newTop}px`;
                }
            });
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    // 监听窗口大小变化，检测是否需要 narrow 布局
    useEffect(() => {
        if (!windowRef.current) return;

        // 重置布局检测状态，确保每次打开窗口时重新检测
        resetLayoutCheck();

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                checkNarrowLayout(entry.contentRect.width);
            }
        });

        observer.observe(windowRef.current);
        // 初始检测
        checkNarrowLayout(windowRef.current.offsetWidth);

        return () => observer.disconnect();
    }, []);

    // 在窗口打开时确保窄布局下进入聊天视图
    useEffect(() => {
        if (isChatOpen.value && windowRef.current) {
            ensureNarrowLayoutChatView(windowRef.current.offsetWidth);
        }
    }, [isChatOpen.value]);

    // 调整大小状态
    const resizeState = useRef({
        isResizing: false,
        startX: 0,
        startY: 0,
        initialWidth: 0,
        initialHeight: 0,
        initialLeft: 0,
        initialTop: 0,
    });

    // 处理调整大小开始
    const handleResizeStart = (e: MouseEvent) => {
        if (isMobileViewport.value || isMaximized.value) return;
        e.preventDefault();
        e.stopPropagation(); // 防止触发拖拽

        if (!windowRef.current) return;
        const rect = windowRef.current.getBoundingClientRect();

        resizeState.current = {
            isResizing: true,
            startX: e.clientX,
            startY: e.clientY,
            initialWidth: rect.width,
            initialHeight: rect.height,
            initialLeft: rect.left,
            initialTop: rect.top,
        };

        document.addEventListener('mousemove', handleResizeMove);
        document.addEventListener('mouseup', handleResizeEnd);
    };

    const handleResizeMove = (e: MouseEvent) => {
        if (!resizeState.current.isResizing || !windowRef.current) return;

        // 向左上方调整大小：
        // 宽度增加 = startX - currentX
        // 高度增加 = startY - currentY
        const dx = resizeState.current.startX - e.clientX;
        const dy = resizeState.current.startY - e.clientY;

        const newWidth = Math.max(320, resizeState.current.initialWidth + dx);
        const newHeight = Math.max(400, resizeState.current.initialHeight + dy);

        windowRef.current.style.width = `${newWidth}px`;
        windowRef.current.style.height = `${newHeight}px`;

        // 更新位置
        windowRef.current.style.left = `${resizeState.current.initialLeft - (newWidth - resizeState.current.initialWidth)}px`;
        windowRef.current.style.top = `${resizeState.current.initialTop - (newHeight - resizeState.current.initialHeight)}px`;
    };

    const handleResizeEnd = () => {
        resizeState.current.isResizing = false;
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);

        // 保存位置和大小
        if (windowRef.current) {
            saveWindowPosition(windowRef.current);
        }
    };

    const className = [
        'dollars-chat-window',
        (animateIn && isChatOpen.value) && 'visible',
        isMobileViewport.value && 'mobile',
        isMaximized.value && 'maximized',
        isSearchActive.value && 'search-active',
        isNarrowLayout.value && 'is-narrow',
        mobileChatViewActive.value && 'mobile-chat-active',
    ].filter(Boolean).join(' ');

    // BMO 观察器 - 自动渲染新增的 .bmo 元素
    useEffect(() => {
        const bmoji = (window as any).Bmoji;
        const container = windowRef.current;
        if (!bmoji || !container) return;

        // 使用官方 observe API 自动处理新增的 .bmo 元素
        if (typeof bmoji.observe === 'function') {
            bmoji.observe(container, { width: 21, height: 21 });
        }
        // 初始渲染已存在的元素
        if (typeof bmoji.renderAll === 'function') {
            bmoji.renderAll(container, { width: 21, height: 21 });
        }

        return () => {
            if (typeof bmoji.disconnect === 'function') {
                bmoji.disconnect();
            }
        };
    }, []);

    return (
        <div
            id="dollars-chat-window"
            ref={windowRef}
            class={className}
            onMouseDown={handleDragStart}
        >
            <div
                id="dollars-resize-handle"
                title="调整窗口大小"
                onMouseDown={handleResizeStart}
            ></div>
            <ChatHeader />
            <div id="dollars-content-panes">
                <Sidebar />
                <div id="dollars-main-chat">
                    <SearchPanel />
                    <ChatBody />
                    <FloatingUI />
                    <ChatInput />
                </div>
            </div>
        </div>
    );
}
