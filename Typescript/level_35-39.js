"use strict";
/*
№1
Сделайте переменную, которая будет содержать объект с датой.
 */
Object.defineProperty(exports, "__esModule", { value: true });
let date = new Date(2033, 5, 30);
console.log(date);
/*
№1 Сделайте переменную, которая будет содержать регулярное выражение.
 */
let reg = new RegExp(".+?");
console.log(reg);
/*
№1 Сделайте переменную, которая будет содержать promise.
 */
const promise = new Promise((resolve) => {
    setTimeout(() => resolve('сервер 1'), 1000);
});
console.log(promise);
const myElement = document.createElement("div");
/*
№3 Сделайте переменную, которая будет содержать ссылку на тег ul.
 */
const textList = document.createElement("ul");
/*
№1 Сделайте переменную, которая будет содержать коллекцию Map.
 */
const userAgeMap = new Map();
userAgeMap.set("eric", 10);
userAgeMap.set("john", 10);
/*
№2 Сделайте переменную, которая будет содержать коллекцию Set.
 */
const uniqueNumbers = new Set();
uniqueNumbers.add(20);
uniqueNumbers.add(5);
/*
№3 Сделайте переменную, которая будет содержать коллекцию NodeList.
 */
const listItems = document.querySelectorAll('li');
/*
№4 Сделайте переменную, которая будет содержать коллекцию HTMLCollection
 */
const divsCollection = document.getElementsByTagName('div');
//# sourceMappingURL=level_35-39.js.map