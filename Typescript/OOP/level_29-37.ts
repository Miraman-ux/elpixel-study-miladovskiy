/*
№1 Сделайте функцию, которая параметром принимает или два числа, или две строки. Своим результатом функция должна возвращать сумму параметров.
 */

function func <T extends number | string>(num1: T, num2: T) : T {
    if (typeof num1 === "number" && typeof num2 === "number"){
        return (num1 + num2) as T;
    }

    if(typeof num2 === "string" && typeof num1 === "string"){
        return (num1 + num2) as T;
    }

    throw new Error('Types must match');
}

console.log(func(1, 2));
console.log(func('a', 'b'));

/*
№1 Напишите функцию для перебора и вывода всех элементов массива обобщенного типа в консоль.
 */



function func1 <T>(arr: T[]): void{
    for (const elem of arr){
        console.log(elem)
    }
}

const arr = [1,2,3,4,5,6,7,8,9,10];
func1(arr);

/*
№1 Напишите функцию для определения длины массива обобщенного типа в вариантах, описанных в данном уроке.
 */

function func2 <T>(arr: T[]): number{
    return arr.length;
}

const elem1: <T>(arr: T[]) => number = func2;
const elem2: <U>(arr: U[]) => number = func2;
const elem3: {<T>(arr: T[]): number} = func2;


/*
№1 На основе примера, рассмотренного в уроке, задайте функцию для нахождения длины числового массива.f
 */

function myFunc <T extends {num: number[]}> (arr: T) : void {
    console.log(arr.num.length);
}

const myNum: {num: number[]} = {num: [1, 2, 3, 4, 5, 6, 7]};

myFunc <{num: number[]}>(myNum);

