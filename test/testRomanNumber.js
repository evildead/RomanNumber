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

        it('The constructor invoked with "IIII" should return an exception: invalid value', () => {
            expect(() => RomanNumber('IIII')).to.throw(Error, /^invalid value$/);
        });

        it('The constructor invoked with "MMMMCMXCIX" should return an exception: invalid value', () => {
            expect(() => RomanNumber('MMMMCMXCIX')).to.throw(Error, /^invalid value$/);
        });

        it('The constructor invoked with "MMMMDMXCIX" should return an exception: invalid value', () => {
            expect(() => RomanNumber('MMMMDMXCIX')).to.throw(Error, /^invalid value$/);
        });

        it('The constructor invoked with "MMMDMXCIX" should return an exception: invalid value', () => {
            expect(() => RomanNumber('MMMDMXCIX')).to.throw(Error, /^invalid value$/);
        });

        it('The constructor invoked with "MIM" should return an exception: invalid value', () => {
            expect(() => RomanNumber('MIM')).to.throw(Error, /^invalid value$/);
        });

        it('The constructor invoked with "MDCVV" should return an exception: invalid value', () => {
            expect(() => RomanNumber('MDCVV')).to.throw(Error, /^invalid value$/);
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

        it('The arabic number 49 should be equal to the Roman number "XLIX"', () => {
            let romannum = RomanNumber(49);
            romannum.toString().should.equal('XLIX');
            romannum.toInt().should.equal(49);
        });

        it('The arabic number 1968 should be equal to the Roman number "MCMLXVIII"', () => {
            let romannum = RomanNumber(1968);
            romannum.toString().should.equal('MCMLXVIII');
            romannum.toInt().should.equal(1968);
        });

        it('The arabic number "1473" should be equal to the Roman number "MCDLXXIII"', () => {
            let romannum = RomanNumber("1473");
            romannum.toString().should.equal('MCDLXXIII');
            romannum.toInt().should.equal(1473);
        });

        it('The arabic number 2999 should be equal to the Roman number "MMCMXCIX"', () => {
            let romannum = RomanNumber(2999);
            romannum.toString().should.equal('MMCMXCIX');
            romannum.toInt().should.equal(2999);
        });

        it('The arabic number 3000 should be equal to the Roman number "MMM"', () => {
            let romannum = RomanNumber(3000);
            romannum.toString().should.equal('MMM');
            romannum.toInt().should.equal(3000);
        });

        it('The arabic number 3999 should be equal to the Roman number "MMMCMXCIX"', () => {
            let romannum = RomanNumber(3999);
            romannum.toString().should.equal('MMMCMXCIX');
            romannum.toInt().should.equal(3999);
        });

        it('The Roman number "I" should be equal to the arabic number 1', () => {
            let romannum = RomanNumber('I');
            romannum.toString().should.equal('I');
            romannum.toInt().should.equal(1);
        });

        it('The Roman number "II" should be equal to the arabic number 2', () => {
            let romannum = RomanNumber('II');
            romannum.toString().should.equal('II');
            romannum.toInt().should.equal(2);
        });

        it('The Roman number "III" should be equal to the arabic number 3', () => {
            let romannum = RomanNumber('III');
            romannum.toString().should.equal('III');
            romannum.toInt().should.equal(3);
        });

        it('The Roman number "IV" should be equal to the arabic number 4', () => {
            let romannum = RomanNumber('IV');
            romannum.toString().should.equal('IV');
            romannum.toInt().should.equal(4);
        });

        it('The Roman number "V" should be equal to the arabic number 5', () => {
            let romannum = RomanNumber('V');
            romannum.toString().should.equal('V');
            romannum.toInt().should.equal(5);
        });

        it('The Roman number "XXX" should be equal to the arabic number 30', () => {
            let romannum = RomanNumber('XXX');
            romannum.toString().should.equal('XXX');
            romannum.toInt().should.equal(30);
        });

        it('The Roman number "XL" should be equal to the arabic number 40', () => {
            let romannum = RomanNumber('XL');
            romannum.toString().should.equal('XL');
            romannum.toInt().should.equal(40);
        });

        it('The Roman number "XC" should be equal to the arabic number 90', () => {
            let romannum = RomanNumber('XC');
            romannum.toString().should.equal('XC');
            romannum.toInt().should.equal(90);
        });

        it('The Roman number "CC" should be equal to the arabic number 200', () => {
            let romannum = RomanNumber('CC');
            romannum.toString().should.equal('CC');
            romannum.toInt().should.equal(200);
        });

        it('The Roman number "CD" should be equal to the arabic number 400', () => {
            let romannum = RomanNumber('CD');
            romannum.toString().should.equal('CD');
            romannum.toInt().should.equal(400);
        });

        it('The Roman number "DCCC" should be equal to the arabic number 800', () => {
            let romannum = RomanNumber('DCCC');
            romannum.toString().should.equal('DCCC');
            romannum.toInt().should.equal(800);
        });

        it('The Roman number "MMM" should be equal to the arabic number 3000', () => {
            let romannum = RomanNumber('MMM');
            romannum.toString().should.equal('MMM');
            romannum.toInt().should.equal(3000);
        });

        it('The Roman number "CDXXIX" should be equal to the arabic number 429', () => {
            let romannum = RomanNumber('CDXXIX');
            romannum.toString().should.equal('CDXXIX');
            romannum.toInt().should.equal(429);
        });

        it('The Roman number "MCDLXXXII" should be equal to the arabic number 1482', () => {
            let romannum = RomanNumber('MCDLXXXII');
            romannum.toString().should.equal('MCDLXXXII');
            romannum.toInt().should.equal(1482);
        });

        it('The Roman number "MCMLXXX" should be equal to the arabic number 1980', () => {
            let romannum = RomanNumber('MCMLXXX');
            romannum.toString().should.equal('MCMLXXX');
            romannum.toInt().should.equal(1980);
        });

        it('The Roman number "MMMCMXCIX" should be equal to the arabic number 3999', () => {
            let romannum = RomanNumber('MMMCMXCIX');
            romannum.toString().should.equal('MMMCMXCIX');
            romannum.toInt().should.equal(3999);
        });
    });

});
