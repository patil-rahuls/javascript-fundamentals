## Enhanced Object Literals (ES6)

Literals represent values in javascript.

These are fixed values not variables that you _literally_ provide in your script.

A better way to write javascript objects with the new **ES6** syntax could be as follows:

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

  // above method can be re-written as:
  myFunc(param1, param2) {
    return [param1, param2];
  },

  // an outer variable
  film,

  movie: film,
  // an outer variable with a different property name.
};

```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Strings and Template Literals [ES6]](07-template-literals.md)  

▶️ [Arrow Function [ES6]](09-arrow-functions.md)

<!-- PAGINATION_END -->
&nbsp;
