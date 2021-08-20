//////////////////////////////////////////////////////////////
// JAVASCRIPT ENGINE /////////////////////////////////////////
//////////////////////////////////////////////////////////////

// An engine executes js code.
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



//////////////////////////////////////////////////////////////
// Javascript Runtime 
//////////////////////////////////////////////////////////////

// JS Runtime - browsers, Node.js

// Inside JS Runtime in the browsers we have 
// 1. JS Engine
//      - Heap
//      - Call Stack
// 2. Web APIs to Interact with DOM
// 3. Callback Queue. (click(), timer(), data())
//      Event Loop - Takes a callback function from Callback Queue and puts in Call Stack for execution.
//      A non blocking concurrency model is achieved using this.


// Inside Node.js Runtime, we have 
// 1. JS Engine
//      - Heap
//      - Call Stack    
// 2. C++ bindings & Thread Pool
// 3. Callback Queue. (click(), timer(), data())
//      Event Loop - Takes a callback function from Callback Queue and puts in Call Stack for execution.
//      A non blocking concurrency model is achieved using this.



//////////////////////////////////////////////////////////////
// Execution Context 
//////////////////////////////////////////////////////////////

// An Execution Context is a peice of environment where the code executes. 
// That environment contains information about the code necessary to execute the code.

// A function gets its own Execution Context as soon as it is called.

// After compilation, when the code is ready to be executed(Machine Code)
// 1. ONE Global Execution Context is created. (For top level code - everything(declarations/definitions) except function calls.)
// 2. That top-level-code is executed.
// 3. Execution of Functions and waiting for callbacks
//    For each function call, a new execution context is created. All function context together form a call stack.
//    Now the functions are waiting to be executed. e.g. a click evet callback is waiting for its execution.
//    
//    Inside an Execution Context, we have,
//          1. Variable Environment
//                 -let, const, and var declarations
//                 -Functions
//                 -'arguments' object - all arguments passed into the function to which current execution context belongs to. 
//          2. Scope Chain - reference to variables located outside of this function.
//          3. 'this' keyword
//    An Execution Context is created right before the function execution.
//    Also, The 'this' keyword and 'arguments' object are not created for arrow functions.

//////////////////////////////////////////////////////////////
// The CALL STACK 
//////////////////////////////////////////////////////////////

// The place where Execution Contexts get stacked on top of each other, 
// to keep track of where we are in the execution.

// When a function is finished executing, it's Execution Context is popped of the Call Stack,
// so, that the next Execution Context's function can be executed.
// 
// The Execution Context which is on the top of Call Stack is the currently running function's.
// 
// Because, the Execution Contexts are in stack, once the top most Execution Context's function call is finished, 
// the previous Execution Context's function call will be on hold. Because, JS has A SINGLE THREAD of execution.
//

//////////////////////////////////////////////////////////////
// The SCOPE AND SCOPE CHAIN 
//////////////////////////////////////////////////////////////

// The Scope Chain of Execution Context.
// Scope : "Form where and where can we access a certain variable"

// Scope is simply an environment in which a certain variable is declared. (Variable Environment of EC)
// Global Scope
// Function/Local Scope
// Block Scope [ES6]
//      Earlier we had 'var' which only cared about global scope and function scope (var).

// Scope of a Variable - Region of code, where a certain variable can be accessed.
// Any Scope has access to variables from all outer scopes.

let age = 28;
function parent(){
    let name = "Rahul";
    function child (){
        return `Hi ${name}, you are ${age}`; // name and age both are accessible 
    }
}

// In child(), variables 'name' and 'age' are used but not defined inside child().
// They are looked up for in their outer scopes, if found they are used, else we get error.
// This process is called variable lookup in scope chain. (It forms a chain.)

// So one scope can only look UP in the scope chain. child()'s scope will only look up in it's 'parent' function.

//////////////////////////////////////////////////////////////
// Scope Chain and Call Stack Relation
//////////////////////////////////////////////////////////////

// Scope - the order in which functions are written (and not the order in which functions are CALLED)

