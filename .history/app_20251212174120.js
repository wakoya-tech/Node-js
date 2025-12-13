const names = require('./4-names'); 
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
const data = require('./6-alternative-flavor');

data.addValues();             // Works now
console.log(data.items);      // ['item1', 'item2']
console.log(data.singlePerson); // { name: 'Bob' }


// Use sayHi
sayHi('wako');
sayHi(names.john);
sayHi(names.peter);
