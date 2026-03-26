// Практична робота 1
console.log('JavaScript завантажено успішно!');

// ========================================
// Завдання 2: Робота з консоллю
// ========================================
console.log('=== Різні методи консолі ===');
// Звичайне повідомлення
console.log('Це звичайне повідомлення');
// Помилка
console.error('Це повідомлення про помилку');
// Попередження
console.warn('Це попередження');
// Інформація
console.info('Це інформаційне повідомлення');
// Виведення кількох значень
console.log('Число:', 42, 'Рядок:', 'Hello', 'Boolean:', true);

// 2.2
// Створення об'єкта
const student = {
    name: 'Іван Петренко',
    age: 20,
    course: 1,
    specialty: 'Інженерія ПЗ'
};
// Виведення об'єкта
console.log('Студент:', student);
// Таблична форма
console.table(student);
// Детальна інформація
console.dir(student);

// 2.3
// Групування
console.group('Група повідомлень');
console.log('Повідомлення 1');
console.log('Повідомлення 2');
console.log('Повідомлення 3');
console.groupEnd();
// Згорнута група
console.groupCollapsed('Згорнута група');
console.log('Це приховано за замовчуванням');
console.groupEnd();

// 2.4
// Вимірювання часу виконання
console.time('Цикл');
for (let i = 0; i < 1000000; i++) {
// Якась операція
}
console.timeEnd('Цикл');

// 2.5
// Assert - виведе повідомлення тільки якщо умова
false
let score = 75;
console.assert(score >= 90, 'Оцінка недостатньо висока');
console.assert(score >= 50, 'Оцінка прийнятна');

// ========================================
// Завдання 3: Змінні та типи даних
// ========================================
console.log('\n=== Змінні ===');
// let - для змінних величин
let studentName = 'Кононенко Максим';
let age = 17;
let isStudent = true;
console.log('Ім\'я:', studentName);
console.log('Вік:', age);
console.log('Студент:', isStudent);
// Зміна значення
age = 20;
console.log('Новий вік:', age);
// const - для констант
const PI = 3.14159;
const MAX_STUDENTS = 30;
const UNIVERSITY_NAME = 'МНТУ ім. Ю. Бугая';
console.log('PI:', PI);
console.log('Максимум студентів:', MAX_STUDENTS);
console.log('Університет:', UNIVERSITY_NAME);
// Спроба змінити константу (закоментовано, щоб небуло помилки)
// PI = 3.14; // Помилка!

// 3.2
console.log('\n=== Типи даних ===');
// Number
let integerNumber = 42;
let floatNumber = 3.14;
let negativeNumber = -10;
console.log('Ціле число:', integerNumber, typeof
integerNumber);
console.log('Дробове число:', floatNumber, typeof
floatNumber);
console.log('Від\'ємне число:', negativeNumber, typeof
negativeNumber);
// String
let singleQuotes = 'Рядок в одинарних лапках';
let doubleQuotes = "Рядок в подвійних лапках";
let templateLiteral = `Шаблонний рядок`;
console.log(singleQuotes, typeof singleQuotes);
console.log(doubleQuotes, typeof doubleQuotes);
console.log(templateLiteral, typeof templateLiteral);
// Boolean
let isOnline = true;
let hasAccess = false;
console.log('Online:', isOnline, typeof isOnline);
console.log('Access:', hasAccess, typeof hasAccess);
// Undefined
let notDefined;
console.log('Not defined:', notDefined, typeof
notDefined);
// Null
let emptyValue = null;
console.log('Empty:', emptyValue, typeof emptyValue);
// Спеціальні числові значення
let infinity = Infinity;
let notANumber = NaN;
console.log('Infinity:', infinity);
console.log('NaN:', notANumber);
console.log('5 / 0 =', 5 / 0);
console.log('"text" * 2 =', 'text' * 2);

