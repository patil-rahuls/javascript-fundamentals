//////////////////////////////////////////////////////////////
// EVENT EMITTER | captureRejections /////////////////////////
//////////////////////////////////////////////////////////////

// When the listeners to an event are async functions we can
// tell an EventEmitter to automatically capture Async/Promise
// failures.

const { EventEmitter, captureRejections } = require('events');

// Enable tracking for async functions
const myEmitter = new EventEmitter({ captureRejections: true });

myEmitter.on('something', async (value) => {
  throw new Error('Failed inside async listener');
});

// Instead of crashing, this triggers the special symbol listener
myEmitter[Symbol.for('nodejs.rejection')] = (err, event, ...args) => {
  console.log('Caught an async rejection safely:', err.message);
};
// Just use the above instead of myEmitter.on('error', ...) for
// async listener's failure.

myEmitter.emit('something');


// Standard Listener: If you throw a regular error in a non-async
// function, the EventEmitter catches it immediately and
// emits an 'error' event.

// Async Listener: If an async function fails, it returns a rejected
// Promise. Normally, an EventEmitter doesn't know how to "look inside"
// a Promise. It just sees a function that returned an object
// (the Promise) and thinks everything is fine. The crash happens
// later when that Promise is actually rejected and nothing is there
// to catch it. Hence we use this "custom promise rejection handler".

// captureRejection = 'Capture Promise Rejection'
/*
// This is fixed. Just copy paste it. It is like a safety net for
// ANY async listener on this emitter
myEmitter[Symbol.for('nodejs.rejection')] = (err, eventName, ...args) => {
  console.error(`Caught async error in [${eventName}]:`, err.message);
};
*/

// If you have captureRejections: true enabled, Node.js is smart:

// It first looks for the Symbol.for('nodejs.rejection') handler.

// If that doesn't exist, it will automatically try to emit a standard 'error' event.

// So, you can just use a regular .on('error') listener even for async
// rejections, provided you turned on the captureRejections flag.
// However, using the Symbol way is considered "best practice" for library
// authors because it avoids mixing up "standard errors" with
// "async promise rejections."
