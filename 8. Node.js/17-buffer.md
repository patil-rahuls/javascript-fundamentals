## Buffer

***Buffers*** are temporary storage area in memory used to hold data while it's being transferred from one place to another.

_When a user uploads a 5GB video to your Node.js server, the server doesn't wait for the whole 5GB to arrive in "one piece."_

_Instead:_

_The data arrives in chunks (small pieces of binary data). Each chunk is placed into a Buffer. Node.js processes that Buffer (writes it to disk) and then clears it for the next chunk._

In Node.js Buffer is an abstraction over RAM.

---

### Real-World Backend Case: Reading a Stream

This is exactly how Node.js handles an incoming POST request with a large body (like a JSON object or a file).

_You listen for the data events, collect the buffers, and then concat them at the end._

```javascript
const http = require("http");

http.createServer((req, res) => {
  // Array to hold the file chunks._
  let bodyChunks = [];


  // Every time a piece of data arrives,
  // push it to our array 'bodyChunks'.
  // The array becomes an array 
  // of Buffer objects.

  req.on("data", (chunk) => {
    bodyChunks.push(chunk);
  });

  // When the upload is finished_
  req.on('end', () => {

  // Stitch all the binary chunks 
  // together use "Buffer.concat()"

  const fullBody = Buffer.concat(bodyChunks);

  console.log("Full data rcvd:", fullBody.toString());
    res.end("Data processed!");
  });
}).listen(3000);
```
---
---
<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Express](16-express.md)  

**Next:** → [Node.js > Buffer Methods](18-buffer-methods.md)

<!-- PAGINATION_END -->
