//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS TO MUTATE ARRAYS ////////
//////////////////////////////////////////////////////////////

// Consider this array as an example.
const myArr = ['rahul', 'hitesh', 'aajesh'];

// 1. push()
// Adds an element at the end of an array
// Returns new length of the array.
myArr.push('anil');
console.log(myArr);    // ['rahul', 'hitesh', 'aajesh', 'anil']

total = myArr.push('milan');
console.log(myArr);    // ['rahul', 'hitesh', 'aajesh', 'anil', 'milan']
console.log(total);    // 5

// 2. pop()
// Removes last element from an array
// Returns the popped element.
myArr.pop();           // Remove last item 'milan'

// Any arguments to pop() is ignored.
let removed = myArr.pop(`rahul`);
console.log(removed); // 'anil'
console.log(myArr);   // ['rahul', 'hitesh', 'aajesh']

// 3. unshift()
// Add an element at the start of an array
// Returns new length of the array.
let newLength = myArr.unshift('kisan');
console.log(myArr);  // ['kisan', 'rahul', 'hitesh', 'aajesh']

// 4. shift()
// Removes an element from the start of an array
// Returns the removed element.
let scholar = myArr.shift();
console.log(myArr);  // ['rahul', 'hitesh', 'aajesh']
console.log(scholar);// 'kisan'
