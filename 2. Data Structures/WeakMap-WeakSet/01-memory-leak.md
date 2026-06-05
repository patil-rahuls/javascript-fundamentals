## Data Structures > WeakMap

In JavaScript, memory management & GC is mostly implicit.

> ### Memory leak - when memory stays allocated even when not needed.

> Example: Inefficient with Map (manual cleanup required):
// If a regular Map is used, the john object remains in memory
// even after it is set to null because the map still holds a
// strong reference to it, potentially causing a memory leak.

```javascript
let john = {
  name: "John"
};

const visitsCountMap = new Map();

visitsCountMap.set(john, 1);

// ... later ...
john = null;

// size of visitsCountMap -> 1
```

IN the above example, `John` is still in memory because `visitsCountMap` references it!

The map's size remains 1, and the entry is not removed automatically.

> This is called a Memory Leak.

### Solution: `WeakMap` & `WeakSet`

They are Data structures for Better Memory Management.

They hold `weak references` to objects. If an object is only held inside a `WeakMap`, the garbage collector is allowed to delete it.

This is perfect for things like caching or DOM metadata.

> Solution: Efficient with WeakMap (automatic cleanup)
```javascript
// By using a WeakMap, the entry for john is automatically
// removed when john becomes unreachable, ensuring efficient
// memory usage.

let john = {
  name: "John"
};

const visitsCountWeakMap = new WeakMap();

visitsCountWeakMap.set(john, 1);

// ... later ...
john = null;

// John is garbage collected, and the entry in visitsCountWeakMap
// is automatically removed. No memory leak.

// size of visitsCountWeakMap ->0
```

---
