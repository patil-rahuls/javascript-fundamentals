//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS TO GET NEW ARRAY ////////
//////////////////////////////////////////////////////////////

// flat(): [ES 2019]
// No callback functions.
// Flattens the nested arrays into one single array.
// flat(depthArgument)
// The parameter - depthArgument is optional and is to provide the depth of the nesting.

const arr = [ [1,2,3,4], 5 , 6 , [7,8] , 9, 10];
console.log(arr.flat());
// [1,2,3,4,5,6,7,8,9,10]

// Lets try to flatten a very deeply nested array.
const arr2 = [[[1,2],3,4], 5 , 6 , [[7,0],8 ], 9, 10];
console.log(arr2.flat());
// [Array(2), 3,4,5,6,Array(2),9,10]

// The flat() method goes only to the first level of nesting by default.
// But it can be fixed using the depth argument.

const arr3 = [ [ [1, 2], 3, 4], 5 , 6 , [ [7,0], 8 ], 9, 10];
console.log(arr3.flat(2));              // 2 is a depth argument
// [1,2,3,4,5,6,7,0,8,9,10]

// We can calculate the depth of an array as follows.
let depth = 0;
function calcDepth(arr){
  for( n of arr){
    if(typeof n === 'object'){
      depth++;
      calcDepth(n);
    }
  };
}
calcDepth([1,2,[3,4], 5,[6,7,8, [9,10]],11]);
console.log(depth);                       // 3
