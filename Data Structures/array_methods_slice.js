//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY METHODS - SLICE() /////////////////
//////////////////////////////////////////////////////////////

// SLICE:  It returns an array (shallow copy).
// array.slice(start_index , end_index)
// element at start_index is included in result
// element at end_index is not included in result
const arr = [11, 22, 33, 44, 55, 66];
arr.slice(2);     // [33,44,55,66] (element at index 2 is included)
arr.slice(2,4);   // [33,44] (element at index 4 is not included)

// Start from end of an array
arr.slice(-2);    // [ 55,66 ] (Start from 2nd last element.)
arr.slice(1, -2); // [ 22,33,44 ]

// IMP & USEFUL : Copying an array
// It's also important to observe that the slice() array method can be used to copy arrays by not passing any arguments 
const arr1 = arr.slice();

