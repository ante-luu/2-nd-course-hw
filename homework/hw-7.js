// Задания на работу с кодом

// Задание 1
const str1 = 'js';
const upperStr1 = str1.toUpperCase();
console.log(upperStr1);

// - Строка 'js' преобразована в верхний регистр с помощью метода toUpperCase() и выведена. 

// Задание 2
function filterStrings(arr, startStr) {
  const lowerStartStr = startStr.toLowerCase();
  return arr.filter(item => item.toLowerCase().startsWith(lowerStartStr));
}

// Пример использования
// const stringArray = ['Яблоко', 'Банан', 'Апельсин', 'Груша', 'Абрикос'];
// const searchString = 'А';
// const filteredArray = filterStrings(stringArray, searchString);
// console.log(filteredArray); // Ожидается ['Яблоко', 'Апельсин', 'Абрикос']


// - Функция принимает массив строк и строку, возвращает новый массив с элементами, начинающимися с заданной строки, регистр не влияет.
//  toLowerCase() и startsWith() для сравнения начала строк. 

// Задание 3
const number3 = 32.58884;

const floorNumber = Math.floor(number3);
const ceilNumber = Math.ceil(number3);
const roundNumber = Math.round(number3);

console.log('До меньшего целого:', floorNumber);
console.log('До большего целого:', ceilNumber);
console.log('До ближайшего целого:', roundNumber);


// - Число округлено до меньшего целого, большего целого и ближайшего целого с использованием Math.floor(), Math.ceil() и Math.round(), результаты выведены в консоль.
// Math.floor(), Math.ceil() и Math.round() для округления значений. 

// Задание 4
const numbers4 = [52, 53, 49, 77, 21, 32];

const minNumber = Math.min(...numbers4);
const maxNumber = Math.max(...numbers4);

console.log('Минимальное значение:', minNumber);
console.log('Максимальное значение:', maxNumber);


// - Минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 найдены с использованием Math.min() и Math.max(), результаты выведены в консоль.
//  Math.min() и Math.max() для нахождения минимального и максимального значений. 

// Задание 5
function getRandom1to10() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}


// getRandom1to10();

// Критерии оценки:
// - Функция выводит случайное число от 1 до 10 с использованием Math.random() и Math.floor().
// Math.random() и Math.floor() для генерации случайных чисел. 

// Задание 6
function getRandomArray(n) {
  const arrayLength = Math.floor(n / 2);
  const randomArray = [];

  for (let i = 0; i < arrayLength; i++) {
    const randomNumber = Math.floor(Math.random() * (n + 1)); // От 0 до n включительно
    randomArray.push(randomNumber);
  }

  return randomArray;
}

// Пример использования
// const testArray6 = getRandomArray(20); // Например, для n=20, длина массива будет 10
// console.log(testArray6);

//
// - Функция принимает целое число и возвращает массив случайных чисел от 0 до этого числа, длина массива — половина от переданного числа.
// функция Math.random() возвращает случайное число от 0 (включительно) до 1 (не включая).

// Задание 7
function getRandomNumberInRange(min, max) {
  min = Math.ceil(min); // Убедимся, что min целое
  max = Math.floor(max); // Убедимся, что max целое
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Пример использования
// const minRange = 5;
// const maxRange = 15;
// const randomNumber7 = getRandomNumberInRange(minRange, maxRange);
// console.log(`Случайное число между ${minRange} и ${maxRange}: ${randomNumber7}`);


// - Функция принимает два целых числа и возвращает случайное число в этом диапазоне с использованием Math.random(), Math.floor() или Math.ceil().

// Задание 8
const currentDate8 = new Date();
console.log(currentDate8);


// - Текущая дата выведена в консоль с использованием объекта Date.

// Задание 9
const currentDate9 = new Date();

// Добавляем 73 дня
currentDate9.setDate(currentDate9.getDate() + 73);

console.log(currentDate9);


// - Переменная currentDate создана, дата через 73 дня вычислена и выведена с использованием методов getDate() и setDate().

// Задание 10
function formatFullDate(date) {
  const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = daysOfWeek[date.getDay()];

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `Дата: ${day} ${month} ${year} — это ${dayOfWeek}. Время: ${hours}:${minutes}:${seconds}`;
}

// Пример использования
// const date10 = new Date(); // Текущая дата
// const formattedDate = formatFullDate(date10);
// console.log(formattedDate);

// Пример с другой датой
// const specificDate = new Date(2023, 10, 20, 14, 30, 0); // 20 ноября 2023 года, 14:30:00
// const formattedSpecificDate = formatFullDate(specificDate);
// console.log(formattedSpecificDate);

// Критерии оценки:
// - Функция принимает дату и возвращает её в заданном формате: "Дата: [число] [месяц на русском] [год] — это [день недели на русском]. Время: [часы]:[минуты]:[секунды]".
// Дату и время  из объекта Date.