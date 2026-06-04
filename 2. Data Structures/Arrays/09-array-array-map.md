## Data Structures > ARRAY

> Array to new Array

### `Array.prototype.map()` - Array data transformation method

A big advantage of using these functions over traditional loops is that we can chain these functions together.

`map()` method transforms data in each iteration without changing/mutating the orignal array.

```javascript
const numbers = [2, 4, 3, 0, 10, 20, 30, 40];
const power = 3;

const newValues = numbers.map(function(val){
  return val ** power;
  // modify each item and put in new array
});
// arrow fn
// const newValues2 = numbers.map(mov => mov * power);

console.log(numbers);
// [2, 4, 3, 0, 10, 20, 30, 40]

console.log(newValues);
// [8, 64, 27, 0, 1000, 8000, 27000, 64000]


// Just like forEach(), map() also has 3 three parameters.
const newArr = numbers.map( (curr, key, arr) => {
  return `${key} : ${curr}`;
});

console.log(newArr);
/* [
  "0 : 2",
  "1 : 4",
  "2 : 3",
  "3 : 0",
  "4 : 10",
  "5 : 20",
  "6 : 30",
  "7 : 40"
]
*/
```

---
