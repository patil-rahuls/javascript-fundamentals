//////////////////////////////////////////////////////////////
// SPREAD OPERATOR [ES6] /////////////////////////////////////
//////////////////////////////////////////////////////////////

// RHS
// "..." is seen on the RHS of the assignment expression "="
// The Spread Operator unpacks elements of iterable objects such as Arrays, Sets, Maps and Objects into a list.

// Spread Operator can "ONLY" be used in following 2 cases:
        //    1. Expanding an Iterable.
        //    2. As a function argument.

// There can be more than one spread element in an expression.

//  Example #1
const arr = [4,5,6,7];
// Expand this array by adding 1 and 2 first -
// Old way -
const badNewArr = [1,2, arr[0] , arr[1] , arr[2]];

// Suppose we don’t know how many items are there in "arr".
// Using Spread Operator we can append "arr" to "newArr" (Expanding an Iterable.)
const goodNewArr = [ 1 , 2 , ...arr ];
console.log(goodNewArr);                    // [1,2,4,5,6,7]

// The Spread Operator actually spreads the value of the array into individual elements comma separated(list).
console.log(goodNewArr);                    // [1,2,4,5,6,7]
console.log(...goodNewArr);                 // 1,2,4,5,6,7
