## Data Structures > ARRAY

> Get element index by expression

> Checks for Expression

### `Array.prototype.findIndex()`

Works same as `find()` method except that it finds the index of the found element and not the element itself.

This also requires a callback function that returns a boolean value.

The method signature is similar to the `forEach()` method.


```javascript
const accounts = [
  { owner: "rahul", bal: 66345 },
  { owner: "hitesh", bal: 74783 },
  { owner: "aajesh", bal: 59623 }
];

const accIndex = accounts.findIndex(acc => acc.bal > 70000);

console.log(accIndex);
// 1


const fetchedAccount = accounts.splice(accIndex, 1);

console.log(fetchedAccount);
/*
{
  owner: "hitesh",
  bal: 74783
}
*/


// This looks similar to indexOf() which finds an array element’s index.

// But the main difference is that we can write any complex expression in findIndex() method to retrieve an element’s index.

// indexOf() checks for equality.
// findIndex() checks for an expression.
```
---
