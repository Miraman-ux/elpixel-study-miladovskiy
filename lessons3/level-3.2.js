/*
№1 Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.
 */

for (let i = 10; i <= 1000 ; i++) {
    let number = Math.floor(i/10) % 10;

    if (number % 2 === 0) {
        console.log(i);
    }
}


/*
№2 Дан массив. Удалите из него каждый пятый элемент.
 */

const task2Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

for (let i = task2Array.length - 1; i >= 0; i--) {
    if((i + 1) % 5 === 0){
        task2Array.splice(i, 1);
    }
}

console.log(task2Array);

/*
№3 Дана некоторая переменная с числом: let num = 5;
Сделайте строку, содержащую столько нулей, сколько указано в переменной.
В нашем случае получится такая строка: '00000'
 */

let task3Num = 5;

let task3Result = '0'.repeat(task3Num);
console.log(task3Result);


/*
№4 Дана некоторая строка со словами: 'aaa bbb ccc eee fff'
Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее: 'aaa ccc fff'
 */

let task4Str = 'aaa bbb ccc eee fff';
let task4Split = task4Str.split(' ');

for (let i = task4Split.length - 1; i >= 0; i--) {
    if (i % 2 !== 0){
        task4Split.splice(i, 1);
    }
}

let task4Result = task4Split.join(' ');

console.log(task4Result);

/*
№5 Дан массив:
[
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]
Найдите сумму элементов этого массива.
 */

const task5Arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

let task5Sum = 0;

for (let i = 0; i < task5Arr.length; i++) {
    for (let j = 0; j < task5Arr[i].length; j++) {
        task5Sum += task5Arr[i][j];
    }
}

console.log(task5Sum);



