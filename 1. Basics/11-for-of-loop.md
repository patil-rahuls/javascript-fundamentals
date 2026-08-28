## **for...of** Loop (ES6)

> **for...of** iterates over a list of **values** of the enumerable properties (**keys/index**) of an object.

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
  console.log(item); 
  // [index, value]

  console.log(`Item number ${item[0] + 1} is ${item[1]}`);
}

```

And we can always destructure it.
```javascript
for (const [index, item] of Object.entries(menu)) {
  console.log(`${index + 1} : ${item}`);
}

```
---
&nbsp;

**_IMP_** - _The **for..of** loop only supports iterable objects like arrays. JavaScript objects are not iterable by default._

> Example 3: Iterating over an Object.

```javascript
const p = {
  p1: "value1",
  p2: "value2",
  p3: "value3",
};

// ❌ Incorrect for objects.
for (const val of p) {

  // TypeError: p is not iterable

}

// ✅ Correct:
for (const key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key + " -> " + p[key]);
  }
}

```

_We can simply use **Object.values()**, **Object.entries()** methods to iterate over an object to get values, and **Object.keys()** to get properties of the object._

---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [**for...in** Loop](10-for-in-loop.md)  

▶️ [Destructuring Assignment [ES6]](12.1-destructuring-assignment.md)

<!-- PAGINATION_END -->
&nbsp;
