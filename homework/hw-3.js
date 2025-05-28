// Задание 1: Проверка пароля
let password = 'пароль';
let userPassword = prompt('Введите текст пароль');
if (userPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}



// Задание 2: Проверка числа в диапазоне
let c = 2; // Можно изменить на 0, 10, -3, 2 для проверки
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3: Проверка чисел на больше 100
let d = 120;
let e = 50;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4: Преобразование типов
let a = '2';
let b = '3';
alert(Number(a) + Number(b)); // Выведет 5

// Задание 5: Определение сезона по номеру месяца
let monthNumber = 12;
if (monthNumber > 0 && monthNumber <= 12) {
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert('Зима');
            break;
        case 3:
        case 4:
        case 5:
            alert('Весна');
            break;
        case 6:
        case 7:
        case 8:
            alert('Лето');
            break;
        case 9:
        case 10:
        case 11:
            alert('Осень');
            break;
    }
} else {
    alert('Номер месяца должен быть от 1 до 12');
}

// Дополнительное задание 1: Проверка на четность
let number = prompt('Пожалуйста, введите любое число');
if (!isNaN(number)) {
    if (number % 2 === 0) {
        alert('Число четное');
    } else {
        alert('Число нечетное');
    }
} else {
    alert('Введено не число');
}

// Дополнительное задание 2: Определение ОС
let clientOS = 0; // 0 - iOS, 1 - Android
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('Установите версию приложения для Android по ссылке');
}

// Дополнительное задание 3: Определение ОС и года выпуска
let clientDeviceYear = 2015;
if (clientOS === 0) {
    if (clientDeviceYear >= 2015) {
        console.log('Установите версию приложения для iOS по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    }
} else {
    if (clientDeviceYear >= 2015) {
        console.log('Установите версию приложения для Android по ссылке');
    } else {
        console.log('Установите облегченную версию приложения для Android по ссылке');
    }
} 