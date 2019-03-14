/**
 * Method adds two numbers.
 * @param {number} num1 
 * @param {number} num2 
 */
var addNumber = (num1, num2) => {
    return num1 + num2;
}

/**
 * Method adds multiple numbers.
 * @param  {...any} numbers
 */
var addNumbers = (...numbers) => {
    var temp = 0;
    for (var i = 0; i < numbers.length; i++) {
        temp = temp + numbers[i];
    }
    return temp
}

module.exports = {addNumber, addNumbers}