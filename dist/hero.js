"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = void 0;
const ICharacter_js_1 = require("./ICharacter.js");
class Hero {
    _name = '';
    _health = 100;
    _level = 1;
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        const hasDigit = /\d/.test(value);
        if (value.trim() === '' || hasDigit) {
            throw new Error(`Ошибка: имя ${value} не должен содержать цифры или быть пустым`);
        }
        this._name = value.trim();
    }
    get health() {
        return this._health;
    }
    set health(value) {
        if (value > 100) {
            this._health = 100;
        }
        else if (value < 0) {
            this._health = 0;
        }
        else {
            this._health = value;
        }
    }
    get level() {
        return this._level;
    }
    takeDamage(amount) {
        this.health -= amount;
        console.log(`[Дамаг]: ${this.name} получил ${amount} единиц урона. ХП: ${this.health}`);
        if (this.health === 0) {
            console.log(`[Смерть]: ${this.name} летит в таверну пока его тима пушит трон `);
        }
    }
    heal(amount) {
        if (this.health === 100) {
            console.log(`[Лечение]: ${this.name} полностью здоров можно идти фармить лес`);
            return;
        }
        this.health += amount;
        console.log(`[Лечение]: ${this.name} исцелил ${amount} едениц ХП. Текущее ХП ${this.health}`);
    }
    levelUp() {
        this._level += 1;
        this.health = 100;
        console.log(`${this.name} получил ${this._level} уровень. Здоровье полностью восстановлено.`);
    }
}
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map