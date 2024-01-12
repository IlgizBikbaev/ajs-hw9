import { MathAttack } from './math.js';

export class Magician extends MathAttack {
    constructor(name) {
        super(name, "Magician");
        this.attack = 10;
        this.defence = 40;
    }
}