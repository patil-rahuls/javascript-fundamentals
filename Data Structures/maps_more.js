//////////////////////////////////////////////////////////////
// DATA STRUCTURES - MAPS ////////////////////////////////////
//////////////////////////////////////////////////////////////

// Maps are high performance key - value paired data structure.
// In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.
// More here : https://dmitripavlutin.com/maps-vs-plain-objects-javascript/

// Retrieving data from map when key is an array/object.
myMap.set( [1,2] , 'Test');

myMap.get([1,2]);             // undefined. Due to incorrect referencing
// The array [1,2] in myMap.get( ) and the array in myMap.set( ) are at different locations in Heap.

// Correct way:
const arr = [1,2];
myMap.set(arr, 'Test');
myMap.get(arr);
// Now the 'arr' passed in both myMap.set() and myMap.get() refer to the same location in Heap.
