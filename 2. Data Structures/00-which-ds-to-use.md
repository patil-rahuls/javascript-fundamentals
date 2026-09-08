## Which Data Structure to use?

> 🎯 Choosing the right data structure in JavaScript comes down to evaluating your data's shape and how you intend to interact with it—whether you need strict ordering, guaranteed uniqueness, method association, or high-performance key-value mapping.

---
&nbsp;

### 1. Arrays
*   **Structure:** Ordered list of values (can contain duplicates).
*   **When to use:** Use when you need to store data in a specific sequence and frequently manipulate that data using built-in methods (like `.map()`, `.filter()`, etc.).

### 2. Sets (High Performance)
*   **Structure:** Unordered collection of strictly unique values.
*   **When to use:** Use when you only want to work with unique values, or as a highly efficient way to remove duplicate elements from an existing Array.

### 3. Objects
*   **Structure:** Key-value pairs that can include methods. Keys are always coerced into strings.
*   **When to use:** Use when you need to bundle related data and behavior together, or when working directly with JSON data. *(Note: You can easily parse JSON into an Object, and convert it to a Map later if needed).*

### 4. Maps (Better Performance)
*   **Structure:** Key-value pairs where keys can be of **any** data type.
*   **When to use:** Use when you simply need to map keys to values (without attaching methods). They are the ideal choice when you need non-string keys, and they make it incredibly easy to compute size and iterate over the entries.

---
&nbsp;

<!-- PAGINATION_START -->

📁 [Data Structures](../2.%20Data%20Structures/)

◀️ [Data Structures WeakMap-WeakSets](./WeakMap-WeakSet/01-memory-leak.md)

▶️ [Functions](../3.%20Functions/)

<!-- PAGINATION_END -->
&nbsp;
