## Data Structures > Array > Return new Array > **`slice()`**

> 🎯 The **`slice()`** method extracts a section of an array and returns it as a **new array** without modifying the original array.
>
> **Syntax:** `array.slice(startIndex, endIndex)`
> *   The element at the **`startIndex`** is *included* in the result.
> *   The element at the **`endIndex`** (optional) is *excluded* from the result.

---
&nbsp;

### 1. Using Positive Indices

```javascript
const arr = [11, 22, 33, 44, 55, 66];

// Extract from index 2 to the end
const newArr = arr.slice(2);

console.log(arr);    // [11, 22, 33, 44, 55, 66] (Unchanged)
console.log(newArr); // [33, 44, 55, 66]

// Extract from index 2 up to (but not including) index 4
const newArr2 = arr.slice(2, 4);

console.log(newArr2); // [33, 44]
```

### 2. Using Negative Indices
Negative indices count backward from the end of the array.

```javascript
const arr = [11, 22, 33, 44, 55, 66];

// Extract the last 2 elements
const newArr = arr.slice(-2);
console.log(newArr); // [55, 66]

// Extract from index 1 up to the 2nd-to-last element
const newArr2 = arr.slice(1, -2);
console.log(newArr2); // [22, 33, 44]

// Extract from the 2nd-to-last up to the last element
const newArr3 = arr.slice(-2, -1);
console.log(newArr3); // [ 55 ]
```

---

### 3. Copying Arrays using **`slice()`**

**`slice()`** can be used to copy an entire array by not passing any arguments. 

> 💡 **Note on Cloning:** While this creates an independent copy for flat arrays, it is technically a **shallow copy** (just like the spread operator `...`). If the array contains nested objects or arrays, those inner references are still shared. 

*Why copy arrays this way? Observe what happens when you just use the assignment operator (`=`):*

```javascript
// ❌ Reference Assignment (Modifying one affects both)
const a = [1, 2, 3];
const b = a; 

a[0] = 99;

console.log(a); // [99, 2, 3]
console.log(b); // [99, 2, 3] (b changed because it shares the same memory reference!)
```

*Solution: Use **`slice()`** to get an independent copy.*

```javascript
// ✅ Shallow Copy (Modifying the original leaves the copy intact)
const a = [1, 2, 3];
const c = a.slice();

a[0] = 100;

console.log(a); // [100, 2, 3]
console.log(c); // [1, 2, 3] (c remains independent)
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures Arrays Mutate Arrays](02-mutate-arrays.md)  

▶️ [Data Structures Arrays Array Concat](04-array-array-concat.md)

<!-- PAGINATION_END -->
&nbsp;
