## Data Structures > WeakMap

> 🎯 **WeakMaps** are data structures designed specifically for better memory management. They hold **weak references** to objects. If an object is only referenced as a key inside a WeakMap (and no longer used anywhere else in your code), the JavaScript garbage collector is allowed to automatically delete it.

---
&nbsp;

This behavior makes WeakMaps perfect for use cases like caching data or attaching metadata to DOM elements without having to worry about manual cleanup.

### The Solution: Efficient Memory Management

Let's revisit our memory leak problem, but this time using a **WeakMap**. By doing so, the entry for our object is automatically removed when it becomes unreachable, ensuring perfectly efficient memory usage.

```javascript
let john = {
  name: "John",
};

const visitsCountWeakMap = new WeakMap();

// The object 'john' is used as the key
visitsCountWeakMap.set(john, 1);

// ... later in the code ...

// We remove our primary reference to the 'john' object
john = null;

// The 'john' object is now eligible for Garbage Collection.
// The entry in visitsCountWeakMap is automatically removed!
```

> 💡 **Key Insight:** Once `john` is set to `null`, the object is garbage collected. The corresponding entry inside `visitsCountWeakMap` evaporates automatically, completely preventing the memory leak. 
> 
> *(Note: Because of this unpredictable automatic cleanup process, WeakMaps do not have a `.size` property or any iteration methods like `.keys()` or `.values()`)*.

---
&nbsp;

<!-- PAGINATION_START -->  

📁 [Data Structures](../../2.%20Data%20Structures/) → [WeakMap-WeakSet](..)

◀️ [Data Structures > WeakMap-WeakSet > Memory Leak](./01-memory-leak.md)

▶️ [Data Structures > Which DS to Use](../00-which-ds-to-use.md)

<!-- PAGINATION_END -->
&nbsp;
