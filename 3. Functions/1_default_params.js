//////////////////////////////////////////////////////////////
// DEFAULT PARAMETERS [ES6] //////////////////////////////////
//////////////////////////////////////////////////////////////

function sum(x, y = 10) {
   return x + y;
}
console.log(sum(5));             // 15

// By default, the value of a default-parameter is undefined.
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

// TIP: Always keep parameters with default values at
// the end while defining a function.


const defaultGrade = 'NA';
const myFunc = function(
   name,
   id = 0,
   // parameter's default value set to 0
   grades = 'Grade ' + defaultGrade
   // We can have an expression to compute default value
   ){
   console.log(name, id, grades);
}

myFunc('rahul', 12);
// rahul 12 Grade NA

myFunc('hitesh');
// hitesh 0 Grade NA

myFunc('aajesh', undefined , A++);
// aajesh 0 Grade A++

// setting default param value as 'undefined' is the same as
// not setting the value. This means that parameters (without a
// default value) in a function are set to 'undefined' initialy.
