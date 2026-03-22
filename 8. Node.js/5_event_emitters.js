//////////////////////////////////////////////////////////////
// EVENT EMITTER /////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// In Node.js, an event emitter is a core module that allows
// you to implement the publisher-subscriber pattern.
// It implements the observer pattern, where objects
// (event emitters) can emit named events, and other objects
// (event listeners or subscribers) can listen to those events
// and react accordingly.

import { EventEmitter } from 'node:events';
// IMP: The "node:" prefix clarifies that you are importing
// a Node.js core module and not a third-party one.

// Create an instance of the emitter
const myEmitter = new EventEmitter();

// 1. Create a Listener/Subscriber (.on)
myEmitter.on('pizza_ready', (size, topping) => {
  // here 'pizza_ready' is the event name.
  console.log(`
    Ding! Your ${size} ${topping} pizza is
    ready for pickup!
    `);
});
// We can have more than one listener to an event.
// Max limit is 10 by default.
// setMaxListeners(0) // 0 - infinite
myEmitter.on('pizza_ready', () => {
  console.log('Bill generated.');
});

// 2. Trigger the Event(Publisher) (.emit)
myEmitter.emit('pizza_ready', 'Large', 'Pepperoni');
// passed data 'Large' & 'Pepperoni' with event emitter.

// Output:
// "Ding! Your Large Pepperoni pizza is ready for pickup!"
// "Bill generated.""

// IMP: By default, Node.js's EventEmitter calls each
// listener synchronously in the order they were registered.



//////////////////////////////////////////////////////////////
// Important Methods to Know
//////////////////////////////////////////////////////////////

// .on(event, listener)
// Adds a persistent listener that fires every time the event
// is emitted.

// .addListener(event, listener)
// Adds a persistent listener that fires every time the event
// is emitted.

// .once(event, listener)
// Adds a one-time listener that fires only the first time the
// event is, emitted and then removes itself so that it won't
// be called again for subsequent occurrences of the event.

// .emit(event, [args])
// Triggers the event and passes data to listeners.

// .removeListener(event, listener)
// Stops a specific function from listening to that event.
// Only one occurrence will be removed if the same listener
// function is attached multiple times.
// Nothing happens if no listener function matches the
// provided listener.

// .removeAllListeners([event])
// Clears all listeners (useful for cleanup/memory management).
// If no event name is provided, it removes all listeners for
// all events associated with the event emitter instance.
// After calling removeAllListeners(), the event emitter will no
// longer emit any events associated with the provided event name.

// .eventNames()
// returns an array of event names
// ['event1', 'done']

// .listenerCount(event, listener)
// gets the count of listeners attached to an event.
// Use this to de-duplicate listeners to an event.
emitter.on('task_done', eventListener);
// Before registering the event listener, check if it's
// already registered
if (!emitter.listenerCount('task_done', eventListener)) {
  emitter.on('task_done', eventListener);
}
// This prevents memory leaks.
// Event emitter consume memory. All the listeners take up space
// in the RAM. So use the event emitter wisely.
