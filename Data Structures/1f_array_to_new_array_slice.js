//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS TO GET NEW ARRAYS ///////
//////////////////////////////////////////////////////////////

// SLICE:  It returns an array (shallow copy).
// A shallow copy in JavaScript creates a new object that points to the same memory
// location as the original object.
// This means that if you make a change to the original object, it will also affect the copied object.

// array.slice(start_index , end_index)
// element at start_index is included in result
// element at end_index is not included in result

const arr = [11, 22, 33, 44, 55, 66];
arr.slice(2);     // [33,44,55,66] (element at index 2 is included)
arr.slice(2,4);   // [33,44] (element at index 4 is not included)

// Start from end of an array
arr.slice(-2);    // [ 55,66 ] (Start from 2nd last element.)
arr.slice(1, -2); // [ 22,33,44 ]

//  Example #1 (Deep Clone)
// IMP & USEFUL : Copying an array
// It's also important to observe that the slice() array method can be used to copy arrays by not passing any arguments
const arr1 = arr.slice();
// But Why?
// Observe this :
const arr2 = [1,2,3];
const brr = arr2;
arr2[0] = 99;            // Changed arr
console.log(brr);        // brr also gets changed, because both have same references.
                         // Hence use slice to get an independent 'COPY' of an array.
const crr = arr2.slice();// Also called "Deep copy"
