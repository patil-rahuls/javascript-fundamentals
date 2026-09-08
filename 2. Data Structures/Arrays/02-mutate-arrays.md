## Data Structures > Array > *Mutate array*

> 🎯 Mutating methods alter the original array directly in memory rather than returning a new array. Use these when you intentionally want to modify the existing data structure.

---
&nbsp;

### 1. **`Array.prototype.push()`**
Adds an element at the **end** of an array and returns the new length of the array.

```javascript
const myArr = ["rahul", "hitesh", "aajesh"];

const newLength = myArr.push("rishi");

console.log(myArr);     // ['rahul', 'hitesh', 'aajesh', 'rishi']
console.log(newLength); // 4
```

### 2. **`Array.prototype.pop()`**
Removes the **last** element from an array and returns the popped element.

```javascript
const myArr = ["rahul", "hitesh", "aajesh", "rishi", "anil"];

const remvd = myArr.pop(); // Removes last item 'anil'

console.log(remvd); // 'anil'
console.log(myArr); // ['rahul', 'hitesh', 'aajesh', 'rishi']

// ⚠️ Note: Any arguments passed to pop() are ignored.
const remvd2 = myArr.pop('hitesh');
console.log(remvd2); // 'rishi'
```

### 3. **`Array.prototype.unshift()`**
Adds an element at the **start** of an array and returns the new length of the array.

```javascript
const myArr = ["rahul", "hitesh", "aajesh", "rishi"];

let newLength = myArr.unshift("kisan");

console.log(myArr);     // ['kisan', 'rahul', 'hitesh', 'aajesh', 'rishi']
console.log(newLength); // 5
```

### 4. **`Array.prototype.shift()`**
Removes an element from the **start** of an array and returns the removed element.

```javascript
const myArr = ["kisan", "rahul", "hitesh", "aajesh", "rishi"];

let remvd = myArr.shift();

console.log(myArr); // ['rahul', 'hitesh', 'aajesh', 'rishi']
console.log(remvd); // 'kisan'
```

### 5. **`Array.prototype.reverse()`**
Reverses the order of the array items in place.

```javascript
const myArr = ["rahul", "hitesh", "aajesh", "rishi"];

const newArr = myArr.reverse();

console.log(newArr); // ['rishi', 'aajesh', 'hitesh', 'rahul' ]
console.log(myArr);  // ['rishi', 'aajesh', 'hitesh', 'rahul' ] (Original is mutated)
```

### 6. **`Array.prototype.sort()`**
Sorts the array items. By default, it sorts in ascending order by converting elements to strings (ASCII/Lexicographical sorting).

```javascript
const myArr = ["rahul", "hitesh", "aajesh", "rishi"];

console.log(myArr.sort()); // ['aajesh', 'hitesh', 'rahul', 'rishi']
```

⚠️ **`sort()` on Numbers:** 

Because `sort()` converts values to strings first, it does **not** work correctly on numerical values by default.

```javascript
const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(arr.sort());
// [-130, -400, -650, 1300, 200, 3000, 450, 70]
```

**Sorting Numbers Correctly (Using a Callback Function):**
*   The callback accepts two consecutive elements (`a` and `b`).
*   If it returns a **positive number** (> 0), `a` and `b` are swapped.
*   If it returns a **negative number** (< 0) or **0**, the order remains the same.

```javascript
const arr2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

arr2.sort((a, b) => {
  if (a > b) return 1;  // Swap
  if (a < b) return -1; // Keep order
});

console.log(arr2);
// [-650, -400, -130, 70, 200, 450, 1300, 3000]

// ✅ Concise Arrow Function alternative:
arr2.sort((a, b) => a - b);
```

### 7. **`Array.prototype.fill()`**
Fills specified elements in an array with a value.
> **Syntax:** `fill(value, startIndex, endIndex)` *(endIndex is exclusive)*

```javascript
const x = new Array(7);

x.fill(1, 3, 6);

console.log(x);
// [<3 empty items>, 1, 1, 1, <1 empty item>]
```

### 8. **`Array.prototype.splice()`**
Adds, updates, or removes elements from a specific index.
> **Syntax:** `splice(startIndex, deleteCount, replacementValue1, ...)`

```javascript
// Example 1: Removing items
const arr = [11, 22, 33, 44, 55, 66];

arr.splice(4); // Removes everything from index 4 onwards
console.log(arr); // [11, 22, 33, 44]

arr.splice(1, 2); // Starts at index 1, removes 2 items
console.log(arr); // [11, 44]
```

```javascript
// Example 2: Replacing an item
const arr1 = [11, 22, 33, 44, 55, 66];

arr1.splice(4, 1, 99); // Deletes 1 item at index 4 and inserts 99
console.log(arr1); // [11, 22, 33, 44, 99, 66]
```

```javascript
// Example 3: Inserting an item (without deleting)
const arr2 = [11, 22, 33, 44, 55, 66];

arr2.splice(4, 0, 99); // Deletes 0 items at index 4 and inserts 99
console.log(arr2); // [11, 22, 33, 44, 99, 55, 66]
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures Arrays Initialization](01-initialization.md)  

▶️ [Data Structures Arrays Array Slice](03-array-array-slice.md)

<!-- PAGINATION_END -->
&nbsp;
