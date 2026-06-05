## Javascript Runtime

JS Runtime - used by Browsers, Node.js

### Browsers -
1. `JS Engine` -
    - `Heap`
    - `Call Stack`

2. `Web APIs` to Interact with DOM.
    - These functionalities are accessibe on `window` Object.

3. `Queues` - Datastructure that holds callback functions of the asynchronous tasks that are to be executed.
- Example:
    - when an event occur (like `click`), its handler function i.e. `eventhandler` is put into the Callback Queue.
    - Then, a mechanism, called `Event Loop`, takes a callback function from Callback Queue and puts in the `Call Stack` for execution.
    - A non blocking concurrency model is achieved using this.

- There are 4 queues in browser runtime:
    > - `Microtask` Queue - A high priority callback queue that holds all `promises'` callbacks, `MutationObserver` callbacks and explicitly queued microtasks via `queueMicrotask()`.
    >
    > - `Render` Queue - aka Animation Task Queue, handles the browser's visual repaint cycle. Callbacks of `requestAnimationFrame()` go here.
    >
    > - `Macrotask` Queue - aka Callback/Task Queue, holds callbacks of all the standard async operations initiated by Web APIs e.g.
    >
    >    - Timer (`setTimeout()`, `setInterval()`),
    >    - UI events (`click`, `scroll`, `keypress` etc),
    >    - Network requests (`XHR`)
    >    - `<script>` tags that execute for the first time.
    > - `Idle Task` Queue - Low priority Queue that runs only if browser's main thread is completely free. It takes callbacks of `requestIdleCallback()`.

4. `Event Loop` - A mechanism that takes a callback function from a respective callback queue and puts in Call Stack for execution. A non blocking concurrency model is achieved using this.
    - [ Call Stack Empty ] --> Process ALL items in Microtasks Q --> Check if a UI Repaint is needed --> Process ONE item from Macrotasks Q --> Check if browser is free & run Idle Task Q

---
&nbsp;

### Node.js -
1. `JS Engine` -
    - `Heap`
    - `Call Stack`

2. `C++ bindings & Thread Pool`

3. `Queues` - Datastructure that holds callback functions of the asynchronous tasks that are to be executed.
  - There are 6 queues in Node.js runtime:
    > - **`Microtask`** Queue - This queue contains two different queues:
    >    -  **`nextTick Queue`** - holds the callbacks of the ***process.nextTick()***
    >    - **`Promise Queue`** - holds the callbacks of ***Promises***.
    >
    > - **`Timer`** Queue - holds the callbacks of timer functions i.e. ***setTimeout()*** and ***setInterval()***.
    >
    > - **`I/O`** Queue - holds the callbacks of all the async methods such as those of ***fs***, ***http*** modules etc.
    >
    > - **`Check/Immediate`** Queue - holds the callbacks of ***setImmediate()***.
    >
    > - **`Close`** Queue - holds the callbacks of the ***close*** event of an async task.
    >

4. `Event Loop` - A mechanism that takes a callback function from a respective callback queue and puts in Call Stack for execution. A non blocking concurrency model is achieved using this.

---
