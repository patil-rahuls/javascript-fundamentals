## Functions > call(), apply() and bind()

> 🎯 These built-in JavaScript methods are used to control the `this` context of a function. `call()` and `apply()` invoke a function immediately with a specified `this` value, while `bind()` creates and returns a new function with a permanently bound `this` value.

---
&nbsp;

### 1. The Problem: Borrowing Methods

When we want to reuse an object's method for a different object, we can't just copy the function into a variable. If we do, the function loses its receiver object, and the `this` keyword becomes `undefined`.

```javascript
const mainAirline = {
  airlineCode: "AA",
  checkIn(passengerName, seatNumber) {
    // 'this' points to the calling object
    console.log(`[${this.airlineCode}] - Boarding pass issued for ${passengerName}. Seat: ${seatNumber}.`);
  },
};

mainAirline.checkIn("Rahul P", "A01"); 
// Works perfectly. 'this' is mainAirline.

const partnerAirline = {
  airlineCode: "BB",
};

// Copying the function outside the object
const checkInFn = mainAirline.checkIn;

// checkInFn("Hitesh T", "B22"); 
// ❌ ERROR: 'this' is undefined because checkInFn is now a regular function call.
```

*To make `checkInFn()` a common function available to all airlines, we borrow it using `call()`, `apply()`, or `bind()`.*

### 2. `Function.prototype.call()`

The `call()` method immediately executes the function. The first argument explicitly sets the `this` keyword, and subsequent arguments are passed exactly as the function expects them.

```javascript
// 1st arg: 'partnerAirline' becomes 'this'
// Remaining args: passed directly to the checkIn function
checkInFn.call(partnerAirline, "Hitesh T", "B22");

// We can also create an anonymous object directly inside call()
checkInFn.call(
  { airlineCode: "FG" }, 
  "Rucha S", 
  "F23"
);
```

### 3. `Function.prototype.apply()`

This is exactly the same as `call()`, except that the arguments (after the `this` context) must be passed as an **array**. 

```javascript
// Arguments passed inside an array
checkInFn.apply(partnerAirline, ["Aajesh V", "H02"]);

// Modern Alternative: Using call() with the spread operator
const passenger = ["Raj S", "D23"];

checkInFn.apply(partnerAirline, passenger);
checkInFn.call(partnerAirline, ...passenger); // Preferred modern approach
```

### 4. `Function.prototype.bind()`

Unlike `call()` and `apply()`, `bind()` **does not execute the function immediately**. Instead, it creates and returns a brand new function where the `this` keyword is permanently bound to the passed object.

```javascript
// Creates a new function bound to partnerAirline
const partnerCheckIn = checkInFn.bind(partnerAirline);

// Can now be called without a receiver object
partnerCheckIn("Vijay N", "B12");
```

**Partial Application:** `bind()` can also preset default parameters. 

```javascript
// Presetting "Mr. PM" as the first argument
const partnerCheckInPM = checkInFn.bind(partnerAirline, "Mr. PM");

// Now we only need to pass the seat number
partnerCheckInPM("A02"); 
// Same as: checkInFn.call(partnerAirline, "Mr. PM", "A02");
```

### 5. Using `bind()` with Event Listeners

In an event handler function, the `this` keyword automatically points to the HTML element that triggered the event. `bind()` is the standard solution to fix this when you need `this` to point to your object.

```javascript
const myAirline = {
  airlineCode: "AA",
  book() {
    console.log(`Booking made for ${this.airlineCode}`);
  },
};

// ❌ Incorrect: 'this' will point to the button element, resulting in 'undefined'
// document.querySelector(".book").addEventListener("click", myAirline.book);

// ✅ Correct: bind() returns a new function with 'this' explicitly set to myAirline
document
  .querySelector(".book")
  .addEventListener("click", myAirline.book.bind(myAirline));
```

### 6. Partial Application without Objects (Currying)

A powerful use case for `bind()` is creating new specialized functions from a general one, even if you don't care about the `this` keyword (passing `null`).

```javascript
const addTax = (rate, val) => val + val * rate;

// We set 'this' to null, and permanently set 'rate' (the first param) to 0.23
const calcVAT = addTax.bind(null, 0.23);

console.log(calcVAT(100)); 
// 123 (100 + 100 * 0.23)
```

*(Optional Read: The above scenario achieves the same result as returning functions from higher-order functions).*

```javascript
// Equivalent using Higher Order Functions
const createTaxCalculator = (rate) => {
  return function (val) {
    return val + val * rate;
  };
};

const calcGST = createTaxCalculator(0.18);
console.log(calcGST(100)); // 118
```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [Higher Order Functions](06-higher-order-fn.md)  

▶️ [Immediately Invoked Function Expressions - **IIFE**](08-IIFE.md)

<!-- PAGINATION_END -->
&nbsp;
