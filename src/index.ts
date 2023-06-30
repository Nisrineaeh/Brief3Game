// import { HeroAxe } from "./HeroAxe";
// import { HeroSpear } from "./HeroSpear";
// import { HeroSword } from "./HeroSword";

export class Weapon {
    name: string;
    damage: number;

    constructor(_name: string, _damage: number) {
        this.name = _name;
        this.damage = _damage;
    }

}

export class Hero {
    private name: string;
    private power: number;
    private life: number;
    weapon?: Weapon;

    constructor(_name: string, _power: number, _life: number) {
        this.name = _name;
        this.power = _power;
        this.life = _life;
    }

    attack(opponent: Hero): void {
        if (this.weapon) {
            opponent.life -= this.power + this.weapon.damage;
        } else {
            opponent.life -= this.power;
        }
    }

    isAlive(): boolean {
        return this.life > 0;
    }

    getname(): string {
        return this.name
    }

    setname(nouveauNom: string) {
        this.name = nouveauNom;
    }

    getpower(): number {
        return this.power
    }

    setpower(nouveauPower: string) {
        this.name = nouveauPower;
    }

    getlife(): number {
        return this.life
    }
    setlife(nouvelleLife: number): void {
        this.life = nouvelleLife;
    }
}

class HeroSword extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("sword", 50);
    }

    attack(opponent: Hero) {
        if (opponent instanceof HeroSpear) {
            opponent.setlife(opponent.getlife() - this.getpower() * 2)

        } else {
            super.attack(opponent);
        }
    }
}

class HeroSpear extends Hero {
    constructor(name: string, power: number, life: number) {
        super(name, power, life);
        this.weapon = new Weapon("spear", 50);
    }

    attack(opponent: Hero) {
        if (opponent instanceof HeroAxe) {
            opponent.setlife(opponent.getlife() - this.getpower() * 2)

        } else {
            super.attack(opponent);

        }
    }
}


class HeroAxe extends Hero {
    constructor(_name: string, _power: number, _life: number) {
        super(_name, _power, _life);
        // this.weapon = _weapon;
        this.weapon = new Weapon("Axe", 50);
    }

    attack(opponent: Hero): void {
        if (this.weapon) {
            opponent.setlife(- (this.getpower() * 2 + this.weapon.damage));
        } else {
            super.attack(opponent);
        }
    }
}


let hercule = new HeroSword("hercule", 1250, 10000);
let johnsson = new Hero("johnsson", 5000, 10000);
let i = 1;

while (hercule.isAlive() && johnsson.isAlive()) {
    hercule.attack(johnsson);
    johnsson.attack(hercule);
    console.log("round", i);
    console.log("La vie de johnsson :", johnsson.getlife());
    console.log("La vie de hercule :", hercule.getlife());
    i++;
}

if (!hercule.isAlive() && !johnsson.isAlive()) {
    console.log(`exequo`);
} else if (johnsson.isAlive()) {
    console.log(`${johnsson.getname()} + à gagner`);
} else {
    console.log(`${hercule.getname()} + à gagner`);
}
