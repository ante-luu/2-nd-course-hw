function startGuessNumberGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    const compliments = [
        'Отлично! Ты справляешься великолепно! 😊',
        'Восхитительно! Ты настоящий гений! 🌟',
        'Потрясающе! Ты делаешь это с легкостью! ⭐',
        'Браво! Ты на верном пути! 🎯',
        'Супер! Ты справляешься лучше всех! 🏆',
        'Невероятно! Ты просто молодец! ❤️',
        'Превосходно! Ты справляешься на отлично! 🎉',
        'Замечательно! Ты делаешь это блестяще! ✨',
        'Фантастически! Ты настоящий профи! 🚀',
        'Умница! Ты справляешься просто великолепно! 💫'
    ];

    const motivationalPhrases = [
        'Не сдавайся! Каждая попытка приближает к победе! 💪',
        'Продолжай в том же духе! Ты обязательно угадаешь! 🌟',
        'Ошибка - это не конец, а подсказка к правильному ответу! 🛣️',
        'Верь в себя! Ты способен на большее! 💫',
        'Каждая попытка - это шаг к успеху! 📈',
        'Не бойся ошибаться, бойся не пробовать! 🎯',
        'Ты ближе к победе, чем думаешь! ❤️',
        'Каждая попытка делает тебя сильнее! 💪',
        'Не останавливайся на достигнутом! 🚀',
        'Ты справишься, просто продолжай! ⭐'
    ];
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(32, 32, 39, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
    `;

    const gameContent = document.createElement('div');
    gameContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 24px;
        text-align: center;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        animation: modalAppear 0.3s ease-out;
    `;

    // Добавляем стили для анимации
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalAppear {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    const title = document.createElement('h2');
    title.textContent = 'Угадай число от 1 до 100';
    title.style.cssText = `
        color: #202027;
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 30px;
    `;

    const attemptsDisplay = document.createElement('p');
    attemptsDisplay.style.cssText = `
        color: #202027;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
    `;
    attemptsDisplay.textContent = 'Попыток: 0';

    const input = document.createElement('input');
    input.type = 'number';
    input.min = '1';
    input.max = '100';
    input.placeholder = 'Введите число от 1 до 100';
    input.style.cssText = `
        padding: 16px 24px;
        margin: 20px 0;
        width: 80%;
        border: 2px solid #202027;
        border-radius: 60px;
        font-size: 18px;
        font-family: Montserrat;
        outline: none;
        transition: border-color 0.3s;
    `;

    input.addEventListener('focus', () => {
        input.style.borderColor = '#33d17a';
    });

    input.addEventListener('blur', () => {
        input.style.borderColor = '#202027';
    });

    const message = document.createElement('p');
    message.style.cssText = `
        margin: 20px 0;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 500;
        min-height: 24px;
        line-height: 1.4;
    `;

    const button = document.createElement('button');
    button.textContent = 'Проверить';
    button.style.cssText = `
        background: #202027;
        color: white;
        border: none;
        padding: 16px 32px;
        border-radius: 60px;
        cursor: pointer;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        margin: 10px 0 30px 0;
        transition: all 0.3s;
        min-width: 200px;
    `;

    button.addEventListener('mouseover', () => {
        button.style.background = '#33d17a';
        button.style.color = '#202027';
    });

    button.addEventListener('mouseout', () => {
        button.style.background = '#202027';
        button.style.color = 'white';
    });

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть';
    closeButton.style.cssText = `
        background: #202027;
        color: white;
        border: none;
        padding: 16px 32px;
        border-radius: 60px;
        cursor: pointer;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        transition: all 0.3s;
        min-width: 200px;
    `;

    closeButton.addEventListener('mouseover', () => {
        closeButton.style.background = '#33d17a';
        closeButton.style.color = '#202027';
    });

    closeButton.addEventListener('mouseout', () => {
        closeButton.style.background = '#202027';
        closeButton.style.color = 'white';
    });

    function checkNumber() {
        const guess = parseInt(input.value);
        attempts++;
        attemptsDisplay.textContent = `Попыток: ${attempts}`;

        if (isNaN(guess) || guess < 1 || guess > 100) {
            message.textContent = 'Пожалуйста, введите число от 1 до 100';
            message.style.color = '#202027';
            return;
        }

        if (guess === secretNumber) {
            const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
            message.textContent = `Поздравляем! Вы угадали число ${secretNumber} за ${attempts} попыток! ${randomCompliment}`;
            message.style.color = '#33d17a';
            button.disabled = true;
            input.disabled = true;
            button.style.background = '#33d17a';
            button.style.cursor = 'default';
        } else if (guess < secretNumber) {
            const randomMotivation = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
            message.textContent = `Загаданное число больше! ${randomMotivation}`;
            message.style.color = '#202027';
        } else {
            const randomMotivation = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
            message.textContent = `Загаданное число меньше! ${randomMotivation}`;
            message.style.color = '#202027';
        }
    }

    button.addEventListener('click', checkNumber);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkNumber();
        }
    });

    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    gameContent.appendChild(title);
    gameContent.appendChild(attemptsDisplay);
    gameContent.appendChild(input);
    gameContent.appendChild(message);
    gameContent.appendChild(button);
    gameContent.appendChild(closeButton);
    modal.appendChild(gameContent);
    document.body.appendChild(modal);

    // Фокус на поле ввода при открытии
    input.focus();
}

