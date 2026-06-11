## Data Structures > Object

### Loop over Objects

Consider this object as an example.

```javascript
const performance = {
  rahul: { startedAt: 72, high: 99 },
  hitesh: { startedAt: 51, high: 98 },
  aajesh: { startedAt: 83, high: 100 },
};
```

> ### 1. `Object.keys()`

```javascript
const perfomers = Object.keys(performance);
// returns an array of properties
// of "performance" object.

console.log(perfromers);
// ['rahul' , 'hitesh' , 'aajesh']

for (const perfromer of Object.keys(performance)) {
  console.log(perfromer);
}
// 'rahul'
// 'hitesh'
// 'aajesh'

// This is similar to for-in loop.
// It loops through the properties.
for (const perfromer in performance) {
  console.log(perfromer);
}
```

&nbsp;

> ### 2. `Object.values()`

```javascript
const values = Object.values(performance);
// returns an array of the values
// of "performance" object.

console.log(values);
// { startedAt : 72 , high : 99}
// { startedAt : 51 , high : 98}
// { startedAt : 83 , high : 100}
```

&nbsp;

> ### 3. `Object.entries()`

```javascript
const entries = Object.entries(performance);
// array(1) [ "rahul" ,  { startedAt : 72 , high : 99} ]
// array(2) [ "hitesh" , { startedAt : 51 , high : 98} ]
// array(3) [ "aajesh" , { startedAt : 83 , high : 100}]

// We can loop over the 'entries'
// and use destructuring.
// Remember to use correct property names.
for (const [player, { startedAt, high }] of Object.entries(performance)) {
  console.log(`${player}'s score opened at ${startedAt} and closed at ${high}`);
}
```

---

---

<!-- PAGINATION_START -->

**Parent:** [Objects](..)  
**Previous:** [Data Structures > Objects > Object This Keyword](07-object-this-keyword.md)  
**Next:** [Data Structures > Objects > Object Properties Count](09-object-properties-count.md)

<!-- PAGINATION_END -->
