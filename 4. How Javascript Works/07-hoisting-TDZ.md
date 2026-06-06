## Hoisting and TDZ Temporal Dead Zone

> ***Hoisting - Refers to the behavior of variable and function declarations being moved to the top of their scope.***

_This means that a `var` variable or a `function declaration` can be accessed before it is declared in the code.
So, if a variable is assigned a value(using `var` keyword) before it is declared, the value will be `undefined` when accessed before the assignment._

`let` and `const` variables also said to be hoisted but in block scope and their value is `<uninitialized>` and are kept in `Temporal Dead Zone`.

&nbsp;

> ### How hoisting works behind the scenes
>
> In the Execution Context's - Variable Environment.
>
> Before Execution of a block/function, code is scanned for variable declarations and for each variable, a new `uninitialized` property _(i.e. without any value)_ is created in the Variable Environment, ***(and memory is allocated)***
>
> _In simpler terms, a property is created in the Variable Environment, but values are not set yet._
>
>
> This is how Hoisting actually works.

> Why Hoisting?
>
> Sometimes we might need to use functions before actual declaration. Code can be cleaner and useful.

`var` hoisting is just a byproduct.

---
