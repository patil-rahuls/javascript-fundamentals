## Hoisting and TDZ Temporal Dead Zone

> Behavior of variable and function declarations being moved to the top of their scope.

This means that a **var** variable or a **function declaration** can be accessed before it is declared in the code.

So, if a variable is assigned a value(using **var** keyword) before it is declared, the value will be **undefined** when accessed before the assignment.

**let** and **const** variables also said to be hoisted but in block scope and their value is **\<uninitialized>** and they are kept in **Temporal Dead Zone**.

&nbsp;

### How hoisting works behind the scenes

This happens inside the Execution Context's  **Variable Environment**.

Before Execution of a block/function, code is scanned for variable declarations and for each variable, a new property **(without any value)** is created in the Variable Environment, **(only memory is allocated)**

Only a property is created in the Variable Environment, but values are not set yet. That means its value remains **undefined** for **var** and **uninitialized** for **let** and **const** variables.

This is how Hoisting actually works.

&nbsp;

### Why Hoisting?

Sometimes we might need to use functions before actual declaration. Code can be cleaner and useful.

**var** hoisting is just a byproduct.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [4. How Javascript Works](../4.%20How%20Javascript%20Works/)  

◀️ [Arrow Function vs Regular Function](06-arrow-vs-regular-fn.md)  

▶️ [Primitive vs Object References](08-primitive-vs-objects.md)

<!-- PAGINATION_END -->
&nbsp;
