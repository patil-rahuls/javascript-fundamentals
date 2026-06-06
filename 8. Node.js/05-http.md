## HTTP Module

Creating a `web-server` with NodeJS from scratch.

There are many built-in utility modules in node js, one of them is `http`.

With `http` module, you can create an application that listens to `http requests` and returns `http messages`.

> Here is sample code that creates an instance of a `http server` using the `http` module.
>
> This code makes use of the `http.createServer()` method to create the `server instance`.

```javascript
import http from 'http';

const myServer = http.createServer (function (req, res) {
  // Write a response to the client
  res.write('hello from server');

  // End of response from server.
  res.end();
});

myServer.listen(6000);
```

&nbsp;

> Example 1: - Serving a static html page.
```javascript
import http from "http";
import fs from "fs";

http.createServer((req, res) => {
  fs.readFile('index.html',(err, data) => {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': data.length
    });
    res.write(data);
    res.end();
  });
}).listen(9969);
```

OR

```javascript
import http from "http";
import fs from "fs";

fs.readFile('index.html',(err, data) => {
  http.createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length':data.length
    });
    res.write(data);
    res.end();
  }).listen(9969);
});
```

---
