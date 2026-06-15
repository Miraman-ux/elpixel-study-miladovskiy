/*
№1 Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.
 */

let task1String = '1a2b3c456';
let letterCount = 0;

for (let i = 0; i < task1String.length; i++) {
    let char = task1String[i];

    if(/[a-zA-Z]/.test(char)) {
        letterCount++;
    }
}

if (letterCount <= 3) {
    console.log(true);
}else{
    console.log(false);
}

/*
№2 Дано число. Получите первую четную цифру с конца этого числа.
 */

let task2Number = 123456;
let task2NumToStr = task2Number.toString();
let foundEven = null;


for (let i = task2NumToStr.length -1; i >= 0; i--) {
    let num = Number(task2NumToStr[i]);

    if(num % 2 === 0){
        foundEven = num;
        break;
    }
}

if (foundEven === null) {
    console.log("there are no even numbers");
}else{
    console.log(`first even number: ${foundEven}`);
}


/*
№3 Дана некоторая строка: 'abcde abcde abcde'
Замените в ней первый символ каждого слова на '!': '!bcde !bcde !bcde'
 */

let task3String = 'abcde abcde abcde';
let task3splitArray = task3String.split(' ');
let task3ResElem = [];

for (let i = 0; i < task3splitArray.length; i++) {
    let task3Word = task3splitArray[i];

    let task3WordMod = '!' + task3Word.slice(1);

    task3ResElem.push(task3WordMod);
}

let task3ResString = task3ResElem.join(' ');

console.log(task3ResString);

/*
№4 Дан массив с числами: [1, 2, 3, 3, 4, 5]
Проверьте, что в этом массиве есть два одинаковых элемента подряд.
 */

let task4Arr = [1, 2, 3, 3, 4, 5];
let flag = false;

for (let i = 0; i < task4Arr.length; i++) {
    if (task4Arr[i] === task4Arr[i + 1]) {
        flag = true;
        break;
    }
}

console.log(flag);