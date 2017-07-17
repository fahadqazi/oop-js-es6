import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';

let tb = new TitleBar('Our Application');
tb.addLink('Home', '');
tb.addLink('Cars', '');
tb.addLink('Drones', '');
tb.addLink('Map', '');
tb.appendToElement($('body'));

// let b = new Button('Click Me');
// b.appendToElement($('body'))

// let i = new Image('../images/drone.jpg');
// i.appendToElement($('body'));


// let dataService = new FleetDataService();
// dataService.loadData(fleet);

// console.log(dataService);

// for (let car of dataService.cars){
//     console.log(car.license); 
// }

// // this works if fleet-data.js is modified
// for (let errors of dataService.errors){
//     console.log(errors.message);
// }

// let car = dataService.getCarByLicense('AT9900');
// console.log('Found the car: ', car);

// let cars = dataService.getCarsSortedByLicense();
// for (let car of cars){
//     console.log(car.license);
// }

// let filteredCars = dataService.filterCarsByMake('U');
// for (let car of filteredCars){
//     console.log(car.make);
// }