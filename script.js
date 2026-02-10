document.addEventListener('DOMContentLoaded', () => {
    const toTopBtn = document.getElementById('to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            toTopBtn.style.display = 'flex';
        } else {
            toTopBtn.style.display = 'none';
        }
    });

    toTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
