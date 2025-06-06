// Задание 1  Скрытие и показ текста//
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

// Задание 2  Изменение стиля элемента//
// Получаем ссылки на элементы с помощью querySelector
const colorText = document.querySelector('#colorText');
const colorButton = document.querySelector('#colorButton');

// Добавляем обработчик события click на кнопку
colorButton.addEventListener('click', function() {
    // Изменяем цвет текста на синий
    colorText.style.color = 'blue';
});

// Задание 3 Динамическое изменение текста //
// Получаем ссылки на элементы с помощью querySelector
const changeText = document.querySelector('#changeText');
const changeButton = document.querySelector('#changeButton');

// Добавляем обработчик события click на кнопку
changeButton.addEventListener('click', function() {
    // Изменяем текст заголовка на "Привет, мир!"
    changeText.textContent = 'Привет, мир!';
});

// Задание 4 Поиск и изменение элементов по классу //
// Получаем ссылки на элементы с помощью querySelectorAll
const descriptions = document.querySelectorAll('.description');
const changeAllButton = document.querySelector('#changeAllButton');

// Добавляем обработчик события click на кнопку
changeAllButton.addEventListener('click', function() {
    // Перебираем все найденные элементы и меняем их текст
    descriptions.forEach(function(element) {
        element.textContent = 'Измененный текст';
    });
});


