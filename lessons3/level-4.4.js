/*
№1 Сделайте функцию, которая параметром будет принимать число, а возвращать количество его делителей.
 */

function getDivisorsCount(num){
    let countDivisors = 0;

    for (let i = 0; i <= num; i++) {
        if(num % i === 0){
            countDivisors++;
        }
    }

    return countDivisors;
}

console.log(getDivisorsCount(15));

/*
№2 Сделайте функцию, которая параметром будет принимать дату, а возвращать знак зодиака, соответствующий этой дате.
 */

function getZodiacForDate(day, month){
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Овен";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Телец";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Близнецы";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Рак";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Лев";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Дева";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Весы";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Скорпион";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Стрелец";
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return "Козерог";
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Водолей";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Рыбы";

    return "Некорректная дата";
}

console.log(getZodiacForDate(15, 6));

/*
№3 Сделайте функцию, которая параметром будет принимать число, а возвращать массив его делителей.
 */

function getArrayDivisors(task3Num){
    const task3Res = [];

    for (let i = 0; i <= task3Num; i++) {
        if(task3Num % i === 0){
            task3Res.push(i)
        }
    }
    return task3Res;
}

console.log(getArrayDivisors(15));

/*
№4 Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
 */

function getPrimeOrNot(task4Num){
    if (task4Num <= 1){
        return false;
    }

    for (let i = 2; i < task4Num; i++) {
        if ( task4Num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(getPrimeOrNot(17));

/*
№5 Сделайте функцию, которая параметром будет принимать число и удалять из него четные цифры.
 */

function deleteEvenDigit(task5Num){
    let str = task5Num.toString().split('');

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] % 2 === 0){
            str.splice(i, 1);
        }
    }
    return Number(str.join(''));
}

console.log(deleteEvenDigit(3146));

/*
№6 Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.
 */

function fillArrayWithRandom(N, min, max){
    const task6Arr = [];

    for (let i = 0; i < N; i++) {
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

        task6Arr.push(randomNum);
    }

    return task6Arr;
}

console.log(fillArrayWithRandom(5, 10, 20));
