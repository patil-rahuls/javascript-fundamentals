//////////////////////////////////////////////////////////////
// Side Note - Compilation, Interpretation and JIT
//////////////////////////////////////////////////////////////

// *Compilation*
// Entire source code is compiled into Machine Code (Assembly Code) at once and
// written to a binary file that can be executed by a computer.
// This binary file (Machine Code) is portable and can be executed way after compilation.
// Much faster.


// *Interpretation*
// Interpreter runs line by line through the source code and compiles into Machine Code and executes.
// During execution it still needs to convert the source code to Machine Code (line by line),
// However it happens RIGHT BEFORE its executed, and not AHEAD OF TIME.
// So, no portable file exists to be executed way after compilation unlike in compiled languages.
// Slower than Compiled Languages.


// *Just-In-Time (JIT) Compilation*
// Entire code is converted into machine code ALL AT ONCE and then executed immediately.
// There is no portable file for execution, and the execution happens immediately after compilation.
// This is lot faster than compiling and executing line by line.
// And Javascript is a Just-In-Time (JIT) Compiled language.

// How Javascript's JIT-Compilation process looks like.
// 1. Parsing - Code is Parsed into AST (Read by Javascript Engine)
//      AST - Abstract Syntax Tree - Splits each line of code and saves all the peices in a tree like structure.
//      This step also checks for any syntax errors.
// 2. Compilation - Takes the generated AST and compile it into Machine Code all at once.
// 3. Execution - This Machine code gets executed immediately. The execution happens in Javascript Engine's Call Stack.
// 4. Optimisation - During execution, the machine code is optimized and re-compiled during already running program execution multiple times.
//      After each optimization, the unoptimized code is replaced with the more optimised code, without ever stopping the execution.
//      This makes modern JS engine like V8 so powerful and fast.

// All these JIT processes happen in special threads that we can't access.
// which are completely separated from the main thread which executes code in the Call Stack.

// More about javascript JIT here - 
// https://medium.com/@aamchora/what-exactly-just-in-time-jit-compilation-is-in-javascript-f7aea482843f