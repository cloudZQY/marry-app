
const fonts = {
    "Aalinlansong": [{
        "name": "Aalinlansong_1",
        "url": "/assets/font/2d724df0e47eba67a383e2a2560d2481-1755511711853-font-1.ttf"
    }, {
        "name": "Aalinlansong_2",
        "url": "/assets/font/a32e44c13a308149d662555eeb8a1d4c-1755511711854-font-2.ttf"
    }],
    "siyuansongtichanggui": [{
        "name": "siyuansongtichanggui_1",
        "url": "/assets/font/b4219bd0f17b293bfe731ad43591b5eb-1755511905766-font-1.ttf"
    }, {
        "name": "siyuansongtichanggui_2",
        "url": "/assets/font/081f778b905e68d81134e9264a483fbc-1755511905768-font-2.ttf"
    }],
    "siyuansongtijixi": [{
        "name": "siyuansongtijixi_2",
        "url": "/assets/font/78dcd5d7e9552d750df8e764bafb8ffc-1755488244676-font-2.ttf"
    }],
    "MAXWELL-Light": [{
        "name": "MAXWELL-Light_2",
        "url": "/assets/font/1e00e604a379bc7939035bcfd302362a-1755488089090-font-2.ttf"
    }],
    "romance": [{
        "name": "romance_2",
        "url": "/assets/font/dec4c9519f5cb5d6a6fe9755c431c8a5-1755488089090-font-2.ttf"
    }],
    "Cinzel-Regular": [{
        "name": "Cinzel-Regular_2",
        "url": "/assets/font/b2cfa2b487f9e5573745c66733b75890-1755488089091-font-2.ttf"
    }]
}

// 字体加载状态
let fontsLoadedPromise = null;

// 加载所有字体并声明CSS样式
function loadFonts() {
    // 如果已经有加载中的Promise，直接返回
    if (fontsLoadedPromise) {
        return fontsLoadedPromise;
    }

    // 创建样式元素
    const styleEl = document.createElement('style');
    let cssRules = '';

    // 创建一个Promise数组来跟踪所有字体的加载
    const fontPromises = [];

    // 遍历所有字体
    Object.keys(fonts).forEach(fontFamily => {
        const fontVariants = fonts[fontFamily];

        // 加载每个字体变体
        fontVariants.forEach(font => {
            // 创建 @font-face 规则
            cssRules += `
@font-face {
    font-family: '${font.name}';
    src: url('${font.url}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
            `;

            // 预加载字体
            const preloadLink = document.createElement('link');
            preloadLink.rel = 'preload';
            preloadLink.href = font.url;
            preloadLink.as = 'font';
            preloadLink.type = 'font/ttf';
            preloadLink.crossOrigin = 'anonymous';
            document.head.appendChild(preloadLink);

            // 创建一个Promise来跟踪这个字体的加载
            const fontPromise = new Promise<void>((resolve, reject) => {
                // 使用FontFace API加载字体
                const fontFace = new FontFace(fontFamily, `url(${font.url})`);

                fontFace.load().then(() => {
                    // 字体加载成功
                    document.fonts.add(fontFace);
                    resolve();
                }).catch(err => {
                    console.error(`字体 ${fontFamily} 加载失败:`, err);
                    // 即使加载失败也resolve，不阻塞整体流程
                    resolve();
                });
            });

            fontPromises.push(fontPromise);
        });
    });

    // 添加样式到文档
    styleEl.textContent = cssRules;
    document.head.appendChild(styleEl);

    // 创建一个总的Promise，当所有字体都加载完成时解析
    fontsLoadedPromise = Promise.all(fontPromises).then(() => {
        console.log('所有字体已加载并声明CSS样式');
        return true;
    });

    return fontsLoadedPromise;
}

export { loadFonts };
