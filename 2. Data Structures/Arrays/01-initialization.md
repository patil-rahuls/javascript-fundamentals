## Data Structures > Array > Initialization

## Initializing an Array

**1. The Simplest Way (Array Literal)**
```javascript
const names = ["rahul", "hitesh", "aajesh"];
```

**2. Using the Constructor Function `new Array()`**
```javascript
const birthYears = new Array(1992, 1991, 1993);
```

**3. Using the Static Method `Array.from()`**
> **`Array`** is a constructor function and **`from()`** is its static method. It is highly useful for generating sequences or converting iterables (like DOM NodeLists) into real arrays.

```javascript
// Generate an array of 1s
const num = Array.from({ length: 7 }, () => 1);
// [1, 1, 1, 1, 1, 1, 1]

// Generate a sequence of numbers (using index 'i')
const numSerial = Array.from({ length: 7 }, (curr, i) => i + 1);
// [1, 2, 3, 4, 5, 6, 7]

// We can omit the 'curr' parameter using an underscore '_'
const numSerial2 = Array.from({ length: 7 }, (_, i) => i + 1);

// Convert a DOM NodeList into an Array
const users = Array.from(document.querySelectorAll('.user_name'));
```

**Data Types in Arrays:**

Arrays in JavaScript can be **homogeneous** (one data type) or **heterogeneous** (mixed data types, including other arrays).

```javascript
// Heterogeneous Array (mixed types)
const heterogeneousArr = ["rahul", "hitesh", 1990, 1000];

// Nested Array (arrays inside arrays)
const newArr = ['Planes', 'Bus', 'Cars', heterogeneousArr];
```

## Length of an Array

```javascript
// Get the length (no parentheses required)
const howMany = myArr.length; 

// Expressions are allowed inside the bracket notation [ ]
console.log(myArr[myArr.length - 1]); 

// Arrays are technically objects under the hood
console.log(typeof myArr); 
// "object" 
```

## Removing / Deleting Array Items

> ⚠️ **Note:** There is no dedicated static method to directly remove and re-index an element from an array. Here is how different approaches behave:

**1. `delete` keyword** : 
*Removes the element, BUT **does not** re-index the array or update its length (leaves a "hole").*
```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

delete arr[3];
// [1, 2, 3, <1 empty item>, 5, 6, 7, 8]
```

**2. Setting item to `null` or `undefined`** : 
*Replaces the value, but keeps the index slot occupied.*
```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr[3] = null;
// [1, 2, 3, null, 5, 6, 7, 8]

arr[3] = undefined;
// [1, 2, 3, undefined, 5, 6, 7, 8]
```

**3. `splice()` method (✅ Recommended)** : 
*Mutates the array, removes the item, and properly **re-indexes** the remaining elements.*
```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const removedItem = arr.splice(3, 1);
// removedItem = [ 4 ]

console.log(arr);
// [1, 2, 3, 5, 6, 7, 8] (Properly shifted!)

console.log(typeof removedItem);
// "object" (splice always returns an array of the removed items)
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)

◀️ [Basics](../../1.%20Basics/)  

▶️ [Data Structures > Arrays > Mutate Arrays](02-mutate-arrays.md)

<!-- PAGINATION_END -->
&nbsp;
