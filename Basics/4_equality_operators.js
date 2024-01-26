//////////////////////////////////////////////////////////////
// EQUALITY OPERATORS ("==" and "===") ///////////////////////
//////////////////////////////////////////////////////////////

// Abstract(loose) equality operator "=="
// Type Coercion occurs here.
console.log('18' == 18);   // true because of implicit type coercion.

// Strict equality operator "==="
// NO Type Coercion.
console.log('18' === 18);  // false

// Objects and Arrays are references in the HEAP and references are always different.
var a = [1,2,3];
var b = [1,2,3];

var c = { x: 1, y: 2 };
var d = { x: 1, y: 2 };

a == b            // false
a === b           // false (type is same, but values (References) are different)

c == d            // false
c === d           // false (type is same, but values (References) are different)

// A handy way to compare two objects in JS would be:
JSON.stringify(a) === JSON.stringify(b); // true

// Strings with same values are equal if they are Primitive.
var e = "text";
var f = "te" + "xt";

e == f            // true
e === f           // true

// String Primitive and String Object Comparision.
"abc" == new String("abc")                  // true
"abc" === new String("abc")                 // false

new String("rahul") == new String("rahul")  // false
new String("rahul") === new String("rahul") // false

//https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons

// IMP - Switch stmt performs an ‘===’ based comparison,
// when the switch statement matches the expression with the given case '...'
