"use strict";
/*
№1 Создайте интерфейс IMath со свойствами num1 и num2.

№2 Создайте интерфейс IMath со свойствами num1 и num2, а также методом getSum, который будет суммировать оба числа.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const calc = {
    num1: 2,
    num2: 2,
    getSum() {
        return this.num1 + this.num2;
    }
};
console.log(calc);
const user = {
    name: 'Ivan',
    age: 18,
    salary: 23345,
    checkAge() {
        if (this.age < 18) {
            console.log("access denied");
        }
        else {
            console.log(this.age);
        }
    }
};
const date = {
    year: 2020,
    month: 2020,
};
console.log(date);
const func = function (str1, str2) {
    return str1 + ' ' + str2;
};
console.log(func('abc', 'ddf'));
const func1 = function (num1) {
    const arr = [];
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0) {
            arr.push(i);
        }
    }
    return arr;
};
console.log(func1(12));
const func2 = function (str1) {
    const arr = str1.split(' ');
    return arr;
};
console.log(func2('abc 4454 ttt uu'));
const arr = [1, 3, 4, 5];
console.log(arr);
const obj = { 1: 'a', 2: 'b', 3: 'c' };
console.log(obj);
class Math {
    num1;
    num2;
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    getDiv() {
        return this.num1 / this.num2;
    }
}
const math1 = new Math(4, 2);
console.log(math1.getDiv());
class Employee {
    name;
    birthday;
    salary;
    language;
    constructor(name, birthday, salary, language) {
        this.name = name;
        this.birthday = birthday;
        this.salary = salary;
        this.language = language;
    }
}
//# sourceMappingURL=level_19-28.js.map