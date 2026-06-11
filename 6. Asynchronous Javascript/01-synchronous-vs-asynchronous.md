## Synchronous vs Asynchronous

### Synchronous

Synchronous code is executed in sequence. A statement has to wait for the earlier statement to get executed.

Long runing operations `block` the code execution.
Example : Blocking code _(synchronous)_

```javascript
console.log("One");
console.log("Two");
console.log("Three");

// Outputs:
// 'One', 'Two', 'Three'
```

### Asynchronous

Long runing operations can be made to "execute in the background". While rest of the code executes normally without ever being blocked.
Asynchronous code is `non-blocking`.
Example

```javascript
console.log("One");
setTimeout(() => console.log("Two"), 100);
console.log("Three");

// Outputs:
// 'One', 'Three', 'Two'
```

AJAX(Asynchronous Javascript and XML) is asynchronous.

Some examples of this are network requests, long-running calculations, file system operations etc. Using asynchronous code in the browser ensures that the page remains responsive and the user experience is mostly unaffected.
Not all callback functions make code asynchronous.

### Callback Hell

When we have multiple asynchronous operations one after the other by "nesting" the callbacks, we get a a pyramid structure like code called 'callback hell'.

Every callback depends/waits for the previous callback.

Affects the readability and maintainability of the code.
Example: Nested Promises' callbacks _(Callback Hell)_

```javascript
asyncOperation1(function (result1) {
  asyncOperation2(result1, function (result2) {
    asyncOperation3(result2, function (result3) {
      asyncOperation4(result3, function (result4) {
        // Do something with result4
      });
    });
  });
});
```

#### We avoid the Callback Hell by using `Promises`:

```javascript
asyncOperation1()
  .then((result1) => asyncOperation2(result1))
  .then((result2) => asyncOperation3(result2))
  .then((result3) => asyncOperation4(result3))
  .then((result4) => {
    // Do something with result4
  })
  .catch((error) => {
    // Handle errors
  });
```

---

---

<!-- PAGINATION_START -->

**Parent:** [6. Asynchronous Javascript](..)
**Previous:** _None_
**Next:** [Promises [ES6]](02.1-promise.md)

<!-- PAGINATION_END -->
