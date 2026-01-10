import { useEffect } from 'preact/hooks';
import { isChatOpen, toggleChat } from '@/stores/chat';
import { dockIconFlashing, stopDockFlashing, notificationCount } from './NotificationManager';

export function DockButton() {
    // We need to find the target element.
    // In userscripts, the target might not exist immediately, but since we are running late, it likely does.
    const dockContainer = document.querySelector('#dock ul');
    const notifyLink = document.querySelector('#dock a[href*="/notify/all"]');

    // If we can't find the dock, we can't render.
    if (!dockContainer || !notifyLink) return null;

    // We want to insert *before* the notify link's parent LI.
    // Portals append to the container. To insert specifically before another element is tricky with just Portal.
    // So we might stick to the manual DOM approach but wrapped in a component to handle cleanup.

    useEffect(() => {
        const parentLi = notifyLink.closest('li');
        if (!parentLi) return;

        const li = document.createElement('li');
        li.className = 'chat';

        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.05 20.1l-3.05 -6.1l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.312 9.173" /><path d="M19 16l-2 3h4l-2 3" /></svg>`;

        // We can render the internal link using Preact if we want, but the structure is simple.
        // Let's use the same structure as before for visual consistency.
        li.innerHTML = `<a href="#" id="dock-chat-link" title="打开聊天窗口"><span class="ico ico-sq ico_robot_open" style="background-image: url('data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgString)}');">聊天</span></a>`;

        parentLi.before(li);

        const link = li.querySelector('#dock-chat-link') as HTMLElement;
        
        const handleClick = (e: Event) => {
            e.preventDefault();
            toggleChat(!isChatOpen.value);
            // 打开聊天窗口时停止闪烁
            if (!isChatOpen.value) {
                stopDockFlashing();
            }
        };

        link?.addEventListener('click', handleClick);

        // 监听闪烁状态
        const unsubscribeFlashing = dockIconFlashing.subscribe((flashing) => {
            if (link) {
                if (flashing) {
                    link.classList.add('flashing');
                } else {
                    link.classList.remove('flashing');
                }
            }
        });

        // 监听通知数量，更新角标
        const unsubscribeCount = notificationCount.subscribe((count) => {
            let badge = link?.querySelector('.dock-notif-badge') as HTMLElement;
            if (count > 0) {
                if (!badge) {
                    badge = document.createElement('span');
                    badge.className = 'dock-notif-badge';
                    link?.appendChild(badge);
                }
                badge.textContent = count > 99 ? '99+' : String(count);
                badge.style.display = 'block';
            } else if (badge) {
                badge.style.display = 'none';
            }
        });

        // Cleanup
        return () => {
            link?.removeEventListener('click', handleClick);
            unsubscribeFlashing();
            unsubscribeCount();
            li.remove();
        };
    }, []);

    return null; // This component doesn't render anything into the main VDOM tree
}
