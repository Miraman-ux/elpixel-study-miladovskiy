/*
№1 Дана некоторая строка:
'a bc def ghij'
Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
'A BC DEF ghij'
 */

let task1String = 'a bc def ghij';
let task1SplitString = task1String.split(' ');
let task1ResultArray = [];

for (let i = 0; i < task1SplitString.length; i++) {
    let word = task1SplitString[i];

    if(word.length <= 3){
        task1ResultArray.push(word.toUpperCase());
    }else{
        task1ResultArray.push(word);
    }
}

let task1ResultString = task1ResultArray.join(' ');

console.log(task1ResultString);

/*
№2 Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
 */
let char = 'A';

if (char === char.toUpperCase()) {
    console.log("uppercase letter");
}else{
    console.log("lowercase letter");
}

/*
№3

Дано некоторое число, например, такое: 123789
Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат: 28
 */


let task3Number = 123789;
let convertToString = task3Number.toString();
let task3ResultString = '';

for (let i = 0; i < convertToString; i++) {
    let numbers = convertToString[i];

    if (numbers % 2 === 0){
        task3ResultString += numbers;
    }
}

let resultNumber = Number(task3ResultString);

console.log(resultNumber);