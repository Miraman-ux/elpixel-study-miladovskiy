import { ICharacter } from "./ICharacter.js";
export declare abstract class Hero implements ICharacter {
    protected _name: string;
    protected _health: number;
    protected _level: number;
    protected constructor(name: string);
    get name(): string;
    set name(value: string);
    get health(): number;
    set health(value: number);
    get level(): number;
    takeDamage(amount: number): void;
    heal(amount: number): void;
    levelUp(): void;
}
//# sourceMappingURL=hero.d.ts.map