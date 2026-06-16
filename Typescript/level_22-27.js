"use strict";
/*
№1
Сделайте кортеж, который будет хранить номер года и номер месяца.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const DateRecord = [2020, 10];
console.log(DateRecord[0]);
console.log(DateRecord[1]);
/*
№2
Сделайте кортеж, который будет хранить номер года и название месяца.
 */
const DateRecord2 = [2020, 'August'];
console.log(DateRecord2[0]);
console.log(DateRecord2[1]);
/*
№3
Сделайте кортеж, который будет хранить номер года, номер месяца и номер дня.
 */
const DateRecord3 = [2020, 5, 15];
console.log(DateRecord3[0]);
console.log(DateRecord3[1]);
console.log(DateRecord3[2]);
/*
№1
Дан следующий кортеж:
let time: [number, number, number] = [12, 59, 59];
Разбейте части времени в отдельные переменные.
 */
let time = [12, 59, 59];
let [firstNum, secondNum, thirdNum] = time;
console.log(firstNum);
/*
№1

Заполните данными следующий кортеж:

let tpl: [string, string, ...number[]];
 */
let tpl;
tpl = ['abc', 'efg', 2, 3, 4, 5, 6, 7];
console.log(tpl);
/*
№2 Заполните данными следующий кортеж:
let tpl: [number, boolean, ...string[]];
 */
let tpl2;
tpl2 = [1, true, 'abc', 'defg', '123'];
console.log(tpl2);
//# sourceMappingURL=level_22-27.js.map