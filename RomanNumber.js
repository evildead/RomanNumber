/**
 * library RomanNumber
 * @param {Roman String | Integer} val: can be a valid integer from 1 to 3999, or a string containing a valid Roman Number
 * 
 * M:  1000    XL: 40
 * CM: 900     X:  10
 * D:  500     IX: 9
 * CD: 400     V:  5
 * C:  100     IV: 4
 * XC: 90      I:  1
 * L:  50
 *
 */
const romanNumber = function RomanNumber(val) {
    if(!new.target) {
        return new RomanNumber(val);
    }

    if((typeof(val) === 'undefined') || (val === null) || (val === '')) {
        throw new Error('value required');
    }
};

/**
 * toInt
 */
romanNumber.prototype.toInt = function toInt() {
    return 1;
};

module.exports = romanNumber;
