## Console Methods

```javascript
console.warn("This is a warning");
// Use for warnings

console.error("An Error Occured");
// Use for logging erors

console.table(myObject);
// prints tabular form of object

console.log("Server Logs");

console.info("General Information");

console.dir(object);
// prints Object's properties
// hierarchically.
// Use it to observe "Closure".
```

---

&nbsp;

### Methods to capture performance

_`console.time();`_

_`console.timeLog();`_

_`console.timeEnd();`_

_These methods are used to start a timer in JavaScript, allowing us to measure the duration of a code operation for performance testing._

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

// Stops the timer and prints the
// final elapsed time in miliseconds
console.timeEnd("someLabel");
// someLabel: 123.456ms
```

---

---

<!-- PAGINATION_START -->

**Parent:** [1. Basics](..)  
**Previous:** [Error Types](15-error-types.md)  
**Next:** [DOM-manipulation](17-DOM-manipulation.md)

<!-- PAGINATION_END -->
