## OOP Javascript > ES6 Classes

> 🎯 **Classes** in ES6 JavaScript are just syntactic sugar over traditional Constructor Functions. They provide a much cleaner, more modern, and more organized syntax for doing the exact same thing: implementing prototypal inheritance.

---
&nbsp;

### 1. Class Syntax: Expression vs. Declaration

Just like functions, classes can be defined as either expressions or declarations. Class declarations are the most common.

```javascript
// Example 1: Class Expression
const StudentExp = class {
  // ...
};

// Example 2: Class Declaration
class Student {
  // Behind the scenes, the constructor method IS the Constructor Function.
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  // Methods inside ES6 classes are AUTOMATICALLY added to the 
  // .prototype property of the class/constructor function.
  show() {
    console.log(`${this.name}'s Roll No. is ${this.rollNo}`);
  }

  // Note: No commas here! 
  // Remember, it is a class declaration, not an object literal.
  show2() {
    // ...
  }
}
```

### 2. Behind the Scenes (Prototypes)

Instantiating an ES6 class uses the `new` keyword and behaves exactly like a constructor function under the hood.

```javascript
const s3 = new Student("Aajesh", 29);
s3.show();
// "Aajesh's Roll No. is 29"

// Proving the prototypal link still exists:
console.log(s3.__proto__ === Student.prototype);
// true

// Manually adding a method to the ES6 class' prototype property.
// This proves that ES6 Classes are just Constructor Functions behind the scenes.
Student.prototype.greet = function () {
  console.log(`Hii ${this.name}!!`);
};

s3.greet(); 
// "Hii Aajesh!!"
```

### 3. Example: The Car Class

Let's convert our previous `Car` constructor function into a modern ES6 Class.

```javascript
class Car {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }
  
  accelerate() {
    this.speed++ && console.log(this.speed);
  }
  
  brake() {
    this.speed-- && console.log(this.speed);
  }
}

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);

BMW.accelerate(); // 121
```

### 4. Crucial Points to Remember

*   **Hides Prototypal Nature:** Classes in JavaScript abstract away and hide the true nature of prototypal inheritance, making it look like traditional object-oriented programming (like Java or C++).
*   **Not Hoisted:** Unlike function declarations, class declarations are *not hoisted*. You cannot use a class before it is defined in your code.
*   **First-Class Citizens:** Just like functions, classes can be passed into other functions as arguments and returned from them. This is because classes are basically special functions behind the scenes.
*   **Strict Mode:** The body of a class always executes in `strict` mode, even if you haven't explicitly enabled it in your file.

### 5. Constructor Functions vs. ES6 Classes

Which one should you use?

*   **Personal Preference:** Technically, they do the exact same thing.
*   **Organization:** Classes generally look much better because all methods and the constructor are grouped into a single block.
*   **Maintainability:** Even though class methods are mapped to the `.prototype` property behind the scenes, keeping them visually enclosed inside the `class {}` block makes the code cleaner and easier to maintain.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [5. OOP Javascript](../5.%20OOP%20Javascript/)

◀️ [Prototypes & Prototypal Inheritance](02.3-prototypal-inheritance.md)

▶️ [**Object.create()**](04-Object.create.md)

<!-- PAGINATION_END -->
&nbsp;
