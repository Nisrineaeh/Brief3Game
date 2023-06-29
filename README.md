
# Consignes

Tu vas devoir trouver les informations suivantes et les tester au fur et à mesure dans ton programme pour expérimenter et comprendre comment TypeScript pourra t'aider à écrire ton meilleur code !

## Level 1

- Quels sont les différents type primitives de données en TypeScript ? 
    Number, String, Boolean, Void:retour de f(x) qui ne retourne rien (néant), Null, Undefined.
- Comment typer un tableau ? 
    ```typescript
        let maVariable:number[]=['1','2','3'];
        console.log("la variable est de type :", typeof maVariable); maVariable[0]
        console.log("la variable contient :", maVariable);
    ou  let maVariable: Array<number>=['1','2','3'];
    ```
- Quel est le type `any` ?
    `any` est un type dynamique qui peut contenir n'importe quelle valeur.
    ```typescript
        let placard:any = 10;
        placard="vide";
    ```
- Comment typer le retour d'une fonction ainsi que le type de ses paramètres ? 
    ```typescript
        function Sum(a: number, b:number):number{
        return a+b;
        
         }
    console.log(Sum(10,12));
    ```
**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 2

- Qu'est ce qu'une classe ? 
    Un modèle qui définit les caratctéristiques et comportements d'un objet, et sert de plan pour la création d'instances d'objets:
    ```typescript
        class Cheminot{
            name:string;
            age:number;
        }
    ```
- Qu'est ce qu'un constructeur de classe ? 
    Méthode appelé lors de la création d'instance de classe
    ```typescript
        class Cheminot{
            name:string;
            age:number;

            constructor(name:string, age:number){
                this.name=name;
                this.age=age;
            }
        }
    ```
- Qu'est ce qu'une instance de classe ?
    Un objet creer à partir d'une classe
    ```typescript
        const premierecheminot: Cheminot= new Cheminot("Melina",39);
    ```
- Comment vérifier qu'une classe est d'une certaine instance ?
    'Instanceof'
    ```typescript
        console.log(premiercheminot instanceof Cheminot); //return true;
    ```

- Qu'est ce que `this` dans une classe ?
    Accède à la propriété d'une instance.
    ```typescript
        class Cheminot{
            name:string;
            age:number;

            constructor(name:string, age:number){
                this.name=name;
                this.age=age;
            }
            console.log(`Le cheminot s'apelle ${this.name} et à ${this.age} ans.`);
        }
    ```
- Qu'est ce qu'une méthode de classe ? 
    Une f(x) dans une class qui définie son comportement
    ```typescript
        class Voiture{
            private brand:string;
            public model:string;
            year:number;

            constructor(brand:string, model:string, year:number){
                this.brand=brand;
                this.model=model;
                this.year=year;
            }

            StartEngin(){
                console.log(`La ${this.brand}, modèle ${this.model} démarre.`);
            }

            StopEngin(){
                console.log(`La ${this.brand}, modèle ${this.model} est arrêté.`);
            }
        }

        const premiervoiture:Voiture= new Voiture("Mercedes","classe A", 2008);
    ```
- Qu'est ce que la visibilité des propriétés ? 
    Cela fait référence à la portée et à l'accessibilité des propriétés d'une classe ou d'un objet, TypeScript fournit trois modificateurs de visibilité : public, private et protected.

    ### Public :
     Une propriété déclarée comme publique est accessible à la fois à l'intérieur de la classe et à l'extérieur de celle-ci. Cela signifie que la propriété peut être utilisée et modifiée à partir de n'importe où dans le code.

    ### Private :
    Une propriété déclarée comme privée est accessible uniquement à l'intérieur de la classe où elle est définie. Elle n'est pas accessible à l'extérieur de la classe, y compris dans les classes dérivées (sous-classes).

    ### Protected :
    Une propriété déclarée comme protégée est similaire à une propriété privée, mais avec une différence importante : elle est également accessible dans les classes dérivées (sous-classes). Cela signifie qu'une classe dérivée peut accéder à la propriété protégée de sa classe parente.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 3

- Comment faire pour diviser notre programme en différents fichiers ? (ex: une classe dans un fichier que j'importe dans un autre)
    import/exports
    ```typescript
        fichier index.ts

        export class Cheminot{
            name:sting;
            age:number;

            constructor(name:string, age:number){
                this.name=name;
                this.age=age;
            }
            
        }

        fichier main.ts

        import {Cheminot} from "./script.ts";

        const laura: Cheminot= new Cheminot ("laura",18);
        console.log(laura.name); // Output laura
    ```
- Qu'est ce que l'héritage ?
    Quand une class (enfant) hérite des propriétés et méthodes d'une autre classe (parent)
    ```typescript
        class animal{
            race:string;
            age:number;
            couleur:string;

            constructor(paramRace:string, paramAge:number, paramCouleur:astring){
                this.paramRace= race;
                this.paramAge =  age;
                this.paramCouleur = couleur;
            
            }

            dors(){
                console.log(`le ${this.paramRace} dors`);
              }

        }


        
        class chat extends animal{
            dors(){
                console.log(`le ${this.paramRace} dors`);
            }
        }

    ```
- Comment appeler le constructeur d'une classe mère ? 
    SUPER()
```typescript

    class animal {
        nom:string;
        race:string;
        couleur:string;

        constructor(nom:string, race:string, couleur:string) {
            this.nom = nom;
            this.race = race;
            this.couleur = couleur;
        
        }

        allerchezLeVeto(){
            console.log(`bonjour ${this.nom}`);
            
        }
    }
    
    
    class chat extends animal {
        categorie:string;

        constructor(nom:string, race:string, couleur:string,categorie:string){
            super(nom,race,couleur);
            this.categorie = categorie;
        }
    
    
    }

    const duo :chat = new chat("chacha", "siamois", "rouge", "cat3");
