## Data Structures > WeakMap

They are Data structures for Better Memory Management.

> They hold **weak references** to objects. If an object is only held inside a **WeakMap**, the garbage collector is allowed to delete it.

This is perfect for things like caching or DOM metadata.

***Solution: Efficient with WeakMap (automatic cleanup)***

_In the following example, by using a **WeakMap**, the entry for **john** is automatically removed when it becomes unreachable, ensuring efficient memory usage._

```javascript
let john = {
  name: "John",
};

const visitsCountWeakMap = new WeakMap();

visitsCountWeakMap.set(john, 1);

// ... later ...
john = null;

// size of visitsCountWeakMap = 0

```

_'John' is garbage collected, and the entry in **visitsCountWeakMap** is automatically removed. No memory leak happens._

---
&nbsp;
<!-- PAGINATION_START -->  

📁 [Data Structures](../../2.%20Data%20Structures/) → [WeakMap-WeakSet](..)

◀️ [Data Structures > WeakMap-WeakSet > Memory Leak](./01-memory-leak.md)

▶️ [Data Structures > Which DS to Use](../00-which-ds-to-use.md)

<!-- PAGINATION_END -->
&nbsp;
