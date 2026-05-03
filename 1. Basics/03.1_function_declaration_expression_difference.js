//////////////////////////////////////////////////////////////
// FUNCTION DECLARATION AND EXPRESSIONS DIFFERENCE ///////////
//////////////////////////////////////////////////////////////

// *function-declarations* are hoisted,
// *function-expressions* are not.

// Function-declarations are hoisted. A function call can be
// written before its declaration inside a JS file.
const area = calcArea(34);

// Function declared later in the source code.
function calcArea(side) {
   return side**2;
}

// But the same DOES NOT work with function-expression.
const square = calcSQ(34);
// Error "Cannot Access 'calcArea2' before initialization."

const calcSQ = function(side) {  // Function declared later.
   return side**2;
}

// By contrast, you can only call a function expression
// in linear sequence. You have to define it before you call it.
// Always prefer function expression because it will enforce us to
// declare the function before using it, without the "use strict".