function startArithmeticGame() {
    let score = 0;
    let totalQuestions = 0;
    
    const compliments = [
        'Отлично! Ты справляешься великолепно! 😊',
        'Восхитительно! Ты настоящий математический гений! 🌟',
        'Потрясающе! Ты делаешь это с легкостью! ⭐',
        'Браво! Ты на верном пути! 🎯',
        'Супер! Ты справляешься лучше всех! 🏆',
        'Невероятно! Ты просто молодец! 🌈',
        'Превосходно! Ты справляешься на отлично! 🎉',
        'Замечательно! Ты делаешь это блестяще! ✨',
        'Фантастически! Ты настоящий профи! 🚀',
        'Умница! Ты справляешься просто великолепно! 💫'
    ];

    const motivationalPhrases = [
        'Не сдавайся! Каждая ошибка - это шаг к успеху! 💪',
        'Продолжай в том же духе! Ты обязательно справишься! 🌟',
        'Ошибка - это не конец, а начало нового пути! 🛣️',
        'Верь в себя! Ты способен на большее! 💫',
        'Каждая задача - это возможность стать лучше! 📈',
        'Не бойся ошибаться, бойся не пробовать! 🎯',
        'Ты ближе к успеху, чем думаешь! ❤️',
        'Каждая попытка делает тебя сильнее! 💪',
        'Не останавливайся на достигнутом! 🚀',
        'Ты справишься, просто продолжай! ⭐'
    ];
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(32, 32, 39, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
    `;

    const gameContent = document.createElement('div');
    gameContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 24px;
        text-align: center;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        animation: modalAppear 0.3s ease-out;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Простая арифметика';
    title.style.cssText = `
        color: #202027;
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 30px;
    `;

    const scoreDisplay = document.createElement('p');
    scoreDisplay.style.cssText = `
        color: #202027;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
    `;
    scoreDisplay.textContent = 'Счёт: 0/0';

    const questionDisplay = document.createElement('p');
    questionDisplay.style.cssText = `
        color: #202027;
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 700;
        margin: 20px 0;
    `;

    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Введите ответ';
    input.style.cssText = `
        padding: 16px 24px;
        margin: 20px 0;
        width: 80%;
        border: 2px solid #202027;
        border-radius: 60px;
        font-size: 18px;
        font-family: Montserrat;
        outline: none;
        transition: border-color 0.3s;
    `;

    input.addEventListener('focus', () => {
        input.style.borderColor = '#33d17a';
    });

    input.addEventListener('blur', () => {
        input.style.borderColor = '#202027';
    });

    const message = document.createElement('p');
    message.style.cssText = `
        margin: 20px 0;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 500;
        min-height: 24px;
        line-height: 1.4;
    `;

    const button = document.createElement('button');
    button.textContent = 'Проверить';
    button.style.cssText = `
        background: #202027;
        color: white;
        border: none;
        padding: 16px 32px;
        border-radius: 60px;
        cursor: pointer;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        margin: 10px 0 30px 0;
        transition: all 0.3s;
        min-width: 200px;
    `;

    button.addEventListener('mouseover', () => {
        button.style.background = '#33d17a';
        button.style.color = '#202027';
    });

    button.addEventListener('mouseout', () => {
        button.style.background = '#202027';
        button.style.color = 'white';
    });

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть';
    closeButton.style.cssText = `
        background: #202027;
        color: white;
        border: none;
        padding: 16px 32px;
        border-radius: 60px;
        cursor: pointer;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        transition: all 0.3s;
        min-width: 200px;
    `;

    closeButton.addEventListener('mouseover', () => {
        closeButton.style.background = '#33d17a';
        closeButton.style.color = '#202027';
    });

    closeButton.addEventListener('mouseout', () => {
        closeButton.style.background = '#202027';
        closeButton.style.color = 'white';
    });

    function generateQuestion() {
        const operations = ['+', '-', '*', '/'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        let num1, num2, answer;

        switch(operation) {
            case '+':
                num1 = Math.floor(Math.random() * 50) + 1;
                num2 = Math.floor(Math.random() * 50) + 1;
                answer = num1 + num2;
                break;
            case '-':
                num1 = Math.floor(Math.random() * 50) + 1;
                num2 = Math.floor(Math.random() * num1) + 1;
                answer = num1 - num2;
                break;
            case '*':
                num1 = Math.floor(Math.random() * 12) + 1;
                num2 = Math.floor(Math.random() * 12) + 1;
                answer = num1 * num2;
                break;
            case '/':
                num2 = Math.floor(Math.random() * 10) + 1;
                answer = Math.floor(Math.random() * 10) + 1;
                num1 = num2 * answer;
                break;
        }

        questionDisplay.textContent = `${num1} ${operation} ${num2} = ?`;
        return answer;
    }

    let currentAnswer = generateQuestion();

    function checkAnswer() {
        const userAnswer = parseFloat(input.value);
        totalQuestions++;

        if (isNaN(userAnswer)) {
            message.textContent = 'Пожалуйста, введите число';
            message.style.color = '#202027';
            return;
        }

        if (userAnswer === currentAnswer) {
            score++;
            const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
            message.textContent = `Правильно! ${randomCompliment}`;
            message.style.color = '#33d17a';
        } else {
            const randomMotivation = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
            message.textContent = `Неправильно! Правильный ответ: ${currentAnswer}. ${randomMotivation}`;
            message.style.color = '#202027';
        }

        scoreDisplay.textContent = `Счёт: ${score}/${totalQuestions}`;
        input.value = '';
        currentAnswer = generateQuestion();
    }

    button.addEventListener('click', checkAnswer);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });

    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    gameContent.appendChild(title);
    gameContent.appendChild(scoreDisplay);
    gameContent.appendChild(questionDisplay);
    gameContent.appendChild(input);
    gameContent.appendChild(message);
    gameContent.appendChild(button);
    gameContent.appendChild(closeButton);
    modal.appendChild(gameContent);
    document.body.appendChild(modal);

    input.focus();
}

function startReverseTextGame() {
    let score = 0;
    let totalQuestions = 0;
    
    const phrases = [
        'Кот',
        'Мороз',
        'Дуб',
        'Сказка',
        'Богатырь',
        'Ветер',
        'Кит',
        'Ложь',
        'Дорога',
        'Лес',
        'Козлик',
        'Тропа',
        'Царство',
        'Горы',
        'Государство',
        'Волшебство',
        'Приключение',
        'Сокровище',
        'Замок',
        'Рыцарь',
        'Дракон',
        'Принцесса',
        'Королевство',
        'Волшебник',
        'Чародей',
        'Тайна',
        'Загадка',
        'Сокровище',
        'Кладезь',
        'Лабиринт',
        'Звездопад',
        'Радуга',
        'Метеорит',
        'Комета',
        'Галактика',
        'Вселенная',
        'Космос',
        'Планета',
        'Созвездие',
        'Млечный путь',
        'Красная шапочка',
        'Белоснежка',
        'Золушка',
        'Русалочка',
        'Алиса',
        'Питер Пэн',
        'Винни Пух',
        'Карлсон',
        'Буратино',
        'Чиполлино'
    ];

    const compliments = [
        'Отлично! Ты справляешься великолепно! 😊',
        'Восхитительно! Ты настоящий мастер слов! 🌟',
        'Потрясающе! Ты делаешь это с легкостью! ⭐',
        'Браво! Ты на верном пути! 🎯',
        'Супер! Ты справляешься лучше всех! 🏆',
        'Невероятно! Ты просто молодец! 🌈',
        'Превосходно! Ты справляешься на отлично! 🎉',
        'Замечательно! Ты делаешь это блестяще! ✨',
        'Фантастически! Ты настоящий профи! 🚀',
        'Умница! Ты справляешься просто великолепно! 💫'
    ];

    const motivationalPhrases = [
        'Не сдавайся! Каждая попытка приближает к победе! 💪',
        'Продолжай в том же духе! Ты обязательно справишься! 🌟',
        'Ошибка - это не конец, а подсказка к правильному ответу! 🛣️',
        'Верь в себя! Ты способен на большее! 💫',
        'Каждая попытка - это шаг к успеху! 📈',
        'Не бойся ошибаться, бойся не пробовать! 🎯',
        'Ты ближе к победе, чем думаешь! 🌈',
        'Каждая попытка делает тебя сильнее! 💪',
        'Не останавливайся на достигнутом! 🚀',
        'Ты справишься, просто продолжай! ⭐'
    ];

    const idioms = [
        'Без труда не вытащишь и рыбку из пруда! 🐟',
        'Терпение и труд всё перетрут! ⚒️',
        'Ученье свет, а неученье тьма! 📚',
        'Повторение - мать учения! 🔄',
        'Глаза боятся, а руки делают! 👀',
        'Тише едешь - дальше будешь! 🐢',
        'Семь раз отмерь, один раз отрежь! ✂️',
        'Не откладывай на завтра то, что можно сделать сегодня! ⏰',
        'Век живи - век учись! 🎓',
        'Тяжело в учении - легко в бою! 🛡️'
    ];
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(32, 32, 39, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
    `;

    const gameContent = document.createElement('div');
    gameContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 24px;
        text-align: center;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        animation: modalAppear 0.3s ease-out;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Переверни текст';
    title.style.cssText = `
        color: #202027;
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 30px;
    `;

    const scoreDisplay = document.createElement('p');
    scoreDisplay.style.cssText = `
        color: #202027;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 600;
        margin-bottom: 20px;
    `;
    scoreDisplay.textContent = 'Счёт: 0/0';

    const questionDisplay = document.createElement('p');
    questionDisplay.style.cssText = `
        color: #202027;
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 700;
        margin: 20px 0;
    `;

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Введите перевернутый текст';
    input.style.cssText = `
        padding: 16px 24px;
        margin: 20px 0;
        width: 80%;
        border: 2px solid #202027;
        border-radius: 60px;
        font-size: 18px;
        font-family: Montserrat;
        outline: none;
        transition: border-color 0.3s;
    `;

    input.addEventListener('focus', () => {
        input.style.borderColor = '#33d17a';
    });

    input.addEventListener('blur', () => {
        input.style.borderColor = '#202027';
    });

    const message = document.createElement('p');
    message.style.cssText = `
        margin: 20px 0;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 500;
        min-height: 24px;
        line-height: 1.4;
    `;

    const button = document.createElement('button');
    button.textContent = 'Проверить';
    button.style.cssText = `
        background: #202027;
        color: white;
        border: none;
        padding: 16px 32px;
        border-radius: 60px;
        cursor: pointer;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        margin: 10px 0 30px 0;
        transition: all 0.3s;
        min-width: 200px;
    `;

    button.addEventListener('mouseover', () => {
        button.style.background = '#33d17a';
        button.style.color = '#202027';
    });

    button.addEventListener('mouseout', () => {
        button.style.background = '#202027';
        button.style.color = 'white';
    });

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть';
    closeButton.style.cssText = `
        background: #202027;
        color: white;
        border: none;
        padding: 16px 32px;
        border-radius: 60px;
        cursor: pointer;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        transition: all 0.3s;
        min-width: 200px;
    `;

    closeButton.addEventListener('mouseover', () => {
        closeButton.style.background = '#33d17a';
        closeButton.style.color = '#202027';
    });

    closeButton.addEventListener('mouseout', () => {
        closeButton.style.background = '#202027';
        closeButton.style.color = 'white';
    });

    function generateQuestion() {
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        questionDisplay.textContent = randomPhrase;
        return randomPhrase.split('').reverse().join('');
    }

    let currentAnswer = generateQuestion();

    function checkAnswer() {
        const userAnswer = input.value.trim().toLowerCase();
        totalQuestions++;

        if (!userAnswer) {
            message.textContent = 'Пожалуйста, введите текст';
            message.style.color = '#202027';
            return;
        }

        if (userAnswer === currentAnswer.toLowerCase()) {
            score++;
            const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
            message.textContent = `Правильно! ${randomCompliment}`;
            message.style.color = '#33d17a';
        } else {
            const randomMotivation = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
            const randomIdiom = idioms[Math.floor(Math.random() * idioms.length)];
            message.textContent = `Неправильно! Правильный ответ: ${currentAnswer}. ${randomMotivation} ${randomIdiom}`;
            message.style.color = '#202027';
        }

        scoreDisplay.textContent = `Счёт: ${score}/${totalQuestions}`;
        input.value = '';
        currentAnswer = generateQuestion();
    }

    button.addEventListener('click', checkAnswer);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });

    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    gameContent.appendChild(title);
    gameContent.appendChild(scoreDisplay);
    gameContent.appendChild(questionDisplay);
    gameContent.appendChild(input);
    gameContent.appendChild(message);
    gameContent.appendChild(button);
    gameContent.appendChild(closeButton);
    modal.appendChild(gameContent);
    document.body.appendChild(modal);

    input.focus();
}

