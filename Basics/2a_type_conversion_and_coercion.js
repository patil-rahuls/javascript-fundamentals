//////////////////////////////////////////////////////////////
// TYPE CONVERSION AND COERCION //////////////////////////////
//////////////////////////////////////////////////////////////

// Type Conversion
let age = 28;
console.log(typeof age); // number
age = "28";
console.log(typeof age); // string

// Type Coercion (Implicit type conversion)
let str = "I am " + age; // In this assignment, "age" gets converted from "number" type to "string" type.
console.log(typeof age); // "age" is still a "number" type.

// When ALL operands are '+' AND when one of the operands of + is a string,
// the operands after FIRST string operand, are converted autmatically into string(Type Coercion).
console.log("23" + "10" + 3);       // 23103
console.log("23" + "10" + 3 + 5);   // 231035 and NOT 23108
console.log(4 + 1 + "5" + 6);       // 556

// Rest all mathematical operations work normally with Type Coercion applied automatically.
console.log("23" - "10" - 3);   // 10
console.log("23" + "10" - 3);   // 2307 // Observe the 0 appended before 7. weird :/
console.log(1 + 3 + 5 + "5");   // Becomes : 9 + '5' which results in 95
let xx = Number("5");           // String "5" converted to number explicitly.

// Type coercion is simply type conversion that happens implicitly.
