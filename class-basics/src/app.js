// Methods with inheritance
// Method in car overrides method in Vehicle
class Vehicle{
    start(){
        console.log('starting vehicle....')
    }
    static getCompanyName(){
        console.log('LockHeed Martin ...')
    }
}

class Car extends Vehicle{
    start(){
        super.start();  //this use it use both start methods
        console.log('starting car...')
    }
    static getCompanyName(){
        super.getCompanyName();     //this runs the parent static method as well.
        console.log('Local Desi Company....')
    }
}

let c = new Car();
c.start();
Car.getCompanyName();   //Derived classes can inherit static methods & override parent class static methods
c.getCompanyName();     //Error