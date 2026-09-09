## OOP Javascript > Static

> 🎯 **Static methods** are functions attached directly to a class or constructor function rather than to its `prototype` object. Because of this, they are called directly on the class itself and are not accessible by the instantiated objects. They are typically used as utility or helper functions related to the class.

---
&nbsp;

### 1. Built-in Static Methods

JavaScript has many built-in static methods. For example, `Array.from()` and `Array.isArray()` are static methods attached directly to the `Array` constructor. 

```javascript
// Calling the static method directly on the Array constructor
Array.from("123"); 
// ["1", "2", "3"]

// ❌ Incorrect: Trying to call it on an instance
[1, 2, 3, 4].from(); 
// TypeError: [1, 2, 3, 4].from is not a function
```

*These methods are designed this way to keep utility functions securely namespaced to the `Array` constructor rather than polluting the prototype of every single array instance.*

### 2. Static Methods in Constructor Functions

You can easily create your own static methods on custom constructor functions simply by attaching a function directly to the constructor object, bypassing the `prototype`.

```javascript
const Student = function (name) {
  this.name = name;
};

// Attaching a static method directly to the constructor
Student.hey = function () {
  console.log("Hey There!");
  
  // 'this' inside a static method points to the Constructor Function itself, 
  // NOT to any specific instance.
  console.log(this); 
};

// ✅ Correct: Calling it through the Class/Constructor directly
Student.hey();
// "Hey There!"
// [Function: Student]

const s1 = new Student("Rahul");

// ❌ Incorrect: Calling it on an instance
s1.hey();
// TypeError: s1.hey is not a function.
// (Because hey() is not in Student.prototype)
```

### 3. Static Methods in ES6 Classes

ES6 makes defining static methods much cleaner by providing the `static` keyword.

```javascript
class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  // Instance Method: 
  // Automatically added to the Student.prototype property.
  show() {
    console.log(`${this.name}'s Roll No. is ${this.rollNo}`);
  }

  // Static Method:
  // Added directly to the Student Class itself, NOT the prototype.
  static hey() {
    console.log("Heyy");
  }
}

// Accessing the static method
Student.hey(); 
// "Heyy"

const s2 = new Student("Raj", 42);

// Accessing the instance method
s2.show(); 
// "Raj's Roll No. is 42"
```

*Whether you use Constructor Functions or ES6 Classes, the underlying mechanics remain identical: static methods act as dedicated helpers bound strictly to the class level.*

---
&nbsp;
<!-- PAGINATION_START -->

📁 [5. OOP Javascript](../5.%20OOP%20Javascript/)

◀️ [ES6 Class's **getter** and **setter**](05-getters-setters.md)

▶️ [Inheritance - Constructor Function](07-inheritance-constructor-fn.md)

<!-- PAGINATION_END -->
&nbsp;
