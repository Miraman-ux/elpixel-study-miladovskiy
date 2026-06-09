/*
№1 Дана строка: 'abcde' Получите массив букв этой строки.
 */

let task1String = 'abcde';
let task1Array = task1String.split('');
console.log(task1Array);

/*
№2 Дано некоторое число: 12345 Получите массив цифр этого числа.
 */

let task2Number = 12345;
let task2String = task2Number.toString().split('').map(Number);
console.log(task2String);

/*
№3
Дано некоторое число: 12345
Переверните его: 54321
 */

let task3Number = 12345;
let task3String = task3Number.toString();
let task3Array = [];

for (let i = 0; i < task3String.length; i++) {
    task3Array.unshift(+task3String[i]);
}

console.log(task3Array);

/*
Дано некоторое число: 12345 Найдите сумму цифр этого числа.
 */

let task4Number = 12345;
let task4String = task4Number.toString();
let task4Array = [];
let sum = 0;

for (let i = 0; i < task4String.length; i++) {
    task4Array.push(+task4String[i]);
    sum += task4Array[i];
}

console.log(sum);