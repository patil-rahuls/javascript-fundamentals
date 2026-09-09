## Asynchronous Javascript > ## **`Promise.allSettled()`**

> 🎯 **Promise combinators** are methods that operate on **multiple promises** and return a **new promise**.  
> **`Promise.allSettled()`** returns a promise that **always resolves** with an **array of outcome objects** — one for each input promise — whether that promise was **fulfilled** or **rejected**.

Three Promise Combinators:
- **`Promise.race()`**
- **`Promise.allSettled()`**
- **`Promise.any()`**

---
&nbsp;

### 1. How **`Promise.allSettled()`** Works

It takes an **array of promises** and returns a **new promise** that resolves with an array of objects describing the **state** of each input promise:

- **Fulfilled** → `{ status: 'fulfilled', value: <resolved value> }`
- **Rejected** → `{ status: 'rejected', reason: <rejection reason> }`

Unlike **`Promise.all()`**, a single rejection does **not** short-circuit the rest.

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Promise 1");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "Promise 2");
});

const results = await Promise.allSettled([promise1, promise2]);

console.log(results);
// [
//   { status: 'fulfilled', value: 'Promise 1' },
//   { status: 'rejected', reason: 'Promise 2' }
// ]
```

> ⚠️ **Important Note:**  
> `await Promise.allSettled(...)` must run **inside an `async` function** (or a module with top-level `await`).  
> The returned promise **never rejects** because of a rejected input — it always **resolves** with the full outcomes array.

> ⚠️
> 
> Use **`Promise.allSettled()`** when you need **results from every promise**, even if some fail.  
> Use **`Promise.all()`** when **any** failure should fail the whole operation.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [6. Asynchronous Javascript](../6.%20Asynchronous%20Javascript/)

◀️ [**Promise.race()**](05-promise-race.md)

▶️ [**Promise.any()**](07-promise-any.md)

<!-- PAGINATION_END -->
&nbsp;
