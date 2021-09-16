//////////////////////////////////////////////////////////////
// TYPEOF OPERATOR ///////////////////////////////////////////
//////////////////////////////////////////////////////////////

console.log(typeof [2,4,6]);        // "object"

console.log(typeof {});             // "object"

console.log(typeof x);              // "undefined" (if x is not defined)

console.log(typeof "arr");          // "string"

console.log(typeof 4);              // "number"

console.log(typeof true);           // "boolean"

// Despite being "Not-A-Number"
console.log(typeof NaN);            // "number"

const square = num => num*num;
console.log(typeof square);         // "function"