## Data Structures > Map > Conversion

> 🎯 In real-world applications, you will frequently need to move data between Maps, Objects, and Arrays (e.g., when receiving JSON payloads from an API). JavaScript provides built-in methods to transition between these structures seamlessly.

---
&nbsp;

### 1. Maps ↔ Arrays

#### Convert Map to Array
Use the Spread Operator (`...`) to unpack a Map. This converts the Map into an array of `[key, value]` entry arrays.

```javascript
const myMap = new Map([
  ["name", "Rahul"],
  ["age", 25]
]);

const myArr = [...myMap];

console.log(myArr);
// [ ["name", "Rahul"], ["age", 25] ]
```

#### Convert Array to Map
To convert an array into a Map, the array **must** be an array of "entries" (meaning each item is a 2-element array containing exactly a `[key, value]`).

```javascript
const entriesArr = [
  ["name", "Rahul"],
  ["age", 25]
];

// Pass the entries array directly into the Map constructor
const myMap = new Map(entriesArr);
```

---

### 2. Maps ↔ Objects

#### Convert Map to Object
Use **`Object.fromEntries()`** to transform a Map (or any list of key-value pairs) back into a standard Object.

> ⚠️ **Warning:** If your Map contains non-string keys (like numbers or booleans), they will be automatically coerced into strings during this conversion, as standard Objects only support string or Symbol keys.

```javascript
const userMap = new Map([
  ["name", "Rahul"],
  ["age", 25],
]);

const myObj = Object.fromEntries(userMap);

console.log(myObj);
/*
{
  name: 'Rahul',
  age: 25
}
*/
```

#### Convert Object to Map
Because the `Map` constructor expects an array of entries, you can use **`Object.entries()`** to convert a standard Object into the required format, and pass it directly to `new Map()`.

```javascript
const myObj = {
  name: 'Rahul',
  age: 25
};

// Object.entries(myObj) returns: [ ["name", "Rahul"], ["age", 25] ]
const myMap = new Map(Object.entries(myObj));

console.log(myMap);
/*
Map(2) {
  "name" => "Rahul",
  "age" => 25
}
*/
```

---
&nbsp;

<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Maps](../Maps/)
  
◀️ [Data Structures Maps Map Iteration](03-map-iteration.md)  

▶️ [Data Structures Maps Maps Key References](05-maps-key-references.md)

<!-- PAGINATION_END -->
&nbsp;
