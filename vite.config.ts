/// <reference types="vitest" />
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { resolve } from 'path';

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
    plugins: [preact()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        target: 'esnext',
        minify: false,
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
            },
        },
    },
    server: {
        port: 5173,
    },
});
