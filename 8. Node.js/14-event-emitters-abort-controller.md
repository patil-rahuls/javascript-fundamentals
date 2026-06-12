## Event Emitters Abort Controller

The "AbortController" is a modern way to add a "kill switch" to asynchronous operations or events.

_When combined with an EventEmitter, it allows you to stop listening to events or cancel an ongoing task based on a timeout or a specific user action._

_Think of it like a contract with a cancellation clause. You start a task, but you hand it a "cancel button" (the signal). If you press the button, the task stops immediately._

> Example 1:
_Imagine your backend is waiting for a specific event from a microservice (e.g., inventory_updated)._

_If that microservice is lagging, you don't want your Express route to hang forever. You want to wait for 5 seconds, and if the event hasn't fired by then, `abort` the listener and tell the user "System is Busy."_

```javascript
const { once, EventEmitter } = require("events");

const myEmitter = new EventEmitter();
const ac = new AbortController();
const { signal } = ac;

// Set a timer to "Abort" after 3 seconds

setTimeout(() => {
  console.log("--- Time is up! Aborting... ---");
  ac.abort();
  // This aborts the controller 
  // where the associated signal
  // is attached.
}, 3000);

try {
  console.log("Waiting for 'data_ready' event...");
  await once(myEmitter, "data_ready", { signal });
  
  console.log("Event received successfully!");
} catch (err) {
  if (err.name === 'AbortError') {
    console.error("Operation cancelled: took too long.");
  } else {
    throw err;
  }
}
```

_We use the static `once` method which supports signals._

_In the above example, if `data_ready` doesn't happen before `ac.abort()`,it throws an error._

_Once `ac.abort()` is called, the EventEmitter internally stops listening._

&nbsp;

>Example 2: _Usage with Fetch, without the use of event emitter._

```javascript
const ac = new AbortController();

setTimeout(() => ac.abort(), 5000);
// Cancel if longer than 5s

try {
  const response = await fetch("https://api.slow-service.com", {
    signal: ac.signal,
  });
  const data = await response.json();
} catch (e) {
  if (error.name === 'AbortError') { 
    console.error("The event listener was aborted.");
  } else {
    console.error("An unrelated error occurred:", error);
  }
}
```

_The `ac.abort()` operation throws an `"AbortError"`, which you can catch in a try/catch block._

---
---
<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Event Emitters Use Case 1](13-event-emitters-use-case-1.md)  

**Next:** → [Node.js > Event Emitters Capture Rejections](15-event-emitters-capture-rejections.md)

<!-- PAGINATION_END -->
