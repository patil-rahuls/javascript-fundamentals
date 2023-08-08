//////////////////////////////////////////////////////////////
// DEFAULT PARAMETERS [ES6] //////////////////////////////////
//////////////////////////////////////////////////////////////

function sum(x, y = 10) {
   return x + y;
}
console.log(sum(5));             // 15

function sum(x = 10, y) {
   return x + y;
}
console.log(sum(undefined, 5));  // 15
console.log(sum(null, 5));       // 5

// TIP: Always keep parameters with default values at the end while defining a function.
