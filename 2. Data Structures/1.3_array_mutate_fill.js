//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS TO MUTATE ARRAYS ////////
//////////////////////////////////////////////////////////////

// fill():
// Mutates the array.
// fill( val , startIndex , endIndex);
// endIndex is not included in the result.

const x = new Array(7);
x.fill(1, 3, 6);
console.log(x) ;                       // [<3 empty items> x 3 , 1,1,1, <1 empty item>]


// Alternatives to fill()
// Static function - Array.from()-
const y = Array.from({length : 7} , () => 1);
// [1,1,1,1,1,1,1]

const yy = Array.from({length : 7} , (curr , i ) => i+1);
// [1,2,3,4,5,6,7]
// we can omit the curr parameter above and rewrite the expression as :
const yyy = Array.from ({length : 7} , ( _ , i ) => i+1);

// Select all of the HTML elements that has a specific class name
const users = Array.from(document.querySelectorAll('.user_name'));
