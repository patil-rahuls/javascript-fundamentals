## Data Structures > Sets

### Set Methods

Sets are high performance unordered unique collection data structure.

Consider this Set as an example

```javascript
const names = new Set (
  ['rahul' , 'hitesh' , 'rahul', 'rahul',  'aajesh' , 'rahul']
); // duplicate item 'rahul'

console.log(names);
// set(3) {'hitesh', 'aajesh' , 'rahul'}
```

&nbsp;

### `Set.prototype.add()`
In Map we have `map.set()` method.
That's the only distinction in their methods. Rest all the methods are same.

```javascript
names.add("anil");
names.add("milan");

console.log(names);
// set(5) {'hitesh', 'aajesh' , 'rahul', 'anil', 'milan'}

names.add("kisan");
names.add("kisan");
// Will get added only once (Set has to have unique values)

console.log(names);
// set(6) {'hitesh', 'aajesh' , 'rahul', 'anil', 'milan', 'kisan'}
```

&nbsp;

### `Set.prototype.has()`
Checks if an element exists in a Set.

```javascript
names.has("anil");
// false

names.has("hitesh");
// true
```

&nbsp;

### `Set.prototype.delete()`
Delete item from Set.

```javascript
names.delete("kisan");

console.log(names);
// set(5) {'hitesh', 'aajesh' , 'rahul', 'anil', 'milan'}
```

&nbsp;

### `Set.prototype.clear()`
Empty/Truncate the Set.

```javascript
names.clear();
```

&nbsp;

### `Set.prototype.keys()`
```javascript
names.keys();
```

&nbsp;

### `Set.prototype.values()`
```javascript
names.values();
```

&nbsp;

### `Set.prototype.entries()`
```javascript
names.entries();
```

---
&nbsp;

There is no method to get a specific item from a set. Because, there is no order(index) defined in which the items are stored in a Set unlike arrays.

When using Sets, we just care about uniqueness and whether the item is present or not(in the Set).

---
