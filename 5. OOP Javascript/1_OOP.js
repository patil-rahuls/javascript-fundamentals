//////////////////////////////////////////////////////////////
// OOP Basics ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Objects    - Real World Entity
// properties - State
// methods    - Behaviour

// We use Objects to model real world or abstract features.
// OOP's goal is to organize code, make it flexible and easier to maintain.

// How we model real world data into classes?
// 1. Abstraction   - Hide details of implementation.
// 2. Encapsulation - Keeping some properties and methods PRIVATE inside a class, 
//                    so that they are not accessible from outside the world and 
//                    exposing only essential methods to outside world.
// 3. Inheritance   - Reusing some properties and methods from different classes (real world entities - objects)
// 4. Polymorphism  - Resuing same methods for different purpose. Override methods from parent class.
// 'poly' means many, 'morph' means forms.



//////////////////////////////////////////////////////////////
// OOP IN Javascript /////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Traditional OOP           |          Javascript OOP
//
//    Class                  |        Prototype (Contain methods)
//      |                    |                 ^
//      |                    |                 |
//      |                    |                 |
// Instantiation             |    Prototypal Inheritance/Delegation
//      |                    |                 |
//      |                    |                 |
//   Instance                |         Object (Can access methods)

// In Javascript, we say "Objects are linked to a Prototype Object".

// A *Prototype Object* contains properties(states) and methods (behaviours)
// that are accessible to all objects linked to it.
// This is called Prototypal Inheritance. (This is different than the Inheritance in Java/PHP/C++)

// DELEGATION:
// Behaviour(method) is delagated to the linked *Prototype Object*.
// Whereas in classic OOP, the methods are actually *copied* from the class to all instances.

// e.g. Array methods.
// In mdn web docs, you will see something like this:
// Array.prototype.map()
// Array.prototype.keys()
// Array.prototype.indexOf()
// ... etc.
// Array.prototype is the *Prototype Object* of all arrays that we create in javascript.
// Therefore all arrays have access to the prototype methods.



//////////////////////////////////////////////////////////////
// How do we create prototype objects ?
//////////////////////////////////////////////////////////////
// 1. Constructor functions
// 2. ES6 Classes
// 3. Object.create()

// 1. Constructor functions
// creates objects from function.
// This is how built-in objects like Arrays, Maps or Sets are actualy implemented.
// new Array(...), new Set(...) , new Map(...) These are all constructer function calls.

// 2. ES6 Classes
// work exactly like constructor functions, but with a cleaner syntax.
// Not like traditional OOP classes (in Java/PHP/C++)
// They are just an abstraction over the constructor functions.(syntactic sugar)

// 3. Object.create()
// Easiest and straightforward way to link an object to a prototype object.
// We directly create the *Prototype Object* and link object(instance) to it.

// IMP: The 4 pillars of OOP are still valid with prototypal inheritance.
