## Data Structures > ARRAY

> Get element index by value

### `Array.prototype.indexOf()`

> ***Returns index of element present in the array, `-1` otherwise.***
>
> ***Checks for Equality using Strict Equality `===`.***

```javascript
const myArr = [55, 'rahul', 'hitesh', 'aajesh'];

myArr.indexOf('rahul');
// 1

myArr.indexOf('milan');
// -1

myArr.indexOf('55');
// -1 (string ‘55’ is passed. No Type Coercion occurs)
```
---
