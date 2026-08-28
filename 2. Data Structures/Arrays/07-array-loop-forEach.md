## Data Structures > Array > Loop > _forEach()_

### 1. Using a **for...of** loop

```javascript
const arr1 = [11, 22, 33, 44, 55, 66];

for (const item of arr1) {
  console.log(item);
}

```

### 2. Using Array.prototype.**entries()**
```javascript
for (const [i, item] of arr1.entries()) {
  console.log(`Index: ${i} | Value: ${item}`);
}

```

### 3. Using Array.prototype.**forEach()**

It's an higher order function that takes a call-back function which executes on each iteration.
Its 3 parameters are:

- Current item in the iteration
- Current index
- Entire array

```javascript
const arr1 = [11, 22, 33, 44, 55, 66];

arr.forEach(function (currentItem, index, entireArr) {
  console.log(`Index: ${index} | Value: ${currentItem}`);
});

```

Disadvantages: **break** and **continue** does not work in **forEach()**! So, if you need to break out of the loop, then use the **for-of** loop.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Flatmap](06-array-array-flatmap.md)  

▶️ [Data Structures > Arrays > Array Filter](08-array-array-filter.md)

<!-- PAGINATION_END -->
&nbsp;