```
    
- Comment appeler une méthode d'une classe mère ? 
    SUPER.

```typescript
    
class animal {
        nom:string;
        race:string;
        couleur:string;

        constructor(nom:string, race:string, couleur:string) {
            this.nom = nom;
            this.race = race;
            this.couleur = couleur;
        
        }

        allerchezLeVeto(){
            console.log(`bonjour ${this.nom}`);
            
        }
}
    
    
    class chat extends animal {
        categorie:string;

        constructor(nom:string, race:string, couleur:string,categorie:string){
            super.allerchezLeVeto();
            this.categorie = categorie;
        } 
}
    const duo :chat = new chat("chacha", "siamois", "rouge", "cat3");


 ```
- Qu'est ce que le polymorphism ? 
    

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Boss level 

Met en pratique le fruit de tes recherches à travers cet exercice en binôme !
### Partie 1 : Héros

La classe `Hero` permet de créer des objets possédant les propriétés suivantes :

    name : string
    power : number
    life : number

​Et les méthodes

    attack(opponent: Hero)
    isAlive()

​La méthode `attack` a un paramètre `opponent` (de type `Hero`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

​
*Exemple : Si Joan attaque Leon, cela sera représenté par :*

    joan.attack(leon)

​La méthode `isAlive` devrait retourner `true` si le nombre de points de vie du héros est supérieur à zéro et `false` sinon.

Crée deux instances de `Hero` et vérifie que les méthodes `attack` et `isAlive` fonctionnent.

**Contrainte à ajouter** : il faut maintenant faire en sorte que les propriétés `name`, `power`, `life` soient privées. Tu vas devoir créer des méthodes permettant d'accéder à leur valeur et de modifier leur valeur.

### Partie 2 : Armes
​
Crée une classe `Weapon` avec la propriété suivante :

    name : string

Ajoute l'attribut `weapon` (de type `Weapon`) à la classe `Hero` sans modifier le constructeur (ainsi `weapon` n'est pas initialisé).

Crée trois classes `HeroAxe`, `HeroSword` et `HeroSpear` qui héritent de `Hero`.

Ces trois classes appellent le constructeur de leur parent et initialisent `weapon` avec des instances de la classe `Weapon` dont les noms seront `axe`, `sword` ou `spear` selon le cas.

Dans les classes `HeroAxe`, `HeroSword` et `HeroSpear`, redéfinisse la méthode `attack` pour prendre en compte les cas suivants :

- `HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
- `HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
- `HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

​
Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

Crée des instances des trois classes `HeroAxe`, `HeroSword` et `HeroSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.
​
### Partie 3 : Bataille

Crée une boucle qui fait que deux instances de sous-classes `Hero` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, afficher `{heroName} wins`. Si les deux sont morts, afficher `It's a draw`.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

---

***Bonus 1 : Les dégâts de l'arme***

*Ajoute une propriété `damage` à la classe `Weapon` et fait en sorte qu'elle soit initialisée par le constructeur.*

*Modifie la méthode `attack` de `Hero` afin que les dégâts soient calculés de la façon suivante : la puissance du héro `power` + les dégâts de l'arme `power`*

***Bonus 2 : Interface graphique***

*Réalise une interface graphique pour l'application (par exemple, avec un choix de héros et d'armes, et un visuel sur les dégâts infligés)*

