// Плавная прокрутка для навигации
document.addEventListener('DOMContentLoaded', () => {
    const headerButton = document.querySelector('.header__button');
    if (headerButton) {
        headerButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = headerButton.getAttribute('href');
            
            if (!targetId) {
                console.warn('Кнопка не имеет атрибута href');
                return;
            }

            const targetSection = document.querySelector(targetId);
            
            if (!targetSection) {
                console.warn(`Элемент с id ${targetId} не найден`);
                return;
            }
            
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    } else {
        console.warn('Кнопка .header__button не найдена');
    }
});

// Анимация для бегущей строки
document.addEventListener('DOMContentLoaded', () => {
    const marquee = document.querySelector('.marquee__inner');
    const marqueeMobile = document.querySelector('.marquee__inner--mobile');
    
    // Функция анимации
    function animateMarquee(element) {
        if (!element) return;
        
        let position = 0;
        const speed = 0.3; // Скорость движения

        function animate() {
            position -= speed;
            if (position <= -element.offsetWidth / 2) {
                position = 0;
            }
            element.style.transform = `translateX(${position}px)`;
            requestAnimationFrame(animate);
        }

        animate();
    }

    // Запускаем анимацию для обеих бегущих строк
    animateMarquee(marquee);
    animateMarquee(marqueeMobile);
}); 