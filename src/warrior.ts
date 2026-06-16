import {Hero} from "./hero.js";

export class Warrior extends Hero {
    private _armor: number;


    constructor(name: string, armor: number) {
        super(name);
        this._armor = armor;
    }


    public get armor(): number {
        return this._armor;
    }

    public override takeDamage(amount: number) {
        const finalDamage = Math.max(0, amount - this._armor);
        const absorbedDamage = amount - finalDamage;

        if (finalDamage === 0){
            console.log(`Броня ${this.name} Полностью поглотила урон.`);
            console.log(`Осталось ${this._armor} очков брони`);
        }else {
            console.log(`Броня ${this.name} поглотила ${absorbedDamage} урона`);
        }

        super.takeDamage(finalDamage);
    }
}