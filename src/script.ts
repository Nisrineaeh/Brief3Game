class Hero {
    private name:string;
    private power:number;
    private life:number;

    constructor(name:string, power:number, life:number) {
      
        this.name = name;
        this.power = power;
        this.life = life;

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

}