/*
№1
Сделайте переменную, которая будет содержать объект с датой.
 */

let date: Date = new Date(2033, 5, 30);

console.log(date);

/*
№1 Сделайте переменную, которая будет содержать регулярное выражение.
 */

let reg: RegExp = new RegExp(".+?");
console.log(reg);

/*
№1 Сделайте переменную, которая будет содержать promise.
 */

const promise =  new Promise<string>((resolve) => {
    setTimeout(() => resolve('сервер 1'), 1000);
})
console.log(promise);

const myElement: HTMLElement = document.createElement("div");

/*
№3 Сделайте переменную, которая будет содержать ссылку на тег ul.
 */

const textList: HTMLUListElement = document.createElement("ul");

/*
№1 Сделайте переменную, которая будет содержать коллекцию Map.
 */

const userAgeMap: Map<string, number> = new Map();

userAgeMap.set("eric", 10);
userAgeMap.set("john", 10);


/*
№2 Сделайте переменную, которая будет содержать коллекцию Set.
 */

const uniqueNumbers: Set<number> = new Set();

uniqueNumbers.add(20);
uniqueNumbers.add(5);

/*
№3 Сделайте переменную, которая будет содержать коллекцию NodeList.
 */

const listItems: NodeListOf<HTMLLIElement> = document.querySelectorAll('li');

/*
№4 Сделайте переменную, которая будет содержать коллекцию HTMLCollection
 */

const divsCollection: HTMLCollection = document.getElementsByTagName('div');




