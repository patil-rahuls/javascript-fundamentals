//////////////////////////////////////////////////////////////
// LET, CONST, VAR COMPARISION ///////////////////////////////
//////////////////////////////////////////////////////////////
	
// 1. Assignment
// Variables declared using let and var can be re-assigned.
let a = 10;
a = 20;

var b = 'rahul';
b = 'I got re-assigned';

// while variables declared using const cannot
const c = 4.5;
c = false;    // Uncaught TypeError: Assignment to constant variable.

// This makes const the best choice for variables that don’t need to change, and it prevents mistakes such as accidental re-assignment.

// However, for arrays and objects const does ALLOW mutations, which means that their elements can change using methods (push(), pop(), shift() etc. for arrays).
const myArr = [];
myArr = [1,2,3]; // Uncaught TypeError: Assignment to constant variable

myArr.push(1);   // This works.
myArr[9] = 10;   // This works too
