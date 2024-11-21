//////////////////////////////////////////////////////////////
// LET, CONST, VAR COMPARISION ///////////////////////////////
//////////////////////////////////////////////////////////////

// 2. Scope
// Scope refers to the visibility or accessibility of variables, functions, and objects within different parts of a program.
// It determines where in the program a particular variable or a function can be accessed and manipulated.

// *let* and *const* variables are "BLOCK" scoped.
// *var* variables are "FUNCTION" scoped.

// *let* and *const* variables are scoped to the immediate enclosing block denoted by { } (hence the "BLOCK"-scope).
// *var* variables are scoped to the immediate function body (hence the "FUNCTION"-scope).

// In general, a block is any code within curly braces { }, including functions, loops and conditional statements.

//  Example #1
function run() {
  // function scope.
  var foo = "Foo";
  let bar = "Bar";
  console.log(foo, bar);    // Foo Bar
  {
    // Block scope.
    var moo = "Mooo";
    let baz = "Bazz";
    console.log(moo, baz);  // Mooo Bazz
  }
  console.log(moo);         // Mooo
  console.log(baz);         // Uncaught ReferenceError: baz is not defined
}
run();


//  Example #2
var x = "global scope";
function foo() {
  var x = "function scope";
  console.log(x);
}
{
  let x = "block scope";    // Only accessible in this enclosing block
}
foo();                      // "function scope"
console.log(x);             // "global scope"


//  Example #3
// Scope changes when a variable is declared without *let*, *var* or *const* keyword.
{
  let a = 9;
  b = 8;                // b is not declared using any of 'let' or 'const' or 'var' keywords.
                        // and will by default become globally scoped.
}
console.log(a);         // ReferenceError: a is not defined. (let is block scoped)
console.log(b);         // 8 (because b became globally scoped in the block above)

// In Browser, we can access 'b' using *window* object.
console.log(window.b);  // 8 (Because *window* is a global object in browser)
// In Node JS runtime, we can access 'b' using *global* object.
console.log(global.b);  // 8
// the "global" keyword above is the name of the global object in node js runtime, 
// just like "window" in browser context.
