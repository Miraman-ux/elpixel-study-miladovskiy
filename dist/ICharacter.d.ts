export interface ICharacter {
    readonly name: string;
    readonly health: number;
    readonly level: number;
    takeDamage(amount: number): void;
    heal(amount: number): void;
    levelUp(): void;
}
//# sourceMappingURL=ICharacter.d.ts.map