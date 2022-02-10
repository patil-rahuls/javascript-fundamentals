//////////////////////////////////////////////////////////////
// LET, CONST, VAR COMPARISION ///////////////////////////////
//////////////////////////////////////////////////////////////

// 3. Hoisting

// Variables declared using *var* are always hoised to the top of their respective scope
// with value 'undefined' before the code is run.
// They are accessible in their enclosing function scope even before they are declared.
function foo() {
   console.log(x);    // undefined
   var x = "Rahul";
   console.log(x);    // "Rahul"
}

foo();

// *let* variables are not initialized until their definition is evaluated.
// They are said to be in ‘temporal dead zone’ from the start of the block 
// until the initialization is processed.
function checkHoisting() {
   console.log(x);    // Uncaught ReferenceError: Cannot access 'x' before initialization
   let x = "Rahul";
   console.log(x);
   console.log(y);    // Uncaught ReferenceError: 'y' is not defined.
}

checkHoisting();

// WHY TDZ exist ? (Answer : to identify the type of issue/bug)
// Observe the first error message: "Cannot access 'x' before initialization"
// It is because the code is certain that 'name' is initialized later in the code.
// Hence it is kept in TDZ. Thus we can identify the issue from error message created by TDZ and 
// it makes it easier to avoid errors/bugs which are hard to find.

// Also, another reason why TDZ exists, is to make *const* variables work as intended. i.e. 
// to throw error if *const* variable is not initialized while defining. 

// This is a useful behaviour, since *var* can be more prone to errors.


