## `Promise.allSettled()`

**`Promise.allSettled()` returns a new promise that resolves with an array of objects that describe the outcome of each promise in the iterable, whether fulfilled or rejected.**

`Promise.allSettled()` takes an array of promises and returns a new promise that resolves with an array of objects that describe the state of each input promise (whether resolved or rejected and with respective value/reason).

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

---

---

<!-- PAGINATION_START -->

**Parent:** [6. Asynchronous Javascript](..)
**Previous:** [`Promise.race()`](05-promise-race.md)
**Next:** [`Promise.any()`](07-promise-any.md)

<!-- PAGINATION_END -->
