//////////////////////////////////////////////////////////////
// DATA STRUCTURES - OBJECTS - FREEZE ////////////////////////
//////////////////////////////////////////////////////////////

// Frozen objects are read-only, and no modifications,
// additions, or deletions of properties are allowed.

// Consider this object as an example.
const person = { name: "John", age: 30 };

// Freeze the Object
Object.freeze(person);

// Check if the Object is Frozen
console.log(Object.isFrozen(person));
// true


person.age = 31; // Modifying properties is not allowed
console.log(person); // Output: { name: "John", age: 30 }

person.city = "New York"; // Adding new properties is not allowed
console.log(person); // Output: { name: "John", age: 30 }

delete person.name; // Removing properties is not allowed
console.log(person); // Output: { name: "John", age: 30 }
