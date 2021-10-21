//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY FUNCTIONS /////////////////////////
//////////////////////////////////////////////////////////////

// Consider this array as an example.
const myArr = ['rahul', 'hitesh', 'aajesh', 55];

// 1. indexOf()
// Returns index of element present in the array, -1 otherwise.
myArr.indexOf('rahul'); //  0 ‘rahul’ is 1st element in the array
myArr.indexOf('milan'); // -1 because element not found
myArr.indexOf('55');    // -1 (string ‘55’ is passed. No Type Coercion occurs)

// 2. includes()
// Returns Boolean if element is present in the array.
myArr.includes('rahul');   // true
myArr.includes('anish');   // false
myArr.includes('55');      // false (string ‘55’ is passed. No Type Coercion occurs)

// indexOf() and includes() both use strict equality checking.

// With includes(), code looks user friendly.
