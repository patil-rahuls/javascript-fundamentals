## Data Structures > Array > Loop > **`forEach()`**

> 🎯 Arrays can be iterated using traditional loops like **`for...of`**, but JavaScript also provides a built-in higher-order method **`forEach()`** for cleaner, functional-style iteration.

---
&nbsp;

### 1. Using a **`for...of`** loop
The standard, modern way to iterate over array values.

```javascript
const arr1 = [11, 22, 33, 44, 55, 66];

for (const item of arr1) {
  console.log(item);
}
```

### 2. Using **`Array.prototype.entries()`**
Useful when you need access to both the **index** and the **value** inside a `for...of` loop.

```javascript
const arr1 = [11, 22, 33, 44, 55, 66];

for (const [i, item] of arr1.entries()) {
  console.log(`Index: ${i} \vert{} Value:${item}`);
}
```

---

### 3. Using **`Array.prototype.forEach()`**

**`forEach()`** is a higher-order function that takes a callback function. It executes this callback once for each element in the array.

The callback function receives 3 parameters (in this exact order):
1.  **Current Item:** The current element being processed.
2.  **Current Index:** The index of the current element.
3.  **Entire Array:** The array that `forEach()` is being applied to.

```javascript
const arr1 = [11, 22, 33, 44, 55, 66];

// Using a regular function
arr1.forEach(function (currentItem, index, entireArr) {
  console.log(`Index: ${index} \vert{} Value:${currentItem}`);
});

// ✅ Cleaner approach using an Arrow Function (Common Practice)
arr1.forEach((currentItem, index) => {
  console.log(`Index: ${index} \vert{} Value:${currentItem}`);
});
```

⚠️ **Crucial Disadvantage of `forEach()`:**

You **CANNOT** use **`break`** or **`continue`** statements inside a `forEach()` loop. It will always iterate through the entire array. 

*Solution:* If your logic requires breaking out of the loop early or skipping iterations, you **must** use the **`for...of`** loop instead.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Flatmap](06-array-array-flatmap.md)  

▶️ [Data Structures > Arrays > Array Filter](08-array-array-filter.md)

<!-- PAGINATION_END -->
&nbsp;
