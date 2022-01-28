//////////////////////////////////////////////////////////////
// CLOSURES //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

const parentFn = function () {
   let i = 0;
   return function () {
       i++;
       console.log(i);
   }
};
const booker = parentFn(); 
// the parent function has been called and returned.
booker(); // 1
booker(); // 2
booker(); // 3

// booker() still has access to the variable 'users' which was declared in parent function parentFn(). 
// And parentFn() has already been executed and has returned to booker().
// A closure gives a function access to all the variables of its parent function, 
// even after that parent function has finished executing and returned. 
// The function keeps a reference to its outer scope, which preserves the scope chain throughout the time.
// A closure ensures that a function doesn't lose connection to variables that existed at the function's creation scope.

// Formal explanation : 
// A closure is the closed-over variable environment of the execution context in which a function was created,
// even after that function execution context is gone.

// BEST LAYMAN EXPLANATION: 
// A closure is like a backpack that a function carries around wherever it goes(from wherever it is being called). 
// This backpack has all the variables that were present in the environment where the function was created.

// WE DO NOT CREATE CLOSURES MANUALLY. 
// THEY ARE A JAVASCRIPT FEATURE THAT HAPPENS AUTOMATICALLY. 
// ALSO WE DON'T HAVE ANY ACCESS TO CLOSED-OVER VARIABLES. 
// WE CAN'T GO INTO A CLOSURE AND READ OR WRITE VARIABLES. 
// A CLOSURE IS NOT A TANGIBLE JS OBJECT. BUT WE CAN HAVE A LOOK AT ITS PROPERTIES.
console.dir(booker); 

// It gives the function details. where it shows the 'scopes' property which is the variable environment. 
// We can see which variables exist in that VE and that variables are changing in it based on the no. of times I am calling booker().

/*
  [[Scopes]] : Scopes[3] // [[Scopes]] double bracket = internal js property
  0: Closure (parentFn) {users:...}
*/

// The above line means that we have the variable 'users' available from parentFn’s execution context
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// Some more examples:
// Example : 1
let f; // global scope

const g = function () {
   const a = 23;
   f = function (){ console.log(a*2); }
};

const h = function () {
   const b = 777;
   f = function (){ console.log(b*2); }
};

g();
f();                       // 23*2
console.dir(f);            // Observe the o/p

// re assigning the f function
h();
f();                       // 777*2
console.dir(f);



// Example : 2 - Timer
// We don't always need to return a function to observe a closure.
const test = function ( n  ) {
   const twice = n * 2 ;
   setTimeout (function(){
      console.log( `The double of ${n} is ${twice}.` );
   } , wait * 2000) ;
   console.log(`This won’t wait for the timer function defined above.`);
};

test(3);

// On calling this, following events happen:
// 1. const variable 'twice' is created.
// 2. timer callback fn is registered- it starts waiting for its execution for the given time in milliseconds.
// 3. and the last console.log is executed. It won't wait for the timer’s callback.
// 4. after 2 seconds, the callback function is called and executed.

// Observe that the callback function of the timer was executed completely independent of the test(). 
// But still the callback function was able to access all the variables which were created in the test(). 
// This happens because closures have priority over scope chain.


// Example : 3 (IIFE)
(function() {
   const header = document.querySelector('h1');
   header.style.color = 'red';

   header.addEventListener('click' ,
       function () {
           this.style.color = 'blue';
           // ‘this’ points to the 'header' element.
       }
   );
})();
   
// This is an IIFE, and it is invoked immediately. But the eventlistner's callback function will be on call 
// stack and waiting for the 'click' event to occur and even though the IIFE has finished executing, the 
// callback function will still have access to the 'header' element.


