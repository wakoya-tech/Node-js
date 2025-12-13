const names = require('./4-names'); 
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

// Use addValues
data.addValues();             // Works now

// Log items and person
console.log(data.items);      
console.log(data.singlePerson);

// Use sayHi
sayHi('wako');
sayHi(names.john);
sayHi(names.peter);
