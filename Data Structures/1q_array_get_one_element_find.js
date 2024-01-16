//////////////////////////////////////////////////////////////
// DATA STRUCTURES - ARRAY - METHODS - GET 1 ELEMENT /////////
//////////////////////////////////////////////////////////////

// find(): [ES 6]
// Retrieve an array element that satisfies a certain condition written in the callback function.
// The callback function returns a boolean value.
// Method signature is similar to the forEach() method.

myArr.find( itm =>  itm < 0 );
// But find() method does not return an array.
// Instead it returns THE FIRST ELEMENT which satisfies the mentioned condition in the callback function.

// The fundamental difference between filter() and find()
// filter() method returns an array whereas find() returns an element of the array.

// Lets say we have an object array like this.
// acc = [  { owner:"user1", ... } , { owner:"Rahul Patil", , ... } , { ... }];
const account = accounts.find(acc => acc.owner === "Rahul Patil");
