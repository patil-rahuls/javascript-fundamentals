## `for...of` Loop [ES6]

> **_`for...of` iterates over a list of `values` of the enumerable properties (`keys/index`) of an object._**

> Example 1: Array

```javascript
const menu = ["North Indian", "Chinese", "South Indian"];

for (const item of menu) {
  console.log(item);
}
```

&nbsp;

> Example 2: When we want both indices and values.

```javascript
for (const item of Object.entries(menu)) {
  console.log(item); // [index, value]

  console.log(`Item number ${item[0] + 1} is ${item[1]}`);
}

// And we can always destructure it.
for (const [index, item] of Object.entries(menu)) {
  console.log(`${index + 1} : ${item}`);
}
```

&nbsp;

> Example 3: Iterating over an Object.
>
> **_The `for..of` loop only supports iterable objects like arrays._**
>
> **_JavaScript objects are not iterable by default._**

```javascript
const p = {
  p1: "value1",
  p2: "value2",
  p3: "value3",
};

// ❌ Incorrect for objects.
for (var val of p) {
  // ...
  // TypeError: p is not iterable
}

// ✅ Correct:
for (var key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key + " -> " + p[key]);
  }
}
```

_We can simply use `Object.values()`, `Object.entries()` methods to iterate over an object to get values, and `Object.keys()` to get properties of the object._

---

---

<!-- PAGINATION_START -->

**Parent:** [1. Basics](..)  
**Previous:** [`for...in` Loop](10-for-in-loop.md)  
**Next:** [Destructuring Assignment [ES6]](12.1-destructuring-assignment.md)

<!-- PAGINATION_END -->
