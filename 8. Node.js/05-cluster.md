## Cluster

> **The **_`cluster`_** module is just a specialized wrapper built on top of the **_`child_process`_** module.**

> ***It is specialized for Network Scaling. We can't manually run multiple processes(instances) on the same port(results in `EADDRINUSE`). Cluster allows us to do that.***

Clusters of Node.js processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads.

Cluster Manager:
_A program responsible for creating, starting, stopping,
restarting and monitoring intances._

**_A popular production ready solution is PM2._**

Cluster Mode includes a main process (identified by `cluster.isPrimary`). We use it to create other processes that each execute a separate instance of the app.

## Implementation:

`import cluster from cluster;` -> _present in the node standard library._

`cluster.fork()` -> _Starts a worker instance. Each instance created **shares same port** of the
main process._


> Example: **_Real-World Use Case: High-Traffic API with Failure Recovery_**

_Lets say we have lots of concurrent requests on our API, and we have a single endpoint which does some heavy time-consuming task. If any one instance dies, it can automatically start another instance._

> ```javascript
> import cluster from 'node:cluster';
> import express from 'express';
> import { availableParallelism } from 'node:os';
> import process from 'node:process';
> 
> // Get the total number of 
> // available physical/logical CPU cores
> const numCPUs = availableParallelism();
> 
> // Check if the file being executed 
> // is in master mode.
> if(cluster.isPrimary){
>   console.log(`
>     [Primary Process ${process.pid}]. 
>     System has ${numCPUs} cores. 
>     Forking workers...
>   `);
> 
>   // 1. Fork a worker process for each CPU core
>   for (let i = 0; i < numCPUs; i++) {
>     cluster.fork();
>   }
> 
>   // 2. Real-World Self-Healing: If a worker 
>   // dies, spin up a new one immediately.
>   cluster.on('exit', (worker, code, signal) => {
>     console.error(`
>       [Primary Process]: Worker ${worker.process.pid} died 
>       (Code: ${code}, 
>       Signal: ${signal}).
>     `);
>     
>     console.log('[Primary Process]: Spawning a replacement worker...');
>     
>     cluster.fork();
>   });
> 
> } else {
>   // 3. Worker Processes: 
>   // These run the actual application 
>   // instances independently.
>   console.log(`[Worker Process ${process.pid}]`);
> 
>   const app = express();
>   const doWork = (duration) => {
>     const start = Date.now();
>     while(Date.now() - start < duration){}
>   };
>     
>   // Heavy CPU-bound task simulated endpoint
>   app.get('/api/compute', (req, res) => {
>     // some heavy work
>     res.json(
>     { 
>         result: hashSimulation, 
>         worker: process.pid 
>     }
>     );
>   });
>   
>   // Fast, lightweight non-blocking endpoint
>   app.get('/api/health', (req, res)=>{
>     res.json(
>       { 
>         status: 'ok', 
>         worker: process.pid 
>       }
>     );
>   });
> 
> 
>   // Endpoint simulated to trigger 
>   // a random application crash.
>   app.get('/api/health', (req, res)=>{
>     res.send('Fatal worker exception triggered!\n');
>     process.exit(1); // Force process termination
>   });
> 
> 
>   app.listen(3000);
> }
> ```
> 
>_In the above example, the primary process does not do the actual work. It manages worker lifecycles and routes TCP connections to workers._
>
>_Each worker runs inside its own execution block with an **independent V8 engine instance, memory heap, and event loop**. They share the server port without encountering port conflicts because the primary process handles the initial binding._
>
>_To have a common store for data sharing across these worker, you must use a central external tool like Redis or a database for shared states._
>

### Downsides of Clustering -

_If we over allocate instances, the CPU will try to work upon all the threads, and bounce around and process the tasks(requests) at exactly the same time, which will consume time._

_This is because of the limited number of physical cores in the server CPU._

_In simpler terms, one physical CPU core has to process hundreds of processes at the same time. But at an instance, it can only execute one process. So, at an instance, it executes one process, then switches to the other process and executes it, and this chain continues. Also, the OS scheduler, keeps switching the cores as well, so a node process is partly executed on Core 0 and partly on Core 1 or 2 or 3 (just an example)_


### Solution:
Use fewer instances. Try to match no. of CPU Cores to No. of children. _(Just like we did in the example above)._

---
---

<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Improve Performance](./04-improve-performance.md)  

**Next:** → [Node.js > PM2](06-pm2.md)

<!-- PAGINATION_END -->
