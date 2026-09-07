## Rest Operator (**`...`**) (ES6)

> 🎯 The rest operator **`...`** (used on the **LHS** of an assignment `=`) **packs** elements of a list into iterable objects such as Arrays and Objects.
>
>
> **Valid Use Cases:**
> 1. Packing an iterable
> 2. As a function parameter.
>
> *Note: There can only be **ONE** rest element in an expression. It **must** be at the very end of any destructuring assignment.*

---
&nbsp;

### 1. Packing an Iterable

**Array:**
```javascript
const arr = [1, 2, 3, 4, 5, 6, 7];

const [a, b, c, d, ...restValues] = arr;

console.log(a, b, c, d, restValues);
// 1  2  3  4  [5, 6, 7]

console.log(a, b, c, d, ...restValues);
// 1  2  3  4  5  6  7
```
*Note: `restValues` becomes an array of the remaining elements. Hence the name "REST" operator.*

**Object:**
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

---

### 2. Rule: Rest Element Must Be Last

> ⚠️ **Important:** The rest operator has to be at the **end** of any destructuring assignment. Otherwise, JavaScript wouldn't know how many elements to pack.

```javascript
// ❌ Array Error:
const arr = [1, 2, 3, 4, 5, 6, 7];
const [a, b, ...someValues, d] = arr;
// SyntaxError: Rest element must be last element

// ❌ Object Error:
const product = { id: 1, title: 'Shirt', price: 20, color: 'Blue' };
const { id, ...titleAndPrice, color } = product;
// SyntaxError: Rest element must be last element
```

---

### 3. As a Function Parameter

**Array _(Variadic Functions)_:**
```javascript
function sumAll(...numbers) {
  // All passed arguments are packed into the 'numbers' array
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(10, 20, 30)); 
// 60

// ✅ Advantage: The function can accept individual values OR a spread array
let inputArr = [10, 20, 30];
console.log(sumAll(...inputArr));
console.log(sumAll(12, 13, 14));
```

**Object:**
```javascript
function showInfo(rollNo, { name, ...info }) {
  console.log(`Roll No. ${rollNo}`);
  console.log(`${name} is ${info.age}, and lives in${info.city}`);
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
