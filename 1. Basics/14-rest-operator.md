## **"..."** Rest Operator (ES6)

**"..."** is on the LHS of **=** assignment.

> packs elements of a LIST into iterable objects such as Arrays, Sets, Maps and Objects.

> **Rest Operator can only be used in following 2 cases:**
>
> 1. Packing an iterable.
> 2. As a function parameter.

> There can only be ONE Rest element in an expression.

> The Rest Operator has to be at the end of any destructuring assignment.

&nbsp;

> Example 1: Packing an iterable

***Array***
```javascript
const arr = [1, 2, 3, 4, 5, 6, 7];

const [a, b, c, d, ...restValues] = arr;

console.log(a, b, c, d, restValues);
// 1  2  3  4  [5  6  7]

console.log(a, b, c, d, ...restValues);
// 1  2  3  4  5  6  7

```
_'restValues' will be an array of the rest of the elements of arr. Hence the name "REST" operator(I believe)._

***Object***
```javascript
const product = {
  id: 1,
  title: "Shirt",
  price: 20,
  color: "Blue",
};

const { id, title, ...pricingAndDetails } = product;

console.log(pricingAndDetails);
/*
{
 price: 20,
 color: 'Blue'
}
*/

```

&nbsp;

_**IMP: The rest operator has to be at the end of any destructuring assignment**, else how will Javascript know until when it has to take the elements?_

_Also there can only be one rest element in any destructuring assignment._

> Example 2: Rest element must be last element.

```javascript
// Array
const arr = [1, 2, 3, 4, 5, 6, 7];

const [ a, b, ...someValues, d] = arr;
// ❌ Error : "Rest element must be last element."

// Object
const product = {
  id: 1,
  title: 'Shirt',
  price: 20,
  color: 'Blue'
};

const { id, ...titleAndPrice, color } = product;
// ❌ Error : "Rest element must be last element."

```

&nbsp;

> Example 3: As a function parameter

***Array***
```javascript
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.sumAll(10, 20, 30);
// 60

```
_In the above code, all arguments passed to this function would be packed into this array 'numbers'._

_Advantage of Rest Operator as a function parameter:_

_The function above can now accept both a single value as well as a spread-array as its input._

```javascript
let inputArr = [10, 20, 30];

console.sumAll(...inputArr);
console.sumAll(12, 13, 14);

```


***Object***
```javascript
function showInfo(rollNo, { name, ...info }) {
  console.log(`Roll No. ${rollNo}`);

  console.log(`${name} is ${info.age}, and lives in ${info.city}`);
}

const user = {
  name: "Rahul",
  age: 25,
  city: "Pune",
};

showInfo(76, user);

```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Spread Operator **"..."** [ES6]](13-spread-operator.md)  

▶️ [Error Types](15-error-types.md)

<!-- PAGINATION_END -->
&nbsp;
