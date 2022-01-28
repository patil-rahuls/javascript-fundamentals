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
// IMP: The References Values are Objects that are          //
//      stored in the HEAP.                                 //
//////////////////////////////////////////////////////////////

// Let's capture this digramatically.
// 1. Primitive Values        |---------------Call Stack----------------|
//                            |     Identifier      Address     Value   | Comment
let age = 29;//               |         age          0001         29    | Value 29 stored @0001 and 'age' points to that location.
let oldAge = age;//           |        oldAge      (points^)      29    | 'oldAge' points to 0001, so 'oldAge'=29
age = 30;//                   |         age          0002         30    | 'age' now points to @0002, so 'age'=30
//                            |_________________________________________|
// 
// Observe, that primitive values don't get mutated. instead, new value gets stored in the Call stack,
// and the new variable points to that location.

// Let's capture this digramatically.
// 2. Reference Values
//                            |----------Call Stack--------|   |-----------HEAP-------------|
const user = {//              | Identifier  Address  Value |   | Address   Value            |
    name: "Rahul",//          |                            |   |  AA01     { ...            |
    age: 29//                 |                            |   |            name: "Rahul"   |
};//                          |   user       0003    AA01  |   |            age: 29         |
const newUser = user;//       |  newUser   (points^)       |   |            }               |
user.age = 30;//              |____________________________|   |            (^ age: 30)     |

// This shows that, 'user' and 'newUser' are "Reference Values".
// They hold reference to the Object stored in Heap. 
// Hence, any changes to be made to the Object(user.age = 30;) are done in the Heap, and not in the Call Stack.
// Therefore, we are able to mutate the Object while defining it as *const* variable.

// Remember the *pass by reference* topic? In Javascript, we pass references, NOT PASS BY REFERENCES.


