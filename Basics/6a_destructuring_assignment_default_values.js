//////////////////////////////////////////////////////////////
// DESTRUCTURING ASSIGNMENT - DEFAULT VALUES /////////////////
//////////////////////////////////////////////////////////////

// [ ] is at the LHS of = 

// Default values in destructuring:
// When we don't know what and how many elements are there in the array, we may end up with getting undefined like this.
const [p,q,r] = [8,9];
console.log(p,q,r);                   // 8, 9, undefined

// Solution : We define default values while destructuring an array to avoid 'undefined'
const [p = 1, q = 1, r = 1]  = [8,9];
console.log(p,q,r);                   // 8 , 9 , 1
