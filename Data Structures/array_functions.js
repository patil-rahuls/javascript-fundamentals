//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY FUNCTIONS /////////////////////////
//////////////////////////////////////////////////////////////

// Consider this array as an example.
const myArr = ['rahul', 'hitesh', 'aajesh'];

// 1. push()
// Adds an element at the end of an array and returns new length of the array.
myArr.push('anil');
console.log(myArr);    // ['rahul', 'hitesh', 'aajesh', 'anil']

let total = myArr.length;
console.log(total);    // 4

total = myArr.push('milan');
console.log(myArr);    // ['rahul', 'hitesh', 'aajesh', 'anil', 'milan']
console.log(total);    // 5


// 2. pop()
// Removes last element from an array and returns the popped element.
myArr.pop();           // Remove last item 'milan'

// Any arguments to pop() is ignored.
let removed = myArr.pop(`rahul`);
console.log(removed); // 'anil'

console.log(myArr);   // ['rahul', 'hitesh', 'aajesh']


// 3. unshift()
// Add an element at the start of an array and returns new length of the array.
let newLength = myArr.unshift('kisan');
console.log(myArr);  // ['kisan', 'rahul', 'hitesh', 'aajesh']


// 4. shift()
// Removes an element from the start of an array and returns the removed element.
let scholar = myArr.shift();
console.log(myArr);  // ['rahul', 'hitesh', 'aajesh']
console.log(scholar);// 'kisan'
