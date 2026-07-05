import { describe, expect, it } from 'vitest';
import {
    mergeOptimisticList,
    optimisticTimestamp,
    takeOptimisticMatchFromMap,
    type OptimisticMessageAdapter,
} from './optimisticMessages';

type Item = {
    id: number | string;
    sender: string;
    text: string;
    timestamp: number | null;
    stableKey?: string;
    state?: 'sending' | 'sent' | 'failed';
};

const adapter: OptimisticMessageAdapter<Item> = {
    state: item => item.state,
    stableKey: item => item.stableKey,
    contentKey: item => item.text.trim().replace(/\s+/g, ' '),
    senderKey: item => item.sender,
    timestamp: item => item.timestamp,
};

describe('optimistic message helpers', () => {
    it('matches and removes a pending map item by stable key first', () => {
        const map = new Map<number, Item>([
            [-1, { id: -1, sender: 'me', text: 'different', timestamp: 100, stableKey: 'temp-a', state: 'sending' }],
        ]);

        const match = takeOptimisticMatchFromMap(
            map,
            { id: 1, sender: 'me', text: 'hello', timestamp: 101 },
            adapter,
            { stableKey: 'temp-a' }
        );

        expect(match).toEqual({ matchedId: -1, stableKey: 'temp-a' });
        expect(map.has(-1)).toBe(false);
    });

    it('falls back to sender/content matching and lets callers choose FIFO order', () => {
        const map = new Map<number, Item>([
            [-2, { id: -2, sender: 'me', text: 'hello', timestamp: 101, state: 'sending' }],
            [-1, { id: -1, sender: 'me', text: ' hello ', timestamp: 100, state: 'sending' }],
        ]);

        const match = takeOptimisticMatchFromMap(
            map,
            { id: 10, sender: 'me', text: 'hello', timestamp: 102 },
            adapter,
            { prefer: (candidate, current) => candidate > current }
        );

        expect(match.matchedId).toBe(-1);
        expect(map.has(-1)).toBe(false);
        expect(map.has(-2)).toBe(true);
    });

    it('merges unmatched local pending and failed messages after authoritative items', () => {
        const localPending: Item = { id: 'temp-1', sender: 'me', text: 'pending', timestamp: 100, state: 'sending' };
        const localFailed: Item = { id: 'temp-2', sender: 'me', text: 'failed', timestamp: 100, state: 'failed' };

        const merged = mergeOptimisticList(
            [
                localPending,
                localFailed,
                { id: 'old', sender: 'peer', text: 'old', timestamp: 90 },
            ],
            [{ id: 'new', sender: 'peer', text: 'new', timestamp: 110 }],
            adapter
        );

        expect(merged.map(item => item.id)).toEqual(['new', 'temp-1', 'temp-2']);
    });

    it('consumes matching local messages during list merge', () => {
        const merged = mergeOptimisticList(
            [{ id: 'temp-1', sender: 'me', text: 'hello', timestamp: 100, state: 'sending' }],
            [{ id: 'server-1', sender: 'me', text: 'hello', timestamp: 101 }],
            adapter,
            { timestampWindowSeconds: 60 }
        );

        expect(merged.map(item => item.id)).toEqual(['server-1']);
    });

    it('can merge local optimistic fields into matched incoming items', () => {
        const merged = mergeOptimisticList(
            [{ id: 'temp-1', sender: 'me', text: 'hello', timestamp: 100, stableKey: 'temp-key', state: 'sending' }],
            [{ id: 'server-1', sender: 'me', text: 'hello', timestamp: 101 }],
            adapter,
            {
                mergeMatched: (incoming, local) => ({ ...incoming, stableKey: local.stableKey }),
            }
        );

        expect(merged).toEqual([
            { id: 'server-1', sender: 'me', text: 'hello', timestamp: 101, stableKey: 'temp-key' },
        ]);
    });

    it('keeps optimistic timestamps monotonic', () => {
        expect(optimisticTimestamp(200, 100_000)).toBe(200);
        expect(optimisticTimestamp(20, 100_000)).toBe(100);
    });
});
