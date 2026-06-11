## Javascript Runtime

### 1. Browsers -

1. `JS Engine` -
   - `Heap`
   - `Call Stack`

2. `Web APIs` to Interact with DOM.
   - _These functionalities are accessibe on `window` Object._

3. `Queues` - _Datastructure that holds callback functions of the asynchronous tasks that are to be executed._

   _Example:_
   - _When an event occur (like `click`), its handler function i.e. `eventhandler` is put into a `Callback Queue`._
   - _Then, a mechanism, called `Event Loop`, takes a callback function from the `Callback Queue` and puts in the `Call Stack` for execution._
   - _A non blocking concurrency model is achieved using this._

   There are 4 queues in browser runtime:
   - **_`Microtask` Queue_** -
     _A high priority callback queue that holds all promises' callbacks, MutationObserver callbacks and explicitly queued microtasks via `queueMicrotask()`._

   - **_`Render` Queue_** - _aka Animation Task Queue, handles the browser's visual repaint cycle. Callbacks of `requestAnimationFrame()` go here._
   - **_`Macrotask` Queue_** - _aka Callback/Task Queue, holds callbacks of all the standard async operations initiated by Web APIs e.g._
     - _Timer (`setTimeout()`, `setInterval()`),_
     - _UI events (`click`, `scroll`, `keypress` etc),_
     - _Network requests (`XHR`)_
     - _`<script>` tags that execute for the first time._

   - **_`Idle Task` Queue_** - _Low priority Queue that runs only if browser's main thread is completely free. It takes callbacks of `requestIdleCallback()`._

4. `Event Loop` - \_A mechanism that takes a callback function from a respective callback queue and puts in Call Stack for execution.
   ```
   [ Call Stack Empty ] --> Process ALL items in Microtasks Q --> Check if a UI Repaint is needed --> Process ONE item from Macrotasks Q --> Check if browser is free & run Idle Task Q
   ```

---

&nbsp;

### Node.js -

1. `JS Engine` -
   - `Heap`
   - `Call Stack`

2. `C++ bindings & Thread Pool`

3. `Queues` - _Datastructure that holds callback functions of the asynchronous tasks that are to be executed._

   There are 6 queues in Node.js runtime:
   - **_`Microtask` Queue_** - _This queue contains two different queues:_
     - _`nextTick Queue` - holds the callbacks of the ***process.nextTick()***_
     - _`Promise Queue` - holds the callbacks of ***Promises***._

   - **_`Timer` Queue_** - _holds the callbacks of timer functions i.e. ***setTimeout()*** and ***setInterval()***._

   - **_`I/O` Queue_** - _holds the callbacks of all the async methods such as those of ***fs***, ***http*** modules etc._

   - **_`Check/Immediate` Queue_** - _holds the callbacks of ***setImmediate()***._

   - **_`Close` Queue_** - _holds the callbacks of the ***close*** event of an async task._

4. `Event Loop` - _A mechanism that takes a callback function from a respective callback queue and puts in Call Stack for execution._

---

---

<!-- PAGINATION_START -->

**Parent:** [4. How Javascript Works](..)  
**Previous:** [Compilation, Interpretation and JIT](01-JIT-compilation.md)  
**Next:** [JavaScript Engine](03-javascript-engine.md)

<!-- PAGINATION_END -->
