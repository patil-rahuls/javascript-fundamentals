## Event Emitters Use Case 1

### The Core Concept: Pub/Sub

Real-World Use Case: A Backend "Order System".

_Imagine you have an E-commerce app. When a user buys an item, three things need to happen:_

1.  _Update the Database._
2.  _Send a Confirmation Email._
3.  _Notify the Warehouse to pack the box._
    
If you put all this code in one big function, it becomes a mess. Instead, use an Event Emitter to decouple the tasks. One advantage of pub/sub is, components can be decoupled from each other.

> OrderService:
```javascript
const EventEmitter = require("node:events");
// import { EventEmitter } from 'node:events';

class OrderService extends EventEmitter{
  createOrder(orderId, userEmail){
    // Publish that the order is recieved
    this.emit('order_recieved', {orderId, userEmail});
  }
}

const storeInstance = new OrderService();

// Subscribe to `order_recieved` 
// event and insert into DB.

// Write to DB
storeInstance.on('order_recieved', (data) => {
  console.log(`
    [DB] Order ${data.orderId} saved to database.
  `);
});

// We can have more than one 
// subscribers to an event.

// Send Email
storeInstance.on('order_recieved', (data) => {
  console.log(`
    [Email] Sending confirmation to ${data.userEmail}.
  `);
});

// Notify Supply Chain
storeInstance.on('order_recieved', (data) => {
  console.log(`
    [Warehouse] Shipping notif sent for Order#${data.orderId}.
  `);
});
```
***IMP: By default, Node.js's EventEmitter calls each listener synchronously in the order they were registered.***

> _Triggering the flow. Publishing/Emitting the event._
>
> ```javascript
> storeInstance.createOrder("998877", "customer@example.com");
> ```

_BUT, there is a problem with the above code. We haven't added a listener to the 'error' event._

_If any error is thrown in any of the listeners above, the entire Node.js process will exit with the error and the stack trace simply because the 'error' event was unhandled on the event `'order_recieved'`._

_***Error Propagation***:_

_When an unhandled error occurs within an event listener function, the EventEmitter class will emit an `error` event._ 

This mechanism enables the error to be propagated to the parent emitter or any other `error` event listeners registered for that emitter.

If no listeners are explicitly registered for the `error` event on an EventEmitter instance, Node.js will treat it as an unhandled exception and display the error message and stack trace on the console. 

This default behavior helps identify and debug errors that are not handled explicitly.

Solution:

_Add a listener on the "error" event to handle the error gracefully, log it, or perform any necessary cleanup operations._

```javascript
storeInstance.on("error", (err) => {
  console.error("Handled the error safely:", err.message);
});
```

---
---
<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Event Emitters Custom](12-event-emitters-custom.md)  

**Next:** → [Node.js > Event Emitters Abort Controller](14-event-emitters-abort-controller.md)

<!-- PAGINATION_END -->
