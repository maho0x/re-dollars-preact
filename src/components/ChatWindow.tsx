import { useRef, useEffect, useState } from 'preact/hooks';
import { isChatOpen } from '@/stores/chat';
import { isMobileViewport, isMaximized, isSearchActive, isNarrowLayout, mobileChatViewActive, checkNarrowLayout, resetLayoutCheck, ensureNarrowLayoutChatView } from '@/stores/ui';
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

        windowRef.current.style.left = `${dragState.current.initialLeft + dx}px`;
        windowRef.current.style.top = `${dragState.current.initialTop + dy}px`;
    };

    const handleDragEnd = () => {
        dragState.current.isDragging = false;
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);

        // 保存位置和大小
        if (windowRef.current) {
            localStorage.setItem('dollarsChatPosition', JSON.stringify({
                x: windowRef.current.offsetLeft,
                y: windowRef.current.offsetTop,
                width: windowRef.current.offsetWidth,
                height: windowRef.current.offsetHeight
            }));
        }
    };

    // 恢复位置和大小
    useEffect(() => {
        if (isMobileViewport.value) return;

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
            localStorage.setItem('dollarsChatPosition', JSON.stringify({
                x: windowRef.current.offsetLeft,
                y: windowRef.current.offsetTop,
                width: windowRef.current.offsetWidth,
                height: windowRef.current.offsetHeight
            }));
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

    // BMO 观察器 - 修复 BMO 表情渲染
    useEffect(() => {
        if ((window as any).Bmoji) {
            const list = windowRef.current?.querySelector('.chat-list');
            if (list) {
                // 原版逻辑：Bmoji.observe(getChatElements().list, { width: 21, height: 21 });
                // 使用 setTimeout 确保 DOM 已渲染
                setTimeout(() => {
                    const bmoji = (window as any).Bmoji;
                    if (typeof bmoji.observe === 'function') {
                        bmoji.observe(list, { width: 21, height: 21 });
                    }
                }, 100);

                return () => {
                    const bmoji = (window as any).Bmoji;
                    if (bmoji && typeof bmoji.disconnect === 'function') {
                        bmoji.disconnect();
                    }
                };
            }
        }
    }, [windowRef.current]); // 依赖 windowRef

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
