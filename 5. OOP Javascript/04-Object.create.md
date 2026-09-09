## OOP Javascript > Object.create()

> 🎯 `Object.create()` offers a different approach to prototypal inheritance compared to Constructor Functions and ES6 Classes. Instead of using the `new` keyword and a constructor, you define a regular object to serve as the prototype and directly link new objects to it.

---
&nbsp;

### 1. Directly Creating a Prototype

Unlike constructor functions, we don't start with a capitalized function. We simply create a standard JavaScript object literal containing the methods we want to share.

```javascript
// No capital first letter, as this is just a regular object, not a constructor.
const studentProto = {
  showAge() {
    console.log(`Age : ${this.age}`);
  },
};
```

### 2. Creating and Linking Objects

We use `Object.create()` to generate a new empty object and manually link its `__proto__` property to our `studentProto` object.

```javascript
// Create a new object (s5) linked to the prototype 'studentProto'
const s5 = Object.create(studentProto);
console.log(s5); // {}

// Now we can set properties on the individual instance
s5.age = 20;

s5.showAge();
// Age : 20

// Verifying the prototype chain
console.log(s5.__proto__ === studentProto);
// true
```

### 3. Using an Initialization Method

Manually adding properties one by one (e.g., `s5.age = 20`) gets tedious. A better way to handle state is to define an initialization method inside the prototype object to act like a constructor.

```javascript
const studentProto1 = {
  showInfo() {
    console.log(`${this.name}'s age is${this.age} yrs.`);
  },
  // Notice the comma above. This is a standard object literal, not an ES6 class.

  // Initialization method
  init(name, age) {
    this.name = name;
    this.age = age;
  },
};

const s6 = Object.create(studentProto1);

// Initialize the object's properties
s6.init("Rahul", 27);

s6.showInfo();
// "Rahul's age is 27 yrs."
```

### 4. The Key Distinction

The major difference with `Object.create()` is that **we did not use a Constructor Function**. 

With constructor functions and ES6 classes, the `prototype` property is automatically created and linked behind the scenes when you use the `new` keyword. With `Object.create()`, you manually build that prototype object yourself and explicitly command JavaScript to link new instances to it.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [5. OOP Javascript](../5.%20OOP%20Javascript/)

◀️ [ES6 Classes](03-ES6-class.md)

▶️ [ES6 Class's **getter** and **setter**](05-getters-setters.md)

<!-- PAGINATION_END -->
&nbsp;
