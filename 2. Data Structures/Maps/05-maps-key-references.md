## Data Structures > Map > Key References

> 🎯 Maps use Strict Equality (`===`) to compare keys. When using primitive types (like strings or numbers) as keys, they are compared by their **value**. However, when using reference types (like Arrays or Objects) as keys, they are compared by their **memory address in the Heap**.

---
&nbsp;

### 1. The Reference Trap

If you try to set and get a value using an inline array or object, it will fail. Why? Because every time you write `[1, 2]`, JavaScript creates a brand new array at a **different location in memory**.

```javascript
const myMap = new Map();

// Setting the key with an inline array
myMap.set([1, 2], "Test");

// Attempting to retrieve it with a visually identical inline array
console.log(myMap.get([1, 2]));
// undefined
```
*Even though the two arrays look exactly the same, they point to different memory locations. Therefore, the Map does not recognize them as the same key.*

---

### 2. The Correct Approach

To successfully use an Object or Array as a key, you must store it in a variable first. This ensures you are passing the exact same memory reference to both the `.set()` and `.get()` methods.

```javascript
const myMap = new Map();

// 1. Create the array and store it in memory
const arr = [1, 2];

// 2. Use that exact reference as the key
myMap.set(arr, "Test");

// 3. Use the same reference to retrieve it
console.log(myMap.get(arr));
// "Test"
```
*Now, the `arr` variable passed into both `set()` and `get()` points to the exact same location in the Heap, and the Map successfully retrieves the value.*

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Maps](../Maps/)
  
◀️ [Data Structures Maps Maps Conversion](04-maps-conversion.md)  

▶️ [Data Structures Objects](../Objects/)

<!-- PAGINATION_END -->
&nbsp;
