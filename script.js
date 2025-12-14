// Smooth scrolling для навігаційних посилань
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Анімація при завантаженні
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Обробка клавіші Escape для закриття меню
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        console.log('Escape pressed');
    }
});
