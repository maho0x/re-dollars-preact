import { useRef, useCallback, useEffect, useState } from 'preact/hooks';
import {
    replyingTo,
    editingMessage,
    cancelReplyOrEdit,
    pendingMention,
    setReplyTo,
} from '@/stores/composerState';
import {
    saveDraft,
    loadDraft,
    type ReplyInfo
} from '@/stores/drafts';
import { toggleSmileyPanel, inputAreaHeight } from '@/stores/ui';
import { settings } from '@/stores/user';
import { sendTypingStart, sendTypingStop } from '@/services/websocket/client';
import { DRAFT_SAVE_DELAY, TYPING_STOP_DELAY } from '@/utils/constants';
import { escapeHTML, getAvatarUrl } from '@/utils/format';
import { TypingIndicator } from './TypingIndicator';
import { SmileyPanel } from './SmileyPanel';
import { TextFormatter } from './TextFormatter';
import { MentionCompleter } from './MentionCompleter';
import { MediaPreview } from './MediaPreview';
import { FloatingPortal } from './FloatingPortal';
import { MEDIA_FILE_ACCEPT, useMediaUpload } from '@/hooks/useMediaUpload';
import {
    extractRichInputText,
    getRichInputSelection,
    needsRichInputNormalization,
    renderRichInputHTML,
    setRichInputSelection,
    type RichInputController,
    type RichInputSelection,
    type RichInputValueOptions
} from '@/utils/richInput';
import { useMessageComposerSend } from '@/hooks/useMessageComposerSend';
import { formatVoiceDuration, useVoiceRecorder } from '@/hooks/useVoiceRecorder';
import { iconFile, iconMic, iconPhoto } from '@/utils/icons';

const MAX_INPUT_HEIGHT = 150;
const ATTACH_MENU_WIDTH = 176;

type AttachMenuPosition = {
    left: number;
    bottom: number;
};

