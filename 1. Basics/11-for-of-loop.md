## **`for...of`** Loop (ES6)

> 🎯 The **`for...of`** loop iterates over the **values** of an iterable object _(like Arrays, Strings, Maps, Sets, etc.)_.

---
&nbsp;

### 1. Iterating over an Array

```javascript
const menu = ["North Indian", "Chinese", "South Indian"];

for (const item of menu) {
  console.log(item);
}
// "North Indian"
// "Chinese"
// "South Indian"
```

### 2. Getting Both Indices and Values

When you want to access both the index and the value, you can use **`Object.entries()`** _(or array entries)_.

```javascript
for (const item of Object.entries(menu)) {
  console.log(item); 
  // e.g., ['0', 'North Indian'] (returns an array of [index, value])

  console.log(`Item number ${item[0] + 1} is${item[1]}`);
}
```

#### Cleaner approach using Destructuring:
```javascript
for (const [index, item] of Object.entries(menu)) {
  console.log(`${index + 1} :${item}`);
}
```

### 3. Iterating over Objects _(Not Iterable)_

> ⚠️ **Important Note:** The **`for...of`** loop *only* supports iterable objects. Standard JavaScript objects are **not iterable** by default.

```javascript
const p = {
  p1: "value1",
  p2: "value2",
  p3: "value3",
};

// ❌ Incorrect for objects
for (const val of p) {
  // TypeError: p is not iterable
}

// ✅ Correct approach (Fallback to for...in)
for (const key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key + " -> " + p[key]);
  }
}
```

**💡 Alternative:** 
Instead of `for...in`, you can make objects iterable by using built-in methods:
*   **`Object.values(p)`** to iterate over values.
*   **`Object.keys(p)`** to iterate over keys/properties.
*   **`Object.entries(p)`** to iterate over `[key, value]` pairs.
---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [**for...in** Loop](10-for-in-loop.md)  

▶️ [Destructuring Assignment [ES6]](12.1-destructuring-assignment.md)

<!-- PAGINATION_END -->
&nbsp;
