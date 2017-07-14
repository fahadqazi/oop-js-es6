//inheritance

class Vehicle{

}

class Drone extends Vehicle{

}

class Car extends Vehicle{

}

let c = new Car();

console.log(c instanceof Car);
console.log(c instanceof Vehicle);
console.log(c instanceof Object);