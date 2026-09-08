## Data Structures > Memory Leak

> 🎯 A **Memory Leak** occurs when memory remains allocated even after it is no longer needed. While JavaScript handles memory management and Garbage Collection (GC) implicitly, holding strong references to objects (like storing them in a standard Map or Set) can prevent the GC from freeing up memory, leading to leaks.

---
&nbsp;

### The Problem: Strong References

Consider this example using a standard `Map`:

```javascript
let john = {
  name: "John"
};

const visitsCountMap = new Map();

// Using the 'john' object as a key
visitsCountMap.set(john, 1);

console.log(visitsCountMap.size); 
// 1

// ... later in the code ...

// We remove our primary reference to the 'john' object
john = null;

console.log(visitsCountMap.size); 
// 1
```

In the example above, even though we explicitly set the `john` variable to `null`, the object itself **remains in memory**. Why? Because `visitsCountMap` still holds a strong reference to it as a key. 

The Map's size remains `1`, and the entry is not removed automatically. If you are tracking many objects this way, it becomes highly inefficient and requires manual cleanup (`visitsCountMap.delete(john)`). If left unchecked in a large application, this is exactly how a **Memory Leak** happens.

### The Solution

To solve this issue without needing manual cleanup, JavaScript provides two specific data structures designed to hold "weak" references to objects, allowing them to be automatically garbage collected: **`WeakMap`** and **`WeakSet`**.

---
&nbsp;

<!-- PAGINATION_START -->  

📁 [Data Structures](../../2.%20Data%20Structures/) → [WeakMap-WeakSet](..)

◀️ [Data Structures > Sets](../Sets/)

▶️ [Data Structures > WeakMap-WeakSet > WeakMap](./02-weakmap.md)

<!-- PAGINATION_END -->
&nbsp;
