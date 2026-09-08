## Data Structures > Set

> 🎯 Sets are high-performance data structures that represent an **unordered collection of unique values**. While you can attempt to pass duplicate items during initialization, a Set will automatically filter them out, boiling down to only the unique elements. Sets can also store mixed data types (heterogeneous elements).

---
&nbsp;

### 1. Initialization & Syntax

You can initialize a Set by passing an iterable (like an array) to the `new Set()` constructor. Notice how the duplicate entries of `"rahul"` are automatically removed.

```javascript
const names = new Set(["rahul", "hitesh", "rahul", "rahul", "aajesh", "rahul"]); 

console.log(names);
// Set(3) { 'rahul', 'hitesh', 'aajesh' }
```

### 2. Size of a Set

Unlike arrays, which use the `length` property because they can contain duplicate values and gaps, Sets use the **`size`** property. It specifically represents the *unique count* of elements currently inside the collection.

```javascript
console.log(names.size);
// 3
```

---
&nbsp;

<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Sets](../Sets/)  

◀️ [Data Structures > Objects](../Objects/)  

▶️ [Data Structures > Sets > Set Methods](02-set-methods.md)

<!-- PAGINATION_END -->
&nbsp;
