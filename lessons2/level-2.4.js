/*
№1 Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.
 */

let task1String = 'a1b2c3d4e5';
let numPosition = -1;

for (let i = 0; i < task1String.length; i++) {
    if (task1String[i] >= '0' && task1String[i] <= '9' ) {
        numPosition = i;
        break;
    }
}

if (numPosition === -1) {
    console.log("there are no numbers in this line")
}else{
    console.log(`position of a digit in a string: ${numPosition + 1}`);
}

/*
№2 Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.
 */

const task2Object = {
    name: 'Vlad',
    age: 20,
    city: 'Gomel'
}

const keysArray = Object.keys(task2Object);
const valuesArray = Object.values(task2Object);

console.log(keysArray);
console.log(valuesArray);

/*
№3 Дано число. Выведите в консоль количество четных цифр в этом числе.
 */

let number = 3469285;
let numberToString = number.toString();
let evenCount = 0;

for (let i = 0; i < numberToString.length; i++) {
    if (numberToString[i] % 2 === 0 ) {
        evenCount++;
    }
}

console.log(`${evenCount} even`);

/*
№4

Дана некоторая строка: 'abcde'
Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее: 'AbCdE'
 */

let task4String = 'abcde';
let resultSrting = '';

for (let i = 0; i < task4String.length; i++) {
    if (i % 2 === 0) {
        resultSrting += task4String[i].toUpperCase();
    }else{
        resultSrting += task4String[i];
    }
}

console.log(`converted string:  ${resultSrting}`);


/*
№5 Дана некоторая строка со словами: 'aaa bbb ccc'
Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее: 'Aaa Bbb Ccc'
 */

let task5String = 'aaa bbb ccc';
let splitArray = task5String.split(' ');
let resultElements = [];

for (let i = 0; i < splitArray.length; i++) {
    let word = splitArray[i];

    let firstCharUpper = word[0].toUpperCase() + word.slice(1);

    resultElements.push(firstCharUpper);
}

let task5ResultStringArray = resultElements.join(' ');



console.log(task5ResultStringArray);