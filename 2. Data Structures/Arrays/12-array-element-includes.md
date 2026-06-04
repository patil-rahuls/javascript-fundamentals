## Data Structures > ARRAY

> Check if element exists

> Checks for Equality

### `Array.prototype.includes()`

We pass the element to the function.

Returns `true` _(Boolean)_ if the element is present in the array, returns `false` otherwise.

Checks for Equality using Strict Equality `===`.

```javascript
const myArr = [55, 'rahul', 'hitesh', 'aajesh'];

myArr.includes('rahul');
// true

myArr.includes('anish');
// false


// No Type Coercion occurs
myArr.includes('55');
// false
// Because string ‘55’ is passed.
```
---
