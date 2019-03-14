const assert = require("chai").assert;
const expect = require("chai").expect;
var calculatorV1 = require('../app/Calculator.v1');

describe('Calculator App - Addition', function () {
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

    it('3 + 5 = 8 : with expect', function () {
        let result = calculatorV1.addNumber(3, 5);
        expect(result).to.equal(8);
        expect(result).to.greaterThan(5);
    });

    it('Some examples in expect', () => {
        expect({a: 1}).to.deep.equal({a: 1});
        
        expect({a: 1}).to.not.equal({a: 1});
        
        expect([{a: 1}, {b: 2}]).to.deep.include({a: 1});
        
        expect({
            p: {
                a: 1
            },
            q: {
                b: 2
            }
        }).to.deep.keys({p:3, q:1});

        expect({
            p: {
                a: 1
            },
            q: {
                b: 2
            }
        }).to.deep.property('p', {a:1});

        expect({a: {b: ['x', 'y']}}).to.have.nested.property('a.b[1]');

        expect({
            a: {
                b: ['x', 'y']
            },
            x: {
                z: {
                    p: 1,
                    q: 2
                }
            }
        }).to.have.nested.property('x.z.p')

        // custom message if expect fails
        expect({a: 1}, '=== deep value not matched ===').to.deep.equal({a: 1});
    })
});