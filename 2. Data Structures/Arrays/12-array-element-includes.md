## Data Structures > Array > Check Equality > _includes()_

Checks if element exists

### Array.prototype.**includes()** - _checks for equality_

Returns **true** if the element is present in the array, returns **false** otherwise.

Uses Strict Equality (**===**)

```javascript
const myArr = [55, "rahul", "hitesh", "aajesh"];

myArr.includes("rahul");
// true

myArr.includes("anil");
// false

// No Type Coercion occurs
myArr.includes("55");
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
