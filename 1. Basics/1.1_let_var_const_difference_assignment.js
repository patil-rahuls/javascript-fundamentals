//////////////////////////////////////////////////////////////
// LET, CONST, VAR COMPARISION ///////////////////////////////
//////////////////////////////////////////////////////////////

// 1. Re-assignment
// Variables declared using *let* and *var* can be re-assigned.
let a = 10;
a = 20;

var b = "rahul";
b = "I got re-assigned";

// Variables declared using *const* cannot be re-assigned.
const c = 4.5;
c = false;          // Uncaught TypeError: Assignment to constant variable.

// This makes *const* the best choice for declaring variables that don’t need to change.
// It prevents mistakes such as accidental re-assignment.

// However, for Objects *const* does ALLOW mutation (NOT re-assignment).
const myArr = [];
myArr.push(1);      // This works.
myArr[9] = 10;      // This works.

// Re-assignment not allowed for Objects.
myArr = [1, 2, 3];  // Uncaught TypeError: Assignment to constant variable
