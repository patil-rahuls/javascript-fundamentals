## Data Structures > Array > Check Equality > **`includes()`**

> 🎯 The **`includes()`** method checks whether an array includes a certain value among its entries, returning **`true`** or **`false`**.
>
> *It uses **Strict Equality (`===`)**, meaning it does **not** perform type coercion.*

---
&nbsp;

### Using **`includes()`**

```javascript
const myArr = [55, "rahul", "hitesh", "aajesh"];

console.log(myArr.includes("rahul"));
// true

console.log(myArr.includes("anil"));
// false

// ⚠️ No Type Coercion occurs (String "55" !== Number 55)
console.log(myArr.includes("55"));
// false
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Elements Every](11-array-elements-every.md)  

▶️ [Data Structures > Arrays > Array Element Find](13-array-element-find.md)

<!-- PAGINATION_END -->
&nbsp;
