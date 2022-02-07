//////////////////////////////////////////////////////////////
// SYNCHRONOUS VS ASYNCHRONOUS ///////////////////////////////
//////////////////////////////////////////////////////////////

// 1. SYNCHRONOUS
// Synchronous code is "executed line by line".
// Long runing operations "block" the code execution.

// 2. ASYNCHRONOUS
// Long runing operations(asynchronous) "execute in the background" 
// while rest of the code executes normally without ever being blocked.
// Asynchronous code is "non blocking".

// AJAX(Asynchronous Javascript and XML) execution is asynchronous.

// Not all callback functions make code asynchronous.

// Callback Hell
// When we have multiple asynchronous operations one after the other by "nesting" the callbacks,
// we get into callback hell.

// We avoid it using Promises.
