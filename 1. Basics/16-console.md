## Console Methods

```javascript
console.warn("This is a warning");

console.error("An Error Occured");

console.table(myObject);
// prints tabular form of the passed object

console.log("Server Logs");

console.info("General Information");

console.dir(object);
// prints Object's properties hierarchically.
// Use it to observe closures.

```

---

&nbsp;

### Methods to capture performance

console.time();

console.timeLog();

console.timeEnd();

These methods are used to start a timer in JavaScript, allowing us to measure the duration of a code operation for performance testing.

> Example 1

```javascript
// Starts the timer using a label
console.time("someLabel");

// Code to be measured
for (let i = 0; i < 100000; i++) {
  // some expensive operation
}

// Logs an intermediate time
console.timeLog("someLabel");

// Stops the timer and prints the final elapsed time in miliseconds
console.timeEnd("someLabel");
// someLabel: 123.456ms

```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Error Types](15-error-types.md)  

▶️ [DOM-manipulation](17-DOM-manipulation.md)

<!-- PAGINATION_END -->
&nbsp;
