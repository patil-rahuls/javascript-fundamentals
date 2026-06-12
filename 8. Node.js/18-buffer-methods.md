## Buffer Methods

- ***Buffer.alloc(size, fill, encoding)***

   _It creates a new buffer with given size._
   
   `size`: the desired length of the new Buffer.
   
   `fill` : a value to pre-fill the new Buffer with. _(Default: 0)_
   
   `encoding` : encoding to be used. _(Default 'UTF-8')_

   > Example 1:
   > ```javascript
   > const { Buffer } = require("node:buffer");
   > // Buffer is available globally but it is
   > // recommended to import explicitly.
   >
   > const buff1 = Buffer.alloc(5);
   > console.log(buff1);
   > ```
   >
   > _Buffer allocated 5 bytes filled with zero._
   > 
   > _Output is represented as hexadecimal number._
   > ```
   > <Buffer 00 00 00 00 00>
   > ```

   >
   > ```javascript
   > const buff2 = Buffer.alloc(5, 1);
   > console.log(buff2);
   > ```
   > 
   > _Buffer allocated 5 bytes filled with 1._
   >
   > Output : 
   > ```
   > <Buffer 01 01 01 01 01>
   > ```

- ***Buffer.from(array or string)***

   _It takes array or string as an argument and creates the buffer size and value accordingly._

   > ```javascript
   > const { Buffer } = require("node:buffer");
   > 
   > const buff3 = Buffer.from("Rahul", "utf-8");
   > 
   > console.log(buff3);
   > ```
   > 
   > _Buffer size allocated for string 'hello' with character encoding 'utf-8'(default)._
   >
   > Output : 
   > ```
   > <Buffer 68 65 6c 6c 6f>
   > ```


   > ```javascript
   > const buff4 = Buffer.from([0x7f, 17, 0]);
   > console.log(buff4);
   > ```
   > 
   > _Buffer size and value according to array._
   >
   > _Array elements can be number(integer OR   hexadecimal)_
   >
   > Output : 
   > ```
   > <Buffer 7f 11 00>
   > ```

- ***Buffer.allocUnsafe(size)***
   
   _(NOT RECOMMENDED)._
   _It creates a buffer of given size but with random values._
   
   _It is little faster than `"Buffer.alloc()"` method._

   > ```javascript
   > const { Buffer } = require("node:buffer");
   >
   > const buff5 = Buffer.allocUnsafe(5);
   > console.log(buff5);
   > ```
   > 
   > _Faster than '.alloc()' method._
   >
   > Output : 
   > ```
   > <Buffer 60 67 6c 6d 6e>
   > ```
   > _It is unsafe from security pov, because it can show up any sensitive data/code from the previous buffers._

- ***Buffer.compare(buff1,buff2)***

   _Mainly used when we want to sort array of Buffers._
   
   _It's output could vary :-_
   
   - _0 is returned if buff2 is the same as buff1_
   - _1 is returned if buff2 should come before buff1 when sorted._
   - _-1 is returned if buff2 should come after buff1 when sorted._

   > ```javascript
   > const { Buffer } = require("buffer");
   > 
   > const buff6 = Buffer.from("0123");
   > const buff7 = Buffer.from("1234");
   > 
   > console.log(Buffer.compare(buff6, buff7));
   > ```
   > 
   > Output : -1

- ***Buffer.toString(encoding)***
   
   _This method converts a given buffer to string with given encoding. (Default : UTF-8)_

   > ```javascript
   > const { Buffer } = require("buffer");
   > 
   > const buff8 = Buffer.from("hello");
   > console.log(buff8.toString());
   > ```
   > 
   > Output : "hello"

---
---

<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Buffer](17-buffer.md)  

**Next:** → [Node.js > Streams](19-streams.md)

<!-- PAGINATION_END -->
