class Drone{
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    static getCompany(){
        console.log('Drones incorporated!')
    }
    
    fly(){
        console.log('Drone ' + this.id + ' is flying');
    }
}

let drone1 = new Drone('a123', 'Flyer');
let drone2 = new Drone('b456', 'Twirler');

drone1.fly();
Drone.getCompany();