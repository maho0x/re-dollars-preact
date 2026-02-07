import { useSignal } from '@preact/signals';
import { useCallback, useRef, useEffect } from 'preact/hooks';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { fetchGalleryMedia } from '@/utils/api';
import { formatDate, getAvatarUrl } from '@/utils/format';
import { pendingJumpToMessage, toggleChat } from '@/stores/chat';
import { isSearchActive } from '@/stores/ui';

interface GalleryItem {
    url: string;
    thumbnailUrl?: string;
    type: 'image' | 'video';
    message_id: number;
    nickname: string;
    avatar: string;
    timestamp: number;
}

interface GalleryPanelProps {
    onClose: () => void;
}

export function GalleryPanel({ onClose }: GalleryPanelProps) {
    const items = useSignal<GalleryItem[]>([]);
    const isLoading = useSignal(false);
    const hasMore = useSignal(true);
    const offset = useRef(0);
    const initialized = useRef(false);
    const gridRef = useRef<HTMLDivElement>(null);

    const loadMore = useCallback(async () => {
        if (isLoading.value || !hasMore.value) return;

        isLoading.value = true;
        try {
            const data = await fetchGalleryMedia(offset.current, 50);
            items.value = [...items.value, ...data.items];
            hasMore.value = data.hasMore;
            offset.current += data.items.length;
        } catch (e) {
            console.error('[GalleryPanel] Failed to load:', e);
        } finally {
            isLoading.value = false;
        }
    }, []);

    // Initial load
    if (!initialized.current) {
        initialized.current = true;
        loadMore();
    }

    // Check if we need more items to fill the view
    useEffect(() => {
        const checkAndLoadMore = () => {
            const grid = gridRef.current;
            if (grid && hasMore.value && !isLoading.value) {
                // If content doesn't fill the container, load more
                if (grid.scrollHeight <= grid.clientHeight) {
                    loadMore();
                }
            }
        };
        // Check after items update
        const timer = setTimeout(checkAndLoadMore, 100);
        return () => clearTimeout(timer);
    }, [items.value.length, hasMore.value, isLoading.value]);

    const handleScroll = (e: Event) => {
        const el = e.target as HTMLDivElement;
        if (
            !isLoading.value &&
            hasMore.value &&
            el.scrollHeight - el.scrollTop - el.clientHeight < 100
        ) {
            loadMore();
        }
    };

    return (
        <div class="gallery-container">
            <div class="gallery-header">
                <span class="gallery-title">相册</span>
                <div
                    class="gallery-close-btn"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </div>
            </div>

            <PhotoProvider
                overlayRender={(props) => {
                    const { index } = props;
                    const imageItems = items.value.filter(item => item.type === 'image');
                    const currentItem = imageItems[index];

                    if (!currentItem) return null;

                    return (
                        <div class="gallery-photo-capsule" onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                            // Set jump target and open chat
                            pendingJumpToMessage.value = currentItem.message_id;
                            isSearchActive.value = false; // Close search UI if open
                            toggleChat(true);
                        }}>
                            <img src={getAvatarUrl(currentItem.avatar, 's')} alt={currentItem.nickname} class="capsule-avatar" />
                            <div class="capsule-info">
                                <span class="capsule-nickname">{currentItem.nickname}</span>
                                <span class="capsule-date">{formatDate(currentItem.timestamp, 'full')}</span>
                            </div>
                        </div>
                    );
                }}
            >
                <div class="gallery-grid" ref={gridRef} onScroll={handleScroll}>
                    {items.value.map((item, idx) => (
                        <div
                            key={`${item.message_id}-${idx}`}
                            class="gallery-item"
                        >
                            {item.type === 'video' ? (
                                <div class="video-container" onClick={() => {
                                    window.open(item.url, '_blank');
                                }}>
                                    <img
                                        src={item.thumbnailUrl || item.url}
                                        alt="Video thumbnail"
                                        loading="lazy"
                                        style="width: 100%; height: 100%; object-fit: cover; cursor: pointer;"
                                        onError={(e) => {
                                            // If thumbnail fails, show a placeholder or just keep the broken image icon
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    <div class="video-overlay">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="white" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            ) : (
                                <PhotoView src={item.url}>
                                    <img src={item.thumbnailUrl || item.url} alt="" loading="lazy" />
                                </PhotoView>
                            )}
                        </div>
                    ))}

                    {isLoading.value && (
                        <div class="gallery-loading">加载中...</div>
                    )}
                </div>
            </PhotoProvider>
        </div>
    );
}
