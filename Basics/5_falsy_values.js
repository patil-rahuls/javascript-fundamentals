//////////////////////////////////////////////////////////////
// FALSY VALUES in JS ////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Following are treated as falsy in javascript
// 0
// ''
// undefined
// null
// NaN

console.log(Boolean(0));         // false
console.log(Boolean(''));        // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null));      // false
console.log(Boolean(NaN));       // false
 
// Empty objects are not falsy 
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true
