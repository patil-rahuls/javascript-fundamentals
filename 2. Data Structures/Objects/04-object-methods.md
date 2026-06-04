## Data Structures > Object

### Object Methods

Consider this object as an example.
```javascript
const myObj = {
  firstName : 'Rahul',
  lastName : 'Patil',
  age : 2049-2024,
};
```

Functions inside an object are called methods.

Methods have a “receiver” while functions do not.

```javascript
myObj.greet = function(user){
  console.log(`Hello '${user}' !! What up !`);
};

console.log(myObj);
// Object {
//   firstName : 'Rahul',
//   lastName : 'Patil',
//   age : 25,
//   greet: function(user){
//     console.log(`Hello '${user}' !! What up !`);
//   },
// };


// Object method call
myObj.greet("Reader");
// "myObj" is the receiver,
// "greet()" is the method.
// A method is associated with an Object.
// Compare that with a function invocation:
const sayHi = () => console.log(`Hi there !!`);

sayHi();
// Notice, there is no receiver here.
// The receiver is what separates a function from a method.


// Method call using DOT notation is preferred.
myObj.greet("Reader");    // Easy to read

// Method call using BRACKET notation.
myObj['greet']("Reader"); // Difficult to read
```
---
