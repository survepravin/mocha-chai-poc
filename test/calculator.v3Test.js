const assert = require("chai").assert;
var calculatorV3 = require('../app/Calculator.v3');

describe('Calculator App - Multiplicatio', function () {
    it('3 * 5 = 15', function () {
        let result = calculatorV3.multiplyNumber(3, 5);
        assert.equal(result, 15);
    });

    it('multiplyNumber should return of type number', function () {
        let result = calculatorV3.multiplyNumber(3, 4);
        assert.typeOf(result, 'number');
    });

    it('1 * 2 * 3 * 4 = 24', function () {
        let result = calculatorV3.multiplyNumbers(1, 2, 3, 4);
        assert.equal(result, 24);
    });

    it('single value should multiply by itself', function () {
        let result = calculatorV3.multiplyNumbers(4);
        assert.equal(result, 16);
    });

});