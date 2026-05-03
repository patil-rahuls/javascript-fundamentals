//////////////////////////////////////////////////////////////
// Worker Threads ////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Here is a practical example. Imagine you have a route that
// calculates a massive Prime Number. Without a Worker Thread,
// while Node.js is doing the math, every other user trying to
// hit your API will be stuck waiting because the "Event Loop"
// is blocked.

// The Problem: A Blocking Route
// This would freeze your whole server for 5 seconds
app.get('/heavy-task', (req, res) => {
  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    // Complex Math
    result += i;
  }
  res.send(`Result is ${result}`);
});

// The Solution: Using worker_threads
// We split this into two files:
// your main server and the "worker" script.

// 1. The Worker Script (worker.js)
// This script stays idle until the main thread
// sends it a message.
const { parentPort } = require('worker_threads');

// Listen for the start command
parentPort.on('message', () => {
  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += i;
  }
  // Send the result back to the main thread
  parentPort.postMessage(result);
});

// 2. The Main Server (server.js)
// The main thread creates the worker, hands off the job,
// and continues listening for other API requests.
const express = require('express');
const { Worker } = require('worker_threads');
const app = express();

app.get('/heavy-task', (req, res) => {
  // Create a new worker
  const worker = new Worker('./worker.js');

  // Send data to the worker to start the job
  worker.postMessage('start');

  // When the worker finishes, send the response
  worker.on('message', (result) => {
    res.send(`Calculation finished: ${result}`);
  });

  worker.on('error', (err) => res.status(500).send(err));
});

app.get('/fast-route', (req, res) => {
  res.send(`I am still fast because the worker is doing
    the heavy lifting!`);
});

app.listen(3000, () =>
  console.log('Server running on port 3000')
);

// Why this is a game-changer
// Responsiveness: If 10 people hit /heavy-task and 1 person
// hits /fast-route, the 11th person gets an instant response.
// Without workers, they'd wait 50 seconds!

// Multi-core usage: Node.js is famous for being
// "single-threaded," but Worker Threads allow you to actually
// use the other CPU cores on your laptop or server.

// One small "Watch Out"
// Creating a worker thread has a small "overhead" cost
// (it takes a bit of memory and time to start).

// Don't use workers for simple things like database queries
// or small string manipulations.

// Do use workers for encryption, image processing, or
// heavy data crunching.
