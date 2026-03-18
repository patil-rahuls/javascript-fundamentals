//////////////////////////////////////////////////////////////
// CONSOLE ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

console.warn("This is a warning");
// Use for warnings

console.error("An Error Occured");
// Use for logging erors

console.table(myObject);
// prints tabular form of object

console.log("Server Logs");

console.info("General Information");

console.dir(object);
// prints Object's properties hierarchically.
// Use this to observe "Closure"

console.time();
console.timeLog();
console.timeEnd();
// It is used to start a timer in JavaScript, allowing us
// to measure the duration of a code operation for performance
// testing.

// Example:
// Start the timer using a label
console.time("someLabel");

// Code to be measured
for (let i = 0; i < 100000; i++) {
  // some expensive operation
}

// Log an intermediate time if needed
console.timeLog("someLabel");

// Stop the timer and print the final elapsed time in ms
console.timeEnd("someLabel");
// It outputs the time elapsed in miliseconds
// someLabel: 123.456ms
