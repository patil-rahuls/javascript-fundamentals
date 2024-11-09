//////////////////////////////////////////////////////////////
// FALSY VALUES in JS ////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Following are treated as Falsy in javascript
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

// Empty objects are not Falsy
console.log(Boolean({}));        // true
console.log(Boolean([]));        // true

// Difference between null and undefined.
// *undefined* means a variable has been declared but has not yet been assigned a value.
var testVar;
console.log(testVar);            // undefined
console.log(typeof testVar);     // undefined

// *null* is an assignment value(object). It can be assigned to a variable as a representation of no value.
var testVar = null;
console.log(testVar);             // null
console.log(typeof testVar);      // object

// *undefined* is a type itself (undefined) while *null* is an object.
