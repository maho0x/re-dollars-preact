/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { transformSync } from 'esbuild';

const rawCssModuleId = 'virtual:dollars-css';
const resolvedRawCssModuleId = `\0${rawCssModuleId}`;

function escapeTemplateLiteral(value: string) {
    return value.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function rawCssModule(): import('rollup').Plugin {
    return {
        name: 'raw-css-module',
        resolveId(id) {
            if (id === rawCssModuleId) {
                return resolvedRawCssModuleId;
            }
            return null;
        },
        load(id) {
            if (id !== resolvedRawCssModuleId) return null;

            const css = transformSync(readFileSync(resolve(__dirname, 'src/styles/index.css'), 'utf8'), {
                loader: 'css',
                minify: true,
            }).code;
            return `export default \`${escapeTemplateLiteral(css)}\`;`;
        },
    };
}

// 注意：以下 DOM hook 是外部用户脚本（如「用画画回复！」涂鸦脚本）依赖的公开集成点，
// 必须保持稳定、不参与混淆，否则外部脚本会因找不到元素而失效：
//   #dollars-chat-window, #dollars-search-btn, .header-btn, .chat-textarea（后者本就不在列表内）
const internalClassTokens = [
    'dollars-chat-root',
    'dollars-content-panes',
    'dollars-sidebar',
    'dollars-sidebar-search-container',
    'dollars-sidebar-search-input',
    'dollars-conversation-list',
    'dollars-main-chat',
    'dollars-maximize-btn',
    'dollars-emoji-btn',
    'dollars-attach-btn',
    'dollars-back-btn',
    'dollars-scroll-bottom-btn',
    'dollars-scroll-mention-btn',
    'dollars-text-formatter',
    'dollars-input-wrapper',
    'dollars-attach-menu-wrapper',
    'dollars-attach-menu',
    'dollars-preview-card',
    'dollars-tooltip',
    'dollars-tooltip-link',
    'dollars-card',
    'chat-message',
    'message-content',
    'bubble-content',
    'bubble-timestamp',
    'bubble-nickname',
    'text-content',
    'chat-header',
    'close-btn',
    'chat-body',
    'chat-list',
    'conversation-item',
    'dollars-conv-content',
    'dollars-conv-title',
    'dollars-conv-nickname',
    'dollars-conv-timestamp',
    'dollars-conv-last-message',
    'context-menu-items',
    'context-menu-reactions',
    'context-menu-reactions-more',
    'context-icon',
    'context-label',
    'reaction-item',
    'reaction-picker-tab-btn',
    'reaction-picker-content',
    'reaction-avatar',
    'message-media-grid',
    'message-media-block',
    'image-container',
    'image-preview-container',
    'image-placeholder',
    'image-masked',
    'full-image',
    'image-load-hint',
    'reply-preview',
    'reply-bar',
    'reply-avatar',
    'reply-info',
    'reply-user',
    'reply-text',
    'reply-cancel-btn',
    'formatter-btn',
    'formatter-row',
    'formatter-divider',
    'formatter-link-input-wrapper',
    'formatter-link-input',
    'main-buttons',
    'chat-rich-editor',
    'chat-input-container',
    'chat-input-area',
    'chat-input-token',
    'chat-input-token-smiley',
    'chat-input-token-bmo',
    'chat-input-inline-large',
    'chat-input-inline-sticker',
    'chat-input-inline-smiley',
    'send-btn',
    'smiley-item',
    'smiley-tab-btn',
    'smiley-tabs',
    'smiley-grid',
    'smiley-panel',
    'mention-item',
    'mention-avatar',
    'mention-info',
    'gallery-item',
    'gallery-close-btn',
    'search-result-item',
    'search-gallery-btn',
    'uprofile-action-btn',
    'uprofile-info-row',
    'uprofile-media-item',
    'uprofile-media-video-badge',
    'uprofile-banner',
    'favorite-item',
    'action-btn',
    'expand-toggle-btn',
    'voice-preview-container',
    'browse-separator',
    'unread-separator',
];

const internalCssVariables = [
    '--dollars-text-secondary',
    '--dollars-text-placeholder',
    '--dollars-icon-color-secondary',
    '--dollars-glass-border-color',
    '--dollars-glass-highlight',
    '--dollars-glass-border',
    '--dollars-glass-shadow',
    '--dollars-glass-blur',
    '--dollars-glass-bg',
    '--dollars-bg-hover',
    '--dollars-bg-pattern-url',
    '--dollars-bg-pattern',
    '--dollars-color-online',
    '--dollars-color-danger',
    '--dollars-icon-maximize',
    '--dollars-icon-settings',
    '--dollars-icon-restore',
    '--dollars-icon-search',
    '--dollars-icon-attach',
    '--dollars-icon-resize',
    '--dollars-bubble-tail',
    '--dollars-icon-close',
    '--dollars-icon-reply',
    '--dollars-icon-emoji',
    '--dollars-icon-back',
    '--dollars-z-index-overlay',
    '--dollars-z-index-smiley',
    '--dollars-z-index-context',
    '--dollars-z-index-modal',
    '--dollars-z-index-base',
    '--dollars-border',
    '--dollars-shadow',
    '--dollars-text',
    '--dollars-bg',
];

function shortName(index: number) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let n = index;
    let out = 'x';
    do {
        out += chars[n % chars.length];
        n = Math.floor(n / chars.length) - 1;
    } while (n >= 0);
    return out;
}

