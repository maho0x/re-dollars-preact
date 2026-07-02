import { describe, expect, it } from 'vitest';
import { fitWindowRectToViewport } from './windowState';
import { MIN_WINDOW_WIDTH, MIN_WINDOW_HEIGHT } from './constants';

describe('fitWindowRectToViewport', () => {
    it('leaves a rect that already fits untouched', () => {
        const rect = { left: 100, top: 80, width: 400, height: 550 };
        expect(fitWindowRectToViewport(rect, 1440, 900)).toEqual(rect);
    });

    // Bug 1: shrinking the viewport vertically below the window height must clamp
    // the height, otherwise the window's bottom edge overflows the viewport.
    it('clamps height so the bottom edge stays inside a shorter viewport', () => {
        const rect = { left: 0, top: 0, width: 400, height: 550 };
        const fitted = fitWindowRectToViewport(rect, 1440, 400);
        expect(fitted.height).toBe(400);
        expect(fitted.top + fitted.height).toBeLessThanOrEqual(400);
    });

    // Bug 2: geometry saved on a large screen must be pulled fully back on-screen
    // when restored on a smaller viewport, instead of rendering off-screen.
    it('pulls an off-screen restored position back into a smaller viewport', () => {
        const rect = { left: 1200, top: 700, width: 400, height: 550 };
        const fitted = fitWindowRectToViewport(rect, 800, 600);
        expect(fitted.left + fitted.width).toBeLessThanOrEqual(800);
        expect(fitted.top + fitted.height).toBeLessThanOrEqual(600);
        expect(fitted.left).toBeGreaterThanOrEqual(0);
        expect(fitted.top).toBeGreaterThanOrEqual(0);
    });

    it('never shrinks below the minimum window size', () => {
        const rect = { left: 0, top: 0, width: 50, height: 50 };
        const fitted = fitWindowRectToViewport(rect, 1440, 900);
        expect(fitted.width).toBe(MIN_WINDOW_WIDTH);
        expect(fitted.height).toBe(MIN_WINDOW_HEIGHT);
    });
});
