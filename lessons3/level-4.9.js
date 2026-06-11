/*
№1 Сделайте функцию, которая будет возвращать сколько дней осталось до ближайшего 29 февраля.
 */

function daysUntilFebruary(){
    let today = new Date();
    let currentYear = today.getFullYear();
    let targetYear = currentYear;

    while (true){
        let feb29 = new Date(targetYear, 1, 29);

        if(feb29.getMonth() === 1 && feb29.getDate() === 29){

            if (targetYear === currentYear && today > feb29){
                targetYear++;
                continue;
            }
            break;
        }

        targetYear++;
    }

    let targetDate = new Date(targetYear, 1, 29);

    let differenceInMs = targetDate - today;


    let daysLeft = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    return daysLeft;
}

console.log(`Days left until the next February 29th: ${daysUntilFebruary()}`);


/*
№2 Сделайте функцию, которая будет возвращать дату следующей масленницы, которая празднуется в последнее воскресенье зимы.
 */

function getNextMaslenitsa(){
    let today = new Date();
    let currentYear = today.getFullYear();
    let targetYear = currentYear;

    function findLastSundayOfFeb(year){
        let date = new Date(year, 2, 0);

        while (date.getDay() !== 0){
            date.setDate(date.getDate() - 1);
        }
        return date;
    }

    let maslenitsaDate = findLastSundayOfFeb(targetYear);

    if(today.setHours(0, 0, 0, 0) > maslenitsaDate.setHours(0, 0, 0, 0)){
        targetYear++;
        maslenitsaDate = findLastSundayOfFeb(targetYear);
    }

    return maslenitsaDate;
}

let nextMaslenitsa = getNextMaslenitsa();

let options = { year: 'numeric', month: 'long', day: 'numeric' };

console.log(`According to the problem, the next Maslenitsa will be: ${nextMaslenitsa.toLocaleDateString('ru-RU', options)}`);


/*
№3 Сделайте функцию, которая будет возвращать случайный цвет.
 */
function getRandomColor(){
    let letters = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++) {
        let randomIndex= Math.floor(Math.random() * 16);

        color += letters[randomIndex];
    }
    return color;
}

console.log(`Random color :`, getRandomColor());

/*
№4 Сделайте функцию, которая параметром будет принимать массив чисел и возвращать массив общих делителей всех чисел из переданного массива.
 */

function getCommonDivisors(numbers){
    if (numbers.length === 0) return [];

    let divisors = [];

    let minNum = Math.min(...numbers);

    for (let i = 1; i <= minNum; i++) {


        let isCommon = numbers.every(num => num % i === 0);

        if (isCommon) {
            divisors.push(i);
        }
    }

    return divisors;
}

console.log("Divisors for 12, 18, 24:", getCommonDivisors([12, 18, 24]));


/*
№5 Сделайте функцию, которая параметром будет принимать двухмерный массив чисел и возвращать массив максимальных чисел в каждом подмассиве.
 */

function getMaxFromSubarrays(matrix){
    let result = [];

    for (let subarray of matrix){
        let MaxInSub = Math.max(...subarray);

        result.push(MaxInSub);
    }

    return result;
}

let testMatrix = [
    [10, 20, 30],
    [5, 1],
    [99, 105, 88, 91]
];

console.log("Max in subarrays:", getMaxFromSubarrays(testMatrix));

