//////////////////////////////////////////////////////////////
// SYNCHRONOUS VS ASYNCHRONOUS ///////////////////////////////
//////////////////////////////////////////////////////////////

// 1. SYNCHRONOUS
// Synchronous code is executed in sequence.
// A statement has to wait for the earlier statement to get executed.
// Long runing operations "block" the code execution.

//  Example # 1:
console.log('One');
console.log('Two');
console.log('Three');``
// Outputs:
// 'One', 'Two', 'Three'


// 2. ASYNCHRONOUS
// Long runing operations can be made to "execute in the background".
// While rest of the code executes normally without ever being blocked.
// Asynchronous code is "non blocking".

//  Example #2:
console.log('One');
setTimeout(() => console.log('Two'), 100);
console.log('Three');
// Outputs:
// 'One', 'Three', 'Two'


// AJAX(Asynchronous Javascript and XML) execution is asynchronous.
// Some examples of this are network requests, long-running calculations, file system operations etc.
// Using asynchronous code in the browser ensures the page remains responsive and
// the user experience is mostly unaffected.

// Not all callback functions make code asynchronous.


//////////////////////////////////////////////////////////////
// CALLBACK HELL /////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// When we have multiple asynchronous operations one after the other by "nesting" the callbacks,
// we get a a pyramid structure like code called 'callback hell'.

// It is essentially nested callbacks stacked below one another.
// Every callback depends/waits for the previous callback.
// Affects the readability and maintainability of the code.

// We avoid it by using 'Promises'.
