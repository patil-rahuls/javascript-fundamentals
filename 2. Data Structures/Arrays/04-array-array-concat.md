## Data Structures > ARRAY > Concat

> Array to new Array

### `Array.prototype.concat()`

```javascript
const arr1 = [11, 22, 33, 44, 55, 66];
const arr2 = [111, 222];

const newArr = arr1.concat(arr2);

console.log(newArr);
// [11, 22, 33, 44, 55, 66, 111, 222]

// Concatenating arrays using spread operator
const newArr2 = [...arr1, ...arr2];
```

&nbsp; 
---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
**Previous:** ← [Data Structures > Arrays > Array Slice](03-array-array-slice.md)  

**Next:** → [Data Structures > Arrays > Array Flat](05-array-array-flat.md)

<!-- PAGINATION_END -->
