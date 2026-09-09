## OOP Javascript > Inheritance - ES6 Classes

> 🎯 **ES6 Classes** greatly simplify inheritance compared to traditional constructor functions. The `extends` keyword automatically sets up the entire prototype chain behind the scenes, and the `super()` method cleanly handles calling the parent class's constructor.

---
&nbsp;

### 1. Automatic Prototype Linking

Earlier, we saw the manual, 5-step process required for inheritance using constructor functions (borrowing the constructor, linking prototypes via `Object.create()`, resetting the constructor property, etc.). 

With ES6 Classes, all of this boilerplate is completely abstracted away. The `extends` keyword automatically links the child's prototype to the parent's prototype.

### 2. The `constructor()` and `super()` Rules

*   **`constructor()` Omission:** A constructor is mandatory in a parent class. However, you can entirely omit the `constructor()` in a child class if the child requires the exact same parameters as the parent. JavaScript will automatically call `super()` with all passed arguments.
*   **The `super()` Keyword:** If you *do* define a `constructor()` in the child class, you **must** call `super()` inside it. `super()` executes the parent class's constructor function.
*   **Order Matters:** `super()` must be called **before** you attempt to use the `this` keyword inside the child's constructor.

### 3. Syntax and Method Overriding

Child classes can easily override parent methods simply by defining a method with the exact same name.

```javascript
// Assuming 'Furniture' is a previously defined ES6 Class
class Sofa extends Furniture {
  constructor(brand, margin, returnable) {
    // 1. Call the parent constructor using super()
    // This MUST happen first before accessing 'this'
    super(brand, margin);
    
    // 2. Set child-specific properties
    this.returnable = returnable;
  }

  // 3. Overriding the parent's getCommisionTax() function
  getCommisionTax() {
    return 0.24 * this.margin;
  }
}

// Instantiating the child class
const s2 = new Sofa("Casacraft", 20, true);

s2.getCommisionTax();
// This will successfully call the overridden method defined in 'Sofa', 
// rather than the original method from 'Furniture'.
```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [5. OOP Javascript](../5.%20OOP%20Javascript/)

◀️ [Inheritance - Constructor Function](07-inheritance-constructor-fn.md)  

▶️ [Inheritance - **Object.create()**](09-inheritance-Object.create.md)

<!-- PAGINATION_END -->
&nbsp;
