//////////////////////////////////////////////////////////////
// EVENT EMITTER | AbortController ///////////////////////////
//////////////////////////////////////////////////////////////

// The "AbortController" is a modern way to add a "kill switch"
// to asynchronous operations or events.
// When combined with an EventEmitter, it allows you to stop
// listening to events or cancel an ongoing task based on a
// timeout or a specific user action.

// Think of it like a contract with a cancellation clause.
// You start a task, but you hand it a "cancel button"
// (the signal).
// If you press the button, the task stops immediately.


//  Example 1:
// Imagine your backend is waiting for a specific event from
// a microservice (e.g., inventory_updated).
// If that microservice is lagging, you don't want your Express
// route to hang forever.
// You want to wait for 5 seconds, and if the event hasn't fired
// by then, "abort" the listener and tell the user "System Busy."

const { once, EventEmitter } = require('events');

const myEmitter = new EventEmitter();
const ac = new AbortController();
const { signal } = ac;

// Set a timer to "Abort" after 3 seconds
setTimeout(() => {
  console.log("--- Time is up! Aborting... ---");
  ac.abort();
  // This aborts the controller where the associated signal
  // is attached. i.e. Line # 44
}, 3000);

try {
    console.log("Waiting for 'data_ready' event...");

    // We use the static 'once' method which supports signals
    // If 'data_ready' doesn't happen before ac.abort(),
    // it throws an error
    await once(myEmitter, 'data_ready', { signal });

    console.log("Event received successfully!");
  } catch (err) {
    if (err.name === 'AbortError') {
      console.error("Operation cancelled: The event took too long.");
    } else {
      throw err;
    }
}
// Once ac.abort() is called, the EventEmitter internally
// stops listening.


//  Example 2:
// Usage with Fetch, without the use of event emitter.
const actrl = new AbortController();
setTimeout(() => actrl.abort(), 5000); // Cancel if longer than 5s

try {
  const response = await fetch(
    'https://api.slow-service.com',
    { signal: actrl.signal }
  );
  const data = await response.json();
} catch (e) {
  console.log("Fetch aborted!");
}
// The ac.abort() operation throws an "AbortError",
// which you catch in a try/catch block.