export function ChatInput() {
    const editorRef = useRef<HTMLDivElement>(null);
    const textareaProxyRef = useRef<HTMLTextAreaElement>(null);
    const inputControllerRef = useRef<RichInputController | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputValueRef = useRef('');
    const selectionRef = useRef<RichInputSelection>({ start: 0, end: 0 });
    const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isTypingRef = useRef(false);
    const draftSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isComposingRef = useRef(false);
    const compositionEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isCompositionJustEndedRef = useRef(false);
    const attachButtonRef = useRef<HTMLButtonElement>(null);
    const attachMenuRef = useRef<HTMLDivElement>(null);
    const attachCloseTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const dragDepthRef = useRef(0);
    const [isAttachMenuOpen, setIsAttachMenuOpen] = useState(false);
    const [isAttachMenuClosing, setIsAttachMenuClosing] = useState(false);
    const [attachMenuPosition, setAttachMenuPosition] = useState<AttachMenuPosition | null>(null);
    const [isDraggingFiles, setIsDraggingFiles] = useState(false);

    const {
        fileInputRef,
        isUploading,
        previewMedia,
        setPreviewMedia,
        parseMediaFiles,
        handleRemoveMedia,
        handleAttachMediaClick,
        handleAttachFileClick,
        handleFileChange,
        handleFilesUpload,
        handlePaste,
    } = useMediaUpload(inputControllerRef);
    const {
        voiceDraft,
        recordingDuration,
        isRecording,
        startRecording,
        stopRecording,
        cancelVoice,
        clearVoiceDraft,
    } = useVoiceRecorder();
    const { isSending, send } = useMessageComposerSend();

    const updateAttachMenuPosition = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const left = Math.min(
            viewportWidth - ATTACH_MENU_WIDTH - 8,
            Math.max(8, containerRect.right - ATTACH_MENU_WIDTH)
        );

        setAttachMenuPosition({
            left,
            bottom: Math.max(5, viewportHeight - containerRect.top + 5),
        });
    }, []);

    const closeAttachMenu = useCallback(() => {
        if (!isAttachMenuOpen || isAttachMenuClosing) return;

        setIsAttachMenuClosing(true);
        if (attachCloseTimerRef.current) {
            clearTimeout(attachCloseTimerRef.current);
        }
        attachCloseTimerRef.current = setTimeout(() => {
            setIsAttachMenuOpen(false);
            setIsAttachMenuClosing(false);
            attachCloseTimerRef.current = null;
        }, 200);
    }, [isAttachMenuOpen, isAttachMenuClosing]);

    const toggleAttachMenu = useCallback(() => {
        if (isAttachMenuOpen) {
            closeAttachMenu();
            return;
        }

        if (attachCloseTimerRef.current) {
            clearTimeout(attachCloseTimerRef.current);
            attachCloseTimerRef.current = null;
        }
        setIsAttachMenuClosing(false);
        updateAttachMenuPosition();
        setIsAttachMenuOpen(true);
    }, [closeAttachMenu, isAttachMenuOpen, updateAttachMenuPosition]);

    useEffect(() => {
        if (!isAttachMenuOpen) return;

        const handlePointerDown = (event: PointerEvent) => {
            const target = event.target as Node | null;
            if (target && attachButtonRef.current?.contains(target)) return;
            if (target && attachMenuRef.current?.contains(target)) return;
            closeAttachMenu();
        };
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeAttachMenu();
            }
        };
        const handleViewportChange = () => {
            updateAttachMenuPosition();
        };

        document.addEventListener('pointerdown', handlePointerDown);
        document.addEventListener('keydown', handleKeyDown);
        window.addEventListener('resize', handleViewportChange);
        window.addEventListener('scroll', handleViewportChange, true);
        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
            document.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('resize', handleViewportChange);
            window.removeEventListener('scroll', handleViewportChange, true);
        };
    }, [closeAttachMenu, isAttachMenuOpen, updateAttachMenuPosition]);

    const syncProxyTextarea = useCallback((value = inputValueRef.current, selection = selectionRef.current) => {
        const proxy = textareaProxyRef.current;
        if (!proxy) return;

        proxy.value = value;
        proxy.selectionStart = selection.start;
        proxy.selectionEnd = selection.end;
    }, []);

    const updateEditorHeight = useCallback(() => {
        const editor = editorRef.current;
        if (!editor) return;

        editor.style.height = 'auto';
        const nextHeight = Math.max(38, Math.min(editor.scrollHeight, MAX_INPUT_HEIGHT));
        editor.style.height = `${nextHeight}px`;
        editor.classList.toggle('is-overflowing', editor.scrollHeight > MAX_INPUT_HEIGHT);
    }, []);

    const syncRenderedAssetLayout = useCallback(() => {
        const editor = editorRef.current;
        if (!editor) return;

        const images = Array.from(editor.querySelectorAll<HTMLImageElement>('img'));
        if (images.length === 0) {
            requestAnimationFrame(updateEditorHeight);
            return;
        }

        images.forEach((img) => {
            if (img.complete) return;

            const refresh = () => requestAnimationFrame(updateEditorHeight);
            img.addEventListener('load', refresh, { once: true });
            img.addEventListener('error', refresh, { once: true });
        });

        requestAnimationFrame(updateEditorHeight);
    }, [updateEditorHeight]);

    const scheduleDraftSave = useCallback((value: string) => {
        if (editingMessage.value) return;

        if (draftSaveTimerRef.current) {
            clearTimeout(draftSaveTimerRef.current);
        }

        draftSaveTimerRef.current = setTimeout(() => {
            const content = value.trim();
            const reply = replyingTo.value;
            const replyInfo: ReplyInfo | null = reply ? {
                id: reply.id,
                uid: reply.uid,
                user: reply.user,
                avatar: reply.avatar,
                text: reply.text,
                raw: reply.raw
            } : null;
            saveDraft(content, replyInfo);
        }, DRAFT_SAVE_DELAY);
    }, []);

    const processInputState = useCallback((
        value: string,
        knownMeta?: Record<string, { width?: number; height?: number }>,
        options: Pick<RichInputValueOptions, 'silent'> = {}
    ) => {
        parseMediaFiles(value, knownMeta);
        updateEditorHeight();

        if (options.silent) {
            if (typingTimerRef.current) {
                clearTimeout(typingTimerRef.current);
            }
            if (isTypingRef.current) {
                sendTypingStop();
                isTypingRef.current = false;
            }
            if (draftSaveTimerRef.current) {
                clearTimeout(draftSaveTimerRef.current);
            }
        } else {
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
            }, TYPING_STOP_DELAY);
            scheduleDraftSave(value);
        }
    }, [parseMediaFiles, scheduleDraftSave, updateEditorHeight]);

    const renderBmoTokens = useCallback((value: string) => {
        if (!value.includes('(bmo')) return;

        const editor = editorRef.current;
        const bmoji = (window as any).Bmoji;
        if (!editor || typeof bmoji?.renderAll !== 'function') return;

        requestAnimationFrame(() => {
            if (editorRef.current === editor) {
                bmoji.renderAll(editor, { width: 21, height: 21 });
                requestAnimationFrame(updateEditorHeight);
            }
        });
    }, [updateEditorHeight]);

    const renderEditorValue = useCallback((value: string, selection: RichInputSelection, focus = false) => {
        const editor = editorRef.current;
        if (!editor) return;

        editor.innerHTML = renderRichInputHTML(value);

        if (focus) {
            editor.focus();
        }

        if (focus || document.activeElement === editor) {
            setRichInputSelection(editor, selection.start, selection.end);
        }

        syncRenderedAssetLayout();
        renderBmoTokens(value);
    }, [renderBmoTokens, syncRenderedAssetLayout]);

    const applyInputValue = useCallback((value: string, options: RichInputValueOptions = {}) => {
        const selection = options.selection || { start: value.length, end: value.length };
        inputValueRef.current = value;
        selectionRef.current = selection;
        syncProxyTextarea(value, selection);
        renderEditorValue(value, selection, !!options.focus);
        processInputState(value, options.knownMeta, options);
    }, [processInputState, renderEditorValue, syncProxyTextarea]);

    inputControllerRef.current = {
        focus: () => editorRef.current?.focus(),
        getSelection: () => {
            const editor = editorRef.current;
            const selection = editor ? getRichInputSelection(editor) : null;
            if (selection) {
                selectionRef.current = selection;
                syncProxyTextarea(inputValueRef.current, selection);
                return selection;
            }
            return selectionRef.current;
        },
        getValue: () => inputValueRef.current,
        insertText: (text, options = {}) => {
            const currentSelection = inputControllerRef.current?.getSelection() || selectionRef.current;
            inputControllerRef.current?.replaceRange(text, currentSelection.start, currentSelection.end, options);
        },
        replaceRange: (text, start, end, options = {}) => {
            const currentValue = inputValueRef.current;
            const nextValue = currentValue.substring(0, start) + text + currentValue.substring(end);
            const selection = options.selection || {
                start: start + text.length,
                end: start + text.length
            };
            applyInputValue(nextValue, { ...options, selection });
        },
        setSelection: (start, end = start) => {
            const selection = { start, end };
            selectionRef.current = selection;
            syncProxyTextarea(inputValueRef.current, selection);

            const editor = editorRef.current;
            if (editor && document.activeElement === editor) {
                setRichInputSelection(editor, start, end);
            }
        },
        setValue: (value, options = {}) => {
            applyInputValue(value, options);
        }
    };

    const handleEditorInput = useCallback(() => {
        const editor = editorRef.current;
        if (!editor) return;

        const selection = getRichInputSelection(editor) || selectionRef.current;
        const value = extractRichInputText(editor);
        inputValueRef.current = value;
        selectionRef.current = selection;
        syncProxyTextarea(value, selection);

        if (!isComposingRef.current && needsRichInputNormalization(editor, value)) {
            renderEditorValue(value, selection);
        }

        processInputState(value);
    }, [processInputState, renderEditorValue, syncProxyTextarea]);

    const handleCompositionStart = useCallback(() => {
        isComposingRef.current = true;
    }, []);

    const handleCompositionEnd = useCallback(() => {
        isComposingRef.current = false;
        isCompositionJustEndedRef.current = true;
        if (compositionEndTimerRef.current) {
            clearTimeout(compositionEndTimerRef.current);
        }
        compositionEndTimerRef.current = setTimeout(() => {
            isCompositionJustEndedRef.current = false;
            compositionEndTimerRef.current = null;
        }, 50);
        handleEditorInput();
    }, [handleEditorInput]);

    const clearInput = useCallback((focus = false) => {
        inputControllerRef.current?.setValue('', {
            focus,
            silent: true,
            selection: { start: 0, end: 0 }
        });
    }, []);

    // Handle long-press avatar mention
    useEffect(() => {
        const mention = pendingMention.value;
        const controller = inputControllerRef.current;
        if (!mention || !controller) return;

        const { uid, nickname } = mention;
        const mentionText = uid === 'bot' ? `@${nickname}` : `[user=${uid}]${nickname}[/user]`;
        const { start, end } = controller.getSelection();
        const value = controller.getValue();
        const before = value.slice(0, start);
        const needsLeadingSpace = before.length > 0 && !/\s$/.test(before);
        const text = `${needsLeadingSpace ? ' ' : ''}${mentionText} `;

        controller.replaceRange(text, start, end, { focus: true });
        pendingMention.value = null;
    }, [pendingMention.value]);

    // 加载草稿（初始化时）
    useEffect(() => {
        if (editingMessage.value) return;

        const draft = loadDraft();

        if (draft?.content) {
            inputControllerRef.current?.setValue(draft.content, {
                silent: true,
                selection: { start: draft.content.length, end: draft.content.length }
            });
        } else {
            updateEditorHeight();
        }

        if (draft?.replyTo) {
            setReplyTo({
                ...draft.replyTo,
                raw: draft.replyTo.raw || draft.replyTo.text
            });
        }
    }, []);

    // Populate editor when entering edit mode
    useEffect(() => {
        const msg = editingMessage.value;
        if (msg) {
            inputControllerRef.current?.setValue(msg.raw, {
                focus: true,
                knownMeta: msg.image_meta,
                silent: true,
                selection: { start: msg.raw.length, end: msg.raw.length }
            });
            return;
        }

        updateEditorHeight();
    }, [editingMessage.value, updateEditorHeight]);

    useEffect(() => {
        const proxy = textareaProxyRef.current;
        if (!proxy) return;

        const handleProxyInput = () => {
            applyInputValue(proxy.value, {
                selection: {
                    start: proxy.selectionStart,
                    end: proxy.selectionEnd
                }
            });
        };

        proxy.addEventListener('input', handleProxyInput);
        return () => proxy.removeEventListener('input', handleProxyInput);
    }, [applyInputValue]);

    useEffect(() => {
        const syncSelection = () => {
            const editor = editorRef.current;
            if (!editor || document.activeElement !== editor) return;

            const selection = getRichInputSelection(editor);
            if (!selection) return;

            selectionRef.current = selection;
            syncProxyTextarea(inputValueRef.current, selection);
        };

        document.addEventListener('selectionchange', syncSelection);
        return () => document.removeEventListener('selectionchange', syncSelection);
    }, [syncProxyTextarea]);

    useEffect(() => {
        return () => {
            if (typingTimerRef.current) {
                clearTimeout(typingTimerRef.current);
            }
            if (draftSaveTimerRef.current) {
                clearTimeout(draftSaveTimerRef.current);
            }
            if (compositionEndTimerRef.current) {
                clearTimeout(compositionEndTimerRef.current);
            }
            if (attachCloseTimerRef.current) {
                clearTimeout(attachCloseTimerRef.current);
            }
            if (isTypingRef.current) {
                sendTypingStop();
            }
        };
    }, []);

    const getImageMeta = () => previewMedia.reduce<Record<string, { width: number; height: number }>>((meta, media) => {
        if (media.type === 'image' && media.width && media.height) {
            meta[media.url] = {
                width: media.width,
                height: media.height
            };
        }
        return meta;
    }, {});

    const handleSend = () => send({
        content: inputValueRef.current,
        imageMeta: getImageMeta(),
        voiceDraft,
        clearInput,
        clearMediaPreview: () => setPreviewMedia([]),
        clearVoiceDraft,
    });

    const hasDraggedFiles = (event: DragEvent) => {
        const types = Array.from(event.dataTransfer?.types || []);
        return types.includes('Files');
    };

    const handleDragEnter = (event: DragEvent) => {
        if (!hasDraggedFiles(event)) return;
        event.preventDefault();
        dragDepthRef.current += 1;
        setIsDraggingFiles(true);
    };

    const handleDragOver = (event: DragEvent) => {
        if (!hasDraggedFiles(event)) return;
        event.preventDefault();
        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'copy';
        }
        setIsDraggingFiles(true);
    };

    const handleDragLeave = (event: DragEvent) => {
        if (!hasDraggedFiles(event)) return;
        event.preventDefault();
        dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
        if (dragDepthRef.current === 0) {
            setIsDraggingFiles(false);
        }
    };

    const handleDrop = async (event: DragEvent) => {
        if (!hasDraggedFiles(event)) return;
        event.preventDefault();
        dragDepthRef.current = 0;
        setIsDraggingFiles(false);

        const files = Array.from(event.dataTransfer?.files || []);
        if (files.length > 0) {
            await handleFilesUpload(files);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key !== 'Enter') return;

        if (isComposingRef.current || isCompositionJustEndedRef.current || e.keyCode === 229) {
            return;
        }

        const isShortcut = e.ctrlKey || e.metaKey;
        const shouldSend =
            (settings.value.sendShortcut === 'Enter' && !isShortcut) ||
            (settings.value.sendShortcut === 'CtrlEnter' && isShortcut);

        if (shouldSend) {
            e.preventDefault();
            handleSend();
            return;
        }

        e.preventDefault();
        inputControllerRef.current?.insertText('\n', { focus: true });
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
        updateHeight();

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} class="chat-input-container">
            <SmileyPanel
                onSelect={(code) => inputControllerRef.current?.insertText(code, { focus: true })}
                textareaRef={textareaProxyRef}
            />

            <TextFormatter editorRef={editorRef} inputControllerRef={inputControllerRef} />

            <MentionCompleter editorRef={editorRef} inputControllerRef={inputControllerRef} />

            <TypingIndicator />

            <div
                class={`chat-input-area ${isDraggingFiles ? 'drag-over' : ''}`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
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
                                clearInput();
                                cancelReplyOrEdit();
                            }}
                        >
                            ✕
                        </button>
                    </div>
                )}

                <MediaPreview
                    previewMedia={previewMedia}
                    onRemoveMedia={handleRemoveMedia}
                />

                {(isRecording || voiceDraft) && (
                    <div class="voice-preview-container visible">
                        {isRecording ? (
                            <>
                                <div class="voice-recording-dot" aria-hidden="true" />
                                <span class="voice-preview-title">正在录音</span>
                                <span class="voice-preview-duration">{formatVoiceDuration(recordingDuration)}</span>
                                <button type="button" class="voice-preview-action primary" onClick={stopRecording}>
                                    停止
                                </button>
                                <button type="button" class="voice-preview-action" onClick={cancelVoice}>
                                    取消
                                </button>
                            </>
                        ) : voiceDraft && (
                            <>
                                <audio class="voice-preview-audio" controls preload="metadata" src={voiceDraft.url} />
                                <span class="voice-preview-duration">{formatVoiceDuration(voiceDraft.duration)}</span>
                                <button type="button" class="voice-preview-action" onClick={cancelVoice} title="删除语音">
                                    删除
                                </button>
                            </>
                        )}
                    </div>
                )}

                <div class="input-wrapper">
                    <button
                        id="dollars-emoji-btn"
                        class="action-btn"
                        title="表情"
                        onClick={() => toggleSmileyPanel()}
                    />

                    <div class="dollars-input-wrapper">
                        <div
                            ref={editorRef}
                            class="chat-textarea chat-rich-editor"
                            contentEditable
                            role="textbox"
                            aria-multiline="true"
                            data-placeholder="说点什么..."
                            spellcheck={false}
                            onInput={handleEditorInput}
                            onKeyDown={handleKeyDown}
                            onPaste={handlePaste}
                            onCompositionStart={handleCompositionStart}
                            onCompositionEnd={handleCompositionEnd}
                        />
                        <textarea
                            ref={textareaProxyRef}
                            class="chat-textarea-proxy"
                            tabIndex={-1}
                            aria-hidden="true"
                        />
                    </div>

                    <div class="input-actions">
                        <div class="dollars-attach-menu-wrapper">
                            <button
                                ref={attachButtonRef}
                                id="dollars-attach-btn"
                                class={`action-btn ${isAttachMenuOpen && !isAttachMenuClosing ? 'active' : ''}`}
                                title="上传附件"
                                aria-haspopup="menu"
                                aria-expanded={isAttachMenuOpen && !isAttachMenuClosing}
                                onClick={toggleAttachMenu}
                            />
                        </div>
                        {isAttachMenuOpen && attachMenuPosition && (
                            <FloatingPortal>
                                <div
                                    ref={attachMenuRef}
                                    class={`dollars-attach-menu context-menu-items ${isAttachMenuClosing ? 'closing' : ''}`}
                                    role="menu"
                                    style={{
                                        left: `${attachMenuPosition.left}px`,
                                        bottom: `${attachMenuPosition.bottom}px`,
                                    }}
                                >
                                    <button
                                        type="button"
                                        role="menuitem"
                                        onClick={() => {
                                            closeAttachMenu();
                                            handleAttachMediaClick();
                                        }}
                                    >
                                        <span class="context-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: iconPhoto }} />
                                        <span>媒体</span>
                                    </button>
                                    <button
                                        type="button"
                                        role="menuitem"
                                        onClick={() => {
                                            closeAttachMenu();
                                            handleAttachFileClick();
                                        }}
                                    >
                                        <span class="context-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: iconFile }} />
                                        <span>文件</span>
                                    </button>
                                    <button
                                        type="button"
                                        role="menuitem"
                                        disabled={!!editingMessage.value || (!isRecording && (isSending || isUploading))}
                                        onClick={() => {
                                            closeAttachMenu();
                                            if (isRecording) {
                                                stopRecording();
                                            } else {
                                                void startRecording();
                                            }
                                        }}
                                    >
                                        <span class="context-icon" aria-hidden="true" dangerouslySetInnerHTML={{ __html: iconMic }} />
                                        <span>{isRecording ? '停止录音' : (voiceDraft ? '重录语音' : '语音')}</span>
                                    </button>
                                </div>
                            </FloatingPortal>
                        )}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept={MEDIA_FILE_ACCEPT}
                            multiple
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />

                        <button
                            class={`send-btn ${isUploading ? 'uploading' : ''}`}
                            disabled={isSending || isUploading || isRecording}
                            onClick={handleSend}
                            onMouseDown={(e) => e.preventDefault()}
                            title={isUploading || isSending ? '发送中...' : (isRecording ? '请先停止录音' : '发送')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
