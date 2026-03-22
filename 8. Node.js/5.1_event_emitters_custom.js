//////////////////////////////////////////////////////////////
// CUSTOM EVENT EMITTER //////////////////////////////////////
//////////////////////////////////////////////////////////////

// In Node.js, an event emitter is a core module that allows
// you to implement the publisher-subscriber pattern.
// It implements the observer pattern, where objects
// (event emitters) can emit named events, and other objects
// (event listeners or subscribers) can listen to those events
// and react accordingly.

// In Node.js, you can implement custom event emitters by
// creating a class that extends the built-in EventEmitter class.
// Here are the steps to implement a custom event emitter:

import { EventEmitter } from 'node:events';
// IMP: The "node:" prefix clarifies that you are importing
// a Node.js core module and not a third-party one.

class MyCustomEmitter extends EventEmitter {
  performTask() {
    console.log('Performing a task...');
    // Emit an event when the task is complete
    this.emit('taskComplete');
  }
}

// Create an instance of the custom emitter
const myEmitter = new MyCustomEmitter();

// Register an event listener
myEmitter.on('taskComplete', () => {
  console.log('Task completed!');
});

// Perform the task
myEmitter.performTask();
