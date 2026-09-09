## Functions > Currying

> 🎯 **Currying** is a functional programming technique where a function is transformed into a sequence of nested functions. Instead of taking all arguments at once, it evaluates as a chain of function calls where each function takes one argument and returns another function until the final result is produced.

---
&nbsp;

### 1. The Basics of Currying

Currying transforms a standard multi-argument function into a chained sequence. Each step in the chain holds onto the variables passed to it via closures.

```javascript
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Currying in action
const result = sum(1)(2)(3);

console.log(result);
// 6
```

### 2. Real-World Use Case: Reusable Configuration

Imagine you have a logging function. You don’t want to manually type "DEBUG" or "ERROR" every single time you log something in a specific module. **Currying lets you create specialized versions of a generic function.**

*(The "Logger" Pattern)*

```javascript
const logger = (level) => (message) =>
  `[${level}] ${new Date().toISOString()}:${message}`;

// Create specialized loggers by partially applying the first argument
const debugLog = logger("DEBUG");
const errorLog = logger("ERROR");

// Later in your code, you only need to pass the remaining argument
debugLog("User clicked the button");
// [DEBUG] 2026-09-09T04:48:38.000Z: User clicked the button

errorLog("Failed to fetch data");
// [ERROR] 2026-09-09T04:48:38.000Z: Failed to fetch data
```

### 3. Advantages of Currying

*   **DRY (Don't Repeat Yourself):** You stop repeating the same first few arguments (like the log level or configuration settings) across multiple function calls.
*   **Composition:** It makes your functions easier to pipe into one another, which is a core principle in functional programming.
*   **Readability:** It clarifies intent. Calling `errorLog(msg)` is much cleaner and more semantic than writing `console.log("ERROR", msg)` every time.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [Immediately Invoked Function Expressions - **IIFE**](08-IIFE.md)  

▶️ [Polyfills](10-pollyfills.md)

<!-- PAGINATION_END -->
&nbsp;
