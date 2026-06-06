## JavaScript Engine

An software that executes Javascript code.

All browsers have their own Javascript Engines that execute Javascript code. Well known is `v8` used in Google Chrome and Node.js.


> A JS Engine comprises of :
>
>  - Call Stack
>
>  - Heap
>

### `Call Stack` -

It's where our code gets executed using `Execution Contexts`

It is a data structure _(Stack)_ where `Execution Contexts` get stacked on top of each other, to keep track of where we are in the program execution.

When a function is finished executing, it's Execution Context is popped off the Call Stack, so, that the next Execution Context's function can be executed.

The Execution Context which is on the top of Call Stack is the currently running function's.

Because, the Execution Contexts are in stack, once the top most Execution Context's function call is finished, the previous Execution Context's function call will be on hold.

> Because, JavaScript has A SINGLE THREAD of execution.

> ***IMP: Primtive types are stored in the CALL STACK because that's where the Execution Contexts Run.***


&nbsp;

### `Heap` -
An unstructured memory pool which stores all the `Objects` _(objects, arrays, sets, maps etc)_ (not primitives) that our application uses.

---