// 3.3
console.log('\n=== Перетворення типів ===');
// Автоматичне перетворення
console.log('5 + 3 =', 5 + 3); // 8
console.log('"5" + 3 =', '5' + 3); // "53"
console.log('"5" - 3 =', '5' - 3); // 2
console.log('"5" * "2" =', '5' * '2'); // 10
// Явне перетворення в Number
let strNumber = '123';
console.log('String "123":', strNumber, typeof
strNumber);
console.log('Number("123"):', Number(strNumber),
typeof Number(strNumber));
console.log('parseInt("123"):', parseInt(strNumber));
console.log('parseFloat("3.14"):',
parseFloat('3.14'));
console.log('+"123":', +'123');
// Явне перетворення в String
let num = 456;
console.log('Number 456:', num, typeof num);
console.log('String(456):', String(num), typeof
String(num));
console.log('(456).toString():', num.toString(),
typeof num.toString());
// Явне перетворення в Boolean
console.log('Boolean(1):', Boolean(1));
console.log('Boolean(0):', Boolean(0));
console.log('Boolean("hello"):', Boolean('hello'));
console.log('Boolean(""):', Boolean(''));
console.log('Boolean(null):', Boolean(null));
console.log('Boolean(undefined):',
Boolean(undefined));

// Додаткове завдання
const myName = 'Макс';
const myAge = 17;
const myGroup = 'IK-41';
const averageGrade = 75;
console.log('\n=== Мої дані ===');
console.log('Ім\'я:', myName, '| Тип:', typeof myName);
console.log('Вік:', myAge, '| Тип:', typeof myAge);
console.log('Група:', myGroup, '| Тип:', typeof myGroup);
console.log('Середній бал:', averageGrade, '| Тип:', typeof averageGrade);

// Приклади перетворення типів
console.log('1) Number("25") =', Number('25'));
console.log('2) String(100) =', String(100));
console.log('3) Boolean(1) =', Boolean(1));
console.log('4) Boolean(0) =', Boolean(0));
console.log('5) parseFloat("12.5") =', parseFloat('12.5'));

// ========================================
// Завдання 4: Робота з рядками
// ========================================
console.log('\n=== Рядки ===');
// Створення рядків
let firstName = 'Максим';
let lastName = 'Кононенко';
// Конкатенація (об'єднання)
let fullName1 = firstName + ' ' + lastName;
console.log('Повне ім\'я (конкатенація):', fullName1);
// Template literals (шаблонні рядки)
let fullName2 = `${firstName} ${lastName}`;
console.log('Повне ім\'я (template):', fullName2);
let studentAge = 17;
let greeting = `Вітаю, ${firstName}! Вам ${studentAge} років.`;
console.log(greeting);
// Багаторядковий рядок
let address = `Вулиця Шевченка, 123 Київ, 01001 Україна`;
console.log('Адреса:\n' + address);

// 4.2
// Довжина рядка
let text = 'JavaScript';
console.log('Рядок:', text);
console.log('Довжина:', text.length);
// Доступ до символів
console.log('Перший символ:', text[0]);
console.log('Останній символ:', text[text.length -
1]);
console.log('charAt(4):', text.charAt(4));
// Зміна регістру
console.log('toLowerCase():', text.toLowerCase());
console.log('toUpperCase():', text.toUpperCase());
// Пошук підрядка
let sentence = 'Я вивчаю JavaScript в університеті';
console.log('indexOf("JavaScript"):',
sentence.indexOf('JavaScript'));
console.log('includes("JavaScript"):',
sentence.includes('JavaScript'));
console.log('startsWith("Я"):',
sentence.startsWith('Я'));
console.log('endsWith("університеті"):',
sentence.endsWith('університеті'));
// Вирізання підрядка
console.log('slice(0, 10):', sentence.slice(0, 10));
console.log('substring(10, 20):',
sentence.substring(10, 20));
// Заміна
let oldText = 'Я люблю Python';
let newText = oldText.replace('Python', 'JavaScript');
console.log('Заміна:', newText);

// Розділення рядка
let fruits = 'яблуко,груша,банан,апельсин';
let fruitsArray = fruits.split(',');
console.log('Split:', fruitsArray);
// Видалення пробілів
let messyText = ' Текст з пробілами ';
console.log('trim():', messyText.trim());
console.log('trimStart():', messyText.trimStart());
console.log('trimEnd():', messyText.trimEnd());
// Повторення
console.log('repeat(3):', 'Hi! '.repeat(3));

