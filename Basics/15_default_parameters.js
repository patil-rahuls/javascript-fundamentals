//////////////////////////////////////////////////////////////
// DEFAULT PARAMETERS [ES6] //////////////////////////////////
//////////////////////////////////////////////////////////////

function sum(x, y = 10) {
   return x + y;
}
console.log(sum(5));             // 15

// By default, the default value of a default-parameter is undefined.
function show(a, b) {
   if(a){
      console.log('this');
   }
   if(b){
      console.log('that');
   }
}
show();                          // undefined
show(1);                         // this
show(undefined,1);               // that
show(1,1);                       // this that

function sum(x = 10, y) {
   return x + y;
}
console.log(sum(undefined, 5));  // 15
console.log(sum(null, 5));       // 5

// TIP: Always keep parameters with default values at the end while defining a function.
