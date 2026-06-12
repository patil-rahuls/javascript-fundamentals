## **`child_process`**

The `child_process` module is a low-level tool designed for general-purpose multitasking and running external systems tasks.

_They create the same processes that are created by cluster, the only distinction is that the child processes do not share the same network port._

_We can use child processes to run any scripts and not just node applications. For example, I can use a child process to execute some python command, run some bash command._

> ***The Node.js `child_process` module has four methods to create child processes:***
>
> - ***`exec`***
>
>   Runs a command in a system shell and buffers the entire output in memory before returning it to a callback function.
>
>   _Best for Simple, Quick Commands. Output should be less than 1 MB._
>   ```javascript
>   import { exec } from 'child_process';
>
>   // List files in the directory (Use 'dir' on Windows)
>   exec('ls -la', (error, stdout, stderr) => {
>     if (error) {
>       return console.error(`Error: ${error.message}`);
>   }
>  
>   console.log(`Directory files:\n${stdout}`);
>   });
> 
>   ```
>
> - ***`execFile`***
>
>   It runs an executable file directly (like an `.exe`, `.sh`, or any _executable binary_).
>
>   Like `exec` it also buffers the whole output in memory.
>
>   _Prevents shell injection attacks, because it does not invoke a system shell._
>
>   _Best for Executing Applications directly._
>
>   ```javascript
>   import { execFile } from 'child_process';
>
>   // Run a local shell script or 
>   // binary directly with arguments.
>   execFile('./my-script.sh', 
>     ['--version'], 
>     (error, stdout, stderr) => {
>       if (error) {
>         return console.error(`Error: ${error.message}`);
>       }
>   
>       console.log(`Script output: ${stdout}`);
>     }
>   );
> 
>   ```
>
> - ***`spawn`***
>
>   Launches a process and streams the output via standard I/O streams (stdout and stderr).
>
>   High performance. It processes data chunk-by-chunk in real-time, making it perfect for long-running tasks or huge file streams.
>
>   _Best for Heavy Data & Long Tasks._
>
>   ```javascript
>   import { spawn } from 'child_process';
>   
>   // Find files containing the 
>   // word "rahul" in real-time.
>   const findProcess = spawn('grep', ['rahul', 'system.log']);
>   
>   // Listen to data as it arrives chunk-by-chunk
>   findProcess.stdout.on('data', (data) => {
>     console.log(`Found a match: ${data}`);
>   });
>   
>   findProcess.on('close', (code) => {
>     console.log(`Process finished with exit code ${code}`);
>   });
>   
>   ```
>   
> - ***`fork`***
>
>   A special version of `spawn` designed specifically to run separate Node.js script files.
>
>   **Inter-Process Communication (IPC)**: _It allows you to manually pass strings or JSON objects back and forth between the parent and child using process.send('item') and process.on('item')._
>
>   It consumes a lot of memory because it spins up an entire new V8 engine instance for the child script.
>
>   _Best for Running Node.js Scripts._
>
>   > _The Parent File (parent.js)_
>   ```javascript
>   import { fork } from 'child_process';
>   
>   const child = fork('./child.js');
>   
>   // 1. Send a message to the 
>   // child script
>   child.send({ task: 'calculate_total', price: 100, tax: 0.15 });
>   
>   // 2. Listen for the answer 
>   // back from the child script.
>   child.on('message', (response) => {
>     console.log(`Result from child: $${response.total}`);
>     child.kill(); // Stop the child process when done
>   });
>   
>   ```
>   > _The Child File (child.js)_
>   ```javascript
>   // Listen for messages from 
>   // the parent script
>   process.on('message', (message) => {
>     if (message.task === 'calculate_total') {
>       const total = message.price + (message.price * message.tax);
>       
>       // Send the calculated result 
>       // back to parent
>       process.send({ total: total });
>     }
>   });
>   ```

---

### Use Cases:

***Document & Report Generation (PDFs / Office Docs)***

_A user clicks `"Export PDF"` on your website. To generate the PDF, you need to execute a command-line tool installed on your server (like wkhtmltopdf). You use child_process.spawn() to run that system command, catch the generated file, and send it back to the user._


---
---

<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Worker Threads](./07-worker-threads.md)

**Next:** → [Node.js > File System](./09-file-system.md)

<!-- PAGINATION_END -->
