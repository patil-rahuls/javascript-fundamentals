## Functions > Higher Order Functions

> 🎯 A **Higher Order Function** is a fundamental concept in JavaScript. It is a function that either receives another function as an argument, returns a function, or both. The functions being passed or returned are referred to as **First-Class Functions** (or First-Class Citizens).

---
&nbsp;

### 1. Functions Accepting Callback Functions

A common example of a built-in higher-order function is `addEventListener()`. Passing functions as arguments allows us to hide the implementation details (abstraction) and structure our code on a higher level.

```javascript
// Callback function 1
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

// Callback function 2
const upperFirstWord = function (str) {
  const [first, ...restWords] = str.split(" ");
  return [first.toUpperCase(), ...restWords].toString();
};

// Higher-order function:
const transform = function (str, fn) {
  console.log(`Original string : ${str} `);
  console.log(`Modified string : ${fn(str)} `);
  
  // A function is also an object and has 'name' as an internal property.
  console.log(`Modified by function : ${fn.name}`);
};

// Calling transform() using different methods as parameters
transform("Rahul is greater", upperFirstWord);
transform("Rahul is greater", oneWord);
```

### 2. Functions Returning Functions

Higher-order functions can also return new functions. The returned function remembers the variables from its parent scope even after the parent has finished executing, thanks to **Closures**.

```javascript
function count() {
  let counter = 0;

  return function () {
    counter++;
  };
}

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}${name}`);
  };
};

// greeterHey is now a function returned by greet()
const greeterHey = greet("Heyy");

// Let's observe the function call now
greeterHey("Rahul");
// "Heyy Rahul"
```

*These function calls can also be chained in a single line (a technique related to **currying**):*

```javascript
greet("Good Morning")("Mr. Rahul");
// "Good Morning Mr. Rahul"
```

### 3. Arrow Function Syntax

Writing functions that return functions can be streamlined using ES6 arrow functions, leading to very clean and concise code.

```javascript
// Standard arrow function returning a function
const greet = (greeting) => {
  return function (name) {
    console.log(`${greeting}${name}`);
  };
};

// Simplified to a one-liner returning another arrow function
const greetArrow = (greeting) => (name) => console.log(`${greeting}${name}`);

greetArrow("Hello")("Rahul");
// "Hello Rahul"
```

### 4. Creating Related Functions

Returning functions allows us to create related, specialized functions based on a common template (often called Factory Functions).

```javascript
const addTax = (rate) => {
  return function (val) {
    return val + val * rate;
  };
};

// Creating specialized tax calculators based on different rates
const gst = addTax(18);
const educationCess = addTax(0.05);

let cost = 3499;

console.log(gst(cost));
// 66481

console.log(educationCess(cost));
// 3673.95
```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [Closures](05-closures.md)  

▶️ [**call()**, **apply()** and **bind()**](07-call-apply-bind.md)

<!-- PAGINATION_END -->
&nbsp;
