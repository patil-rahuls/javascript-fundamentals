## Data Structures > ARRAY

### Typed Array

Standard JavaScript arrays are _"flexible"_.

e.g.
```
arr = [1, 2, 'Rahul', true, { age: 25 }, 3];
```

They can hold a string, a number, a boolean and an object all at once.

To achieve this flexibility, JavaScript adds a lot of overhead.

Typed Arrays, however, are rigid, high-performance objects designed specifically for handling raw binary data.

A Typed Array isn't just one object; it’s a two-part system.

> 1. **The ArrayBuffer (The Memory)**
```javascript
const buffer = new ArrayBuffer(16);
// (Allocates 16 bytes of memory).
// It is just a box of bits.
```

> 2. **The Typed Array View (The Interpreter)**
```javascript
const view = new Uint8Array(buffer);
// (Reads from the memory).
```

&nbsp;
### Common Typed Array Views -

| Class | Bytes | Description | Range |
| :--- | :---: | :--- | ---: |
| **Int8Array** | 1 | 8-bit signed integer | -128 to 127 |
| **Uint8Array** | 1 | 8-bit unsigned integer | 0 to 255
| **Uint8ClampedArray**	| 1 | 8-bit unsigned (clamped) (Great for RGB colors) |  0 to 255
| **Int32Array** | 4 | 32-bit signed integer | -2,147,483,648 to 2,147,483,647
| **Float64Array** | 8 | 64-bit floating point | Same as a standard JS Number
|||


&nbsp;
### Key Features:
> #### 1. Fixed Length:
Once you create a Typed Array, you cannot `push()` or `pop()`. Its size is locked.

> #### 2. No Mixed Types:
Typed arrays are homogenous. For Example, if you create a `Uint8Array`, every single element must be an integer between `0` and `255`.

> #### 3. High Performance:
Because the memory is pre-allocated and the type is known, the CPU can process Typed Arrays much faster than regular arrays.

> #### 4. Zero-initialized:
When created, they are automatically filled with `0`s.

---
&nbsp;

> Example: Typed Arrays can be faster than regular arrays for numerical computations.
```javascript
const size = 10_000_000; // 10 million elements

// 1. Setup Regular Array
const regularArray = new Array(size);

for (let i = 0; i < size; i++) {
  regularArray[i] = Math.random();
}


// 2. Setup Typed Array
// (64-bit floats, same as JS numbers)
const typedArray = new Float64Array(size);

for (let i = 0; i < size; i++) {
  typedArray[i] = regularArray[i];
}


// --- Benchmark Regular Array ---
let sum1 = 0;
console.time('Regular Array Sum');

for (let i = 0; i < regularArray.length; i++) {
  sum1 += regularArray[i];
}

console.timeEnd('Regular Array Sum');



// --- Benchmark Typed Array ---
let sum2 = 0;

console.time('Typed Array Sum');

for (let i = 0; i < typedArray.length; i++) {
  sum2 += typedArray[i];
}

console.timeEnd('Typed Array Sum');
```

###  Why Typed Arrays are faster?

> #### 1. Memory Layout:
Typed Arrays store data in contiguous blocks of memory, which allows for better cache performance and faster access.

> #### 2. Type Enforcement:
Since all elements in a Typed Array are of the same type, the JavaScript engine can optimize operations on them more effectively.

> #### 3. Reduced Overhead:
Regular arrays can hold mixed types and have dynamic resizing, which adds overhead. Typed Arrays, being fixed in size and type, avoid this overhead.

---
