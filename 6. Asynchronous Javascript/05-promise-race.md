## Asynchronous Javascript > **`Promise.race()`**

> 🎯 **Promise combinators** are methods that operate on **multiple promises** and return a **new promise**.  
> **`Promise.race()`** is **settled as soon as any** of the promises you feed it **settles** — whether that first settlement is **fulfilled** or **rejected**.

Three Promise Combinators:
- **`Promise.race()`**
- **`Promise.allSettled()`**
- **`Promise.any()`**

---
&nbsp;

### **Promise.race(iterable)**

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
  // We don't need to write `await` while writing `return`.
};

const result = await Promise.race([promise1, promise2, promise3()]);
// Notice the third element: it is an *async function call*
// (it returns a Promise).
```

> ⚠️ **Important Note:**  
> `await Promise.race(...)` must run **inside an `async` function** (or a module with top-level `await`).  
> The **first promise to settle** wins the race — here that is usually **`promise1`** (1 second, fulfilled).

### Array Order Does **Not** Matter

```javascript
// Promise 1
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1"), 2000);
});

// Promise 2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error Promise 2"), 2000);
});

// Promise 3
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3"), 2000);
});

const res = await Promise.race([promise2, promise1, promise3]);

// Output:
// "Promise 1"
```

> ⚠️ **IMP:** The **order of promises in the array** passed to **`Promise.race()`** does **not** matter.

All three timeouts are **2000ms**. They are scheduled **one after another**, so the **first timeout scheduled** (`promise1`) is the first one that fires — it **resolves first** (time-wise), even though it is **not first** in the array.

**💡 Further reading:**  
[Promise.race returning resolved promise instead of first rejected promise](https://stackoverflow.com/questions/77850907/promise-race-returning-resolved-promise-instead-of-first-rejected-promise)


> ⚠️
> 
> **`Promise.race()`** does **not** wait for every promise.  
> As soon as **one** promise **fulfills or rejects**, the race is over.  
> If the winner **rejects**, the whole **`Promise.race()`** **rejects** — handle it with **`try...catch`** (or `.catch()`).

---
&nbsp;
<!-- PAGINATION_START -->

📁 [6. Asynchronous Javascript](../6.%20Asynchronous%20Javascript/)

◀️ [**Promise.all()** - Promises in Parallel](04-promises-all.md)

▶️ [**Promise.allSettled()**](06-promise-allSettled.md)

<!-- PAGINATION_END -->
&nbsp;
