//////////////////////////////////////////////////////////////
// EVENT LOOP ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Microtasks Queue
// Callbacks of promises do not go in the Callback Queue, instead they go in a special queue called
// "Microtasks Queue"
// This queue has prioritiy over the callback queue.

// The Evet loop FIRST checks if there are any callbacks in microtasks queue, and executes them all at once
// before taking callbacks from the regular callback queue.

// The promises' callbacks are called microtasks, hence their queue is called so.

// May be it can happen, that if there are many mirotasks in their queue, then callbacks from callback Q
// may never get executed or get executed with huge delay.

// Also, Timer functions do not always gaurantee the passed delay execution. because there might be other
// callback function waiting to be executed before the timer in the Callback Queue.

console.log("Test Starts");
setTimeout(()=>console.log("0 Sec Timer"), 0);
// Promise.resolve(); // Builds a promise and immediately resolve.
Promise.resolve("Resolved Promise 1").then(res => console.log(res));
console.log("Test Ends");

// Output:
// Test Starts
// Test Ends
// Resolved Promise 1
// 0 Sec Timer
