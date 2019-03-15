/**
 * Method adds two numbers.
 * @param {number} num1 
 * @param {number} num2 
 */
var multiplyNumber = (num1, num2) => {
    return num1 * num2;
}

/**
 * Method adds multiple numbers.
 * @param  {...any} numbers
 */
var multiplyNumbers = (...numbers) => {
    var temp = 1;
    if (numbers.length > 1) {
        for (var i = 0; i < numbers.length; i++) {
            temp = temp * numbers[i];
        }
        return temp
    } else {
        return temp = numbers[0] * numbers[0];
    }
}

module.exports = {
    multiplyNumber,
    multiplyNumbers
}