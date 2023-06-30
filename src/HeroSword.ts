import { Hero } from "./index";
import { Weapon } from "./index";
import {HeroSpear} from "./HeroSpear";

export class HeroSword extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("sword",50);
    }

    attack(opponent: Hero) {
        if (opponent instanceof HeroSpear) {
            opponent.setlife(opponent.getlife() - this.getpower() * 2)

        }else{
        super.attack(opponent);
        }
    }
}