// Import modules
const names = require('./4-names'); 
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade'); // runs code immediately

// Use addValues from 6-alternative-flavor
data.addValues(); // Prints: The sum is: 15

// Log items and singlePerson
console.log(data.items);        // ['item1', 'item2']
console.log(data.singlePerson); // { name: 'Bob' }

// Use sayHi function
sayHi('wako');
sayHi(names.john);
sayHi(names.peter);
