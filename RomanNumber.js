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
        this.strVal = val.toUpperCase();
        this.intVal = RomanNumber.romanToInt(this.strVal);
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

/**
 * static method intToRoman
 * @param {Integer} val: must be an integer between 1 and 3999 (even in the form '1' to '3999')
 * 
 * The patterns for ones, tens, hundreds and thousands are the same:
 * only symbols change:
 * 
 *  Patterns:
 * 
 *              |   1   |   2   |   3   |   4   |   5   |   6   |   7   |   8   |   9   |
 *  Ones:       |   I   |   II  |  III  |   IV  |   V   |   VI  |  VII  |  VIII |   IX  |
 * 
 *              |   10  |   20  |   30  |   40  |   50  |   60  |   70  |   80  |   90  |
 *  Tens:       |   X   |   XX  |  XXX  |   XL  |   L   |   LX  |  LXX  |  LXXX |   XC  |
 * 
 *              |  100  |  200  |  300  |  400  |  500  |  600  |  700  |  800  |  900  |
 *  Hundreds:   |   C   |   CC  |  CCC  |   CD  |   D   |   DC  |  DCC  |  DCCC |   CM  |
 * 
 *              |  1000 |  2000 |  3000 |   -   |   -   |   -   |   -   |   -   |   -   |
 *  Thousands:  |   M   |   MM  |  MMM  |   -   |   -   |   -   |   -   |   -   |   -   |
 */
romanNumber.intToRoman = function intToRoman(val) {
    let intVal = parseInt(val);
    let onesSym       = ['I', 'V', 'X'];
    let tensSym       = ['X', 'L', 'C'];
    let hundredsSym   = ['C', 'D', 'M'];
    let thousandsSym  = ['M', '-', '-'];
    let finalStr = '';
    
    // Retrieve units, tens, hundreds and thousands from val
    for(let i = 0; i < 4; i++) {
        let tmpSym;
        let tmpVal;
        if(i == 0) {        // ones
            tmpSym = onesSym;
        }
        else if(i == 1) {   // tens
            tmpSym = tensSym;
        }
        else if(i == 2) {   // hundreds
            tmpSym = hundredsSym;
        }
        else {              // thousands
            tmpSym = thousandsSym;
        }
        tmpVal = intVal % 10;
        intVal = parseInt(intVal / 10);

        switch(tmpVal) {
        case 1:
            finalStr = tmpSym[0] + finalStr;
            break;
        case 2:
            finalStr = tmpSym[0] + tmpSym[0] + finalStr;
            break;
        case 3:
            finalStr = tmpSym[0] + tmpSym[0] + tmpSym[0] + finalStr;
            break;
        case 4:
            finalStr = tmpSym[0] + tmpSym[1] + finalStr;
            break;
        case 5:
            finalStr = tmpSym[1] + finalStr;
            break;
        case 6:
            finalStr = tmpSym[1] + tmpSym[0] + finalStr;
            break;
        case 7:
            finalStr = tmpSym[1] + tmpSym[0] + tmpSym[0] + finalStr;
            break;
        case 8:
            finalStr = tmpSym[1] + tmpSym[0] + tmpSym[0] + tmpSym[0] + finalStr;
            break;
        case 9:
            finalStr = tmpSym[0] + tmpSym[2] + finalStr;
            break;
        default:
            break;
        }
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

romanNumber.romanToInt = function romanToInt(val) {
    let patternsArray = [
        ["I", 1],    ["II", 2],    ["III", 3],   ["IV", 4],   ["V", 5],   ["VI", 6],   ["VII", 7],   ["VIII", 8],   ["IX", 9],    // Ones
        ["X", 10],   ["XX", 20],   ["XXX", 30],  ["XL", 40],  ["L", 50],  ["LX", 60],  ["LXX", 70],  ["LXXX", 80],  ["XC", 90],   // Tens
        ["C", 100],  ["CC", 200],  ["CCC", 300], ["CD", 400], ["D", 500], ["DC", 600], ["DCC", 700], ["DCCC", 800], ["CM", 900],  // Hundreds
        ["M", 1000], ["MM", 2000], ["MMM", 3000]                                                                                  // Thousands
    ];
    let patterns = new Map(patternsArray);

    let i = 0;
    let finalInt = 0;
    let numConsecutives;

    // this loop is used to read the entire Roman string
    while(i < val.length) {
        let tmpPattern = '';
        // this loop is used to build the next pattern and to check for more than 3 consecutive symbols 
        while(i < val.length) {
            // check for more than 3 consecutive symbols ////////////
            if((i > 0) && (val[i] == val[i-1])) {
                if(numConsecutives == 3) {
                    throw new Error('invalid value');
                }
                else {
                    numConsecutives++;
                }
            }
            else {
                numConsecutives = 1;
            }
            /////////////////////////////////////////////////////////
            
            if(tmpPattern.length == 0) {
                tmpPattern += val[i++];
            }
            else {
                let tmpPatternVal = patterns.get(tmpPattern + val[i]);
                if(typeof(tmpPatternVal) !== 'undefined') {
                    tmpPattern += val[i++];
                }
                else {
                    break;
                }
            }
        }

        if(tmpPattern.length > 0) {
            let tmpNum = patterns.get(tmpPattern);
            finalInt += tmpNum;
        }
    }

    return finalInt;
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
