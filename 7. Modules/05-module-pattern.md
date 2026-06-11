## Module Patterns [ES6]

The Module Pattern is a design pattern in JavaScript that allows you to create encapsulated and reusable code by creating a self-contained module that can expose public APIs to the outside world while keeping the implementation details hidden from other parts of your code.

### Use of `IIFE` to create a Self-Contained Module.

```javascript
const myModule = (function () {
  // private variable
  const message = "Hello World!";

  // private function
  function showMessage() {
    console.log(message);
  }

  // public API
  return {
    displayMessage() {
      showMessage();
    },
  };
})();

myModule.displayMessage();
// "Hello World!"
```

In the example above, we create a new module by defining an `IIFE` that returns an object with the public API of our module.
Inside the `IIFE`, we define private variables and functions that are not exposed to the outside world.
The `message` variable and the `showMessage()` function are private, meaning they cannot be accessed from outside the module.
The `displayMessage()` function is part of the public API, so it can be accessed from outside the module.
When we call `myModule.displayMessage()`, the `displayMessage()` function calls the private `showMessage()` function, which logs the string `"Hello World!"` in the console.

The Module Pattern allows us to create reusable and encapsulated code, avoiding potential naming conflicts with other parts of our code.

It also helps to keep our code organized and easier to maintain by hiding implementation details.
**This is how are modules implemented and work behind the scenes in javascript.**

### Revealing Module Pattern:

```javascript
const ShoppingCart = (function () {
  const cart = [];

  const addToCart = function (product, qty) {
    cart.push({ product, qty });
    console.log(`${qty} ${product}(s) Added.`);
  };

  const getCart = function () {
    console.log(cart.map((p) => `${p.product} - ${p.qty}`));
  };

  // Revealing some private functionalities
  return {
    addToCart,
    getCart,
  };
})();

ShoppingCart.addToCart("Apple", 10);
//  '10 Apple(s) Added.'

ShoppingCart.addToCart("Banana", 12);
//  '12 Banana(s) Added.'

console.log(ShoppingCart.getCart());
//  'Apple - 10'
//  'Banana - 12'
```

Observe that the `IIFE` has been executed, but still the array `ShoppingCart.cart[]` keeps getting updated; this hapens because of `closures`.

---

---

<!-- PAGINATION_START -->

**Parent:** [7. Modules](..)
**Previous:** [`import()` vs `require()`](04-import-vs-require.md)
**Next:** _None_

<!-- PAGINATION_END -->
