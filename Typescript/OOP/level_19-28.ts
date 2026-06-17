/*
№1 Создайте интерфейс IMath со свойствами num1 и num2.

№2 Создайте интерфейс IMath со свойствами num1 и num2, а также методом getSum, который будет суммировать оба числа.
 */

interface IMath {
    num1: number;
    num2: number;

    getSum(): number;
}

const calc : IMath = {
    num1 : 2,
    num2 : 2,

    getSum(): number {
        return this.num1 + this.num2;
    }
}

console.log(calc);


/*
№1 Для интерфейса IUser, реализуйте метод для проверки возраста. Если возраст юзера меньше 18, пусть отобразится сообщение о том, что доступ запрещен.

№1 Создайте интерфейс IUser, в котором свойство salary будет доступным только для чтения.
 */

interface IUser {
    name: string;
    age: number;
    readonly salary: number;

    checkAge(): void;
}

const user: IUser = {
    name: 'Ivan',
    age: 18,
    salary: 23345,

    checkAge(): void {
        if (this.age < 18) {
            console.log("access denied");
        }else {
            console.log(this.age);
        }
    }
}

/*
№1 Сделайте интерфейс IDate для объекта, хранящего дату: год, месяц и день. Пусть все свойства объекта будут необязательными.
 */

interface IDate {
    year?: number;
    month?: number;
    day?: number;
}

const date : IDate = {
    year: 2020,
    month: 2020,
}

console.log(date);


/*
№1 Создайте интерфейс для функции, параметром принимающей две строки и возвращающей эти строки, сложенные через пробел.
 */

interface IFunc {
    (str1: string, str2: string): string;
}

const func: IFunc = function (str1: string, str2: string): string {
    return str1 + ' ' + str2;
}

console.log(func('abc', 'ddf'));

/*
№2 Создайте интерфейс для функции, параметром принимающей число и возвращающей массив делителей этого числа.
 */

interface IFunc1 {
    (num1: number): number[];
}

const func1: IFunc1 = function (num1: number): number[] {
    const arr: number[] = [];
    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0){
            arr.push(i);
        }
    }
    return arr;
}

console.log(func1(12));

/*
№3 Создайте интерфейс для функции, параметром принимающей строку и возвращающей массив слов из этой строки.
 */

interface IFunc2 {
    (str1: string): string[];
}

const func2: IFunc2 = function (str1: string): string[] {
    const arr: string[] = str1.split(' ');
    return arr;
};
console.log(func2('abc 4454 ttt uu'));

/*
№1 Создайте интерфейс, описывающий массив со значениями в виде чисел.
 */

interface IArray {
    [index: number] : number;
}

const arr: IArray = [1, 3, 4, 5];
console.log(arr);

/*
№1 Создайте интерфейс, описывающий объект с ключами в виде чисел, а значениями в виде строк.
 */

interface IObject {
    [index: number]: string;
}

const obj: IObject = {1: 'a', 2: 'b', 3: 'c'};
console.log(obj);

/*
№1 Создайте интерфейс IMath со свойствами num1 и num2 и методом getDiv, который будет делить первое число на второе.

№2 Сделайте класс Math, который реализует интерфейс IMath.
 */

interface IMath1 {
    num1: number;
    num2: number;

    getDiv(): number;
}

class Math implements IMath1 {
    num1: number;
    num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public getDiv(): number {
        return this.num1 / this.num2;
    }
}

const math1 : Math = new Math(4, 2);
console.log(math1.getDiv());


interface IUser1 {
    name: string;
    birthday: Date;
}

interface IProgrammer extends IUser1 {
    salary: number;
    language: string;
}

class Employee implements IProgrammer {
    name: string;
    birthday: Date;
    salary: number;
    language: string;

    constructor(name: string, birthday: Date, salary: number, language: string) {
        this.name = name;
        this.birthday = birthday;
        this.salary = salary;
        this.language = language;
    }
}






