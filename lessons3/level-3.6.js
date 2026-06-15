/*
№1 Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.
 */

const task1Arr = [1, 2 ,456, 3355, 23, 15];

for (let i = task1Arr.length - 1; i >= 0 ; i--) {
    if (task1Arr[i].toString().length > 3){
        task1Arr.splice(i, 1);
    }
}

console.log(task1Arr);

/*
№2 Дано число, например, вот такое: let num = 12345;
Проверьте, что все цифры этого числа больше нуля.
 */

let num = 12345;

let task2Arr = num.toString();
let task2Flag = true;

for (let i = 0; i < task2Arr.length; i++) {

    let num1 = Number(task2Arr[i]);

    if (num1 <= 0){
        task2Flag = false;
        break;
    }
}

if (task2Flag) {
    console.log('All numbers are greater than zero');
}else{
    console.log('Digit 0 or less found!');
}

/*
№3 Дан некоторый массив, например, вот такой: [123, 456, 789]
Слейте все элементы этого массива в один массив, разбив их посимвольно: [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

const task3Arr = [123, 456, 789];
let str1 = task3Arr.join('');
const resArr = [];

for (let i = 0; i < str1.length; i++) {
    resArr.push(Number(str1[i]));
}

console.log(resArr);

/*
№4 Дан следующая структура:
let data = [
	{
		1: 11,
		2: 12,
		3: 13,
	},
	{
		1: 21,
		2: 22,
		3: 23,
	},
	{
		1: 24,
		2: 25,
		3: 26,
	},
];
Найдите сумму элементов этой структуры.
 */

let data = [
    {
        1: 11,
        2: 12,
        3: 13,
    },
    {
        1: 21,
        2: 22,
        3: 23,
    },
    {
        1: 24,
        2: 25,
        3: 26,
    },
];

let task4Sum = 0;

for (let i = 0; i < data.length; i++) {
    let currentObj = data[i];

    let values = Object.values(currentObj);

    for (let j = 0; j < values.length; j++) {
        task4Sum += values[j];
    }
}

console.log(task4Sum);

