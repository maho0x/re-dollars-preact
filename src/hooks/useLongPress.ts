import { useRef, useCallback } from 'preact/hooks';

interface LongPressOptions {
    threshold?: number;
    onLongPress: (e: MouseEvent | TouchEvent) => void;
    onClick?: (e: MouseEvent | TouchEvent) => void;
}

export function useLongPress({ threshold = 500, onLongPress, onClick }: LongPressOptions) {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isLongPressRef = useRef(false);
    const startXRef = useRef(0);
    const startYRef = useRef(0);
    // 标记是否已处理过事件，防止冒泡到父组件
    const handledRef = useRef(false);

    const start = useCallback((e: MouseEvent | TouchEvent) => {
        // Only accept left click or touch
        if (e instanceof MouseEvent && e.button !== 0) return;

        if (e instanceof TouchEvent) {
            startXRef.current = e.touches[0].clientX;
            startYRef.current = e.touches[0].clientY;
        } else {
            startXRef.current = e.clientX;
            startYRef.current = e.clientY;
        }

        isLongPressRef.current = false;
        handledRef.current = false;
        timerRef.current = setTimeout(() => {
            isLongPressRef.current = true;
            handledRef.current = true;
            onLongPress(e);
        }, threshold);
    }, [onLongPress, threshold]);

    const clear = useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const move = useCallback((e: MouseEvent | TouchEvent) => {
        if (!timerRef.current) return;

        const moveThreshold = 10;
        let x = 0, y = 0;

        if (e instanceof TouchEvent) {
            x = e.touches[0].clientX;
            y = e.touches[0].clientY;
        } else {
            x = e.clientX;
            y = e.clientY;
        }

        if (
            Math.abs(x - startXRef.current) > moveThreshold ||
            Math.abs(y - startYRef.current) > moveThreshold
        ) {
            clear();
        }
    }, [clear]);

    const end = useCallback((e: MouseEvent | TouchEvent) => {
        clear();
        
        // 如果是长按，阻止事件冒泡到父组件
        if (isLongPressRef.current) {
            e.stopPropagation();
            if (e.cancelable) e.preventDefault();
            return;
        }
        
        // 短按：触发 onClick 并标记已处理
        if (onClick) {
            handledRef.current = true;
            e.stopPropagation();
            onClick(e);
        }
    }, [clear, onClick]);

    return {
        onMouseDown: (e: MouseEvent) => start(e),
        onMouseMove: (e: MouseEvent) => move(e),
        onMouseUp: (e: MouseEvent) => end(e),
        onMouseLeave: (e: MouseEvent) => clear(),
        onTouchStart: (e: TouchEvent) => { e.stopPropagation(); start(e); },
        onTouchMove: (e: TouchEvent) => move(e),
        onTouchEnd: (e: TouchEvent) => end(e),
    };
}
