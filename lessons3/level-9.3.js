/*
№1 Дан массив со словами. Получите из этого массива случайное слово, начинающееся на заданную букву.
 */

function getRandomWordByLetter(wordsArray, letter) {
    let searchLetter = letter.toLowerCase();


    let filteredWords = wordsArray.filter(word => {
        return word.toLowerCase().startsWith(searchLetter);
    });

    if (filteredWords.length === 0){
        return `No words starting with "${letter}" were found`;
    }

    let randomIndex = Math.floor(Math.random() * filteredWords.length);

    return filteredWords[randomIndex];
}

let techWords = ["array, function, variable, module, index, object, loop, method"];


console.log("Random word starting with 'm':", getRandomWordByLetter(techWords, "m"));

console.log("Random word starting with 'm':", getRandomWordByLetter(techWords, "a"));


/*
№2 Пусть у нас есть дата 22.02.2017. В этой дате 4 двойки. Найдите все даты с 4-мя двойками в текущем столетии.
 */

function findDatesWithFourTwos() {
    let result = [];

    for (let year = 2001; year <= 2100; year++) {
        for (let month = 1; month <= 12; month++) {

            let daysInMonth = new Date(year, month, 0).getDate();

            for (let day = 1; day <= daysInMonth; day++) {

                let dayStr = String(day).padStart(2, '0');
                let monthStr = String(month).padStart(2, '0');
                let yearStr = String(year);

                let dateString = `${dayStr}.${monthStr}.${yearStr}`;

                let twosCount = dateString.split('2').length - 1;

                if (twosCount === 4) {
                    result.push(dateString);
                }
            }
        }
    }

    return result;
}

let datesList = findDatesWithFourTwos();
console.log(`Dates with four deuces found: ${datesList.length}`);
console.log("Here are the first 10 of them:", datesList.slice(0, 10));
console.log("Is 02/22/2017 on the list?:", datesList.includes("22.02.2017"));


/*
№3

Дан массив с точками:

[
	[1, 2], [2, 4], [3, 8], [4, 16], [5, 32]
]
Отрисуйте эти точки на графике.


 */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const points = [[1, 2], [2, 4], [3, 8], [4, 16], [5, 32]];

const scaleX = 80;
const scaleY = 10;
const padding = 40;

ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = '#007bff';

for (let i = 0; i < points.length; i++) {
    const x = points[i][0];
    const y = points[i][1];

    const pixelX = padding + (x * scaleX);
    const pixelY = canvas.height - padding - (y * scaleY);

    if (i === 0) {
        ctx.moveTo(pixelX, pixelY);
    } else {
        ctx.lineTo(pixelX, pixelY);
    }

    ctx.arc(pixelX, pixelY, 4, 0, Math.PI * 2);
}

ctx.stroke();
