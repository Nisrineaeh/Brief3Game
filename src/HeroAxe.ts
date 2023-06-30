import {Hero} from "./index";
import {Weapon} from "./index";
import {HeroSword} from "./HeroSword";


export class HeroAxe extends Hero {
    constructor(_name: string, _power: number, _life: number, _weapon:Weapon) {
        super(_name, _power, _life);
        this.weapon = _weapon;
        this.weapon.name = "Axe";
    }

    attack(opponent: Hero):void {
        if (opponent instanceof HeroSword) {   
            opponent.setlife(opponent.getlife() - this.getpower()*2)
        }else{
        super.attack(opponent);
        }
    }
}