import { Hero } from "./hero.js";
export class Mage extends Hero {
    _mana = 100;
    _MaxMana = 100;
    constructor(name) {
        super(name);
    }
    get mana() {
        return this._mana;
    }
    castSpell(cost, spellName) {
        if (this._mana >= cost) {
            this._mana -= cost;
            console.log(`${this.name} применил ${spellName}! Осталось Маны: ${this._mana}`);
        }
        else {
            console.log(`Не хватает МАНЫ! Для заклинания ${spellName}`);
        }
    }
    levelUp() {
        super.levelUp();
        this._mana = this._MaxMana;
        console.log(`Мана полностью восстановлена: ${this._mana}`);
    }
}
