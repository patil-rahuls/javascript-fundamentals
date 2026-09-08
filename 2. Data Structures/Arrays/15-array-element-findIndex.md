## Data Structures > Array > Check Expression > **`findIndex()`**

> 🎯 The **`findIndex()`** method returns the **index** of the first element in an array that satisfies a provided testing function (an expression). If no elements satisfy the testing function, it returns **`-1`**.
>
> *The method signature is similar to the `forEach()` method.*

---
&nbsp;

### 1. Using **`findIndex()`**

This method is particularly powerful when working with arrays of objects, where you need to find the position of an object based on one of its properties.

```javascript
const accounts = [
  { owner: "rahul", bal: 66345 },
  { owner: "hitesh", bal: 74783 },
  { owner: "aajesh", bal: 59623 },
];

// Find the index of the first account with a balance greater than 70,000
const accIndex = accounts.findIndex(acc => acc.bal > 70000);

console.log(accIndex);
// 1

// A common use case: using the found index to mutate the array (e.g., delete the item)
const fetchedAccount = accounts.splice(accIndex, 1);

console.log(fetchedAccount);
/*
[
  {
    owner: "hitesh",
    bal: 74783
  }
]
*/
```
*(Note: `splice()` always returns an array of the removed elements, which is why the output is wrapped in `[ ]`)*

---

### 💡 **`indexOf()`** vs. **`findIndex()`**

While both methods return the index of an element, they serve different purposes:

*   **`indexOf(value)`** checks for strict equality (`===`). It is best for simple, flat arrays (like strings or numbers) where you know the exact value you are looking for.
*   **`findIndex(callback)`** checks against an expression. It is essential when dealing with complex arrays (like arrays of objects) or when you need to match a condition rather than an exact value.
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Element Index of](14-array-element-indexOf.md)  

▶️ [Data Structures > Arrays > Array Value Reduce](16-array-value-reduce.md)

<!-- PAGINATION_END -->
&nbsp;
