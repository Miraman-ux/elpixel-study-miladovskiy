"use strict";
/*
№1 Сделайте функцию, которая принимать параметрами день, месяц и год,
и возвращать день недели, соответствующий этой дате.
Пусть все три параметра будут не обязательными. Если какой-то параметр не передан, он должен принять значение, соответствующее текущей дате.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getDateOfWeek(year, month, day) {
    const currentDate = new Date();
    const finalYear = year ?? currentDate.getFullYear();
    const finalMonth = month !== undefined ? month - 1 : currentDate.getMonth();
    const finalDay = day ?? currentDate.getDate();
    const targetDate = new Date(finalYear, finalMonth, finalDay);
    const DaysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    return DaysOfWeek[targetDate.getDay()];
}
const day1 = getDateOfWeek(2005, 8, 12);
console.log(day1);
/*
№1 Сделайте функцию, которая будет возводить число в заданную степень.
Пусть первым параметром функция принимает число, а вторым - степень. Пусть второй параметр будет необязательным, и по умолчанию функция возводит число во вторую степень.
 */
function getPowerOfNumber(num, power = 2) {
    return Math.pow(num, power);
}
const num1 = getPowerOfNumber(3, 3);
console.log(num1);
/*
№1 Сделайте функцию, которая параметрами принимает любое количество чисел,
а возвращает их сумму.
 */
function getSumOfNumber(...num) {
    let sum = 0;
    for (const arr of num) {
        sum += arr;
    }
    return sum;
}
const num2 = getSumOfNumber(3, 3, 5);
console.log(num2);
/*
№1 Укажите переменной тип функции:
let func = function(text: string): void {
    alert(text);
};
 */
const func = function (text) {
    alert(text);
};
const func1 = function (x, y, z) {
    return x + y + z;
};
let res = func1(1, 2, 3);
console.log(res);
/*
№1 Переделайте следующую функцию на стрелочную:

let func = function(num1: number, num2: number): number {
    return num1 + num2;
}
 */
const func2 = (num1, num2) => num1 + num2;
console.log(func2(2, 3));
/*
№2 Переделайте следующую функцию на стрелочную:

let func = function(str: string): string[] {
    return str.split('');
}
 */
const func3 = (str) => str.split('');
console.log(func3('abcde'));
/*
№3 Перепишите следующий JavaScript код на TypeScript вариант:
let arr = [1, 2, 3];
let res = arr.map(num => num ** 2);

console.log(res);
 */
let arr = [1, 2, 3];
let res2 = arr.map(num => num ** 2);
console.log(res2);
//# sourceMappingURL=level_48-55.js.map