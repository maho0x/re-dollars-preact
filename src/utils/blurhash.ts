export const DollarsBlurHash = (() => {
    const digit = new Uint8Array(128);
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".split('').forEach((c, i) => digit[c.charCodeAt(0)] = i);
    const decode83 = (str: string, s: number, e: number) => { let v = 0; while (s < e) v = v * 83 + digit[str.charCodeAt(s++)]; return v; };
    const sRGB = (v: number) => v > 10.31475 ? Math.pow(v / 269.025 + 0.052132, 2.4) : v / 3294.6;
    const lRGB = (v: number) => ~~(v > 1.227e-5 ? 269.025 * Math.pow(v, 0.416) - 13.025 : v * 3294.6 + 1);

    return {
        decode: (hash: string, w: number, h: number, punch = 1) => {
            const size = decode83(hash, 0, 1), numX = (size % 9) + 1, numY = ~~(size / 9) + 1;
            const maxVal = (decode83(hash, 1, 2) + 1) / 13446 * punch;
            const colors = new Float64Array(numX * numY * 3);
            let val = decode83(hash, 2, 6);
            [0, 1, 2].forEach(i => colors[i] = sRGB((val >> (16 - i * 8)) & 255));

            for (let i = 1; i < numX * numY; i++) {
                val = decode83(hash, 4 + i * 2, 6 + i * 2);
                [0, 1, 2].forEach(j => colors[i * 3 + j] = (i => (i < 0 ? -1 : 1) * i * i)(~~(val / Math.pow(19, 2 - j)) % 19 - 9) * maxVal);
            }

            const pixels = new Uint8ClampedArray(w * h * 4);
            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    let r = 0, g = 0, b = 0;
                    for (let j = 0; j < numY; j++) {
                        for (let i = 0; i < numX; i++) {
                            const basis = Math.cos(Math.PI * x * i / w) * Math.cos(Math.PI * y * j / h);
                            const c = (i + j * numX) * 3;
                            r += colors[c] * basis; g += colors[c + 1] * basis; b += colors[c + 2] * basis;
                        }
                    }
                    const p = 4 * x + y * w * 4;
                    pixels[p] = lRGB(r); pixels[p + 1] = lRGB(g); pixels[p + 2] = lRGB(b); pixels[p + 3] = 255;
                }
            }
            return pixels;
        }
    };
})();
