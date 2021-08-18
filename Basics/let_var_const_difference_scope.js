//////////////////////////////////////////////////////////////
// LET, CONST, VAR COMPARISION ///////////////////////////////
//////////////////////////////////////////////////////////////

// 2. Scope
// let and const are block scoped while var is function scoped.

// From a stackoverflow answer, 
// variables declared by var keyword are scoped to the immediate function body (hence the function scope) 
// while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope). 
// In general, a block is any code within curly braces { }, including functions, loops and conditional statements.

//  Example #1
function run() {               // function scope.
   var foo = "Foo";
   let bar = "Bar";
   console.log(foo, bar);      // Foo Bar
   {                           // Block scope.
       var moo = "Mooo"
       let baz = "Bazz";
       console.log(moo, baz);  // Mooo Bazz
   }
   console.log(moo);           // Mooo
   console.log(baz);           // ReferenceError
}
run();

//  Example #2
var x = "global scope";
function foo() {
   var x = "functional scope";
   console.log(x);
}

{
   let x = "block scope"; // Only accessible in this enclosing block
}

foo();             // "functional scope"
console.log(x);    // "global scope"

//  Example #3
// Scope changes when a variable is declared without let, var or const keyword.
{
   let a = 9;
   b= 8;        // b is not declared using any of 'let' or 'const' or 'var' keywords.
                // and will by default become globally scoped.
}
console.log(b); // 8, because b became globally scoped in the block above.
console.log(a); // ReferenceError: a is not defined. (let is block scoped)
