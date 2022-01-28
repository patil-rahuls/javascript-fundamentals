//////////////////////////////////////////////////////////////
// JAVASCRIPT ENGINE /////////////////////////////////////////
//////////////////////////////////////////////////////////////

// An engine executes JS code.
// All browsers have their own Javascript Engines that execute Javascript.
// Well known is v8 used in Google Chrome and Node.js(Javascript Runtime)

//////////////////////////////////////////////////////////////
// A JS Engine comprises of :
// 1. A Call Stack
// 2. Heap
//////////////////////////////////////////////////////////////

// Call Stack -  is where our code is executed using execution contexts.
// Heap - is an unstructured memory pool which stores all the objects that our application uses.



//////////////////////////////////////////////////////////////
// Compilation and Interpretation
//////////////////////////////////////////////////////////////

// Compilation - Code convertion to Machine Code.(Assembly Code)
// Source Code -> Compiled -> portable file(Machine Code) -> Execution -> Program Runs
// The portable file(Machine Code) can be executed way after compilation.
// Much faster.

// Interpretation - Interpreter runs through the source code and executes it directly line by line.
// During execution it still needs to convert to Machine Code, 
// however it happens RIGHT BEFORE its executed, and not AHEAD OF TIME.
// Much Much Slower than Compiled Language.

// But Javascript is Just-In-Time(JIT) Compilation.
// Entire code is converted to machine code and executed immediately.
// There is no portable file for execution, and the execution happens immediately.

//////////////////////////////////////////////////////////////
// Javascript - Just-In-Time(JIT) Compilation
//////////////////////////////////////////////////////////////

// 1. Code is Parsed into AST (Read by Javascript Engine)
//      AST - Abstract Syntax Tree - Splits each line of code and saves all the peices in a tree like structure.
// 2. Compilation - Takes the generated AST and compile it into Machine Code.
// 3. That Machine code gets executed immediately. The execution happens in Javascript Engine's Call Stack.
// 4. Optimisation of code also happens during execution.

// All these processes happen in special threads that we can't access. 
// Completely separated from the main thread which executes code in the Call Stack.


