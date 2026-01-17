import { useRef, useEffect, useCallback, useMemo, useLayoutEffect } from 'preact/hooks';
import {
    messageIds,
    messageMap,
    getMessageGrouping,
    isLoadingHistory,
    historyFullyLoaded,
    historyOldestId,
    historyNewestId,
    unreadWhileScrolled,
    unreadJumpList,
    pendingScrollToBottom,
    prependMessages,
    appendMessages,
    setMessages,
    timelineIsLive,
    isContextLoading,
    currentDateLabel,
    showScrollBottomBtn,
    manualScrollToBottom,
    isChatOpen,
    pendingJumpToMessage,
    scrollButtonMode,
    saveBrowsePosition,
    loadBrowsePosition,
    clearBrowsePosition,
    isAtBottom,
    updateLastReadId,
    loadLastReadId,
    getFirstUnreadId,
    hasUnreadMessages,
    lastReadId,
    searchQuery,
    initialMessagesLoaded
} from '@/stores/chat';
import { toggleSearch } from '@/stores/ui';
import { blockedUsers, userInfo } from '@/stores/user';
import { inputAreaHeight } from '@/stores/ui';
import { MessageItem } from './MessageItem';
import { fetchHistoryMessages, fetchRecentMessages, fetchMessageContext, fetchNewerMessages, getUnreadCount } from '@/utils/api';
import { formatDate } from '@/utils/format';
import { syncPresenceSubscriptions } from '@/hooks/useWebSocket';
import { insertBrowseSeparator, insertUnreadSeparator } from '@/hooks/useStateKeeper';

// 配置常量
const MAX_DOM_MESSAGES = 100;

