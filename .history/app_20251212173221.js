const names = require('./4-names'); 
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

// Call functions
data.addValues();

console.log(names);
console.log(data.items);
console.log(data.person);

sayHi('wako');
sayHi(names.john);
sayHi(names.peter);
