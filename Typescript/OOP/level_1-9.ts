/*
№1 Объявите класс Employee.
 */

class Employee {}

/*
№1 Создайте два объекта класса Employee.
 */
const employee1: Employee = new Employee();
const employee2: Employee = new Employee();

/*
№1 Создайте класс Student со свойствами name и age.

№1 Создайте класс Student со свойствами name и age. Добавьте методы для получения и изменения этих свойств.
 */

class Student {
    name: string = '';
    age: number = 34;


    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getAge(){
        return this.age;
    }

    setAge(age: number): void {
        this.age = age;
    }
}

const student: Student = new Student();
student.setName('John');
console.log(student.getName());


class Employee2 {
    name: string;
    surname: string;
    age: number;
    salary: number;


    constructor(name: string, surname: string, age: number, salary: number) {
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
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee3 extends User {
    course : number;

    constructor(name: string, course: number) {
        super(name);
        this.course = course;
    }
}

/*
№1 Сделайте класс User, который будет содержать публичные свойства с именем и годом рождения пользователя. Сделайте публичный метод getAge, который будет получать возраст пользователя по году его рождения.
 */

class User2 {
    public name: string;
    public birhYear: number;

    constructor(name: string, birthYear: number) {
        this.name = name;
        this.birhYear = birthYear;
    }

    public geAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birhYear;
    }
}

const user: User2 = new User2('Ivan', 2005);
console.log(user.geAge());



