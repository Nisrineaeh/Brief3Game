```typescript
// let message: string = "Hello World !";
// console.log(message);

// // les différents types de données primitives

// // /**
// //  * string
// //  * number
// //  * boolean
// //  * undefined
// //  * null
// //  * void
// //  */

// // typer un tableau avec TS

// //Première méthode de déclaration d'un tableau
// let tab: number[] = [1, 2, 3];

// console.log("la variable tab est de type : ", typeof tab[0]);
// console.log("la variable tab contient : ", tab);

// //Deuxième méthode de déclaration d'un tableau

// let tab2: Array<boolean>;
// tab2 = [true, false];
// console.log("la variable tab est de type : ", typeof tab2);

// // Quel est le type any

// let maVariable;

// console.log("variable sans typage : ", typeof maVariable);

// let maVariable2: any;

// console.log("variable sans typage : ", typeof maVariable2);

// let valeursAny: Array<any> = [1, "test", 4];

// // typer une fonction et ses paramètres

// function addition(a: number, b: number): number {
//   //   console.log("résultat a + b", a + b);
//   return a + b;
// }

// console.log("le type de retour de la fonction : ", typeof addition(5, 7));

// Niveau 2

// => classe :
// structure qui définit les caractéristiques et le comportement d'un objet
// => propriétés
// => méthode

// constructeur
// une méthode spéciale qui permet d'initialiser les valeurs des propriétés d'une instance

// une instance :
// Un objet créé à partir d'une classe

class Gateau {
  forme: string;
  private nombreDePart: number;
  Gout: string;

  constructor(
    paramForme: string,
    paramNombreDePart: number,
    paramGout: string
  ) {
    this.forme = paramForme;
    this.nombreDePart = paramNombreDePart;
    this.Gout = paramGout;
  }

  reduitUnePart() {
    this.nombreDePart -= 1;
    // this.Gout = "fraise";
  }

  donneMoiLeNombreDePartSTP(): void {
    console.log("test", this.nombreDePart);
  }
}

const fraisier: Gateau = new Gateau("rond", 36, "fraise");
fraisier.Gout = "mangue";
fraisier.reduitUnePart();

console.log("part du gateau : ", fraisier);
// fraisier.nombreDePart = 15;

console.log(
  "fraisier est elle ue instance de gateau : ",
  fraisier instanceof Gateau
);

// - Qu'est ce que `this` dans une classe ?
//  mot clé
// Faire reférence à l'instance de l'objet actuel sur lequel on se situe

// - Qu'est ce qu'une méthode de classe ?
// fonction attaché à l'instance d'une classe
// Comment l'executer ?
// nomDeMonInstance.nomDeMaMethode()

// - Qu'est ce que la visibilité des propriétés ?
// public
// private
// protected

// N'oubliez pas que vous êtes au top !!! 🔥🔥🔥
```

correction boss 
```typescript
class Hero {
  private name: string;
  private power: number;
  private life: number;

  constructor(_name: string, _power: number, _life: number) {
    this.name = _name;
    this.power = _power;
    this.life = _life;
  }

  attack(opponent: Hero) {
    opponent.reduceLife(this.power);
  }

  isAlive(): boolean {
    return this.life > 0;
  }

  private reduceLife(damage: number) {
    this.life -= damage;
    if (this.life < 0) {
      this.life = 0;
    }
  }

  get _name(): string {
    return this.name;
  }

  get _power(): number {
    return this.power;
  }

  get _life(): number {
    return this.life;
  }

  set _power(power: number) {
    this.power = power;
  }

  set _life(life: number) {
    this.life = life;
  }
}

class Weapon {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  get _name(): string {
    return this.name;
  }
}

class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = new Weapon("axe");
  }

  attack(opponent: Hero) {
    if (opponent instanceof HeroSword) {
      this.setPower(this.getPower() * 2);
    }
    super.attack(opponent);
    this.setPower(this.getPower() / 2);
  }
}

class HeroSword extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = new Weapon("sword");
  }

  attack(opponent: Hero) {
    if (opponent instanceof HeroSpear) {
      this.setPower(this.getPower() * 2);
    }
    super.attack(opponent);
    this.setPower(this.getPower() / 2);
  }
}

class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number) {
    super(name, power, life);
    this.weapon = new Weapon("spear");
  }

  attack(opponent: Hero) {
    if (opponent instanceof HeroAxe) {
      this.setPower(this.getPower() * 2);
    }
    super.attack(opponent);
    this.setPower(this.getPower() / 2);
  }
}

// Partie 1 : Héros

const joan: Hero = new Hero("Joan", 10, 100);
const leon: Hero = new Hero("Leon", 8, 80);

joan.attack(leon);
console.log(leon.getLife()); // Output: 90
console.log(leon.isAlive()); // Output: true

// Partie 2 : Armes

const joanAxe: HeroAxe = new HeroAxe("Joan (Axe)", 10, 100);
const leonSword: HeroSword = new HeroSword("Leon (Sword)", 8, 80);
const marcusSpear: HeroSpear = new HeroSpear("Marcus (Spear)", 12, 90);

joanAxe.attack(leonSword);
leonSword.attack(marcusSpear);
marcusSpear.attack(joanAxe);

console.log(joanAxe.getPower()); // Output: 10
console.log(leonSword.getPower()); // Output: 8
console.log(marcusSpear.getPower()); // Output: 12

// Partie 3 : Bataille

while (joanAxe.isAlive() && leonSword.isAlive()) {
  joanAxe.attack(leonSword);
  leonSword.attack(joanAxe);
}

if (!joanAxe.isAlive() && !leonSword.isAlive()) {
  console.log("It's a draw.");
} else if (joanAxe.isAlive()) {
  console.log(joanAxe.getName() + " wins.");
} else {
  console.log(leonSword.getName() + " wins.");
}
```