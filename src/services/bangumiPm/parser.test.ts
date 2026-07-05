// @vitest-environment jsdom

import { describe, expect, it } from 'vitest';
import {
    BangumiPmParseError,
    parsePmComposeForm,
    parsePmConversation,
    parsePmInbox,
} from './parser';

const origin = 'https://bgm.tv';

describe('Bangumi PM HTML parser', () => {
    it('parses inbox conversations without retaining the source domain', () => {
        const result = parsePmInbox(`
            <div id="contentPM"><div class="pm-conversation-scroll">
                <a href="https://bangumi.tv/pm/conversation/63455.chii?page=1" class="pm-conversation-item">
                    <span class="avatarNeue" style="background-image:url('//lain.bgm.tv/avatar.jpg')"></span>
                    <span class="pm-conversation-name">綿飴</span>
                    <small class="pm-conversation-date">2026-7-5</small>
                    <span class="pm-conversation-desc">hello</span>
                    <em class="pm-conversation-unread">2</em>
                </a>
            </div></div>
        `, origin);

        expect(result.conversations).toEqual([expect.objectContaining({
            id: '63455',
            href: '/pm/conversation/63455.chii?page=1',
            nickname: '綿飴',
            lastMessage: 'hello',
            unreadCount: 2,
        })]);
        expect(result.conversations[0].avatar).toBe('https://lain.bgm.tv/avatar.jpg');
        expect(result.nextPageUrl).toBeNull();
    });

    it('parses messages and sanitizes rich message bodies', () => {
        const detail = parsePmConversation(`
            <div id="contentPM">
                <div class="pm-chat-header">
                    <span class="avatarNeue" style="background-image:url('/avatar.jpg')"></span>
                    <div class="pm-chat-title"><strong><a href="/user/peer">Peer</a></strong></div>
                </div>
                <div class="pm-message-list">
                    <div class="pm-thread-label">Topic</div>
                    <div id="msg_10" class="pm-message pm-message-peer">
                        <a href="/user/peer"><span class="avatarNeue" style="background-image:url('/peer.jpg')"></span></a>
                        <div class="pm-message-body">
                            hello <a href="/group/topic/1" onclick="bad()">link</a>
                            <span style="font-weight:bold;">bold</span>
                            <div class="codeHighlight"><pre>const a = 1;</pre></div>
                            <img class="smile" src="/img/smile.gif" alt="(bgm34)" onerror="bad()">
                            <img class="smile" src="https://lain.bgm.tv/img/smiles/musume/musume_06.gif" alt="(musume_06)">
                            <img class="smile" src="https://lain.bgm.tv/img/smiles/blake/blake_01.gif" alt="(blake_01)">
                            <img src="/image.jpg">
                            <span class="text_mask" style="background-color:#555;color:#555;"><span class="inner">spoiler</span></span>
                            <script>alert(1)</script><a href="javascript:alert(1)">bad</a>
                        </div>
                        <div class="pm-message-info"><small>2026-7-5 02:04 / del</small></div>
                    </div>
                </div>
                <form id="pmReplyForm" action="/pm/create.chii">
                    <input name="formhash" value="redacted">
                    <input name="msg_receivers" value="peer">
                    <input name="related" value="10">
                    <textarea name="msg_body"></textarea>
                </form>
            </div>
        `, `${origin}/pm/conversation/9.chii?page=1`);

        expect(detail).toEqual(expect.objectContaining({
            id: '9',
            nickname: 'Peer',
            username: 'peer',
        }));
        expect(detail.messages[0]).toEqual(expect.objectContaining({
            id: '10',
            isSelf: false,
            topic: 'Topic',
            presentationText: expect.stringContaining('[img]https://bgm.tv/image.jpg[/img]'),
            timestamp: expect.any(Number),
            timestampText: '2026-7-5 02:04',
        }));
        expect(new Date(detail.messages[0].timestamp! * 1000).getHours()).toBe(2);
        expect(new Date(detail.messages[0].timestamp! * 1000).getMinutes()).toBe(4);
        // 与 Dollars 主聊天一致：站内链接规范化为相对路径
        expect(detail.messages[0].bodyHtml).toContain('href="/group/topic/1"');
        expect(detail.messages[0].bodyHtml).toContain('rel="noopener noreferrer"');
        // 加粗与代码块走 Dollars 渲染
        expect(detail.messages[0].bodyHtml).toContain('<strong>bold</strong>');
        expect(detail.messages[0].bodyHtml).toContain('<div class="codeHighlight"><pre>const a = 1;</pre></div>');
        // 遮罩还原为 Dollars 的 spoiler 结构
        expect(detail.messages[0].bodyHtml).toContain('<span class="text_mask"><span class="inner">spoiler</span></span>');
        expect(detail.messages[0].bodyHtml).toContain('class="smiley smiley-musume"');
        expect(detail.messages[0].bodyHtml).toContain('class="smiley smiley-blake"');
        expect(detail.messages[0].bodyHtml).toContain('class="image-container"');
        expect(detail.messages[0].bodyHtml).toContain('class="full-image"');
        expect(detail.messages[0].bodyHtml).not.toContain('onclick');
        expect(detail.messages[0].bodyHtml).not.toContain('onerror');
        expect(detail.messages[0].bodyHtml).not.toContain('<script');
        expect(detail.messages[0].bodyHtml).not.toContain('alert(1)');
        expect(detail.messages[0].bodyHtml).not.toContain('javascript:');
        expect(detail.replyForm?.fields).toEqual(expect.objectContaining({
            formhash: 'redacted',
            msg_receivers: 'peer',
            related: '10',
        }));
    });

    it('renders safe media BBCode when Bangumi leaves it as text', () => {
        const detail = parsePmConversation(`
            <div id="contentPM">
                <div class="pm-chat-title"><strong><a href="/user/peer">Peer</a></strong></div>
                <div class="pm-message-list">
                    <div id="msg_12" class="pm-message pm-message-peer">
                        <a href="/user/peer"></a>
                        <div class="pm-message-body">[img]https://example.com/image.jpg[/img]
                            [audio]https://example.com/audio.mp3[/audio]
                            [video]https://example.com/video.mp4[/video]
                            [sticker]https://example.com/sticker.webp[/sticker]
                            [emoji]https://example.com/emoji.webp[/emoji]
                            (musume_01) (blake_01) (bgm38) (bmoCAIAWgEuAKIBf)
                            [file=notes.txt]https://example.com/notes.txt[/file]
                            [sticker]javascript:alert(1)[/sticker]
                            [img]javascript:alert(1)[/img]
                        </div>
                    </div>
                </div>
            </div>
        `, `${origin}/pm/conversation/9.chii`);

        const html = detail.messages[0].bodyHtml;
        expect(html).toContain('data-full-src="https://example.com/image.jpg"');
        expect(html).toContain('class="audio-player-container"');
        expect(html).toContain('<source src="https://example.com/audio.mp3">');
        expect(html).toContain('class="video-player-container"');
        expect(html).toContain('<source src="https://example.com/video.mp4" type="video/mp4">');
        expect(html).toContain('src="https://example.com/sticker.webp" class="custom-emoji"');
        expect(html).toContain('src="https://example.com/emoji.webp" class="custom-emoji"');
        expect(html).toContain('class="smiley smiley-musume"');
        expect(html).toContain('class="smiley smiley-blake"');
        expect(html).toContain('class="smiley" alt="(bgm38)" width="21" height="21"');
        expect(html).toContain('class="bmo" data-code="(bmoCAIAWgEuAKIBf)"');
        expect(html).toContain('class="chat-file-link"');
        expect(html).toContain('download="notes.txt"');
        expect(html).toContain('[sticker]javascript:alert(1)[/sticker]');
        expect(html).toContain('[img]javascript:alert(1)[/img]');
        expect(html).not.toContain('src="javascript:');
    });

    it('treats pager links as conversation-list pagination', () => {
        const page = parsePmInbox(`
            <div id="contentPM">
                <div class="pm-conversation-scroll">
                    <a href="/pm/conversation/9.chii?page=1" class="pm-conversation-item">
                        <span class="pm-conversation-name">Peer</span>
                    </a>
                </div>
                <div id="pm_pager"><a href="/pm/conversation/9.chii?page=2">2</a></div>
            </div>
        `, `${origin}/pm/conversation/9.chii?page=1`);
        expect(page.conversations).toHaveLength(1);
        expect(page.nextPageUrl).toBe('/pm/conversation/9.chii?page=2');
    });

    it('extracts reply fields through the revised editor wrapper', () => {
        const detail = parsePmConversation(`
            <div id="contentPM">
                <div class="pm-chat-title"><strong><a href="/user/1251873">Peer</a></strong></div>
                <div class="pm-message-list"><div id="msg_10" class="pm-message pm-message-peer">
                    <a href="/user/1251873"></a><div class="pm-message-body">hello<br>world</div>
                </div></div>
                <form id="pmReplyForm" action="/pm/create.chii">
                    <input name="formhash" value="redacted">
                    <input name="msg_receivers" value="1251873">
                    <div class="markItUp"><div class="markItUpContainer">
                        <textarea name="msg_body" class="markItUpEditor hasEditor"></textarea>
                    </div></div>
                </form>
            </div>
        `, `${origin}/pm/conversation/9.chii?page=1`);
        expect(detail.username).toBe('1251873');
        expect(detail.replyForm?.fields).toEqual(expect.objectContaining({
            formhash: 'redacted',
            msg_receivers: '1251873',
            msg_body: '',
        }));
    });

    it('parses a compose form and rejects a login page', () => {
        const compose = parsePmComposeForm(`
            <form id="pmForm" action="/pm/create.chii">
                <input name="formhash" value="redacted">
                <input name="msg_receivers" value="peer">
                <input name="msg_title" value="">
                <textarea name="msg_body"></textarea>
            </form>
        `, `${origin}/pm/compose.chii`);
        expect(compose.receiver).toBe('peer');
        expect(compose.form.action).toBe('/pm/create.chii');

        expect(() => parsePmInbox('<form id="loginForm"></form>', origin))
            .toThrow(BangumiPmParseError);
    });
});
