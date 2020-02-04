class Bike {
  price: number;
  max_speed: number;
  miles: number;

  constructor(price: number, max_speed: number) {
    this.price = price;
    this.max_speed = max_speed;
    this.miles = 0;
  }

  displayinfo() {
    return "Price: " + this.price + " max speed: " + this.max_speed + " miles: " + this.miles;
  }

  ride() {
    this.miles += 10;
    return "Riding...";
  }

  reverse() {
    this.miles -= 5;
    return "Reversing...";
  }
}


let bike1 = new Bike(100, 25);
console.log(bike1.displayinfo())
console.log(bike1.ride())
console.log(bike1.displayinfo())
console.log(bike1.reverse())
console.log(bike1.displayinfo())

let bike2 = new Bike(150, 30);
console.log(bike2.displayinfo())
console.log(bike2.ride())
console.log(bike2.displayinfo())
console.log(bike2.reverse())
console.log(bike2.displayinfo())

let bike3 = new Bike(200, 35);
console.log(bike3.displayinfo())
console.log(bike3.ride())
console.log(bike3.displayinfo())
console.log(bike3.reverse())
console.log(bike3.displayinfo())
