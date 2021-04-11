import { Engine } from './Engine';
import { Car } from './Car';

var c1 = new Car(new Engine("V8", 430));
var c2 = new Car(new Engine("1.9TID", 150));

c1.addAccessories("Parking camera");
c2.addAccessories("Leather seats", "Infotainment");
c1.start();
c2.start();
c1.stop();
console.log(c1.accessoryList);
console.log(c2.accessoryList);