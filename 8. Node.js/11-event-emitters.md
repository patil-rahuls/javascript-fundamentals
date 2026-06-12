## Event Emitters

In Node.js, an event emitter is a core module that allows you to implement the `publisher-subscriber pattern`. 

It `implements the observer pattern`, where objects (event emitters) can emit _named events_, and other objects (event listeners or subscribers) can listen to those events and react accordingly.

> ```javascript
> import { EventEmitter } from "node:events";
> // the "node:" prefix clarifies that you are 
> // importing Node.js core module and not a 
> // third-party one.
>
> // Create an instance of the emitter
> const myEmitter = new EventEmitter();
> 
> // Create a Listener/Subscriber.
> // 'pizza_ready' is the event name.
> myEmitter.on('pizza_ready', (size, topping) => {
> 
>   console.log(`
>     Ding! Your ${size} ${topping} pizza is
>     ready for pickup!
>   `);
> });
>
> ```
>
> _We can have more than one listener to an event._
>
> _Max limit is 10 by default. However, we can change that by setting `setMaxListeners(0)`, where 0 means infinite._
>
> ```javascript
> // Another listener on the same event.
> myEmitter.on("pizza_ready", () => {
>   console.log("Bill generated.");
> });
> ```

> Trigger the Event(Publisher) (`emit`)
>
> ```javascript
> myEmitter.emit("pizza_ready", "Large", "Pepperoni");
> ```
> 
> Output:
> ```
> "Ding! Your Large Pepperoni pizza is ready for pickup!"
> "Bill generated."
> ```

***IMP: By default, Node.js's EventEmitter calls each listener synchronously in the order they were registered.***

---
&nbsp;
### Important EventEmitter Methods:

- **`.on(event, listener)`**

  _Adds a persistent listener that fires every time the event is emitted._

- **`.addListener(event, listener)`**
  
  _Same as `.on()`. `.on()` is an alias of this method.._

- **`.once(event, listener)`**

  _Adds a one-time listener that fires only the first time the event is, emitted and then removes itself so that it won't be called again for subsequent occurrences of the event._

- **`.emit(event, [args])`**

  _Triggers the event and passes data to the listeners._

- **`.removeListener(event, listener)`**

  _Stops a specific function from listening to that event._

  _Only one occurrence will be removed if the same listener function is attached multiple times. Nothing happens if no listener function matches the provided listener._

- **`.removeAllListeners([event])`**

  _Clears all listeners (useful for cleanup/memory management)._
  
  _If no event name is provided, it removes all listeners for all events associated with the event emitter instance._

  _After calling `removeAllListeners()`, the event emitter will no longer emit any events associated with the provided event name._

- **`.eventNames()`**

  _Returns an array of event names ['event1', 'done']._

- **`.listenerCount(event, listener)`**

  _Gets the count of listeners attached to an event._

  _Use this to de-duplicate listeners to an event._

  ```javascript
  emitter.on("task_done", eventListener);
  ```

  _Before registering the event listener, check if it's already registered._

  ```javascript
  if (!emitter.listenerCount("task_done", eventListener)) {
    emitter.on("task_done", eventListener);
  }
  ```

  _This prevents memory leaks._
  
  _Event emitter consume memory. All the listeners take up space in the RAM. So use the event emitter wisely._

---
---

<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > HTTP](10-http.md)  

**Next:** → [Node.js > Event Emitters Custom](12-event-emitters-custom.md)

<!-- PAGINATION_END -->
