class Drone{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

//setting static or class properties
//this property is only available on the class, not on instances
Drone.maxHeight = 2000;

let drone1 = new Drone('a123', 'Flyer');
let drone2 = new Drone('b456', 'Twirler');

console.log(drone1.id + ' ' + drone2.id);

console.log(Drone.maxHeight);