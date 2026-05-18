//////////////////////////////////////////////////////////////
// STREAMS ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Streams are instances of EventEmitters.

// Stream is an interface for handling data—reading from a
// source or writing to a destination — in chunks,
// without ever loading the whole thing into memory.



// 1. The Four Types of Streams

// Type         Analogy      Real-world Example
// Readable     Faucet       Reading a file, an HTTP request (incoming data).
// Writable     Drain        Writing to a file, an HTTP response (sending data).
// Duplex       Telephone    A Web Socket (you can talk and listen at the same time).
// Transform    Water Filter Zlib compression (data goes in raw, comes out zipped).



// 2. Why use Streams? (The "Memory" Win)

// Imagine you have a 1GB file.
// Without Streams (fs.readFile):
//      Node tries to grab all 1GB and cram it into a variable.
//      If your server only has 512MB of free RAM, the app crashes.

// With Streams (fs.createReadStream):
//      Node grabs 64KB, sends it, grabs the next 64KB, sends it.
//      It only ever uses 64KB of RAM, no matter if the file size
//      is 1MB or 1TB.
