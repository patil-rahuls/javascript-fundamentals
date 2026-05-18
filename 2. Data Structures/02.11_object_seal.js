//////////////////////////////////////////////////////////////
// DATA STRUCTURES - OBJECTS - SEAL //////////////////////////
//////////////////////////////////////////////////////////////

// Sealed objects are still mutable, meaning you can change
// the values of the existing properties.
// However, you cant add new properties or remove existing ones.

// Consider this object as an example.
const person = { name: "Rahul", age: 30 };

// Seal the object.
Object.seal(person);

// Check if the Object is sealed
console.log(Object.isSealed(person));
// true


person.age = 31; // Modifying an existing property is allowed
console.log(person); // Output: { name: "John", age: 31 }

person.city = "Mumbai"; // Adding new properties is not allowed
console.log(person); // Output: { name: "John", age: 31 }

delete person.name; // Removing existing properties is not allowed
console.log(person); // Output: { name: "John", age: 31 }
