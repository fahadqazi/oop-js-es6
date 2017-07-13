class Drone{
    constructor(id){
        this._id = id
    }

    get id(){
        return this._id;
    }

    set id(value){
        this._id = value;
    }
}

let drone1 = new Drone('123');
console.log(drone1.id);
drone1.id = '456';
console.log(drone1.id);