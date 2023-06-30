export class Hero {
    private name:string;
    private power:number;
    private life:number;
            weapon!:Weapon;

    constructor(_name:string, _power:number, _life:number) {
      
        this.name = _name;
        this.power = _power;
        this.life = _life;

    }

    attack(opponent:Hero){
        opponent.life -= this.power;   
    }
    
    isAlive(){
       return this.life > 0;
    }

    getname(): string {
        return this.name
    }

    setname(nouveauNom : string) {
        this.name = nouveauNom;
    }
    
    getpower(): number {
        return this.power
    }

    setpower(nouveauPower : string) {
        this.name = nouveauPower;
    }
    
    getlife(): number {
        return this.life
    }
    setlife(nouvelleLife : number) {
        this.life = nouvelleLife;
    }
}


let hercule:Hero = new Hero("hercule", 19, 300)
let johnsson:Hero = new Hero("johnsson", 19, 200)

 
hercule.attack(johnsson)
johnsson.attack(hercule)










export class Weapon{
    name:string;

    constructor(wname: string){
        this.name = wname;
    }
}
































// Partie 1 : Héros

// const joan: Hero = new Hero("Joan", 10, 100);
// const leon: Hero = new Hero("Leon", 8, 80);

// joan.attack(leon);
// console.log(leon.getLife()); // Output: 90
// console.log(leon.isAlive()); // Output: true

// // Partie 2 : Armes

// const joanAxe: HeroAxe = new HeroAxe("Joan (Axe)", 10, 100);
// const leonSword: HeroSword = new HeroSword("Leon (Sword)", 8, 80);
// const marcusSpear: HeroSpear = new HeroSpear("Marcus (Spear)", 12, 90);

// joanAxe.attack(leonSword);
// leonSword.attack(marcusSpear);
// marcusSpear.attack(joanAxe);

// console.log(joanAxe.getPower()); // Output: 10
// console.log(leonSword.getPower()); // Output: 8
// console.log(marcusSpear.getPower()); // Output: 12

// // Partie 3 : Bataille

// while (joanAxe.isAlive() && leonSword.isAlive()) {
//     joanAxe.attack(leonSword);
//     leonSword.attack(joanAxe);
// }

// if (!joanAxe.isAlive() && !leonSword.isAlive()) {
//     console.log("It's a draw.");
// } else if (joanAxe.isAlive()) {
//     console.log(joanAxe.getName() + " wins.");
// } else {
//     console.log(leonSword.getName() + " wins.");
// }