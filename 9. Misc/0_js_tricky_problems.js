//////////////////////////////////////////////////////////////
// JS Problems ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// 1.
// Assign certain value to the variable 'a' such that the
// following condition evaluates to true.
if(a == 1 && a == 2 && a == 3){
  console.log("YES");
}
// Ans: leverage the Object's internal method 'valueOf()'
a = {
  value: 1,
  valueOf() {
    return this.value++;
  }
};


// 2.
// What will be the output of this program.
var count = 0;
(function test() {
  if(count == 0){
    var count = 1;
    console.log(count);
  }
  console.log(count);
})();
// Ans:
// undefined.

// The outer variable 'count' won't be considered inside
// the IIFE because, inside the IIFE, there is another
// 'var count' variable defined.
// Now, inside the IIFE, the 'count' variable is moved to
// the top of its respective scope(IIFE scope) with
// value 'undefined' because of hoisting.
// Hence, the condition "count == 0" would fail.
// The console.log on line#28 is evaluated, where the code
// finds that 'count' is still undefined,
// hence prints 'undefined'.


// 3.
// Group Array items by a property.
const users = [
  { name: "Rahul", city: "Pune"},
  { name: "Aajesh", city: "Bglre"},
  { name: "Hitesh", city: "Kentucky"},
];
// Ans:
const grouped = users.reduce((acc, user)=>{
  if(!acc[user.city]){
    acc[user.city] = [];
  }
  acc[user.city].push(user);
  return acc;
}, {});
console.log(grouped);


// 4.
// What will be the output of this program.
const obj = {};
const a = { key: "a" };
const b = { key: "b" };

obj[a] = 123;
obj[b] = 456;

console.log(obj[a]);
// Ans:
// 456
// When you pass an object like a or b as a property key, JavaScript
// forces it into a string by calling its .toString() method.
// For standard objects, ({}).toString() always outputs the string
// "[object Object]". Therefore, the code translates underneath to:
obj["[object Object]"] = 123;
obj["[object Object]"] = 456; // Overwrites the previous value!


// 5.
// What will be the output of this program.
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 1000);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 1000);
}
// Ans:
"var: 3"
"var: 3"
"var: 3"
"let: 0"
"let: 1"
"let: 2"
// Variables declared with var are function-scoped (or global if
// outside a function). By the time the asynchronous 1-second
// timer finishes and executes console.log, the loop has already
// completed, leaving the shared global variable i sitting at 3.

// Variables declared with let are block-scoped. Every single
// iteration of the loop creates a completely fresh binding/memory
// slot for j. Each timer securely captures its own unique value
// of j at that specific point in time.


// 6.
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);
console.log(0.1 + 0.5 === 0.6);
// The Output:
false
0.30000000000000004
true

// In binary (base-2), fractional numbers like 0.1 and 0.2 cannot be
// perfectly represented. They turn into repeating, infinite binary
// fractions (much like $1/3$ becomes $0.3333...$ in base-10).
// Numbers like 0.5 (1/2) can be cleanly represented in binary without
// any repeating trailing digits, which is why 0.1 + 0.5 === 0.6
// miraculously evaluates to true.


// 7. ASI - Automatic Semicolon Insertion
function foo() {
  return
  {
    status: "active"
  };
}
console.log(foo());

// Output
undefined

// When the engine parses the return keyword and sees a line break
// immediately after it, it assumes you forgot a semicolon and inserts
// one automatically right there.
// The code evaluates as:
function foo() {
  return; // ASI strikes here!
  { status: "active" }; // This becomes an unreachable block statement.
}


// 8.
(function() {
  let a = b = 5;
})();
console.log(typeof a);
console.log(typeof b);
//
"undefined"
"number"
// Chained assignments evaluate from right to left.
// The line breaks down under the hood to:
b = 5;       // Evaluated first without any keyword declaration!
let a = b;   // Evaluated second, bound to 'let'

// Because b = 5 is executed without a declaring keyword (let, const, or var),
// JavaScript assigns it directly to the global object (window in browsers,
// global in Node.js) unless you are explicitly running in 'use strict' mode.
// Therefore, a dies with the function scope, but b leaks out and is
// accessible globally as a number.