// Додаткове завдання
const university = 'Коледж';
const faculty = 'Факультет інформаційних технологій';
const specialty = 'Інженерія програмного забезпечення';
const fullStudyInfo = `Я навчаюся в закладі "${university}" на ${faculty}, спеціальність - ${specialty}.`;
console.log(fullStudyInfo);
console.log('Довжина речення:', fullStudyInfo.length);
console.log('У верхньому регістрі:', fullStudyInfo.toUpperCase());
console.log('Чи містить слово "Факультет":', fullStudyInfo.includes('Факультет'));
console.log('Перші 4 символів:', fullStudyInfo.slice(0, 25));
console.log('Заміна слова:', fullStudyInfo.replace('Коледж', 'Мій коледж'));

// ========================================
// Завдання 5: Математичні операції
// ========================================
console.log('\n=== Математичні операції ===');
// Арифметичні оператори
let a = 10;
let b = 3;
console.log(`a = ${a}, b = ${b}`);
console.log('Додавання (a + b):', a + b);
console.log('Віднімання (a - b):', a - b);
console.log('Множення (a * b):', a * b);
console.log('Ділення (a / b):', a / b);
console.log('Залишок (a % b):', a % b);
console.log('Піднесення до степеня (a ** b):', a **
b);
// Інкремент та декремент
let counter = 5;
console.log('\nПочаткове значення counter:', counter);
counter++;
console.log('Після counter++:', counter);
counter--;
console.log('Після counter--:', counter);
++counter;
console.log('Після ++counter:', counter);
--counter;
console.log('Після --counter:', counter);

// 5.2
console.log('\n=== Об\'єкт Math ===');
// Константи
console.log('Math.PI:', Math.PI);
console.log('Math.E:', Math.E);
// Округлення
let roundedNums = 4.7;
console.log(`Число: ${roundedNums}`);
console.log('Math.round():', Math.round(roundedNums)); // 5
console.log('Math.ceil():', Math.ceil(roundedNums)); // 5
console.log('Math.floor():', Math.floor(roundedNums)); // 4
console.log('Math.trunc():', Math.trunc(roundedNums)); // 4
// Абсолютне значення
console.log('Math.abs(-10):', Math.abs(-10));
// Степінь та корінь
console.log('Math.pow(2, 3):', Math.pow(2, 3)); // 2^3 = 8
console.log('Math.sqrt(16):', Math.sqrt(16)); // 4
console.log('Math.cbrt(27):', Math.cbrt(27)); // 3 (кубічний корінь)
// Мінімум та максимум
console.log('Math.min(5, 3, 8, 1):', Math.min(5, 3, 8, 1));
console.log('Math.max(5, 3, 8, 1):', Math.max(5, 3, 8, 1));

// Випадкові числа
console.log('Math.random():', Math.random()); // 0 <= x < 1
// Випадкове число від 1 до 10
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log('Випадкове число (1-10):', randomNum);
// Тригонометрія
console.log('Math.sin(Math.PI / 2):', Math.sin(Math.PI / 2));
console.log('Math.cos(0):', Math.cos(0));

// 5.3
console.log('\n=== Практичні обчислення ===');
// Площа кола
let radius = 5;
let circleArea = Math.PI * Math.pow(radius, 2);
console.log(`Площа кола з радіусом ${radius}:`,
circleArea.toFixed(2));
// Гіпотенуза (теорема Піфагора)
let side1 = 3;
let side2 = 4;
let hypotenuse = Math.sqrt(Math.pow(side1, 2) +
Math.pow(side2, 2));
console.log(`Гіпотенуза для катетів ${side1} і
${side2}:`, hypotenuse);
// Відсотки
let originalPrice = 1000;
let discount = 20; // 20%
let finalPrice = originalPrice * (1 - discount / 100);
console.log(`Ціна ${originalPrice} зі знижкою
${discount}%:`, finalPrice);
// Середнє арифметичне
let grades = [85, 90, 78, 92, 88];
let sum = grades.reduce((a, b) => a + b, 0);
let average = sum / grades.length;
console.log('Оцінки:', grades);
console.log('Середній бал:', average.toFixed(2));

