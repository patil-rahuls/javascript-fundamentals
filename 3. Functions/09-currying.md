## Currying

> **_Chain of function calls where each function returns another function untill the final result is returned._**

> **_Currying lets you create specialized versions of a generic function like logger._**

```javascript
function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const result = sum(1)(2)(3);
// Currying

console.log(result);
// 6
```

&nbsp;

### Real life use case:

> Example 1: **_Reusable Configuration (The "Logger" Pattern)_**

Imagine you have a logging function. You don’t want to manually type "DEBUG" or "ERROR" every single time you log something in a specific module.

_Currying lets you create specialized versions of a generic function like logger._

```javascript
const logger = (level) => (message) =>
  `[${level}] ${new Date().toISOString()}: ${message}`;

// Create specialized loggers
const debugLog = logger("DEBUG");
const errorLog = logger("ERROR");

debugLog("User clicked the button");
// [DEBUG] 2026-03-19...: User clicked the button

errorLog("Failed to fetch data");
// [ERROR] 2026-03-19...: Failed to fetch data
```

Advantages of Currying:

- **DRY**: _You stop repeating the same first few arguments._

- **Composition**: _It makes your functions easier to pipe into one another._

- **Readability**: _It clarifies intent. `errorLog(msg)` is much clearer than `log("ERROR", msg)`._

---

---

<!-- PAGINATION_START -->

**Parent:** [3. Functions](..)  
**Previous:** [Immediately Invoked Function Expressions - `IIFE`](08-IIFE.md)  
**Next:** [Polyfills](10-pollyfills.md)

<!-- PAGINATION_END -->
