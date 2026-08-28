## Data Structures > Array > Return new Array > _flatmap()_

### Array.prototype.**flatmap()** _[ES 2019]_

It **map()** first and then **flat()** the result. Better performance.

> Example
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

const allPosts = authors.flatMap(author => author.posts);

console.log(globalFeed);
// ["JS Basics", "Advanced JS", "DB Tricks", ".NET Basics", "Web API Guide", "Promos", "Sales Guide"]

```

***IMP***: flatMap() goes only one level deep. Hence if you need to go deeper, then you still need to use the **flat()** method separately with depth argument.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Arrays](../Arrays/)
  
◀️ [Data Structures > Arrays > Array Flat](05-array-array-flat.md)  

▶️ [Data Structures > Arrays > Array Loop for Each](07-array-loop-forEach.md)

<!-- PAGINATION_END -->
&nbsp;
