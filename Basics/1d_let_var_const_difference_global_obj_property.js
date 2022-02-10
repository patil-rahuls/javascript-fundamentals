//////////////////////////////////////////////////////////////
// LET, CONST, VAR COMPARISION ///////////////////////////////
//////////////////////////////////////////////////////////////

// 4. Creating global object property

// At the top level, *let* and *const*, unlike *var*,
// do not create a property on the global object.

var foo = "Foo";         // globally scoped
let bar = "Bar";         // not allowed to be globally scoped
baz     = "Baz";         // globally scoped

// In the browser, ‘window’ object is a global object.
console.log(window.foo); // Foo
console.log(window.baz); // Baz
console.log(window.bar); // undefined

// Variables declared using *let* are not accessible to global objects like the *window* object. 
// The purpose of *let* statements is only to free up memory when not needed in a certain block.

// In HTML, the global scope is the window object. All global variables belong to the window object.


