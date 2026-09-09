## Asynchronous Javascript > **`Promise.all()`** - Promises in Parallel

> 🎯 Running promises **in parallel** means executing multiple asynchronous operations **at the same time**, without waiting for any of them to complete before starting the next one.  
> This can greatly improve performance when there are many **independent** and time-consuming tasks.

---
&nbsp;

### 1. Sequential `await` _(Looks Parallel, Runs in Sequence)_

> ⚠️ Always wrap **`async`** functions in a **`try...catch`** block.

```javascript
const myFunc = async function (page1, page2, page3) {
  try {
    const response1 = await fetch(".../api/users?page=" + page1);
    const response2 = await fetch(".../api/users?page=" + page2);
    const response3 = await fetch(".../api/users?page=" + page3);

    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();

    console.log([data1, data2, data3]);
  } catch (err) {
    console.log(err.message);
  }
};

myFunc("2", "4", "6");
```

> ⚠️ **Important Note:**  
> This gives the required results, **but** each later `response` waits for the previous one to complete. It *looks* asynchronous, but it actually runs **in sequence** (like synchronous code).


### 2. Running Promises in Parallel with **`Promise.all()`**

**`Promise.all()`** is a **static method**.  
It takes an **array of promises** and returns a **single promise** that:
- **resolves** with an **array of results** (in the same order) when *all* promises succeed
- **rejects** immediately if *any one* promise rejects

```javascript
const myFunc2 = async function (page1, page2, page3) {
  try {
    const data = await Promise.all([
      fetch(".../api/users?page=" + page1),
      fetch(".../api/users?page=" + page2),
      fetch(".../api/users?page=" + page3),
    ]);

    // Each item is a Response. `.json()` also returns a Promise,
    // so we run those in parallel too:
    const finalData = await Promise.all([
      data[0].json(),
      data[1].json(),
      data[2].json(),
    ]);

    console.log(finalData);
  } catch (err) {
    console.log(err.message);
  }
};
```

### 3. The Older `.then()` Version

```javascript
Promise.all([
  fetch(".../api/users?page=" + page1),
  fetch(".../api/users?page=" + page2),
  fetch(".../api/users?page=" + page3),
])
  .then((results) => console.log(results))
  .catch((err) => console.log(err.message));
```

**💡 Alternative:**  
Prefer **`async/await` + `Promise.all()`** over chaining `.then()` — it is cleaner and easier to read.

### 4. Important Rule

> ⚠️ If **one** promise inside **`Promise.all()`** rejects, the **entire** `Promise.all()` is rejected.  
> Always handle this with **`try...catch`** (or `.catch()`).

---
&nbsp;
<!-- PAGINATION_START -->

📁 [6. Asynchronous Javascript](../6.%20Asynchronous%20Javascript/)

◀️ [Returning values from **Async/Await**](03.2-async-await-ES2017-return.md)

▶️ [**Promise.race()**](05-promise-race.md)

<!-- PAGINATION_END -->
&nbsp;
