/*
№1
Дано число. Выведите в консоль первую цифру этого числа.
 */

let task1Number = 567
let firstNum = task1Number.toString()[0];
console.log(firstNum);


/*
№2
Дано число. Выведите в консоль последнюю цифру этого числа.
 */

let task2Number = 567
let lastNum = task2Number.toString().at(-1);
console.log(lastNum)

/*
№3
Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
 */

let task3FirstNumber = 567
let task3SecondNumber = 123

let sum = Number(task3FirstNumber.toString()[0]) + Number(task3SecondNumber.toString().at(-1))
console.log(sum)

/*
№4
Дано число. Выведите количество цифр в этом числе.
 */

let task4Number = 4569

let count = task4Number.toString().length;
console.log(count)


/*
№5
Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
 */

let task5FirstNumber = 43
let task5SecondNumber = 100

if (task5FirstNumber.toString()[0] === task5SecondNumber.toString()[0]) {
    console.log("Match")
} else {
    console.log("Not Match")
}