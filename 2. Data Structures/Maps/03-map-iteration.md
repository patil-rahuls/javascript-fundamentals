## Data Structures > Map > Iteration

> 🎯 Unlike standard Objects, Maps are inherently **iterable**. This means you can iterate through their key-value pairs directly using traditional loops or functional methods without needing helper methods like `Object.keys()`.

---
&nbsp;

### 1. Using a **`for...of`** loop

Because iterating over a Map yields an array of `[key, value]`, you can cleanly destructure these directly inside the loop signature.

```javascript
const question = new Map([
  ["question", "Best lang in the world?"],
  [1, "C"],
  [2, "C++"],
  [3, "Java"],
  [4, "Javascript"],
  ["correct", 2],
  [true, "Correct answer"],
  [false, "Try Again"],
]);

// Destructuring the [key, value] pair directly
for (const [key, value] of question) {
  // Filtering to only log numeric keys
  if (typeof key === "number") {
    console.log(`Option ${key}:${value}`);
  }
}
```

### 2. Spreading Iterators into Arrays

You can use the spread operator (`...`) with Map iterators to quickly convert keys, values, or entries into standard JavaScript Arrays.

```javascript
console.log([...question.entries()]); // Array of [key, value] arrays
console.log([...question.keys()]);    // Array of just the keys
console.log([...question.values()]);  // Array of just the values
```

---

### 3. Using the **`forEach()`** method

Maps also have a built-in `forEach()` method. 

> ⚠️ **Important Parameter Order:** The callback function receives the **value** first, then the **key**, and finally the entire **map** object: `(value, key, map)`.

```javascript
const currencies = new Map([
  ["USD", "US Dollars"],
  ["EUR", "Euros"],
  ["INR", "INDIAN Rupees"],
]);

// Cleaner approach using an Arrow Function
currencies.forEach((val, key) => {
  console.log(`${key} :${val}`);
});
// USD : US Dollars
// EUR : Euros
// INR : INDIAN Rupees
```

> 🚨 **Crucial Disadvantage of `forEach()`:**
> Just like with an Array's `forEach()`, you **CANNOT** use **`break`** or **`continue`** statements inside a Map's `forEach()` loop. If your logic requires breaking out of the loop early or skipping iterations, you **must** use the **`for...of`** loop instead.
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Maps](../Maps/)
  
◀️ [Data Structures > Maps > Map Methods](02-map-methods.md)  

▶️ [Data Structures > Maps > Maps Conversion](04-maps-conversion.md)

<!-- PAGINATION_END -->
&nbsp;
