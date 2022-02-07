//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS TO MUTATE ARRAYS ////////
//////////////////////////////////////////////////////////////

// SPLICE: Same as slice + Mutates the array
// Works exactly the same as slice() except that it not only returns result but also mutates the array.
// array.splice(startIndex, deleteCount)
// IMP: its 2nd parameter is not index, but count of items to be removed.

const arr = [11, 22, 33, 44, 55, 66];
arr.splice(4);       // This returns [55,66] and mutates "arr"
console.log(arr);   // [11 , 22, 33, 44]

// The extracted elements are now gone ! Whatever is taken out is gone, the remaining elements are what our array is mutated with.

arr.splice(1, 2);   // 2 is no. of values to take out. Returns [ 22, 33 ]
console.log(arr);   // arr is now [11 , 44]


// Example : Remove a specific item from an array.
const array = [2, 5, 9];

const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1); // 2nd parameter means remove one item only
}

console.log(array); 
// [2, 9]
