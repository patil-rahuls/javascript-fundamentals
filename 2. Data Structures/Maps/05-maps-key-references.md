## Data Structures > Maps

### Objects Keys in Maps

Maps are high performance key - value paired data structure.

In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.

### Retrieving data from map when key is an array/object.

```javascript
myMap.set( [1,2] , 'Test');

myMap.get([1,2]);
// undefined.
```
Due to incorrect referencing the array `[1,2]` passed to `myMap.get()` and the array used in `myMap.set()` are at different locations in Heap.

> Correct way:

```javascript
const arr = [1,2];

myMap.set(arr, 'Test');

myMap.get(arr);
// Now the 'arr' passed in both myMap.set() and myMap.get() refer to the same location in Heap.
```
---
