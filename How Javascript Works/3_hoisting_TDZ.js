//////////////////////////////////////////////////////////////
// HOISTING AND TDZ Temporal Dead Zone ///////////////////////
//////////////////////////////////////////////////////////////

// In the Execution Context's - Variable Environment

// Hoisting: Before Execution, code is scanned for variable declarations and for each variable,
// a new property is created in the Variable Environment.

// So, the function declarations (NOT function expressions), 
// variables declared using 'var' in global scope are all first stored in the Variable Environment.
// This is how Hoisting actually works.

// let and const variables also said to be hoisted but in block scope AND
// their value is <uninitialized>TDZ (The variable is said to be in Temporal Dead Zone)

// WHY TDZ ?
// Makes it easier to avoid errors.
// Accessing variables before declaration is a bad practice.

// Why Hoisting?
// Using functions before actual decalration.
// var hoisting is just a byproduct.
// Code can be cleaner and useful.


