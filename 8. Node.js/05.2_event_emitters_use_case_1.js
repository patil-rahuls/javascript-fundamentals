//////////////////////////////////////////////////////////////
// EVENT EMITTER /////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// 1. The Core Concept: Pub/Sub
// In Node.js, the EventEmitter class is built into the events
// module.
// It follows the Publisher/Subscriber (Pub/Sub) model.

// Real-World Use Case: A Backend "Order System"
// Imagine you have an E-commerce app.
// When a user buys an item, three things need to happen:
//    1. Update the Database.
//    2. Send a Confirmation Email.
//    3. Notify the Warehouse to pack the box.
// If you put all this code in one big function, it becomes
// a mess. Instead, use an Event Emitter to decouple the tasks.
// One advantage of pub/sub is components can be decoupled
// from each other.

const EventEmitter = require('node:events');
// import { EventEmitter } from 'node:events';

class OrderService extends EventEmitter{
  createOrder(orderId, userEmail){
    // Publish that the order is recieved
    this.emit('order_recieved', {orderId, userEmail});
  }
}

const storeInstance = new OrderService();
// Subscribe to order_recieved event and insert into DB
storeInstance.on('order_recieved', (data) => {
  // write to DB...
  console.log(`
    [DB] Order ${data.orderId} saved to database.
  `);
});
// We can have more than one subscribers to an event.
storeInstance.on('order_recieved', (data) => {
  // send email
  console.log(`
    [Email] Sending confirmation to ${data.userEmail}.
  `);
  // throw new Error('Exception occured in email');
});
storeInstance.on('order_recieved', (data) => {
  // notify supply chain
  console.log(`
    [Warehouse] Shipping notification sent for Order#${data.orderId}.
  `);
});
// IMP: By default, Node.js's EventEmitter calls each
// listener synchronously in the order they were registered.

// Triggering the flow. Publishing/Emitting the event.
storeInstance.createOrder("998877", "customer@example.com");

// BUT, there is a problem with the above code.
// We haven't added a listener to the 'error' event.
// If any error is thrown in any of the listeners above, the
// entire Node.js process will exit with the error and the
// stack trace simply because the 'error' event was
// unhandled on the event 'order_recieved'.

// Error Propagation: When an unhandled error occurs within an
// event listener function, the EventEmitter class will emit an
// 'error' event. This mechanism enables the error to be
// propagated to the parent emitter or any other 'error' event
// listeners registered for that emitter.

// If no listeners are explicitly registered for the 'error'
// event on an EventEmitter instance, Node.js will treat it as
// an unhandled exception and display the error message and
// stack trace on the console. This default behavior helps
// identify and debug errors that are not handled explicitly.

// To try it, uncomment the error thrown on line #45.
// When there is no listener present to listen to an event
// the program crashes. 'error' event is not handled in our
// code yet, hence the program can crash is there is an error.


// Solution:
// This listener will be invoked whenever an error event is
// emitted, allowing you to handle the error gracefully, log it,
// or perform any necessary cleanup operations.
storeInstance.on('error', (err) => {
  console.error('Handled the error safely:', err.message);
});
// This will prevent unhandled exceptions from crashing
// your application.
