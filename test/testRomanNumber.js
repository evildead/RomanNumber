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
    });

});
