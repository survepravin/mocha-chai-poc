const assert = require("chai").assert;
var calculatorV2 = require('../app/Calculator.v2');

describe('Calculator App - Subrtaction', function () {
    it('3 - 5 = -2', function () {
        let result = calculatorV2.subtractNumber(3, 5);
        assert.equal(result, -2);
    });

    it('subtractNumber should return of type number', function () {
        let result = calculatorV2.subtractNumber(3, 4);
        assert.typeOf(result, 'number');
    });

    it('1 - 2 - 3 - 4 = -10', function () {
        let result = calculatorV2.subtractNumbers(1, 2, 3, 4);
        assert.equal(result, -10);
    });

});