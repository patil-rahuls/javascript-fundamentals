//////////////////////////////////////////////////////////////
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS //////////////////
//////////////////////////////////////////////////////////////

// Functions that can be executed ONLY ONCE AND disappear to not run again ever.
// OR
// To call a function immediately WITHOUT having to SAVE IT SOMEWHERE.

// Consider the following function as an example:
const show = function (){
   alert("this is an IIFE");
}

// Put parens ( ) around it to make it a function expression without assigning to any variable.
(function (){
   alert("this is an IIFE");
});

// To call it, simply call that expression just like any regular function
(function (){
   alert("this is an IIFE");
})();
// It's now interpreted as a function call to our function expression.


// Note that it is not stored in any variable, and it is immediately invoked while declared.
// Same works with an arrow function
( () => alert("This IIFE is written in arrow form") )();

// IMP: Why are these in javascript ?
//      Ans. "Variables Scope"
// We use IIFE to just keep some variables hidden in the function scope and not make it available in
// global scope hence prventing the global scope from getting polluted.
// IIFE creates a scope. Every function creates its own scope in which variables are confined.

// IIFE can be written to function same as a Namespace in PHP and other langs.

// One great example can be an implementation of Modules system in JS.
// Behind the scenes, Modules are nothing but IIFEs.
const myObj = {};
(function(outsideObj, b){
   // Private Property
   let c = 0;

   // Private Method
   function show_c(){
      console.log(`Value of c is ${c}`);
   }

   //Public Property
   outsideObj.cart = [];

   //Public Method
   outsideObj.checkC = function(){
      c++;
      outsideObj.cart.push(c);
      show_c();
   };
})( myObj );
myObj.checkC();
// Outputs: Value of c is 1
// We achieved encapsulation here. Keeping some properties( c and show_c() ) private and
// exposing only required properties( obj.cart[], obj.checkC() ) to the outside world.
