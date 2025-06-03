// Общие цитаты и комплименты для всех игр
const gameMessages = {
    compliments: [
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
    ],
    motivation: [
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
    ],
    quotes: [
        {
            text: 'Жизнь как коробка шоколадных конфет: никогда не знаешь, какая начинка тебе попадется',
            author: 'Форрест Гамп',
            emoji: '🌟'
        },
        {
            text: 'Мы ходим на работу, которую ненавидим, чтобы купить вещи, которые нам не нужны',
            author: 'Бойцовский клуб',
            emoji: '🎬'
        },
        {
            text: 'Не все приходит к нам тогда, когда мы этого хотим. В жизни есть моменты, когда нужно сделать выбор или ты проигрываешь по всем статьям',
            author: 'Мисс Петтигрю',
            emoji: '⚡️'
        },
        {
            text: 'Признавать свои ошибки тяжело, особенно, когда долго ошибался',
            author: 'Вторая жизнь Уве',
            emoji: '💪'
        },
        {
            text: 'Знаете, забавно получается: начинаешь ценить радости жизни, только когда оказываешься вдали от дома',
            author: 'Жареные зеленые помидоры',
            emoji: '🌟'
        },
        {
            text: 'Всё живое: каждый листок, каждая птица — живы лишь потому, что в них заключено тайное слово жизни. Это единственное, что разнит нас с комком глины — слово. Слова — это жизнь. Заполни все эти пустые страницы',
            author: 'Воровка книг',
            emoji: '📚'
        },
        {
            text: 'Что бы делало твое добро, если бы не существовало зла, и как бы выглядела земля, если бы с нее исчезли тени?',
            author: 'Мастер и Маргарита',
            emoji: '🤝'
        },
        {
            text: 'Жизнь состоит из ветров. Они налетают и уносятся, налетают и уносятся, но жить не означает ждать, когда буря стихнет',
            author: 'Королек — птичка певчая',
            emoji: '🐦'
        },
        {
            text: 'Страх делает тебя пленником. Надежда дает тебе свободу',
            author: 'Побег из Шоушенка',
            emoji: '🚀'
        },
        {
            text: 'Я не хочу выживать. Я хочу жить',
            author: '12 лет рабства',
            emoji: '📸'
        },
        {
            text: 'У каждого свой ад — это не обязательно огонь и смола! Наш ад — это жизнь впустую',
            author: 'Куда приводят мечты',
            emoji: '💫'
        },
        {
            text: 'Честность – понятие растяжимое. Сказала честно, а сделала подло',
            author: 'Чучело',
            emoji: '🎭'
        },
        {
            text: 'Чему быть — того не миновать. Ибо нет такого коня, на котором от самого себя ускакать можно',
            author: 'Табор уходит в небо',
            emoji: '🏕️'
        },
        {
            text: 'Часто преступление для одного становится позором для другого',
            author: 'ДАртаньян и три мушкетера',
            emoji: '⚔️'
        },
        {
            text: 'Мы сами создаем для себя тернии и даже не задумываемся, чего нам это будет стоить. А потом только и остается терпеть и уверять себя, что мучаемся не напрасно',
            author: 'Поющие в терновнике',
            emoji: '🌹'
        },
        {
            text: 'Ты называешь себя свободной, дикой. И ты так боишься, что кто-то посадит тебя в клетку. Детка, ты уже в клетке. Ты сама ее создала... Она всегда будет с тобой, потому что, куда бы ты ни отправилась, от самой себя тебе не убежать',
            author: 'Завтрак у Тиффани',
            emoji: '💎'
        },
        {
            text: 'Глупостей не надо делать даже со скуки',
            author: 'А зори здесь тихие',
            emoji: '🌅'
        },
        {
            text: 'Не позволяй себе сдаться. Пусть твое тело закуют в цепи, но твой разум заковать не смогут',
            author: 'Корни',
            emoji: '🌳'
        },
        {
            text: 'А может, тебе дать еще ключ от квартиры, где деньги лежат?!',
            author: 'Двенадцать стульев',
            emoji: '🪑'
        },
        {
            text: 'Успевает всюду тот, кто никуда не торопится',
            author: 'Собачье сердце',
            emoji: '🐕'
        },
        {
            text: 'Штирлиц, а вас я попрошу остаться!',
            author: 'Семнадцать мгновений весны',
            emoji: '🕴'
        },
        {
            text: 'Не впадай в отчаянье. Не имей такой привычки',
            author: 'Место встречи изменить нельзя',
            emoji: '🎭'
        },
        {
            text: 'Господи, как скучно мы живём! В нас пропал дух авантюризма! Мы перестали лазить в окна к любимым женщинам. Мы перестали делать большие и хорошие глупости...',
            author: 'Ирония судьбы, или С легким паром!',
            emoji: '🎭'
        },
        {
            text: 'Маленькая ложь рождает большое недоверие',
            author: 'Семнадцать мгновений весны',
            emoji: '🕴'
        },
        {
            text: 'Я три дня гналась за вами, чтобы сказать, как вы мне безразличны',
            author: 'Обыкновенное чудо',
            emoji: '✨'
        },
        {
            text: 'Да на тебе пахать надо!',
            author: 'Служебный роман',
            emoji: '💼'
        },
        {
            text: 'Вы пленили мою бедную душу и я люблю вас. Люблю, люблю',
            author: 'Гордость и предубеждение',
            emoji: '❤️'
        },
        {
            text: 'Ребята, давайте жить дружно!',
            author: 'Кот Леопольд',
            emoji: '🐱'
        },
        {
            text: 'А может быть ворона?',
            author: 'Карлсон',
            emoji: '🐦'
        },
        {
            text: 'Я не волшебник, я только учусь!',
            author: 'Волшебник Изумрудного города',
            emoji: '🎨'
        },
        {
            text: 'А я все чаще замечаю...',
            author: 'Винни Пух',
            emoji: '🤔'
        },
        {
            text: 'А вдруг получится?',
            author: 'Кот в сапогах',
            emoji: '🎯'
        },
        {
            text: 'Загляни в себя, Симба. Ты – нечто гораздо большее, чем ты есть сейчас',
            author: 'Король Лев',
            emoji: '🦁'
        },
        {
            text: 'Чем же кролика порадовать? — Он же сам не хочет радоваться',
            author: 'Винни Пух',
            emoji: '😊'
        },
        {
            text: 'Не грусти, пошли гулять!',
            author: 'Карлсон',
            emoji: '🚶'
        },
        {
            text: 'Какое счастье быть вместе!',
            author: 'Золушка',
            emoji: '💫'
        },
        {
            text: 'Даже для чудес необходимо немного времени',
            author: 'Золушка',
            emoji: '👠'
        },
        {
            text: 'Самые тяжёлые ситуации преподносят самые важные уроки. Если вы справляетесь с вызовом, вы переходите на следующий, высший уровень',
            author: 'Дамбо',
            emoji: '🐘'
        },
        {
            text: 'Ты не должен никому позволять загонять себя в рамки. Единственные твои рамки – твоя душа',
            author: 'Рататуй',
            emoji: '🐭🧀'
        },
        {
            text: 'Некоторые говорят, что судьба от нас не зависит, что мы над ней не властны, но я знаю точно: наша судьба живёт внутри нас. И нужна только храбрость, чтобы её разглядеть',
            author: 'Храбрая сердцем',
            emoji: '🏹'
        },
        {
            text: 'Нельзя просить у звезды исполнить желание и при этом ничего не предпринимать',
            author: 'Питер Пэн',
            emoji: '⭐'
        },
        {
            text: 'Иногда правильный путь не самый простой',
            author: 'Покахонтас',
            emoji: '🌿'
        },
        {
            text: 'У вас нет времени, чтобы быть робким. Вы должны быть смелым и отважным',
            author: 'Храбрая сердцем',
            emoji: '🏹'
        },
        {
            text: 'Цвет - это сила, которая непосредственно влияет на душу',
            author: 'Василий Кандинский',
            emoji: '🎨'
        },
        {
            text: 'Цвета - это улыбки природы',
            author: 'Ли Хант',
            emoji: '❤️'
        },
        {
            text: 'Жизнь - это холст, и ты должен бросить на него все краски, какие можешь',
            author: 'Дэнни Кэй',
            emoji: '🖌️'
        },
        {
            text: 'Цвет - это клавиатура, глаза - молоточки, душа - многострунный рояль',
            author: 'Василий Кандинский',
            emoji: '🎹'
        },
        {
            text: 'Цвета - это эмоции, которые мы видим',
            author: 'Марк Шагал',
            emoji: '🎭'
        },
        {
            text: 'Каждый цвет имеет свою историю',
            author: 'Пабло Пикассо',
            emoji: '📚'
        },
        {
            text: 'Цвета - это язык души',
            author: 'Винсент Ван Гог',
            emoji: '🎨'
        },
        {
            text: 'Жизнь подобна картине: нарисуй её яркими красками!',
            author: 'Далила',
            emoji: '🌟'
        },
        {
            text: 'Каждый цвет имеет свою музыку',
            author: 'Клод Моне',
            emoji: '🎵'
        }
    ]
};

