## Data Structures > Set > Iteration

Sets are high performance **unordered unique collection** data structure.

Consider this set as an example.

```javascript
const names = new Set(["rahul", "hitesh", "rahul", "rahul", "aajesh", "rahul"]); // duplicate item 'rahul'

console.log(names);
// set(3) {'hitesh', 'aajesh' , 'rahul'}

```

### **for-of** loop

Sets are iterables. We can loop over them using for-of loop.

```javascript
for (const itm of names) {
  console.log(itm);
}
// 'hitesh'
// 'aajesh'
// 'rahul'

```

### **forEach()** method

```javascript
names.forEach(function (val, key, set) {
  console.log(`${key} : ${val}`);
  // will print key as same as val
});
// hitesh : hitesh
// aajesh : aajesh
// rahul : rahul
```


The key in forEach() over a Set does not make any sense there. But to make this as a common function available to all iterables, its signature is kept same across all iterables.

For such values we can use the throwaway variable ‘_’
```javascript
names.forEach(function (val, _, set) {
  console.log(`${val}`);
});
// hitesh
// aajesh
// rahul

```

Disadvantages: **break** and **continue** does not work in **forEach()**! So if you need to break out of the loop, then use the **for-of** loop.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Sets](../Sets/)  

◀️ [Data Structures Sets Set Methods](02-set-methods.md)  

▶️ [Data Structures Sets Set Use Case](04-set-use-case.md)

<!-- PAGINATION_END -->
&nbsp;