function startQuizGame() {
    let currentQuestion = 0;
    let score = 0;
    let currentCategory = '';
    
    const quizSets = {
        'Современное кино': [
            {
                category: 'Кино',
                question: 'Какой фильм получил премию "Оскар" за лучший фильм в 2020 году?',
                options: ['Джокер', 'Паразиты', '1917'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Кто снял фильм "Начало" (Inception)?',
                options: ['Квентин Тарантино', 'Кристофер Нолан', 'Дэвид Финчер'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'В каком фильме Леонардо Ди Каприо сыграл роль Джордана Белфорта?',
                options: ['Волк с Уолл-стрит', 'Великий Гэтсби', 'Остров проклятых'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'Какой фильм стал первым анимационным фильмом, получившим "Оскар" за лучший фильм?',
                options: ['История игрушек', 'ВАЛЛ-И', 'Король Лев'],
                correct: 1
            }
        ],
        'Советское кино': [
            {
                category: 'Кино',
                question: 'Кто сыграл главную роль в фильме "Москва слезам не верит"?',
                options: ['Вера Алентова', 'Нонна Мордюкова', 'Людмила Гурченко'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'В каком фильме звучит фраза "А может быть ворона"?',
                options: ['Карнавальная ночь', 'Ирония судьбы', 'Служебный роман'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'Кто сыграл роль Шурика в фильме "Операция «Ы»"?',
                options: ['Александр Демьяненко', 'Юрий Никулин', 'Георгий Вицин'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'В каком фильме звучит фраза "Надо, Федя, надо"?',
                options: ['Операция «Ы»', 'Кавказская пленница', 'Джентельмены удачи'],
                correct: 0
            }
        ],
        'Мультфильмы': [
            {
                category: 'Мультфильмы',
                question: 'В каком году вышел первый мультфильм о Чебурашке?',
                options: ['1969', '1971', '1973'],
                correct: 0
            },
            {
                category: 'Мультфильмы',
                question: 'Кто озвучивал Волка в мультфильме "Ну, погоди!"?',
                options: ['Анатолий Папанов', 'Клара Румянова', 'Георгий Вицин'],
                correct: 0
            },
            {
                category: 'Мультфильмы',
                question: 'Кто написал музыку к мультфильму "Бременские музыканты"?',
                options: ['Геннадий Гладков', 'Максим Дунаевский', 'Алексей Рыбников'],
                correct: 0
            },
            {
                category: 'Мультфильмы',
                question: 'В каком году вышел первый мультфильм "Ну, погоди!"?',
                options: ['1969', '1971', '1973'],
                correct: 0
            }
        ],
        'Искусство и литература': [
            {
                category: 'Искусство',
                question: 'Кто написал картину "Крик"?',
                options: ['Винсент Ван Гог', 'Эдвард Мунк', 'Пабло Пикассо'],
                correct: 1
            },
            {
                category: 'Литература',
                question: 'Кто написал роман "Мастер и Маргарита"?',
                options: ['Федор Достоевский', 'Михаил Булгаков', 'Лев Толстой'],
                correct: 1
            },
            {
                category: 'Искусство',
                question: 'В каком музее находится картина "Мона Лиза"?',
                options: ['Лувр', 'Прадо', 'Эрмитаж'],
                correct: 0
            },
            {
                category: 'Литература',
                question: 'Кто написал роман "Преступление и наказание"?',
                options: ['Лев Толстой', 'Федор Достоевский', 'Антон Чехов'],
                correct: 1
            }
        ],
        'Сказки и мифы': [
            {
                category: 'Сказки',
                question: 'Кто написал сказку "Алиса в Стране чудес"?',
                options: ['Льюис Кэрролл', 'Роальд Даль', 'Дж. М. Барри'],
                correct: 0
            },
            {
                category: 'Сказки',
                question: 'В какой сказке главный герой носит красную шапочку?',
                options: ['Красная Шапочка', 'Белоснежка', 'Золушка'],
                correct: 0
            },
            {
                category: 'Сказки',
                question: 'Кто написал сказку "Питер Пэн"?',
                options: ['Дж. М. Барри', 'Роальд Даль', 'Льюис Кэрролл'],
                correct: 0
            },
            {
                category: 'Сказки',
                question: 'В какой сказке главная героиня теряет хрустальную туфельку?',
                options: ['Белоснежка', 'Золушка', 'Спящая красавица'],
                correct: 1
            },
            {
                category: 'Сказки',
                question: 'Кто написал сказку "Маленький принц"?',
                options: ['Антуан де Сент-Экзюпери', 'Ганс Христиан Андерсен', 'Шарль Перро'],
                correct: 0
            },
            {
                category: 'Сказки',
                question: 'В какой сказке главный герой превращается в лебедя?',
                options: ['Гадкий утенок', 'Дикие лебеди', 'Снежная королева'],
                correct: 1
            },
            {
                category: 'Сказки',
                question: 'Кто написал сказку "Снежная королева"?',
                options: ['Шарль Перро', 'Ганс Христиан Андерсен', 'Братья Гримм'],
                correct: 1
            },
            {
                category: 'Сказки',
                question: 'В какой сказке главный герой летает на ковре-самолете?',
                options: ['Аладдин', 'Синдбад-мореход', 'Али-Баба'],
                correct: 0
            }
        ]
    };

    // Выбираем случайный набор вопросов
    const quizNames = Object.keys(quizSets);
    const randomQuizName = quizNames[Math.floor(Math.random() * quizNames.length)];
    const questions = quizSets[randomQuizName];

    const categoryCompliments = {
        'Кино': [
            'Отлично! Ты настоящий киноман! 🎬',
            'Восхитительно! Ты знаешь кино как свои пять пальцев! 🌟',
            'Потрясающе! Ты делаешь это с легкостью! ⭐',
            'Браво! Ты на верном пути! 🎯',
            'Супер! Ты справляешься лучше всех! 🏆',
            'Невероятно! Ты просто молодец! ❤️',
            'Превосходно! Ты справляешься на отлично! 🎉',
            'Замечательно! Ты делаешь это блестяще! ✨',
            'Фантастически! Ты настоящий профи! 🚀',
            'Умница! Ты справляешься просто великолепно! 💫'
        ],
        'Сказки': [
            'Отлично! Ты знаешь сказки назубок! 📚',
            'Восхитительно! Ты настоящий сказочник! 🧚',
            'Потрясающе! Ты помнишь все сказки! 🏰',
            'Браво! Ты на верном пути! 🎭',
            'Супер! Ты справляешься лучше всех! 👑',
            'Невероятно! Ты просто молодец! ❤️',
            'Превосходно! Ты справляешься на отлично! 🎉',
            'Замечательно! Ты делаешь это блестяще! ✨',
            'Фантастически! Ты настоящий профи! 🚀',
            'Умница! Ты справляешься просто великолепно! 💫'
        ],
        'Искусство': [
            'Отлично! Ты настоящий ценитель искусства! 🎨',
            'Восхитительно! Ты знаешь искусство на отлично! 🖼️',
            'Потрясающе! Ты делаешь это с легкостью! ⭐',
            'Браво! Ты на верном пути! 🎯',
            'Супер! Ты справляешься лучше всех! 🏆',
            'Невероятно! Ты просто молодец! ❤️',
            'Превосходно! Ты справляешься на отлично! 🎉',
            'Замечательно! Ты делаешь это блестяще! ✨',
            'Фантастически! Ты настоящий профи! 🚀',
            'Умница! Ты справляешься просто великолепно! 💫'
        ],
        'Литература': [
            'Отлично! Ты настоящий книголюб! 📖',
            'Восхитительно! Ты знаешь литературу на отлично! 📚',
            'Потрясающе! Ты делаешь это с легкостью! ⭐',
            'Браво! Ты на верном пути! 🎯',
            'Супер! Ты справляешься лучше всех! 🏆',
            'Невероятно! Ты просто молодец! ❤️',
            'Превосходно! Ты справляешься на отлично! 🎉',
            'Замечательно! Ты делаешь это блестяще! ✨',
            'Фантастически! Ты настоящий профи! 🚀',
            'Умница! Ты справляешься просто великолепно! 💫'
        ],
        'Мультфильмы': [
            'Отлично! Ты настоящий знаток мультфильмов! 🎨',
            'Восхитительно! Ты помнишь все мультики! 🎬',
            'Потрясающе! Ты делаешь это с легкостью! ⭐',
            'Браво! Ты на верном пути! 🎯',
            'Супер! Ты справляешься лучше всех! 🏆',
            'Невероятно! Ты просто молодец! ❤️',
            'Превосходно! Ты справляешься на отлично! 🎉',
            'Замечательно! Ты делаешь это блестяще! 😍',
            'Фантастически! Ты настоящий профи! 🚀',
            'Умница! Ты справляешься просто великолепно! 💫'
        ]
    };

    const categoryQuotes = {
        'Кино': [
            'Жизнь как коробка шоколадных конфет: никогда не знаешь, какая начинка тебе попадется». — «Форрест Гамп».🌟',
            'Мы ходим на работу, которую ненавидим, чтобы купить вещи, которые нам не нужны. — «Бойцовский клуб». 🎬',
            'Не все приходит к нам тогда, когда мы этого хотим. В жизни есть моменты, когда нужно сделать выбор или ты проигрываешь по всем статьям. — «Мисс Петтигрю».⚡',
            ' Признавать свои ошибки тяжело, особенно, когда долго ошибался. — «Вторая жизнь Уве».💪',
            'Знаете, забавно получается: начинаешь ценить радости жизни, только когда оказываешься вдали от дома. — «Жареные зеленые помидоры». 🌟',
            'Всё живое: каждый листок, каждая птица — живы лишь потому, что в них заключено тайное слово жизни. Это единственное, что разнит нас с комком глины — слово. Слова — это жизнь. Заполни все эти пустые страницы. — «Воровка книг».',
            ' Что бы делало твое добро, если бы не существовало зла, и как бы выглядела земля, если бы с нее исчезли тени? — «Мастер и Маргарита». 🤝',
            'Жизнь состоит из ветров. Они налетают и уносятся, налетают и уносятся, но жить не означает ждать, когда буря стихнет. — «Королек — птичка певчая».',
            'Страх делает тебя пленником. Надежда дает тебе свободу. — «Побег из Шоушенка».🚀',
            'Я не хочу выживать. Я хочу жить — «12 лет рабства».📸',
            'У каждого свой ад — это не обязательно огонь и смола! Наш ад — это жизнь впустую. — «Куда приводят мечты».',
            'Честность – понятие растяжимое. Сказала честно, а сделала подло. — «Чучело».',
            'Чему быть — того не миновать. Ибо нет такого коня, на котором от самого себя ускакать можно. — «Табор уходит в небо».',
            ' Часто преступление для одного становится позором для другого. — «ДАртаньян и три мушкетера».',
            'Мы сами создаем для себя тернии и даже не задумываемся, чего нам это будет стоить. А потом только и остается терпеть и уверять себя, что мучаемся не напрасно. — «Поющие в терновнике».',
            'Ты называешь себя свободной, дикой. И ты так боишься, что кто-то посадит тебя в клетку. Детка, ты уже в клетке. Ты сама ее создала... Она всегда будет с тобой, потому что, куда бы ты ни отправилась, от самой себя тебе не убежать. — «Завтрак у Тиффани».',
            'Глупостей не надо делать даже со скуки. — «А зори здесь тихие».',
            ' Не позволяй себе сдаться. Пусть твое тело закуют в цепи, но твой разум заковать не смогут. — «Корни».',
            'А может, тебе дать еще ключ от квартиры, где деньги лежат?!. — «Двенадцать стульев».🪑',
            'Успевает всюду тот, кто никуда не торопится. — «Собачье сердце». ',
            ' Штирлиц, а вас я попрошу остаться! — «Семнадцать мгновений весны»🕴.',
            ' Не впадай в отчаянье. Не имей такой привычки.— «Место встречи изменить нельзя».',
            'Господи, как скучно мы живём! В нас пропал дух авантюризма! Мы перестали лазить в окна к любимым женщинам. Мы перестали делать большие и хорошие глупости... — «Ирония судьбы, или С легким паром!».',
            'Маленькая ложь рождает большое недоверие. — «Семнадцать мгновений весны».',
            'Я три дня гналась за вами, чтобы сказать, как вы мне безразличны. — «Обыкновенное чудо».',
            'Да на тебе пахать надо! — «Служебный роман».',
            'Вы пленили мою бедную душу и я люблю вас. Люблю, люблю. — «Гордость и предубеждение».',
            

        ],
        'Сказки': [
            'Сказка ложь, да в ней намек! 📚',
            'Скоро сказка сказывается, да не скоро дело делается! 🧚',
            'В некотором царстве, в некотором государстве... 🏰',
            'И я там был, мед-пиво пил! 🍯',
            'Сказка - ложь, да в ней намек, добрым молодцам урок! 📖',
            'Жили-были... 🏡',
            'И стали они жить-поживать да добра наживать! 💫',
            'В тридевятом царстве, в тридесятом государстве... 👑',
            'Сказки могут вести нас, как путеводная нить',
            'Детям любого возраста не обойтись без сказки 🌳'
        ],
        'Мультфильмы': [
            'Ребята, давайте жить дружно! 🐱',
            'А может быть ворона? 🐦',
            'Я не волшебник, я только учусь! 🎨',
            'Продолжай в том же духе! 🎬',
            'Ты справишься! ⭐',
            'А я все чаще замечаю... 🤔',
            'А вдруг получится? 🎯',
           'Загляни в себя, Симба. Ты – нечто гораздо большее, чем ты есть сейчас.',
            'Чем же кролика порадовать? — Он же сам не хочет радоваться😊',
            'Не грусти, пошли гулять! 🚶',
            'Какое счастье быть вместе! 💫',
            'Даже для чудес необходимо немного времени👠',
            'Самые тяжёлые ситуации преподносят самые важные уроки. Если вы справляетесь с вызовом, вы переходите на следующий, высший уровень 🐘',
            'Ты не должен никому позволять загонять себя в рамки. Единственные твои рамки – твоя душа.🐭🧀',
            'Некоторые говорят, что судьба от нас не зависит, что мы над ней не властны, но я знаю точно: наша судьба живёт внутри нас. И нужна только храбрость, чтобы её разглядеть',
            'Нельзя просить у звезды исполнить желание и при этом ничего не предпринимать.',
            'Иногда правильный путь не самый простой.',
            'У вас нет времени, чтобы быть робким. Вы должны быть смелым и отважным.',


        ],
        'Литература': [
            'Ученье свет, а неученье тьма! 📖',
            'Век живи - век учись! 📚',
            'Повторение - мать учения! 🔄',
            'Тяжело в учении - легко в бою! ⚔️',
            'Не откладывай на завтра то, что можно сделать сегодня! ⏰',
            'Книга - источник знаний! 📚',
            'Чтение - вот лучшее учение! 📖',
            'Грамоте учиться - всегда пригодится! ✍️',
            'Знание - сила! 💪',
            'Учиться никогда не поздно! 🎓',
            'Если падаешь со скалы в пропасть, почему бы не попробовать полететь? Что ты теряешь?',
        ]
    };

    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(32, 32, 39, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
    `;

    const gameContent = document.createElement('div');
    gameContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 24px;
        text-align: center;
        max-width: 800px;
        width: 90%;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        animation: modalAppear 0.3s ease-out;
    `;

    const title = document.createElement('h2');
    title.textContent = `Викторина: ${randomQuizName}`;
    title.style.cssText = `
        color: #202027;
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 30px;
    `;

    const progressContainer = document.createElement('div');
    progressContainer.style.cssText = `
        width: 100%;
        height: 10px;
        background: #f0f0f0;
        border-radius: 5px;
        margin: 20px 0;
        overflow: hidden;
    `;

    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        width: 0%;
        height: 100%;
        background: #33d17a;
        transition: width 0.3s ease;
    `;
    progressContainer.appendChild(progressBar);

    const categoryDisplay = document.createElement('p');
    categoryDisplay.style.cssText = `
        color: #33d17a;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 600;
        margin: 10px 0;
    `;

    const questionDisplay = document.createElement('p');
    questionDisplay.style.cssText = `
        color: #202027;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 600;
        margin: 20px 0;
        line-height: 1.4;
    `;

    const optionsContainer = document.createElement('div');
    optionsContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin: 30px 0;
    `;

    const message = document.createElement('p');
    message.style.cssText = `
        margin: 20px 0;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 500;
        min-height: 24px;
        line-height: 1.4;
        padding: 20px;
        border-radius: 12px;
        background: #f8f8f8;
    `;

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Следующий вопрос';
    nextButton.style.cssText = `
        background: #202027;
        color: white;
        border: none;
        padding: 16px 32px;
        border-radius: 60px;
        cursor: pointer;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        margin: 10px 0 30px 0;
        transition: all 0.3s;
        min-width: 200px;
        display: none;
    `;

    nextButton.addEventListener('mouseover', () => {
        nextButton.style.background = '#33d17a';
        nextButton.style.color = '#202027';
    });

    nextButton.addEventListener('mouseout', () => {
        nextButton.style.background = '#202027';
        nextButton.style.color = 'white';
    });

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть';
    closeButton.style.cssText = `
        background: #202027;
        color: white;
        border: none;
        padding: 16px 32px;
        border-radius: 60px;
        cursor: pointer;
        font-family: Montserrat;
        font-size: 18px;
        font-weight: 600;
        margin: 0;
        transition: all 0.3s;
        min-width: 200px;
    `;

    closeButton.addEventListener('mouseover', () => {
        closeButton.style.background = '#33d17a';
        closeButton.style.color = '#202027';
    });

    closeButton.addEventListener('mouseout', () => {
        closeButton.style.background = '#202027';
        closeButton.style.color = 'white';
    });

    function createOptionButton(text, index) {
        const button = document.createElement('button');
        button.textContent = text;
        button.style.cssText = `
            background: #202027;
            color: white;
            border: none;
            padding: 20px;
            border-radius: 12px;
            cursor: pointer;
            font-family: Montserrat;
            font-size: 18px;
            font-weight: 500;
            transition: all 0.3s;
            text-align: left;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        `;

        button.addEventListener('mouseover', () => {
            if (!button.disabled) {
                button.style.background = '#33d17a';
                button.style.color = '#202027';
                button.style.transform = 'translateY(-2px)';
                button.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
            }
        });

        button.addEventListener('mouseout', () => {
            if (!button.disabled) {
                button.style.background = '#202027';
                button.style.color = 'white';
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            }
        });

        button.addEventListener('click', () => {
            if (button.disabled) return;
            
            const isCorrect = index === questions[currentQuestion].correct;
            const category = questions[currentQuestion].category;
            
            // Отключаем все кнопки
            optionsContainer.querySelectorAll('button').forEach(btn => {
                btn.disabled = true;
                if (btn === button) {
                    btn.style.background = isCorrect ? '#33d17a' : '#ff4444';
                    btn.style.color = '#202027';
                }
            });

            if (isCorrect) {
                score++;
                const randomCompliment = categoryCompliments[category][Math.floor(Math.random() * categoryCompliments[category].length)];
                message.textContent = `Правильно! ${randomCompliment}`;
                message.style.color = '#33d17a';
                message.style.background = '#e8f5e9';
            } else {
                const randomQuote = categoryQuotes[category][Math.floor(Math.random() * categoryQuotes[category].length)];
                message.textContent = `Неправильно! Правильный ответ: ${questions[currentQuestion].options[questions[currentQuestion].correct]}. ${randomQuote}`;
                message.style.color = '#202027';
                message.style.background = '#f5f5f5';
            }

            nextButton.style.display = 'inline-block';
        });

        return button;
    }

    function showQuestion() {
        const question = questions[currentQuestion];
        categoryDisplay.textContent = question.category;
        questionDisplay.textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}: ${question.question}`;
        progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
        
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            optionsContainer.appendChild(createOptionButton(option, index));
        });
        message.textContent = '';
        nextButton.style.display = 'none';
    }

    nextButton.addEventListener('click', () => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            const percentage = Math.round((score / questions.length) * 100);
            categoryDisplay.textContent = 'Результат';
            questionDisplay.textContent = `Викторина завершена!`;
            optionsContainer.innerHTML = '';
            message.textContent = `Твой результат: ${score} из ${questions.length} (${percentage}%)`;
            message.style.color = '#202027';
            message.style.background = '#f8f8f8';
            nextButton.style.display = 'none';
            progressBar.style.width = '100%';
        }
    });

    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
        // При закрытии викторины предлагаем начать новую
        setTimeout(() => {
            if (confirm('Хотите начать новую викторину?')) {
                startQuizGame();
            }
        }, 100);
    });

    gameContent.appendChild(title);
    gameContent.appendChild(progressContainer);
    gameContent.appendChild(categoryDisplay);
    gameContent.appendChild(questionDisplay);
    gameContent.appendChild(optionsContainer);
    gameContent.appendChild(message);
    gameContent.appendChild(nextButton);
    gameContent.appendChild(closeButton);
    modal.appendChild(gameContent);
    document.body.appendChild(modal);

    showQuestion();
}

function startRockPaperScissorsGame() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    let totalGames = 0;
    
    const choices = ['камень', 'ножницы', 'бумага'];
    const emojis = {
        'камень': '🗿',
        'ножницы': '✂️',
        'бумага': '📜'
    };
    
    const compliments = [
        'Отлично! Ты настоящий мастер! 🏆',
        'Восхитительно! Ты делаешь это с легкостью! ⭐',
        'Потрясающе! Ты на верном пути! 🎯',
        'Браво! Ты справляешься лучше всех! 🌟',
        'Супер! Ты настоящий профи! 🚀',
        'Невероятно! Ты просто молодец! 💫',
        'Превосходно! Ты справляешься на отлично! 🎉',
        'Замечательно! Ты делаешь это блестяще! ✨',
        'Фантастически! Ты настоящий чемпион! 👑',
        'Умница! Ты справляешься просто великолепно! ❤️'
    ];
    
    const motivationalPhrases = [
        'Не сдавайся! Каждая попытка приближает к победе! 💪',
        'Продолжай в том же духе! Ты обязательно победишь! 🌟',
        'Ошибка - это не конец, а подсказка к правильному решению! 🛣️',
        'Верь в себя! Ты способен на большее! 💫',
        'Каждая попытка - это шаг к успеху! 📈',
        'Не бойся ошибаться, бойся не пробовать! 🎯',
        'Ты ближе к победе, чем думаешь! ❤️',
        'Каждая попытка делает тебя сильнее! 💪',
        'Не останавливайся на достигнутом! 🚀',
        'Ты справишься, просто продолжай! ⭐'
    ];

    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(32, 32, 39, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
    `;

    const gameContent = document.createElement('div');
    gameContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 24px;
        text-align: center;
        max-width: 600px;
        width: 90%;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        animation: modalAppear 0.3s ease-out;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Камень, ножницы, бумага';
    title.style.cssText = `
        font-family: 'Montserrat', sans-serif;
        font-size: 32px;
        margin-bottom: 30px;
        color: #202027;
    `;

    const statsContainer = document.createElement('div');
    statsContainer.style.cssText = `
        display: flex;
        justify-content: space-around;
        margin-bottom: 30px;
        padding: 15px;
        background: #f5f5f5;
        border-radius: 12px;
        font-family: 'Montserrat', sans-serif;
    `;

    const createStatBox = (label, value) => {
        const box = document.createElement('div');
        box.style.cssText = `
            text-align: center;
            padding: 10px;
            min-width: 100px;
        `;
        
        const labelEl = document.createElement('div');
        labelEl.textContent = label;
        labelEl.style.cssText = `
            font-size: 16px;
            color: #666;
            margin-bottom: 5px;
        `;
        
        const valueEl = document.createElement('div');
        valueEl.textContent = value;
        valueEl.style.cssText = `
            font-size: 24px;
            font-weight: bold;
            color: #202027;
        `;
        
        box.appendChild(labelEl);
        box.appendChild(valueEl);
        return box;
    };

    const playerScoreBox = createStatBox('Твои победы', '0');
    const computerScoreBox = createStatBox('Победы компьютера', '0');
    const drawsBox = createStatBox('Ничьи', '0');

    statsContainer.appendChild(playerScoreBox);
    statsContainer.appendChild(computerScoreBox);
    statsContainer.appendChild(drawsBox);

    const resultDisplay = document.createElement('div');
    resultDisplay.style.cssText = `
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        margin: 20px 0;
        min-height: 36px;
        color: #202027;
    `;

    const messageDisplay = document.createElement('div');
    messageDisplay.style.cssText = `
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        margin: 20px 0;
        min-height: 27px;
        color: #666;
    `;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 20px;
        margin: 30px 0;
    `;

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = `${emojis[choice]} ${choice}`;
        button.style.cssText = `
            padding: 15px 30px;
            font-size: 24px;
            border: none;
            border-radius: 12px;
            background: #202027;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Montserrat', sans-serif;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        `;

        button.addEventListener('mouseover', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });

        button.addEventListener('click', () => {
            const computerChoice = choices[Math.floor(Math.random() * 3)];
            let result;
            
            if (choice === computerChoice) {
                result = 'Ничья!';
                draws++;
                drawsBox.lastChild.textContent = draws;
            } else if (
                (choice === 'камень' && computerChoice === 'ножницы') ||
                (choice === 'ножницы' && computerChoice === 'бумага') ||
                (choice === 'бумага' && computerChoice === 'камень')
            ) {
                result = 'Ты победил!';
                playerScore++;
                playerScoreBox.lastChild.textContent = playerScore;
            } else {
                result = 'Компьютер победил!';
                computerScore++;
                computerScoreBox.lastChild.textContent = computerScore;
            }
            
            totalGames++;
            resultDisplay.textContent = `${emojis[choice]} vs ${emojis[computerChoice]} - ${result}`;
            messageDisplay.textContent = result === 'Ты победил!' ? 
                compliments[Math.floor(Math.random() * compliments.length)] :
                result === 'Ничья!' ? 
                    'Ничья! Попробуй еще раз! 🤝' :
                    motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
        });

        buttonsContainer.appendChild(button);
    });

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть';
    closeButton.style.cssText = `
        padding: 12px 24px;
        font-size: 18px;
        border: none;
        border-radius: 12px;
        background: #202027;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Montserrat', sans-serif;
        margin-top: 20px;
    `;

    closeButton.addEventListener('mouseover', () => {
        closeButton.style.background = '#333';
    });

    closeButton.addEventListener('mouseout', () => {
        closeButton.style.background = '#202027';
    });

    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    gameContent.appendChild(title);
    gameContent.appendChild(statsContainer);
    gameContent.appendChild(resultDisplay);
    gameContent.appendChild(messageDisplay);
    gameContent.appendChild(buttonsContainer);
    gameContent.appendChild(closeButton);
    modal.appendChild(gameContent);
    document.body.appendChild(modal);
}

function startColorGeneratorGame() {
    let score = 0;
    
    const colorCompliments = [
        'Отлично! Ты создаешь настоящую радугу! ❤️',
        'Восхитительно! Твои цвета просто завораживают! 🎨',
        'Потрясающе! Ты настоящий художник! 🖌️',
        'Браво! Ты чувствуешь цвет как никто другой! 🎯',
        'Супер! Твои цвета излучают позитив! ✨',
        'Невероятно! Ты создаешь шедевры! 🎭',
        'Превосходно! Твои цвета вдохновляют! 💫',
        'Замечательно! Ты настоящий колорист! 🎪',
        'Фантастически! Твои цвета оживают! 🌟',
        'Умница! Ты создаешь магию цвета! 🎪'
    ];

    const colorQuotes = [
        'Цвет - это сила, которая непосредственно влияет на душу. - Василий Кандинский 🎨',
        'Цвета - это улыбки природы. - Ли Хант ❤️',
        'Жизнь - это холст, и ты должен бросить на него все краски, какие можешь. - Дэнни Кэй 🖌️',
        'Цвет - это клавиатура, глаза - молоточки, душа - многострунный рояль. - Василий Кандинский 🎹',
        'Цвета - это эмоции, которые мы видим. - Марк Шагал 🎭',
        'Каждый цвет имеет свою историю. - Пабло Пикассо 📚',
        'Цвета - это язык души. - Винсент Ван Гог 🎨',
        'Жизнь подобна картине: нарисуй её яркими красками! - Далила 🌟',
        'Цвета - это улыбки природы. - Ли Хант ❤️',
        'Каждый цвет имеет свою музыку. - Клод Моне 🎵'
    ];

    const colorIdioms = [
        'Видеть мир в розовом цвете! 🌸',
        'Черно-белое мышление! ⚫⚪',
        'Зеленая тоска! 🌿',
        'Желтая пресса! 📰',
        'Красная цена! 💰',
        'Синяя птица счастья! 🐦',
        'Белая ворона! 🦢',
        'Золотая середина! ⚖️',
        'Серая мышь! 🐭',
        'Фиолетовые мечты! 💜',
        'Голубая кровь! 👑',
        'Зеленый свет! 🚦',
        'Красная нить судьбы! 🧵',
        'Белый танец! 💃',
        'Черный день! 🌑',
        'Золотая лихорадка! 💫',
        'Серебряный век! 🌙',
        'Бронзовый век! 🏺',
        'Медный век! 🔶',
        'Железный век! ⚔️'
    ];

    const specialColors = {
        'Небесная лазурь': '#87CEEB',
        'Морская волна': '#20B2AA',
        'Лавандовый': '#E6E6FA',
        'Персиковый': '#FFDAB9',
        'Мятный': '#98FF98',
        'Коралловый': '#FF7F50',
        'Бирюзовый': '#40E0D0',
        'Аметистовый': '#9966CC',
        'Оливковый': '#808000',
        'Индиго': '#4B0082',
        'Пурпурный': '#800080',
        'Бордовый': '#800000',
        'Терракотовый': '#E2725B',
        'Бирюзовый': '#30D5C8',
        'Лимонный': '#FDFF00',
        'Малиновый': '#DC143C',
        'Сливовый': '#8E4585',
        'Медный': '#B87333',
        'Бронзовый': '#CD7F32',
        'Песочный': '#F4A460'
    };
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(32, 32, 39, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
    `;

    const gameContent = document.createElement('div');
    gameContent.style.cssText = `
        background: white;
        padding: 40px;
        border-radius: 24px;
        text-align: center;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        animation: modalAppear 0.3s ease-out;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Генератор случайных цветов';
    title.style.cssText = `
        color: #202027;
        font-family: Montserrat;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 30px;
    `;

    const colorDisplay = document.createElement('div');
    colorDisplay.style.cssText = `
        width: 200px;
        height: 200px;
        margin: 30px auto;
        border-radius: 24px;
        background: #202027;
        transition: background-color 0.3s ease;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    `;

    const colorCode = document.createElement('p');
    colorCode.style.cssText = `
        color: #202027;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 600;
        margin: 20px 0;
    `;
    colorCode.textContent = '#202027';

    const message = document.createElement('p');
    message.style.cssText = `
        margin: 20px 0;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 500;
        min-height: 24px;
        line-height: 1.4;
    `;

    const generateButton = document.createElement('button');
    generateButton.textContent = 'Сгенерировать цвет';
    generateButton.style.cssText = `
        background: #202027;
        color: white;
        border: none;
        padding: 20px 40px;
        border-radius: 60px;
        cursor: pointer;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 600;
        margin: 20px 0;
        transition: all 0.3s;
        min-width: 200px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    `;

    generateButton.addEventListener('mouseover', () => {
        generateButton.style.background = '#33d17a';
        generateButton.style.color = '#202027';
        generateButton.style.transform = 'translateY(-2px)';
        generateButton.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
    });

    generateButton.addEventListener('mouseout', () => {
        generateButton.style.background = '#202027';
        generateButton.style.color = 'white';
        generateButton.style.transform = 'translateY(0)';
        generateButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });

    function generateRandomColor() {
        // 30% шанс получить специальный цвет
        if (Math.random() < 0.3) {
            const specialColorNames = Object.keys(specialColors);
            const randomColorName = specialColorNames[Math.floor(Math.random() * specialColorNames.length)];
            const colorValue = specialColors[randomColorName];
            return { value: colorValue, name: randomColorName };
        }

        // 70% шанс получить случайный цвет
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return { value: color, name: null };
    }

    generateButton.addEventListener('click', () => {
        const newColor = generateRandomColor();
        colorDisplay.style.backgroundColor = newColor.value;
        colorCode.textContent = newColor.name ? `${newColor.name} (${newColor.value})` : newColor.value;
        score++;

        if (score % 3 === 0) {
            const randomQuote = colorQuotes[Math.floor(Math.random() * colorQuotes.length)];
            message.textContent = randomQuote;
        } else if (score % 2 === 0) {
            const randomIdiom = colorIdioms[Math.floor(Math.random() * colorIdioms.length)];
            message.textContent = randomIdiom;
        } else {
            const randomCompliment = colorCompliments[Math.floor(Math.random() * colorCompliments.length)];
            message.textContent = randomCompliment;
        }
        message.style.color = '#202027';
    });

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Закрыть';
    closeButton.style.cssText = `
        background: #202027;
        color: white;
        border: none;
        padding: 20px 40px;
        border-radius: 60px;
        cursor: pointer;
        font-family: Montserrat;
        font-size: 24px;
        font-weight: 600;
        margin: 20px 0 0 0;
        transition: all 0.3s;
        min-width: 200px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    `;

    closeButton.addEventListener('mouseover', () => {
        closeButton.style.background = '#33d17a';
        closeButton.style.color = '#202027';
        closeButton.style.transform = 'translateY(-2px)';
        closeButton.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
    });

    closeButton.addEventListener('mouseout', () => {
        closeButton.style.background = '#202027';
        closeButton.style.color = 'white';
        closeButton.style.transform = 'translateY(0)';
        closeButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });

    closeButton.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    gameContent.appendChild(title);
    gameContent.appendChild(colorDisplay);
    gameContent.appendChild(colorCode);
    gameContent.appendChild(message);
    gameContent.appendChild(generateButton);
    gameContent.appendChild(closeButton);
    modal.appendChild(gameContent);
    document.body.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', () => {
    const gameButtons = document.querySelectorAll('.game-list__button');
    
    gameButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.game-list__card');
            const gameType = card.querySelector('.game-list__image').classList[1];
            
            switch(gameType) {
                case 'game-list__image_type_guess-number':
                    startGuessNumberGame();
                    break;
                case 'game-list__image_type_arithmetic':
                    startArithmeticGame();
                    break;
                case 'game-list__image_type_reverse-text':
                    startReverseTextGame();
                    break;
                case 'game-list__image_type_quiz':
                    startQuizGame();
                    break;
                case 'game-list__image_type_rps':
                    startRockPaperScissorsGame();
                    break;
                case 'game-list__image_type_color-gen':
                    startColorGeneratorGame();
                    break;
                default:
                    alert('Эта игра пока недоступна!');
            }
        });
    });
}); 