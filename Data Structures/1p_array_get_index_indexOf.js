//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS - GET ELEMENT INDEX /////
//////////////////////////////////////////////////////////////

// Consider this array as an example.
const myArr = ['rahul', 'hitesh', 'aajesh', 55];

// indexOf()
// Returns index of element present in the array, -1 otherwise.
myArr.indexOf('rahul'); //  0 ‘rahul’ is 1st element in the array
myArr.indexOf('milan'); // -1 because element not found
myArr.indexOf('55');    // -1 (string ‘55’ is passed. No Type Coercion occurs)

// indexOf() use strict equality checking.


