## `Promise.allSettled()`

**Promise Combinators** are methods that operate on multiple promises and return a new promise.
Three Promise Combinators:

- **Promise.race()**,
- **Promise.allSettled()**
- **Promise.any()**

**`Promise.allSettled()` returns a new promise that resolves with an array of objects that describe the outcome of each promise in the iterable, whether fulfilled or rejected.**

It takes an array of promises and returns a new promise that resolves with an array of objects that describe the state of each input promise (whether resolved or rejected and with respective value/reason).

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Promise 1");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "Promise 2");
});

const result = await Promise.allSettled([promise1, promise2]);

console.log(results);
// [
//  {status: 'fulfilled', value: 'Promise 1'},
//  {status: 'rejected', reason: 'Promise 2'}
// ]
```

&nbsp;
---

---

<!-- PAGINATION_START -->

**Parent:** [6. Asynchronous Javascript](../6.%20Asynchronous%20Javascript/)

**Previous:** ← [`Promise.race()`](05-promise-race.md)

**Next:** → [`Promise.any()`](07-promise-any.md)

<!-- PAGINATION_END -->
