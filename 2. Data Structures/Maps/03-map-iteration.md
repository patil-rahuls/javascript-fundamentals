## Data Structures > Maps

Maps are high performance key - value paired data structure.

In Objects keys can only be strings (without quotes), but in Maps, keys can be any type.

&nbsp;

### Iterating over Maps

> ### Using `for...of` loop

```javascript
const question = new Map([
  ["question", "Best lang in the world?"],
  [1, "C"],
  [2, "C++"],
  [3, "Java"],
  [4, "Javascript"],
  ["correct", 2],
  [true, "Correct answer"],
  [false, "Try Again"],
]);

// Maps are Iterable
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Option : ${key} : ${value}`);
  }
}

// We can also use the following methods to iterate:
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
```

&nbsp;

> ### Using `forEach()` method

```javascript
const currencies = new Map([
  ["USD", "US Dollars"],
  ["EUR", "Euros"],
  ["INR", "INDIAN Rupees"],
]);

currencies.forEach(function (val, key, map) {
  console.log(`${key} : ${val}`);
});
// USD : US Dollars
// EUR : Euros
// INR : INDIAN Rupees
```

Disadvantages of using `forEach()`:

`break` and `continue` does not work! So if you need to break out of the loop, then use the `for-of` loop.

&nbsp;
---

---

<!-- PAGINATION_START -->

**Parent:** [Data Structures](../../2.%20Data%20Structures/) → [Maps](../Maps/)
  
**Previous:** ← [Data Structures > Maps > Map Methods](02-map-methods.md)  

**Next:** → [Data Structures > Maps > Maps Conversion](04-maps-conversion.md)

<!-- PAGINATION_END -->
