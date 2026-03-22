//////////////////////////////////////////////////////////////
// Memory Management /////////////////////////////////////////
//////////////////////////////////////////////////////////////
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management

// In JavaScript, memory management & GC is mostly implicit.

// Data Structures for Better Memory Management
// Memory leak -
//  When memory stays allocated even when not needed.

// WeakMap & WeakSet:
// These hold "weak" references to objects. If an object is only
// held inside a WeakMap, the garbage collector is allowed to
// delete it.
// This is perfect for things like caching or DOM metadata.

// Example:
// Inefficient with Map (manual cleanup required):
// If a regular Map is used, the john object remains in memory
// even after it is set to null because the map still holds a
// strong reference to it, potentially causing a memory leak.

let john = { name: "John" };
const visitsCountMap = new Map();
visitsCountMap.set(john, 1);

// ... later ...
john = null;
// John is still in memory because visitsCountMap references it!
// The map's size remains 1, and the entry is not removed
// automatically. This is called a Memory Leak.


// Efficient with WeakMap (automatic cleanup):
// By using a WeakMap, the entry for john is automatically
// removed when john becomes unreachable, ensuring efficient
// memory usage.

let john = { name: "John" };
const visitsCountWeakMap = new WeakMap();
visitsCountWeakMap.set(john, 1);

// ... later ...
john = null;
// John is garbage collected, and the entry in visitsCountWeakMap
// is automatically removed. No memory leak.
