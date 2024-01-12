 export class MathAttack {
    constructor(attack, distance) {
        this.attack = attack;
        this.distance = distance;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

    set attack(value) {
        this._attack = value;
    }
    
     get attack() {
         let attack = this._attack * (1 - (this.distance - 1) / 10);
         if (this.stoned) {
            attack -= Math.log2(this.distance) * 5;
         }

        if (attack < 0) {
            return 0;
        } else {
            attack = Math.round(attack);
            return attack;    
        }
    }
}  