// Функция для получения случайной цитаты с красивым форматированием
function getRandomQuote() {
    const quote = gameMessages.quotes[Math.floor(Math.random() * gameMessages.quotes.length)];
    return `
        <div style="font-style: italic; color: #666; border-left: 3px solid #33d17a; padding-left: 15px; margin: 10px 0; font-size: 0.9em;">
            "${quote.text}"
            <div style="text-align: right; font-size: 0.9em; margin-top: 5px;">
                — ${quote.author} ${quote.emoji}
            </div>
        </div>
    `;
}

// Вспомогательная функция для получения автора цитаты
function getQuoteAuthor(quote) {
    return quote.author;
}

// Вспомогательная функция для получения эмодзи цитаты
function getQuoteEmoji(quote) {
    return quote.emoji;
}

function startGuessNumberGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
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
        max-height: 90vh; /* Limit height to enable scrolling */
        overflow-y: auto; /* Enable vertical scrolling */
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
            message.innerHTML = `
                <div style="color: #202027;">
                    Пожалуйста, введите число от 1 до 100
                </div>
            `;
             message.style.background = '#f5f5f5';
            return;
        }

        if (guess === secretNumber) {
            const randomCompliment = gameMessages.compliments[Math.floor(Math.random() * gameMessages.compliments.length)];
            message.innerHTML = `
                <div style="margin-bottom: 15px; color: #33d17a;">
                    Поздравляем! Вы угадали число ${secretNumber} за ${attempts} попыток! ${randomCompliment}
                </div>
                ${getRandomQuote()}
            `;
            message.style.background = '#e8f5e9';
            button.disabled = true;
            input.disabled = true;
            button.style.background = '#33d17a';
            button.style.cursor = 'default';
        } else if (guess < secretNumber) {
            const randomMotivation = gameMessages.motivation[Math.floor(Math.random() * gameMessages.motivation.length)];
            message.innerHTML = `
                <div style="margin-bottom: 15px; color: #202027;">
                    Загаданное число больше!
                </div>
                <div style="font-style: italic; color: #666; border-left: 3px solid #202027; padding-left: 15px;">
                    "${randomMotivation}"
                </div>
            `; // Удалена цитата при неправильном ответе
             message.style.background = '#f5f5f5';
        } else {
            const randomMotivation = gameMessages.motivation[Math.floor(Math.random() * gameMessages.motivation.length)];
            message.innerHTML = `
                <div style="margin-bottom: 15px; color: #202027;">
                    Загаданное число меньше!
                </div>
                <div style="font-style: italic; color: #666; border-left: 3px solid #202027; padding-left: 15px;">
                    "${randomMotivation}"
                </div>
            `; // Удалена цитата при неправильном ответе
             message.style.background = '#f5f5f5';
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
        max-height: 90vh; /* Limit height to enable scrolling */
        overflow-y: auto; /* Enable vertical scrolling */
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
            message.innerHTML = `
                <div style="color: #202027;">
                    Пожалуйста, введите число
                </div>
            `;
            message.style.background = '#f5f5f5'; // Set background for info messages
            return;
        }

        if (userAnswer === currentAnswer) {
            score++;
            const randomCompliment = gameMessages.compliments[Math.floor(Math.random() * gameMessages.compliments.length)];
            message.innerHTML = `
                <div style="margin-bottom: 15px; color: #33d17a;">
                    Правильно! ${randomCompliment}
                </div>
                ${getRandomQuote()}
            `;
            message.style.background = '#e8f5e9'; // Light green background for correct
        } else {
            const randomMotivation = gameMessages.motivation[Math.floor(Math.random() * gameMessages.motivation.length)];
            message.innerHTML = `
                <div style="margin-bottom: 15px; color: #202027;">
                    Неправильно! Правильный ответ: ${currentAnswer}
                </div>
                <div style="font-style: italic; color: #666; border-left: 3px solid #202027; padding-left: 15px; margin-top: 10px;">
                    "${randomMotivation}"
                </div>
            `; // Удалена цитата при неправильном ответе
             message.style.background = '#f5f5f5';
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
        'Невероятно! Ты просто молодец! ❤️',
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
        'Ты ближе к победе, чем думаешь! ❤️',
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
        max-height: 90vh; /* Limit height to enable scrolling */
        overflow-y: auto; /* Enable vertical scrolling */
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
            message.innerHTML = `
                <div style="color: #202027;">
                    Пожалуйста, введите текст
                </div>
            `;
            return;
        }

        if (userAnswer === currentAnswer.toLowerCase()) {
            score++;
            const randomCompliment = gameMessages.compliments[Math.floor(Math.random() * gameMessages.compliments.length)];
            message.innerHTML = `
                <div style="margin-bottom: 15px; color: #33d17a;">
                    Правильно! ${randomCompliment}
                </div>
                ${getRandomQuote()}
            `;
        } else {
            const randomMotivation = gameMessages.motivation[Math.floor(Math.random() * gameMessages.motivation.length)];
            message.innerHTML = `
                <div style="margin-bottom: 15px; color: #202027;">
                    Неправильно! Правильный ответ: ${currentAnswer}
                </div>
                <div style="font-style: italic; color: #666; border-left: 3px solid #202027; padding-left: 15px; margin: 10px 0; font-size: 0.9em;">
                    "${randomMotivation}"
                </div>
            `;
             message.style.background = '#f5f5f5';
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
        'Современное кино. Часть 1': [
            {
                category: 'Кино',
                question: 'В каком фильме главный герой перемещается в прошлое и знакомится со своими родителями?',
                options: ['Матрица', 'Назад в будущее', 'Терминатор'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Кто исполнил главную мужскую роль в фильме Титаник?',
                options: ['Леонардо Ди Каприо', 'Марк Уолберг', 'Дензел Вашингтон'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'В каком фильме главный герой стал акционером компании Apple?',
                options: ['Сладкий ноябрь', 'Крёстный отец', 'Форрест Гамп'],
                correct: 2
            },
            {
                category: 'Кино',
                question: 'Какой секрет раскрыл главный герой фильма «Шоу Трумэна»?',
                options: ['Весь мир следил за ним', 'Его отец - инопланетянин', 'Он - избранный, который спасёт весь мир'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'В какую женщину был влюблён Шерлок Холмс из британского сериала «Шерлок»?',
                options: ['Мэри Мортсен', 'Ирэн Адлер', 'Миссис Хадсон'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Как звали двух главных злодеев в фильме «Один дома»?',
                options: ['Гарри и Марвин', 'Джон и Брэд', 'Питер и Стэнли'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'В каком фильме два актёра получили Оскар за игру одного и того же персонажа?',
                options: ['Умница Уилл Хантинг', 'Крёстный отец 2', 'Форсаж 4'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Назовите учителя Брюса Ли, именем которого назвали фильм.',
                options: ['Ип Ман', 'Пьяный мастер', 'Лю Канг'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'Что происходило с главным героем фильма «Загадочная история Бенджамина Баттона»?',
                options: ['Он научился летать', 'Он родился старым и молодел', 'Он становился больше с каждым днём'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Какого предмета следовало остерегаться в знаменитом фильме про Юрия Деточкина?',
                options: ['Самолёта', 'Автомобиля', 'Парохода'],
                correct: 1
            }
        ],
        'Современное кино. Часть 2': [
            {
                category: 'Кино',
                question: 'Кто сыграл главную роль в фильме Гая Ричи «Джентльмены»?',
                options: ['Энтони Хопкинс', 'Мэттью МакКонахи', 'Роберт Паттинсон'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Какой эксперимент проводят герои датского фильма «Ещё по одной»?',
                options: ['Проверяют теорию о нехватке алкоголя в организме и постоянно выпивают', 'Разрабатывают алгоритм безопасного курения', 'Создают средство, позволяющее становиться невидимым'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'Какой фильм 2020 года получил главную кинопремию «Оскар» в номинациях: «Лучший фильм», «Лучшая режиссура» и «Лучшая актриса»?',
                options: ['Манк', 'Земля кочевников', 'Суд над чикагской семёркой'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Как называется корейский фильм о социальном неравенстве и столкновении представителей разных слоёв общества, высоко оценённый критиками и зрителями?',
                options: ['Паразиты', 'Олдбой', 'Поезд в Пусан'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'Роль Джокера в одноимённом фильме Тодда Филлипса блистательно воплотил актёр …',
                options: ['Джаред Лето', 'Джозеф Гордон-Левитт', 'Хоакин Феникс'],
                correct: 2
            },
            {
                category: 'Кино',
                question: 'Какая история лежит в основе фильма Квентина Тарантино «Однажды в Голливуде»?',
                options: ['Переход от немого кинематографа к звуковым фильмам', 'Расцвет жанра вестерн', 'Преступная деятельность секты Чарльза Мэнсона'],
                correct: 2
            },
            {
                category: 'Кино',
                question: 'Кому досталась роль Чёрной вдовы в супергеройском блокбастере «Мстители»?',
                options: ['Скарлетт Йоханссон', 'Эмме Стоун', 'Марго Робби'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'Какую кличку дали Фрэнку Валлелонга, главному герою фильма «Звезда родилась»?',
                options: ['Болтун', 'Молчун', 'Праведник'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'Как называется фильм, который рассказывает историю успеха британской рок-группы Queen с Рами Малеком в главной роли?',
                options: ['Богемная рапсодия', 'Богемская рапсодия', 'Феномен Queen'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Кто является главной героиней фильма «Тоня против всех»?',
                options: ['Фигуристка', 'Гимнастка', 'Пловчиха'],
                correct: 0
            }
        ],
        'Современное кино. Часть 3': [
            {
                category: 'Кино',
                question: 'Для какого из этих фильмов музыку написал Ханс Циммер?',
                options: ['Довод', 'Дюнкерк', 'Фантастические твари и где они обитают'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Кого играет Райан Гослинг в романтическом мюзикле «Ла-Ла Ленд»?',
                options: ['Актёра', 'Джазового музыканта', 'Сценариста'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Кинематографу какой страны принадлежит фильм «Идеальные незнакомцы», который имеет множество ремейков, снятых в других странах?',
                options: ['Италии', 'Франции', 'Германии'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'В каком фильме сыграли Мэтт Дэймон и Кристиан Бэйл?',
                options: ['Ford против Ferrari', 'Тёмный рыцарь', 'Марсианин'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'Кто снял фильм «Аритмия» с Александром Яценко и Ириной Горбачёвой в главных ролях?',
                options: ['Кантемир Балагов', 'Борис Хлебников', 'Андрей Звягинцев'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'В каком фильме главную роль исполнила известная певица Леди Гага?',
                options: ['Фаворитка', 'Звезда родилась', 'Одарённая'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'В фильме «Приключения Паддингтона» главным героем является …',
                options: ['Кот', 'Мышонок', 'Медвежонок'],
                correct: 2
            },
            {
                category: 'Кино',
                question: 'Где происходит действие фильма «Мотылек» с Чарли Ханнэмом в главной роли?',
                options: ['На войне', 'В тюрьме', 'На корабле'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'В чём особенность британского военного фильма «1917»?',
                options: ['В главных ролях снялись непрофессиональные актёры', 'Полное погружение в происходящее за счёт съемки одним кадром', 'Фильм снимали на протяжении 10 лет'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Режиссёр, который снял супергеройский блокбастер «Лига справедливости».',
                options: ['Зак Снайдер', 'Кристофер Нолан', 'Джеймс Ганн'],
                correct: 0
            }
        ],
        'Советское кино': [
            {
                category: 'Кино',
                question: 'Кипящий борщ из советской фантастической романтики… Но больше всего интригуют переменчивые политические веяния, которые чувствуются в фильме',
                options: ['Чародеи', 'Человек-амфибия', 'Через тернии к звездам', 'Аэлита'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Учитывая стоимость и огромные усилия, которые были вложены в его создание, такой фильм может быть снят только один раз в истории. Самое удивительное — что это вообще произошло',
                options: ['Война и мир', 'Солярис', 'Место встречи изменить нельзя', 'А зори здесь тихие'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'Могу пересказать по кадрам фильм… Я увидел его в 1984 году, и он остался лучшим фильмом о войне за всю мою жизнь. Мальчик, входящий в дом, хозяев которого истребили нацисты, повсюду оставшиеся следы мирной жизни. Разоренное гнездо… кошмар неприкаянности',
                options: ['Офицеры', 'Иваново детство', 'Они сражались за Родину', 'Иди и смотри'],
                correct: 3
            },
            {
                category: 'Кино',
                question: 'Фильм раскрывает, пожалуй, главную всеобщую проблему — проблему отношений мужчин и женщин. И делает это душевно и остроумно. Станет ли картина предвестником нового течения советского кинематографа, сказать сложно… однако она приятно удивляет чарующей историей и выдающимися актерскими работами',
                options: ['Покровские ворота', 'Служебный роман', 'Москва слезам не верит', 'Самая обаятельная и привлекательная'],
                correct: 2
            },
            {
                category: 'Кино',
                question: 'Легко понять, как это военное приключение стало культовым — благодаря его чудаковатому остроумию, элегантной простоте и, вероятно, малобюджетным постановочным трюкам',
                options: ['Крепкий орешек', 'Белое солнце пустыни', 'Василий Теркин', 'Гусарская баллада'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Когда я хочу позволить себе момент полного наслаждения, мне достаточно посмотреть этот фильм — это вызывает у меня восторг, и на душе становится теплее',
                options: ['Солярис', 'Москва — Кассиопея', 'Бриллиантовая рука', 'Долгие проводы'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'Это странная комбинация хоррора и фэнтези, это невероятно круто! Русское кино рулит',
                options: ['Вий', 'Аленький цветочек', 'Сказка странствий', 'Морозко'],
                correct: 3
            },
            {
                category: 'Кино',
                question: 'Эстетику утильпанка, в которой снят этот фильм, можно лучше всего описать как слияние Безумного Макса с Монти Пайтоном через видение Тарковского. Она прекрасно оттеняет глубокую, трагическую и одновременно очень глупую историю персонажей картины. То, как фильм изображает варварство ежедневного угнетения, остается очень актуальным и спустя 30 лет после выхода картины. Всем, кто интересуется космической научной фантастикой, обязательно стоит ее посмотреть',
                options: ['Отроки во Вселенной', 'Кин-дза-дза!', 'Планета бурь', 'Дознание пилота Пиркса'],
                correct: 1
            },
            {
                category: 'Кино',
                question: 'Один из моих самых любимых русских фильмов — этот фильм. Одно из великих качеств российского кино — мастерство в показе чего-то малого, глубоко личного, на фоне невероятной, огромной деятельности вокруг. Русские рассказывают историю одной любви, но окружают ее тысячами человек, лошадьми, артиллерией, взрывы сотрясают воздух. И просто интересно, как выстраивается этот баланс между интимным и сюрреалистическим',
                options: ['Летят журавли', 'В бой идут одни старики', 'Офицеры', 'Двадцать дней без войны'],
                correct: 0
            },
            {
                category: 'Кино',
                question: 'Но этот фильм — это нечто большее. Он важен не столько как советская пропаганда, сколько как часть советского кинематографа… В нем соединилось столько различных отраслей кинопроизводства, сколько не используют кинодеятели ни одной другой страны в мире',
                options: ['Александр Невский', 'Иван Грозный', 'Броненосец «Потемкин', 'Стачка'],
                correct: 2
            }
        ],
        'Советские мультфильмы': [
            {
                category: 'Мультфильмы',
                question: 'Какая фамилия у Пятачка?',
                options: ['Никакая — он просто Пятачок', 'Посторонним', 'Копытцев'],
                correct: 1,
                imageUrl: 'https://n1s1.hsmedia.ru/42/ed/59/42ed5964f4640af1fd842b73d56a189d/728x397_1_41cd548e2415486167eb20cddd88979a@950x517_0xmwhqu7gJ_7122391203748619770.jpg.webp',
                fact: 'На табличке рядом с домом Пятачка есть табличка «Посторонним В.». В книге Пятачок объясняет, что так звали его дедушку — Вильям Посторонним'
            },
            {
                category: 'Мультфильмы',
                question: 'Что сказал котенок Гав в ответ на предостережение: «Не ходи туда, там тебя ждут неприятности»?',
                options: ['Они меня ждут, эти неприятности? Я пошел!', 'Ну как же туда не ходить! Они же ждут!', 'Спасибо за предупреждение, пойду в другое место'],
                correct: 0,
                imageUrl: 'https://n1s1.hsmedia.ru/70/62/61/70626124425234114d2c5358e997b677/728x410_1_83da3e8c1f0f47bb2142363b4030e739@1200x675_0xcYwVoIFP_8006547424762778340.jpg.webp',
                fact: 'Первоначально Гав предполагался рыжим и беспородным, однако впоследствии мультипликатор Леонид Шварцман решил сделать котенка породистым, взяв за основу сиамскую породу.'
            },
            {
                category: 'Мультфильмы',
                question: 'Какую песню насвистывает волк из «Ну, погоди!», поднимаясь по веревке?',
                options: ['«Прекрасное далеко».', '«Трава у дома»', '«Если друг оказался вдруг...»'],
                correct: 2,
                imageUrl: 'https://n1s1.hsmedia.ru/e3/15/7c/e3157ce9d7e4d680cc0a9be3b1ea61c5/728x410_1_d5bb7b0ca1c985eba2f11d1ca326ef7b@1200x675_0xtz0YiyFq_6290696739632388350.jpg.webp',
                fact: 'Волк насвистывает мелодию песни Высоцкого «Если друг оказался вдруг...». Такая отсылка не случайна — знаменитый музыкант должен был озвучивать персонажа, однако его не утвердили на роль цензоры из-за «тлетворного влияния Высоцкого на молодежь».'
            },
            {
                category: 'Мультфильмы',
                question: 'Сколько рук у Громозеки из «Тайны третьей планеты»?',
                options: ['2', '6', '8'],
                correct: 1,
                imageUrl: 'https://n1s1.hsmedia.ru/46/1f/29/461f2908fb41abc304f4874204eb096d/728x410_1_5e87bedc6834d5e5df6719859f540843@1200x675_0xOIbmsDSf_9194718874850437291.jpg.webp',
                fact: 'В мультфильме у Громозеки три пары рук. А вот в повести Кира Булычева у Громозеки «десять щупалец, восемь глаз, панцирь на груди и три добрых, бестолковых сердца».'
            },
            {
                category: 'Мультфильмы',
                question: 'Что подарил Медвежонок на день рождения Зайцу?',
                options: ['Он забыл подарок', 'Волшебную страну', 'Букет ромашек'],
                correct: 1,
                imageUrl: 'https://n1s1.hsmedia.ru/1e/d3/68/1ed36861da5bbd4611ab0f1b2194f772/728x410_1_f6fa6da06e90fa435013c838af05c8ad@1200x675_0xCkbtTja0_9846746843867770470.jpg.webp',
                fact: 'Медвежонок дарит Зайцу Тилимилитрямдию — волшебную страну, которую он придумывал всю ночь. А еще Мультфильм "Трям! Здравствуйте!" — это один из эпизодов запланированного мини-сериала, но из-за определенных причин авторы не смогли реализовать задуманное в полном объеме'
            },
            {
                category: 'Мультфильмы',
                question: 'Кто решает принять Маугли в стаю?',
                options: ['Волчица Ракша', 'Питон Каа', 'Пантера Багира'],
                correct: 2,
                imageUrl: 'https://n1s1.hsmedia.ru/36/cf/4f/36cf4f88d115d1e27e8fc87fd3413012/728x410_1_5912d1a40289ef60fe11b03c38c617a0@1200x675_0x0xoW3dSt_9170795366975390852.jpg.webp',
                fact: 'На совете стаи Багира спасает Маугли, предложив за его жизнь только что убитого быка.Кстати главный герой книги, Маугли, был вдохновлен сыном Редьярда Киплинга.А "Книга джунглей" стала первой книгой, которая была напечатана на бумаге, сделанной из конопли'
            },
            {
                category: 'Мультфильмы',
                question: 'За что выгнали пса из мультфильма «Жил-был пес»?',
                options: ['Пес подружился с волком, которого боялись в селе', 'Пес проспал вора, который ограбил хозяев', 'Он сам ушел от хозяев'],
                correct: 1,
                imageUrl: 'https://n1s1.hsmedia.ru/b0/15/5b/b0155b08af6b3dbac2fdd03837994ccf/728x410_1_94416e2a8d64d3c9d3c3252e5fe62957@1200x675_0xqdwrMQBp_3081245034696875435.jpg.webp',
                fact: 'Старый пес всё время спал и не проснулся даже во время кражи.Изначально, Эдуард Назаров планировал назвать свой мультфильм "Собачья жизнь". Но увидев такое название руководство рассердилось, так как чиновники усмотрели в нем какой-то скрытый смысл. Пришлось придумывать новое название для мультфильма, иначе его мультфильм так и не вышел бы на экраны.'
            },
            {
                category: 'Мультфильмы',
                question: 'Как попугай Кеша возвращается из деревни домой?',
                options: ['Его привозит тракторист', 'Он голосует на дороге и ловит машину', 'Его присылают почтой'],
                correct: 2,
                imageUrl: 'https://n1s1.hsmedia.ru/47/ff/d0/47ffd03e193273485e11a95a92abfc76/728x410_1_f4002477d38e8b403999f6a6e279bf97@1200x675_0xCuo9oIGN_5132814729827389155.jpg.webp',
                fact: 'Тракторист Василий высылает попугая обратно Вовке посылкой.Кстати, идея с мультфильмом зародилась совершенно случайно. Однажды на студии Валентин Караваев предложил Курляндскому снять простенький детский мультик и рассказал историю о попугае, которого он зимой видел улице. Пернатый улетел из дома, но не растерялся и затесался в стаю воробьев.Мультипликаторы стали додумывать историю: зачем он вылетел из квартиры? Почему не вернулся? Как ему жилось? Никто не ожидал, что попугай Кеша станет настолько популярным.'
            },
            {
                category: 'Мультфильмы',
                question: 'Что дарит бабушка Бонифацию на прощание?',
                options: ['Свитер', 'Новый сачок', 'Красивую бабочку'],
                correct: 0,
                imageUrl: 'https://n1s1.hsmedia.ru/83/ef/f8/83eff8e49c71c6b5ba04b96979002787/728x410_1_2f5504e3dc8e7f2fb6374dcd5c10167c@1200x675_0xf4rD1V8z_2404920784099863466.jpg.webp',
                fact: 'Бабушка дарит Бонифацию свитер, который вязала ему всё лето. Интересный факт: Сценарий, написанный Ф. Хитруком, концептуально изменил историю, рассказанную чешским писателем. Короткая, немного грустная сказка для детей младшего и среднего школьного возраста о цирковом льве, который пришел домой на каникулы и вместо того, чтобы без устали дарить идеи своим «маленьким, забавным племянникам», успешно превратился в довольно философскую историю о силе Доброта и Доброта Силы. в то же время сочетая мягкий юмор с лиризмом.'
            },
            {
                category: 'Мультфильмы',
                question: 'Как зовут почтальона Печкина?',
                options: ['Сергей Петрович', 'Игорь Иванович', 'Юрий Борисович', 'Никак не зовут, он просто почтальон Печкин'],
                correct: 1,
                imageUrl: 'https://n1s1.hsmedia.ru/c1/a2/a9/c1a2a987ab02c6bff6dd0e9faf3b4b20/728x410_1_c06fa5185a3cb96049dbd37ccbfb310f@1200x675_0xjoeOcQnT_8622840712371264623.jpg.webp',
                fact: 'Почтальона в Простоквашино зовут Печкин Игорь Иванович. Деревня Простоквашино существует на самом деле. Находится она в Нижегородской области и основана в 18 веке. Согласно поверью, местная хозяйка пролила удойник с молоком. Оно быстро прокисло на жаре, так и родилось название населённого пункта.'
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
                correct: 0
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

    // Add the facts for the Soviet Cinema quiz - Keeping existing facts array
    const sovietCinemaFacts = [
        'А еще «Человек-амфибия» Владимира Чеботарева и Геннадия Казанского был одним из любимых фильмов детства Квентина Тарантино. «Я даже не знал, что это русский фильм, но смотрел с большим удовольствием», — признавался режиссер.',
        '«Война и мир» Сергея Бондарчука до сих пор остается одним из самых дорогих фильмов в истории. Однако данные о бюджете картины разнятся. Так, критик Федор Раззаков считал, что стоимость съемок эпопеи составила 8 миллионов советских рублей — однако он не включил в расчет многие статьи расхода. А другие источники оценивают бюджет картины в целых 100 миллионов долларов США.',
        'Во время съемок «Иди и смотри» Элем Климов стремился к максимальной правдоподобности и потому использовал на площадке настоящие боевые снаряды: стандартные пиротехника и взрывпакеты, которые использовали для имитаций, в глазах режиссера выглядели ненатурально.',
        'Фильм «Москва слезам не верит» пришелся по душе не только советским, но и зарубежным зрителям. В 1981 году картина даже получила «Оскар» в номинации «Лучший фильм на иностранном языке». А американский президент Рональд Рейган посмотрел фильм целых восемь раз перед встречей с Михаилом Горбачевым, пытаясь понять ту самую загадочную русскую душу.',
        'Поклонником «Белого солнца пустыни» был даже Леонид Брежнев. Именно по его распоряжению картину, забракованную во время просмотра на «Мосфильме», все-таки выпустили на экраны.',
        '«Солярис» Андрея Тарковского и в наши дни превозносят как отечественные, так и западные кинокритики. А вот Станиславу Лему, автору романа, который лег в основу фильма, экранизация совершенно не понравилась. «Из-за «Соляриса» мы здорово поругались с Тарковским. Я просидел шесть недель в Москве, пока мы спорили о том, как делать фильм, потом я обозвал его дураком и уехал домой», — вспоминал писатель.',
        'Не только Элайдж Вуд (автор рецензии) оказался в восторге от кадров из «Морозко»: говорят, что советской картиной восхищался и режиссер Стивен Спилберг, который якобы называл сказку Александра Роу предтечей многих голливудских блокбастеров.',
        'Легендарный пепелац для «Кин-дза-дза!» собирал сам режиссер Георгий Данелия вместе с художником-постановщиком Теодором Тэжиком. Для этого они отпилили хвост у Ту-104, который нашли на свалке самолетов, покрыли его пенополиуретаном и придали фактуру, чтобы металл казался изношенным и ржавым.',
        'Фильм «Летят журавли» в Советском Союзе поначалу приняли холодно. Его жестко раскритиковал Никита Хрущев, а о том, что картина получила главный приз Каннского фестиваля в 1958 году, вышла лишь заметка в «Известиях» без названия и фотографий, где даже не упомянули имя режиссера Михаила Калатозова. Однако вскоре стало ясно, что фильм, который не прославлял с оптимизмом героев войны, а откровенно показывал трагедию военного времени, во многом изменил советский кинематограф.',
        '«Броненосец «Потемкин» Сергея Эйзенштейна оказал грандиозное влияние на развитие кинематографа не только в Советском Союзе, но и во всем мире. Он регулярно в наше время попадает в списки лучших фильмов всех времен и народов.'
    ];

    // Выбираем случайный набор вопросов - Moved this section up
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
            
            'Продолжай в том же духе! 🎬',
            'Ты справишься! ⭐',
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
        ],
        'Искусство': [
            'Искусство смывает пыль повседневности с души. - Пабло Пикассо 🎨',
            'Картина - это не то, что ты видишь, а то, что ты заставляешь других увидеть. - Эдгар Дега 🖼️',
            'Искусство - это ложь, которая делает нас способными понять правду. - Пабло Пикассо 🎭',
            'Каждый художник сначала был любителем. - Ральф Уолдо Эмерсон 🖌️',
            'Искусство требует знаний. - Василий Суриков 📚',
            'Рисовать - значит видеть. - Жан-Огюст-Доминик Энгр 👀',
            'Вдохновение существует, но оно должно застать вас за работой. - Пабло Пикассо ✨',
            'Цвет - это клавиши. Глаз - молоток. Душа - фортепиано со струнами. Художник - рука, которая играет. - Василий Кандинский 🎹',
            'Искусство - это способ выразить себя без слов. - Фрида Кало 🌺',
            'Красота спасет мир. - Федор Достоевский 🌟'
        ]
    };

    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;

    const gameContent = document.createElement('div');
    gameContent.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 15px;
        max-width: 800px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
    `;

    const title = document.createElement('h2');
    if (randomQuizName === 'Советское кино') {
        title.textContent = 'Викторина: Советская киноклассика';
    } else if (randomQuizName === 'Советские мультфильмы') {
        title.textContent = 'Викторина: Советские мультфильмы';
    } else {
        title.textContent = `Викторина: ${randomQuizName}`;
    }
    title.style.cssText = `
        text-align: center;
        margin-bottom: 20px;
        color: #202027;
        font-family: Montserrat;
        font-size: 28px;
        font-weight: 600;
    `;

    const progressContainer = document.createElement('div');
    progressContainer.style.cssText = `
        width: 100%;
        height: 10px;
        background: #f0f0f0;
        border-radius: 5px;
        margin-bottom: 20px;
    `;

    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        width: 0%;
        height: 100%;
        background: #4CAF50;
        border-radius: 5px;
        transition: width 0.3s ease;
    `;

    const categoryDisplay = document.createElement('p');
    categoryDisplay.style.cssText = `
        font-size: 18px;
        color: #666;
        margin-bottom: 10px;
        font-family: Montserrat;
    `;

    const questionDisplay = document.createElement('p');
    questionDisplay.style.cssText = `
        font-size: 20px;
        color: #202027;
        margin-bottom: 20px;
        font-family: Montserrat;
        font-weight: 500;
    `;

    const optionsContainer = document.createElement('div');
    optionsContainer.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
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
        max-height: 200px;
        overflow-y: auto;
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
        margin: 10px auto;
        transition: all 0.3s;
        min-width: 200px;
        display: none;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    `;

    nextButton.addEventListener('mouseover', () => {
        nextButton.style.background = '#33d17a';
        nextButton.style.color = '#202027';
        nextButton.style.transform = 'translateY(-2px)';
        nextButton.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
    });

    nextButton.addEventListener('mouseout', () => {
        nextButton.style.background = '#202027';
        nextButton.style.color = 'white';
        nextButton.style.transform = 'translateY(0)';
        nextButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
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
        margin: 10px auto 0 auto; /* Добавил отступ снизу 0 и центрирование */
        transition: all 0.3s;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        display: block; /* Чтобы margin: auto работал для центрирования */
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

    function createOptionButton(text, index) {
        const button = document.createElement('button');
        button.textContent = text;
        button.style.cssText = `
            padding: 16px 24px;
            border: 2px solid #202027;
            border-radius: 60px;
            background: white;
            color: #202027;
            cursor: pointer;
            font-size: 16px;
            font-family: Montserrat;
            transition: all 0.3s ease;
            text-align: left;
            min-width: 200px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        `;

        button.addEventListener('mouseover', () => {
            if (!button.disabled) {
                button.style.background = '#33d17a';
                button.style.color = '#202027';
                 button.style.borderColor = '#33d17a';
                 button.style.transform = 'translateY(-2px)';
                 button.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.2)';
            }
        });

        button.addEventListener('mouseout', () => {
            if (!button.disabled) {
                button.style.background = 'white';
                button.style.color = '#202027';
                button.style.borderColor = '#202027';
                button.style.transform = 'translateY(0)';
                button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        });

        button.addEventListener('click', () => {
            if (button.disabled) return;
            
            const isCorrect = index === questions[currentQuestion].correct;
            const category = questions[currentQuestion].category; // Категория из объекта вопроса

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
                // Check if it's the Soviet Cinema or Soviet Cartoons category for special display
                if (randomQuizName === 'Советские мультфильмы' && questions[currentQuestion].fact) {
                     message.innerHTML = `
                         <div style="margin-bottom: 15px; color: #33d17a;">
                            Правильно! Вот интересный факт:
                         </div>
                         ${questions[currentQuestion].imageUrl ? `<img class="quiz-fact-image" src="${questions[currentQuestion].imageUrl}" alt="Изображение по теме вопроса" style="max-width: 100%; height: auto; margin-bottom: 10px; border-radius: 8px;">` : ''}
                         <div style="font-style: italic; color: #666; border-left: 3px solid #33d17a; padding-left: 15px; margin: 10px 0; font-size: 0.9em;">
                             "${questions[currentQuestion].fact}"
                         </div>
                     `;
                     message.style.background = '#e8f5e9';
                } else if (randomQuizName === 'Советское кино' && sovietCinemaFacts[currentQuestion]) {
                     message.innerHTML = `
                         <div style="margin-bottom: 15px; color: #33d17a;">
                            Правильно! Вот интересный факт:
                         </div>
                         <div style="font-style: italic; color: #666; border-left: 3px solid #33d17a; padding-left: 15px; margin: 10px 0; font-size: 0.9em;">
                             "${sovietCinemaFacts[currentQuestion]}"
                         </div>
                     `;
                     message.style.background = '#e8f5e9';
                }
                else {
                    // For other quizzes, show compliment and quote
                    const randomCompliment = categoryCompliments[category][Math.floor(Math.random() * categoryCompliments[category].length)];
                    const randomQuote = gameMessages.quotes[Math.floor(Math.random() * gameMessages.quotes.length)];
                    message.innerHTML = `
                        <div style="margin-bottom: 15px; color: #33d17a;">
                            ${randomCompliment}
                        </div>
                        <div style="font-style: italic; color: #666; border-left: 3px solid #33d17a; padding-left: 15px; margin-top: 10px;">
                            "${randomQuote.text}" - ${randomQuote.author} ${randomQuote.emoji}
                        </div>
                    `;
                    message.style.background = '#e8f5e9';
                }
            } else {
                // Incorrect answer logic
                // Check if it's the Soviet Cinema or Soviet Cartoons category to display fact instead of motivation/quote
                 if (randomQuizName === 'Советские мультфильмы' && questions[currentQuestion].fact) {
                    message.innerHTML = `
                         <div style="margin-bottom: 15px; color: #202027;">
                            Неправильно! Правильный ответ: ${questions[currentQuestion].options[questions[currentQuestion].correct]}
                         </div>
                         ${questions[currentQuestion].imageUrl ? `<img  class="quiz-fact-image" src="${questions[currentQuestion].imageUrl}" alt="Изображение по теме вопроса" style="max-width: 100%; height: auto; margin-bottom: 10px; border-radius: 8px;">` : ''}
                         <div style="font-style: italic; color: #666; border-left: 3px solid #202027; padding-left: 15px; margin: 10px 0; font-size: 0.9em;">
                            Вот интересный факт: "${questions[currentQuestion].fact}"
                         </div>
                    `;
                    message.style.background = '#f5f5f5';
                } else if (randomQuizName === 'Советское кино' && sovietCinemaFacts[currentQuestion]) {
                     message.innerHTML = `
                         <div style="margin-bottom: 15px; color: #202027;">
                            Неправильно! Правильный ответ: ${questions[currentQuestion].options[questions[currentQuestion].correct]}
                         </div>
                         <div style="font-style: italic; color: #666; border-left: 3px solid #202027; padding-left: 15px; margin: 10px 0; font-size: 0.9em;">
                            Вот интересный факт: "${sovietCinemaFacts[currentQuestion]}"
                         </div>
                     `;
                     message.style.background = '#f5f5f5';
                } else {
                    // For other quizzes or if fact/image is not available, show incorrect message and a motivational phrase
                    const randomMotivation = gameMessages.motivation[Math.floor(Math.random() * gameMessages.motivation.length)];
                    message.innerHTML = `
                        <div style="margin-bottom: 15px; color: #202027;">
                            Неправильно! Правильный ответ: ${questions[currentQuestion].options[questions[currentQuestion].correct]}
                        </div>
                        <div style="font-style: italic; color: #666; border-left: 3px solid #202027; padding-left: 15px; margin-top: 10px;">
                            "${randomMotivation}"
                        </div>
                    `;
                     message.style.background = '#f5f5f5';
                }
            }

            nextButton.style.display = 'inline-block';
        });

        return button;
    }

    function showQuestion() {
        const question = questions[currentQuestion];
        currentCategory = question.category; // Update current category

        // Set category display text
        if (randomQuizName === 'Советское кино') {
            // Introductory text for the Soviet Cinema quiz on all questions
            categoryDisplay.textContent = 'Угадайте фильм по зарубежной рецензии:'; // Changed introductory text and condition
        } else if (randomQuizName === 'Советские мультфильмы') {
             categoryDisplay.textContent = 'Викторина: Советские мультфильмы'; // Title for the new cartoon quiz
        }
        else {
             // For other quizzes, show the category name
             categoryDisplay.textContent = question.category;
        }

        // Always display the question number and text in questionDisplay
        questionDisplay.textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}: ${question.question}`;
        message.textContent = ''; // Clear previous message
        message.style.background = '#f8f8f8'; // Reset background for new question

        progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            optionsContainer.appendChild(createOptionButton(option, index));
        });

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
        max-height: 90vh; /* Limit height to enable scrolling */
        overflow-y: auto; /* Enable vertical scrolling */
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
    statsContainer.classList.add('rps-stats-container');

    const createStatBox = (label, value) => {
        const box = document.createElement('div');
        box.style.cssText = `
            text-align: center;
            padding: 10px;
        `;
        
        const labelEl = document.createElement('div');
        labelEl.textContent = label;
        labelEl.style.cssText = `
            font-size: ${window.innerWidth <= 768 ? '14px' : '16px'};
            color: #666;
            margin-bottom: 5px;
        `;
        
        const valueEl = document.createElement('div');
        valueEl.textContent = value;
        valueEl.style.cssText = `
            font-size: ${window.innerWidth <= 768 ? '18px' : '24px'};
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
        gap: ${window.innerWidth <= 768 ? '10px' : '20px'};
    `;

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = `${emojis[choice]} ${choice}`;
        button.style.cssText = `
            padding: ${window.innerWidth <= 768 ? '10px 10px' : '15px 30px'};
            font-size: ${window.innerWidth <= 768 ? '18px' : '24px'};
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
                gameMessages.compliments[Math.floor(Math.random() * gameMessages.compliments.length)] :
                result === 'Ничья!' ? 
                    'Ничья! Попробуй еще раз! 🤝' :
                    gameMessages.motivation[Math.floor(Math.random() * gameMessages.motivation.length)];
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
        max-height: 90vh; /* Limit height to enable scrolling */
        overflow-y: auto; /* Enable vertical scrolling */
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

        if (score % 2 === 0) {
            message.innerHTML = getRandomQuote();
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