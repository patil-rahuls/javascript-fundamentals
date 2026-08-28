## Data Structures > Set > Methods

Sets are high performance **unordered unique collection** data structure.

Consider this set as an example.

```javascript
const names = new Set(["rahul", "hitesh", "rahul", "rahul", "aajesh", "rahul"]); // duplicate item 'rahul'

console.log(names);
// set(3) {'hitesh', 'aajesh' , 'rahul'}

```

### Set.prototype.**add()**

_In Map we have **map.set()** method. That's the only distinction in their methods. Rest all the methods of sets are same._

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

### Set.prototype.**has()** - _checks if an element exists in a set._

```javascript
names.has("anil");
// false

names.has("hitesh");
// true

```

### Set.prototype.**delete()** - _delete item from set_

```javascript
names.delete("kisan");

console.log(names);
// set(5) {'hitesh', 'aajesh' , 'rahul', 'anil', 'milan'}

```

### Set.prototype.**clear()** - _empty/truncate the set_

```javascript
names.clear();

```

### Set.prototype.**keys()**

```javascript
names.keys();

```

### Set.prototype.**values()**

```javascript
names.values();

```

### Set.prototype.**entries()**

```javascript
names.entries();

```

_There is no method to get a specific item from a set._

_Because, there is no order(index) defined in which the items are stored in a Set unlike arrays._

**_When using Sets, we just care about uniqueness and whether the item is present or not._**

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Sets](../Sets/)  

◀️ [Data Structures Sets Set](01-set.md)  

▶️ [Data Structures Sets Set Iteration](03-set-iteration.md)

<!-- PAGINATION_END -->
&nbsp;
