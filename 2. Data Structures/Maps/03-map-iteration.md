## Data Structures > Maps

### Iterating over Maps

Maps are high performance key - value paired data structure.

In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.

### Using `for-of` loop

```javascript
const question = new Map ([
  ['question' , 'Best lang in the world?'],
  [1, 'C'],
  [2, 'C++'],
  [3, 'Java'],
  [4, 'Javascript'],
  ['correct' , 2],
  [true , 'Correct answer'],
  [false , 'Try Again']
]);

// Maps are Iterable
for (const [key, value] of question) {
  if (typeof key === 'number'){
    console.log(`Option : ${key} : ${value}`);
  }
}

// We can also use the following methods to iterate:
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
```

&nbsp;

### Using `forEach()`

`forEach()` takes 3 parameters:
- Current Item in the iteration
- Current Key
- Entire Map

```javascript
const currencies = new Map([
  ['USD' , 'US Dollars'],
  ['EUR' , 'Euros'],
  ['INR' , 'INDIAN Rupees']
]);

currencies.forEach(function(val, key, map){
  console.log(`${key} : ${val}`);
});
// USD : US Dollars
// EUR : Euros
// INR : INDIAN Rupees
```

Disadvantages of using `forEach()`:

`break` and `continue` does not work! So if you need to break out of the loop, then use the `for-of` loop.

---
