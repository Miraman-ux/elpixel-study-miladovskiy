/*
№1 Заполните массив случайными числами из промежутка от 1 до 100.
 */

const task1Array = [];
const arrayLength = 6;

for (let i = 0; i < arrayLength; i++) {
    const randomNumer = Math.floor(Math.random() * 100 ) + 1;
    task1Array.push(randomNumer);
}

console.log(task1Array);


/*
№2 Дано некоторое число: 12345 Выведите в консоль все его символы с конца.
 */

let task2Number = 12345;
let task2String = task2Number.toString().split("");
const task2Array = [];

for (let i = 0; i < task2String.length; i++) {
    task2Array.unshift(task2String[i]);
}

for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i]);
}


/*
№3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
По очереди выведите в консоль подмассивы из двух элементов нашего массива:
[1, 2]
[3, 4]
[5, 6]
 */

const task3Array = [1, 2, 3, 4, 5 ,6];

for (let i = 0; i < task3Array.length; i+= 2) {
    const subArray = task3Array.slice(i, i + 2);
    console.log(subArray);
}

/*
№4 Даны два массива:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Слейте эти массивы в новый массив: [1, 2, 3, 4, 5, 6]
 */

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

const mergerArray = arr1.concat(arr2);

console.log(mergerArray);