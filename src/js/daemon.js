import { MathAttack } from './math.js';

export class Daemon extends MathAttack { 
    constructor(name) {
        super(name, "Daemon");
        this.attack = 10;
        this.defence = 40;
    }

}