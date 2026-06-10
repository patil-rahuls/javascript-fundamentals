## `for...in` Loop

> **_`for...in` iterates over the enumerable property i.e. `keys/index` of an object._**

> Example 1: Array

```javascript
let list = [4, 5, 6];

for (let i in list) {
  console.log(i);
  // "0", "1", "2"
}
```

&nbsp;

> Example 2: Object

```javascript
var employee = {
  id: "123",
  name: "Rahul",
  address: "India",
  salary: "LOL",
};

for (const i in employee) {
  console.log(i);
}
// id
// name
// address
// salary
```

---

---

<!-- PAGINATION_START -->

**Parent:** [1. Basics](..)  
**Previous:** [Arrow Function [ES6]](09-arrow-functions.md)  
**Next:** [`for...of` Loop [ES6]](11-for-of-loop.md)

<!-- PAGINATION_END -->
