/*
№1 Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива.
 */

function getRandomNumberFromArray(task1Array){

    let radomElementFromArray = Math.floor(Math.random() * task1Array.length);

    return task1Array[radomElementFromArray];
}

const task1testArray1 = [1, 6, 7, 9, 15, 24];

console.log(getRandomNumberFromArray(task1testArray1));


/*
№2 Сделайте функцию, которая параметром будет принимать массив и возвращать массив из N случайных элементов этого массива.
 */

function getRandomNumbersFromArray(task2Array, N){
    const result = [];

    for (let i = 0; i < N; i++) {
        let randomIndex = Math.floor(Math.random() * task2Array.length);

        result.push(task2Array[randomIndex]);
    }

    return result;
}

const test2 = [10, 20, 30, 90, 125, 1];

console.log(getRandomNumbersFromArray(test2, 2));
/*
№3 Сделайте функцию, которая параметром будет принимать массив и возвращать случайный элемент этого массива так, чтобы одинаковые элементы не возвращались два раза подряд.
 */

let lastElement = null;

function getRandomElement(task3Array){
    if (task3Array.length <= 1){
        return task3Array[0];
    }

    let newElement;
    do{
        let randomIndex = Math.floor(Math.random() * task3Array.length);
        newElement = task3Array[randomIndex];
    }while (newElement === lastElement);

    lastElement = newElement;
    return newElement;
}

const numbers = [10, 20, 30, 40];

console.log(getRandomElement(numbers));

/*
№4 Сделайте функцию, которая будет возвращать массив простых чисел из заданного промежутка.
 */

function isPrime(task4Num){
    if (task4Num === 0) return false;

    for (let i = 2; i <= Math.sqrt(task4Num); i++) {
        if(task4Num % i === 0 ) return false;
    }

    return true;
}

function getPrimesInInterval(min, max){
    const primeNumbers = [];

    for (let i = min; i <= max; i++) {
        if(isPrime(i)){
            primeNumbers.push(i);
        }
    }

    return primeNumbers;
}

console.log(getPrimesInInterval(1, 20));

/*
№5 Сделайте функцию, которая параметрами будет принимать любое количество чисел, а возвращать их сумму.
 */

function getSum(...task5Numbers){
    let sum = 0;

    for (let task5number of task5Numbers){
        sum += task5number;
    }

    return sum;
}

console.log(getSum(5, 6, 3));


/*
№6 Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы в массиве не было подряд двух одинаковых чисел.
 */

function fillArrayWithRandom(n, min, max){
    const result = [];

    for (let i = 0; i < n; i++) {
        let newNum;

        do{
            newNum = Math.floor(Math.random() * (max - min +1 )) + min;
        }while (newNum === result[newNum.length - 1]);
        result.push(newNum);
    }
    return result;
}


console.log(fillArrayWithRandom(5, 6, 18));


/*
№7 Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка так, чтобы числа не повторялись.
 */

function fillArrayWithUniqueRandom(n, min, max){
    let totalAvailableNumbers = max - min + 1;
    if (n > totalAvailableNumbers){
        console.error("Error: The given range is too small for " + n + " unique numbers!");
        return [];
    }

    const result = [];

    while (result.length < n){
        let newNum = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!result.includes(newNum)){
            result.push(newNum);
        }
    }

    return result;
}


console.log(fillArrayWithUniqueRandom(5, 10, 20));