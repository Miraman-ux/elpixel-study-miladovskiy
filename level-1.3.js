/*
№1 Дана строка. Если в этой строке более одного символа,
выведите в консоль предпоследний символ этой строки.
 */

let task1String = 'abcdfr'

if (task1String.length > 1) {
    console.log(task1String.at(-2))
}

/*
№2 Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
 */

let task2FirstNumber = 56
let task2SecondNumber = 3

console.log(task2FirstNumber % task2SecondNumber === 0)

