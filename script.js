const container = document.getElementById('container');
let clickCount = 0;

container.addEventListener('click', (e) => {
    clickCount++;
    const heartCount = clickCount === 1 ? 10 : clickCount * 10; // 第一次10个，之后递增

    for (let i = 0; i < heartCount; i++) {
        createHeart(e.clientX, e.clientY);
    }
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // 随机方向飞出
    const angle = Math.random() * 2 * Math.PI;
    const distance = 100 + Math.random() * 50;
    const xOffset = Math.cos(angle) * distance;
    const yOffset = Math.sin(angle) * distance;
    heart.style.setProperty('--x', `${xOffset}px`);
    heart.style.setProperty('--y', `${yOffset}px`);

    container.appendChild(heart);

    // 动画结束后移除
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// 背景音乐控制
const audio = document.getElementById('background-music');
const toggleButton = document.getElementById('music-toggle');
let isPlaying = false;

toggleButton.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        toggleButton.textContent = '播放音乐';
    } else {
        audio.play();
        toggleButton.textContent = '暂停音乐';
    }
    isPlaying = !isPlaying;
});
