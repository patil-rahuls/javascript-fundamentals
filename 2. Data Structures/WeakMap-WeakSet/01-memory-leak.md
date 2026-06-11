## Data Structures > WeakMap

> **_Memory leak - when memory stays allocated even when not needed._**

In JavaScript, memory management & GC is mostly implicit.

> Example: Inefficient with Map (manual cleanup required):
>
> _If a regular Map is used, the john object remains in memory even after it is set to null because the map still holds a strong reference to it, potentially causing a memory leak._

```javascript
let john = {
  name: "John",
};

const visitsCountMap = new Map();

visitsCountMap.set(john, 1);

// ... later ...
john = null;

// size of visitsCountMap -> 1
```

In the above example, `John` is still in memory because `visitsCountMap` references it!

The map's size remains `1`, and the entry is not removed automatically.

**_This is called a Memory Leak._**

> ### Solution: `WeakMap` & `WeakSet`

They are Data structures for Better Memory Management.

> **_They hold `weak references` to objects. If an object is only held inside a `WeakMap`, the garbage collector is allowed to delete it._**

This is perfect for things like caching or DOM metadata.

> Solution: Efficient with WeakMap (automatic cleanup)
>
> _In the following example, by using a `WeakMap`, the entry for `john` is automatically removed when it becomes unreachable, ensuring efficient memory usage._

```javascript
let john = {
  name: "John",
};

const visitsCountWeakMap = new WeakMap();

visitsCountWeakMap.set(john, 1);

// ... later ...
john = null;
```

> **`John` is garbage collected, and the entry in `visitsCountWeakMap` is automatically removed. No memory leak.**

> size of `visitsCountWeakMap` -> `0`

---

---

<!-- PAGINATION_START -->

**Parent:** [WeakMap-WeakSet](..)  
**Previous:** [Data Structures > Sets > Set Use Case](../Sets/04-set-use-case.md)  
**Next:** [2. Data Structures > Which DS to Use](../00-which-ds-to-use.md)

<!-- PAGINATION_END -->
