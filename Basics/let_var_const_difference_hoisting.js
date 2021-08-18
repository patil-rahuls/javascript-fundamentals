//////////////////////////////////////////////////////////////
// LET, CONST, VAR COMPARISION ///////////////////////////////
//////////////////////////////////////////////////////////////

// 3. Hoisting
// Variables declared using var are always hoised to the top of their respective scope with value undefined before the code is run. 
// They are accessible in their enclosing function scope even before they are declared.
function foo() {
   console.log(x);    // undefined
   var x = "Rahul";
   console.log(x);    // "Rahul"
}

foo();

// const and let variables are not initialized until their definition is evaluated.
// they are said to be in ‘temporal dead zone’ from the start of the block until the initialization is processed
function checkHoisting() {
   console.log(x);    // Uncaught ReferenceError: Cannot access 'x' before initialization
   let x = "Rahul";
   console.log(x);
}

checkHoisting();
// This is a useful behaviour, since var can be more prone to errors, such as accidental re-assignment.
