## Asynchronous Javascript > Synchronous vs Asynchronous

> 🎯 JavaScript executes code synchronously by default, meaning statements run one after another and can block execution. Asynchronous programming allows long-running tasks to happen in the background (non-blocking), ensuring your application remains fast and responsive to users.

---
&nbsp;

### 1. Synchronous Execution (Blocking)

Synchronous code is executed in strict sequence. A statement has to wait for the earlier statement to finish executing before it can run. Long-running operations will **block** the rest of the code from executing.

```javascript
console.log("One");
console.log("Two");
console.log("Three");

// Outputs:
// 'One'
// 'Two'
// 'Three'
```

### 2. Asynchronous Execution (Non-blocking)

Asynchronous code allows long-running operations to "execute in the background." While this happens, the rest of the code executes normally without ever being blocked. 

```javascript
console.log("One");
setTimeout(() => console.log("Two"), 100);
console.log("Three");

// Outputs:
// 'One'
// 'Three'
// 'Two'
```

> ⚠️ **Important:** AJAX (Asynchronous Javascript and XML), network requests, long-running calculations, and file system operations are prime examples of asynchronous tasks. However, keep in mind that **not all** callback functions automatically make code asynchronous.

### 3. Callback Hell

When we have multiple asynchronous operations that must run one after the other, "nesting" their callbacks creates a deeply indented, pyramid-like structure known as **Callback Hell**. Because every callback waits for the previous one, it severely harms the readability and maintainability of the code.

```javascript
// Example: Nested callbacks resulting in Callback Hell
asyncOperation1(function (result1) {
  asyncOperation2(result1, function (result2) {
    asyncOperation3(result2, function (result3) {
      asyncOperation4(result3, function (result4) {
        // Do something with result4
      });
    });
  });
});
```

### 4. Avoiding Callback Hell with Promises

Modern JavaScript provides **Promises** to fix this nesting problem. Promises allow you to chain asynchronous operations sequentially, keeping your code flat, readable, and easier to debug.

```javascript
// Example: The same flow, flattened using Promises
asyncOperation1()
  .then((result1) => asyncOperation2(result1))
  .then((result2) => asyncOperation3(result2))
  .then((result3) => asyncOperation4(result3))
  .then((result4) => {
    // Do something with result4
  })
  .catch((error) => {
    // Handle errors cleanly in one place
  });
```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [6. Asynchronous Javascript](../6.%20Asynchronous%20Javascript/)

◀️ [**OOP JavaScript**](../5.%20OOP%20Javascript/)

▶️ [Promises [ES6]](02.1-promise.md)

<!-- PAGINATION_END -->
&nbsp;
