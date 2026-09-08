## Data Structures > Array > Method Chaining

> 🎯 Because array data transformation methods (like **`map()`** and **`filter()`**) return new arrays, they can be chained together sequentially. This forms a continuous data processing **pipeline**.

---
&nbsp;

### 1. Creating a Pipeline

In this example, we take an array of numbers, filter out the negative ones, multiply the remaining by a factor, and finally sum them all up.

> ⚠️ **Order Matters:** Methods that return an array (like `filter` and `map`) can continue the chain. A method that returns a single value (like `reduce`) must be placed at the **end** of the chain.

```javascript
const arr = [122, 24, 355, -55, 780, -999];
const multiplier = 1.1;

const transformedData = arr
  .filter((val) => val > 0)                  // Returns: [122, 24, 355, 780]
  .map((val) => val * multiplier)            // Returns: [134.2, 26.4, 390.5, 858]
  .reduce((acc, val) => acc + val, 0);       // Returns: 1409.1000000000004

console.log(transformedData);
// 1409.1000000000004
```

---

### 2. Debugging a Chain

When an error occurs in a long pipeline, it can be difficult to pinpoint which method caused it. 

To debug, you can inspect the intermediate arrays returned at each step. Remember that the callback functions for these methods accept a **third parameter (the entire array)**. You can log this parameter to see the exact state of the data at that specific point in the chain.

```javascript
const transformedData2 = arr
  .filter((mov) => mov > 0)
  .map((mov, i, currentArr) => {
    
    // 🐞 Inspecting the array returned by the previous filter() step
    console.log(currentArr); 

    return mov * multiplier;
  })
  .reduce((acc, val) => acc + val, 0);

console.log(transformedData2);
// Logs the intermediate array 4 times (once for each element mapped):
// [122, 24, 355, 780]
// [122, 24, 355, 780]
// [122, 24, 355, 780]
// [122, 24, 355, 780]
// Final Output: 1409.1000000000004
```

---

### 3. Best Practices & Caveats

> 🚨 **Remarks about chaining:**
>
> 1.  **Don't Overuse It:** Chaining can cause performance issues if you are processing massive arrays. Iterating over a huge array three separate times (e.g., `filter` -> `map` -> `map`) is slower than doing all the logic in a single `reduce()` or standard `for...of` loop.
> 2.  **Beware of Mutating Methods:** Be extremely careful if you chain methods that mutate the underlying array (like **`splice()`**, **`reverse()`**, or **`sort()`**). It can lead to unpredictable side effects and bugs that are hard to trace in large applications.
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array String Split Join](17-array-string-split-join.md)  

▶️ [Data Structures > Arrays > Which Array Method to Use](19-which-array-method-to-use.md)

<!-- PAGINATION_END -->
&nbsp;
