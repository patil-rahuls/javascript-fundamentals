## Data Structures > Maps

> ***Maps are high performance key - value paired data structure.***
>
> ***In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.***

&nbsp;
### Map Methods

> ### `Map.prototype.set()`
Adds a pair to the Map and returns updated map.
```javascript
const myMap = new Map();

myMap.set('name' , 'Rahul');

// We can chain the set() method too
myMap
  .set(1 , 'Mumbai')
  .set(2 , 'India')
  .set(true , 'I am free now.')
  .set(false , 'I am busy.');

console.log(myMap);
// Map(3) {
//    "name" => "Rahul",
//    1 => "Mumbai",
//    2 => "India",
//    true => 'I am free now.',
//    false => 'I am busy.',
// }

// Observe that the key types are preserved in Map.
```

&nbsp;
> ### `Map.prototype.get()`
Retrieve data from a Map by value
```javascript
myMap.get(true);
// I am free now.

myMap.get('age');
// undefined
// Because age key is not present in 'myMap'.
```

&nbsp;
> ### `Map.prototype.has()`
Checks if a key exists in a Map
```javascript
myMap.has('hobbies');
// false

myMap.has(2);
// true
```

&nbsp;
> ### `Map.prototype.delete()`
Deletes an item from a Map
```javascript
myMap.delete(2);
myMap.delete(1);
```

&nbsp;
> ### `Map.prototype.size`
Returns size of Map.

**IMP: This is not a method. no parens `()`.**
```javascript
myMap.size; // no parentheses after size.
```

&nbsp;
> ### `Map.prototype.clear()`
Truncates Map
```javascript
myMap.clear();
```

&nbsp;
> ### `Map.prototype.keys()`
Retrieve keys from the Map
```javascript
myMap.keys();
```

&nbsp;
> ### `Map.prototype.values()`
Retrieve values from the Map
```javascript
myMap.values();
```

&nbsp;
> ### `Map.prototype.entries()`
Retrieve entries [key, value] from the Map
```javascript
myMap.entries();
```
---
