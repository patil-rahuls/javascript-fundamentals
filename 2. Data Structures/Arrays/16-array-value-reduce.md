## Data Structures > Array > Array to Single Value > **`reduce()`**

> 🎯 The **`reduce()`** method executes a user-supplied "reducer" callback function on each element of the array, passing in the return value from the calculation on the preceding element. 
> 
> *It "reduces" or accumulates all the array values down to **one single value** (not an array).*

---
&nbsp;

### 1. The Anatomy of **`reduce()`**

The `reduce()` method takes two main arguments:
1.  **The Callback Function:** Receives 4 parameters: `(accumulator, currentItem, index, entireArray)`
2.  **The Initial Value** *(optional but highly recommended)*: The starting value of the accumulator.

> ⚠️ **Crucial Rule:** On every iteration, you **MUST return** a value. Whatever is returned becomes the new value of the `accumulator` for the next iteration.

---

### 2. Example: Summing an Array

```javascript
const numbers = [34, 5, 6, 7, 8, 88, 2, 89, 100];

// Using explicit block syntax
const total = numbers.reduce((acc, val, index, arr) => {
  return acc + val;
}, 0); 
// '0' is the initial value of the accumulator ('acc')

console.log(total); // 339

// ✅ Cleaner approach using an Arrow Function
const total2 = numbers.reduce((acc, val) => acc + val, 0);
```

**How the Accumulator works here:**
*   **Iteration 1:** `acc` is `0` (initial value), `val` is `34`. Returns `0 + 34 = 34`.
*   **Iteration 2:** `acc` is `34`, `val` is `5`. Returns `34 + 5 = 39`.
*   *...and so on, holding the running total until the end.*

---

### 3. Example: Getting the Maximum Value

You can use `reduce()` for much more than just math operations. Here is how you can use it to find the maximum value in an array.

*(Notice how we use the first element of the array as the initial value instead of 0)*

```javascript
const numbers2 = [34, 5, 6, 7, 8, 88, 2, 89, 100];

const max = numbers2.reduce((acc, curr_amount) => {
  // If the accumulator is greater, keep it. 
  // Otherwise, the current amount becomes the new accumulator.
  if (acc > curr_amount) {
    return acc;
  } else {
    return curr_amount;
  }
}, numbers2[0]); 
// Initial value is 34 (numbers2[0])

console.log(max);
// 100
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures Arrays Array Element Find Index](15-array-element-findIndex.md)  

▶️ [Data Structures Arrays Array String Split Join](17-array-string-split-join.md)

<!-- PAGINATION_END -->
&nbsp;
