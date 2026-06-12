## Event Emitters Custom

In Node.js, an event emitter is a core module that allows you to implement the `publisher-subscriber pattern`. 

It `implements the observer pattern`, where objects (event emitters) can emit _named events_, and other objects (event listeners or subscribers) can listen to those events and react accordingly.

In Node.js, you can implement custom event emitters by creating a class that extends the built-in `EventEmitter` class.

Here are the steps to implement a custom event emitter:

```javascript
import { EventEmitter } from "node:events";

class MyCustomEmitter extends EventEmitter {
  performTask() {
    console.log('Performing a task...');

    // Emit an event when 
    // the task is complete
    this.emit('taskComplete');
  }
}

// Create an instance of the custom emitter
const myEmitter = new MyCustomEmitter();

// Register an event listener
myEmitter.on("taskComplete", () => {
  console.log("Task completed!");
});

// Perform the task
myEmitter.performTask();
```
---
---
<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Event Emitters](11-event-emitters.md)  

**Next:** → [Node.js > Event Emitters Use Case 1](13-event-emitters-use-case-1.md)

<!-- PAGINATION_END -->
