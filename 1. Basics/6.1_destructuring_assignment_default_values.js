//////////////////////////////////////////////////////////////
// DESTRUCTURING ASSIGNMENT - DEFAULT VALUES /////////////////
//////////////////////////////////////////////////////////////

// Unpacks(and assigns) values from arrays, or properties from objects, into distinct variables.
// TIP: [ ] and { } is at the LHS of =

// Default values
// When we don't know what and how many elements are there in the array to be destructured,
// we may end up with getting 'undefined' like this.
const [p,q,r] = [8,9];
console.log(p,q,r);
// 8, 9, undefined

// Solution : We define Default values while destructuring an Array to avoid the 'undefined'.
const [P = 1, Q = 1, R = 1]  = [8,9];
console.log(P,Q,R);
// 8 , 9 , 1
