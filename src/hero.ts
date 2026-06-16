import {ICharacter} from "./ICharacter.js";

export abstract class Hero implements ICharacter {
    protected _name: string = '';
    protected _health: number = 100;
    protected _level: number = 1;

    protected constructor(name: string){
        this.name = name;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        const hasDigit = /\d/.test(value);
        if (value.trim() === '' || hasDigit) {
            console.error(`Ошибка: имя не должно содержать цифры или быть пустым`);
        }
        this._name = value.trim();
    }

    public get health(): number {
        return this._health;
    }

    public set health(value: number) {
        if (value > 100){
            console.error(`Ошибка у героя не может быть больше 100хп`)
        }else if (value < 0){
            this._health = 0;
        }else{
            this._health = value;
        }
    }

    public get level(){
        return this._level;
    }

    public takeDamage(amount: number): void {
        this.health -= amount;

        console.log(`[Дамаг]: ${this.name} получил ${amount} единиц урона. ХП: ${this.health}`);

        if (this.health === 0){
            console.log(`[Смерть]: ${this.name} летит в таверну пока его тима пушит трон `);
        }
    }

    public heal(amount: number): void {
        if (this.health === 100){
            console.log(`[Лечение]: ${this.name} полностью здоров можно идти фармить лес`);
            return;
        }

        const newHealth = Math.min(this.health + amount, 100);

        const actualHeal = newHealth - this.health;

        this.health = newHealth;

        console.log(`[Лечение]: ${this.name} исцелил ${actualHeal} единиц ХП. Текущее ХП ${this.health}`);
    }

    public levelUp(): void{
        this._level += 1;
        this.health = 100;
        console.log(`${this.name} получил ${this._level} уровень. Здоровье полностью восстановлено.`);
    }
}

