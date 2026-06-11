## `this` Keyword

> **_`this` refers to the object currently executing the code._**

Its value depends on how the function is called.

`this` is a special object that is created for every function's Execution Context. Its one of the three components of the function's Execution Context.

It takes the value of _(points to)_ the "owner" of the function in which it is used.

_`this` is NOT STATIC. Its value is ONLY assigned when the function is actually called._

> e.g. in this statement -
>
> ```
> myObj.myFunction();
> ```
>
> _The `this` inside the `myFunction` will point to `myObj` object._

&nbsp;

> **_In case of arrow functions' execution context, they do not have their own `this` object. They get it from their outer regular function's execution context._** (See the next section)

> **_They also don't get their own 'arguments' object._**

In case of Browser's Event Listener's Execution Context, `this` object points to DOM element that the handler is attached to.

---

---

<!-- PAGINATION_START -->

**Parent:** [4. How Javascript Works](..)  
**Previous:** [Execution Context](04.2-execution-context-structure.md)  
**Next:** [Arrow Function vs Regular Function](06-arrow-vs-regular-fn.md)

<!-- PAGINATION_END -->
