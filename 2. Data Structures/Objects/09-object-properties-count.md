## Data Structures > Object > Size

> 🎯 Unlike Arrays (which have a `.length` property) or Maps (which have a `.size` property), standard JavaScript Objects do not have a built-in property to check their size. The size of an object is determined by the number of properties (keys) it holds.

---
&nbsp;

### `Object.keys().length`

To find the size of an object, you first convert its keys into an array using `Object.keys()`, and then check the `.length` of that resulting array.

```javascript
const myObj = {
  firstName: "Rahul",
  lastName: "Patil",
  age: 2049 - 2024,
};

// 1. Object.keys(myObj) returns ['firstName', 'lastName', 'age']
// 2. .length returns the count of items in that array
const size = Object.keys(myObj).length;

console.log(size);
// 3
```

---
&nbsp;

<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Objects](../Objects/)
  
◀️ [Data Structures > Objects > Object Loop](08-object-loop.md)  

▶️ [Data Structures > Objects > Object Freeze](10-object-freeze.md)

<!-- PAGINATION_END -->
&nbsp;
