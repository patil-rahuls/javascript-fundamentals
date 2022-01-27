//////////////////////////////////////////////////////////////
// DESTRUCTURING ASSIGNMENT - DEFAULT VALUES /////////////////
//////////////////////////////////////////////////////////////

// Unpacks(and assigns) values from arrays, or properties from objects, into distinct variables.
// [ ] is at the LHS of = 

// Default values
// When we don't know what and how many elements are there in the array to be destructured,
// we may end up with getting 'undefined' like this.
const [p,q,r] = [8,9];
console.log(p,q,r);                   
// 8, 9, undefined

// Solution : We define Default Values while destructuring an Array to avoid the 'undefined'.
const [p = 1, q = 1, r = 1]  = [8,9];
console.log(p,q,r);
// 8 , 9 , 1
