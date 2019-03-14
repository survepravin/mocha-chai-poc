const assert = require("chai").assert;
var calculatorV1 = require('../app/Calculator.v1');
var calculatorV2 = require('../app/Calculator.v2');

describe('Calculator App', function () {

    describe('Addition', function () {
        it('3 + 5 = 8', function () {
            let result = calculatorV1.addNumber(3, 5);
            assert.equal(result, 8);
            assert.isAbove(result, 5);
        });

        it('addNumber should return of type number', function () {
            let result = calculatorV1.addNumber(3, 4);
            assert.typeOf(result, 'number');
        });

        it('1 + 2 + 3 + 4 = 10', function () {
            let result = calculatorV1.addNumbers(1, 2, 3, 4);
            assert.equal(result, 10);
        });

    });

    describe('Subrtaction', function () {
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

});