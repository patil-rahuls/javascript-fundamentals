## Data Structures > ARRAY

### Methods that mutate an Array

Consider this array as an example.
```javascript
const myArr = ['rahul', 'hitesh', 'aajesh'];
```

> ### `Array.prototype.push()`
Adds an element at the end of an array and returns new length of the array.
```javascript
const myArr = ['rahul', 'hitesh', 'aajesh']

myArr.push('rishi');

console.log(myArr);
// ['rahul', 'hitesh', 'aajesh', 'rishi']


// Get length of the mutated array
const total = myArr.push('anil');

console.log(total);
// 5

console.log(myArr);
// ['rahul', 'hitesh', 'aajesh', 'rishi', 'anil']
```

&nbsp;
> ### `Array.prototype.pop()`
Removes last element from an array and returns the popped element.
```javascript
const myArr = ['rahul', 'hitesh', 'aajesh', 'rishi', 'anil']

const remvd = myArr.pop();
// Remove last item 'anil'

console.log(remvd);
// 'anil'


// Any arguments to pop() is ignored.
const removed = myArr.pop(`rahul`);

console.log(removed);
// 'rishi'

console.log(myArr);
// ['rahul', 'hitesh', 'aajesh']
```

&nbsp;
> ### `Array.prototype.unshift()`
Add an element at the start of an array and returns new length of the array.
```javascript
const myArr = ['rahul', 'hitesh', 'aajesh']

let newLength = myArr.unshift('kisan');

console.log(myArr);
// ['kisan', 'rahul', 'hitesh', 'aajesh']
```

&nbsp;
> ### `Array.prototype.shift()`
Removes an element from the start of an array and returns the removed element.
```javascript
const myArr = ['kisan', 'rahul', 'hitesh', 'aajesh']

let scholar = myArr.shift();

console.log(myArr);
// ['rahul', 'hitesh', 'aajesh']

console.log(scholar);
// 'kisan'
```

&nbsp;
> ### `Array.prototype.reverse()`
Mutates the original array and returns the reversed array.
```javascript
const myArr = ['rahul', 'hitesh', 'aajesh']

const newArr = myArr.reverse();

console.log(newArr);
// ['aajesh', 'hitesh', 'rahul' ]

console.log(myArr);
// ['aajesh', 'hitesh', 'rahul' ]
```

&nbsp;
> ### `Array.prototype.sort()`
Sorts the array. Works only on arrays with homogeneous elements.
```javascript
const users = ['Rahul' , 'Hitesh' , 'Aajesh'];

console.log(users.sort());
// ['Aajesh', 'Hitesh', 'Rahul']

console.log(users);
// ['Aajesh', 'Hitesh', 'Rahul']
```

`sort()` does not work on numbers properly. The numbers are converted into strings internally and then sorted.
```javascript
const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(arr.sort());
//  [-130, -400, -650, 1300, 200, 3000, 450, 70]
```

The numbers are converted to strings and then sorted. This type of sorting is commonly seen in our machines' file manager.
Its called _ASCII/Lexicographical_ sorting.

> **`sort()` accepts a callback function.**
>
> - **The callback accepts two parameters - two consecutive elements of the given array.**
>
> - **If the callback function returns positive, then the two consecutive elements are swapped.**
>
> - **If it returns negative value, the elements remain as is.**

```javascript
const arr2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

arr2.sort((a, b) => {
  if(a < b) {
    return -1;
    // position of a and b remain same.
  }

  if(a > b) {
    return 1;
    // swaps a and b in the array.
  }
});

console.log(arr2);
// [-650, -400, -130, 70, 200, 450, 1300, 3000]

// Can also be written using arrow function as:
arr2.sort((a,b) => a - b);
```

&nbsp;
> ### `Array.prototype.fill()`

> fill( value, startIndex , endIndex )
>
> **IMP: 'endIndex' is not included in the result.**
```javascript
const x = new Array(7);

x.fill(1, 3, 6);

console.log(x) ;
// [<3 empty items>, 1, 1, 1, <1 empty item>]
```

&nbsp;
> ### `Array.prototype.splice()`

> splice( startIndex , deleteCount, replacementValue )
>
> **IMP: its 2nd parameter is the count of items to be removed.**
>
> **IMP: Third parameter 'replacementValue' is optional. If provided, it is inserted at the startIndex.**

> Example 1
```javascript
const arr = [11, 22, 33, 44, 55, 66];

arr.splice(4);
// This returns [55,66] and mutates "arr"

console.log(arr);
// [11 , 22, 33, 44]

// The extracted/taken-out elements are now gone, the remaining elements are what our array is mutated with.


arr.splice(1, 2);
// 2 is no. of values to take out.
// Returns [ 22, 33 ]

console.log(arr);
// [11 , 44]
```

> Example 2: Remove a specific item from an array
```javascript
const array = [2, 5, 9];

const index = array.indexOf(5);

if (index > -1) {
  array.splice(index, 1);
}

console.log(array);
// [2, 9]
```

> Example 3: Replace a specific item from an array
```javascript
const arr1 = [11, 22, 33, 44, 55, 66];

arr1.splice(4, 1, 99);
// This deletes 1 item at 4th index and inserts 99 there.

console.log(arr1);
// [11, 22, 33, 44, 99, 66]
```

> Example 4: Insert a specific item inside an array
```javascript
const arr2 = [11, 22, 33, 44, 55, 66];

arr2.splice(4, 0, 99);
// This deletes 0 items at 4th index and inserts 99 there.

console.log(arr2);
// [11, 22, 33, 44, 99, 55, 66]
```

> Example 5: Replace some values with one specific item inside an array
```javascript
const arr3 = [11, 22, 33, 44, 55, 66];

arr3.splice(4, 2, 99);
// This deletes 2 items from 4th index and inserts 99 there in the place of those 2 removed items.

console.log(arr3);
// [11, 22, 33, 44, 99]
```
---
