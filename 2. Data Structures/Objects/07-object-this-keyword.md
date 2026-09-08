## Data Structures > Object > **`this`** Keyword

> 🎯 The **`this`** keyword inside an object's method refers to the **current or calling object**. It allows a method to access, mutate, or invoke other properties and methods belonging to that exact same object.

---
&nbsp;

### 1. Accessing and Mutating Properties

Consider this object as an example. When `myAge()` is called, `this` points to `myObj`, allowing the method to calculate and update the `age` property directly.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 0,

  myAge() {
    // 'this' points to myObj. We are mutating the object's age property here.
    this.age = 2049 - 2024; 
    return this.age;
  },
};
```

### 2. Accessing Other Methods

We use the **`this`** keyword not just for standard properties, but also to invoke other methods within the same object.

```javascript
myObj.info = function () {
  // Accessing a property (this.firstName) AND a method (this.myAge())
  return `${this.firstName} is${this.myAge()} yrs old.`;
};

// Invoking the method
console.log(myObj.info());
// "Rahul is 25 yrs old."
```
*In the example above, because `myObj.info()` is invoked with `myObj` to the left of the dot (as the receiver), **`this`** strictly points to `myObj`.*

---
&nbsp;

<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures > Objects > Object Getter Setter](06-object-getter-setter.md)  

▶️ [Data Structures > Objects > Object Loop](08-object-loop.md)

<!-- PAGINATION_END -->
&nbsp;