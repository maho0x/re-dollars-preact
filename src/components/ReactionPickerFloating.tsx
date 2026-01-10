import { useEffect, useLayoutEffect, useCallback, useRef, useState } from 'preact/hooks';
import {
    isReactionPickerOpen,
    isReactionPickerClosing,
    reactionPickerPosition,
    hideReactionPicker,
    contextMenuTargetId,
    hideContextMenu,
} from '@/stores/ui';
import { toggleReaction as apiToggleReaction } from '@/utils/api';
import { smileyRangesWithoutFavorites, getSmileyUrl, generateSmileyCodes } from '@/utils/smilies';

interface BmoItem {
    code: string;
    name?: string;
}

export function ReactionPickerFloating() {
    const [activeTab, setActiveTab] = useState('TV');
    const [bmoItems, setBmoItems] = useState<BmoItem[]>([]);
    const contentRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // 加载 BMO 表情
    useEffect(() => {
        if (activeTab === 'BMO') {
            try {
                const savedBmo = JSON.parse(localStorage.getItem('chii_saved_bmo') || '[]');
                if (Array.isArray(savedBmo)) {
                    setBmoItems(savedBmo.filter((item: any) => item && item.code));
                }
            } catch (e) {
                setBmoItems([]);
            }
        }
    }, [activeTab]);

    // Bmoji 渲染
    useEffect(() => {
        if (isReactionPickerOpen.value && (window as any).Bmoji && containerRef.current) {
            setTimeout(() => {
                if (containerRef.current) {
                    (window as any).Bmoji.renderAll(containerRef.current, { width: 21, height: 21 });
                }
            }, 0);
        }
    }, [isReactionPickerOpen.value, activeTab, bmoItems]);

    // 点击外部关闭
    useEffect(() => {
        if (!isReactionPickerOpen.value) return;

        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                // 不要关闭 context menu，只关闭 picker
                hideReactionPicker();
            }
        };

        // 延迟添加监听器，避免立即触发
        const timer = setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
        }, 50);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isReactionPickerOpen.value]);

    // 防止溢出屏幕
    useLayoutEffect(() => {
        if (isReactionPickerOpen.value && containerRef.current) {
            const el = containerRef.current;
            const rect = el.getBoundingClientRect();
            let { x, y, width } = reactionPickerPosition.value;
            let hasChanged = false;

            // X 轴修正 (Picker 可能会比 width 宽? 不，width 是 props 传进来的 style width)
            // 但这里我们要防止的是整个 picker 溢出

            if (x + rect.width > window.innerWidth) {
                x = Math.max(10, window.innerWidth - rect.width - 10);
                hasChanged = true;
            }
            if (x < 10) {
                x = 10;
                hasChanged = true;
            }

            // Y 轴修正
            if (y + rect.height > window.innerHeight) {
                y = Math.max(10, window.innerHeight - rect.height - 10);
                hasChanged = true;
            }
            if (y < 10) {
                y = 10;
                hasChanged = true;
            }

            if (hasChanged) {
                el.style.left = `${x}px`;
                el.style.top = `${y}px`;
            }
        }
    }, [isReactionPickerOpen.value, reactionPickerPosition.value, activeTab]); // activeTab change alters height

    const handleReaction = useCallback(async (emoji: string) => {
        const targetId = contextMenuTargetId.value;
        if (!targetId) return;

        hideReactionPicker();
        hideContextMenu();
        await apiToggleReaction(Number(targetId), emoji);
    }, []);

    if (!isReactionPickerOpen.value) {
        return null;
    }

    const { x, y, width } = reactionPickerPosition.value;

    // 生成表情列表
    let smileys: string[] = [];
    let specialContent: any = null;

    if (activeTab === 'BMO') {
        specialContent = (
            <div style={{ display: 'contents' }}>
                {bmoItems.length > 0 ? (
                    bmoItems.map((item) => (
                        <li key={item.code} class="smiley-item">
                            <a
                                href="#"
                                data-smiley={item.code}
                                title={item.name || item.code}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleReaction(item.code);
                                }}
                            >
                                <span class="bmo" data-code={item.code}></span>
                            </a>
                        </li>
                    ))
                ) : (
                    <p style={{ width: '100%', textAlign: 'center', color: 'var(--dollars-text-secondary)', fontSize: '12px', marginTop: '20px', padding: '0 10px' }}>
                        暂无保存的 BMO 表情
                    </p>
                )}
            </div>
        );
    } else {
        smileys = generateSmileyCodes(activeTab);
    }

    return (
        <div
            id="dollars-reaction-picker-floating"
            class={`open ${isReactionPickerClosing.value ? 'closing' : ''}`}
            ref={containerRef}
            style={{ left: `${x}px`, top: `${y}px`, width: `${width}px` }}
        >
            {/* Tabs */}
            <div class="reaction-picker-tabs">
                {smileyRangesWithoutFavorites.map((range) => {
                    let textContent: any = range.name;
                    if (range.name === 'BMO') {
                        textContent = <span class="bmo" data-code="(bmoCgASACIBLgCg)" style={{ verticalAlign: 'middle' }}></span>;
                    } else if (range.path && range.start) {
                        textContent = <img src={range.path(range.start)} alt={range.name} style={{ width: '21px', height: '21px', verticalAlign: 'middle' }} />;
                    }

                    return (
                        <button
                            key={range.name}
                            class={`reaction-picker-tab-btn ${activeTab === range.name ? 'active' : ''}`}
                            data-group={range.name}
                            onClick={() => setActiveTab(range.name)}
                            title={range.name}
                        >
                            {textContent}
                        </button>
                    );
                })}
            </div>

            {/* Content */}
            <div class="reaction-picker-content" ref={contentRef}>
                {specialContent}
                {smileys.map((code) => {
                    const url = getSmileyUrl(code);
                    return (
                        <li key={code} class="smiley-item">
                            <a
                                href="#"
                                data-smiley={code}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleReaction(code);
                                }}
                                style={url ? { backgroundImage: `url('${url}')` } : undefined}
                                title={code}
                            >
                            </a>
                        </li>
                    );
                })}
            </div>
        </div>
    );
}
