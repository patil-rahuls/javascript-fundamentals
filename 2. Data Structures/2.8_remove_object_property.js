//////////////////////////////////////////////////////////////
// DATA STRUCTURES - OBJECTS - REMOVE PROPERTIES /////////////
//////////////////////////////////////////////////////////////

// Consider this object as an example.
const myObj = {
    firstName : 'Rahul',
    lastName : 'Patil',
    age : 2049-2021,
};

// 1. Using delete keyword.
// Mutates the original Object.
delete myObj.age;
myObj.hasOwnProperty("age");    // false

// 2. Using Destructuring. If you want a new object with all keys except some.
// Doesn't mutate the original Object.
const { age: _, ...newObj } = myObj;
// _ is a throwaway variable that we use for variables that we don't want to use OR ignore.
// In above case it is Ignored.
console.log(newObj);            // has no 'age' key
newObj.hasOwnProperty("age");   // false
console.log(myObj);             // remains unchanged
