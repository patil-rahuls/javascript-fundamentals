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
//  Example #1
var a = [1,2,3];
var b = [1,2,3];
a == b            // false
a === b           // false (type is same, but values (References) are different)

//  Example #2
var c = { x: 1, y: 2 };
var d = { x: 1, y: 2 };
c == d            // false
c === d           // false (type is same, but values (References) are different)

// A handy way to compare two objects in JS would be:
JSON.stringify(a) === JSON.stringify(b); // true

// Strings with same resulting values are equal if they are Primitive.
//  Example #3
var e = "text";
var f = "te" + "xt";                        // "te" & "xt" are both Primitive
e == f            // true
e === f           // true

// String Primitive and String Object Comparision.
//  Example #4
"abc" == new String("abc")                  // true. 'new String()' returns an Object
"abc" === new String("abc")                 // false
new String("rahul") == new String("rahul")  // false
new String("rahul") === new String("rahul") // false

// Read More - https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons

// IMP - Switch stmt performs an ‘===’ based comparison,
// when the switch statement matches the expression with the given case '...'
