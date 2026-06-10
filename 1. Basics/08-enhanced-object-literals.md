## Enhanced Object Literals [ES6]

_Literals represent values in javascript._

_These are fixed values not variables that you literally provide in your script._

A better way to write javascript objects with the new `ES6` syntax could be as follows:

> Example 1: Computed Properties

```javascript
const attribute = "make";
let i = 0;

const laptop = {
  [attribute + ++i]: "Apple",
  [attribute + ++i]: "Dell",
  [attribute + ++i]: "HP",
};

console.log(laptop.make1); // "Apple"
console.log(laptop.make2); // "Dell"
console.log(laptop.make3); // "HP"
```

&nbsp;

> Example 2: Shorthand for Methods and Properties

```javascript
let film = "Titanic";

const myObj = {
  myFunc: function (param1, param2) {
    return [param1, param2];
  },

  // method 'myFunc()' can be
  // re-written as follows.
  myFunc(param1, param2) {
    return [param1, param2];
  },
  // i.e. removed the colon and
  // function keyword

  film,
  // An outside object

  movie: film,
  // An outside object with a
  // different property name.
};
```

---

---

<!-- PAGINATION_START -->

**Parent:** [1. Basics](..)  
**Previous:** [Strings and Template Literals [ES6]](07-template-literals.md)  
**Next:** [Arrow Function [ES6]](09-arrow-functions.md)

<!-- PAGINATION_END -->
