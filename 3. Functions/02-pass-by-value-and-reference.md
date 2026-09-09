## Functions > Pass by Value and Pass by Reference

> 🎯 In JavaScript, **primitives** are passed by **value**, while **objects** are passed by **reference** (or more accurately, the *reference* itself is passed by value). 
> 
> *(Please see the topic "Primitives vs Object References" under the "How Javascript Works" section for a deep dive).*

---
&nbsp;

### 1. The Behavior in Action

Consider this example where we pass both a primitive string and an object into a function:

```javascript
let flight = "STD__223";

let me = {
  name: "Rahul",
  passport: "3435435435435",
};

const checkIn = function (flightNum, passenger) {
  // Reassigning the primitive parameter
  flightNum = "GOAIR223"; 
  
  // Mutating the object parameter
  passenger.name = "Mr. " + passenger.name; 
  
  if (passenger.passport === "3435435435435") {
    console.log("Checked In");
  } else {
    console.log("Invalid Passport");
  }
};

checkIn(flight, me);
// "Checked In"

console.log(flight);
// 'STD__223' (Remains unchanged)

console.log(me);
// { name: 'Mr. Rahul', passport: '3435435435435' } (Mutated!)
```

*   **The Primitive (`flight`):** Remains `"STD__223"`. Passing a primitive into a function creates a brand new, independent copy of that value inside the function's local scope.
*   **The Object (`me`):** Gets mutated. When passing an object, we pass the memory reference. Any modifications made to the object's properties inside the function are reflected in the original object in the Heap.

---
&nbsp;

### 2. The Danger of Object Mutation

Because objects share memory references, unexpected side effects can occur if a function mutates the object without you realizing it.

```javascript
const newPassport = (person) => {
  // Mutating the passed object's property directly
  person.passport = Math.trunc(Math.random() * 1000000000).toString();
};

newPassport(me);
// The original 'me' object's passport is now changed.

checkIn(flight, me);
// "Invalid Passport"
```

---
&nbsp;

### 💡 The Technical Nuance: Is it really "Pass by Reference"?

Actually, in strictly technical terms, JavaScript **does not** have true "pass by reference" (like languages such as C++). JavaScript is *always* **pass by value**. 

However, when dealing with objects, the "value" being passed is the **memory address (reference)** in the Call Stack that points to the actual object in the Heap. 

*We do pass references, but we do not pass 'by' reference.* This behavior is often referred to in computer science as **"Call by Sharing"**.

---
&nbsp;

<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [Default function parameters [ES6]](01-default-params.md)  

▶️ [Timer Functions - setTimeout()](03.1-timer-functions-setTimeout.md)

<!-- PAGINATION_END -->
&nbsp;
