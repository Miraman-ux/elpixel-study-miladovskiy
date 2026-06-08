/*
№1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
 */

let checkedNumber = 67

if (checkedNumber < 0) {
    console.log("Negative")
}else{
    console.log("Positive")
}

/*
Дана строка. Выведите в консоль длину этой строки.
 */

let testStringLen = 'testString12345'
console.log(testStringLen.length)

/*
Дана строка. Выведите в консоль последний символ строки.
 */

let testStringLast = 'testString1234f'
let lastChar = testStringLast.slice(-1)
console.log(lastChar)

/*
Дано число. Проверьте, четное оно или нет.
 */

let evenOrNotNumber = 56
if (evenOrNotNumber % 2 === 0) {
    console.log("Even")
} else {
    console.log("NotEven")
}

/*
Даны два слова. Проверьте, что первые буквы этих слов совпадают.
 */

let testString1 = 'testString'
let testString2 = 'testString2'

let firstChar1 = testString1[0].toLowerCase()
let firstChar2 = testString2[0].toLowerCase()

if (firstChar1 === firstChar2) {
    console.log("Match")
}else {
    console.log("NotMatch")
}