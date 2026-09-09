## OOP Javascript > ES6 Class's **getter** and **setter**

> 🎯 Just like object literals, ES6 Classes support **getters** and **setters**. They allow you to execute custom logic when reading or writing a property, but they are accessed exactly like standard properties, not as methods. They are highly effective for intercepting assignments to perform data validation.

---
&nbsp;

### 1. Basic Syntax

Getters use the `get` keyword, and setters use the `set` keyword. 
*Important: A setter MUST have exactly ONE compulsory parameter.*

```javascript
class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  // Getter method
  get info() {
    return this.name;
  }

  // Setter method (Must have exactly one parameter)
  set info(nm) {
    this.name = nm;
  }
}

const s4 = new Student("Test", 20);

// Invoke setter (Note: No parentheses used!)
s4.info = "Hitesh";

// Invoke getter (Note: No parentheses used!)
console.log(s4.info); 
// "Hitesh"
```

### 2. Real-World Use Case: Input Validation

A major use case for setters is data validation. When a class is instantiated, the constructor can trigger the setter to validate the input before officially saving it to the object.

> **⚠️ The Infinite Loop Trap:** 
> If your setter method has the exact same name as the property being set inside the constructor (e.g., `username`), doing `this.username = input` inside the setter will recursively trigger the setter again. This creates an infinite loop resulting in a `"Maximum call stack size exceeded"` error.
> 
> **✅ The Solution:** 
> Inside the setter, assign the validated value to a new "backing" property. By convention, developers prefix this backing property with an underscore (e.g., `this._username`).

```javascript
class User {
  constructor(username) {
    // This assignment automatically triggers the 'set username()' method below
    this.username = username;
  }

  // Regex to check for special characters
  format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  set username(input) {
    // ❌ WRONG WAY: Causes "Maximum call stack size exceeded" error
    /*
    this.format.test(input)
      ? (this.username = input) 
      : console.error("Username should have at least one special character.");
    */

    // ✅ CORRECT WAY: Use a new variable conventionally prefixed with '_'
    this.format.test(input)
      ? (this._username = input)
      : console.error("Username should have at least one special character.");
  }
}

// Fails validation: Logs an error to the console and _username remains undefined
const u1 = new User("Deepika");

// Passes validation: _username is successfully set
const u2 = new User("Deepika@123");
```

### 3. Multiple Getters & Setters

*Tip: You are not limited to just one; you can define as many distinct getters and setters as you need within a single ES6 class or object.*

---
&nbsp;
<!-- PAGINATION_START -->

📁 [5. OOP Javascript](../5.%20OOP%20Javascript/)

◀️ [**Object.create()**](04-Object.create.md)

▶️ [Static](06-static.md)

<!-- PAGINATION_END -->
&nbsp;
