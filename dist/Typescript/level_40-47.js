"use strict";
/*
№1 Создайте три объекта, реализующих следующий интерфейс:
interface Employee {
    name: string,
    age: number,
    salaryday: number
}
 */
Object.defineProperty(exports, "__esModule", { value: true });
let employee1 = { name: 'IVAN', age: 20, salaryDay: 200 };
let employee2 = { name: 'EGOR', age: 30, salaryDay: 500 };
let employee3 = { name: 'VLAD', age: 20, salaryDay: 20000 };
console.log(employee1);
console.log(employee2);
console.log(employee3);
let time1 = { hour: 4, minute: 4, second: 4 };
let time2 = { hour: 5, minute: 6, second: 7 };
let time3 = { hour: 14, minute: 24, second: 43 };
console.log(time1);
console.log(time2);
console.log(time3);
/*
№1Сделайте объект со страной, содержащий название страницы и массив ее городов.
 */
let country;
country = {
    name: 'Belarus',
    cities: ['Минск', 'Брест', 'Витебск', 'Гомель', 'Гродно', 'Могилёв']
};
console.log(country);
let country2 = {
    name: 'Belarus',
    cities: ['Минск', 'Брест', 'Витебск', 'Гомель', 'Гродно', 'Могилёв']
};
console.log(country2);
let event = {
    name: 'my new event',
    time: {
        start: '2025-11-01',
        finish: '2025-12-31'
    }
};
console.log(event);
const employee = {
    name: 'andrew',
    potision: {
        name: 'programmer',
        salary: 1000,
    },
    addr: {
        country: 'belarus',
        city: 'minsk'
    }
};
console.log(employee);
const employees = {
    name: 'andrew',
    potision: {
        name: 'programmer',
        salary: 1000,
    },
    addr: {
        country: 'belarus',
        city: 'minsk'
    }
};
console.log(employees);
const user = {
    name: 'john',
    age: 30,
    parents: {
        mother: {
            name: 'jane',
            age: 30,
            parents: null
        },
        father: {
            name: 'eric',
            age: 30,
            parents: null
        }
    }
};
console.log(user);
/*
№2 Сделайте массив, элементы которого будут промисами.
 */
const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve('сервер1'), 1000);
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve('сервер2'), 2000);
});
const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve('сервер3'), 1500);
});
const ArrayPromises = [promise1, promise2, promise3];
console.log(ArrayPromises);
const arrWorkers = [];
arrWorkers.push({ name: 'Oleg', age: 45, salary: 34556 });
arrWorkers.push({ name: 'Vlad', age: 20, salary: 234556 });
console.log(arrWorkers);
//# sourceMappingURL=level_40-47.js.map