## Data Structures > Memory Leak

Memory leak - when memory stays allocated even when not needed.

In JavaScript, memory management & GC is mostly implicit.

> Example: 

```javascript
let john = {
  name: "John"
};

const visitsCountMap = new Map();

visitsCountMap.set(john, 1);
// size of visitsCountMap -> 1

// ... later ...
john = null;

// size of visitsCountMap -> 1

```

_In the example above, if a regular Map is used, the 'john' object remains in memory even after it is set to `null` because the map still holds a strong reference to it, potentially causing a memory leak._

Using Map is inefficient in such cases, and manual cleanup is required.

_In the above example, **John** is still in memory because **visitsCountMap** references it!_

_The map's size remains **1**, and the entry is not removed automatically._

**_This is called a Memory Leak._**

Solution: **WeakMap** & **WeakSet**

---
&nbsp;

<!-- PAGINATION_START -->  

📁 [Data Structures](../../2.%20Data%20Structures/) → [WeakMap-WeakSet](..)

◀️ [Data Structures > Sets](../Sets/)

▶️ [Data Structures > WeakMap-WeakSet > WeakMap](./02-weakmap.md)

<!-- PAGINATION_END -->
&nbsp;
