//////////////////////////////////////////////////////////////
// TYPE CONVERSION AND COERCION //////////////////////////////
//////////////////////////////////////////////////////////////

// 1. Type Conversion (Explicit)
let age = 28;
console.log(typeof age); // number
age = "28";
console.log(typeof age); // string


// 2. Type Coercion (Implicit type conversion)
let str = "I am " + age; // In this assignment, "age" gets
// converted from "number" type to "string" type.
console.log(typeof age); // "age" is still a "number" type.


// When we have ALL '+' operators in an expression AND
// when one of the operands is a string, the operands after
// FIRST string operand are coerced autmatically
// into string (Type Coercion).
console.log("23" + "10" + 3);       // 23103
console.log("23" + "10" + 3 + 5);   // 231035 and NOT 23108
console.log(4 + 1 + "5" + 6);       // 556

// Rest all mathematical operations work normally with
// type Coercion applied automatically.
console.log("23" - "10" - 3);   // 10 (number)
console.log("23" + "10" - 3);   // "2307" (string)
console.log(1 + 3 + 5 + "5");   // becomes 9 + "5" i.e. "95"
let xx = Number("5");
// String "5" converted to number explicitly.


// Happens with Arrays too.
let a = [1,2,3];
let b = a + 10;
console.log(b); // '1,2,310' (string)
// The + operator prefers strings if it can't find two
// numbers to add. Since one side is an array,
// JavaScript tries to convert that array into a
// "primitive" value i.e. string. It does this by calling
// the array's .toString() method.

// [1, 2, 3].toString() results in the string "1,2,3"
// followed by the string concatenation resulting in:
// '1,2,310' string result.

// Type coercion = implicit type conversion.


//////////////////////////////////////////////////////////////
// NUMBER TYPE CONVERSIONS ///////////////////////////////////
//////////////////////////////////////////////////////////////

// 1. parseInt() & parseFloat()
// both convert a string loosely to a number

// parseInt() Extracts an 'integer' value from the START
// of the string or returns NaN.
parseInt('12')     // 12
parseInt(12.345)   // 12
parseInt('12.345') // 12
parseInt('aaa')    // NaN
parseInt('')       // NaN
parseInt('   ')    // NaN
parseInt(' 2.3')   // 2
parseInt('1   ')   // 1
parseInt('foo2')   // NaN
parseInt('12a5')   // 12
parseInt('0x10')   // 16
// It will allow you to specify a 'radix'
// for converting the string to an int.
// Observe the last statement above.
parseInt('0x10')
// It considers '0x' as radix and considers it as a hex value
// and returns its decimal equivalent (i.e. 16)
parseInt('08')
// Radix is '0' i.e. an Octal number.
// Returns its decimal equivalent (i.e. 0)


// parseFloat() Extracts a 'floating-point' value from the
// START of the string or returns NaN.
parseFloat('12.345') // 12.345
parseFloat('12.345abc') // 12.345
parseFloat('abc12.345') // NaN
parseFloat('') // NaN
parseFloat('   ') // NaN
parseFloat(' 2.3') // 2.3
parseFloat('1   ') // 1
parseFloat('foo2') // NaN
parseFloat('12a5') // 12
parseFloat('0x10') // 0
// parseFloat() does not consider '0x' as radix and hence
// returns 0 because it fails to parse the string as a
// floating-point number.


// Number() does a strict conversion of a string to a number
// and returns NaN otherwise.
Number('12.345') // 12.345
Number('12.345abc') // NaN
Number('abc12.345') // NaN
Number('') // 0
Number('   ') // 0
Number(' 2.3') // 2.3
Number('1   ') // 1
Number('foo2') // NaN
Number('12a5') // NaN
Number('0x10') // 16
