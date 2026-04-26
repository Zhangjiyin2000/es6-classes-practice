class Vehicle {
  constructor(engine, speed) {
    this.engine = engine;
    this.speed = speed;
  }

  info() {
    console.log(`Engine: ${this.engine}, Speed: ${this.speed}`);
  }
}

class Car extends Vehicle {
  constructor(engine, speed, wheels, brake) {
    super(engine, speed);
    this.wheels = wheels;
    this.brake = brake;
  }

  honk() {
    console.log("Honk!");
  }

  static isTesla(car) {
    return car.brake === true;
  }
}

// Example
const car1 = new Car("electric", 120, 4, true);

car1.info(); 
// Engine: electric, Speed: 120

car1.honk(); 
// Honk!

console.log(Car.isTesla(car1)); 
// true