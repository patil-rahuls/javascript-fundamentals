## Data Structures > Array > Check Equality > **`indexOf()`**

> 🎯 The **`indexOf()`** method returns the first index at which a given element can be found in the array. If the element is not present, it returns **`-1`**.
>
> *Like `includes()`, it uses **Strict Equality (`===`)**, meaning it does **not** perform type coercion.*

---
&nbsp;

### Using **`indexOf()`**

```javascript
const myArr = [55, "rahul", "hitesh", "aajesh"];

console.log(myArr.indexOf("rahul"));
// 1

console.log(myArr.indexOf("milan"));
// -1 (Element does not exist in the array)

// ⚠️ No Type Coercion occurs (String "55" !== Number 55)
console.log(myArr.indexOf("55"));
// -1 
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Element Find](13-array-element-find.md)  

▶️ [Data Structures > Arrays > Array Element Find Index](15-array-element-findIndex.md)

<!-- PAGINATION_END -->
&nbsp;
