"use strict";
/*
№1 Объявите класс Employee.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
}
/*
№1 Создайте два объекта класса Employee.
 */
const employee1 = new Employee();
const employee2 = new Employee();
/*
№1 Создайте класс Student со свойствами name и age.

№1 Создайте класс Student со свойствами name и age. Добавьте методы для получения и изменения этих свойств.
 */
class Student {
    name = '';
    age = 34;
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
const student = new Student();
student.setName('John');
console.log(student.getName());
class Employee2 {
    name;
    surname;
    age;
    salary;
    constructor(name, surname, age, salary) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.salary = salary;
    }
}
const employee3 = new Employee2('Vlad', 'Milad', 35, 5677);
console.log(employee3);
/*
№1 Создайте класс Employee, который наследует от класса User.
 */
class User {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Employee3 extends User {
    course;
    constructor(name, course) {
        super(name);
        this.course = course;
    }
}
/*
№1 Сделайте класс User, который будет содержать публичные свойства с именем и годом рождения пользователя. Сделайте публичный метод getAge, который будет получать возраст пользователя по году его рождения.
 */
class User2 {
    name;
    birhYear;
    constructor(name, birthYear) {
        this.name = name;
        this.birhYear = birthYear;
    }
    geAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birhYear;
    }
}
const user = new User2('Ivan', 2005);
console.log(user.geAge());
//# sourceMappingURL=level_1-9.js.map