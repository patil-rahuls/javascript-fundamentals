## Data Structures > ARRAY

> Traverse through an Array

### 1. Using a `for...of` loop
```javascript
const arr1 = [11, 22, 33, 44, 55, 66];

for(const item of arr1){
  console.log(item);
}

// entries()
for (const [i, item] of arr1.entries()) {
  console.log(`Index: ${i} | Value: ${item}`);
}
```

&nbsp;
### 2. Using `Array.prototype.forEach()` function
It's an higher order function that takes a call-back function which executes on each iteration.
Its 3 parameters are:
- Current item in the iteration
- Current index
- Entire array
```javascript
const arr1 = [11, 22, 33, 44, 55, 66];

arr.forEach(function(currentItem, index, entireArr) {
  console.log(`Index: ${index} | Value: ${currentItem}`);
});
```
Disadvantages of using `forEach()`:

`break` and `continue` does not work! So if you need to break out of the loop, then use the `for-of` loop.

---
