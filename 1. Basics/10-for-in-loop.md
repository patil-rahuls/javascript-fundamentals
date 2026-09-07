## **`for...in`** Loop

> 🎯 The **`for...in`** loop iterates over the enumerable properties (i.e., the **keys** or **indices**) of an object.

---
&nbsp;

### 1. Iterating over an Array
When used with an array, it iterates over the **indices** (as strings).

```javascript
let list = [4, 5, 6];

for (let i in list) {
  console.log(i); // Prints indices
}
// "0"
// "1"
// "2"
```

### 2. Iterating over an Object
When used with an object, it iterates over the **keys** (property names).

```javascript
var employee = {
  id: "123",
  name: "Rahul",
  address: "India",
  salary: "LOL",
};

for (const key in employee) {
  console.log(key); // Prints keys
}
/*
id
name
address
salary
*/
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Arrow Function [ES6]](09-arrow-functions.md)  

▶️ [**for...of** Loop [ES6]](11-for-of-loop.md)

<!-- PAGINATION_END -->
&nbsp;
