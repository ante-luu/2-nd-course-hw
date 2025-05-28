// Задание 1
function findMin(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Примеры использования 
// console.log(findMin(8, 4)); // Ожидается 4
// console.log(findMin(6, 6)); // Ожидается 6
// console.log(findMin(10, 20)); // Ожидается 10 

// Задание 2
function checkParity(n) {
  if (n % 2 === 0) {
    return 'Число четное';
  } else {
    return 'Число нечетное';
  }
}

// Примеры использования 
// console.log(checkParity(4)); // Ожидается 'Число четное'
// console.log(checkParity(7)); // Ожидается 'Число нечетное'
// console.log(checkParity(0)); // Ожидается 'Число четное' 

// Задание 3

// Функция, выводящая квадрат числа в консоль
function printSquare(n) {
  console.log(n * n);
}

// Функция, возвращающая квадрат числа
function getSquare(n) {
  return n * n;
}

// Примеры использования 
// printSquare(5); // Ожидается вывод 25 в консоль
// console.log(getSquare(7)); // Ожидается вывод 49 в консоль 

// Задание 4
function askAge() {
  const age = prompt('Сколько вам лет?');
  const numericAge = Number(age);

  if (numericAge < 0) {
    console.log('Вы ввели неправильное значение');
  } else if (numericAge >= 0 && numericAge <= 12) {
    console.log('Привет, друг!');
  } else if (numericAge >= 13) {
    console.log('Добро пожаловать!');
  }
}

// Пример использования 
// askAge(); // Запустить в браузере для проверки 

// Задание 5
function multiplyNumbers(a, b) {
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return 'Одно или оба значения не являются числом';
  } else {
    return numA * numB;
  }
}

// Примеры использования 
// console.log(multiplyNumbers(5, 10)); // Ожидается 50
// console.log(multiplyNumbers('abc', 10)); // Ожидается 'Одно или оба значения не являются числом'
// console.log(multiplyNumbers(5, 'def')); // Ожидается 'Одно или оба значения не являются числом'
// console.log(multiplyNumbers('10', '2')); // Ожидается 20 

// Задание 6
function cubeNumber() {
  const input = prompt('Введите число:');
  const number = Number(input);

  if (isNaN(number)) {
    return 'Переданный параметр не является числом';
  } else {
    return `${number} в кубе равняется ${number * number * number}`;
  }
}

// Примеры использования 
// for (let i = 0; i <= 10; i++) {
//   console.log(cubeNumber()); // Запустить в браузере и вводить числа от 0 до 10
// }
// console.log(cubeNumber()); // Запустить в браузере и ввести нечисловое значение

// Задание 7
const circle1 = {
  radius: 10,
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

const circle2 = {
  radius: 5,
  getArea: function() {
    return Math.PI * this.radius * this.radius;
  },
  getPerimeter: function() {
    return 2 * Math.PI * this.radius;
  }
};

// Примеры использования 
// console.log('Площадь circle1:', circle1.getArea());
// console.log('Периметр circle1:', circle1.getPerimeter());
// console.log('Площадь circle2:', circle2.getArea());
// console.log('Периметр circle2:', circle2.getPerimeter());