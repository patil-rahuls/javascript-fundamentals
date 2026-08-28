## Data Structures > Array > Return new Array > _slice()_

### Array.prototype.**slice()**

Syntaxt - `array.slice(start_index, end_index)`

_element at the **start_index** is included in the result._

_element at the **end_index** (optional) is not included in the result._

```javascript
const arr = [11, 22, 33, 44, 55, 66];

const newArr = arr.slice(2);

// arr = [11, 22, 33, 44, 55, 66] (Unchanged)
// newArr = [33, 44, 55, 66]

```

```javascript
const arr = [11, 22, 33, 44, 55, 66];

const newArr = arr.slice(2, 4);

// arr = [11, 22, 33, 44, 55, 66] (Unchanged)
// newArr = [33, 44] 
// (element at index - 4 is not included)

```

Start from the end of the array
```javascript
const arr = [11, 22, 33, 44, 55, 66];

const newArr = arr.slice(-2);

// arr = [11, 22, 33, 44, 55, 66] (Unchanged)
// newArr = [55, 66] 
// (grabs items from 2nd last element.)

```

```javascript
const arr = [11, 22, 33, 44, 55, 66];

const newArr = arr.slice(1, -2);
// newArr = [22, 33, 44]

const newArr1 = arr.slice(-2, -1);
// [ 55 ]

```

&nbsp;

> Example: Deep Clone

**slice()** can be used to copy arrays by not passing any arguments.

```javascript
const arr = [11, 22, 33, 44, 55, 66];

// DEEP COPY
const copyArr = arr.slice(); 

```

_But why copy arrays this way?_

_Observe this :_
```javascript
const a = [1, 2, 3];
const b = a;

a[0] = 99;

// a = [99, 2, 3]
// b = [99, 2, 3]

```
_In the example above, array 'b' also gets changed, because both have the same reference._

_Hence use **slice()** method to get an 'independent' copy of the array._

```javascript
const a = [1, 2, 3];
const c = a.slice();

a[0] = 100;

// a = [100, 2, 3]
// c = [1, 2, 3]

```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures Arrays Mutate Arrays](02-mutate-arrays.md)  

▶️ [Data Structures Arrays Array Concat](04-array-array-concat.md)

<!-- PAGINATION_END -->
&nbsp;
