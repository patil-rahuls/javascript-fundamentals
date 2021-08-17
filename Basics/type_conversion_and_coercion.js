//////////////////////////////////////////////////////////////
// TYPE CONVERSION AND COERCION //////////////////////////////
//////////////////////////////////////////////////////////////

// Type Conversion
let age = 28;         
console.log(typeof age); // number
age = '28';
console.log(typeof age); // string

//  Type Coercion (implicit type conversion)
let str = "I am " + age; // age gets converted from number type to string type (only for this statement)
console.log(typeof age); // number

// When one of the operands of + is a string, the result is a string(type conversion).
console.log('23' + '10' + 3 ); // 23103
console.log('23' + '10' + 3+5);// 231035

// Rest all mathematical operations work normally with coercion applied automatically by javascript.
console.log('23' - '10' - 3); // 10
console.log(1 + 3 + 5 + '5'); // Becomes : 9 + '5' which results in 95
let xx = Number("5");         // String "5" converted to number explicitly.

// Type coercion is simply type conversion that happens implicitly.
