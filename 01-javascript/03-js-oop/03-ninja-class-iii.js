
class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;
    }
    sayName() {
        console.log("Hi! My name is " + this.name);
    }
    showStats() {
        console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`);
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
      super(name);
      this.health = 200;
      this.speed = 10;
      this.strength = 10;
      this.widsom = 10;
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"