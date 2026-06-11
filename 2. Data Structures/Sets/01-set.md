## Data Structures > Sets

> **_Sets are high performance `unordered unique collection` data structure._**

```javascript
const names = new Set(["rahul", "hitesh", "rahul", "rahul", "aajesh", "rahul"]); // duplicate item 'rahul' added

console.log(names);
// set(3) {'hitesh', 'aajesh' , 'rahul'}
```

While defining duplicates can be added, but it boils down to an unordered set of unique values.

Mixed data type are allowed. (Heterogenous elements)

> Size of a Set:
>
> ```javascript
> names.size;
> // 3
> ```
>
> It gives _unique_ count, hence its called _size_, and not _length_ unlike arrays because arrays can have duplicate values.

---

---

<!-- PAGINATION_START -->

**Parent:** [Sets](..)  
**Previous:** [Data Structures > Objects > Object Comparision](../Objects/13-object-comparision.md)  
**Next:** [Data Structures > Sets > Set Methods](02-set-methods.md)

<!-- PAGINATION_END -->
