import { useRef, useState, useCallback, useEffect } from 'preact/hooks';
import { replyingTo, editingMessage, cancelReplyOrEdit, addOptimisticMessage, removeOptimisticMessage, pendingMention, setReplyTo } from '@/stores/chat';
import { toggleSmileyPanel, inputAreaHeight, showImageViewer } from '@/stores/ui';
import { userInfo, settings } from '@/stores/user';
import { sendMessage as apiSendMessage, editMessage as apiEditMessage, uploadFile, lookupUsersByName } from '@/utils/api';
import { sendTypingStart, sendTypingStop, sendPendingMessage } from '@/hooks/useWebSocket';
import { SVGIcons } from '@/utils/constants';
import { escapeHTML, getAvatarUrl } from '@/utils/format';
import { TypingIndicator } from './TypingIndicator';
import { SmileyPanel } from './SmileyPanel';
import { TextFormatter } from './TextFormatter';
import { MentionCompleter } from './MentionCompleter';
import { saveDraft, loadDraft, clearDraft, cleanupExpiredDrafts, type ReplyInfo } from '@/stores/chat';

export function ChatInput() {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isSending, setIsSending] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [previewMedia, setPreviewMedia] = useState<Array<{ type: 'image' | 'video'; url: string; width?: number; height?: number; placeholder?: string }>>([]);
    const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isTypingRef = useRef(false);
    const attachLongPressRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isAttachLongPressRef = useRef(false);
    const draftSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // 处理附件按钮点击（图片/视频）
    const handleAttachClick = () => {
        if (isAttachLongPressRef.current) {
            isAttachLongPressRef.current = false;
            return;
        }
        if (fileInputRef.current) {
            fileInputRef.current.accept = 'image/*,video/*';
            fileInputRef.current.click();
        }
    };

    // 处理附件按钮长按开始（音频）
    const handleAttachTouchStart = () => {
        isAttachLongPressRef.current = false;
        attachLongPressRef.current = setTimeout(() => {
            isAttachLongPressRef.current = true;
            if (navigator.vibrate) navigator.vibrate(50);
            if (fileInputRef.current) {
                fileInputRef.current.accept = 'audio/*';
                fileInputRef.current.click();
            }
        }, 500);
    };

    // 处理附件按钮长按结束
    const handleAttachTouchEnd = () => {
        if (attachLongPressRef.current) {
            clearTimeout(attachLongPressRef.current);
            attachLongPressRef.current = null;
        }
    };

    // 处理文件选择
    const handleFileChange = async (e: Event) => {
        const input = e.target as HTMLInputElement;
        const file = input.files?.[0];
        if (file) {
            await handleFileUpload(file);
            input.value = ''; // 清空以便重复选择
        }
    };

    // 解析图片和视频
    const parseMediaFiles = (text: string) => {
        const imgRegex = /\[img\](.*?)\[\/img\]/g;
        const videoRegex = /\[video\](.*?)\[\/video\]/g;

        const media: Array<{ type: 'image' | 'video'; url: string; position: number }> = [];

        // 收集所有图片
        let match;
        while ((match = imgRegex.exec(text)) !== null) {
            media.push({ type: 'image', url: match[1], position: match.index });
        }

        // 收集所有视频
        while ((match = videoRegex.exec(text)) !== null) {
            media.push({ type: 'video', url: match[1], position: match.index });
        }

        // 按出现顺序排序
        media.sort((a, b) => a.position - b.position);

        setPreviewMedia(prev => {
            if (prev.length === media.length &&
                prev.every((item, i) => item.type === media[i].type && item.url === media[i].url)) {
                return prev;
            }
            // 保留已有的尺寸信息
            return media.map(({ type, url }) => {
                const existing = prev.find(p => p.url === url);
                return existing ? { ...existing, type, url } : { type, url };
            });
        });
    };

    // 移除媒体文件
    const handleRemoveMedia = (index: number) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const text = textarea.value;
        const media = previewMedia[index];
        if (!media) return;

        const regex = media.type === 'image'
            ? /\[img\](.*?)\[\/img\]/g
            : /\[video\](.*?)\[\/video\]/g;

        let matchIndex = 0;
        let currentMediaIndex = 0;

        // 计算当前媒体在同类型中的索引
        for (let i = 0; i < index; i++) {
            if (previewMedia[i].type === media.type) {
                matchIndex++;
            }
        }

        const newText = text.replace(regex, (match) => {
            if (currentMediaIndex === matchIndex) {
                currentMediaIndex++;
                return '';
            }
            currentMediaIndex++;
            return match;
        });

        textarea.value = newText;
        handleInput();
        textarea.focus();
    };

    // 自动增长
    const handleInput = useCallback(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        // Parse images and videos on input
        parseMediaFiles(textarea.value);

        textarea.style.height = 'auto';
        textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;

        // 输入状态
        if (settings.value.sharePresence && !isTypingRef.current) {
            sendTypingStart();
            isTypingRef.current = true;
        }

        if (typingTimerRef.current) {
            clearTimeout(typingTimerRef.current);
        }
        typingTimerRef.current = setTimeout(() => {
            if (isTypingRef.current) {
                sendTypingStop();
                isTypingRef.current = false;
            }
        }, 2500);

        // 自动保存草稿（防抖 1 秒）
        if (!editingMessage.value) {
            if (draftSaveTimerRef.current) {
                clearTimeout(draftSaveTimerRef.current);
            }
            draftSaveTimerRef.current = setTimeout(() => {
                const content = textarea.value.trim();
                const reply = replyingTo.value;
                const replyInfo: ReplyInfo | null = reply ? {
                    id: reply.id,
                    uid: reply.uid,
                    user: reply.user,
                    avatar: reply.avatar,
                    text: reply.text
                } : null;
                saveDraft(content, replyInfo);
            }, 1000);
        }
    }, []);

    // Handle long-press avatar mention
    useEffect(() => {
        const mention = pendingMention.value;
        if (mention && textareaRef.current) {
            const { uid, nickname } = mention;
            const textarea = textareaRef.current;
            // For bot mention, use plain text format
            const mentionText = uid === 'bot' ? `@${nickname}` : `[user=${uid}]${nickname}[/user]`;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const value = textarea.value;

            // Insert at cursor or append if empty
            // Usually append with a space if not empty
            if (value.length > 0 && !value.endsWith(' ')) {
                textarea.value = value.substring(0, start) + ' ' + mentionText + ' ' + value.substring(end);
                textarea.selectionStart = textarea.selectionEnd = start + mentionText.length + 2;
            } else {
                textarea.value = value.substring(0, start) + mentionText + ' ' + value.substring(end);
                textarea.selectionStart = textarea.selectionEnd = start + mentionText.length + 1;
            }

            textarea.focus();
            handleInput();
            pendingMention.value = null; // Reset
        }
    }, [pendingMention.value]);

    // Transform @username mentions to [user=uid]nickname[/user]
    // Skips content inside [code] blocks
    const transformMentions = async (text: string) => {
        // 提取 [code] 块，用占位符替换
        const codeBlocks: string[] = [];
        let processedText = text.replace(/\[code\]([\s\S]*?)\[\/code\]/gi, (match) => {
            codeBlocks.push(match);
            return `\x00CODE_BLOCK_${codeBlocks.length - 1}\x00`;
        });

        const mentionRegex = /(^|\s)@([\p{L}\p{N}_']{1,30})/gu;
        const matches = [...processedText.matchAll(mentionRegex)];
        if (matches.length === 0) {
            // 恢复 code 块
            codeBlocks.forEach((block, i) => {
                processedText = processedText.replace(`\x00CODE_BLOCK_${i}\x00`, block);
            });
            return processedText;
        }

        const usernamesToLookup = [...new Set(matches.map(match => match[2]))].filter(u => u !== 'Bangumi娘');
        if (usernamesToLookup.length === 0) {
            // 恢复 code 块
            codeBlocks.forEach((block, i) => {
                processedText = processedText.replace(`\x00CODE_BLOCK_${i}\x00`, block);
            });
            return processedText;
        }

        const userDataMap = await lookupUsersByName(usernamesToLookup);
        const replacementMap = new Map();
        for (const username in userDataMap) {
            const data = userDataMap[username];
            if (data?.id && data?.nickname) {
                replacementMap.set(username, `[user=${data.id}]${data.nickname}[/user]`);
            }
        }

        processedText = processedText.replace(mentionRegex, (match, prefix, username) =>
            replacementMap.has(username) ? `${prefix}${replacementMap.get(username)}` : match
        );

        // 恢复 code 块
        codeBlocks.forEach((block, i) => {
            processedText = processedText.replace(`\x00CODE_BLOCK_${i}\x00`, block);
        });

        return processedText;
    };

    // 加载草稿（初始化时）
    useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        // 如果是编辑模式，不加载草稿
        if (editingMessage.value) return;

        const draft = loadDraft();

        if (draft) {
            // 恢复输入内容
            if (draft.content) {
                textarea.value = draft.content;
                // 使用 setTimeout 确保在 DOM 渲染后计算高度，避免高度抖动/计算错误
                setTimeout(() => {
                    handleInput(); // This will trigger parseImages
                }, 0);
            }

            // 恢复回复状态
            if (draft.replyTo) {
                setReplyTo(draft.replyTo);
            }
        }

        // 清理过期草稿
        cleanupExpiredDrafts();
    }, []);

    // Populate textarea when entering edit mode
    useEffect(() => {
        const msg = editingMessage.value;
        if (msg && textareaRef.current) {
            textareaRef.current.value = msg.raw;
            textareaRef.current.focus();
            // Trigger auto-grow
            handleInput();
        }
    }, [editingMessage.value]);

    // 发送消息
    const handleSend = async () => {
        const textarea = textareaRef.current;
        if (!textarea || isSending) return;

        const content = textarea.value.trim();
        if (!content) return;

        setIsSending(true);

        try {
            if (editingMessage.value) {
                // 编辑模式
                let finalContent = content;
                if (editingMessage.value.hiddenQuote) {
                    finalContent = `${editingMessage.value.hiddenQuote}\n${content}`;
                }

                finalContent = await transformMentions(finalContent);

                const result = await apiEditMessage(Number(editingMessage.value.id), finalContent);
                if (!result.status) {
                    alert(result.error || '编辑失败');
                } else {
                    // 编辑成功后清空输入框
                    textarea.value = '';
                    textarea.style.height = 'auto';
                }
                cancelReplyOrEdit();
            } else {
                // 发送新消息 - 使用乐观更新
                let finalContent = content;
                const reply = replyingTo.value;

                if (reply) {
                    finalContent = `[quote=${reply.id}][/quote]${content}`;
                }

                // Transform mentions first to ensure optimistic message matches server message
                const transformedContent = await transformMentions(finalContent);

                // 从预览媒体中获取图片尺寸信息 (使用上传返回的尺寸)
                const imageMeta: Record<string, { width: number; height: number; blurhash?: string }> = {};
                for (const media of previewMedia) {
                    if (media.type === 'image' && media.width && media.height) {
                        imageMeta[media.url] = {
                            width: media.width,
                            height: media.height,
                            blurhash: media.placeholder
                        };
                    }
                }

                // 立即添加乐观消息
                const user = userInfo.value;
                const { tempId, stableKey } = addOptimisticMessage(
                    transformedContent,
                    { id: user.id, nickname: user.nickname, avatar: user.avatar },
                    reply ? Number(reply.id) : undefined,
                    reply ? { uid: Number(reply.uid), nickname: reply.user, avatar: reply.avatar, content: reply.text } : undefined,
                    Object.keys(imageMeta).length > 0 ? imageMeta : undefined
                );

                // 通知后端有待确认消息（用于服务端匹配，替代内容比对）
                sendPendingMessage(stableKey, transformedContent);

                // 清空输入框 (立即响应)
                textarea.value = '';
                textarea.style.height = 'auto';
                setPreviewMedia([]); // Clear all media previews

                // 清除草稿
                clearDraft();

                cancelReplyOrEdit();
                textarea.focus(); // 保持焦点，防止键盘收起

                // 发送 API 请求
                const result = await apiSendMessage(transformedContent);
                if (!result.status) {
                    // 发送失败，移除乐观消息
                    removeOptimisticMessage(tempId);
                    alert(result.error || '发送失败');
                }
                // 成功时不需要做什么，WebSocket 会收到真实消息并替换乐观消息
            }
        } catch (e) {
            alert('发送失败，请重试');
        } finally {
            setIsSending(false);
        }
    };

    // 键盘事件
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key !== 'Enter') return;

        const isShortcut = e.ctrlKey || e.metaKey;

        if (
            (settings.value.sendShortcut === 'Enter' && !isShortcut) ||
            (settings.value.sendShortcut === 'CtrlEnter' && isShortcut)
        ) {
            e.preventDefault();
            handleSend();
        } else if (settings.value.sendShortcut === 'Enter' && isShortcut) {
            e.preventDefault();
            // 插入换行
            const textarea = textareaRef.current;
            if (textarea) {
                const start = textarea.selectionStart;
                const end = textarea.selectionEnd;
                const value = textarea.value;
                textarea.value = value.substring(0, start) + '\n' + value.substring(end);
                textarea.selectionStart = textarea.selectionEnd = start + 1;
                handleInput();
            }
        }
    };

    // 文件上传
    const handlePaste = async (e: ClipboardEvent) => {
        const items = [...(e.clipboardData?.items || [])].filter(
            (it) => it.kind === 'file' && (it.type.startsWith('image/') || it.type.startsWith('video/') || it.type.startsWith('audio/'))
        );

        if (items.length > 0) {
            e.preventDefault();
            for (const item of items) {
                const file = item.getAsFile();
                if (file) {
                    await handleFileUpload(file);
                }
            }
        }
    };

    const handleFileUpload = async (file: File) => {
        setIsUploading(true);

        // Pre-calculate image dimensions client-side (before upload)
        let clientWidth = 0;
        let clientHeight = 0;
        if (file.type.startsWith('image/')) {
            try {
                const img = new Image();
                const objectUrl = URL.createObjectURL(file);
                await new Promise<void>((resolve) => {
                    img.onload = () => {
                        clientWidth = img.naturalWidth;
                        clientHeight = img.naturalHeight;
                        URL.revokeObjectURL(objectUrl);
                        resolve();
                    };
                    img.onerror = () => {
                        URL.revokeObjectURL(objectUrl);
                        resolve();
                    };
                    img.src = objectUrl;
                });
            } catch (e) {
                console.warn('Failed to get image dimensions:', e);
            }
        }

        try {
            const result = await uploadFile(file);
            if (result.status && result.url) {
                const textarea = textareaRef.current;
                if (textarea) {
                    let tag = 'img';
                    if (file.type.startsWith('video/')) {
                        tag = 'video';
                    } else if (file.type.startsWith('audio/')) {
                        tag = 'audio';
                    }
                    const bbcode = `[${tag}]${result.url}[/${tag}]`;
                    const start = textarea.selectionStart;
                    const end = textarea.selectionEnd;
                    const value = textarea.value;
                    textarea.value = value.substring(0, start) + bbcode + value.substring(end);
                    textarea.selectionStart = textarea.selectionEnd = start + bbcode.length;

                    // Use client-side dimensions (more reliable than async backend)
                    if (tag === 'img' && clientWidth && clientHeight) {
                        setPreviewMedia(prev => [...prev, {
                            type: 'image',
                            url: result.url!,
                            width: clientWidth,
                            height: clientHeight,
                            placeholder: result.placeholder
                        }]);
                    }

                    handleInput();
                }
            } else {
                alert(result.error || '上传失败');
            }
        } catch (e) {
            alert('上传失败');
        } finally {
            setIsUploading(false);
        }
    };

    // Report height
    useEffect(() => {
        if (!containerRef.current) return;

        const updateHeight = () => {
            if (containerRef.current) {
                inputAreaHeight.value = containerRef.current.offsetHeight;
            }
        };

        const observer = new ResizeObserver(updateHeight);
        observer.observe(containerRef.current);

        // Initial measurement
        updateHeight();

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} class="chat-input-container">
            {/* 表情面板 - 作为兄弟元素，避免 backdrop-filter 冲突 */}
            <SmileyPanel />

            {/* 文本格式化工具栏 */}
            <TextFormatter textareaRef={textareaRef} />

            {/* @提及自动完成 */}
            <MentionCompleter textareaRef={textareaRef} />

            {/* 正在输入指示器 - Moved out to avoid nested glass effect issues */}
            <TypingIndicator />

            <div class="chat-input-area">
                {/* 正在输入指示器 - REMOVED */}

                {/* 回复/编辑预览 */}
                {(replyingTo.value || editingMessage.value) && (
                    <div id="dollars-reply-preview" class={`reply-preview visible`}>
                        <div class="reply-bar"></div>
                        {replyingTo.value && (
                            <>
                                <img
                                    class="reply-avatar"
                                    src={getAvatarUrl(replyingTo.value.avatar, 's')}
                                    alt=""
                                />
                                <div class="reply-info">
                                    <span class="reply-user">{escapeHTML(replyingTo.value.user)}</span>
                                    <span class="reply-text">{escapeHTML(replyingTo.value.text.substring(0, 50))}</span>
                                </div>
                            </>
                        )}
                        {editingMessage.value && (
                            <div class="reply-info">
                                <span class="reply-user">编辑消息</span>
                                <span class="reply-text">{escapeHTML(editingMessage.value.raw.substring(0, 50))}</span>
                            </div>
                        )}
                        <button
                            class="reply-cancel-btn"
                            onClick={() => {
                                if (textareaRef.current) {
                                    textareaRef.current.value = '';
                                    textareaRef.current.style.height = 'auto';
                                }
                                cancelReplyOrEdit();
                            }}
                        >
                            ✕
                        </button>
                    </div>
                )}

                {/* Media Preview (Images and Videos) */}
                {previewMedia.length > 0 && (
                    <div class="image-preview-container visible">
                        {previewMedia.map((media, index) => (
                            <div key={index} class={`image-preview-item ${media.type === 'video' ? 'video-preview-item' : ''}`}>
                                {media.type === 'image' ? (
                                    <img
                                        src={media.url}
                                        class="preview-image"
                                        onClick={() => {
                                            const imageUrls = previewMedia
                                                .filter(m => m.type === 'image')
                                                .map(m => m.url);
                                            const imageIndex = previewMedia
                                                .slice(0, index)
                                                .filter(m => m.type === 'image')
                                                .length;
                                            showImageViewer(imageUrls, imageIndex);
                                        }}
                                        style={{ cursor: 'zoom-in' }}
                                    />
                                ) : (
                                    <>
                                        <video
                                            src={media.url}
                                            class="preview-video"
                                            muted
                                            preload="metadata"
                                        />
                                        <div class="video-play-overlay">
                                            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </>
                                )}
                                <button
                                    class="preview-remove-btn"
                                    onClick={() => handleRemoveMedia(index)}
                                    title={media.type === 'image' ? '删除图片' : '删除视频'}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* 输入框区域 */}
                <div class="input-wrapper">
                    <button
                        id="dollars-emoji-btn"
                        class="action-btn"
                        title="表情"
                        onClick={() => toggleSmileyPanel()}
                        dangerouslySetInnerHTML={{ __html: SVGIcons.emoji }}
                    />

                    <div class="dollars-input-wrapper">
                        <textarea
                            ref={textareaRef}
                            class="chat-textarea"
                            placeholder="说点什么..."
                            rows={1}
                            onInput={handleInput}
                            onKeyDown={handleKeyDown}
                            onPaste={handlePaste}
                        />
                    </div>

                    <div class="input-actions">
                        <button
                            id="dollars-attach-btn"
                            class="action-btn"
                            title="上传图片/视频（长按上传音频）"
                            onClick={handleAttachClick}
                            onTouchStart={handleAttachTouchStart}
                            onTouchEnd={handleAttachTouchEnd}
                            onTouchCancel={handleAttachTouchEnd}
                            onMouseDown={handleAttachTouchStart}
                            onMouseUp={handleAttachTouchEnd}
                            onMouseLeave={handleAttachTouchEnd}
                            dangerouslySetInnerHTML={{ __html: SVGIcons.upload }}
                        />
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*,video/*"
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />

                        <button
                            class={`send-btn ${isUploading ? 'uploading' : ''}`}
                            disabled={isSending || isUploading}
                            onClick={handleSend}
                            onMouseDown={(e) => e.preventDefault()} // 防止点击时失去焦点
                            title={isUploading ? '上传中...' : '发送'}
                            dangerouslySetInnerHTML={{ __html: SVGIcons.send }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
