## Data Structures > Array > Return new Array > **`concat()`**

> 🎯 The **`concat()`** method is used to merge two or more arrays. This method does not change (mutate) the existing arrays, but instead returns a **new array**.

---
&nbsp;

### 1. Using **`concat()`**

```javascript
const arr1 = [11, 22, 33, 44, 55, 66];
const arr2 = [111, 222];

const newArr = arr1.concat(arr2);

console.log(newArr); 
// [11, 22, 33, 44, 55, 66, 111, 222]

console.log(arr1);
// [11, 22, 33, 44, 55, 66] (Original remains unchanged)
```

### 2. Using the Spread Operator (Modern Alternative)

You can achieve the exact same result using the ES6 spread operator (`...`). It is often preferred for its clean and highly readable syntax.

```javascript
const arr1 = [11, 22, 33, 44, 55, 66];
const arr2 = [111, 222];

const newArr2 = [...arr1, ...arr2];

console.log(newArr2); 
// [11, 22, 33, 44, 55, 66, 111, 222]
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Slice](03-array-array-slice.md)  

▶️ [Data Structures > Arrays > Array Flat](05-array-array-flat.md)

<!-- PAGINATION_END -->
&nbsp;
