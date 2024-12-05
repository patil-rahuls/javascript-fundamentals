//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS - JOIN() ////////////////
//////////////////////////////////////////////////////////////

// ARRAY -> STRING

// JOIN: Implodes an array into a string(this is similar to implode in PHP)
// IMP: returns a STRING not ARRAY.
const arr = [11,22,33,44,55,66];
const result = arr.join('-');
const result2 = arr.join('');
const result3 = arr.join();      // By default comma will be the delimeter. 

console.log(result);             // "11-22-33-44-55-66"
console.log(result2);            // "112233445566"
console.log(result3);            // "11,22,33,44,55,66"
console.log(typeof result);      // "string"; same for result2 and result2.
