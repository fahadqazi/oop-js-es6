//inheritance

class Vehicle{
    constructor(){
        console.log('constructing vehicle')
    }
}

class Drone extends Vehicle{

}

class Car extends Vehicle{
    constructor(){
        super();
        console.log('car constructor');
    }
}

let c = new Car();

console.log(c instanceof Car);
console.log(c instanceof Vehicle);
console.log(c instanceof Object);