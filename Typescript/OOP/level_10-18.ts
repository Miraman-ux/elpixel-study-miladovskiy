/*
№1 Сделайте класс User, содержащий приватные свойства с именем и возрастом. Пусть их начальные значения задаются через конструктор.

№2 В вашем классе User сделайте публичные методы getName и getAge, позволяющие получить значения соответствующих приватных свойств.

№3 В вашем классе User сделайте публичные методы setName и setAge, позволяющие изменить значения соответствующих приватных свойств.
 */

class User {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    public get name(){
        return this._name;
    }

    public get age(){
        return this._age;
    }

    public set name(value:string){
        this._name = value;
    }

    public set age(value:number){
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
    protected name: string;
    protected surn: string;

    constructor(name: string, surn: string) {
        this.name = name;
        this.surn = surn;
    }
}

class Employee extends User1 {
    protected  salary: number;

    constructor(name: string, surn: string, salary: number) {
        super(name, surn);
        this.salary = salary;
    }

    public getSalary() {
        return this.salary;
    }

    public setSalary(salary: number) {
        this.salary = salary;
    }

    public getName(){
        return this.name;
    }

    public setName(name: string){
        this.name = name;
    }

    public getSurn(){
        return this.surn;
    }

    public setSurn(surn: string){
        this.surn = surn;
    }
}

/*
№1 Задайте классу User свойство age, доступное только для чтения. Создайте объект данного класса и выведите его возраст на экран.
 */

class User2 {
    readonly age: number;

    constructor(age: number) {
        this.age = age;
    }
}

const user: User2 = new User2(25);
console.log(user.age);

/*
№1 Сделайте класс User, содержащий приватные свойства с именем и возрастом. Сделайте аксессоры этих свойств.

№2 Модифицируйте сеттер возраста так, чтобы можно было задать возраст от 0 до 120. Если же будет указано иное значение, должно выбрасываться исключение.
 */

class User3 {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    public get name() {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get age(){
        return this._age;
    }

    public set age(value: number) {
        if (value >= 0 && value <= 100) {
            this._age = value;
        }else{
            throw new Error("Invalid age");
        }
    }
}

/*
№1 В класс Student добавьте статическое свойство specialty. Выведите данное свойство без объявления объекта.

№1 В класс Student добавьте статическое свойство university. Выведите данное свойство без объявления объекта.
 */


class Student {
    public name: string;
    public static salary: number = 4000;
    public static university: string = 'Scorina';

    constructor(name: string) {
        this.name = name;
    }

    public setUniversity(university: string) {
        Student.university = university;
    }

    public getUniversity() {
        return Student.university
    }
}

console.log(Student.salary);
console.log(Student.university);


/*
№1 В класс Calc добавьте методы, которые будут находить сумму квадратов и сумму кубов элементов массивов.
 */

class Calc {
    public static getSum(arr: number[]): void {
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

abstract class Figure {

    public abstract get perimeter(): number;
    public abstract get area(): number;
}


class Square extends Figure {
    private side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    public get perimeter(): number {
        return this.side * 4;
    }

    public get area(): number {
        return Math.pow(this.side, 2);
    }
}

class Rectangle extends Figure {
    private sideA: number;
    private sideB: number;
    private sideC: number;
    private height: number

    constructor(sideA: number, sideB: number, sideC: number, height: number) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.height = height;
    }

    public get perimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }

    public get area(): number {
        return this.sideA * 0.5 * this.height;
    }
}
