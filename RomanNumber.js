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
        if(this.intVal == 1) {
            this.strVal = 'I';
        }
        else if(this.intVal == 2) {
            this.strVal = 'II';
        }
        else if(this.intVal == 3) {
            this.strVal = 'III';
        }
        else if(this.intVal == 4) {
            this.strVal = 'IV';
        }
        else if(this.intVal == 5) {
            this.strVal = 'V';
        }
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
