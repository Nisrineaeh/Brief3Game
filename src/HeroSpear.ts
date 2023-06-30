import { Hero } from "./index";
import { Weapon } from "./index";
import {HeroAxe} from "./HeroAxe";

export class HeroSpear extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("spear");
    }

    attack(opponent: Hero) {
        if (opponent instanceof HeroAxe) {
            opponent.setlife(opponent.getlife() - this.getpower() * 2)

        }
        super.attack(opponent);

        //this.setpower(this.getpower() / 2);
    }
}