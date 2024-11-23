//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY ///////////////////////////////////
//////////////////////////////////////////////////////////////

// Initializing an Array.
// 1.
const myArr = ["rahul", "hitesh", "aajesh"];

// 2. Using constructor function.
const birthYears = new Array(1992, 1991, 1993);

// 3. Using static method 'Array.from()'
// Array is a constructor function and from() is Array's static function.
const y = Array.from({length : 7} , () => 1);
// [1,1,1,1,1,1,1]

const yy = Array.from({length : 7} , (curr , i ) => i+1);
// [1,2,3,4,5,6,7]
// We can omit the curr parameter above and rewrite the expression as :
const yyy = Array.from({length : 7} , ( _ , i ) => i+1);

// length of an Array
const howMany = myArr.length;           // no parenthesis after length

console.log(myArr[myArr.length - 1]);   // expressions are allowed inside [ ]

console.log(typeof myArr);              // "object" Because Array is special type of Object.

// 4. REMOVING/DELETING ARRAY ITEMS (IMP)
// There is no static method to remove an element from an array.
const arr = [1,2,3,4,5,6,7,8];
// using delete
delete arr[3];
// [1, 2, 3, <1 empty item>, 5, 6, 7, 8]
// delete remove the element, BUT doesn't 'reindex' the array or update its length.
arr[3] = null;
// [1, 2, 3, null, 5, 6, 7, 8]
arr[3] = undefined;
// [1, 2, 3, undefined, 5, 6, 7, 8]
// Solution - splice
const arr = [1,2,3,4,5,6,7,8];
// using delete
delete arr[3];
const removedItem = arr.splice(3, 1);
// removedItem -> [ <1 empty item> ] (typeof removedItem will be object)
// We can also use filter or map.


// Arrays in JavaScript may be homogeneous or heterogeneous.
// i.e. composed of just one data type(homogeneous), 
// or a mix of data types(heterogeneous).
const heterogeneousArr = ["rahul", "hitesh", 1990 - 1000];
// In fact, arrays can even have other arrays as their elements.
const newArr = ["rahul", "hitesh", 1990 - 1000, myArr];

// Some useless fun:
myArr + 10;         // Appends the '10' to the last element of array
// myArr becomes ['rahul', 'hitesh', 'aajesh10']
myarr - 10;         // "NaN"
