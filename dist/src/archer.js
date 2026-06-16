import { Hero } from './hero.js';
export class Archer extends Hero {
    _arrowCount;
    constructor(name, arrowCount) {
        super(name);
        this._arrowCount = arrowCount;
    }
    get arrowCount() {
        return this._arrowCount;
    }
    restockArrows(amount) {
        this._arrowCount += amount;
        console.log(`${this.name} пополнила запас стрел на ${amount}. Всего: ${this._arrowCount}`);
    }
    shoot() {
        if (this._arrowCount === 0) {
            console.log(`у ${this.name} закончились стрелы необходимо их пополнить`);
        }
        else {
            this._arrowCount--;
            console.log(`${this.name} сделала выстрел. Осталось стрел: ${this._arrowCount}`);
        }
    }
}
//# sourceMappingURL=archer.js.map