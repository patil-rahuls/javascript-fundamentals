## Asynchronous Javascript > **`Promise.race()`** vs **`Promise.any()`**

> 🎯 Both are **Promise combinators**, but they settle for **different reasons**.  
> **`Promise.race()`** cares about the **first settlement**.  
> **`Promise.any()`** cares about the **first fulfillment**.

---
&nbsp;

### 1. When They Settle

1. **`Promise.race()`** is settled as soon as **any** of the promises you feed it **settles** — whether that settlement is **fulfilled** or **rejected**.

2. **`Promise.any()`** is settled as soon as **any** of the promises you feed it is **fulfilled**.  
   If they are **all rejected**, it rejects with an **`AggregateError`**.

### 2. How Rejection Behaves

3. **`Promise.race()`** rejects when **one** of the promises is **rejected first**.  
   **`Promise.any()`** does **not** reject in that case, because another promise may still **fulfill**.

4. **`Promise.race()`** rejection reason = the reason of the **first rejected** promise.  
   **`Promise.any()`** rejection reason = an **`AggregateError`** (only when **all** promises reject).

### 3. Quick Comparison

| | **`Promise.race()`** | **`Promise.any()`** |
|---|---|---|
| **Wins on** | First to **settle** | First to **fulfill** |
| **Rejects when** | First settlement is a **rejection** | **All** promises **reject** |
| **Rejection reason** | That single rejection reason | **`AggregateError`** |
---
&nbsp;

**💡 Tip:**  
- Use **`Promise.race()`** for timeouts / “first response wins, even if it fails”.  
- Use **`Promise.any()`** when you only want the **first success**.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [6. Asynchronous Javascript](../6.%20Asynchronous%20Javascript/)

◀️ [**Promise.any()**](07-promise-any.md)

▶️ [**Modules**](../7.%20Modules/)

<!-- PAGINATION_END -->
&nbsp;
