## Data Structures > Array > Check Equality > _indexOf()_

Gets element index by value.

### Array.prototype.**indexOf()** - _checks for equality_

Returns index of the element present in the array, **-1** otherwise.

Uses Strict Equality (**===**)

```javascript
const myArr = [55, "rahul", "hitesh", "aajesh"];

myArr.indexOf("rahul");
// 1

myArr.indexOf("milan");
// -1

myArr.indexOf("55");
// -1 (string ‘55’ is passed. No Type Coercion occurs)

```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Element Find](13-array-element-find.md)  

▶️ [Data Structures > Arrays > Array Element Find Index](15-array-element-findIndex.md)

<!-- PAGINATION_END -->
&nbsp;
