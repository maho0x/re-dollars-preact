import { useRef, useEffect, useState } from 'preact/hooks';
import { isChatOpen } from '@/stores/chat';
import { isMobileViewport, isMaximized, isSearchActive, isNarrowLayout, mobileChatViewActive, checkNarrowLayout, resetLayoutCheck, ensureNarrowLayoutChatView } from '@/stores/ui';
import { settings } from '@/stores/user';
import { ChatHeader } from './ChatHeader';
import { ChatBody } from './ChatBody';
import { ChatInput } from './ChatInput';
import { SearchPanel } from './SearchPanel';
import { UserProfilePanel } from './UserProfilePanel';
import { FloatingUI } from './FloatingUI';
import { Sidebar } from './Sidebar';
import { useWebSocket } from '@/hooks/useWebSocket';
import { loadWindowPosition, saveWindowPosition, fitWindowRectToViewport } from '@/utils/windowState';
import { MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT } from '@/utils/constants';
import { onBmoReady } from '@/utils/bmo';

const BMO_RENDER_OPTIONS = { width: 21, height: 21 };

interface ChatWindowProps {
    skipEntryAnimation?: boolean;
}

// 辅助函数：保存窗口位置和大小（仅在启用记忆状态时）
function persistWindowPosition(element: HTMLDivElement) {
    if (!settings.value.rememberOpenState) return;

    saveWindowPosition({
        x: element.offsetLeft,
        y: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight
    });
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

    // 从 Mouse 或 Touch 事件中提取坐标
    const getPointer = (e: MouseEvent | TouchEvent) => {
        if ('touches' in e) {
            const t = e.touches[0] || (e as TouchEvent).changedTouches[0];
            return { x: t.clientX, y: t.clientY };
        }
        return { x: (e as MouseEvent).clientX, y: (e as MouseEvent).clientY };
    };

    // 拖拽状态
    const dragState = useRef({
        isDragging: false,
        startX: 0,
        startY: 0,
        initialLeft: 0,
        initialTop: 0,
    });

    // 处理拖拽开始
    const handleDragStart = (e: MouseEvent | TouchEvent) => {
        if (isMobileViewport.value || isMaximized.value) return;
        const target = e.target as HTMLElement;
        if (!target.closest('.chat-header') || target.closest('button')) return;

        e.preventDefault();
        const { x, y } = getPointer(e);
        dragState.current = {
            isDragging: true,
            startX: x,
            startY: y,
            initialLeft: windowRef.current?.offsetLeft || 0,
            initialTop: windowRef.current?.offsetTop || 0,
        };

        document.addEventListener('mousemove', handleDragMove);
        document.addEventListener('mouseup', handleDragEnd);
        document.addEventListener('touchmove', handleDragMove, { passive: false });
        document.addEventListener('touchend', handleDragEnd);
    };

    const handleDragMove = (e: MouseEvent | TouchEvent) => {
        if (!dragState.current.isDragging || !windowRef.current) return;
        e.preventDefault();

        const { x, y } = getPointer(e);
        const dx = x - dragState.current.startX;
        const dy = y - dragState.current.startY;

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
        document.removeEventListener('touchmove', handleDragMove);
        document.removeEventListener('touchend', handleDragEnd);

        // 保存位置和大小
        if (windowRef.current) {
            persistWindowPosition(windowRef.current);
        }
    };

    // 恢复位置和大小
    useEffect(() => {
        if (isMobileViewport.value || isMaximized.value || !settings.value.rememberOpenState) return;

        const saved = loadWindowPosition();
        if (saved && windowRef.current) {
            const el = windowRef.current;
            // 保存的几何数据可能来自更大的屏幕/窗口；在应用前夹取到当前视口，
            // 否则窗口可能出现在视口外或超出边界（表现为“打不开”或只显示一部分）。
            const rect = fitWindowRectToViewport({
                left: saved.x,
                top: saved.y,
                width: saved.width ?? el.offsetWidth,
                height: saved.height ?? el.offsetHeight,
            });
            el.style.left = `${rect.left}px`;
            el.style.top = `${rect.top}px`;
            el.style.width = `${rect.width}px`;
            el.style.height = `${rect.height}px`;
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

                const el = windowRef.current;
                const rect = el.getBoundingClientRect();
                // 同时夹取尺寸与位置：仅夹取位置不足以处理视口纵向缩小到比窗口更矮的
                // 情况——此时 maxTop 为 0、top 已是 0，但窗口底边仍会溢出视口。
                const fitted = fitWindowRectToViewport({
                    left: rect.left,
                    top: rect.top,
                    width: rect.width,
                    height: rect.height,
                });

                if (fitted.width !== rect.width) el.style.width = `${fitted.width}px`;
                if (fitted.height !== rect.height) el.style.height = `${fitted.height}px`;
                if (fitted.left !== rect.left) el.style.left = `${fitted.left}px`;
                if (fitted.top !== rect.top) el.style.top = `${fitted.top}px`;
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
    const handleResizeStart = (e: MouseEvent | TouchEvent) => {
        if (isMobileViewport.value || isMaximized.value) return;
        e.preventDefault();
        e.stopPropagation(); // 防止触发拖拽

        if (!windowRef.current) return;
        const rect = windowRef.current.getBoundingClientRect();
        const { x, y } = getPointer(e);

        resizeState.current = {
            isResizing: true,
            startX: x,
            startY: y,
            initialWidth: rect.width,
            initialHeight: rect.height,
            initialLeft: rect.left,
            initialTop: rect.top,
        };

        document.addEventListener('mousemove', handleResizeMove);
        document.addEventListener('mouseup', handleResizeEnd);
        document.addEventListener('touchmove', handleResizeMove, { passive: false });
        document.addEventListener('touchend', handleResizeEnd);
    };

    const handleResizeMove = (e: MouseEvent | TouchEvent) => {
        if (!resizeState.current.isResizing || !windowRef.current) return;
        e.preventDefault();

        const { x, y } = getPointer(e);

        // 向左上方调整大小：
        // 宽度增加 = startX - currentX
        // 高度增加 = startY - currentY
        const dx = resizeState.current.startX - x;
        const dy = resizeState.current.startY - y;

        // 计算新位置，确保不超出窗口边界
        let newWidth = Math.max(MIN_WINDOW_WIDTH, resizeState.current.initialWidth + dx);
        let newHeight = Math.max(MIN_WINDOW_HEIGHT, resizeState.current.initialHeight + dy);
        let newLeft = resizeState.current.initialLeft - (newWidth - resizeState.current.initialWidth);
        let newTop = resizeState.current.initialTop - (newHeight - resizeState.current.initialHeight);

        // 限制 top/left 不超出视口
        if (newTop < 0) {
            newHeight += newTop; // 减少超出的部分
            newTop = 0;
        }
        if (newLeft < 0) {
            newWidth += newLeft;
            newLeft = 0;
        }

        windowRef.current.style.width = `${newWidth}px`;
        windowRef.current.style.height = `${newHeight}px`;
        windowRef.current.style.left = `${newLeft}px`;
        windowRef.current.style.top = `${newTop}px`;
    };

    const handleResizeEnd = () => {
        resizeState.current.isResizing = false;
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeEnd);
        document.removeEventListener('touchmove', handleResizeMove);
        document.removeEventListener('touchend', handleResizeEnd);

        // 保存位置和大小
        if (windowRef.current) {
            persistWindowPosition(windowRef.current);
        }
    };

    const className = 'dollars-chat-window' +
        (animateIn && isChatOpen.value ? ' visible' : '') +
        (isMobileViewport.value ? ' mobile' : '') +
        (isMaximized.value ? ' maximized' : '') +
        (isSearchActive.value ? ' search-active' : '') +
        (isNarrowLayout.value ? ' is-narrow' : '') +
        (mobileChatViewActive.value ? ' mobile-chat-active' : '');

    // BMO 观察器 - 自动渲染新增的 .bmo 元素
    useEffect(() => {
        const container = windowRef.current;
        if (!container) return;
        let hasObserved = false;

        const renderBmo = () => {
            const bmoji = (window as any).Bmoji;
            if (!bmoji || !windowRef.current) return;

            if (!hasObserved && typeof bmoji.observe === 'function') {
                bmoji.observe(windowRef.current, BMO_RENDER_OPTIONS);
                hasObserved = true;
            }
            if (typeof bmoji.renderAll === 'function') {
                bmoji.renderAll(windowRef.current, BMO_RENDER_OPTIONS);
            }
        };

        renderBmo();
        const disposeBmoReady = onBmoReady(renderBmo);

        return () => {
            disposeBmoReady();
            const bmoji = (window as any).Bmoji;
            if (typeof bmoji?.disconnect === 'function') {
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
            onTouchStart={handleDragStart}
        >
            <div
                id="dollars-resize-handle"
                title="调整窗口大小"
                onMouseDown={handleResizeStart}
                onTouchStart={handleResizeStart}
            ></div>
            <ChatHeader />
            <div id="dollars-content-panes">
                <Sidebar />
                <div id="dollars-main-chat">
                    <SearchPanel />
                    <UserProfilePanel />
                    <ChatBody />
                    <FloatingUI />
                    <ChatInput />
                </div>
            </div>
        </div>
    );
}
