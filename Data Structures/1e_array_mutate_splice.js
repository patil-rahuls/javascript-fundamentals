//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS TO MUTATE ARRAYS ////////
//////////////////////////////////////////////////////////////

// SPLICE: Slightly same as slice + Mutates the array
// array.splice(startIndex, deleteCount)
// IMP: its 2nd parameter is not index, but count of items to be removed.

//  Example #1:
const arr = [11, 22, 33, 44, 55, 66];
arr.splice(4);       // This returns [55,66] and mutates "arr"
console.log(arr);    // [11 , 22, 33, 44]

// The extracted elements are now gone ! Whatever is taken out is gone,
// the remaining elements are what our array is mutated with.

arr.splice(1, 2);    // 2 is no. of values to take out. Returns [ 22, 33 ]
console.log(arr);    // arr is now [11 , 44]

//  Example #2 (Remove a specific item from an array)
const array = [2, 5, 9];
const index = array.indexOf(5);
if (index > -1) {
  array.splice(index, 1);
}

console.log(array);
// [2, 9]

//////////////////////////////////////////////////////////////
// SPLICE: Also inserts an element at a given index.
// array.splice(startIndex, deleteCount, newValue);

const newArr = [11, 22, 33, 44, 55, 66];
arr.splice(4, 0, 99);   // This deletes 0 items at 4th index and inserts 99 there.
console.log(arr);    // [11 , 22, 33, 44, 99, 66]