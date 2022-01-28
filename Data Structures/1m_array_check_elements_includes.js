//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS - CHECK ELEMENT EXISTS //
//////////////////////////////////////////////////////////////

// Consider this array as an example.
const myArr = ['rahul', 'hitesh', 'aajesh', 55];

// includes()
// Returns Boolean if element is present in the array.
myArr.includes('rahul');   // true
myArr.includes('anish');   // false
myArr.includes('55');      // false (string ‘55’ is passed. No Type Coercion occurs)

// includes() use strict equality checking.


