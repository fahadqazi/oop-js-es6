//inheritance
// gspEnabled is on base class so it can be: 
// 1. inherited from base class `Vehicle`
// 2. over ridden by definined in the var class
class Vehicle{
    constructor(){
        this.gspEnabled = true;
    }
}

class Drone extends Vehicle{

}

class Car extends Vehicle{
    constructor(){
        super();
        this.gspEnabled = false;
    }
}

let c = new Car();

console.log(c.gspEnabled);