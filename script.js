// to-topボタンの表示/非表示
const toTopBtn = document.getElementById('to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // 300px以上スクロールしたら表示
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }
});

// クリックでトップにスクロール
toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
