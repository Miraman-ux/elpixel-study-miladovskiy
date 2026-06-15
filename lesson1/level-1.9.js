/*
№1 Дан массив со строками. Оставьте в этом массиве только те строки,
которые начинаются на http://.
 */

const task1Array = [
    'http://google.com',
    'https://yandex.ru',
    'http://mysite.by',
    'ftp://secure.server',
    'just-text'
];

const task1FiltredArray = task1Array.filter(link => link.startsWith('http://'));

console.log(task1FiltredArray);

/*
№2 Дан массив со строками. Оставьте в этом массиве только те строки,
которые заканчиваются на .html.
 */

const task2Array = [
    'http://google.com',
    'https://yandex.html',
    'http://mysite.by',
    'ftp://secure.html',
    'just-text'
];

const task2FiltredArray = task2Array.filter(link => link.endsWith('.html'));
console.log(task2FiltredArray);

/*
№3 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.
 */

const task3Array = [4, 8, 15, 16, 23, 42];

for (let i = 0; i < task3Array.length; i++) {
    task3Array[i] *= 1.1;
}
console.log(task3Array);