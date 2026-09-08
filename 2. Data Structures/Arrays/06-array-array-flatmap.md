## Data Structures > Array > Return new Array > **`flatMap()`**

> 🎯 The **`flatMap()`** method (introduced in ES2019) is a combination of **`map()`** followed by a **`flat()`** of depth 1. It is more efficient and slightly faster than calling `map()` and `flat()` separately because the array is only iterated over once.

---
&nbsp;

### 1. Extracting and Flattening Data

A very common use case is extracting arrays of data from a list of objects and merging them into a single, flat array.

```javascript
const authors = [
  {
    name: "rahul",
    posts: ["JS Basics", "Advanced JS"]
  },
  {
    name: "hitesh",
    posts: ["DB Tricks"]
  },
  {
    name: "aajesh",
    posts: [".NET Basics", "Web API Guide"]
  },
  {
    name: "rishi",
    posts: ["Promos", "Sales Guide"]
  }
];

// Maps over the authors, returns the 'posts' array for each, 
// and immediately flattens the result into one array.
const allPosts = authors.flatMap(author => author.posts);

console.log(allPosts);
// ["JS Basics", "Advanced JS", "DB Tricks", ".NET Basics", "Web API Guide", "Promos", "Sales Guide"]
```

---

### 2. The Depth Limitation

> ⚠️ **Important:** **`flatMap()`** only flattens **one level deep**. 
> 
> If your mapped results contain nested arrays that go deeper than 1 level, `flatMap()` will leave those deeper arrays intact. In such cases, you must fall back to using `map()` and `flat(depth)` separately.

```javascript
const numbers = [1, 2, 3];

// ❌ flatMap only goes 1 level deep
const result1 = numbers.flatMap(num => [[num * 2]]);
console.log(result1); 
// [ [2], [4], [6] ] (Still contains nested arrays!)

// ✅ For deeper nesting, chain map() and flat() with a specific depth
const result2 = numbers.map(num => [[num * 2]]).flat(2);
console.log(result2); 
// [ 2, 4, 6 ]
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Flat](05-array-array-flat.md)  

▶️ [Data Structures > Arrays > Array Loop for Each](07-array-loop-forEach.md)

<!-- PAGINATION_END -->
&nbsp;
