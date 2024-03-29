//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS - SPLIT() ///////////////
//////////////////////////////////////////////////////////////

// STRING -> ARRAY

// JOIN: Explodes a string into an array (this is similar to explode() in PHP)
// IMP: returns an ARRAY NOT STRING.
const str = "11,22,33,44,55,66";
const result = str.split(',');

console.log(result);              // [11,22,33,44,55,66]
console.log(typeof result);       // "object"
