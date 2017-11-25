//Require the dev-dependencies
let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
let assert = chai.assert;

const RomanNumber = require('../RomanNumber');

describe('RomanNumber', () => {

    describe('Check exceptions', () => {
        it('The constructor should return an object', () => {
            let romanNumber = new RomanNumber(1);
            assert.isObject(romanNumber);
        });

        it('The constructor should be callable without new', () => {
            let romanNumber = RomanNumber(1);
            assert.isObject(romanNumber);
        });

        it('The object should contain method toInt', () => {
            let romanNumber = RomanNumber(1);
            assert.isFunction(romanNumber.toInt);
        });
        
        it('The object should contain method toString', () => {
            let romanNumber = RomanNumber(1);
            assert.isFunction(romanNumber.toString);
        });

        it('The constructor invoked with null should return an exception: value required', () => {
            expect(() => RomanNumber(null)).to.throw(Error, /^value required$/);
        });
        
        it('The constructor invoked with empty string should return an exception: value required', () => {
            expect(() => RomanNumber('')).to.throw(Error, /^value required$/);
        });
        
        it('The constructor invoked with no value should return an exception: value required', () => {
            expect(() => RomanNumber()).to.throw(Error, /^value required$/);
        });

        it('The constructor invoked with 0 should return an exception: invalid range', () => {
            expect(() => RomanNumber(0)).to.throw(Error, /^invalid range$/);
        });
        
        it('The constructor invoked with 10000 should return an exception: invalid range', () => {
            expect(() => RomanNumber(10000)).to.throw(Error, /^invalid range$/);
        });

        it('The constructor invoked with "error" should return an exception: invalid value', () => {
            expect(() => RomanNumber('error')).to.throw(Error, /^invalid value$/);
        });
        
        it('The constructor invoked with "CD1X" should return an exception: invalid value', () => {
            expect(() => RomanNumber('CD1X')).to.throw(Error, /^invalid value$/);
        });

        it('The constructor invoked with "1473" should not return an exception', () => {
            expect(() => RomanNumber('1473')).to.not.throw();
        });
    });

    describe('Check values', () => {
        it('The arabic number 1 should be equal to the Roman number "I"', () => {
            let romannum = RomanNumber(1);
            romannum.toString().should.equal('I');
            romannum.toInt().should.equal(1);
        });

        it('The arabic number "1" should be equal to the Roman number "I"', () => {
            let romannum = RomanNumber('1');
            romannum.toString().should.equal('I');
            romannum.toInt().should.equal(1);
        });

        it('The arabic number 2 should be equal to the Roman number "II"', () => {
            let romannum = RomanNumber(2);
            romannum.toString().should.equal('II');
            romannum.toInt().should.equal(2);
        });

        it('The arabic number 3 should be equal to the Roman number "III"', () => {
            let romannum = RomanNumber(3);
            romannum.toString().should.equal('III');
            romannum.toInt().should.equal(3);
        });

        it('The arabic number 4 should be equal to the Roman number "IV"', () => {
            let romannum = RomanNumber(4);
            romannum.toString().should.equal('IV');
            romannum.toInt().should.equal(4);
        });

        it('The arabic number 5 should be equal to the Roman number "V"', () => {
            let romannum = RomanNumber(5);
            romannum.toString().should.equal('V');
            romannum.toInt().should.equal(5);
        });
    });

});
