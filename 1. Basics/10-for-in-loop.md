## **for...in** Loop

> **for...in** iterates over the enumerable property i.e. **keys/index** of an object.

> Example 1: Array

```javascript
let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // prints indices
}

// "0", "1", "2"

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
  console.log(i); // prints keys
}
// id
// name
// address
// salary

```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Arrow Function [ES6]](09-arrow-functions.md)  

▶️ [**for...of** Loop [ES6]](11-for-of-loop.md)

<!-- PAGINATION_END -->
&nbsp;
