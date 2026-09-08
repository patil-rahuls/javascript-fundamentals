## Data Structures > Array > Check Expression > **`some()`**

> 🎯 The **`some()`** method tests whether *at least one* element in the array passes the test implemented by the provided callback function. It returns a boolean value (`true` or `false`).
> 
> *The method signature is similar to the `forEach()` method.*

---
&nbsp;

### 1. Using **`some()`**

While `includes()` is great for finding specific values, it only checks for strict equality. **`some()`** is much more powerful because it evaluates an **expression or condition**.

```javascript
const salaries = [39, 99, 100, 178, 78, 89.9];

// Checks if any salary in the array is greater than 100
const higherSalariesExists = salaries.some((mov) => mov > 100);

console.log(higherSalariesExists); 
// true (because 178 > 100)
```

### 💡 `includes()` vs. `some()`

*   **`includes(value)`** checks for strict equality (e.g., "Does this array contain exactly the number `100`?").
*   **`some(callback)`** checks for a condition (e.g., "Does this array contain *any* number greater than `100`?").

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Map](09-array-array-map.md)  

▶️ [Data Structures > Arrays > Array Elements Every](11-array-elements-every.md)

<!-- PAGINATION_END -->
&nbsp;
