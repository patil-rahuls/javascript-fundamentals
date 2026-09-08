## Data Structures > Array > Check Expression > **`find()`**

> 🎯 The **`find()`** method retrieves the **first element** in an array that satisfies a given condition (implemented via a callback function). 
> 
> *It returns the element itself, not an array. If no element satisfies the condition, it returns `undefined`.*

---
&nbsp;

### 1. Using **`find()`**

The method signature is similar to `forEach()`, `map()`, etc., receiving `(currentItem, index, entireArray)`. The callback must evaluate to a boolean (truthy/falsy).

```javascript
const myArr = [55, "rahul", "hitesh", "aajesh"];

// Finds the first element that is of type "number"
const foundNum = myArr.find(itm => typeof itm === "number");

console.log(foundNum);
// 55
```

### 2. Finding Objects in an Array

**`find()`** is incredibly useful in real-world applications for extracting a specific object from a data array (e.g., finding a user by their ID or username).

```javascript
const accounts = [
  { owner: "rahul", bal: 66345 },
  { owner: "hitesh", bal: 74783 },
  { owner: "aajesh", bal: 59623 },
];

// Finds the exact account object where the owner is "rahul"
const account = accounts.find(acc => acc.owner === "rahul");

console.log(account);
/*
{
  owner: "rahul",
  bal: 66345
}
*/
```

---

### 💡 **`find()`** vs. **`filter()`**

*   **`find()`** returns **one element** (the very *first* item that matches the condition).
*   **`filter()`** returns a **new array** (containing *all* items that match the condition).

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Element Includes](12-array-element-includes.md)  

▶️ [Data Structures > Arrays > Array Element Index of](14-array-element-indexOf.md)

<!-- PAGINATION_END -->
&nbsp;
