## Data Structures > Map > Methods

Maps are high performance key - value paired data structure.

In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.

### Map.prototype.**set()**

Adds a pair to the Map and returns updated map.

```javascript
const myMap = new Map();

myMap.set("name", "Rahul");

// We can chain the set() method too
myMap
  .set(1, "Mumbai")
  .set(2, "India")
  .set(true, "I am free now.")
  .set(false, "I am busy.");

console.log(myMap);
/* Map(3) {
    "name" ="Rahul",
    1 ="Mumbai",
    2 ="India",
    true ='I am free now.',
    false ='I am busy.',
 }
*/

```
_Observe that the key types are preserved in Map._

### Map.prototype.**get()**

Retrieve data from a Map by value.

```javascript
myMap.get(true);
// I am free now.

myMap.get("age");
// undefined
// Because 'age' key is not present in 'myMap'.

```

### Map.prototype.**has()**

Checks if a key exists in a Map.

```javascript
myMap.has("hobbies");
// false

myMap.has(2);
// true

```

### Map.prototype.**delete()**

Deletes an item from a Map.

```javascript
myMap.delete(2);
myMap.delete(1);

```

### Map.prototype.**size**

Returns size of Map.

***IMP***: _This is not a method. no parens **()**._

```javascript
myMap.size;

```

### Map.prototype.**clear()**

Truncates Map.

```javascript
myMap.clear();

```

### Map.prototype.**keys()**

Retrieve keys from the Map.

```javascript
myMap.keys();

```

### Map.prototype.**values()**

Retrieve values from the Map.

```javascript
myMap.values();

```

### Map.prototype.**entries()**

Retrieve entries _[key, value]_ from the Map.

```javascript
myMap.entries();

```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Maps](../Maps/)
  
◀️ [Data Structures Maps Map](01-map.md)  

▶️ [Data Structures Maps Map Iteration](03-map-iteration.md)

<!-- PAGINATION_END -->
&nbsp;
