import {Hero} from './hero.js';

export class Archer extends Hero {
    private _arrowCount: number;


    constructor(name: string, arrowCount: number) {
        super(name);
        this._arrowCount = arrowCount;
    }


    public get arrowCount(){
        return this._arrowCount;
    }

    public restockArrows(amount: number): void {
        this._arrowCount += amount;
        console.log(`${this.name} пополнила запас стрел на ${amount}. Всего: ${this._arrowCount}`);
    }

    public shoot(): void {
        if(this._arrowCount === 0){
            console.log(`у ${this.name} закончились стрелы необходимо их пополнить`);
        }else {
            this._arrowCount--;
            console.log(`${this.name} сделала выстрел. Осталось стрел: ${this._arrowCount}`);
        }
    }
}

