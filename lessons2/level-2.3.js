/*
№1 Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
 */

let firstWord = 'abcde';
let secondWord = 'abcde';

console.log(firstWord.at(-1) === secondWord[0]);

/*
№2 Дана некоторая строка. Найдите позицию третьего нуля в строке.
 */

let task2String = '102030405';
let countZero = 0;
let thirdPosition = -1;

for (let i = 0; i < task2String.length; i++) {
    if (task2String[i] === '0'){
        countZero++;
    }

    if(countZero === 3){
        thirdPosition = 3;
        break;
    }
}

if(thirdPosition === -1) {
    console.log('there is no third zero in the line');
}else{
    console.log(`Position of the third zero: ${thirdPosition + 1}`);
}

/*
№3 Даны числа, разделенные запятыми: '12,34,56' Найдите сумму этих чисел.
 */

let task3String = '12,34,56';
let sumArray = 0;

let splitArray = task3String.split(",");

for (let i = 0; i < splitArray.length; i++) {
    sumArray += Number(splitArray[i]);
}

console.log(`Sum: ${sumArray}`);

/*
№4 Дана дата в следующем формате: '2025-12-31'
Преобразуйте эту дату в следующий объект:
{
	year: '2025',
	month: '12',
	day: '31',
}
 */

let date = '2025-12-31';
let splitDate = date.split('-');

const dateObject = {
    year: splitDate[0],
    month: splitDate[1],
    day: splitDate[2]
};

console.log(dateObject);
