## Data Structures > ARRAY > Flat

> Array to new Array

### `Array.prototype.flat()` [ES 2019]

Flattens the nested arrays into one single array.

> `arr.flat (depthArgument)`

_`depthArgument` is optional and is used to provide the depth of the nesting._

```javascript
const arr = [[1, 2, 3, 4], 5, 6, [7, 8], 9, 10];

console.log(arr.flat());
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Flatten a very deeply nested array.
const arr2 = [[[1, 2], 3, 4], 5, 6, [[7, 0], 8], 9, 10];

console.log(arr2.flat());
// [Array(2), 3, 4, 5, 6, Array(2), 9, 10]

// The flat() method goes only to the first level of nesting by default. But it can be fixed using the depth argument.

console.log(arr2.flat(2));
// [1, 2, 3, 4, 5, 6, 7, 0, 8, 9, 10]
```

&nbsp;

> Calculate Depth of a nested array

```javascript
let depth = 0;
function calcDepth(arr) {
  for (n of arr) {
    if (typeof n === "object") {
      depth++;
      calcDepth(n);
    }
  }
}

calcDepth([1, 2, [3, 4], 5, [6, 7, 8, [9, 10]], 11]);

console.log(depth);
// 3
```

---

---

<!-- PAGINATION_START -->

**Parent:** [Arrays](..)  
**Previous:** [Data Structures > Arrays > Array Concat](04-array-array-concat.md)  
**Next:** [Data Structures > Arrays > Array Flatmap](06-array-array-flatmap.md)

<!-- PAGINATION_END -->
