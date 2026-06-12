## Streams

***Streams are instances of EventEmitters.***

_Stream is an interface for handling data—reading from a source or writing to a destination in chunks, without ever loading the whole thing into memory._

### Types of Streams

_Type analogy real-world example:_

***`Readable Streams`***: Reading a file, an incoming HTTP request.

***`Writable Streams`*** Writing to a file, an outgoing HTTP response.

***`Duplex Streams`*** A Web Socket (you can emit event and listen at the same time).

***`Transform Streams`*** Zlib compression (data goes in raw, comes out zipped).

---
&nbsp;

### 2. Why use Streams? (The "Memory" Win)

_Imagine you have a read a 1GB file._ 

- _`Without Streams (fs.readFile)`:_ 

  Node tries to grab all 1GB and tries to fit it into a variable(stored in RAM). If your server only has 512MB of free RAM, the app crashes.

- _`With Streams (fs.createReadStream)`:_

  Node grabs 64KB, sends it, grabs the next 64KB, sends it. It only ever uses 64KB of RAM, no matter if the file size is 1MB or 1TB.

---
---
<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Buffer Methods](18-buffer-methods.md)  

**Next:** → [Node.js > Streams Pipeline](20-streams-pipeline.md)

<!-- PAGINATION_END -->
