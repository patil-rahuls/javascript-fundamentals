## Data Structures > Array > String ↔ Array Conversion

> 🎯 You will frequently need to convert strings into arrays for manipulation, and then convert those arrays back into strings for display. The **`split()`** (String method) and **`join()`** (Array method) act as perfect opposites for these tasks.

---
&nbsp;

### 1. **`String.prototype.split()`** (String to Array)

Splits a string into an array of substrings based on a specified delimiter.

```javascript
const str = "11,22,33,44,55,66"; // Type: String

// Split the string at every comma
const result = str.split(",");

console.log(result);
// ["11", "22", "33", "44", "55", "66"] 
// 💡 Note: The resulting array elements are always strings, not numbers!
```

---

### 2. **`Array.prototype.join()`** (Array to String)

Joins all items of an array into a single continuous string using a provided delimiter. 

> ⚠️ **Default Behavior:** If no delimiter is explicitly provided, it defaults to using a comma (`,`).

```javascript
const arr = [11, 22, 33, 44, 55, 66];

// Join with a hyphen
const result = arr.join("-");
console.log(result); 
// "11-22-33-44-55-66"

// Join with an empty string (no spaces
### String.prototype.**split()** - _String to Array_

Splits a string into an array by the provided delimeter.

```javascript
const str = "11,22,33,44,55,66"; // string

const result = str.split(",");

console.log(result);
// [11,22,33,44,55,66]

```
---
&nbsp;

## Data Structures > Array > Array to String > _join()_

### Array.prototype.**join()** - _Array to String_

Joins an array items into a string using the provided delimeter.

By default **,** _(comma)_ will be the delimeter.

```javascript
const arr = [11, 22, 33, 44, 55, 66];

const result = arr.join("-");
// result = "11-22-33-44-55-66"

const result2 = arr.join("");
// result2 = "112233445566"

```

By default comma will be the delimeter.
```javascript
const result3 = arr.join();
// result3 = "11,22,33,44,55,66"

```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Value Reduce](16-array-value-reduce.md)  

▶️ [Data Structures > Arrays > Array Methods Chaining](18-array-methods-chaining.md)

<!-- PAGINATION_END -->
&nbsp;
