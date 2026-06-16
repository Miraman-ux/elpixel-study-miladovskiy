import { Hero } from './hero.js';
export declare class Archer extends Hero {
    private _arrowCount;
    constructor(name: string, arrowCount: number);
    get arrowCount(): number;
    restockArrows(amount: number): void;
    shoot(): void;
}
//# sourceMappingURL=archer.d.ts.map