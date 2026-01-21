export interface ScrollAnchorState {
    anchorElement: HTMLElement | null;
    anchorOffset: number;
}

/**
 * 捕获当前滚动锚点
 */
export function captureScrollAnchor(
    container: HTMLElement,
    listElement: HTMLElement
): ScrollAnchorState | null {
    const containerRect = container.getBoundingClientRect();
    const messages = listElement.querySelectorAll('.chat-message[data-db-id]');
    
    for (const msg of messages) {
        const rect = msg.getBoundingClientRect();
        // 找到第一个顶部在视口内的消息
        if (rect.top >= containerRect.top && rect.top < containerRect.bottom) {
            return {
                anchorElement: msg as HTMLElement,
                anchorOffset: rect.top - containerRect.top,
            };
        }
    }
    return null;
}

/**
 * 恢复滚动锚点位置
 */
export function restoreScrollAnchor(
    container: HTMLElement,
    anchor: ScrollAnchorState
): void {
    if (!anchor.anchorElement) return;
    
    requestAnimationFrame(() => {
        const rect = anchor.anchorElement!.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const currentOffset = rect.top - containerRect.top;
        const scrollAdjustment = currentOffset - anchor.anchorOffset;
        
        container.scrollTop += scrollAdjustment;
    });
}

/**
 * 滚动到指定消息 (无动画)
 */
export function scrollToMessage(
    container: HTMLElement,
    messageId: number,
    position: 'top' | 'center' = 'top'
): boolean {
    const element = document.getElementById(`db-${messageId}`);
    if (!element) return false;
    
    requestAnimationFrame(() => {
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        
        let targetScrollTop: number;
        if (position === 'top') {
            targetScrollTop = container.scrollTop + elementRect.top - containerRect.top - 10;
        } else {
            targetScrollTop = container.scrollTop + elementRect.top - containerRect.top 
                - (containerRect.height / 2) + (elementRect.height / 2);
        }
        
        container.scrollTop = targetScrollTop;
    });
    
    return true;
}
