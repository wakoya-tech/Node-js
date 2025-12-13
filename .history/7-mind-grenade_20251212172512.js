const num1 = 5;
const num2 = 10;

function addValues() {
    console.log(`The sum is: ${num1 + num2}`);
}

// Export the function so other files can use it
module.exports = { addValues };
