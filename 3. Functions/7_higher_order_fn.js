//////////////////////////////////////////////////////////////
// HIGHER ORDER FUNCTIONS ////////////////////////////////////
//////////////////////////////////////////////////////////////

// Fundamental property of js.
// Higher Order function - a function that receives a function as an argument, 
// or/and returns a function. And the functions that are passed as argument or 
// returned are called First Class Functions/Citizens.

// Similarly, we have a term *First Class Citizens/Functions*
// Any Functions that could be passed to functions and/or returned from functions.

// e.g. addEventListener() is a higher order function.
function count() {
   let counter = 0;
   return function(){                        // returns a function.
      counter++;
   }
}

// More examples:
// 1. Functions accepting callback functions:
// Callback function 1
const oneWord = function (str) {
   return str.replace(/ /g, '').toLowerCase();
};
// Callback function 2
const UpperFirstWord = function (str) {
   const [ first, ...restWords] = str.split(' ');  // REST Operator
   return [first.toUpperCase(), ...restWords];     // SPREAD Operator. This becomes a string.
}
// The higher order function that takes one of the two functions above as parameter.
const transform = function (str, fn) {
   console.log(`Original string : ${str} `);
   console.log(`Modified string : ${fn(str)} `);
   console.log(`Modified by function : ${fn.name}`);
   // A function is also an object and it has ‘name’ as one of its internal properties.
}

// calling transform using different methods as parameters.
transform("Rahul is greater", UpperFirstWord);
transform("Rahul is greater", oneWord);

// In the above example, Abstraction is achieved i.e. hiding the details of implementation.
// This allows us to think more on an abstract level.

// 2. Functions returning functions:
const greet = function (greeting) {
   return function (name) {
       console.log( `${greeting} ${name}` );
   }
};

const greeterHey = greet('Heyy');
// greeterHey will now be a function which is returned by greet();

// Let's observe the function call now
greeterHey('Rahul');                                  // "Heyy Rahul"

// How is the greeting 'heyy' coming in the function which is already returned.
// It's because of 'closures'.

// The above function call can be also written in one line.
greet("Good Morning")("Mr. Rahul");

// And the function definition can also be written using the arrow function:
const greet = greeting => {
   return function (name) {
      console.log( ` ${greeting} ${name}` );
   }
}
// OR
const greetArrow = greeting => name => console.log( ` ${greeting} ${name}` );
// See the cleanliness in our code. One arrow function returning another arrow function

// 3. Creating related functions by returning functions.
const addTax = (rate) => {
   return function (val) {
       return val+ val*rate;
   }
};
const GST = addTax (18);               // A fn for GST
const EducationCess = addTax (0.05);   // A fn for edu cess.

GST(3499);                             // 66481
EducationCess(3499);                   // 3673.95
