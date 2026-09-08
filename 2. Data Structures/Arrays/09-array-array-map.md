## Data Structures > Array > Return new Array > **`map()`**

> 🎯 The **`map()`** method creates a **new array** populated with the results of calling a provided function on every element in the calling array. It transforms data in each iteration without changing (mutating) the original array.
>
> *A big advantage of using array data transformation methods like `map()` over traditional loops is that they return arrays, allowing us to **chain** multiple functions together.*

---
&nbsp;

### 1. Basic Transformation

The method signature is exactly the same as `forEach()` and `filter()`. 

```javascript
const numbers = [2, 4, 3, 0, 10, 20, 30, 40];
const power = 3;

// Implicit return using an arrow function
const newValues = numbers.map(val => val ** power);

console.log(numbers);
// [2, 4, 3, 0, 10, 20, 30, 40] (Original remains unchanged)

console.log(newValues);
// [8, 64, 27, 0, 1000, 8000, 27000, 64000]
```

### 2. Using All Parameters

Just like `forEach()`, the callback function in `map()` accepts 3 parameters: `(currentItem, index, entireArray)`.

```javascript
const numbers = [2, 4, 3, 0, 10, 20, 30, 40];

// Explicit return using block syntax
const newArr = numbers.map((curr, key, arr) => {
  return `${key} :${curr}`;
});

console.log(newArr);
/* 
[
  "0 : 2",
  "1 : 4",
  "2 : 3",
  "3 : 0",
  "4 : 10",
  "5 : 20",
  "6 : 30",
  "7 : 40"
]
*/
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Filter](08-array-array-filter.md)  

▶️ [Data Structures > Arrays > Array Elements Some](10-array-elements-some.md)

<!-- PAGINATION_END -->
&nbsp;
