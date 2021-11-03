//////////////////////////////////////////////////////////////
// LET, CONST, VAR COMPARISION ///////////////////////////////
//////////////////////////////////////////////////////////////

//	4. Creating global object property
// At the top level, *let* and *const*, unlike *var*,
// does not create a property on the global object
var foo = "Foo";         // globally scoped
let bar = "Bar";         // not allowed to be globally scoped

console.log(window.foo); // Foo
console.log(window.bar); // undefined - ‘window’ object is a global object

// Variables declared using *let* are not accessible to global objects like the *window* object. 
// The purpose of *let* statements is only to free up memory when not needed in a certain block.
