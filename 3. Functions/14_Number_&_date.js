//////////////////////////////////////////////////////////////
// NUMBER FUNCTIONS //////////////////////////////////////////
//////////////////////////////////////////////////////////////

// The built-in Number object has properties for numerical constants, 
// such as maximum value, not-a-number, and infinity. 
// You cannot change the values of these properties and you use them as follows:
const biggestNum = Number.MAX_VALUE; // The largest positive representable number (1.7976931348623157e+308)
const smallestNum = Number.MIN_VALUE; // The smallest positive representable number (5e-324)
const infiniteNum = Number.POSITIVE_INFINITY; // Special positive infinite value; returned on overflow
const negInfiniteNum = Number.NEGATIVE_INFINITY; // Special negative infinite value; returned on overflow
const notANum = Number.NaN; // Special "not a number" value
Number.MIN_SAFE_INTEGER; // Minimum safe integer in JavaScript (−2^53 + 1, or −9007199254740991)
Number.MAX_SAFE_INTEGER; //	Maximum safe integer in JavaScript (+2^53 − 1, or +9007199254740991)

// Methods
Number.parseFloat();	// Parses a string argument and returns a floating point number. Same as the global parseFloat() function.
Number.parseInt();	// Parses a string argument and returns an integer of the specified radix or base. Same as the global parseInt() function.
Number.isFinite();	// Determines whether the passed value is a finite number.
Number.isInteger();	// Determines whether the passed value is an integer.
Number.isNaN();	// Determines whether the passed value is NaN. More robust version of the original global isNaN().
Number.isSafeInteger();	// Determines whether the provided value is a number that is a safe integer.

// More on -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates

//////////////////////////////////////////////////////////////
// DATE //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// WIP