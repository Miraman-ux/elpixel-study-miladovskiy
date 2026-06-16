import {Hero} from "./hero.js";

export class Mage extends Hero {
    private _mana: number = 100;
    private _MaxMana: number = 100;

    constructor(name: string){
        super(name);
    }

    public get mana(): number{
        return this._mana;
    }

    public castSpell(cost: number, spellName: string) {
        if (this._mana >= cost){
            this._mana -= cost;
            console.log(`${this.name} применил ${spellName}! Осталось Маны: ${this._mana}`);
        }else{
            console.log(`Не хватает МАНЫ! Для заклинания ${spellName}`);
        }
    }

    public override levelUp() {
        super.levelUp();
        this._mana = this._MaxMana;
        console.log(`Мана полностью восстановлена: ${this._mana}`);
    }
}