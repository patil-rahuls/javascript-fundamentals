## Data Structures > ARRAY

> Array to a single value

### `Array.prototype.reduce()` - Array data transformation method

A big advantage of using these functions over traditional loops is that we can chain these functions together.

> ***`reduce()` accumulates down all the array values to one single value. Returns a single value NOT an array.***
```javascript
const numbers = [34, 5, 6, 7, 8, 88, 2, 89, 100];

const total = numbers.reduce(function(acc, val, index, arr){
  return acc + val;
} , 0);
// '0' is default value to the
// accumulator parameter ‘acc’

/*
In the Callback function 'acc' is a new
parameter here which is an accumulator.
  It accumulates the data on every Iteration.
  It keeps holding and/or changing a value
  throughout the iterations.
  On every iteration, a value needs to be
  returned which goes to the accumulator, it
  can be the 'acc' or any calculations with acc.
*/
```

> Same example using arrow fn.
```javascript
const total2 = numbers.reduce((acc,val) => acc+val, 0);
```

> Another Example: getting maximum value from an array.
```javascript
const numbers2 = [34, 5, 6, 7, 8, 88, 2, 89, 100];

const max = numbers2.reduce(
  (acc, curr_amount) => {
    if (acc > curr_amount){
      return acc;
    } else {
      return curr_amount;
    }
  }
, txn[0]);
// here we assign first item of the array
// as the accumulator initial value.

console.log(max);
// 100

// The accumulator holds the net result of
// the function.
// IMP - We need to return something in the
// callback which will go into the accumulator.
```
---
