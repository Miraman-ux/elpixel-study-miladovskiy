/*
№1 Создайте три объекта, реализующих следующий интерфейс:
interface Employee {
	name: string,
	age: number,
	salaryday: number
}
 */

interface Employee {
    name: string;
    age: number;
    salaryDay: number;
}

let employee1: Employee = {name: 'IVAN', age: 20, salaryDay: 200};
let employee2: Employee = {name: 'EGOR', age: 30, salaryDay: 500};
let employee3: Employee = {name: 'VLAD', age: 20, salaryDay: 20000};

console.log(employee1);
console.log(employee2);
console.log(employee3);

/*
№2
Создайте три объекта, реализующих следующий интерфейс:
interface Time {
	hour: number,
	minute: number,
	second: number
}
 */

interface Time  {
    hour: number;
    minute: number;
    second: number;
}

let time1: Time = {hour: 4, minute: 4, second: 4};
let time2: Time = {hour: 5, minute: 6, second: 7};
let time3: Time = {hour: 14, minute: 24, second: 43};

console.log(time1);
console.log(time2);
console.log(time3);


/*
№1Сделайте объект со страной, содержащий название страницы и массив ее городов.
 */

let country: {
    name: string;
    cities: string[];
}

country = {
    name: 'Belarus',
    cities: ['Минск', 'Брест', 'Витебск', 'Гомель', 'Гродно', 'Могилёв']
};
console.log(country);


/*
№1 Сделайте объект со страной, содержащий название страницы и массив ее городов.
 */

interface Country {
    name: string;
    cities: string[];
}

let country2: Country = {
    name: 'Belarus',
    cities: ['Минск', 'Брест', 'Витебск', 'Гомель', 'Гродно', 'Могилёв']
}

console.log(country2);

/*
№1 Дан объект:
let event = {
	name: 'my new event',
	time: {
		start: '2025-11-01',
		finish: '2025-12-31'
	}
};
Сделайте интерфейс, описывающий структуру этого объекта.
 */

interface Ivent {
    name: string;
    time: {
        start: string;
        finish: string;
    }
}

let event: Ivent = {
    name: 'my new event',
    time: {
        start: '2025-11-01',
        finish: '2025-12-31'
    }
};

console.log(event);


/*
№2 Дан объект:
let employee {
	name: 'andrew',
	potision: {
		name: 'programmer'
		salary: 1000,
	}
	addr: {
		country: 'belarus',
		city: 'minsk'
	}
};
Сделайте интерфейс, описывающий структуру этого объекта.
 */

interface JobsInfo {
    name: string;
    potision: {
        name: string;
        salary: number;
    };
    addr: {
        country: string;
        city: string;
    };
}

const employee: JobsInfo = {
    name: 'andrew',
    potision: {
        name: 'programmer',
        salary: 1000,
    },
    addr: {
        country: 'belarus',
        city: 'minsk'
    }
};

console.log(employee);

/*
№1 Дан объект:
let employee {
	name: 'andrew',
	potision: {
		name: 'programmer'
		salary: 1000,
	},
	addr: {
		country: 'belarus',
		city: 'minsk'
	}
};
Сделайте интерфейс, описывающий структуру этого объекта. Вынесите вложенные объекты в отдельные интерфейсы.


 */

interface potision {
    name: string;
    salary: number;
}

interface addr {
    country: string;
    city: string;
}

interface JobsInfo2 {
    name: string;
    potision: potision;
    addr: addr;
}

const employees: JobsInfo2 = {
    name: 'andrew',
    potision: {
        name: 'programmer',
        salary: 1000,
    },
    addr: {
        country: 'belarus',
            city: 'minsk'
    }
};

console.log(employees);

/*
№2 Дан объект:
let user: User = {
	name: 'john',
	age: 30,
	parents: {
		mother: {
			name: 'jane',
			age: 30,
			parents: null
		},
		father: {
			name: 'eric',
			age: 30,
			parents: null
		}
	}
}
Сделайте интерфейс, описывающий структуру этого объекта. Вынесите вложенные объекты в отдельные интерфейсы.
 */
interface mother {
    name: string;
    age: number;
    parents: null;
}

interface father {
    name: string;
    age: number;
    parents: null;
}

interface parents {
    mother: mother;
    father: father;
}

interface User {
    name: string;
    age: number;
    parents: parents;
}

const user: User = {
    name: 'john',
    age: 30,
    parents: {
        mother: {
            name: 'jane',
            age: 30,
            parents: null
        },
        father: {
            name: 'eric',
            age: 30,
            parents: null
        }
    }
}

console.log(user);

/*
№2 Сделайте массив, элементы которого будут промисами.
 */

const promise1: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('сервер1'), 1000);
});

const promise2: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('сервер2'), 2000);
});

const promise3: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('сервер3'), 1500);
});

const ArrayPromises: Promise<string>[] = [promise1, promise2, promise3];

console.log(ArrayPromises);

/*
№3 Сделайте интерфейс, описывающий работника.
Сделайте массив, состоящий из объектов с этими работниками.
 */

interface Worker {
    name: string;
    age: number;
    salary: number;
}

const arrWorkers: Worker[] = [];

arrWorkers.push({name: 'Oleg', age: 45, salary: 34556});
arrWorkers.push({name: 'Vlad', age: 20, salary: 234556});
console.log(arrWorkers);







