// 6-alternative-flavor.js
const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`The sum is: ${num1 + num2}`);
}

const items = ['item1', 'item2'];
const singlePerson = { name: 'Bob' };

// Export everything in one object
module.exports = {
    addValues,
    items,
    singlePerson
};
