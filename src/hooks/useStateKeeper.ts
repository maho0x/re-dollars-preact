/**
 * Insert browse position separator after a message (上次浏览位置)
 * @param messageId - The message ID to insert separator after
 */
export function insertBrowseSeparator(messageId: string | null) {
    // Remove existing separator
    const existing = document.querySelector('.browse-separator');
    if (existing) existing.remove();

    if (!messageId) return;

    const targetMsg = document.getElementById(`db-${messageId}`);
    if (!targetMsg) return;

    const separator = document.createElement('div');
    separator.className = 'browse-separator';
    separator.innerHTML = '<span>上次浏览</span>';

    // Insert after the target message
    targetMsg.parentNode?.insertBefore(separator, targetMsg.nextSibling);
}

/**
 * Insert unread separator before a message (未读消息)
 * @param messageId - The message ID to insert separator before
 */
export function insertUnreadSeparator(messageId: string | null) {
    // Remove existing separator
    const existing = document.querySelector('.unread-separator');
    if (existing) existing.remove();

    if (!messageId) return;

    const targetMsg = document.getElementById(`db-${messageId}`);
    if (!targetMsg) return;

    const separator = document.createElement('div');
    separator.className = 'unread-separator';
    separator.innerHTML = '<span>未读消息</span>';

    // Insert before the target message
    targetMsg.parentNode?.insertBefore(separator, targetMsg);
}
