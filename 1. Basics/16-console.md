## Console Methods

> 🎯 The **`console`** object provides access to the debugging console, offering various methods to output messages, inspect data structures, and measure performance.

---
&nbsp;

### 1. General Logging & Inspection Methods

```javascript
console.log("Server Logs");          // Standard logging
console.info("General Information"); // Informational logging

console.warn("This is a warning");   // Outputs a warning message 
console.error("An Error Occurred");  // Outputs an error message 

console.table(myObject);             // Prints a tabular form of the passed object or array

console.dir(object);                 
// Prints an object's properties hierarchically.
// Highly useful to deeply inspect objects and observe closures.
```

---

### 2. Methods to Capture Performance

These methods are used to start a timer in JavaScript, allowing you to measure the duration of a code operation for performance testing.

*   **`console.time(label)`**: Starts the timer.
*   **`console.timeLog(label)`**: Logs the current time elapsed *without* stopping the timer.
*   **`console.timeEnd(label)`**: Stops the timer and prints the final elapsed time.

```javascript
// Starts the timer using a unique label
console.time("someLabel");

// Code to be measured
for (let i = 0; i < 100000; i++) {
  // some expensive operation
}

// Logs an intermediate time (optional)
console.timeLog("someLabel");

// Stops the timer and prints the final elapsed time in milliseconds
console.timeEnd("someLabel"); 
// Output: someLabel: 123.456ms
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Error Types](15-error-types.md)  

▶️ [DOM-manipulation](17-DOM-manipulation.md)

<!-- PAGINATION_END -->
&nbsp;
