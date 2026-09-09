## OOP Javascript > Inheritance - Constructor Function

> 🎯 Inheritance between constructor functions allows a child class to inherit properties and methods from a parent class. This is achieved by calling the parent constructor using `call()` (to inherit instance properties) and explicitly linking their prototypes using `Object.create()` (to inherit methods).

---
&nbsp;

### 1. Inheriting Properties (Constructor Borrowing)

To inherit properties from a parent constructor, we call the parent function from inside the child function using the `call()` or `apply()` methods. This ensures the `this` keyword correctly points to the newly created child instance.

```javascript
// Parent Class
const Furniture = function (brand, margin) {
  this.brand = brand;
  this.margin = margin;
};

Furniture.prototype.getCommisionTax = function () {
  console.log(0.18 * this.margin);
};

// Child Class
const Sofa = function (brand, margin, returnable) {
  // Calling Parent's constructor function using 'call'
  // We cannot use Furniture(brand, margin) directly because it's a regular function call and 'this' would be undefined.
  Furniture.call(this, brand, margin);
  
  // Child-specific property
  this.returnable = returnable;
};
```

### 2. Inheriting Methods (Linking Prototypes)

To inherit methods, we need to make `Furniture.prototype` the prototype (`__proto__`) of `Sofa.prototype`. 

```javascript
// ❌ Incorrect
// Sofa.prototype = Furniture.prototype;
// This assigns the exact same object reference. Modifying Sofa's prototype would also modify Furniture's prototype!

// ✅ Correct
Sofa.prototype = Object.create(Furniture.prototype);

// Now we can add child-specific methods to the successfully linked prototype chain
Sofa.prototype.info = function () {
  console.log(`Commission on ${this.brand} Sofa is${this.margin}`);
};

const s1 = new Sofa("Neelkamal", 15, false);
s1.getCommisionTax(); // Successfully inherited from Furniture.prototype
```

*When we call a method, JavaScript performs a lookup through the prototype chain. It checks `Sofa.prototype` first, and if it's not there, it travels up the chain to `Furniture.prototype`.*

### 3. Resetting the Constructor Property

When we use `Object.create(Furniture.prototype)`, we completely overwrite `Sofa.prototype`. Because of this, its `.constructor` property incorrectly points to the parent (`Furniture`). 

We must manually reset this back to the child constructor.

```javascript
console.dir(Sofa.prototype.constructor);
// Furniture (Incorrect!)

// Resetting back to original
Sofa.prototype.constructor = Sofa;

// Checking instances works correctly because the prototype chain is intact:
console.log(s1 instanceof Sofa);      // true
console.log(s1 instanceof Furniture); // true
```

### 4. Putting It All Together & Function Overriding

Here is a complete example showing property inheritance, method inheritance, constructor resetting, and **function overriding** (where a child provides its own implementation of a parent method).

```javascript
// 1. Parent Constructor
const Car = function(make, currentSpeed) {
  this.make = make;
  this.currentSpeed = currentSpeed;
};

Car.prototype.accelerate = function() {
  this.currentSpeed += 20;
  console.log(`${this.make} is going @ ${this.currentSpeed} KM/H`);
};

// 2. Child Constructor
const EV = function(make, currentSpeed, charge) {
  Car.call(this, make, currentSpeed); // Inherit properties
  this.charge = charge;
};

// 3. Link the Prototypes
EV.prototype = Object.create(Car.prototype);

// 4. Reset the constructor property
EV.prototype.constructor = EV;

// 5. Add Child-specific methods
EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
};

// 6. Function Overriding
// JavaScript finds this method first on EV.prototype before reaching Car.prototype
EV.prototype.accelerate = function() {
  this.currentSpeed += 20;
  this.charge--;
  return `${this.make} is going at ${this.currentSpeed} KM/H, with a charge of${this.charge} %`;
};

const myTesla = new EV("Tesla", 120, 90);
console.log(myTesla.accelerate());
// "Tesla is going at 140 KM/H, with a charge of 89 %"
```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [5. OOP Javascript](../5.%20OOP%20Javascript/)

◀️ [Static](06-static.md)

▶️ [Inheritance - **ES6 Classes**](08-inheritance-ES6-class.md)

<!-- PAGINATION_END -->
&nbsp;
