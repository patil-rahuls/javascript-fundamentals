//////////////////////////////////////////////////////////////
// HOISTING AND TDZ Temporal Dead Zone ///////////////////////
//////////////////////////////////////////////////////////////

// In the Execution Context's - Variable Environment

// Hoisting: Before Execution, code is scanned for variable declarations and for each variable,
// a new property is created in the Variable Environment.

// IMP: How Hoisting Works.
// So, the function declarations (NOT function expressions) and variables 
// declared using 'var', in global scope, are all first stored in the Variable Environment.
// This is how Hoisting actually works.

// *let* and *const* variables also said to be hoisted but in block scope AND
// their value is <uninitialized>TDZ (The variable is said to be in Temporal Dead Zone)

// WHY TDZ ?
// Observe the different types of error messages.
{
    console.log(`My name is ${name}`);        // ReferenceError: Cannot access 'name' before initialization.
    let name = "Rahul";
    console.log(`My surname is ${surName}`);  // ReferenceError: 'surName' is not defined.
}

// The difference in the first error is because the code is certain that 'name' is initialized later. 
// Hence it is kept in TDZ. Thus we can identify the issue from error message created by TDZ and 
// it makes it easier to avoid errors/bugs which are hard to find.

// Also, another reason why TDZ exists, is to make *const* variables work as intended.  

// Why Hoisting?
// Sometimes we might need to use functions before actual declaration.
// *var* hoisting is just a byproduct.
// Code can be cleaner and useful.


