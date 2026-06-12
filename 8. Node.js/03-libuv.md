## libuv

```
// JS Code we Write
//        |
//     Node.js
// ------------------
// -  http     fs   -
// -  crypto  path  -
// ------------------
//     |         |
//    V8       libuv
```

`V8` & `libuv` are the dependencies of the `Node.js environment`.

The code that we write in javascript, use the Node.js standard library functionalities like `http`, `fs` and such functionalities _(not all)_ are dependent/written in `V8` _(C++)_ and `libuv` _(C)_.

## `V8 Engine (~70% C++, ~30% JS)`

Interprets and Executes the JS code.

libuv library is 100% C code that gives Node.js access to the Operating System's underlying `file system`, `networking` and also handles `non-blocking concurrency`.

## `Node.js (~50% JS, ~50% C++)`

Its an interface/wrapper to let the javascript code written by the user to make the most out of the `V8` & `libuv` together, so we dont have to write the C++ language code. 

Node.js environment has standard library modules like `path`, `http`, `fs`, etc...

These modules have APIs, that refer to the functionalities implemented in the `V8` and `libuv lib` in C, so that we dont have to write the C code to utilize those functionalities.

_In the Node repo all code is written in the `/lib` folder, and the underlying `C++` functionalities are written in the `/src` folder._

## Process, Threads & CPU Core

CPU executes the instructions one by one inside each thread.

For any program _(not just Node.js)_, a `process` is created.

Inside a `process` there can be `multiple threads` each containing some instructions.

_Threads can be seen like a to-do list to perform those tasks. `OS scheduler` picks which threads to execute first utilizing different cores available in the CPU._

_A Core in a CPU can execute multiple threads at a time._

- Physical CPU cores and Logical CPU cores.

  _For example, Dual core CPU means, there are 2 cores of the same CPU._

  _These 2 cores are called `Physical Cores`. Each physical core can process 1 thread at a time at the hardware level._

  **_However, because computers switch between tasks incredibly fast, and because of modern hardware tricks, it appears as if a single core is executing many threads simultaneously._**

## Is Node.js Single Threaded?

In Node, we have one main thread where our program executes using `Event Loop`, and a `Thread Pool` where some CPU intensive tasks can be offloaded to run in a multithreaded fashion.

A single Node instance is single threaded. _(Event loop runs on a single thread)_.

But some of the functionalities included in the standard Node.js libraries are not single threaded. **They run outside of the event loop, in separate threads. _e.g. `crypto.pbkdf2()`, file-system reads/writes, network calls, etc._**

There are 2 ways in which these 'other' functionalities are offloaded from the main thread.

> ### 1. Thread Pool(libuv library) -
>
> It is a series of `4 threads (by default)` that is utilized by some functionalities (like `pbdfk2` in crypto, `fs` functionalities, etc) to run in more than one thread.

> ### 2. OS Async Helpers -
>
> Some functionalities run `outside of the Thread Pool and the main (i.e. event loop) thread`.
>
> _For example, all the networking level functionalities like http requests, is handled by the Operating System's special helpers running completely independent of the Main thread, Event Loop and the Thread Pool_.

&nbsp;

> Example 1: ThreadPool

```javascript
// set number of threads in the thread pool.
process.env.UV_THREADPOOL_SIZE = 2;

import crypto from "crypto";

const start = Date.now();
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3:", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("4:", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5:", Date.now() - start);
});
```

> ***Can we use the threadpool for javascript code or can only Node.js functions use it?***
>
> Ans: _Yes, we can write code that uses the threadpool._

> ***What functions in the node std library use the threadpool?***
>
> Ans: _I can't give a distinct answer to this. Because it all depends on the OS you are running. All the `fs` module functions, some of the crypto module functions (depending on the OS) use `libuv's ThreadPool`._

> ***How does this threadpool functionality fit into the event loop?***
>
> Ans: _Tasks running in the threadpool are the 'pending operations' in our code like the fs calls, promises, timers etc. They all execute in the threadpool._

&nbsp;

> Example 2: OS Tasks:
> 
> ```javascript
> import http from "http";
> 
> const start2 = Date.now();
> 
> const doRequest = () => {
>   http.request("https://google.com", (res) => {
>     res.on("data", {});
>     res.on("end", console.log(Date.now() - start2));
>   });
> };
> doRequest();
> doRequest();
> doRequest();
> doRequest();
> doRequest();
> doRequest();
> ```
> 
> _This behaves differently than the previous example, which uses Threadpool. Some modules like `http` dont use libuv's Threadpool to execute tasks._
>
> ***Instead the libuv delegates the tasks to the OS Async helpers.***
>
> _So here, the http calls made, are actually handled by the underlying OS completely independent of the thread pool and the main thread(Event Loop)._

> ***What functions in node std lib use the OS's async features?***
>
> Ans: _Almost everything around the networking for all OS. Some other stuff is OS specific._

> ***How do we relate these OS tasks w.r.t. event loop?***
>
> Ans: _All the active requests(http/networking) that are being executed in the background._
>
> _For example `app.listen(PORT)` keeps running in the backgroud and the application does not exits the terminal. Its the OS functionality taking care of the networking(i.e. `listening on the PORT`) behind the scenes in a completely separate thread._

---
---

<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > npm](02-npm.md)  

**Next:** → [Node.js > Improve Performance](./04-improve-performance.md)

<!-- PAGINATION_END -->
