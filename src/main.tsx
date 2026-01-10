import { render } from 'preact';
import { App } from './App';
import { settings } from './stores/user';
import { toggleChat, isChatOpen } from './stores/chat';

// 注入首页 Re:Dollars 卡片
function injectHomeCard() {
    if (window.location.pathname !== '/') return;

    const sideInner = document.querySelector('#columnHomeB .sideInner');
    if (!sideInner) return;

    // 检查是否已存在
    if (document.getElementById('dollars-card')) return;

    const cardContainer = document.createElement('div');
    cardContainer.className = 'featuredItems';
    cardContainer.innerHTML = `
        <div id="dollars-card" class="appItem">
            <a href="#"><p class="title">全站聊天窗💫</p><p>Re:Dollars</p></a>
        </div>
    `;

    sideInner.parentNode?.insertBefore(cardContainer, sideInner);

    // 根据设置显示/隐藏
    const card = document.getElementById('dollars-card');
    if (card && !settings.value.showCard) {
        card.style.display = 'none';
    }

    // 点击卡片打开聊天窗口
    card?.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleChat(!isChatOpen.value);
    });
}

// 等待 DOM 加载完成
function init() {
    // 创建挂载点
    const container = document.createElement('div');
    container.id = 'dollars-app-mount';
    document.body.appendChild(container);

    // 渲染应用
    render(<App />, container);

    // 注入首页卡片
    setTimeout(injectHomeCard, 0);
}

// 确保 DOM 已加载
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
