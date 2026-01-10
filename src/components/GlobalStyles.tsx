import { useEffect } from 'preact/hooks';
import cssContent from '@/styles/index.css?inline';
import photoViewCss from 'react-photo-view/dist/react-photo-view.css?inline';

export function GlobalStyles() {
    useEffect(() => {
        const style = document.createElement('style');
        style.setAttribute('data-dollars-styles', '');
        style.textContent = cssContent + '\n' + photoViewCss;
        document.head.appendChild(style);

        return () => {
            style.remove();
        };
    }, []);

    return null;
}

export function SVGFilters() {
    useEffect(() => {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '0');
        svg.setAttribute('height', '0');
        svg.style.cssText = 'position:absolute;left:-9999px;top:-9999px;pointer-events:none;z-index:-1;';
        svg.innerHTML = `
            <defs>
                <symbol id="message-tail-filled" viewBox="0 0 11 20">
                    <g transform="translate(9 -14)" fill="currentColor" fill-rule="evenodd">
                        <path d="M-6 16h6v17c-.193-2.84-.876-5.767-2.05-8.782-.904-2.325-2.446-4.485-4.625-6.48A1 1 0 01-6 16z" transform="matrix(1 0 0 -1 0 49)" id="corner-fill"/>
                    </g>
                </symbol>
            </defs>
        `;
        document.body.appendChild(svg);

        return () => {
            svg.remove();
        };
    }, []);

    return null;
}
