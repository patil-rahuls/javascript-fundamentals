//////////////////////////////////////////////////////////////
// Node.js Internals /////////////////////////////////////////
//////////////////////////////////////////////////////////////

// JS Code we Write
//        |
//     Node.js
// ------------------
// -  http     fs   -
// -  crypto  path  -
// ------------------
//     |         |
//    V8       Libuv

// V8 & Libuv are the dependencies of the Node.js environment.
// We write code in javascript, use the Node.js standard library
// functionalities like http, fs and such functionalities
// (not all) are dependent/written in V8 and Libuv (in C++).

// V8 Engine (70% C++ 30% JS) -
// Interprets and Executes the JS code.
// Libuv library is 100% C++ code that gives Node.js access to
// the Operating System's underlying file system, networking
// and also handles non blocking concurrency as well.

// Node.js (50% JS, 50% C++) -
// Its an interface/wrapper to let the javascript code written
// by user to make the most out of the V8 & Libuv together,
// so we dont have to write the C++ language.

// Node.js environment has standard library modules like path,
// http, fs, etc... These modules have APIs, that refer to
// the functionalities implemented in the V8 and Libuv lib
// in C++, so that we dont have to write the C++ code.

// How Node.js source code is structured-
//   In the Node repo all code is written in the '/lib'
//   folder, and the underlying C++ functionalities are
//   written in the '/src' folder.

// Process, Threads & CPU Core?
// CPU executes the instructions one by one inside each thread.

// For any program(not just Node.js), a 'Process' is created.
// Inside a process there can be multiple threads each
// containing some instructions.
// Threads can be seen like a to-do list to perform those
// tasks. OS scheduler picks which threads to execute
// first utilizing different cores available in the CPU.

// A Core in a CPU can execute multiple threads at a time.

// Physical CPU cores and Logical CPU cores.
// e.g. Dual core CPU means, there are 2 Cores of same CPU.
// These 2 Cores are called 'Physical Cores'.
// Each physical core can process 2 threads at a time
// (Please correct me if I am wrong).

// Logical core (its just a calculation) -
//     'Physical Cores' x 'Threads'
//      So, for a Dual core CPU with 2 Cores,
//      each capable of handling 2 threads.
// Logical cores would be 2 x 2 = 4.

//////////////////////////////////////////////////////////////
// Is Node.js Single Threaded?
//////////////////////////////////////////////////////////////
//   In Node, we have one main thread where our program
//   executes using Event Loop, and a Thread Pool where
//   some CPU intensive tasks can be offloaded to run in
//   multithreaded fashion.
//   e.g. crypto.pbkdf2(), file-system reads and writes,
//   etc which uses multi-threading.

//   A single Node instance is single threaded.
//   (Event loop runs on a single thread).
//   But some of the functionalities included in the standard
//   Node.js libraries are not single threaded.
//   They run outside of the event loop, in separate threads.
//   There are 2 ways in which these 'other' functionalities
//   are offloaded from the main thread.

//   - 1. Thread Pool(Libuv library) - is a series of 4 threads
//   (by default) that is utilized by some functionalities
//   (like pbdfk2 in crypto, fs functionalities, etc) to run in
//   more than one thread.

//   - 2. OS Async Helpers - Some functionalities run outside of
//   the thread pool and event loop. For example, all the
//   networking level functionalities like http requests, is
//   handled by the Operating System's special helpers running
//   completely independent of the Main thread, Event Loop
//   and the Thread Pool.


//////////////////////////////////////////////////////////////
// Example 1:
// ThreadPool
process.env.UV_THREADPOOL_SIZE = 2;
// set number of threads in the thread pool.
// process.env.UV_THREADPOOL_SIZE = 5;
import crypto from 'crypto';

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('1:', Date.now()-start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('2:', Date.now()-start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('3:', Date.now()-start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('4:', Date.now()-start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log('5:', Date.now()-start);
});

// Can we use the threadpool for javascript code or can
// only Node.js functions use it?
// Ans- We can write custom JS that uses the threadpool.

// What functions in the node std library use the threadpool?
// Ans- I can't give a distinct answer to this.
// Because it all depends on the OS you are running.
// All the fs module functions, some of the crypto module
// functions (depending on the OS) use Libuv's ThreadPool.

// How does this threadpool functionality fit into the
// event loop?
// Ans- Tasks running in the threadpool are the 'pending-
// Operations' in our code like the fs calls, promises,
// timers etc. They all execute in the threadpool.


//////////////////////////////////////////////////////////////
// Example 2:
// OS Tasks:
import http from 'http';
const start = Date.now();
const doRequest = () => {
    http.request('https://google.com', res=>{
        res.on('data', {});
        res.on('end', console.log(Date.now() - start));
    });
};
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

// This behaves differently than the previous example,
// which uses Threadpool. Some modules like 'http' dont use
// Libuv's Threadpool to execute tasks. Instead the Libuv
// delegates the tasks to the OS Async helpers. So here, the
// http calls made, are actually handled by the underlying OS
// completely independent of the thread pool and the main
// thread(Event Loop).

// What functions in node std lib use the OS's async features?
// Ans- Almost everything around the networking for all OS.
// Some other stuff is OS specific.

// How do we relate these OS tasks wrt event loop?
// All the active requests(http/networking) that are being
// executed in the background.
// app.listen(PORT) -> keeps running in the backgroud and
// the application does not exits the terminal.
// Its the OS functionalities taking care of the networking
// behind the scenes in a completely separate thread.
