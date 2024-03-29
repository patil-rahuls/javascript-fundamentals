//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS - JOIN() ////////////////
//////////////////////////////////////////////////////////////

// ARRAY -> STRING

// JOIN: Implodes an array into a string(this is similar to implode in PHP)
// IMP: returns a STRING not ARRAY.
const arr = [11,22,33,44,55,66];
const result = arr.join('-');

console.log(result);              // "11-22-33-44-55-66"
console.log(typeof result);      // "string"
