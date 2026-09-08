## Data Structures > Set > Iteration

> 🎯 Sets are inherently iterable. Because they are designed as high-performance, unordered collections of unique values, you can seamlessly iterate through them using standard loops or functional methods.

---
&nbsp;

Consider this Set as our starting example:

```javascript
// The duplicate item 'rahul' is automatically ignored
const names = new Set(["rahul", "hitesh", "rahul", "rahul", "aajesh", "rahul"]); 

console.log(names);
// Set(3) { 'rahul', 'hitesh', 'aajesh' }
```

### 1. The **`for...of`** loop

Since Sets are iterable objects, the most straightforward way to loop over their elements is using a `for...of` loop.

```javascript
for (const itm of names) {
  console.log(itm);
}
// 'rahul'
// 'hitesh'
// 'aajesh'
```
*(Note: Sets iterate their elements in insertion order.)*

### 2. The **`forEach()`** method

Sets also have a built-in `forEach()` method. However, its parameter signature `(value, key, set)` is kept identical to Maps and Arrays to ensure API consistency across all iterables. 

Because Sets **do not have keys**, the `key` parameter is simply assigned the exact same value as the `value` parameter.

```javascript
names.forEach(function (val, key, set) {
  console.log(`${key} :${val}`);
});
// rahul : rahul
// hitesh : hitesh
// aajesh : aajesh
```

#### Using a Throwaway Variable

Since the second parameter (`key`) is redundant when working with Sets, it is a common best practice to use an underscore (`_`) as a throwaway variable. This signals to other developers that the parameter is intentionally being ignored.

```javascript
names.forEach(function (val, _, set) {
  console.log(val);
});
// rahul
// hitesh
// aajesh
```

> 🚨 **Crucial Disadvantage of `forEach()`:**
> Just like with Arrays and Maps, you **CANNOT** use **`break`** or **`continue`** statements inside a Set's `forEach()` loop. If your logic requires breaking out of the loop early, you **must** use the **`for...of`** loop instead.

---
&nbsp;

<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Sets](../Sets/)  

◀️ [Data Structures Sets Set Methods](02-set-methods.md)  

▶️ [Data Structures Sets Set Use Case](04-set-use-case.md)

<!-- PAGINATION_END -->
&nbsp;
