import { useRef, useCallback } from 'preact/hooks';
import { isContextMenuOpen, isSmileyPanelOpen, profileCardUserId, showContextMenu } from '@/stores/ui';

interface SwipeToReplyOptions {
    messageId: number;
    onReply: () => void;
    elementRef: React.RefObject<HTMLDivElement>;
}

interface SwipeHandlers {
    onTouchStart: (e: TouchEvent) => void;
    onTouchMove: (e: TouchEvent) => void;
    onTouchEnd: (e: TouchEvent) => void;
}

export function useSwipeToReply({ messageId, onReply, elementRef }: SwipeToReplyOptions): SwipeHandlers {
    const swipeState = useRef({
        startX: 0,
        startY: 0,
        currentTranslate: 0,
        isSwiping: false,
        startTime: 0,
    });

    const handleTouchStart = useCallback((e: TouchEvent) => {
        if (e.touches.length !== 1) return;
        // Don't swipe if touching interactive elements
        if ((e.target as HTMLElement).closest('.reaction-item, button')) return;

        swipeState.current = {
            startX: e.touches[0].clientX,
            startY: e.touches[0].clientY,
            currentTranslate: 0,
            isSwiping: false,
            startTime: Date.now(),
        };

        if (elementRef.current) {
            elementRef.current.style.transition = 'none';
        }
    }, [elementRef]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!elementRef.current) return;

        const deltaX = e.touches[0].clientX - swipeState.current.startX;
        const deltaY = e.touches[0].clientY - swipeState.current.startY;

        // Determine if scrolling or swiping
        if (!swipeState.current.isSwiping) {
            if (Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
                swipeState.current.isSwiping = true;
            } else {
                return; // Let native scroll handle it
            }
        }

        if (swipeState.current.isSwiping) {
            e.preventDefault(); // Prevent scroll while swiping

            // Apply elastic resistance
            const translate = deltaX < 0
                ? -60 * (1 - Math.exp(-(-deltaX / 150)))
                : 0;

            swipeState.current.currentTranslate = translate;
            elementRef.current.style.transform = `translateX(${translate}px)`;

            // Handle indicator
            const indicatorEl = elementRef.current.querySelector('.swipe-reply-indicator') as HTMLElement;
            if (indicatorEl) {
                const progress = Math.min(Math.abs(translate) / 40, 1);
                indicatorEl.style.opacity = String(progress);
                indicatorEl.style.transform = `translateY(-50%) scale(${0.5 + 0.5 * progress})`;
            }
        }
    }, [elementRef]);

    const handleTouchEnd = useCallback((e: TouchEvent) => {
        if (!elementRef.current) return;

        elementRef.current.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        elementRef.current.style.transform = '';

        // Reset indicator
        const indicatorEl = elementRef.current.querySelector('.swipe-reply-indicator') as HTMLElement;
        if (indicatorEl) {
            indicatorEl.style.transition = 'all 0.2s ease';
            indicatorEl.style.opacity = '0';
            indicatorEl.style.transform = 'translateY(-50%) scale(0.5)';
        }

        const touch = e.changedTouches[0];
        const dist = Math.sqrt(
            Math.pow(touch.clientX - swipeState.current.startX, 2) +
            Math.pow(touch.clientY - swipeState.current.startY, 2)
        );

        const duration = Date.now() - swipeState.current.startTime;
        // Tap condition: not swiping, short duration, AND small movement
        const isTap = !swipeState.current.isSwiping && duration < 300 && dist < 10;

        if (swipeState.current.isSwiping) {
            if (swipeState.current.currentTranslate < -35) {
                onReply();
            }
        } else if (isTap) {
            // Mobile tap to open menu (except images/links/quotes/avatars/masks/image-placeholders/tags/buttons)
            const target = e.target as HTMLElement;
            const isImage = target.tagName === 'IMG' || target.closest('.full-image');
            const isImagePlaceholder = target.closest('.image-placeholder');
            const isLink = target.closest('a');
            const isQuote = target.closest('.chat-quote[data-jump-to-id]');
            const isAvatar = target.closest('.avatar');
            const isMask = target.closest('.text_mask') && !target.closest('.image-masked');
            const isTag = target.closest('.chat-tag');
            const isButton = target.closest('button');
            const isVideo = target.tagName === 'VIDEO' || target.closest('.video-container') || target.closest('video');

            if (!isImage && !isImagePlaceholder && !isLink && !isQuote && !isAvatar && !isMask && !isTag && !isButton && !isVideo) {
                // If menu is already open, don't open a new one (let click close it)
                if (isContextMenuOpen.peek()) return;
                // Don't open context menu if profile card or smiley panel is open (let click close them)
                if (isSmileyPanelOpen.peek() || profileCardUserId.peek()) return;

                // Prevent ghost click that might trigger the menu immediately
                if (e.cancelable) e.preventDefault();

                showContextMenu(touch.clientX, touch.clientY, String(messageId), null);
            }
        }

        swipeState.current.isSwiping = false;
    }, [onReply, messageId, elementRef]);

    return {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
    };
}
