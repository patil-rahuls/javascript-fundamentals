## Data Structures > Array > Return new Array > **`flat()`**

> 🎯 The **`flat()`** method (introduced in ES2019) creates a **new array** with all sub-array elements concatenated into it recursively up to a specified depth. 
>
> **Syntax:** `arr.flat(depth)`
> *   **`depth`** *(optional)*: Specifies how deep a nested array structure should be flattened. Defaults to `1`.

---
&nbsp;

### 1. Default Flattening (Depth 1)
By default, `flat()` only goes down one level of nesting.

```javascript
const arr = [
  [1, 2, 3, 4], 
  5, 6, 
  [7, 8], 
  9, 10
];

console.log(arr.flat());
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 2. Deep Flattening (Specifying Depth)
If you have deeply nested arrays, a default `flat()` will leave inner arrays intact. You must pass a depth argument to flatten further.

```javascript
const arr2 = [
  [ [1, 2], 3, 4], 
  5, 6, 
  [ [7, 0], 8 ], 
  9, 10
];

// ❌ Depth 1 (Default) leaves the second level of arrays intact
console.log(arr2.flat());
// [ [1, 2], 3, 4, 5, 6, [7, 0], 8, 9, 10 ]

// ✅ Depth 2 flattens down to the second level
console.log(arr2.flat(2));
// [1, 2, 3, 4, 5, 6, 7, 0, 8, 9, 10]
```

> 💡 **Pro-Tip:** If you don't know the exact depth of your array but want it completely flat, you can pass **`Infinity`**:
> ```javascript
> arr2.flat(Infinity);
> ```

---

#### Calculate Depth of a nested array

```javascript
function calcMaxDepth(arr) {
  if (!Array.isArray(arr)) return 0;

  let maxDepth = 0;
  
  for (const item of arr) {
    if (Array.isArray(item)) {
      // Recursively calculate depth of children
      const currentDepth = calcMaxDepth(item);
      maxDepth = Math.max(maxDepth, currentDepth);
    }
  }
  
  return maxDepth + 1;
}

// Note: flat() depth corresponds to maxDepth - 1
const testArr = [1, 2, [3, 4], 5, [6, 7, 8, [9, 10]], 11];

console.log(calcMaxDepth(testArr) - 1); 
// 2 (which means arr.flat(2) will completely flatten it!)
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Concat](04-array-array-concat.md)  

▶️ [Data Structures > Arrays > Array Flatmap](06-array-array-flatmap.md)

<!-- PAGINATION_END -->
&nbsp;
