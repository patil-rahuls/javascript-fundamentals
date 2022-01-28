//////////////////////////////////////////////////////////////
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS //////////////////
//////////////////////////////////////////////////////////////

// Functions that can be executed ONLY ONCE AND disappear to not run again ever.
// OR
// To call a function immediately WITHOUT having to SAVE IT SOMEWHERE.

// Consider the following function as an example:
const show = function (){
   alert("this is an IIFE");
}

// Put parens ( ) around it to make it a function expression without assigning to any variable.
(function (){
   alert("this is an IIFE");
});

// To call it, simply call that expression just like any regular function
(function (){
   alert("this is an IIFE");
})();
// It's now interpreted as a function call to our function expression.


// Note that it is not stored in any variable, and it is immediately invoked while declared. 
// Same works with an arrow function
( () => alert("This IIFE is written in arrow form") )();

// IMP: Why are these in javascript ? 
//      Ans. "Variables Scope"
// We use IIFE to just keep some variables hidden in the function scope and not make it available in global scope.
// IIFE creates a scope. Every function creates its own scope in which variables are confined.


