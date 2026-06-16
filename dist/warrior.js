"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
const hero_js_1 = require("./hero.js");
class Warrior extends hero_js_1.Hero {
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
exports.Warrior = Warrior;
//# sourceMappingURL=warrior.js.map