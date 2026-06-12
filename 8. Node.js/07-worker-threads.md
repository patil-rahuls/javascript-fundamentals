## Worker Threads

Worker Threads are different than Worker Processes.

A Process can have multiple threads(workers).

> - System memory: 
>
>   Worker Threads: Spawns a thread and offloads tasks to it. Share the same memory space(allocated RAM), network sockets, db connetions as the parent process. They use `SharedArrayBuffer` for inter-threads communication.
>
>   Worker Processes: Spawns a new process. Have isolated memory and run as independent programs. They use IPC(Inter Process Communication).
>
> - Resouces:
> 
>   Worker Threads: use minimal overhead; spins up quickly inside the same application instance. 
>
>   Worker processes: every process boots a full, separate V8 engine instance and Node.js runtime.
>
> - Failure Impact:
>       
>   Worker Threads: A fatal or out of memory error can crash the entire application.
>
>   Worker Processes: Isolated. _If one process crashes, the others keep running completely unaffected._
>
> - Use Case:
>       
>   Worker Threads: _Hard CPU-bound calculations (e.g., video encoding, heavy math)._
>       
>   Worker Processes: _Scaling web servers across multiple CPU cores to handle more network requests._
>

### Here is a visual architectural difference between the two:
```
Worker Processes (e.g., PM2 Cluster Mode)
┌───────────────────────────┐   ┌───────────────────────────┐
│     Worker Process 1      │   │     Worker Process 2      │
│ ┌───────────────────────┐ │   │ ┌───────────────────────┐ │
│ │  V8 Engine & Memory   │ │   │ │  V8 Engine & Memory   │ │
│ └───────────────────────┘ │   │ └───────────────────────┘ │
└───────────────────────────┘   └───────────────────────────┘
               ▲                             ▲
               └────────── IPC Channel ──────┴────────── (Heavy Data Transfer)

Worker Threads (Inside a Single Node.js App)
┌───────────────────────────────────────────────────────────┐
│                      1 Worker Process                     │
│  ┌─────────────────────────────────────────────────────┐  │
│  │                     Shared Memory                   │  │
│  └─────────────────────────────────────────────────────┘  │
│         ▲                                         ▲       │
│  ┌──────────────┐                          ┌──────────────┐ │
│  │ Main Thread  │ ◄─── SharedArrayBuffer ─►│ Worker Thread│ │
│  └──────────────┘                          └──────────────┘ │
└───────────────────────────────────────────────────────────┘
```

--- 

&nbsp;

Imagine you have a route that calculates a massive Prime Number. Without a Worker Thread, while Node.js is doing the math, every other user trying to hit your API will be stuck waiting because the "Event Loop" is blocked.

> _The Problem: A Blocking Route_
>
> _This would freeze your whole server for 5 seconds_
> 
> ```javascript
> app.get('/heavy-task', (req, res) => {
>   let result = 0;
>   for (let i = 0; i < 1_000_000_000; i++) {
>     // Complex Math
>     result += i;
>   }
>   res.send(`Result is ${result}`);
> });
> ```
> 
> The Solution: `worker_threads`
>
> We split this into two files: your main server and the "worker" script.
>
> File 1. The Worker Script (worker.js)
>
> _This script stays idle until the main thread sends it a message to start._
>
> ```javascript
> const { parentPort } = require("worker_threads");
> // Listen for the start command
>
> parentPort.on('message', () => {
>   let result = 0;
>   for (let i = 0; i < 1_000_000_000; i++) {
>     result += i;
>   }
>   // Send the result back to the main thread
>   parentPort.postMessage(result);
> });
>```
>
> File 2. The Main Server (server.js)
>
> _The main thread creates the worker, hands off the job, and continues listening for other API requests._
>
> ```javascript
> const express = require("express");
> const { Worker } = require("worker_threads");
> const app = express();
>
> app.get('/heavy-task', (req, res) => {
>
>   // Create a new worker
>   const worker = new Worker("./worker.js");
>
>   // Send data to the worker to start the job
>   worker.postMessage("start");
> 
>   // When the worker finishes 
>   // it sends the response.
>   worker.on("message", (result) => {
>     res.send(`Calculation finished: ${result}`);
>   });
>
>   worker.on('error', 
>     (err) => res.status(500).send(err)
>   );
> });
>
> app.get("/fast-route", (req, res) => {
>   res.send(`I am still fast because the worker is doing the heavy lifting!`);
> });
>
> app.listen(3000, () => console.log("Server running on port: 3000"));
> ```

***Why this is a game-changer?***

- Responsiveness: 
  
  _If 10 people hit /heavy-task and 1 person hits /fast-route, the 11th person gets an instant response. Without workers, they'd wait 50 seconds!_

- Multi-core usage: 

  _Node.js is famous for being "single-threaded," but Worker Threads allow you to actually use the other CPU cores on your laptop or server._

&nbsp;

***One small "Watch Out"***

- Creating a worker thread has a small "overhead" cost (it takes a bit of memory and time to start).

- Don't use workers for simple things like database queries or small string manipulations.

- Do use workers for encryption, image processing, or heavy data crunching.

&nbsp;
---
---

<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > PM2](06-pm2.md)  

**Next:** → [Node.js > Child Process](./08-child-process.md)

<!-- PAGINATION_END -->
