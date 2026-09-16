## Compilation, Interpretation, and JIT

> 🎯 Understanding how code is executed—whether through ahead-of-time translation, line-by-line interpretation, or advanced Just-In-Time compilation—is fundamental to optimizing performance and understanding modern programming language engines.

---
&nbsp;

### 1. Compilation
*   Entire source code is translated into Machine Code (Assembly Code) all at once and written to a standalone binary file.
*   Results in a portable binary file that can be executed long after compilation. **_Compilation execution is much faster._**

### 2. Interpretation
*   Code is read and translated into Machine Code line by line during execution.
*   No portable file exists for later execution since translation happens right before execution rather than ahead of time. **_Slower than compiled languages._**

### 3. Just-In-Time (JIT) Compilation
*   Entire code is converted into machine code all at once and executed immediately without creating a portable file.
*   **_Much faster than compiling and executing line by line._** JavaScript is a **Just-In-Time (JIT) compiled** language.

---
&nbsp;

## How JavaScript's JIT-Compilation Process Works

> 🎯 Modern JavaScript engines rely on a multi-stage pipeline combining parsing, compilation, execution, optimization, and profiling to achieve near-native execution speeds.

---
&nbsp;

### 1. Parsing
*   Code is split and saved into a tree-like structure called an **Abstract Syntax Tree (AST)**.
*   Read by the JavaScript engine while simultaneously checking for any syntax errors.

### 2. Compilation
*   Takes the generated AST and compiles it directly into Machine Code all at once.
*   Prepares the raw machine instructions before handing them over to the execution phase.

### 3. Execution
*   The compiled machine code executes immediately.
*   The execution takes place inside the JavaScript engine's **_Call Stack_**.

### 4. Optimization
*   Frequently executed sections of machine code are identified, optimized, and re-compiled while the program is running.
*   Unoptimized code is seamlessly replaced with optimized code without stopping execution, making modern engines like V8 extremely fast.

### 5. Monitoring and Profiling
*   A built-in monitor (**_profiler_**) tracks how often different code sections run.
*   Code that runs a few times is **warm**, while code running repeatedly (e.g., in loops) is **hot**.

### 6. Compilation of **Hot** Code
*   The JIT compiler targets identified **hot** code and compiles it into a highly optimized machine-code version.
*   Avoids line-by-line translation overhead in subsequent runs, maximizing runtime performance.

> _Note: All JIT processes happen in separate background threads, completely isolated from the main thread executing code in the Call Stack._

More about JavaScript JIT compilation [here](https://medium.com/@aamchora/what-exactly-just-in-time-jit-compilation-is-in-javascript-f7aea482843f).

---
&nbsp;

<!-- PAGINATION_START -->

📁 [4. How Javascript Works](../4.%20How%20Javascript%20Works/)  

◀️ [Functions](../3.%20Functions/)

▶️ [Javascript Runtime](02-javascript-runtime.md)

<!-- PAGINATION_END -->
&nbsp;
