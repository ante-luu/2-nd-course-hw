
// Задание 1 //
// Получаем ссылки на элементы с помощью querySelector
const heading = document.querySelector('#mainHeading');
const button = document.querySelector('#toggleButton');

// Добавляем обработчик события click на кнопку
button.addEventListener('click', function() {
    // Проверяем текущее состояние видимости заголовка
    if (heading.style.display === 'none') {
        // Если заголовок скрыт, показываем его
        heading.style.display = 'block';
        button.textContent = 'Скрыть';
    } else {
        // Если заголовок виден, скрываем его
        heading.style.display = 'none';
        button.textContent = 'Показать';
    }
});


