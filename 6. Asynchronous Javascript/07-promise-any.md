## Asynchronous Javascript > **`Promise.any()`**

> 🎯 **Promise combinators** are methods that operate on **multiple promises** and return a **new promise**.  
> **`Promise.any()`** is settled as soon as **any** of the promises you feed it is **fulfilled**.  
> If **all** of them are **rejected**, it rejects with an **`AggregateError`**.

Three Promise Combinators:
- **`Promise.race()`**
- **`Promise.allSettled()`**
- **`Promise.any()`**

---
&nbsp;

### 1. How **`Promise.any()`** Works

It takes an **array of promises** and returns a **new promise** that:

- **resolves** as soon as **one** input promise **fulfills** (with that value)
- **rejects** only if **every** input promise **rejects** — with an **`AggregateError`** containing all rejection reasons

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(reject, 500, "Promise 1");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Promise 2");
});

Promise.any([promise1, promise2]).then((result) => console.log(result));

// Output:
// "Promise 2"
```

> ⚠️ **Important Note:**  
> Rejections are **ignored** until a fulfillment happens.  
> Only when **all** promises reject does **`Promise.any()`** reject (with **`AggregateError`**).

### 2. Compared with **`Promise.race()`**

| Method | Wins on | Rejects when |
|---|---|---|
| **`Promise.race()`** | First to **settle** (fulfill *or* reject) | That first settlement is a rejection |
| **`Promise.any()`** | First to **fulfill** | **All** promises reject |
---

&nbsp;

**💡 Tip:**  
Use **`Promise.any()`** when you only care about the **first success**.  
Use **`Promise.race()`** when you care about the **first settlement**, success or failure.


> ⚠️ 
>
>Handle rejection with **`.catch()`** or **`try...catch`**.  
> On total failure, inspect **`error.errors`** on the **`AggregateError`** to see every rejection reason.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [6. Asynchronous Javascript](../6.%20Asynchronous%20Javascript/)

◀️ [**Promise.allSettled()**](06-promise-allSettled.md)

▶️ [**Promise.race()** vs **Promise.any()**](08-promise-race-vs-any.md)

<!-- PAGINATION_END -->
&nbsp;
