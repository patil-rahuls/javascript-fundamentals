## `Object.create()`

Works differently than Constructor Functions and ES6 Classes.

We directly create a `prototype` object ONLY, and link objects to the newly created prototype.
Example: prototype 'studentProto' is created directly.

```javascript
// No capital first letter,
// as this is not a constructor fn.
const studentProto = {
  showAge() {
    console.log(`Age : ${this.age}`);
  },
};

// Create and Link an object (s5)
// to the prototype 'studentProto'
const s5 = Object.create(studentProto);
console.log(s5);

// Now we can set the property of
// the individual objects
s5.age = 20;
s5.showAge();
// 20

console.log(s5.__proto__ === studentProto);
// true

// Better way to set poperties in this
// case: i.e. using a function. (myFunc))
const studentProto1 = {
  age() {
    console.log(`${this.name}'s age is ${this.age} yrs.`);
  },
  // Notice the comma above.
  // this is not an ES6 class.

  myFunc(name, age) {
    this.name = name;
    this.age = age;
  },
};

const s6 = Object.create(studentProto1);

s6.myFunc("rahul", 27);
s6.age();
// rahul's age is 27 yrs.
```

The distinction here is that, we did not create any Constructor Function.

The `prototype` property which is automatically created in the case of constructor function, is what we manually create in this case and use Object.create() to create objects out of them.

---

---

<!-- PAGINATION_START -->

**Parent:** [5. OOP Javascript](../5.%20OOP%20Javascript/)

**Previous:** ← [ES6 Classes](03-ES6-class.md)

**Next:** → [ES6 Class's `getter` and `setter`](05-getters-setters.md)

<!-- PAGINATION_END -->
