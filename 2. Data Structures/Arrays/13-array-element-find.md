## Data Structures > ARRAY

> Check if element exists

### `Array.prototype.find()`

> **_Retrieve an array element that satisfies a certain condition written in the callback function._**
>
> **_The callback function returns a boolean value._**
>
> **_Checks for an expression._**

_Method signature is similar to the `forEach()` method._

```javascript
const myArr = [55, "rahul", "hitesh", "aajesh"];

const foundNum = myArr.find((itm) => typeof itm === "number");

console.log(foundNum);
// 55
```

_`find()` method does not return an array._

_Instead it returns THE FIRST ELEMENT which satisfies the condition in the callback function._

> Another example:

```javascript
const accounts = [
  { owner: "rahul", bal: 66345 },
  { owner: "hitesh", bal: 74783 },
  { owner: "aajesh", bal: 59623 },
];

const account = accounts.find((acc) => acc.owner === "rahul");

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
&nbsp;
---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
**Previous:** ← [Data Structures > Arrays > Array Element Includes](12-array-element-includes.md)  

**Next:** → [Data Structures > Arrays > Array Element Index of](14-array-element-indexOf.md)

<!-- PAGINATION_END -->
