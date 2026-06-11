/*
№1 Сделайте функцию, которая параметром будет принимать текст со словами,
а возвращать текст, в котором эти слова будут отсортированы в алфавитном порядке.
 */

function orderWordsAlphabet(text){
    let words = text.split(' ');

    words.sort();

    let sortedText = words.join(' ');

    return sortedText;
}

let testString = "banana, apple, watermelon, pear";
console.log(orderWordsAlphabet(testString));


/*
№2 Сделайте функцию, которая параметром будет принимать два массива и возвращать массив их общих элементов.
 */

function getCommonElements(array1, array2) {
    let task2Result = [];

    for (let i = 0; i < array1.length; i++) {
        let currentElement = array1[i];

        if (array2.includes(currentElement) && !task2Result.includes(currentElement)) {
            task2Result.push(currentElement);
        }
    }

    return task2Result;
}

let array1 = [1, 2, 3, 4, 5, 2];
let array2 = [2, 5, 6, 7, 1, 2];
console.log(getCommonElements(array1, array2));


/*
№3 Сделайте функцию, которая будет возвращать случайное число. Функция не должна возвращать одно и тоже число два раза подряд.
 */

let lastNum = null;

 function getRandomNumber(num){
     let newNum;

     do{
         newNum = Math.floor(Math.random() * num);
     } while(newNum === lastNum);

     lastNum = newNum;
     return newNum;

 }

 console.log(getRandomNumber(120));

 /*
 №4 Сделайте функцию, которая параметром будет принимать массив и элемент и возвращать следующий за ним элемент. Смотрите пример:

let arr = [1, 2, 3, 4, 5];

func(arr, 1); // 2
func(arr, 4); // 5
func(arr, 5); // 1
  */

function func(arr1, element){
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] === element){

            if (i === arr1.length - 1){
                return arr1[0];
            }

            return arr1[i + 1];
        }
    }
}

console.log(func([2, 4, 5, 6], 2));

