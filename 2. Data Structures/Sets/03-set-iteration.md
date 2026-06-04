## Data Structures > Sets

### Iterating over Sets

Sets are high performance unordered unique collection data structure.

Consider this Set as an example

```javascript
const names = new Set (
  ['rahul' , 'hitesh' , 'rahul', 'rahul',  'aajesh' , 'rahul']
); // duplicate item 'rahul'

console.log(names);
// set(3) {'hitesh', 'aajesh' , 'rahul'}
```

### Using `for-of` loop
Sets are iterables. We can loop over them using for-of loop.

```javascript
for (const itm of names) {
  console.log(itm);
}
// 'hitesh'
// 'aajesh'
// 'rahul'
```

&nbsp;

### Using `forEach()`

`forEach()` takes 3 parameters:
- Current Item in the iteration
- Current Key
- Entire Set

```javascript
names.forEach(function(val, key, set){
  console.log(`${key} : ${val}`);
  // will print key as same as val
});
// hitesh : hitesh
// aajesh : aajesh
// rahul : rahul

// The key in forEach() over a Set does not make any sense there.
// But to make this as a common function available to all
// iterables, its signature is kept same across all iterables.

// For such values we can use the throwaway variable ‘_’
names.forEach(function(val , _ , set){
  console.log(`${val}`);
});
// hitesh
// aajesh
// rahul
```

Disadvantages of using `forEach()`:

`break` and `continue` does not work! So if you need to break out of the loop, then use the `for-of` loop.

---
