## Enhanced Object Literals (ES6)

> 🎯 **Literals** represent fixed values in JavaScript that you *literally* provide in your script. 
>
> ES6 introduced "Enhanced Object Literals" to make writing and initializing objects much more concise and dynamic.

---
&nbsp;

### 1. Computed Properties
ES6 allows you to dynamically compute object property names during initialization using bracket notation **`[ ]`**.

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

### 2. Shorthand for Methods and Properties
ES6 provides a shorter, cleaner syntax for defining methods and assigning existing variables as properties within an object.

```javascript
let film = "Titanic";

const myObj = {
  // ❌ Old way (Verbose method definition):
  oldFunc: function (param1, param2) {
    return [param1, param2];
  },

  // ✅ ES6 Shorthand for Methods:
  myFunc(param1, param2) {
    return [param1, param2];
  },

  // ✅ ES6 Shorthand for Properties (Property name matches the variable name):
  film, 

  // Standard property assignment (Different property name for the variable):
  movie: film, 
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
