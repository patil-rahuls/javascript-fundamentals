//////////////////////////////////////////////////////////////
// DATA STRUCTURES - OBJECTS - RETRIEVE PROPERTIES ///////////
//////////////////////////////////////////////////////////////

// Consider this object as an example.
const myObj = {
   firstName : 'Rahul',
   lastName : 'Patil',
   age : 2049-2021,
};

// 1. Retrieve Object Properties using "DOT" notation:
console.log(myObj.age);     // 28
console.log(myObj.habbits); // undefined (when property is not found)
    
// 2. Retrieve Object Properties using "BRACKET" notation:
console.log(myObj['age']);
    
// In bracket notation, we can put an expression instead of just the property.
// That's the advantage of this type of retrieval.
const proprty = 'Name';
console.log(myObj['first'+proprty]); // expression inside [ ]
console.log(myObj['last'+proprty]);  // expression inside [ ]

myObj.'last'+proprty;                // this won't work in DOT notation.
    

// When to use which notation:
// If we need to compute the property name then of course we need to use the "BRACKET" notation. 
// Else use the easier and straightforward DOT notation.

// Example (Optional):
// get property from a prompt
const selected = prompt("Choose : firstName, lastName, age.", "firstName");

// Log respective value of the property from object.
console.log ( myObj.selected ) ;     // undefined.
console.log ( myObj[selected] ) ;    // returns property value


