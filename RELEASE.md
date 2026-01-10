# How to Release a New Version

发布新版本（Release）的完整流程如下：

## 1. 更新版本号 (Bump Version)

你需要同时修改两个文件中的版本号，确保它们一致：

1.  **`package.json`**: 修改 `"version"` 字段。
    ```json
    "version": "1.0.1",
    ```
2.  **`vite.config.ts`**: 修改 `userscriptBanner` 常量中的 `@version`。
    ```typescript
    const userscriptBanner = `// ==UserScript==
    // ...
    // @version      1.0.1
    // ...
    ```

## 2. 构建 (Build)

运行构建命令，生成新的 `dist/userscript.user.js`：

```bash
npm run build
```

> **注意**：这一步通过 Git 差异你会看到 `dist/userscript.user.js` 发生了变化（版本号变了，代码可能也有变动）。

## 3. 提交与推送 (Commit & Push)

将代码和构建产物一起推送到 GitHub：

```bash
git add .
git commit -m "chore: release v1.0.1"
git push
```

## 4. 用户自动更新

只要你推送了包含新版本号的 `dist/userscript.user.js` 到 `main` 分支：
*   已经安装了脚本的用户，Tampermonkey/Violentmonkey 会定期检查更新（通常是每天）。
*   检查时，如果不一致（GitHub 上的 `@version` 比本地的高），它就会提示用户更新或自动更新。

## 5. (可选) 创建 GitHub Release

如果你想保留版本历史或提供说明：
1.  打开 GitHub 仓库页面 -> Releases -> Create a new release。
2.  Tag version 填写 `v1.0.1`。
3.  填写更新日志 (Changelog)。
4.  发布。
