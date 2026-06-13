## `Promise.race()`

**Promise Combinators** are methods that operate on multiple promises and return a new promise.
Three Promise Combinators:

- **Promise.race()**,
- **Promise.allSettled()**
- **Promise.any()**
  
**_`Promise.race` is settled as soon as any of the promises you feed it `settled`, no matter whether they are _fulfilled_ or _rejected_._**
  
> Example 1: `Promise.race(iterable)`

```javascript
// Promise 1
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1"), 1000);
});

// Promise 2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error Promise 2"), 2000);
});

// Promise 3 (an async function)
const promise3 = async () => {
  const response = await fetch(".../api/users?page=1");

  return response.json();
  // We don't need to write 'await'
  // while writing return.
};

const result = await Promise.race([promise1, promise2, promise3()]);
// Notice the third element of the above
// array provided to Promise.race().
// Its an async function call.
```

> Example 2:
> 
> ```javascript
> // Promise 1
> const promise_1 = new Promise((resolve, reject) => {
>   setTimeout(() => resolve("Promise 1"), 2000);
> });
> 
> // Promise 2
> const promise_2 = new Promise((resolve, reject) => {
>   setTimeout(() => reject("Error Promise 2"), 2000);
> });
> 
> // Promise 3
> const promise_3 = new Promise((resolve, reject) => {
>   setTimeout(() => resolve("Promise 3"), 2000);
> });
> 
> const res = await Promise.race([promise2, promise1, promise3]);
> // Output -
> // Promise 1
> ```
> 
> _In the above example, observe the Order in which I have added the promises in the array passed to the `Promise.race()`._
>
> _IMP - The order of the promises in the array you provide to `Promise.race()` DOES NOT MATTER._
>
> _In the above code, the first promise (time-wise) to settle is `Promise 1`, because you're scheduling three timeouts in a row, all of them with a timeout of 2000ms, so the first one scheduled is the first one that gets called, thereby resolving its promise first (time-wise)._
>
>
> More here - https://stackoverflow.com/questions/77850907/promise-race-returning-resolved-promise-instead-of-first-rejected-promise

&nbsp;

---

---

<!-- PAGINATION_START -->

**Parent:** [6. Asynchronous Javascript](../6.%20Asynchronous%20Javascript/)

**Previous:** ← [`Promise.all()` - Promises in Parallel](04-promises-all.md)

**Next:** → [`Promise.allSettled()`](06-promise-allSettled.md)

<!-- PAGINATION_END -->
