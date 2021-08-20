//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY METHODS - flat() //////////////////
//////////////////////////////////////////////////////////////

// flat(): [ES 2019]
// No callback functions. 
// Removes all the nesting(first level only) of arrays and flatten them, hence the name flat().

const arr = [ [1,2,3,4], 5 , 6 , [7,8] , 9, 10];
console.log(arr.flat());
// [1,2,3,4,5,6,7,8,9,10]
   
// Lets try to flatten a very deeply nested array.
const arr = [[[1,2],3,4], 5 , 6 , [[7,0],8 ], 9, 10];
console.log(arr.flat());
// [Array(2), 3,4,5,6,Array(2),9,10]

// The flat() method goes only to the first level of nesting. 
// But it can be fixed using the depth argument.

const arr = [ [ [1, 2], 3, 4], 5 , 6 , [ [7,0], 8 ], 9, 10];
console.log(arr.flat(2));              // 2 is a depth argument
// [1,2,3,4,5,6,7,0,8,9,10]

