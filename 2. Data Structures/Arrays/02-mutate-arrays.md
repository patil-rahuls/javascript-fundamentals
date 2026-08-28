## Data Structures > Array > _Mutate array_

### Array.prototype.**push()**

Adds an element at the end of an array and returns new length of the array.

```javascript
const myArr = ["rahul", "hitesh", "aajesh"];

const newLength = myArr.push("rishi");

console.log(myArr);
// ['rahul', 'hitesh', 'aajesh', 'rishi']

console.log(newLength);
// 4

```

&nbsp;

### Array.prototype.**pop()**

Removes last element from an array and returns the popped element.

```javascript
const myArr = ["rahul", "hitesh", "aajesh", "rishi", "anil"];

const remvd = myArr.pop();
// Removes last item 'anil'

console.log(remvd);
// 'anil'

console.log(myArr);
// ['rahul', 'hitesh', 'aajesh', 'rishi']

```

Any arguments to pop() is ignored.
```javascript
const remvd = myArr.pop('hitesh');

console.log(remvd);
// 'rishi'

```

&nbsp;

### Array.prototype.**unshift()**

Add an element at the start of an array and returns new length of the array.

```javascript
const myArr = ["rahul", "hitesh", "aajesh", "rishi"];

let newLength = myArr.unshift("kisan");

console.log(myArr);
// ['kisan', 'rahul', 'hitesh', 'aajesh', 'rishi']

console.log(newLength);
// 5

```

&nbsp;

### Array.prototype.**shift()**

Removes an element from the start of an array and returns the removed element.

```javascript
const myArr = ["kisan", "rahul", "hitesh", "aajesh", "rishi"];

let remvd = myArr.shift();

console.log(myArr);
// ['rahul', 'hitesh', 'aajesh', 'rishi']

console.log(remvd);
// 'kisan'

```

&nbsp;

### Array.prototype.**reverse()**

Reverses the order of the array items.

```javascript
const myArr = ["rahul", "hitesh", "aajesh", "rishi"];

const newArr = myArr.reverse();

console.log(newArr);
// ['rishi', 'aajesh', 'hitesh', 'rahul' ]

console.log(myArr);
// ['rishi', 'aajesh', 'hitesh', 'rahul' ]

```

&nbsp;

### Array.prototype.**sort()**

Sorts the array items in ascending order. _Works only on arrays with homogeneous elements._

```javascript
const myArr = ["rahul", "hitesh", "aajesh", "rishi"];

console.log(myArr.sort());
// ['aajesh', 'hitesh', 'rahul', 'rishi']

console.log(users);
// ['aajesh', 'hitesh', 'rahul', 'rishi']

```

**sort()** does not work on numerical values.

```javascript
const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(arr.sort());
//  [-130, -400, -650, 1300, 200, 3000, 450, 70]

```

_The numbers are converted into strings internally and then sorted. This type of sorting is commonly seen in our machines' file manager. Its called ASCII/Lexicographical sorting._

**sort() accepts a callback function.**

- The callback function accepts two parameters - they are two consecutive elements of the given array.
- If the callback function returns a positive number, then the two consecutive elements are swapped.
- If it returns negative number, the order of the elements remain same.

```javascript
const arr2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

arr2.sort( (a, b) => {
  
  if (a > b) {
    return 1;
    // order of a and b will be swapped.
  }

  if (a < b) {
    return -1;
    // order of a and b will remain same.
  }
  
});

console.log(arr2);
// [-650, -400, -130, 70, 200, 450, 1300, 3000]

```

The above code can also be written using arrow function:
```javascript
arr2.sort((a, b) = a - b);

```

&nbsp;

### Array.prototype.**fill()**

Syntax - `fill(value, startIndex , endIndex)`

_'endIndex' is not included in the result._

```javascript
const x = new Array(7);

x.fill(1, 3, 6);

console.log(x);
// [<3 empty items>, 1, 1, 1, <1 empty item>]

```

&nbsp;

### Array.prototype.**splice()**

Syntax - `splice(startIndex , deleteCount, replacementValue)`

_'deleteCount' is the count of items to be removed._

_'replacementValue' is optional. If provided, it is inserted at the 'startIndex'._

> Example 1

```javascript
const arr = [11, 22, 33, 44, 55, 66];

arr.splice(4);
// returns [55,66] and mutates the "arr"

console.log(arr);
// [11 , 22, 33, 44]

arr.splice(1, 2);
// Here '2' is number of values to remove.
// returns [ 22, 33 ]

console.log(arr);
// [11 , 44]

```

> Example 2: Replace item of an array.

```javascript
const arr1 = [11, 22, 33, 44, 55, 66];

arr1.splice(4, 1, 99);
// This deletes 1 item at index - 4 and inserts 99 there.

console.log(arr1);
// [11, 22, 33, 44, 99, 66]

```

> Example 3: Insert an item inside an array

```javascript
const arr2 = [11, 22, 33, 44, 55, 66];

arr2.splice(4, 0, 99);
// This deletes 0 items at index - 4 and inserts 99 there.

console.log(arr2);
// [11, 22, 33, 44, 99, 55, 66]

```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures Arrays Initialization](01-initialization.md)  

▶️ [Data Structures Arrays Array Slice](03-array-array-slice.md)

<!-- PAGINATION_END -->
&nbsp;
