## Functions > Immediately Invoked Function Expressions (IIFE)

> 🎯 An **Immediately Invoked Function Expression (IIFE)** is a JavaScript function that runs as soon as it is defined, without being saved into a variable. It is primarily used to avoid polluting the global scope and to achieve encapsulation by creating private execution contexts.

---
&nbsp;

### 1. Syntax and Execution

To create an IIFE, you must first wrap a standard function inside parentheses `()`. This tells the JavaScript engine to treat the function as an *expression* rather than a standard function declaration. Then, you append a trailing set of parentheses `()` to execute it immediately.

```javascript
// Step 1: Wrap in parentheses to make it a function expression
(function () {
  console.log("This is a function expression, but not yet invoked.");
});

// Step 2: Add trailing () to invoke it instantly
(function () {
  console.log("This is a fully executing IIFE!");
})();
```

*The exact same pattern works cleanly with ES6 arrow functions:*

```javascript
(() => console.log("IIFE in arrow form!"))();
```

### 2. Encapsulation (The Module Pattern)

**Why use IIFEs?** Every function creates its own localized scope. By wrapping your code inside an IIFE, you keep variables hidden in that specific function's scope, preventing them from leaking out and colliding with variables in the global scope.

*Before modern ES6 modules were introduced, IIFEs were the primary way to implement the **Module Pattern** in JavaScript—acting very much like namespaces in PHP and other object-oriented languages.*

```javascript
const CounterModule = (function () {
  // PRIVATE VARIABLES AND FUNCTIONS
  // These cannot be accessed directly from the outside world.
  let count = 0;

  function logCurrentCount() {
    console.log(`Current Count: ${count}`);
  }

  // PUBLIC API
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

### 3. Interacting with the Module

Because of the closure created by the IIFE, the returned public methods retain access to the private `count` variable, but the outside world is strictly blocked from touching it directly.

```javascript
// Interact via the exposed public methods
CounterModule.increment();
// Current Count: 1

CounterModule.increment();
// Current Count: 2

CounterModule.decrement();
// Current Count: 1

// Try to access private members directly:
console.log(CounterModule.count);
// Output: undefined

CounterModule.logCurrentCount();
// TypeError: CounterModule.logCurrentCount is not a function
```

*In the example above, true encapsulation is achieved. We kept internal properties (`count`, `logCurrentCount`) completely private, exposing only the safe, controlled interface (`increment`, `decrement`, `reset`) to the rest of the application.*

---
&nbsp;
<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [**call()**, **apply()** and **bind()**](07-call-apply-bind.md)  

▶️ [Currying](09-currying.md)

<!-- PAGINATION_END -->
&nbsp;
