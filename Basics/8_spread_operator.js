//////////////////////////////////////////////////////////////
// SPREAD OPERATOR ///////////////////////////////////////////
//////////////////////////////////////////////////////////////

// (three dots "..." on RHS OF assignment operator "=")
// Returns comma separated values of an Iterable
// Spread operator can "only" be used in following 2 cases:
        //    1. expanding an Iterable
        //    2. as a function argument.
        // There can be more than one spread element in an expression.

const arr = [4,5,6,7];
const badnewArr = [1,2, arr[0] , arr[1] , arr[2]];

// Suppose we don’t know how many items are there in the array "arr". 
// Using spread operator we can append the "arr" array to a new array.
const newArr = [ 1 , 2 , ...arr ];
console.log(newArr);                    // [1,2,4,5,6,7]

// The spread operator actually spreads the value of the array into individual elements comma separated
console.log(newArr);                    // [1,2,4,5,6,7]
console.log(...newArr);                 // 1,2,4,5,6,7
