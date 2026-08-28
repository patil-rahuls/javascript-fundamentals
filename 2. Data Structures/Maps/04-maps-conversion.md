## Data Structures > Map > Conversion

Maps are high performance key - value paired data structure.

In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.

## Converting Maps to Objects & Arrays

### _Convert Map to Array_

_Spread Operator **...** is used to convert a Map to an Array._

```javascript
const myMap = new Map(...);

const myArr = [...myMap];

```

### _Convert Array to Map_

_Array has to be of 'entries' items, i.e. each item should be an array of exactly 2 items._

```javascript
const entriesArr = [
  ["name", "Rahul"],
  ["age", 25],
];

const myMap = new Map(entriesArr);

```

### _Convert Map to Object_

_**Object.fromEntries()** is used to convert a Map to an Object._

```javascript
const userMap = new Map([
  ["name", "Rahul"],
  ["age", 25],
]);

const myObj = Object.fromEntries(userMap);
/*
{
  name: 'Rahul',
  age: 25
}
*/

```

### _Convert Object to Map_

_**Object.entries()** is used to convert an Object to a Map._

```javascript
const myObj = {
  name: 'Rahul',
  age: 25
};

const myMap = new Map(Object.entries(myObj)));

console.log(myMap);
/*
[
  [ 'name' , 'Rahul'],
  [ 'age' , 25],
]
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
