export type OptimisticMessageState = 'sending' | 'sent' | 'failed';

export interface OptimisticMessageAdapter<T> {
    state(item: T): OptimisticMessageState | undefined;
    stableKey(item: T): string | undefined;
    contentKey(item: T): string;
    senderKey(item: T): string;
    timestamp?(item: T): number | null | undefined;
}

export function createOptimisticStableKey(prefix = 'temp') {
    return `${prefix}-${Math.random().toString(36).slice(2)}`;
}

export function optimisticTimestamp(lastTimestamp = 0, now = Date.now()) {
    return Math.max(Math.floor(now / 1000), lastTimestamp || 0);
}

function isSending<T>(item: T, adapter: OptimisticMessageAdapter<T>) {
    return adapter.state(item) === 'sending';
}

function isLocal<T>(item: T, adapter: OptimisticMessageAdapter<T>) {
    const state = adapter.state(item);
    return state === 'sending' || state === 'failed';
}

function sameContentAndSender<T>(
    local: T,
    incoming: T,
    adapter: OptimisticMessageAdapter<T>
) {
    return adapter.senderKey(local) === adapter.senderKey(incoming)
        && adapter.contentKey(local) === adapter.contentKey(incoming);
}

function sameTimeWindow<T>(
    local: T,
    incoming: T,
    adapter: OptimisticMessageAdapter<T>,
    seconds: number
) {
    const localTime = adapter.timestamp?.(local);
    const incomingTime = adapter.timestamp?.(incoming);
    if (localTime == null || incomingTime == null) return true;
    return incomingTime >= localTime - seconds;
}

export function takeOptimisticMatchFromMap<K, T>(
    map: Map<K, T>,
    incoming: T,
    adapter: OptimisticMessageAdapter<T>,
    options: {
        stableKey?: string;
        prefer?: (candidateKey: K, currentKey: K) => boolean;
    } = {}
): { matchedId?: K; stableKey?: string } {
    if (options.stableKey) {
        for (const [id, item] of map) {
            if (isSending(item, adapter) && adapter.stableKey(item) === options.stableKey) {
                map.delete(id);
                return { matchedId: id, stableKey: adapter.stableKey(item) };
            }
        }
    }

    let matchedId: K | undefined;
    for (const [id, item] of map) {
        if (
            isSending(item, adapter)
            && sameContentAndSender(item, incoming, adapter)
            && (matchedId === undefined || options.prefer?.(id, matchedId))
        ) {
            matchedId = id;
        }
    }

    if (matchedId !== undefined) {
        const stableKey = adapter.stableKey(map.get(matchedId)!);
        map.delete(matchedId);
        return { matchedId, stableKey };
    }

    return {};
}

export function mergeOptimisticList<T>(
    current: readonly T[] | undefined,
    incoming: readonly T[],
    adapter: OptimisticMessageAdapter<T>,
    options: {
        isIncomingCandidate?: (item: T) => boolean;
        timestampWindowSeconds?: number;
        mergeMatched?: (incoming: T, local: T) => T;
    } = {}
) {
    const locals = (current || []).filter(item => isLocal(item, adapter));
    if (locals.length === 0) return incoming;

    const usedLocals = new Set<number>();
    const timeWindow = options.timestampWindowSeconds ?? Number.POSITIVE_INFINITY;
    let changed = false;

    const mergedIncoming = incoming.map(item => {
        if (options.isIncomingCandidate && !options.isIncomingCandidate(item)) return item;

        const matchedIndex = locals.findIndex((local, index) =>
            !usedLocals.has(index)
            && sameContentAndSender(local, item, adapter)
            && sameTimeWindow(local, item, adapter, timeWindow)
        );
        if (matchedIndex < 0) return item;

        usedLocals.add(matchedIndex);
        if (!options.mergeMatched) return item;

        changed = true;
        return options.mergeMatched(item, locals[matchedIndex]);
    });

    const unmatchedLocals = locals.filter((_, index) => !usedLocals.has(index));
    return unmatchedLocals.length > 0
        ? [...mergedIncoming, ...unmatchedLocals]
        : changed ? mergedIncoming : incoming;
}
