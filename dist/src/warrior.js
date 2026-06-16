import { Hero } from "./hero.js";
export class Warrior extends Hero {
    _armor;
    constructor(name, armor) {
        super(name);
        this._armor = armor;
    }
    get armor() {
        return this._armor;
    }
    takeDamage(amount) {
        const finalDamage = Math.max(0, amount - this._armor);
        const absorbedDamage = amount - finalDamage;
        if (finalDamage === 0) {
            console.log(`Броня ${this.name} Полностью поглотила урон.`);
            console.log(`Осталось ${this._armor} очков брони`);
        }
        else {
            console.log(`Броня ${this.name} поглотила ${absorbedDamage} урона`);
        }
        super.takeDamage(finalDamage);
    }
}
