## `Promise.any()`

> ***`Promise.any` is settled as soon as any of the promises you feed it is `fulfilled` or when they are `all rejected`, in which case it's rejected with an `AggregateError` array.***

`Promise.any()` takes an array of promises and returns a new promise that resolves as soon as one of the input promises resolves. If all the input promises reject, it returns a rejected promise with an `AggregateError` array.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, 'Promise 1');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Promise 2');
});

Promise
  .any([promise1, promise2])
  .then(result => console.log(result));

// Output
//  'Promise 2'
```

---
