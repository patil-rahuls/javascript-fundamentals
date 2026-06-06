## Data Structures > ARRAY

> Array <--> String

### `String.prototype.split()` String to Array

> ***Splits a string into an array by the provided delimeter.***
```javascript
const str = "11,22,33,44,55,66";

const result = str.split(',');

console.log(result);
// [11,22,33,44,55,66]
```
---

&nbsp;
### `Array.prototype.join()` Array to String

> ***Joins an array items into a string using the provided delimeter.***

> ***IMP: By default comma `,` will be the delimeter.***
```javascript
const arr = [11,22,33,44,55,66];

const result = arr.join('-');
console.log(result);
// "11-22-33-44-55-66"


const result2 = arr.join('');
console.log(result2);
// "112233445566"


// By default comma will be the delimeter.
const result3 = arr.join();

console.log(result3);
// "11,22,33,44,55,66"

console.log(typeof result);
// "string";
// same for result2 and result2.
```
---
