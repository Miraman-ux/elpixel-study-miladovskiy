"use strict";
/*
№1 Сделайте класс User, содержащий приватные свойства с именем и возрастом. Пусть их начальные значения задаются через конструктор.

№2 В вашем классе User сделайте публичные методы getName и getAge, позволяющие получить значения соответствующих приватных свойств.

№3 В вашем классе User сделайте публичные методы setName и setAge, позволяющие изменить значения соответствующих приватных свойств.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    _name;
    _age;
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    set name(value) {
        this._name = value;
    }
    set age(value) {
        this._age = value;
    }
}
/*
№1 Дан следующий класс:

class User {
    protected name: string;
    protected surn: string;

    constructor(name: string, surn: string) {
        this.name = name;
        this.surn = surn;
    }
}
Унаследуйте от этого класса класс Employee, который добавит защищенное свойство salary, а также геттеры всех свойств, как своих, так и унаследованных.
 */
class User1 {
    name;
    surn;
    constructor(name, surn) {
        this.name = name;
        this.surn = surn;
    }
}
class Employee extends User1 {
    salary;
    constructor(name, surn, salary) {
        super(name, surn);
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSurn() {
        return this.surn;
    }
    setSurn(surn) {
        this.surn = surn;
    }
}
/*
№1 Задайте классу User свойство age, доступное только для чтения. Создайте объект данного класса и выведите его возраст на экран.
 */
class User2 {
    age;
    constructor(age) {
        this.age = age;
    }
}
const user = new User2(25);
console.log(user.age);
/*
№1 Сделайте класс User, содержащий приватные свойства с именем и возрастом. Сделайте аксессоры этих свойств.

№2 Модифицируйте сеттер возраста так, чтобы можно было задать возраст от 0 до 120. Если же будет указано иное значение, должно выбрасываться исключение.
 */
class User3 {
    _name;
    _age;
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0 && value <= 100) {
            this._age = value;
        }
        else {
            throw new Error("Invalid age");
        }
    }
}
/*
№1 В класс Student добавьте статическое свойство specialty. Выведите данное свойство без объявления объекта.

№1 В класс Student добавьте статическое свойство university. Выведите данное свойство без объявления объекта.
 */
class Student {
    name;
    static salary = 4000;
    static university = 'Scorina';
    constructor(name) {
        this.name = name;
    }
    setUniversity(university) {
        Student.university = university;
    }
    getUniversity() {
        return Student.university;
    }
}
console.log(Student.salary);
console.log(Student.university);
/*
№1 В класс Calc добавьте методы, которые будут находить сумму квадратов и сумму кубов элементов массивов.
 */
class Calc {
    static getSum(arr) {
        let sum1 = 0;
        let sum2 = 0;
        for (const elem of arr) {
            sum1 += Math.pow(elem, 2);
            sum2 += Math.pow(elem, 3);
        }
        console.log(sum1);
        console.log(sum2);
    }
}
Calc.getSum([1, 2]);
/*
№1 Создайте абстрактный класс Figure, представляющий собой геометрическую фигуру. Пусть в нем будут свойства для периметра и площади.

№2 Сделайте класс Square, наследующий от класса Figure.

№3 Сделайте класс Rectangle, наследующий от класса Figure.


№1 В абстрактном классе Figure сделайте абстрактные методы для получения площади и периметра.

№2 В классах-потомках Square и Rectangle напишите реализацию этих методов.
 */
class Figure {
}
class Square extends Figure {
    side;
    constructor(side) {
        super();
        this.side = side;
    }
    get perimeter() {
        return this.side * 4;
    }
    get area() {
        return Math.pow(this.side, 2);
    }
}
class Rectangle extends Figure {
    sideA;
    sideB;
    sideC;
    height;
    constructor(sideA, sideB, sideC, height) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.height = height;
    }
    get perimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
    get area() {
        return this.sideA * 0.5 * this.height;
    }
}
//# sourceMappingURL=level_10-18.js.map