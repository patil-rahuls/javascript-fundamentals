//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS TO MUTATE ARRAYS ////////
//////////////////////////////////////////////////////////////

// SPLICE: Same as slice + Mutates the array
// Works exactly the same as slice() except that it not only returns result but also mutates the array.
// array.splice(startIndex, deleteCount)
// IMP: its 2nd parameter is not index, but length (i.e. no. of items to be removed)

const arr = [11, 22, 33, 44, 55, 66];
arr.splice(4);       // This returns [55,66] and mutates "arr"
console.log(arr);   // [11 , 22, 33, 44]

// The extracted elements are now gone ! Whatever is taken out is gone, the remaining elements are what our array is mutated with.

arr.splice(1, 2);   // 2 is no. of values to take out. Returns [ 22, 33 ]
console.log(arr);   // arr is now [11 , 44]

