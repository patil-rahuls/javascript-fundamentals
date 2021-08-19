//////////////////////////////////////////////////////////////
// DATA STRUCTURES - WHICH ARRAY METHODS TO USE //////////////
//////////////////////////////////////////////////////////////

// Which array methods to use and when

// To ONLY loop over an array:
forEach();

// To Implode an array to string.
join();

// To get ONE element based on a condition.
find();

// To get index of an array element
// 1. Based on value
indexOf();
// 2. Based on test condtion
findIndex();

// To ONLY check if array includes an element:
// 1. Based on value
includes();
// 2. Based on test condition
some();
every();

// To transform to a single value
reduce();

// To get a new array
// 1. part of an array
slice();
// 2. filtered using a conditioin
filter();
// 3. apply certain logic to all elements of an array
map();
// 4. concatenating an array
concat();
// 5. Flattening original array
flat();
flatMap(); // combination of map() and flat()

// To mutate original array
// 1. Add to original array
push();
unshift();
// 2. Remove from orignal array
pop();
shift();
// Others:
reverse();
sort();
fill();