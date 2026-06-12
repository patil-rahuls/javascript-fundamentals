## Streams Pipeline

`pipe() (legacy function)` 

> ***The `pipe()` method is used to connect a readable stream to a writable stream.*** It is deprecated.

> ***`pipeline()` is the improved version to achieve the same functionality***

Features:

1. Automatic Data Flow:
   pipe() reads data in chunks from the source (readable
   stream) and writes it to the destination (writable
   stream) as it becomes available, without loading the
   entire data into memory.

2. Backpressure Handling:
   It automatically manages "backpressure," a mechanism
   that ensures a faster readable stream doesn't overwhelm
   a slower writable stream by pausing and resuming the
   data flow as needed, preventing data loss and memory
   issues.

3. Chaining:
   The method returns the destination stream, which allows
   multiple pipe() calls to be chained together to create
   complex data processing pipelines with transform streams
   (e.g., reading a file -> compressing it -> writing the
   compressed data to another file).

4. Simplifies Code:
   pipe() abstracts away manual event handling (like
   'data', 'end', and 'error' events), resulting in cleaner
   and more concise code.
   
&nbsp;

> Example 1: _Copying a file programatically._
>
> _Incorrect way (NOT RECOMMENDED)_
>
> ```javascript
> const fs = require("fs");
> 
> // DO NOT DO THIS FOR LARGE FILES_
> 
> fs.readFile("large_video.mp4", (err, data) => {
>   fs.writeFile("large_video_copy.mp4", data, () => {
>     console.log("Copy done!");
>   });
> });
> ```
>
> _Correct way - using streams & pipe()_
> 
> ```javascript
> const fs = require("fs");
>
> const readStream = fs.createReadStream("movie.mp4");
>
> const writeStream = fs.createWriteStream("movie_copy.mp4");
>
> readStream.pipe(writeStream); // That's it !
>
> writeStream.on("finish", () => {
>   console.log("Finished copying 10GB using almost zero RAM!");
> });
> ```

### Limitations:

***Error Handling:***

_A major limitation of `.pipe()` is that it does not automatically propagate errors through the chain. If an error occurs in the middle of a pipe chain, the other streams may not close properly, potentially causing memory leaks._

***`Solution: "pipeline()"`***

_For production-ready code, it is widely recommended to use the `stream.pipeline()` function instead of .pipe(). The Node.js documentation explains that pipeline() handles error propagation and automatic cleanup of all streams in the chain if any of them fail._

> Example 1: (synchronous)
> 
> ```javascript
> const { pipeline } = require("stream");
> const fs = require("fs");
> const zlib = require("zlib");
> 
> pipeline(
>   // Source file
>   fs.createReadStream('input.txt'),
> 
>   // Optional Transform
>   zlib.createGzip(),
> 
>   // Destination file 
>   fs.createWriteStream('input.txt.gz'),
> 
>   // Error handling at a single place.
>   (err) => { 
>     if (err) {
>       console.error('Pipeline failed:', err);
>       // Handles errors from ANY of 
>       // the above streams
>     } else {
>       console.log('Pipeline succeeded');
>     }
>   }
> );
> ```

> Example 2: (Promise Version (Modern Async/Await))
> 
> ```javascript
> const { pipeline } = require("stream/promises");
> const fs = require("fs");
> const zlib = require("zlib");
> 
> async function run() {
>   try {
>     await pipeline(
>       fs.createReadStream('input.txt'),
>       zlib.createGzip(),
>       fs.createWriteStream('input.txt.gz')
>       // No need for the error 
>       // handler callback here.
>     );
>     console.log('Pipeline succeeded');
>   } catch (err) {
>     console.error('Pipeline failed:', err);
>   }
> }
> 
> run();
> ```

&nbsp;

### Key Differences between pipe() and pipeline()

1. Error Propogation:
    
    pipe() does not propogate errors if anything fails in between a pipeline. 
    
    Whereas, pipeline() forwards the error to the callback function.

2. Automatic Cleanup:

    pipe() requires manual cleanup if anything goes wrong.
   It is Prone to leaks if streams aren't closed.
   
   pipeline() does the automatic cleaning of all streams.
   It is safe from memory leak.

3. Better Recommendation by community:

    pipe() is legacy code. Can be used for a quick code.
   
   pipeline() is recommended for production.

&nbsp;
---
---
<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Streams](19-streams.md)  

**Next:** → [Node.js > Streams Events](21-streams-events.md)

<!-- PAGINATION_END -->
