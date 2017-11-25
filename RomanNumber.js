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

    if(RomanNumber.isValidInt(val)) {
        this.intVal = parseInt(val);
        this.strVal = RomanNumber.intToRoman(this.intVal);
    }
    else if(RomanNumber.checkOnlyRomanSymbols(val)) {
        
    }
    else {
        throw new Error('invalid value');
    }
};

romanNumber.isValidInt = function isValidInt(val) {
    if( (Number.isInteger(val)) ||
        ((typeof(val) === "string" || val instanceof String) && Number.isInteger(parseInt(val))) ) {
        
        let intVal = parseInt(val);
        if((intVal < 1) || (intVal > 3999)) {
            throw new Error('invalid range');
        }

        return true;
    }
    else {
        return false;
    }
};

romanNumber.intToRoman = function intToRoman(val) {
    let intVal = parseInt(val);
    let finalStr = '';

    let ones = intVal % 10;
    intVal = parseInt(intVal / 10);
    let tens = intVal % 10;
    intVal = parseInt(intVal / 10);
    let hundreds = intVal % 10;
    intVal = parseInt(intVal / 10);
    let thousands = intVal % 10;

    switch(ones) {
    case 1:
        finalStr = 'I';
        break;
    case 2:
        finalStr = 'II';
        break;
    case 3:
        finalStr = 'III';
        break;
    case 4:
        finalStr = 'IV';
        break;
    case 5:
        finalStr = 'V';
        break;
    case 6:
        finalStr = 'VI';
        break;
    case 7:
        finalStr = 'VII';
        break;
    case 8:
        finalStr = 'VIII';
        break;
    case 9:
        finalStr = 'IX';
        break;
    default:
        break;
    }

    switch(tens) {
    case 1:
        finalStr = 'X' + finalStr;
        break;
    case 2:
        finalStr = 'XX' + finalStr;
        break;
    case 3:
        finalStr = 'XXX' + finalStr;
        break;
    case 4:
        finalStr = 'XL' + finalStr;
        break;
    case 5:
        finalStr = 'L' + finalStr;
        break;
    case 6:
        finalStr = 'LX' + finalStr;
        break;
    case 7:
        finalStr = 'LXX' + finalStr;
        break;
    case 8:
        finalStr = 'LXXX' + finalStr;
        break;
    case 9:
        finalStr = 'XC' + finalStr;
        break;
    default:
        break;
    }

    switch(hundreds) {
    case 1:
        finalStr = 'C' + finalStr;
        break;
    case 2:
        finalStr = 'CC' + finalStr;
        break;
    case 3:
        finalStr = 'CCC' + finalStr;
        break;
    case 4:
        finalStr = 'CD' + finalStr;
        break;
    case 5:
        finalStr = 'D' + finalStr;
        break;
    case 6:
        finalStr = 'DC' + finalStr;
        break;
    case 7:
        finalStr = 'DCC' + finalStr;
        break;
    case 8:
        finalStr = 'DCCC' + finalStr;
        break;
    case 9:
        finalStr = 'CM' + finalStr;
        break;
    default:
        break;
    }

    switch(thousands) {
    case 1:
        finalStr = 'M' + finalStr;
        break;
    case 2:
        finalStr = 'MM' + finalStr;
        break;
    case 3:
        finalStr = 'MMM' + finalStr;
        break;
    default:
        break;
    }

    return finalStr;
};

romanNumber.checkOnlyRomanSymbols = function checkOnlyRomanSymbols(val) {
    if((typeof(val) !== "string") && !(val instanceof String)) {
        return false;
    }

    let romanSymbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

    for(let i = 0; i < val.length; i++) {
        if(romanSymbols.indexOf(val[i].toUpperCase()) < 0) {
            return false;
        }
    }

    return true;
};

/**
 * toInt
 */
romanNumber.prototype.toInt = function toInt() {
    return parseInt(this.intVal);
};

/**
 * toString
 */
romanNumber.prototype.toString = function toString() {
    return this.strVal;
};

// export romanNumber
module.exports = romanNumber;
