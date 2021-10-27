//////////////////////////////////////////////////////////////
// EQUALITY OPERATORS ("==" and "===") ///////////////////////
//////////////////////////////////////////////////////////////

// Abstract equality operator "=="
// aka loose equality operator and type coercion occurs here.
console.log('18' == 18);   // true because of implicit type coercion.

// Strict equality operator "===" 
// is a strict equality check operator. It does not perform type coercion.
console.log('18' === 18);  // false

// Objects and Arrays are references in the memory and references are always different
var a = [1,2,3];
var b = [1,2,3];

var c = { x: 1, y: 2 };
var d = { x: 1, y: 2 };

a == b            // false
a === b           // false

c == d            // false
c === d           // false

// strings with same values are equal if they are primitives.
var e = "text";
var f = "te" + "xt";

e == f            // true
e === f           // true

// string primitive and String Object
"abc" == new String("abc")                  // true
"abc" === new String("abc")                 // false
new String("rahul") == new String("rahul")  // false
new String("rahul") === new String("rahul") // false

// More on this here :https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons