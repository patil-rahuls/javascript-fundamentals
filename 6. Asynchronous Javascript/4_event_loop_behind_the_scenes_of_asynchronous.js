//////////////////////////////////////////////////////////////
// EVENT LOOP ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// A mechanism that orchestrates or coordinates the execution of 
// synchronous and asynchronous code in Node.js. 
// It runs continuously as long as your Node.js application is up and running, 
// handling multiple operations executing concurrently.

// It takes a callback function from a callback queue
// and puts in Call Stack for execution.
// A non blocking concurrency model is achieved using this.
// *Event Loop uses event emitters and event multiplexers to make this happen.


//////////////////////////////////////////////////////////////
// LIBUV LIBRARY /////////////////////////////////////////////
//////////////////////////////////////////////////////////////
// 
// In Node.js runtime, apart from C++ Bindings and Thread Pool, there is one crucial component called
// Libuv - 
// It is a code(library) written in C that is responsible for handling asynchronous methods.
// Libuv uses different POSIX threads to perform asynchronous tasks and adds their callbacks to
// respective queues.
// 
//////////////////////////////////////////////////////////////
// THERE ARE 6 DIFFERENT QUEUES IN Node.js RUNTIME ///////////
//////////////////////////////////////////////////////////////
// 
// 1. Microtask Queue
//    This queue contains two different queues
//      1.1 nextTick Queue - holds the callbacks of the process.nextTick() function.
//      1.2 Promise Queue  - holds the callbacks of Promises.
// 
// 2. Timer Queue
//    This queue holds the callbacks of timer functions i.e. setTimeout() and setInterval()
// 
// 3. I/O Queue
//    This queue holds the callbacks of all the async methods such as those of 'fs', 'http' modules etc.
// 
// 4. Check/Immediate Queue
//    This queue holds the callbacks of setImmediate() function.
// 
// 5. Close Queue 
//    This queue holds the callbacks of the 'close' event of an async task.
//    i.e. 'close' event fired on 
// 
// It is important to note that the Timer, I/O, Check, and Close Queues are all part of libuv. 
// The two microtask queues, however, are not part of libuv. They are part of Node.js.
// 
// 
//////////////////////////////////////////////////////////////
// ORDER OF EXECUTION OF CALLBACKS OF DIFFERENT QUEUES /////// 
//////////////////////////////////////////////////////////////
// 
// 1.
// First, the callbacks(AKA tasks) in the nextTick queue are executed
// and only then, the tasks in the promise queue are executed.
// But there is a catch - 
//      After finishing executing the nextTick queue, Before moving to promise queue, 
//      the nextTick Queue is again checked for any callbacks.
//      For a case when a nextTick() callback registers another nextTick() callback, that will also get added to queue at the end.
//      so these also need to be executed before moving to the promise queue.
//      e.g. - 
//      
//      process.nextTick(() => { 
//        console.log('Next Tick 1'); 
//        process.nextTick(() => { 
//          console.log('Next Tick 2');
//        }); 
//      }); 
// 
//      Promise.resolve().then(() => { 
//        console.log('Promise 1');
//      }); 
// 
//      Output - 
//          Next Tick 1
//          Next Tick 2
//          Promise 1
// 
// 2.
// All callbacks in the timer queue are executed. 
// These are expired timer callbacks waiting to be executed in the queue.
// However, the timer callbacks are not executed all at once.
// After every callback is executed in the timer queue, event loop checks and
// executes the callbacks from the microtask queue again(first nextTick and then promise queue).
// 
// 3.
// All callbacks within the I/O queue are executed all at once.
// Also, there is something called I/O polling. It checks/polls if the I/O 
// operation has completed or not, e.g. reading a file, http request etc.
// So it might happen that when the loop checks the I/O queue it is empty and
// the the callbacks of other(next) queue get called.
// 
// 4. 
// Again, the microtask queue is checked for any callbacks in them and executed.
// (first nextTick and then promise queue).
// 
// 5. 
// All callbacks in the check(Immediate) queue are executed. 
// However, similar to timer callbacks, the check callbacks are not executed all at once.
// After every callback is executed in the check queue, event loop checks and
// executes the callbacks from the microtask queue again(first nextTick and then promise queue).
// 
// 6. 
// Again, the microtask queue is checked for any callbacks in them and executed.
// (first nextTick and then promise queue).
// 
// 7. 
// All callbacks in the close queue are executed all at once.
// e.g. readableStream.on("close", cb);
// 
// 8.
// Again, for the last time the microtask queue is checked for any callbacks in them and executed.
// (first nextTick and then promise queue).
// 
// AND that's how ONE event loop completes. And this process continues.
// 
// The promises' callbacks are called microtasks, hence their queue is called so.
// 
// May be it can happen, that if there are many mirotasks in their queue, then callbacks from other 
// queue may never get executed OR get executed with huge delay.
// 
// Hence, Timer functions do not always gaurantee the passed delay execution. because there might be other
// callback function waiting to be executed before the timer.
//////////////////////////////////////////////////////////////
