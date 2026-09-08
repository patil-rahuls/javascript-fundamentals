## Data Structures > Object > Loop Over

> 🎯 Standard JavaScript Objects are not directly iterable like Arrays or Maps. To loop over them, you must first convert their keys, values, or entries into an Array using static `Object` methods.

---
&nbsp;

Consider this nested object as our example:

```javascript
const performance = {
  rahul: { startedAt: 72, high: 99 },
  hitesh: { startedAt: 51, high: 98 },
  aajesh: { startedAt: 83, high: 100 },
};
```

### 1. `Object.keys()`

Returns an array containing only the **properties (keys)** of the object.

```javascript
const performers = Object.keys(performance);

console.log(performers);
// [ 'rahul', 'hitesh', 'aajesh' ]
```

### 2. `Object.values()`

Returns an array containing only the **values** of the object.

```javascript
const values = Object.values(performance);

console.log(values);
/*
[
  { startedAt: 72, high: 99 },
  { startedAt: 51, high: 98 },
  { startedAt: 83, high: 100 }
]
*/
```

### 3. `Object.entries()`

Returns an array of the object's key-value pairs, represented as `[key, value]` arrays. This is the most useful method for looping over an entire object.

```javascript
const entries = Object.entries(performance);

console.log(entries);
/*
[
  [ "rahul", { startedAt: 72, high: 99 } ],
  [ "hitesh", { startedAt: 51, high: 98 } ],
  [ "aajesh", { startedAt: 83, high: 100 } ]
]
*/
```

#### Looping with `for...of` and Destructuring

Once converted to an array of entries, you can easily loop over it. Notice how we can deeply destructure both the key and the nested object values directly in the loop signature. 

*(Remember that your destructured variables must match the exact property names of the underlying object, or use aliasing).*

```javascript
// Destructuring [key, { values }]
for (const [plyr, { startedAt, high }] of Object.entries(performance)) {
  console.log(`${plyr}'s score opened at ${startedAt} and closed at${high}`);
}

// "rahul's score opened at 72 and closed at 99"
// "hitesh's score opened at 51 and closed at 98"
// "aajesh's score opened at 83 and closed at 100"
```

---
&nbsp;

<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures Objects Object This Keyword](07-object-this-keyword.md)  

▶️ [Data Structures Objects Object Properties Count](09-object-properties-count.md)

<!-- PAGINATION_END -->
&nbsp;
