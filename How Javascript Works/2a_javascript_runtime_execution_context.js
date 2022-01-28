//////////////////////////////////////////////////////////////
// Execution
//////////////////////////////////////////////////////////////

// An Execution Context is an environment where the code executes. 
// This environment contains information about the code necessary to execute the code.

// After compilation, when the code is ready to be executed(Machine Code)
// 1. Exactly ONE *Global Execution Context* is created for the *top level code*.
//      *top level code* - all outermost declarations and definitions except function calls in a source code.

const name = "Rahul";           // top level code.
const myFunc = function (){     // top level code.
    let a  = 1;                 // this is inside a function, so not a top level code.
    const b = second();         // code inside functions are executed only when the function is called.
    a += b;
    return a;
};
function second(){              // top level code.
    var c = 2;
    return c;
}
const x = first();

//////////////////////////
//      GLOBAL EC       //
//////////////////////////
//                      //
// name = "Rahul"       //
// first = <function>   //
// second = <function>  //
// x = <unknown>        //
//                      //
//////////////////////////

// 2. That top-level-code is executed in the Global Execution Context.
// 3. Execution of Functions(function calls) and waiting for callbacks. 
//    For each function call, a NEW Execution Context is created. 
//    All function execution contexts in sequence together form a call stack.
//    Now the functions are waiting to be executed. e.g. a click event callback is waiting for its execution.


//////////////////////////////////////////////////////////////
// Execution Context 
//////////////////////////////////////////////////////////////

// An Execution Context is an environment where the function executes. 
// This environment contains all the information necessary to execute the function.

////////////////////////////////////////////////////////////////////////////////////////////
//                                  Execution Context                                     //
////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                        //
//          1. Variable Environment                                                       //
//                 -let, const and var declarations inside the function.                  //
//                 -Functions                                                             //
//                 -'arguments' object - all arguments passed into the function.          //
//          2. Scope Chain - reference to variables located outside of this function.     //
//          3. 'this' keyword                                                             //
//                                                                                        //      
////////////////////////////////////////////////////////////////////////////////////////////

// IMP: Execution Contexts of *Arrow Functions* do not get the 'this' keyword and 'arguments' object.
// However, they can use 'this' and 'arguments' from their closest REGULAR parent function's execution context.

//////////////////////////////////////////////////////////////
// CALL STACK 
//////////////////////////////////////////////////////////////

// The place where Execution Contexts get stacked on top of each other, 
// to keep track of where we are in the execution.

// When a function is finished executing, it's Execution Context is popped off the Call Stack,
// so, that the next Execution Context's function can be executed.
 
// The Execution Context which is on the top of Call Stack is the currently running function's.
 
// Because, the Execution Contexts are in stack, once the top most Execution Context's function call is finished, 
// the previous Execution Context's function call will be on hold. Because, JS has A SINGLE THREAD of execution.



//////////////////////////////////////////////////////////////
// The SCOPE
//////////////////////////////////////////////////////////////
// Scope in layman : Region of code where a certain variable can be accessed.

// Scope is simply an environment in which a certain variable is declared. (Variable Environment in case of functions).

// 3 types of scopes.
// 1. Global Scope
// 2. Function/Local Scope
// 3. Block Scope [ES6]

// Earlier we had 'var' which only cared about *global* scope and *function* scope.

// 1. Global Scope
// Outside of any Function or Block.
// Variables declared in global scope are accessible anywhere.

// 2. Function(Local) Scope
// Variables declared in function scope are accessible inside the function, NOT OUTSIDE.

// 3. Block Scope [ES 6]
// Starting from ES6, blocks also create their own scopes.
// Variables accessible ONLY inside the block.
// applicable to only *let* and *const* variables. Hence they are called 'Block Scoped'.
// Functions are Block Scoped in "strict" mode.


//////////////////////////////////////////////////////////////
// The SCOPE CHAIN
//////////////////////////////////////////////////////////////

// Any Scope has access to variables from all of its outer scopes.
let age = 28;
function parent(){
    let name = "Rahul";
    function child (){
        return `Hi ${name}, you are ${age}`; 
        // name and age both are accessible because they are from their outer scopes.
    }
}

// *VARIABLE LOOKUP*
// 
// In child(), variables 'name' and 'age' are used but not defined inside child().
// They are looked up for in their outer scopes, if found they are used, else we get error.
// This process is called *variable lookup* in scope chain. (It forms a chain.)

// So one scope can only look UP in the scope chain (hence the name 'look-up').
// child()'s scope will only look UP in it's 'parent' scope.

// In the above example, the variable lookup will be like this. (Read from Bottom-to-Up)
 
// (Read from Bottom-to-Up)
// for variable `name` :
//                Global Scope         
//                      ^
//                      |
//               parent() Scope     found `name`. No need to look up anymore.
//                      |
//                child() Scope    `name` not found. Let's look up.
// 

// (Read from Bottom-to-Up)
// for variable `age` :
//                Global Scope      found `age`.
//                      ^
//                      |
//               parent() Scope    `age` not found.  Let's look up again.
//                      |
//                child() Scope    `age` not found. Let's look up.
// 

//////////////////////////////////////////////////////////////
// Scope Chain and Call Stack Relation
//////////////////////////////////////////////////////////////

// Scope Chain - the order in which functions are WRITTEN.
// Call Stack - the order in which functions are CALLED.


