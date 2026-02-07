import { useCallback, useRef, useEffect } from 'preact/hooks';
import { useSignal } from '@preact/signals';
import { isSearchActive, toggleSearch } from '@/stores/ui';
import { searchQuery } from '@/stores/chat';
import { searchMessages } from '@/utils/api';
import { debounce, formatDate, getAvatarUrl } from '@/utils/format';
import { SVGIcons } from '@/utils/constants';
import { GalleryPanel } from './GalleryPanel';
import type { Message } from '@/types';

export function SearchPanel() {
    // Use global `searchQuery` instead of local state
    const results = useSignal<Message[]>([]);
    const isLoading = useSignal(false);
    const hasMore = useSignal(false);
    const searchOffset = useRef(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const isGalleryMode = useSignal(false);

    // 执行搜索
    const performSearch = useCallback(async (q: string, isNewSearch = false) => {
        if (!q.trim()) {
            results.value = [];
            return;
        }

        if (isNewSearch) {
            results.value = [];
            searchOffset.current = 0;
            hasMore.value = true;
        }

        isLoading.value = true;
        try {
            const data = await searchMessages(q, searchOffset.current);
            if (isNewSearch) {
                results.value = data.messages;
            } else {
                results.value = [...results.value, ...data.messages];
            }
            hasMore.value = data.hasMore;
            searchOffset.current += data.messages.length;
        } catch (e) {
            // ignore
        } finally {
            isLoading.value = false;
        }
    }, []);

    // 防抖搜索
    const debouncedSearch = useCallback(debounce((q: string) => performSearch(q, true), 500), []);

    // 监听 searchQuery 变化 (支持外部触发)
    useEffect(() => {
        if (isSearchActive.value && searchQuery.value) {
            debouncedSearch(searchQuery.value);
        } else if (!searchQuery.value) {
            results.value = [];
        }
    }, [searchQuery.value, isSearchActive.value]);

    // 搜索面板打开时自动聚焦输入框（确保移动端弹出键盘）
    useEffect(() => {
        if (isSearchActive.value && inputRef.current) {
            // 使用 setTimeout 确保 DOM 已渲染完成
            setTimeout(() => {
                inputRef.current?.focus();
            }, 50);
        }
    }, [isSearchActive.value]);

    // 输入处理
    const handleInput = (e: Event) => {
        const val = (e.target as HTMLInputElement).value;
        searchQuery.value = val;
    };

    // 滚动加载更多
    const handleScroll = (e: Event) => {
        const el = e.target as HTMLDivElement;
        if (
            !isLoading.value &&
            hasMore.value &&
            el.scrollHeight - el.scrollTop - el.clientHeight < 50
        ) {
            performSearch(searchQuery.value, false);
        }
    };

    // 关闭搜索
    const handleClose = () => {
        toggleSearch(false);
        searchQuery.value = '';
        results.value = [];
        isGalleryMode.value = false;
    };

    // 切换相册模式
    const toggleGalleryMode = () => {
        isGalleryMode.value = !isGalleryMode.value;
    };

    // 点击结果
    const handleResultClick = async (msg: Message) => {
        handleClose();

        // 导入并调用跳转逻辑
        const { loadMessageContext } = await import('@/stores/chat');
        const result = await loadMessageContext(msg.id);

        if (result) {
            // 给 DOM 一点时间渲染
            setTimeout(() => {
                const targetId = `db-${msg.id}`;
                const el = document.getElementById(targetId);
                const listEl = document.querySelector('.chat-list');

                if (el) {
                    // 第一步：快速定位
                    el.scrollIntoView({ behavior: 'auto', block: 'center' });

                    // 第二步：使用自定义缓动动画平滑微调
                    setTimeout(() => {
                        // 查找滚动容器
                        const container = document.querySelector('.chat-body');
                        if (container) {
                            const startTop = container.scrollTop;
                            const containerHeight = container.clientHeight;
                            const elTop = (el as HTMLElement).offsetTop;
                            const elHeight = (el as HTMLElement).offsetHeight;
                            // 目标：将元素居中
                            const targetTop = Math.max(0, elTop - containerHeight / 2 + elHeight / 2);
                            const distance = targetTop - startTop;
                            const duration = 600;
                            const startTime = performance.now();
                            const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

                            const animate = (currentTime: number) => {
                                const elapsed = currentTime - startTime;
                                const progress = Math.min(elapsed / duration, 1);

                                if (progress < 1) {
                                    container.scrollTop = startTop + distance * easeOutCubic(progress);
                                    requestAnimationFrame(animate);
                                } else {
                                    container.scrollTop = startTop + distance;
                                }
                            };
                            requestAnimationFrame(animate);
                        } else {
                            // Fallback
                            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }
                    }, 100);

                    // 应用聚焦模式 (使其他消息变暗)
                    if (listEl) listEl.classList.add('focus-mode');

                    // 应用高亮效果
                    el.classList.remove('message-highlight');
                    void el.offsetWidth; // 触发重绘
                    el.classList.add('message-highlight');

                    setTimeout(() => {
                        if (listEl) listEl.classList.remove('focus-mode');
                        el.classList.remove('message-highlight');
                    }, 800);
                } else {
                    // 尝试使用 target_index 滚动
                    const msgElements = listEl?.querySelectorAll('.chat-message');
                    if (msgElements && result.targetIndex < msgElements.length) {
                        const targetEl = msgElements[result.targetIndex] as HTMLElement;
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }
            }, 300);
        }
    };

    // 日期选择 Input Ref
    const dateInputRef = useRef<HTMLInputElement>(null);

    // 打开日期选择器
    const openDatePicker = () => {
        // use showPicker() if supported (modern browsers)
        if (dateInputRef.current) {
            if ('showPicker' in HTMLInputElement.prototype) {
                try {
                    (dateInputRef.current as any).showPicker();
                } catch (err) {
                    dateInputRef.current.click();
                }
            } else {
                dateInputRef.current.click();
            }
        }
    };

    // 处理日期变更
    const handleDateChange = async (e: Event) => {
        const date = (e.target as HTMLInputElement).value;
        if (!date) return;

        // 调用后端 API 获取该日期第一条消息 ID
        const { getFirstMessageIdByDate } = await import('@/utils/api');
        const msgId = await getFirstMessageIdByDate(date);

        if (msgId) {
            // 使用伪造的 Message 对象调用 handleResultClick 复用跳转逻辑
            // 只需要 id 即可，其他字段不重要
            handleResultClick({ id: msgId } as Message);
        } else {
            // 简单提示（可以考虑改为 Toast）
            alert(`日期 ${date} 没有找到消息`);
        }

        // 清空选择，以便下次还能选同一天（虽然意义不大，但符合习惯）
        (e.target as HTMLInputElement).value = '';
    };

    if (!isSearchActive.value) return null;

    return (
        <div id="dollars-search-ui">

            <div class="search-panel-row">
                <div class="search-bar" style={{ flex: 1, marginBottom: 0 }}>
                    <div
                        class="search-icon"
                        style={{ display: 'flex', alignItems: 'center', opacity: 0.5 }}
                        dangerouslySetInnerHTML={{ __html: SVGIcons.search }}
                    />
                    <input
                        ref={inputRef}
                        type="search"
                        placeholder="搜索消息..."
                        value={searchQuery.value}
                        onInput={handleInput}
                        autoFocus
                    />
                    <div
                        class="search-close-btn"
                        onClick={handleClose}
                        dangerouslySetInnerHTML={{ __html: SVGIcons.close }}
                    />
                </div>

                {/* 独立的日期跳转按钮 */}
                <div
                    class="search-calendar-btn"
                    onClick={openDatePicker}
                    title="按日期跳转"
                    dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-calendar"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M11 15h1" /><path d="M12 15v3" /></svg>` }}
                />

                {/* 相册模式按钮 */}
                <div
                    class={`search-gallery-btn ${isGalleryMode.value ? 'active' : ''}`}
                    onClick={toggleGalleryMode}
                    title="相册模式"
                    dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M20.4 14.5L16 10 4 20"/></svg>` }}
                />
            </div>

            {/* Hidden Date Input */}
            <input
                type="date"
                ref={dateInputRef}
                onChange={handleDateChange}
                style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
            />

            {isGalleryMode.value ? (
                <GalleryPanel onClose={() => isGalleryMode.value = false} />
            ) : (
                <div id="dollars-search-results" onScroll={handleScroll}>
                    {results.value.map(msg => (
                        <div
                            key={msg.id}
                            class="search-result-item"
                            onClick={() => handleResultClick(msg)}
                        >
                            <img src={getAvatarUrl(msg.avatar, 's')} alt={msg.nickname} />
                            <div class="dollars-search-content">
                                <div class="dollars-search-header">
                                    <span class="dollars-search-nickname">{msg.nickname}</span>
                                    <span class="dollars-search-timestamp">
                                        {formatDate(msg.timestamp, 'full')}
                                    </span>
                                </div>
                                <div class="dollars-search-message">
                                    {msg.message.replace(/\[.*?\]/g, ' ')}
                                </div>
                            </div>
                        </div>
                    ))}

                    {isLoading.value && (
                        <div style={{ textAlign: 'center', padding: '10px', color: '#999' }}>
                            搜索中...
                        </div>
                    )}

                    {!isLoading.value && results.value.length === 0 && searchQuery.value && (
                        <div style={{ textAlign: 'center', padding: '20px', color: '#999' }}>
                            未找到相关消息
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
