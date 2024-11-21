//////////////////////////////////////////////////////////////
// LET, CONST, VAR COMPARISION ///////////////////////////////
//////////////////////////////////////////////////////////////

// 4. Creating global object property

// At the top level, 
// *var* variables create a property on the global object.
// *let* and *const* variables do not.

var foo = "Foo";            // globally scoped
let bar = "Bar";            // not allowed to be globally scoped
baz = "Baz";                // globally scoped

// In the browser, ‘window’ is a global object.
console.log(window.foo);    // Foo
console.log(window.baz);    // Baz
console.log(window.bar);    // undefined

// In Node JS runtime, using 'global' object.
console.log(global.foo);    // Foo
console.log(global.baz);    // Baz
console.log(global.bar);    // undefined

// Variables declared using *let* and *const* are not accessible to global objects like the *window* or *global* object.
// The purpose of *let* and *const* statements is only to free up memory when not needed in a certain block.
