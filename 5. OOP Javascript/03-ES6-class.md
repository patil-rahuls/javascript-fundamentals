## ES6 Classes

**`Classes` in ES6 javascript are just syntactic sugars to Constructor functions.**

> Example 1: Class Expression
```javascript
Student = class {
  // ...
};
```

> Example 2: Class Declaration

```javascript
class Student {
  // Behind the scenes, a *Class* is nothing but
  // the Constructor Fn.
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  // Methods in ES6 classes are automatically added to
  // .prototype property of the Constructor Fn.
  show() {
    console.log(`${this.name}'s Roll No. is ${this.rollNo}`);
  }

  // No comma here OR after a method in ES6 Class.
  // Remember, it is a class declaration,
  // not an object declaration.
  show2() {
    // ...
  }
}

const s3 = new Student("Aajesh", 29);
s3.show();

console.log(s3.__proto__ === Student.prototype);
// true

// Manually add a method to ES6 class' prototype property.
Student.prototype.greet = function () {
  console.log(` Hii ${this.name} !!`);
};
// This proves that ES6 Classes are actually Constructor
// functions behind the scenes.
```

> Example

```javascript
class Car {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }
  accelerate() {
    this.speed++ && console.log(this.speed);
  }
  break() {
    this.speed-- && console.log(this.speed);
  }
}

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);
```

Some points to remember -

- Classes in Javascript actually hide the true nature of prototypal inheritance
- Class declarations are not hoisted.
- Like functions, classes are also first class citizens. That means, we can pass them to functions and return them from functions.
  This happens because classes are basically Contructor Functions behind the scenes and Constructor Functions are still functions(special kind).
- Classes are executed in `strict` mode even though u haven't activated the strict mode.

Constructor functions vs ES6 Classes ?

- Its a personal preference.
- Classes looks a lot better as everything is in one block,
- Even though the class's methods point to .prototype property, still they are kept inside class, so the code looks good and maintainable.

---

---

<!-- PAGINATION_START -->

**Parent:** [5. OOP Javascript](../5.%20OOP%20Javascript/)

**Previous:** ← [Prototypes & Prototypal Inheritance](02.3-prototypal-inheritance.md)

**Next:** → [`Object.create()`](04-Object.create.md)

<!-- PAGINATION_END -->
