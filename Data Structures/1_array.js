//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY ///////////////////////////////////
//////////////////////////////////////////////////////////////

// Initializing an Array.
const myArr = ['rahul', 'hitesh', 'aajesh'];

// Initializing an Array using constructor function.
const birthYears = new Array(1992, 1991, 1993);

// length of an Array 
const howMany = myArr.length;         // no parenthesis after length

console.log(myArr[myArr.length - 1]); // expressions allowed inside [ ]

console.log(typeof myArr);            // "object" Because Array is still an Object. (a special one)

// An array as an array element is allowed. 
// An expression as an array element allowed.
const newArr = ['rahul', hitesh, 1990-1000, myArr];

// Some useless fun:
myArr + 10;           // Appends the '10' to the last element of array
                      // myArr becomes ['rahul', 'hitesh', 'aajesh10']
myarr - 10;           // "NaN"