// Додаткове завдання
let rectLength = 8;
let rectWidth = 5;
let rectArea = rectLength * rectWidth;
let rectPerimeter = 2 * (rectLength + rectWidth);
console.log('Площа прямокутника:', rectArea);
console.log('Периметр прямокутника:', rectPerimeter);

let cylinderRadius = 4;
let cylinderHeight = 10;
let cylinderVolume = Math.PI * Math.pow(cylinderRadius, 2) * cylinderHeight;
console.log('Об\'єм циліндра:', cylinderVolume.toFixed(2));

let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log('5 випадкових чисел від 1 до 100:', randomNumbers);

let completedTasks = 5;
let totalTasks = 6;
let completionPercent = (completedTasks / totalTasks) * 100;
console.log('Відсоток виконання завдань:', completionPercent.toFixed(2) + '%');

// ========================================
// Завдання 6: Інтерактивна програма
// ========================================
console.log('\n=== Інтерактивна програма ===');
// Запуск тільки якщо користувач підтвердить
if (confirm('Запустити інтерактивну програму?')) {
    // Отримання імені користувача
    let userName = prompt('Як вас звуть?', 'Ім\'я');

    if (userName) {
        alert(`Вітаємо, ${userName}!`);
        console.log(`Користувач: ${userName}`);

        // Простий калькулятор
        let num1 = parseFloat(prompt('Введіть перше число:', '0'));
        let num2 = parseFloat(prompt('Введіть друге число:', '0'));

    if (!isNaN(num1) && !isNaN(num2)) {
        let resultSum = num1 + num2;
        let resultMult = num1 * num2;
        let message = `Результати обчислень: ${num1} + ${num2} = ${resultSum} ${num1} × ${num2} = ${resultMult}`;
        alert(message);
        console.log(message);
    } else {
        alert('Помилка: введені некоректні числа');
    }
  }
}

// Калькулятор віку
const calculateButton =
document.getElementById('calculateAge');
const birthYearInput =
document.getElementById('birthYear');
const ageResultDiv =
document.getElementById('ageResult');
calculateButton.addEventListener('click', function() {
const birthYear = parseInt(birthYearInput.value);
if (isNaN(birthYear)) {
    ageResultDiv.textContent = 'Будь ласка, введіть коректний рік народження';
    ageResultDiv.style.color = '#dc3545'; return;
}
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
if (age < 0) {
    ageResultDiv.textContent = 'Рік народження не може бути в майбутньому';
    ageResultDiv.style.color = '#dc3545';
} else if (age > 150) {
    ageResultDiv.textContent = 'Будь ласка, введіть реальний рік народження';
    ageResultDiv.style.color = '#dc3545';
} else {
    ageResultDiv.textContent = `Вам ${age} років`;
    ageResultDiv.style.color = '#667eea';
    console.log(`Розраховано вік: ${age} років (рік народження: ${birthYear})`);
}
});

// Додаткова функція - конвертер температури
const convertTempButton = document.getElementById('convertTemp');
const celsiusInput = document.getElementById('celsiusInput');
const tempResultDiv = document.getElementById('tempResult');

convertTempButton.addEventListener('click', function () {
  const celsius = parseFloat(celsiusInput.value);

  if (isNaN(celsius)) {
    tempResultDiv.textContent = 'Будь ласка, введіть коректну температуру';
    tempResultDiv.style.color = '#dc3545';
    return;
  }

  const fahrenheit = (celsius * 9 / 5) + 32;
  tempResultDiv.textContent = `${celsius} °C = ${fahrenheit.toFixed(2)} °F`;
  tempResultDiv.style.color = '#667eea';
  console.log(`Конвертація температури: ${celsius} °C = ${fahrenheit.toFixed(2)} °F`);
});
