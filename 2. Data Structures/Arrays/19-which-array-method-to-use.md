## Data Structures > Array > Which array method to use and when?

> 🎯 Use this quick reference cheat sheet to select the exact array method you need based on your data manipulation goal. 

---
&nbsp;

### 1. To Mutate the Original Array

| Goal | Method |
| :--- | :--- |
| Add element(s) to the end | **`push()`** |
| Add element(s) to the start | **`unshift()`** |
| Remove an element from the end | **`pop()`** |
| Remove an element from the start | **`shift()`** |
| Reverse the order of elements | **`reverse()`** |
| Sort the elements | **`sort()`** |
| Fill array slots with a specific value | **`fill()`** |
| Add, remove, or replace a specific portion | **`splice()`** |

---

### 2. To Return a New Array

| Goal | Method |
| :--- | :--- |
| Extract a portion of the array | **`slice()`** |
| Merge or concatenate multiple arrays | **`concat()`** |
| Flatten nested arrays | **`flat()`** |
| Map logic and flatten (1 level deep) | **`flatMap()`** |
| Extract elements that satisfy a condition | **`filter()`** |
| Transform or apply logic to all elements | **`map()`** |

---

### 3. To Search or Check Elements (Returns a Boolean)

| Goal | Method |
| :--- | :--- |
| Check if *any* element satisfies a condition | **`some()`** |
| Check if *all* elements satisfy a condition | **`every()`** |
| Check if an exact value exists (Equality) | **`includes()`** |

---

### 4. To Retrieve an Element or Index

| Goal | Method |
| :--- | :--- |
| Get the *first element* matching a condition | **`find()`** |
| Get the *index* of an exact value (Equality) | **`indexOf()`** |
| Get the *index* matching a condition | **`findIndex()`** |

---

### 5. To Transform, Loop, or Convert

| Goal | Method |
| :--- | :--- |
| Accumulate all elements down to a *single value* | **`reduce()`** |
| *Only* loop over the array (no new array returned) | **`forEach()`** |
| Convert Array ➡️ String | **`join()`** |
| Convert String ➡️ Array | **`String.prototype.split()`** |

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures Arrays Array Methods Chaining](18-array-methods-chaining.md)  

▶️ [Data Structures Arrays Typed Arrays](20-typed-arrays.md)

<!-- PAGINATION_END -->
&nbsp;
