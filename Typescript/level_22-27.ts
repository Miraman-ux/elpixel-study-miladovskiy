/*
№1
Сделайте кортеж, который будет хранить номер года и номер месяца.
 */

const DateRecord: [number, number] = [2020, 10];
console.log(DateRecord[0]);
console.log(DateRecord[1]);

/*
№2
Сделайте кортеж, который будет хранить номер года и название месяца.
 */

const DateRecord2: [number, string] = [2020, 'August'];
console.log(DateRecord2[0]);
console.log(DateRecord2[1]);

/*
№3
Сделайте кортеж, который будет хранить номер года, номер месяца и номер дня.
 */

const DateRecord3: [number, number, number] = [2020, 5, 15];
console.log(DateRecord3[0]);
console.log(DateRecord3[1]);
console.log(DateRecord3[2]);

/*
№1
Дан следующий кортеж:
let time: [number, number, number] = [12, 59, 59];
Разбейте части времени в отдельные переменные.
 */

let time: [number, number, number] = [12, 59, 59];

let [firstNum, secondNum, thirdNum] = time;
console.log(firstNum);

/*
№1

Заполните данными следующий кортеж:

let tpl: [string, string, ...number[]];
 */

let tpl: [string, string, ...number[]];

tpl = ['abc', 'efg', 2, 3, 4, 5, 6, 7];

console.log(tpl);

/*
№2 Заполните данными следующий кортеж:
let tpl: [number, boolean, ...string[]];
 */

let tpl2: [number, boolean, ...string[]];

tpl2 = [1, true, 'abc', 'defg', '123'];
console.log(tpl2);



