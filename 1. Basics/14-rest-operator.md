## `"..."` Rest Operator [ES6]

`"..."` is on the LHS of `=` assignment.

The Rest Operator packs elements of a LIST into iterable objects such as Arrays, Sets, Maps and Objects.

Rest Operator can only be used in following 2 cases:
1. Packing an iterable.
2. As a function parameter.

There can only be ONE Rest element in an expression.

The Rest Operator has to be at the end of any destructuring assignment.

> Example 1: Packing an iterable

```javascript
// Array
const arr = [1, 2, 3, 4, 5, 6, 7];

const [ a, b, c, d, ...restValues ] = arr;
// ‘restValues’ will be an array of the rest of the elements of arr. Hence the name "REST" operator(I believe).

console.log(a, b, c, d, restValues);
// 1  2  3  4  [5  6  7]

console.log(a, b, c, d, ...restValues);
// 1  2  3  4  5  6  7



// Object
const product = {
  id: 1,
  title: 'Shirt',
  price: 20,
  color: 'Blue'
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

> Example 2: Rest element must be last element.

IMP: The rest operator has to be at the end of any destructuring assignment, else how will Javascript know until when it has to take the elements? Also there can only be one rest element in any destructuring assignment.

```javascript
// Array
const arr = [1, 2, 3, 4, 5, 6, 7];

const [ a, b, ...someValues, d] = arr;
// ❌ incorrect. Rest operator has to be at the end.
// Error : "Rest element must be last element."


// Same applies to Objects too.
const product = {
  id: 1,
  title: 'Shirt',
  price: 20,
  color: 'Blue'
};

const { id, ...titleAndPrice, color } = product;
// ❌ incorrect. Rest operator has to be at the end.
// Error : "Rest element must be last element."
```

&nbsp;

> Example 3: As a function parameter.

```javascript
// Array Example
function sumAll(...numbers) {
  // All arguments passed to this function would be packed into this array 'numbers'.
  // 'numbers' is now a real array: [10, 20, 30]
  return numbers.reduce((total, num) => total + num, 0);
}

console.sumAll(10, 20, 30);
// 60
/* Advantage of Rest Operator as a function parameter:
The function above can now accept both a single value as well as a spread-array as its input.*/
let inputArr = [10, 20, 30];

console.sumAll(...inputArr);
// 60


// Object Example
function showInfo(rollNo, { name, ...info}){
  console.log(`Roll No. ${rollNo}`);

  console.log(`${name} is ${info.age}, and lives in ${info.city}`);
}

const user = {
  name: "Rahul",
  age: 25,
  city: "Pune"
};

showInfo(76, user);
```

---
