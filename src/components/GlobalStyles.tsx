// 样式和 SVG 滤镜现在在 main.tsx 中提前注入，避免 FOUC
// 这些组件保留为空，以保持 App.tsx 的结构不变

export function GlobalStyles() {
    // 样式已在 main.tsx 中提前注入
    return null;
}

export function SVGFilters() {
    // SVG 滤镜已在 main.tsx 中提前注入
    return null;
}
