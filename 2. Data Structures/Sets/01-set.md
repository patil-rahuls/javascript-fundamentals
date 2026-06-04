## Data Structures > Sets

Sets are high performance unordered unique collection data structure.

```javascript
const names = new Set (
  ['rahul' , 'hitesh' , 'rahul', 'rahul',  'aajesh' , 'rahul']
); // duplicate item 'rahul' added

console.log(names);
// set(3) {'hitesh', 'aajesh' , 'rahul'}
```

While defining duplicates can be added, but it boils down to an unordered set of unique values.

Mixed data type are allowed. (Heterogenous elements)

> Size of a Set:

```javascript
names.size;
// 3
// It gives 'unique' count, hence its called "size", and not "length" unlike arrays. arrays can have duplicate values.
```
---
