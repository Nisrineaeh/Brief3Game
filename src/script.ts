class Hero {
    private name:string;
    private power:number;
    private life:number;

    constructor(name:string,power:number,life:number) {
      
        this.name = name;
        this.power = power;
        this.life = life;

    }

    attack(opponent:Hero){
        opponent.life -= this.power;   
    }
    
    isAlive(){
        this.life > 0;
    }

}

let hercule:Hero = new Hero("hercule", 19, 300)
let johnsson:Hero = new Hero("johnsson", 19, 200)


hercule.attack(johnsson)
johnsson.attack(hercule)