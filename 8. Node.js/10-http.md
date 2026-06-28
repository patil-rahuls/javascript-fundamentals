## HTTP

Creating a `web-server` with NodeJS from scratch.

There are many built-in utility modules in node js, one of them is `http`.

With `http` module, you can create an application that listens to `http requests` and returns `http messages`.
Here is sample code that creates an instance of a `http server` using the `http` module.
This code makes use of the `http.createServer()` method to create the `server instance`.

> Example: - A Simple HTTP server.
```javascript
import http from "http";

const myServer = http.createServer(function (req, res) {
  // Write a response to the client
  res.write("hello from server");

  // End of response from server.
  res.end();
});

myServer.listen(6000);
```

> Example 1: - Serving a static html page.

```javascript
import http from "http";
import fs from "fs";

http
  .createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, {
        "Content-Type": "text/html",
        "Content-Length": data.length,
      });
      res.write(data);
      res.end();
    });
  })
  .listen(9969);
```

OR

```javascript
import http from "http";
import fs from "fs";

fs.readFile("index.html", (err, data) => {
  http
    .createServer((req, res) => {
      res.writeHead(200, {
        "Content-Type": "text/html",
        "Content-Length": data.length,
      });
      res.write(data);
      res.end();
    })
    .listen(9969);
});
```
---

&nbsp;
## How does an HTTP request flow through a Node.js server?

1. The client sends the request. The Operating System receives the data(TCP) packets and hands them to Node's background I/O engine (libuv).

2. The Event Loop picks up the event. It reads the raw network data from the socket without blocking the rest of your application. _(It uses the IO queue)_

3. Node's native HTTP parser — _llhttp_ begins parsing the raw text stream and translates it into clean JavaScript objects: _req_ and _res_

4. The _http.Server_ instance _(which inherits from EventEmitter)_ fires the `'request'` event, pushing a task onto the Event Loop's callback queue.

5. When the V8 engine processes this task, your request handler function `function(req, res)` is pushed onto the execution Call Stack.

---
&nbsp;

## The HTTP request is actually a `Stream`

Yes, the incoming HTTP request _(req)_ is a stream - a **_Readable Stream_**.

We need to use streams to receive request data. Since `req` is a readable stream, we listen to its `'data'` and `'end'` events to collect the payloads in chunks.

```javascript
import http from 'http';

http.createServer((req, res) => {
  let body = '';

  // 1. Listen for chunks of data as
  // they arrive over the network
  req.on('data', (chunk) => {
    body += chunk;
  });

  // 2. Process the complete body
  // once the stream ends
  req.on('end', () => {
    console.log("Full data received:", body);
    res.end('Done');
  });
}).listen(3000);

```

This(above) is a vanilla code for an http server in Node.js.

Since we widely use frameworks like Express, this functionality is already handled using libraries like `express.json()` or `body-parser`.

**`express.json()`** is same as body-parser. Earlier body-parser was a separate library, but now, its been brought right into the Express framework and is now used as _express.json()_.

---


<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)

**Previous:** ← [Node.js > File System](09-file-system.md)

**Next:** → [Node.js > Event Emitters](11-event-emitters.md)

<!-- PAGINATION_END -->
