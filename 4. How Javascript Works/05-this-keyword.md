## **this** Keyword

> **this** refers to the object currently executing the code.

Its value depends on how the function is called.

It is a special object that is created for every function's Execution Context. Its one of the three components of the function's Execution Context.

```
///////////////////////////////////////////////////////
//  Execution Context                                //
///////////////////////////////////////////////////////
//                                                   //
//  1. Variable Environment                          //
//         -let, const and var declarations.         //
//         -Functions                                //
//         -'arguments' object -                     //
//           (all arguments passed into the fn.)     //
//  2. Scope Chain -                                 //
//          A reference to variables located outside //
//          of this function.                        //
//  3. 'this' keyword                                //
//                                                   //
///////////////////////////////////////////////////////

```


It _points to_ the "owner" of the function in which it is used.

It is NOT STATIC. Its value is ONLY assigned when the function is actually called.

For example, in the following statement: _(assuming that myFunction has 'this' used)_

```
myObj.myFunction();

```
_the **this** inside the **myFunction** will point to **myObj** object._

---
&nbsp;

In case of arrow functions' execution context, they do not have their own **this** object. They get it from their outer regular function's execution context. (See the next section)

In case of Browser's Event Listener's Execution Context, **this** object points to DOM element that the handler is attached to.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [4. How Javascript Works](../4.%20How%20Javascript%20Works/)  

◀️ [Execution Context's Structure](04.2-execution-context-structure.md)  

▶️ [Arrow Function vs Regular Function](06-arrow-vs-regular-fn.md)

<!-- PAGINATION_END -->
&nbsp;
