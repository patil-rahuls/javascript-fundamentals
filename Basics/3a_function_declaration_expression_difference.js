//////////////////////////////////////////////////////////////
// FUNCTION DECLARATION AND EXPRESSIONS DIFFERENCE ///////////
//////////////////////////////////////////////////////////////

// In usage, the key difference is that function declarations are hoisted, 
// while function expressions are not.

// Function Declarations are hoisted.
// With this, a function can be called before its declaration.
const a1 = calcArea (34);

function calcArea ( side ) {     // Function declared later in the source code.
   return side**2;
}
 
// But the same DOES NOT work with a Function Expression.
const a1 = calcSQ(34);           // Error "Cannot Access 'calcArea2' before initialization."

const calcSQ = function(side) {  // Function declared later.
   return side**2;
}
   
// By contrast, you can only call a function expression in linear sequence: 
// you have to define it before you call it. Always prefer function expression because, 
// it will enforce us to declare the function before using it, without the "use strict".
