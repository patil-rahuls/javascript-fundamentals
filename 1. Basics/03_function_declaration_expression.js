//////////////////////////////////////////////////////////////
// FUNCTION DECLARATION AND EXPRESSIONS //////////////////////
//////////////////////////////////////////////////////////////
// Summary:
// Function declaration are hoisted before any 'var' declaration.
// Function expressions are not hoisted(unless they are 'var').
//////////////////////////////////////////////////////////////

// Functions are still Objects in JavaScript(Callable Objects).

// 1. Function declaration
// Are always hoisted.
// Hoisted before any 'var' variable declaration.
function calcAge(birthYear) {
  return 2021 - birthYear;
}

// 2. Function expression
// An expression is something that returns a value.
// We can write a function in the form of an expression and
// assign them to variables. This is because in javascript,
// functions are still values just like any other variables.
const calcAge2 = function(birthYear) {
  return 2021 - birthYear;
};

// BUT, What if?
function calcAge(birthYear) {
  return 2021 - birthYear;
}
var calcAge = function(birthYear) {
  return 'Hello';
};
calcAge();
// "Hello"
// This is because, the function expression is returned to a
// 'var' variable, and it will be hoisted before any function
// declaration.
