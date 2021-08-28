//////////////////////////////////////////////////////////////
// OOP Basics ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Objects
// properties - data
// methods - behaviour
// all into one block.

// we use Obejcts to model real world or abstract fatures.

// OOP's goal is to  organize code, make it flexibleand easier to maintain.

// Traditional OOP - Classes and Instanes.

// How we model real world data into classes?
// 1. Abstraction - hide details of implementation.
// 2. Encapsulation - keeping some properties and methods PRIVATE inside a class, so that they are not accessible from outside the world. Exposing only essential methods to outside world.
// 3. Inheritance - Reusing some properties and methods from different classes (real world entities - objects)
// 4. Polymorphism - Resuing same methods for different purpose. Override methods from parent class.

//////////////////////////////////////////////////////////////
// OOP IN Javascript /////////////////////////////////////////
//////////////////////////////////////////////////////////////

Traditional OOP           |     Javascript OOP

   Class                  |           Prototype 
     |                    |               |
     |                    |               |
Instantiation             |    Prototypal Inheritance/Delegation
     |                    |               |
     |                    |               |
  Instance                |             Object

// In javascript, we say Objects are linked to a Prototype Object 

// The Prototype Object contains properties and methods.
// These properties and methods can be accessed by all objects that are linked to the prototype.
// This is called Prototypal Inheritance. (This is not the Inheritance in OOP priciple.)

// DELEGATION:
// Behaviour(methods) is delagated to the linked Prototype Object.
// Whereas in classic OOP, the methods are actually *copied* from the class to all instances.

// In mdn web docs, you will see something like this:
// Array.prototype.map()
// Array.prototype.keys()
// Array.prototype.indexOf()
// ... etc.

// Array.prototype is the prototype of all array objects that we create in javascript.
// Therefore all arrays have access to the prototype methods.

****// array delegates the method ... complete this sentence..

//////////////////////////////////////////////////////////////
// How do we create objects ?
//////////////////////////////////////////////////////////////
// 1. constructor functions
// 2. ES6 Classes
// 3. Object.create()

// 1. constructor functions
// creates objects from function.
// This is how built-in objects like Arrays, Maps or Sets are actualy implemented.
// new Array(...), new Set(...) , new Map(...) These are all constructers.

// 2. ES6 Classes
// work exactly like constructor functions.
// Not like traditional OOP classes.
// They are just an abstraction over the constructor functions.

// 3. Object.create()
// Easiest and straightforward way to link an object to a prototype object.

// IMP: The 4 pillars of OOP are still valid with prototypal inheritance.

