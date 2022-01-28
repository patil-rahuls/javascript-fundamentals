//////////////////////////////////////////////////////////////
// PRIMITIVES VS OBJECT REFERENCES ///////////////////////////
//////////////////////////////////////////////////////////////

// Primitives
let age = 29;
let oldAge = age;
age = 30;
console.log(age);           // 30
console.log(oldAge);        // 29

// Objects
const user = {
    name: "Rahul",
    age: 29
};
const newUser = user;
user.age = 30;
console.log(user.age);      // 30
console.log(newUser.age);   // 30

// Primtive types are stored in the CALL STACK, because that's where the Execution Contexts Run.
// All Object References are stored in HEAP.


