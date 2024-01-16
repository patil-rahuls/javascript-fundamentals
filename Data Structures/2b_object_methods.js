//////////////////////////////////////////////////////////////
// DATA STRUCTURES - OBJECT - METHODS ////////////////////////
//////////////////////////////////////////////////////////////

// Consider this object as an example.
const myObj = {
   firstName : 'Rahul',
   lastName : 'Patil',
   age : 2049-2021,
   veg:true,
};

// Functions inside an object are called methods.
// Methods have a “receiver” while functions do not.

// Let's first add a method to our object.
myObj.greet = function(user){
    console.log(`Hello '${user}' !! What up !`);
};

// Can also be done with Braket notation.
// myObj['greet'] = function(user){
//     console.log(`Hello '${user}' !! What up !`);
// };

console.log(myObj);
// Object {
//     firstName : 'Rahul',
//     lastName : 'Patil',
//     age : 2049-2021,
//     frnds: myArr,
//     veg:true,
//     greet: function(user){
//         console.log(`Hello '${user}' !! What up !`);
//     },
// };

// Object method call
myObj.greet("Reader");
// In this context, "myObj" is the receiver, while the "greet()" is the method.
// In layman's terms - a method is associated with an Object

// Compare that with a function invocation:
const sayHi = () => console.log(`Hi there !!`);
sayHi();
// Notice, there is no receiver here. The receiver is what separates a function from a method.

// Method call using DOT notation - Preferred.
myObj.greet("Reader");     // Easy to read

// Method call using BRACKET notation
myObj['greet']("Reader");  // Difficult to read