export function ChatBody() {
    const bodyRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const isLoadingRef = useRef(false);
    const isStickingToBottom = useRef(true);
    const prevScrollHeight = useRef(0);
    const isRestoringScroll = useRef(false);
    const hideDateLabelTimer = useRef<number | null>(null);
    const scrollAnimationRef = useRef<number | null>(null);

    /**
     * 自定义平滑滚动函数 - 使用 easeOutExpo 缓动实现丝滑效果
     * @param targetTop - 目标滚动位置
     * @param duration - 动画时长 (ms)，如果未指定则根据距离动态计算
     */
    const smoothScrollTo = useCallback((targetTop: number, duration?: number) => {
        if (!bodyRef.current) return;

        // 取消之前的滚动动画
        if (scrollAnimationRef.current) {
            cancelAnimationFrame(scrollAnimationRef.current);
        }

        const container = bodyRef.current;
        const startTop = container.scrollTop;
        const distance = Math.abs(targetTop - startTop);

        // 如果距离很短，不需要动画，直接跳转
        if (distance < 10) {
            container.scrollTop = targetTop;
            return;
        }

        // 动态计算时长：更快的基准速度，更平滑的过渡
        // 短距离 (< 500px): 250-350ms
        // 中等距离 (500-2000px): 350-500ms  
        // 长距离 (> 2000px): 500-650ms
        const calculatedDuration = duration ?? Math.min(250 + Math.sqrt(distance) * 8, 650);
        const startTime = performance.now();
        const diff = targetTop - startTop;

        // easeOutExpo - 更丝滑的指数缓动，开始快后减速更自然
        const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / calculatedDuration, 1);
            const eased = easeOutExpo(progress);

            container.scrollTop = startTop + diff * eased;

            if (progress < 1) {
                scrollAnimationRef.current = requestAnimationFrame(animateScroll);
            } else {
                scrollAnimationRef.current = null;
            }
        };

        scrollAnimationRef.current = requestAnimationFrame(animateScroll);
    }, []);

    // 滚动到底部
    const scrollToBottom = useCallback((smooth = true) => {
        if (!bodyRef.current) return;

        const targetTop = bodyRef.current.scrollHeight;

        if (smooth) {
            smoothScrollTo(targetTop);
        } else {
            bodyRef.current.scrollTop = targetTop;
        }

        isStickingToBottom.current = true;
    }, [smoothScrollTo]);

    // 处理滚动事件
    const handleScroll = useCallback(() => {
        if (!bodyRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = bodyRef.current;

        // 检查是否在底部
        // 检查是否在底部
        const atBottom = scrollHeight - scrollTop - clientHeight < 100;
        // 同步到全局信号 (供 WebSocket 使用)
        isAtBottom.value = atBottom;

        // fix: 加载过程中不要更新吸附状态，防止加载更多历史时意外吸附到底部
        if (!isLoadingRef.current) {
            isStickingToBottom.current = atBottom;
        }

        // 清空未读 (在底部时)
        if (atBottom && timelineIsLive.value) {
            unreadWhileScrolled.value = 0;
            unreadJumpList.value = [];
            // 移除分隔线
            const unreadSep = document.querySelector('.unread-separator');
            if (unreadSep) unreadSep.remove();
            const browseSep = document.querySelector('.browse-separator');
            if (browseSep) browseSep.remove();
        }

        // --- 保存当前浏览位置 ---
        if (listRef.current) {
            // 找到视口顶部和底部的消息
            const topVisibleMsg = getTopVisibleMessageId();
            const bottomVisibleMsg = getBottomVisibleMessageId();
            if (topVisibleMsg && bottomVisibleMsg) {
                saveBrowsePosition(topVisibleMsg, bottomVisibleMsg);
                // 更新已读位置 (只增不减)
                updateLastReadId(bottomVisibleMsg);
            }
        }

        // --- [Telegram-style] 更新滚动按钮模式 ---
        updateScrollButtonMode();

        // --- 浮动 UI 更新 (Date & ScrollButton) ---
        updateFloatingUI(scrollTop, clientHeight);

        // 加载历史 (滚动到顶部时)
        if (scrollTop < 200 && !isLoadingRef.current && !historyFullyLoaded.value) {
            loadHistory();
        }

        // 加载更新消息 (在历史模式中滚动到底部时)
        if (atBottom && !isLoadingRef.current && !timelineIsLive.value) {
            isStickingToBottom.current = false;
            loadNewerHistory();
        }
    }, []);

    // 获取视口顶部可见消息的 ID
    const getTopVisibleMessageId = useCallback((): number | null => {
        if (!bodyRef.current || !listRef.current) return null;
        const scrollTop = bodyRef.current.scrollTop;
        const topThreshold = scrollTop + 60;

        const msgs = Array.from(listRef.current.querySelectorAll('.chat-message[data-db-id]')) as HTMLElement[];
        const topMsg = msgs.find(el => (el.offsetTop + el.offsetHeight) > topThreshold);

        return topMsg?.dataset.dbId ? parseInt(topMsg.dataset.dbId, 10) : null;
    }, []);

    // 获取视口底部可见消息的 ID
    const getBottomVisibleMessageId = useCallback((): number | null => {
        if (!bodyRef.current || !listRef.current) return null;
        const scrollTop = bodyRef.current.scrollTop;
        const clientHeight = bodyRef.current.clientHeight;
        const bottomThreshold = scrollTop + clientHeight - 60;

        const msgs = Array.from(listRef.current.querySelectorAll('.chat-message[data-db-id]')) as HTMLElement[];
        // 从后往前找第一个在视口底部上方的消息
        for (let i = msgs.length - 1; i >= 0; i--) {
            const el = msgs[i];
            if (el.offsetTop < bottomThreshold) {
                return el.dataset.dbId ? parseInt(el.dataset.dbId, 10) : null;
            }
        }
        return null;
    }, []);

    // 更新滚动按钮模式 (Telegram-style: 未读 -> 底部)
    const updateScrollButtonMode = useCallback(() => {
        if (!bodyRef.current) return;

        // 检查是否有未读消息
        if (hasUnreadMessages()) {
            const firstUnreadId = getFirstUnreadId();
            if (firstUnreadId) {
                // 检查第一条未读消息是否在视口下方
                const unreadEl = document.getElementById(`db-${firstUnreadId}`);
                if (unreadEl) {
                    const rect = unreadEl.getBoundingClientRect();
                    const containerRect = bodyRef.current.getBoundingClientRect();
                    // 如果未读消息在视口下方，显示 "跳转到未读"
                    if (rect.top > containerRect.bottom) {
                        scrollButtonMode.value = 'to-unread';
                        return;
                    }
                } else {
                    // 未读消息不在 DOM 中（需要加载更多消息）
                    scrollButtonMode.value = 'to-unread';
                    return;
                }
            }
        }

        // 默认：跳转到底部
        scrollButtonMode.value = 'to-bottom';
    }, []);

    // 浮动 UI 逻辑 helpers
    const updateFloatingUI = (scrollTop: number, clientHeight: number) => {
        if (!bodyRef.current || !listRef.current) return;

        // 1. Scroll Button Visibility
        const nearBottom = bodyRef.current.scrollHeight - scrollTop - clientHeight <= 150;
        // 在实时模式下，不在底部时显示按钮（方便快速回到底部）
        // 在非实时模式下，始终显示按钮（需要回到最新消息）
        showScrollBottomBtn.value = !nearBottom || !timelineIsLive.value;

        // 2. Floating Date Label
        if (typeof hideDateLabelTimer.current === 'number') {
            clearTimeout(hideDateLabelTimer.current);
            hideDateLabelTimer.current = null;
        }

        if (nearBottom) {
            currentDateLabel.value = null;
            return;
        }

        // Find top visible message
        const msgs = Array.from(listRef.current.children) as HTMLElement[];
        const topThreshold = scrollTop + 50;

        const topMsg = msgs.find(el => {
            return el.classList.contains('chat-message') &&
                (el.offsetTop + el.offsetHeight) > topThreshold;
        });

        if (topMsg && topMsg.dataset.timestamp) {
            const ts = parseInt(topMsg.dataset.timestamp, 10);
            const label = formatDate(ts, 'label');
            if (currentDateLabel.peek() !== label) {
                currentDateLabel.value = label;
            }

            // Set timeout to hide
            hideDateLabelTimer.current = window.setTimeout(() => {
                currentDateLabel.value = null;
            }, 1000);
        }
    };

    // 监听手动滚动请求
    useEffect(() => {
        if (manualScrollToBottom.value > 0) {
            scrollToBottom(true); // 平滑滚动
        }
    }, [manualScrollToBottom.value]);

    // 窗口打开时自动滚动到底部
    // 注意：这个 effect 只处理窗口重新打开的情况（已有消息时）
    // 初始加载由 loadInitialMessages 处理
    useEffect(() => {
        if (isChatOpen.value && messageIds.value.length > 0) {
            // 使用双重 RAF 确保窗口已完全可见且布局已更新
            // 第一个 RAF 等待 visibility 变化，第二个 RAF 等待布局计算
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (bodyRef.current) {
                        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
                        isStickingToBottom.current = true;
                    }
                });
            });
        }
    }, [isChatOpen.value]);

    // 监听外部跳转请求 (例如从 NotificationManager 触发)
    useEffect(() => {
        const messageId = pendingJumpToMessage.value;
        if (messageId !== null) {
            // 清空请求
            pendingJumpToMessage.value = null;
            // 执行跳转
            jumpToMessage(messageId);
        }
    }, [pendingJumpToMessage.value]);

    // 加载历史消息
    const loadHistory = async () => {
        if (isLoadingRef.current || historyFullyLoaded.value) return;
        const oldestId = historyOldestId.value;
        if (!oldestId) return;

        isLoadingRef.current = true;
        isLoadingHistory.value = true;

        // 保存当前滚动位置
        if (bodyRef.current) {
            prevScrollHeight.current = bodyRef.current.scrollHeight;
        }

        try {
            const newMessages = await fetchHistoryMessages(oldestId, 50);
            if (newMessages.length === 0) {
                historyFullyLoaded.value = true;
            } else {
                // 更新最旧消息ID (取最小值以防 API 排序不确定)
                const minId = Math.min(...newMessages.map(m => m.id));
                historyOldestId.value = minId;

                // 过滤屏蔽用户
                const filtered = newMessages.filter(m => !blockedUsers.value.has(String(m.uid)));

                // 标记需要恢复滚动
                isRestoringScroll.current = true;
                prependMessages(filtered);

                // 订阅新出现用户的在线状态
                syncPresenceSubscriptions();
            }
        } catch (e) {
            // ignore
        } finally {
            isLoadingRef.current = false;
            isLoadingHistory.value = false;
        }
    };

    // 加载更新消息 (在历史模式中向下加载)
    const loadNewerHistory = async () => {
        if (isLoadingRef.current || timelineIsLive.value) return;
        const newestId = historyNewestId.value;
        if (!newestId) return;

        isLoadingRef.current = true;
        const LIMIT = 50;

        try {
            const newMessages = await fetchNewerMessages(newestId, LIMIT);

            // 过滤已存在的消息
            const existingIds = new Set(messageIds.peek());
            const filteredNewMessages = newMessages.filter(m =>
                !existingIds.has(m.id) && !blockedUsers.value.has(String(m.uid))
            );

            if (filteredNewMessages.length > 0) {
                // 追加新消息
                appendMessages(filteredNewMessages);

                // 更新最新消息ID
                const maxId = Math.max(...filteredNewMessages.map(m => m.id));
                historyNewestId.value = maxId;

                // 如果返回的消息少于限制，说明已追赶到最新
                if (newMessages.length < LIMIT) {
                    timelineIsLive.value = true;
                    unreadWhileScrolled.value = 0;
                    showScrollBottomBtn.value = false;
                    syncPresenceSubscriptions();
                }
            } else {
                // 没有新消息，恢复实时模式
                timelineIsLive.value = true;
                unreadWhileScrolled.value = 0;
                showScrollBottomBtn.value = false;
                syncPresenceSubscriptions();
            }
        } catch (e) {
            // ignore
        } finally {
            // 延迟重置 loading 状态，防止滚动事件立即再次触发加载
            setTimeout(() => {
                isLoadingRef.current = false;
            }, 100);
        }
    };

    // 跳转到指定消息
    const jumpToMessage = async (id: number) => {
        const targetId = String(id);
        const highlightDuration = 800;

        /**
         * 高亮消息并滚动到视图
         */
        const scrollAndHighlight = (el: HTMLElement, hideOverlay = false) => {
            // 解除底部吸附
            isStickingToBottom.current = false;

            if (!bodyRef.current) return;

            // 立即跳转以确保元素可见 (此时可能还在 Overlay 后面)
            el.scrollIntoView({ behavior: 'auto', block: 'center' });

            // 如果需要隐藏 Overlay，放在这里执行，确保先 scroll 后 fade
            if (hideOverlay) {
                // 确保在下一帧执行，防止 scrollIntoView 还没生效
                requestAnimationFrame(() => {
                    isContextLoading.value = false;
                });
            }

            // 应用高亮效果
            if (listRef.current) listRef.current.classList.add('focus-mode');
            el.classList.remove('message-highlight'); // 先移除，确保动画重新触发
            void el.offsetWidth; // 触发重绘
            el.classList.add('message-highlight');

            setTimeout(() => {
                if (listRef.current) listRef.current.classList.remove('focus-mode');
                el.classList.remove('message-highlight');
            }, highlightDuration);
        };

        // 检查消息是否已在 DOM 中
        const existingElement = document.getElementById(`db-${targetId}`);

        if (existingElement) {
            // 消息已存在，直接滚动
            scrollAndHighlight(existingElement);
            return;
        }

        // 消息不在 DOM 中，需要加载上下文
        if (isLoadingRef.current) return;
        isLoadingRef.current = true;
        isLoadingHistory.value = true;
        isContextLoading.value = true;

        try {
            // 获取消息上下文
            const contextResult = await fetchMessageContext(id);

            if (contextResult && contextResult.messages.length > 0) {
                // 过滤屏蔽用户
                const filtered = contextResult.messages.filter(
                    m => !blockedUsers.value.has(String(m.uid))
                );

                // 更新消息列表
                setMessages(filtered);

                // 更新历史状态
                if (filtered.length > 0) {
                    historyOldestId.value = filtered[0].id;
                    historyNewestId.value = filtered[filtered.length - 1].id;
                    historyFullyLoaded.value = !contextResult.has_more_before;
                }

                // 标记为非实时模式 (重要：防止新消息覆盖)
                timelineIsLive.value = false;

                // 等待 DOM 渲染完成后滚动
                // 使用多层延迟确保内容（包括图片占位符等）已经渲染
                requestAnimationFrame(() => {
                    setTimeout(() => {
                        const newElement = document.getElementById(`db-${targetId}`);
                        if (newElement) {
                            scrollAndHighlight(newElement, true); // true = hide overlay after scroll
                        } else {
                            // 尝试滚动到 target_index 对应的位置
                            const msgElements = listRef.current?.querySelectorAll('.chat-message');
                            if (msgElements && contextResult.target_index < msgElements.length) {
                                scrollAndHighlight(msgElements[contextResult.target_index] as HTMLElement);
                            }
                        }
                    }, 300); // 300ms 延迟，与原版脚本一致
                });
            } else {
                // ignore
            }
        } catch (e) {
            isContextLoading.value = false;
        } finally {
            isLoadingRef.current = false;
            isLoadingHistory.value = false;
            // 注意：isContextLoading.value 这里不设置 false，
            // 而是延迟到 scrollAndHighlight 内部（成功时）或 catch 块（失败时）
        }
    };

    // 新消息到达时滚动
    useLayoutEffect(() => {
        if (pendingScrollToBottom.value) {
            // 如果之前就在底部，或者正在执行滚动到底部的动画（防止连发消息打断滚动）
            if (isStickingToBottom.current || scrollAnimationRef.current) {
                // 使用 requestAnimationFrame 确保在 DOM 更新后执行
                requestAnimationFrame(() => {
                    scrollToBottom(true);
                });
            }
            pendingScrollToBottom.value = false;
        }
    }, [pendingScrollToBottom.value, scrollToBottom]);

    // 初始加载消息
    useEffect(() => {
        if (!isChatOpen.value) return;

        const loadInitialMessages = async () => {
            // 使用 initialMessagesLoaded 而不是 messageIds.length 来判断
            // 因为 WebSocket 可能在窗口打开前就接收了新消息，但这些不应该阻止加载初始消息
            if (initialMessagesLoaded.value) {
                syncPresenceSubscriptions();
                return;
            }

            isLoadingHistory.value = true;
            isContextLoading.value = true;
            loadLastReadId();

            try {
                const savedBrowse = loadBrowsePosition();
                let shouldRestorePosition = false;
                let pendingUnreadCount = 0;

                if (savedBrowse && savedBrowse.top && savedBrowse.bottom) {
                    const uid = Number(userInfo.value.id);
                    if (uid) {
                        const unreadResult = await getUnreadCount(savedBrowse.bottom, uid);
                        if (unreadResult) {
                            pendingUnreadCount = unreadResult.count;
                        }
                    }
                    if (pendingUnreadCount > 5) {
                        shouldRestorePosition = true;
                    }
                }

                if (shouldRestorePosition && savedBrowse) {
                    unreadWhileScrolled.value = pendingUnreadCount;
                    showScrollBottomBtn.value = true;

                    const contextResult = await fetchMessageContext(savedBrowse.top, 25, 50);
                    if (contextResult && contextResult.messages.length > 0) {
                        const filtered = contextResult.messages.filter(
                            m => !blockedUsers.value.has(String(m.uid))
                        );

                        setMessages(filtered);
                        if (filtered.length > 0) {
                            historyOldestId.value = filtered[0].id;
                            historyNewestId.value = filtered[filtered.length - 1].id;
                        }
                        historyFullyLoaded.value = !contextResult.has_more_before;
                        timelineIsLive.value = false;
                        isStickingToBottom.current = false;

                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                // 插入上次浏览位置分隔线
                                insertBrowseSeparator(String(savedBrowse.bottom));

                                // 插入未读消息分隔线（在第一条未读消息之前）
                                const readId = lastReadId.value;
                                if (readId) {
                                    const firstUnreadId = filtered.find(m => m.id > readId)?.id;
                                    if (firstUnreadId && firstUnreadId !== savedBrowse.bottom + 1) {
                                        // 只有当未读位置和浏览位置不同时才显示
                                        insertUnreadSeparator(String(firstUnreadId));
                                    }
                                }

                                const browseEl = document.getElementById(`db-${savedBrowse.top}`);
                                if (browseEl && bodyRef.current) {
                                    bodyRef.current.scrollTop = browseEl.offsetTop - 10;
                                } else if (bodyRef.current) {
                                    bodyRef.current.scrollTop = 0;
                                }

                                syncPresenceSubscriptions();
                                isLoadingHistory.value = false;
                                isContextLoading.value = false;
                                initialMessagesLoaded.value = true;
                            });
                        });

                        return;
                    }
                }

                // Fallback: 加载最新消息并滚动到底部
                timelineIsLive.value = true;
                isStickingToBottom.current = true;
                clearBrowsePosition();

                const recentMessages = await fetchRecentMessages(50);
                if (recentMessages.length > 0) {
                    const filtered = recentMessages.filter(m => !blockedUsers.value.has(String(m.uid)));
                    appendMessages(filtered);

                    if (filtered.length > 0) {
                        historyOldestId.value = filtered[0].id;
                        historyNewestId.value = filtered[filtered.length - 1].id;
                    }

                    // 使用双重 RAF 确保 Preact 已完成 DOM 渲染
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            if (bodyRef.current) {
                                bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
                                isStickingToBottom.current = true;
                            }
                            syncPresenceSubscriptions();
                            isLoadingHistory.value = false;
                            isContextLoading.value = false;
                            initialMessagesLoaded.value = true;
                        });
                    });
                } else {
                    isLoadingHistory.value = false;
                    isContextLoading.value = false;
                    initialMessagesLoaded.value = true;
                }
            } catch (e) {
                isLoadingHistory.value = false;
                isContextLoading.value = false;
            }
        };

        loadInitialMessages();
    }, [isChatOpen.value]);

    // 监听引用点击和话题标签点击
    useEffect(() => {
        const listEl = listRef.current;
        if (!listEl) return;

        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // 1. 话题标签点击 - 打开搜索并填入 tag
            if (target.classList.contains('chat-tag')) {
                e.preventDefault();
                e.stopPropagation();
                const tag = target.textContent?.trim();
                if (tag) {
                    toggleSearch(true);
                    searchQuery.value = tag;
                }
                return;
            }

            // 2. 查找最近的引用块
            const quote = target.closest('.chat-quote[data-jump-to-id]');
            if (quote) {
                e.preventDefault();
                e.stopPropagation();
                const id = Number((quote as HTMLElement).dataset.jumpToId);
                if (id) {
                    jumpToMessage(id);
                }
            }
        };

        listEl.addEventListener('click', handleClick);
        return () => listEl.removeEventListener('click', handleClick);
    }, []);

    // 获取要渲染的消息 ID 列表 (应用 DOM 限制)
    const visibleMessageIds = useMemo(() => {
        const allIds = messageIds.value;
        const blocked = blockedUsers.value;

        // 过滤屏蔽用户
        const filteredIds = allIds.filter(id => {
            const msg = messageMap.peek().get(id);
            return msg && !blocked.has(String(msg.uid));
        });

        // 应用 DOM 消息上限 (在底部时保留最新的消息)
        if (filteredIds.length > MAX_DOM_MESSAGES && isStickingToBottom.current) {
            return filteredIds.slice(-MAX_DOM_MESSAGES);
        }

        return filteredIds;
    }, [messageIds.value, blockedUsers.value]);

    // 恢复滚动位置 (消息列表更新后同步执行)
    useLayoutEffect(() => {
        if (isRestoringScroll.current && bodyRef.current) {
            const newScrollHeight = bodyRef.current.scrollHeight;
            const scrollDiff = newScrollHeight - prevScrollHeight.current;

            // 只有当高度确实增加时才调整滚动位置
            if (scrollDiff > 0) {
                bodyRef.current.scrollTop = scrollDiff;
            }
            isRestoringScroll.current = false;
        }
    }, [visibleMessageIds]);

    // ResizeObserver: 监听列表大小变化，确保图片加载后保持底部吸附
    // 与原版 ScrollManager.observer 逻辑一致
    useEffect(() => {
        const listEl = listRef.current;
        if (!listEl) return;

        const observer = new ResizeObserver(() => {
            // 只有在吸附状态下才自动滚动到底部
            if (isStickingToBottom.current && bodyRef.current) {
                bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
            }
        });

        observer.observe(listEl);
        return () => observer.disconnect();
    }, []); return (
        <div
            class={`chat-body ${isLoadingHistory.value ? 'loading' : ''} ${isContextLoading.value ? 'context-loading' : ''}`}
            ref={bodyRef}
            onScroll={handleScroll}
            style={{ paddingBottom: `${inputAreaHeight.value + 20}px` }}
        >
            <div class="chat-list" ref={listRef}>
                {visibleMessageIds.map(msgId => {
                    const msg = messageMap.value.get(msgId);
                    if (!msg) return null;

                    const grouping = getMessageGrouping(msgId);

                    return (
                        <MessageItem
                            key={msgId}
                            message={msg}
                            isSelf={grouping.isSelf}
                            isGrouped={grouping.isGrouped}
                            isGroupedWithNext={grouping.isGroupedWithNext}
                        />
                    );
                })}
            </div>
        </div>
    );
}
