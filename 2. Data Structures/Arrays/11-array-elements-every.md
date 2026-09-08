## Data Structures > Array > Check Expression > **`every()`**

> 🎯 The **`every()`** method tests whether *all* elements in the array pass the test implemented by the provided callback function. It returns a boolean value (`true` or `false`).
>
> *Returns **`true`** ONLY if **every** element in the array satisfies the condition.*

---
&nbsp;

### 1. Using **`every()`**

The method signature is similar to `forEach()`, `map()`, and `some()`.

```javascript
const txn = [1900, -99000, 10000, -178000, 78000];

// Checks if ALL amounts are greater than 0
const check = txn.every(amt => amt > 0);

if (check) {
  alert(`All txns are positive.`);
} else {
  alert(`Not all txns are positive.`);
}
// Output will be: "Not all txns are positive."
```

### 2. Reusable Callback Functions (Best Practice)

A better approach is to write your callback condition as a separate function. This allows you to adhere to the DRY (Don't Repeat Yourself) principle and reuse the same logic across different array methods.

```javascript
// Define a reusable callback function
const isDeposit = mov => mov > 0;

// Reusing it across different methods:

// 1. Check if ALL transactions are deposits
const allDeposits = txn.every(isDeposit); 
console.log(allDeposits); // false

// 2. Check if ANY transaction is a deposit
const hasDeposits = txn.some(isDeposit); 
console.log(hasDeposits); // true

// 3. Extract ONLY the deposits into a new array
const onlyDeposits = txn.filter(isDeposit); 
console.log(onlyDeposits); // [1900, 10000, 78000]
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Elements Some](10-array-elements-some.md)  

▶️ [Data Structures > Arrays > Array Element Includes](12-array-element-includes.md)

<!-- PAGINATION_END -->
&nbsp;
