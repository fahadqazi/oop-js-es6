//inheritance
// this way you have license property available on the class
// i.e. every vehicle has a license Number
class Vehicle{
    constructor(licenseNumber){
        this.licenseNumber = licenseNumber;
    }
}

class Drone extends Vehicle{

}

class Car extends Vehicle{
    constructor(licenseNumber){
        super(licenseNumber);
    }
}

let c = new Car('a123');