function escapeRegExp(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function shortenInternalNames(): import('rollup').Plugin {
    const replacements = [
        ...internalClassTokens.map((from, index) => ({
            to: shortName(index),
            pattern: new RegExp(`(?<![A-Za-z0-9_-])${escapeRegExp(from)}(?![A-Za-z0-9_-])`, 'g'),
        })),
        ...internalCssVariables.map((from, index) => ({
            to: `--${shortName(index)}`,
            pattern: new RegExp(escapeRegExp(from), 'g'),
        })),
    ];

    return {
        name: 'shorten-internal-names',
        generateBundle(_, bundle) {
            for (const f of Object.values(bundle)) {
                if (f.type !== 'chunk' || f.fileName !== 'userscript.user.js') continue;
                for (const { pattern, to } of replacements) {
                    f.code = f.code.replace(pattern, to);
                }
            }
        },
    };
}

// 將 Vite 注入的 __vitePreload 替換為最小實現，減少體積（單文件 IIFE 不需要 preload）
function stripVitePreload(userscriptBanner: string): import('rollup').Plugin {
    return {
        name: 'strip-vite-preload',
        generateBundle(_, bundle) {
            for (const f of Object.values(bundle)) {
                if (f.type !== 'chunk' || f.fileName !== 'userscript.user.js') continue;
                const stub = `const __vitePreload = (m)=>m();`;
                const re = /const scriptRel = 'modulepreload';const assetsURL = function\([^)]*\)[^;]*;const seen = \{\};const __vitePreload = function preload\([^)]*\)\s*\{[\s\S]*?return baseModule\(\)\.catch\(handlePreloadError\);\s*\}\);\s*\};/;
                if (re.test(f.code)) {
                    f.code = f.code.replace(re, stub);
                }
            }
        },
        writeBundle(options) {
            const outputDir = options.dir || resolve(__dirname, 'dist');
            const filePath = resolve(outputDir, 'userscript.user.js');
            const code = readFileSync(filePath, 'utf8');
            if (!code.startsWith('// ==UserScript==')) {
                writeFileSync(filePath, `${userscriptBanner}\n${code}`);
            }
        }
    };
}

const userscriptBanner = `// ==UserScript==
// @name         Re:Dollars 全站聊天
// @version      1.0.0
// @author       wataame
// @match        https://bgm.tv/*
// @match        https://bangumi.tv/*
// @match        https://chii.in/*
// @exclude      https://bgm.tv/rakuen/*
// @exclude      https://bangumi.tv/rakuen/*
// @exclude      https://chii.in/rakuen/*
// @grant        none
// ==/UserScript==
`;

export default defineConfig({
    plugins: [rawCssModule(), stripVitePreload(userscriptBanner), shortenInternalNames()],
    esbuild: {
        jsx: 'transform',
        jsxFactory: 'h$jsx',
        jsxFragment: 'Fragment$jsx',
        jsxInject: `import { h as h$jsx, Fragment as Fragment$jsx } from 'preact';`,
        jsxSideEffects: true,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        target: 'esnext',
        minify: false,
        modulePreload: false,
        cssCodeSplit: false,
        reportCompressedSize: false,
        assetsInlineLimit: 100000,
        rollupOptions: {
            input: resolve(__dirname, 'src/main.tsx'),
            output: {
                format: 'iife',
                entryFileNames: 'userscript.user.js',
                banner: userscriptBanner,
                inlineDynamicImports: true,
                compact: true,
            },
        },
    },
    server: {
        port: 5173,
    },
});
