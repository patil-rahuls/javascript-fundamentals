## Data Structures > ARRAY

> Get element index by expression

### `Array.prototype.findIndex()`

> ***Retrieve the index of the element that satisfies a certain condition written in the callback function.***
>
> ***The callback function returns a boolean value.***
>
> ***Checks for an expression.***

Method signature is similar to the `forEach()` method.

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
