//////////////////////////////////////////////////////////////
// TYPEOF OPERATOR ///////////////////////////////////////////
//////////////////////////////////////////////////////////////

console.log(typeof [2,4,6]);        // "object" NOT array

console.log(typeof {});             // "object"

console.log(typeof x);              // "undefined" (if x is not defined)

console.log(typeof "arr");          // "string"

console.log(typeof 4);              // "number"

console.log(typeof true);           // "boolean"

// Despite being not a number, it is considered to be a Number type.
console.log(typeof NaN);            // "number"
console.log(typeof Infinity);       // "number"
// So in JS, Numbers range is like this : NAN, ..., -2, -1, 0, 1, 2, ... , Infinity

const square = num => num*num;
console.log(typeof square);         // "function"
