import { Hero } from "./index";
import { Weapon } from "./index";
import {HeroSpear} from "./HeroSpear";

export class HeroSword extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("sword");
    }

    attack(opponent: Hero) {
        if (opponent instanceof HeroSpear) {
            opponent.setlife(opponent.getlife() - this.getpower() * 2)

        }
        super.attack(opponent);

        //this.setpower(this.getpower() / 2);
    }
}