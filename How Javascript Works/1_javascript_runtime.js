//////////////////////////////////////////////////////////////
// Javascript Runtime
//////////////////////////////////////////////////////////////

// JS Runtime - used by Browsers, Node.js

// Inside JS Runtime in the *browsers* -
// 1. JS Engine -
//      - Heap
//      - Call Stack
// 2. Web APIs -
//      to Interact with DOM. These functionalities are accessibe on *window* Object.
// 3. Callback Queue -
//      Datastructure that contains callback functions that are to be executed. e.g. click(), timer(), data()
//      When an event occur (like click), the eventhandler function is put into the Callback Queue.
//      Then, a mechanism, called *Event Loop*, takes a callback function from Callback Queue and puts in Call Stack for execution.
//      A non blocking concurrency model is achieved using this.

// Inside JS Runtime in *Node.js* -
// 1. JS Engine
//      - Heap
//      - Call Stack
// 2. C++ bindings & Thread Pool
// 3. Callback Queue. (timer(), data())
//      Event Loop - A mechanism that takes a callback function from Callback Queue and puts in Call Stack for execution.
//      A non blocking concurrency model is achieved using this.


// Event Loop - Once call stack is empty, THEN ONLY it takes a callback function from Callback Queue and put in Call Stack for execution.