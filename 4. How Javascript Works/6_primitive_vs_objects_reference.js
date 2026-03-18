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

//////////////////////////////////////////////////////////////
// IMP: Primtive types are stored in the CALL STACK,        //
//      because that's where the Execution Contexts Run.    //
// IMP: The Reference Values are Objects that are           //
//      stored in the HEAP.                                 //
//////////////////////////////////////////////////////////////

// Let's capture it digramatically.

//////////////////////////////////////////////////////////////
// 1. Primitive Values
//////////////////////////////////////////////////////////////
let age = 29;
let oldAge = age;
age = 30;
/*
|---------------Call Stack----------------|
|     Identifier      Address     Value   |
|         age          0001         29    | '29' stored @ "0001" and 'age' points to "0001"
|        oldAge      (points^)      29    | 'oldAge' points to "0001", so 'oldAge'=29
|         age          0002         30    | '30' stored @ "0002" and 'age' now points to "0002"
|_________________________________________|
*/

// Observe, that primitive values don't get mutated.
// instead, new value gets stored in the Call stack,
// and the new variable points to that location.

//////////////////////////////////////////////////////////////
// 2. Objects
//////////////////////////////////////////////////////////////
const user = {
    name: 'Rahul',
    age: 29
};
const newUser = user;
user.age = 30;

/*
|----------Call Stack--------|   |-----------HEAP-------------|
| Identifier  Address  Value |   | Address   Value            |
|                            |   |  AA01     { ...            |
|                            |   |            name: "Rahul"   |
|   user       0003    AA01  |   |            age: 29         |
|  newUser   (points^)       |   |           }                |
|                            |   |        (^ age: 30)         |
|____________________________|   |____________________________|
*/

// This shows that, 'user' and 'newUser' are "Reference Values".
// They hold reference to the Object stored in Heap.
// Hence, any changes to be made to the Object(user.age = 30;)
// are done in the Heap, and not in the Call Stack.
// Therefore, we are able to mutate the Object while defining
// it as *const* variable.

// Remember the *pass by reference* topic?
// In Javascript, we pass references, NOT PASS BY REFERENCES.
