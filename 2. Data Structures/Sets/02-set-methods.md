## Data Structures > Set > Methods

> 🎯 Sets share almost identical built-in methods with Maps, with one key distinction: you use **`.add()`** to insert values into a Set instead of `.set()`. Because Sets are strictly unordered, there is no way to retrieve a specific element by index—when using Sets, we only care about **uniqueness** and checking **if an item is present**.

---
&nbsp;

Consider this Set as our starting example:

```javascript
const names = new Set(["rahul", "hitesh", "rahul", "rahul", "aajesh", "rahul"]); 
// Duplicates of 'rahul' are ignored

console.log(names);
// Set(3) { 'rahul', 'hitesh', 'aajesh' }
```

### 1. `Set.prototype.add(value)`

Appends a new element to the Set. If you try to add a value that already exists, the Set will simply ignore it, maintaining its unique nature.

```javascript
names.add("anil");
names.add("milan");

console.log(names);
// Set(5) { 'rahul', 'hitesh', 'aajesh', 'anil', 'milan' }

// Attempting to add duplicates
names.add("kisan");
names.add("kisan"); // Ignored

console.log(names);
// Set(6) { 'rahul', 'hitesh', 'aajesh', 'anil', 'milan', 'kisan' }
```

### 2. `Set.prototype.has(value)`

Returns a boolean indicating whether an element with the specified value exists in the Set or not. 

```javascript
console.log(names.has("anil"));
// true

console.log(names.has("john"));
// false
```

### 3. `Set.prototype.delete(value)`

Removes the specified element from the Set.

```javascript
names.delete("kisan");

console.log(names);
// Set(5) { 'rahul', 'hitesh', 'aajesh', 'anil', 'milan' }
```

### 4. `Set.prototype.clear()`

Truncates the Set entirely, removing all elements.

```javascript
names.clear();
console.log(names.size); // 0
```

---
&nbsp;

### 5. Iterators: `keys()`, `values()`, & `entries()`

Just like Maps, Sets provide methods that return iterable objects. However, because Sets do not have keys, `.keys()` and `.values()` are functionally identical (both yield the values). The `.entries()` method yields an array of `[value, value]` for each element, primarily to keep the API compatible with Maps.

```javascript
names.keys();
names.values();
names.entries();
```

---
&nbsp;

<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Sets](../Sets/)  

◀️ [Data Structures Sets Set](01-set.md)  

▶️ [Data Structures Sets Set Iteration](03-set-iteration.md)

<!-- PAGINATION_END -->
&nbsp;
