//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS - GET ELEMENT INDEX /////
//////////////////////////////////////////////////////////////

// findIndex(): [ES 6]
// Works similarly to find() method except that it finds index of the found element and not the element itself.
// This also requires a callback function that returns a boolean value.
// The method signature is similar to the forEach() method.

// Lets say we have an object array like this.
// accounts = [  { username:"user1", ... } , { username:"Rahul Patil", , ... } , { ... }];
const acc_indx = accounts.findIndex( acc => acc.username==="RahulPatil" );
const fetchedObj = accounts.splice(acc_indx, 1);

// This looks similar to indexOf() to find an array element’s index.
// But the main difference is that we can write any complex expression in findIndex() method to retrieve an element’s index.

// Fundamental difference between findIndex() and indexOf():
// In indexOf() we check for equality, whereas in findIndex() we check for an expression.
