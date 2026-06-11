## Data Structures > ARRAY

> Get element index by value

### `Array.prototype.indexOf()`

> **_Returns index of element present in the array, `-1` otherwise._**
>
> **_Checks for Equality using Strict Equality `===`._**

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

---

<!-- PAGINATION_START -->

**Parent:** [Arrays](..)  
**Previous:** [Data Structures > Arrays > Array Element Find](13-array-element-find.md)  
**Next:** [Data Structures > Arrays > Array Element Find Index](15-array-element-findIndex.md)

<!-- PAGINATION_END -->
