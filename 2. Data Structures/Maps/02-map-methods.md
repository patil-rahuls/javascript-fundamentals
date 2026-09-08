## Data Structures > Map > Methods

> 🎯 The `Map` object provides built-in methods and properties to add, retrieve, check, and delete key-value pairs efficiently. Unlike standard Objects, Map methods strictly preserve the exact data type of your keys.

---

### 1. `Map.prototype.set(key, value)`

Adds a new key-value pair to the Map and returns the updated Map object. 
*Because it returns the Map itself, you can chain multiple `.set()` calls together.*

```javascript
const myMap = new Map();

myMap.set("name", "Rahul");

// Chaining set() methods
myMap
  .set(1, "Mumbai")
  .set(2, "India")
  .set(true, "I am free now.")
  .set(false, "I am busy.");

console.log(myMap);
/* 
Map(5) {
  "name" => "Rahul",
  1 => "Mumbai",
  2 => "India",
  true => "I am free now.",
  false => "I am busy."
}
*/
```

### 2. `Map.prototype.get(key)`

Retrieves the data associated with a specific key. Returns `undefined` if the key does not exist.

```javascript
console.log(myMap.get(true));
// "I am free now."

console.log(myMap.get("age"));
// undefined (Because 'age' key is not present)
```

### 3. `Map.prototype.has(key)`

Checks if a specific key exists in the Map. Returns a boolean (`true` or `false`).

```javascript
console.log(myMap.has("hobbies")); 
// false

console.log(myMap.has(2)); 
// true
```

### 4. `Map.prototype.delete(key)`

Deletes a specific key-value pair from the Map. Returns `true` if successful, or `false` if the key didn't exist.

```javascript
myMap.delete(2);
myMap.delete(1);
```

### 5. `Map.prototype.size`

> ⚠️ **Important:** `size` is a property, **not** a method. Do not use parentheses `()`.

Returns the total number of key-value pairs currently in the Map.

```javascript
console.log(myMap.size);
```

### 6. `Map.prototype.clear()`

Truncates the Map, completely removing all key-value pairs.

```javascript
myMap.clear();
```

---

### 7. Iterators: `keys()`, `values()`, & `entries()`

These methods return iterable iterator objects containing the Map's data, which can be looped over (e.g., using `for...of`).

*   **`myMap.keys()`**: Retrieves an iterator of all the *keys*.
*   **`myMap.values()`**: Retrieves an iterator of all the *values*.
*   **`myMap.entries()`**: Retrieves an iterator of all the `[key, value]` pairs.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Maps](../Maps/)
  
◀️ [Data Structures Maps Map](01-map.md)  

▶️ [Data Structures Maps Map Iteration](03-map-iteration.md)

<!-- PAGINATION_END -->
&nbsp;
