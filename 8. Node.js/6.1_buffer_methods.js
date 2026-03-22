//////////////////////////////////////////////////////////////
// BUFFER METHODS ////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// 1. Buffer.alloc(size, fill, encoding)
// It creates a new buffer with given size.
//////////////////////////////////////////////////////////////
// size : The desired length of the new Buffer.
// fill : A value to pre-fill the new Buffer with. Default: 0.
// encoding : Encoding to be used. Default 'UTF-8'.

const { Buffer } = require('node:buffer');
// Buffer is available globally but it is
// recommended to import explicitly

const buff1 = Buffer.alloc(5);
console.log(buff1);
// Buffer allocated 5 bytes filled with zero
// output is represented as hexadecimal number
// OUTPUT : <Buffer 00 00 00 00 00>

const buff2 = Buffer.alloc(5,1);
console.log(buff2);
// buffer allocated 5 bytes filled with 1
// OUTPUT : <Buffer 01 01 01 01 01>


//////////////////////////////////////////////////////////////
// 2. Buffer.from(array or string)
// It takes array or string as an argument and creates the
// buffer size and value accordingly.
//////////////////////////////////////////////////////////////

const { Buffer } = require("node:buffer");
const buff3 = Buffer.from("Rahul", "utf-8");
console.log(buff3);
// buffer size allocated for string 'hello'
// with character encoding 'utf-8'(default)
// OUTPUT : <Buffer 68 65 6c 6c 6f>

const buff4 = Buffer.from([0x7f,17,0]);
console.log(buff4);
// buffer size and value according to array
// array elements can be number(integer OR hexadecimal)
// OUTPUT : <Buffer 7f 11 00>


//////////////////////////////////////////////////////////////
// 3. Buffer.allocUnsafe(size)
// It creates a buffer of given size but with random values.
// (NOT RECOMMENDED).
// It is little faster than "Buffer.alloc()" method
const { Buffer } = require('node:buffer');

const buff5 = Buffer.allocUnsafe(5);
console.log(buff5);
// faster than '.alloc()' method
// OUTPUT : <Buffer 60 67 6c 6d 6e>
// It is unsafe from security pov, because it can show up any
// sensitive data/code from the previous buffers.


//////////////////////////////////////////////////////////////
// 4. Buffer.compare(buff1,buff2)
// Mainly used when we want to sort array of Buffers.
// It's output could vary :-
// 0 is returned if buff2 is the same as buff1
// 1 is returned if buff2 should come before buff1 when sorted.
// -1 is returned if buff2 should come after buff1 when sorted.
const { Buffer } = require('buffer');

const buff6 = Buffer.from('0123');
const buff7 = Buffer.from('1234');

console.log(Buffer.compare(buff6,buff7));
// OUTPUT : -1


//////////////////////////////////////////////////////////////
// 5. Buffer.toString(encoding)
// This method converts a given buffer to string with given
// encoding. DEFAULT ENCODING : UTF-8

const { Buffer } = require('buffer');

const buff8 = Buffer.from('hello');
console.log(buff8.toString());
// OUTPUT : hello


//////////////////////////////////////////////////////////////
// Real-World Backend Case: Reading a Stream /////////////////
//////////////////////////////////////////////////////////////

// This is exactly how Node.js handles an incoming POST request
// with a large body (like a JSON object or a file).

// You listen for the data events, collect the buffers, and
// then concat them at the end.
const http = require('http');

http.createServer((req, res) => {
  let bodyChunks = [];
  // Array to hold the file chunks.

  // Every time a piece of data arrives,
  // push it to our array 'bodyChunks'.
  // The array becomes an array of Buffer objects.
  req.on('data', (chunk) => {
    bodyChunks.push(chunk);
  });

  // When the upload is finished
  req.on('end', () => {
    // Stitch all the binary chunks together
    // use "Buffer.concat()"
    const fullBody = Buffer.concat(bodyChunks);

    console.log("Full data rcvd:", fullBody.toString());
    res.end("Data processed!");
  });
}).listen(3000);
