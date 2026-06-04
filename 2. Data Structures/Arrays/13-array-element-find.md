## Data Structures > ARRAY

> Check if element exists

> Checks for Expression

### `Array.prototype.find()`

Retrieve an array element that satisfies a certain condition written in the callback function.

The callback function returns a boolean value.

Method signature is similar to the `forEach()` method.

Checks for an expression.

```javascript
const myArr = [55, 'rahul', 'hitesh', 'aajesh'];


const foundNum = myArr.find(itm =>  typeof itm === 'number' );

console.log(foundNum);
// 55
```

`find()` method does not return an array.

Instead it returns THE FIRST ELEMENT which satisfies the condition in the callback function.

> Another example:
```javascript
const accounts = [
  { owner: "rahul", bal: 66345 },
  { owner: "hitesh", bal: 74783 },
  { owner: "aajesh", bal: 59623 }
];

const account = accounts.find(acc => acc.owner === "rahul");

console.log(account);
/*
{
  owner: "rahul",
  bal: 66345
}
*/

// filter() returns an array
// find() returns an element
```
---
