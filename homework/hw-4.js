// Задание 1: Вывод слова "Привет" дважды
for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

// Задание 2: Вывод цифр от 1 до 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3: Вывод чисел от 7 до 22
for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4: Вывод информации о сотрудниках
let obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов`);
}

// Задание 5: Деление числа на 2
let n = 1000;
let num = 0;

while (n >= 50) {
    n = n / 2;
    num++;
}

console.log(`Результат деления: ${n}`);
console.log(`Количество итераций: ${num}`);

// Задание 6: Напоминание о пятницах
let firstFriday = 5; // Первая пятница месяца (число от 1 до 7)

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

// Дополнительное задание 1: Вычитание числа 7
let k = 100;
let iterations = 0;

while (k >= 0) {
    k -= 7;
    iterations++;
}

console.log(`Результат вычитания: ${k}`);
console.log(`Количество итераций: ${iterations}`);

// Дополнительное задание 2: Месяцы года
let months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

for (let i = 0; i < months.length; i++) {
    console.log(`${i + 1} - ${months[i]}`);
}

// Дополнительное задание 3: Информация о книге
let book = {
    "название": "Война и мир",
    "автор": "Лев Толстой",
    "год издания": 1869,
    "жанр": "Роман"
};

for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}

// Дополнительное задание 4: Поиск минимального числа
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

let minNumber = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
    }
}

console.log('Массив чисел:', numbers);
console.log('Минимальное число:', minNumber); 