## Data Structures > Array > Check Expression > _find()_

Checks if element exists.

### Array.prototype.**find()** - _checks for an expression_

Retrieve an array element that satisfies a certain condition written in the callback function.

The callback function returns a boolean value.

_Method signature is similar to the **forEach()** method._

```javascript
const myArr = [55, "rahul", "hitesh", "aajesh"];

const foundNum = myArr.find(itm => typeof itm === "number");

console.log(foundNum);
// 55

```

**find()** method does not return an array.

Instead it returns _THE FIRST ELEMENT_ which satisfies the condition in the callback function.

> Another example:

```javascript
const accounts = [
  { owner: "rahul", bal: 66345 },
  { owner: "hitesh", bal: 74783 },
  { owner: "aajesh", bal: 59623 },
];

const account = accounts.find(acc => acc.owner === "rahul");

console.log(account);
/*
{
  owner: "rahul",
  bal: 66345
}
*/

```

**filter()** returns an array.

**find()** returns an element.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Element Includes](12-array-element-includes.md)  

▶️ [Data Structures > Arrays > Array Element Index of](14-array-element-indexOf.md)

<!-- PAGINATION_END -->
&nbsp;
