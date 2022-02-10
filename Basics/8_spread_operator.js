//////////////////////////////////////////////////////////////
// SPREAD OPERATOR [ES6] /////////////////////////////////////
//////////////////////////////////////////////////////////////

// "..." on RHS OF "="
// The Spread Operator unpacks elements of iterable objects such as Arrays, Sets, Maps and Objects into a list.

// Spread Operator can "ONLY" be used in following 2 cases:
        //    1. Expanding an Iterable.
        //    2. As a function call argument.

// There can be more than one spread element in an expression.

//  Example #1
const arr = [4,5,6,7];
const badnewArr = [1,2, arr[0] , arr[1] , arr[2]];

// Suppose we don’t know how many items are there in "arr". 
// Using Spread Operator we can append "arr" to "newArr" (Expanding an Iterable.)
const newArr = [ 1 , 2 , ...arr ];
console.log(newArr);                    // [1,2,4,5,6,7]

// The Spread Operator actually spreads the value of the array into individual elements comma separated(list).
console.log(newArr);                    // [1,2,4,5,6,7]
console.log(...newArr);                 // 1,2,4,5,6,7


