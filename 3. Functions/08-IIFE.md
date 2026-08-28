## Immediately Invoked Function Expressions - **IIFE**

> Functions that execute immediately WITHOUT being SAVED in a variable.

Advantages:

- Avoids polluting the global scope.
- Provides Encapsulation, allowing you to create private scopes for variables and function.


> Step 1: Put parens ( ) around it to make it a function expression without assigning to any variable.

```javascript
(function () {
  alert("this is not an IIFE");
});

```

> Step 2: To call it, simply call that expression just like any regular function
```javascript
(function () {
  alert("this is an IIFE");
})();

```
The trailing "()" executes this anonymous function instantly.

Note that it is not stored in any variable, and it is immediately invoked while declared. 

Same works with an arrow function:
```javascript
(() => alert("IIFE in arrow form"))();

```

### Encapsulation - _IIFE as Modules_

**Why are IIFEs in javascript?** - _Variables Scope_

We use IIFE to just keep some variables hidden in the function scope and not make it available in global scope hence preventing the global scope from getting polluted.

IIFE creates a scope. Every function creates its own scope.

_IIFE can be written to function same as a Namespace in PHP and other langs._

> Example: Implementation of Modules system in JS. Behind the scenes, Modules are nothing but IIFEs.

```javascript
const CounterModule = (function () {
  // PRIVATE VARIABLES AND FUNCTIONS
  // These cannot be accessed directly from the outside world.
  let count = 0;

  function logCurrentCount() {
    console.log(`Current Count: ${count}`);
  }

  // PUBLIC
  // We return an object containing the methods we WANT to expose.
  return {
    increment: function () {
      count++;
      logCurrentCount();
    },
    decrement: function () {
      count--;
      logCurrentCount();
    },
    reset: function () {
      count = 0;
      console.log("Counter has been reset.");
    }
  };
})();

```

Usage: 

Interact with the module via public methods

```javascript
CounterModule.increment();
// Current Count: 1

CounterModule.increment();
// Current Count: 2

CounterModule.decrement();
// Current Count: 1

```

_Try to access private members directly_
```javascript
console.log(CounterModule.count);
// Output: undefined

CounterModule.logCurrentCount();
// TypeError: CounterModule.logCurrentCount is not a function

```

_In the above example, we achieved encapsulation._

_Keeping some properties i.e. **count** and method **logCurrentCount()** private and exposing only required properties to the outside world i.e. **CounterModule.decrement()**, **CounterModule.increment()** and **CounterModule.reset()**._

---
&nbsp;
<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [**call()**, **apply()** and **bind()**](07-call-apply-bind.md)  

▶️ [Currying](09-currying.md)

<!-- PAGINATION_END -->
&nbsp;
