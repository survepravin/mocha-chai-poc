module.exports = {

    /**
     * Method subtracts two numbers.
     * @param {number} num1 
     * @param {number} num2 
     */
    subtractNumber: function (num1, num2) {
        return num1 - num2;
    },

    /**
     * Method subtracts multiple numbers.
     * @param  {...any} numbers
     */
    subtractNumbers: function (...numbers) {
        var temp = 0;
        for (var i = 0; i < numbers.length; i++) {
            temp = temp - numbers[i];
        }
        return temp
    }
}