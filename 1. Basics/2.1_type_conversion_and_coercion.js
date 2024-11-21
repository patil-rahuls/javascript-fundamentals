//////////////////////////////////////////////////////////////
// TYPE CONVERSION AND COERCION //////////////////////////////
//////////////////////////////////////////////////////////////

// 1. Type Conversion
let age = 28;
console.log(typeof age); // number
age = "28";
console.log(typeof age); // string


// 2. Type Coercion (Implicit type conversion)
let str = "I am " + age; // In this assignment, "age" gets converted from "number" type to "string" type.
console.log(typeof age); // "age" is still a "number" type.


// When ALL operands are '+' AND when one of the operands of + is a string,
// the operands after FIRST string operand, are converted autmatically into string(Type Coercion).
console.log("23" + "10" + 3);       // 23103
console.log("23" + "10" + 3 + 5);   // 231035 and NOT 23108
console.log(4 + 1 + "5" + 6);       // 556

// Rest all mathematical operations work normally with Type Coercion applied automatically.
console.log("23" - "10" - 3);   // 10
console.log("23" + "10" - 3);   // 2307
console.log(1 + 3 + 5 + "5");   // Becomes : 9 + '5' which results in 95
let xx = Number("5");           // String "5" converted to number explicitly.

// Type coercion is simply type conversion that happens implicitly.

//////////////////////////////////////////////////////////////
// NUMBER TYPE CONVERSIONS ///////////////////////////////////
//////////////////////////////////////////////////////////////

// 1. parseInt() & parseFloat()
// converts a string loosely to a number
parseInt(num)      // extracts a numeric value from the 
                   // start of the string, or returns NaN.
parseInt('12')     // 12
parseInt(12.345)   // 12
parseInt('12.345') // 12
parseInt('aaa')    // NaN
parseInt('')       // NaN
parseInt('   ')    // NaN
parseInt(' 2.3')   // 2
parseInt('1   ')   // 1
parseInt('12px')   // 12
parseInt('foo2')   // NaN      These last three may
parseInt('12a5')   // 12       be different from what
parseInt('0x10')   // 16       you expected to see.

// It will allow you to specify a 'radix' for converting the string to an int.
// Observe the last statement above.
parseInt('0x10')   // It considers '0x' as radix and considers it as a hex value
                   // and returns its decimal equivalent (i.e. 16)
parseInt('08')     // Radix is '0' i.e. an Octal number. Returns its decimal equivalent (i.e. 0)
