## Data Structures > ARRAY

### Initializing an Array

#### 1. Simplest way
```javascript
const names = ["rahul", "hitesh", "aajesh"];
```

#### 2. Using constructor function `new Array()`
```javascript
const birthYears = new Array(1992, 1991, 1993);
```

#### 3. Using static method `Array.from()`
`Array` is a constructor function and `from()` is `Array`'s static function.
```javascript
const num = Array.from({length : 7} , () => 1);
// [1, 1, 1, 1, 1, 1, 1]

const numSerial = Array.from({length : 7} , (curr , i ) => i+1);
// [1, 2, 3, 4, 5, 6, 7]

// We can omit the 'curr' parameter above and rewrite the expression as :
const numSerial2 = Array.from({length : 7} , ( _ , i ) => i+1);


// Select all of the HTML elements that has a specific class name
const users = Array.from(document.querySelectorAll('.user_name'));
```

#### Arrays in JavaScript may be homogeneous or heterogeneous.
i.e. composed of just one data type(homogeneous), or a mix of data type (heterogeneous).
```javascript
const heterogeneousArr = ["rahul", "hitesh", 1990 - 1000];

// In fact, arrays can even have other arrays as their elements.
const newArr = ['Planes', 'Bus', 'Cars', heterogeneousArr];
```
&nbsp;

### Length of an Array

```javascript
const howMany = myArr.length;
// no parenthesis after length

console.log(myArr[myArr.length - 1]);
// expressions are allowed inside [ ]

console.log(typeof myArr);
// "object" because Array is special type of Object.
```

&nbsp;

### Removing/Deleting Array items

There is no static method to remove an element from an array.
```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// using delete
delete arr[3];
// [1, 2, 3, <1 empty item>, 5, 6, 7, 8]

// 'delete' keyword removes the element, BUT doesn't 'reindex' the array or update its length.

arr[3] = null;
// [1, 2, 3, null, 5, 6, 7, 8]

arr[3] = undefined;
// [1, 2, 3, undefined, 5, 6, 7, 8]


// Solution: splice
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// First delete the element
delete arr[3];

// Then splice the array(mutates)
const removedItem = arr.splice(3, 1);
// removedItem = [ <1 empty item> ]

console.log(typeof removedItem);
// "object"
// (typeof 'removedItem' will be object)


// filter() or map() methods can also be used.
```
---
