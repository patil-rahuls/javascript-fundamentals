## Data Structures > Array > Array to Single Value > _reduce()_

### Array.prototype.**reduce()** - 

_A big advantage of using these array data transformation methods over traditional loops is that we can chain these functions together._

**reduce()** accumulates down all the array values to one single value through each iteration. Returns a single value _NOT an array_.

Example
```javascript
const numbers = [34, 5, 6, 7, 8, 88, 2, 89, 100];

const total = numbers.reduce((acc, val, index, arr) ={
  return acc + val;
}, 0);

// Can also be written as:
const total2 = numbers.reduce((acc, val) =acc + val, 0);

```
_In the above example, '0' is default value to the accumulator parameter ‘acc’._

_In the callback function 'acc' is a new parameter here which is an accumulator._
   
- _It accumulates the data on every Iteration._

- _It keeps holding and/or changing its value throughout the iterations._

- _On every iteration, a value needs to be returned which goes to the accumulator, it can be either 'acc' itself or any calculations with acc._

> Another Example: _Getting maximum value from an array._

The second argument to reduce method is the initial value of the accumulator.
```javascript
const numbers2 = [34, 5, 6, 7, 8, 88, 2, 89, 100];

const max = numbers2.reduce((acc, curr_amount) ={
  if (acc curr_amount) {
    return acc;
  } else {
    return curr_amount;
  }
}, txn[0]);

console.log(max);
// 100

```
_The accumulator holds the net result of the function._

***IMP*** - We need to return something in the callback which will go into the accumulator.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures Arrays Array Element Find Index](15-array-element-findIndex.md)  

▶️ [Data Structures Arrays Array String Split Join](17-array-string-split-join.md)

<!-- PAGINATION_END -->
&nbsp;
