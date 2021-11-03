//////////////////////////////////////////////////////////////
// FUNCTION DECLARATION AND EXPRESSIONS //////////////////////
//////////////////////////////////////////////////////////////

// 1. Function declaration
function calcAge ( birthYear ) {
   return 2021 - birthYear;
}

// 2. Function expression 
// An expression is something that returns a value.
// We can write a function in the form of an expression and assign them to variables.
// This is because in javascript, functions are still values just like any other variables.
const calcAge2 = function ( birthYear ) {
   return 2021 - birthYear;
}
