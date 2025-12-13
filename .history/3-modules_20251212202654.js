const names =require('./4-names')
const sayHi=require('./5-utils');
const data=require('./6-alternative-flavor')
const wako=require('./7-mind-grenade')


console.log(names.john); // John
console.log(names.peter); // Peter
console.log(wako.addValues());
sayHi('wako')
console.log(data.items);
console.log(data.singlePerson);