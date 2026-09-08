## Data Structures > Array > Typed Array

Standard JavaScript arrays are incredibly flexible—they can dynamically resize and hold mixed data types (strings, numbers, objects) all at once. 
```javascript
arr = [1, 2, 'Rahul', true, { age: 25 }, [PORT, id]];
```

However, this flexibility introduces memory and performance overhead. Under the hood, regular arrays often use pointers to store items in non-contiguous memory locations. When you `push()` past an array's allocated memory, the JavaScript engine must pause, allocate a larger chunk, and copy everything over.

**Typed Arrays** solve this by providing rigid, high-performance objects designed specifically for handling raw binary data in strictly contiguous memory blocks.

---

### 1. The Two-Part System

A Typed Array isn't just a single object; it relies on a two-part architecture:

**1. The `ArrayBuffer` (The Memory):** Allocates a fixed chunk of raw memory in bytes.
```javascript
const buffer = new ArrayBuffer(16); // Allocates 16 bytes of memory
```

**2. The Typed Array View (The Interpreter):** Provides an interface to read and write to that raw memory.
```javascript
const view = new Uint8Array(buffer); // Interprets the buffer as 8-bit unsigned integers
```

---

### 2. Common Typed Array Views

| Class | Bytes | Description | Range |
| :--- | :---: | :--- | :--- |
| **`Int8Array`** | 1 | 8-bit signed integer | -128 to 127 |
| **`Uint8Array`** | 1 | 8-bit unsigned integer | 0 to 255 |
| **`Uint8ClampedArray`** | 1 | 8-bit unsigned (clamped) *(Great for RGB colors)* | 0 to 255 |
| **`Int32Array`** | 4 | 32-bit signed integer | -2,147,483,648 to 2,147,483,647 |
| **`Float64Array`** | 8 | 64-bit floating point | Same as a standard JS Number |

---

### 3. Key Features

1.  **Fixed Length:** Once you create a Typed Array, you cannot `push()` or `pop()`. Its memory footprint is strictly locked.
2.  **No Mixed Types (Homogeneous):** If you create a `Uint8Array`, every single element *must* be an integer between 0 and 255.
3.  **High Performance:** Because the memory is pre-allocated sequentially and the data type is guaranteed, the CPU processes them much faster by skipping type checks and pointer resolutions.
4.  **Zero-initialized:** When created, they are automatically filled with `0`s instead of `undefined`.

---

### 4. Performance Benchmark Example

*Typed Arrays are demonstrably faster than regular arrays for heavy numerical computations.*

```javascript
const size = 10_000_000; // 10 million elements

// 1. Setup a regular array
const regularArray = new Array(size);
for (let i = 0; i < size; i++) {
  regularArray[i] = Math.random();
}

// 2. Setup a typed array (64-bit floats match standard JS numbers)
const typedArray = new Float64Array(size);
for (let i = 0; i < size; i++) {
  typedArray[i] = regularArray[i];
}


// --- Benchmark Regular Array ---
let sum1 = 0;
console.time("Regular Array Sum");

for (let i = 0; i < regularArray.length; i++) {
  sum1 += regularArray[i];
}

console.timeEnd("Regular Array Sum"); 
// e.g., Regular Array Sum: ~12ms


// --- Benchmark Typed Array ---
let sum2 = 0;
console.time("Typed Array Sum");

for (let i = 0; i < typedArray.length; i++) {
  sum2 += typedArray[i];
}

console.timeEnd("Typed Array Sum");
// e.g., Typed Array Sum: ~3ms (Significantly faster!)
```

---

### 5. Why are Typed Arrays Faster?

1.  **Memory Layout:** Stored in strictly contiguous memory blocks, resulting in better CPU cache hit rates and faster iteration (no pointer chasing).
2.  **Type Enforcement:** Because the JavaScript engine guarantees the element types will never dynamically change, it can heavily optimize the operations at the machine code level.
3.  **Reduced Overhead:** Bypasses the complex dynamic resizing and mixed-type management required by standard flexible arrays.

> 💡 **Best Practice for Usage:**
> 
> *   **Use Standard Arrays for 95% of your code.** They are flexible, readable, and perfectly fast enough for most UI and logic tasks—even for homogeneous data.
> *   **Use Typed Arrays ONLY** when working with raw binary data (e.g., WebGL, Canvas pixel manipulation, audio/video processing, WebWorkers, cryptography, parsing files) or if strict profiling identifies a massive memory/garbage collection bottleneck.
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
 
◀️ [Data Structures > Arrays > Which Array Method to Use](19-which-array-method-to-use.md)  

▶️ [Data Structures > Maps](../Maps/)

<!-- PAGINATION_END -->
&nbsp;
