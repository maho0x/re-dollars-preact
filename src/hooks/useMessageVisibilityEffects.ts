import { useEffect } from 'preact/hooks';
import type { RefObject } from 'preact';
import { markMessageAsSeenIfNotified } from '@/stores/notifications';

function updateContainerSize(container: HTMLElement, w: number, h: number) {
    const MAX_W = 320;
    const MAX_H = 250;
    let dw = w, dh = h;
    if (dw > MAX_W) { dh = (MAX_W / dw) * dh; dw = MAX_W; }
    if (dh > MAX_H) { dw = (MAX_H / dh) * dw; dh = MAX_H; }
    container.style.cssText = `aspect-ratio: ${w} / ${h}; width: ${Math.round(dw)}px; max-width: 100%;`;
    container.dataset.iw = String(w);
    container.dataset.ih = String(h);
}

function hydrateImageLoadingState(root: HTMLElement) {
    root.querySelectorAll('.full-image').forEach((img: Element) => {
        const image = img as HTMLImageElement;
        const container = image.closest('.image-container') as HTMLElement | null;

        const handleLoad = () => {
            image.classList.add('is-loaded');
            if (container) {
                container.classList.add('is-loaded');
                if (!container.dataset.iw && image.naturalWidth > 0 && image.naturalHeight > 0) {
                    updateContainerSize(container, image.naturalWidth, image.naturalHeight);
                }
            }
        };

        const handleError = () => {
            image.src = '/img/no_img.gif';
            image.classList.add('is-loaded', 'load-failed');
            if (container) container.classList.add('is-loaded');
        };

        if (image.complete) {
            if (image.naturalWidth > 0) {
                handleLoad();
            } else {
                handleError();
            }
        } else {
            image.addEventListener('load', handleLoad, { once: true });
            image.addEventListener('error', handleError, { once: true });
        }
    });
}

export function useMessageVisibilityEffects(
    messageRef: RefObject<HTMLDivElement>,
    messageId: number,
    content: string,
) {
    useEffect(() => {
        const el = messageRef.current;
        if (!el) return;

        let hasRendered = false;

        const handleVisibility = () => {
            if (hasRendered) return;
            hasRendered = true;

            markMessageAsSeenIfNotified(messageId);
            hydrateImageLoadingState(el);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        handleVisibility();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '100px' }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
        };
    }, [content, messageId]);
}
