//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS TO MUTATE ARRAYS ////////
//////////////////////////////////////////////////////////////

// sort(): 
// Mutates the array. 
// Works only on arrays with homogeneous elements.
const users = ['Rahul' , 'Hitesh' , 'Aajesh'];
console.log(users.sort());  // ['Aajesh', 'Hitesh', 'Rahul']
console.log(users);         // ['Aajesh', 'Hitesh', 'Rahul']

// sort() does not work on numbers. 
// The numbers are converted into strings internally and then sorted.

const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(arr.sort());   //  [-130, -400, -650, 1300, 200, 3000, 450, 70]

// The numbers are converted to strings and then sorted.
// This type of sorting is commonly seen in our machines' file manager.

// IMP: sort() accepts a callback function.
// It accepts two parameters - two consecutive elements of the given array
// If the callback function returns true, then, the two consecutive elements are swapped.

const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];
arr.sort((a,b) => {
   if(a<b) return -1;        // position of a and b remain same in the array.(a,b)
   if(a>b) return 1;         // swap a and b in the array. (b,a)
} );

console.log(arr);            //  [-650, -400, -130, 70, 200, 450, 1300, 3000]

// Can also be written as:
arr.sort((a,b) => a - b);


