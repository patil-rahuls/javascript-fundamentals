## Data Structures > Map 

> 🎯 Maps are high-performance key-value paired data structures. While standard JavaScript Object keys are strictly coerced into strings (or Symbols), **Maps allow keys of any data type**, including numbers, booleans, arrays, and even other objects.

---
&nbsp;

### 1. Initialization & Syntax

You can initialize a Map by passing an iterable (like an array of arrays) where each sub-array represents a `[key, value]` pair.

> **Syntax:** `new Map([[k, v], [k, v], [k, v], ...]);`

```javascript
const options = [
  ["yes", 1],
  ["no", 2],
  ["maybe", 3],
];

const myMap = new Map(options);
```

### 2. Example: Mixed Key Types

Notice how we can seamlessly mix strings, numbers, and booleans as keys within the exact same Map.

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

console.log(question);
/* 
Map(8) {
  "question" => "Best lang in the world?",
  1 => "C",
  2 => "C++",
  3 => "Java",
  4 => "Javascript",
  "correct" => 2,
  true => "Correct answer",
  false => "Try Again"
}
*/
```

---

### 3. When to use Maps instead of Objects?

#### Benefit 1: Maps Preserve the Key Type

This is the primary advantage of a Map. When you use an Object, any non-string key is implicitly converted into a string. This implicit conversion is tricky because you lose type consistency.

**The Object Problem (Type Coercion):**
```javascript
const myObj = {
  1: "one",
  2: "two",
};

// Logging the datatype of the object's properties
for (const property in myObj) {
  console.log(typeof property);
}
// 'string'
// 'string' (The numbers 1 and 2 were coerced into "1" and "2")
```

**The Map Solution (Strict Typing):**
If you use a number as a key inside a Map, it remains a number.

```javascript
const numbersMap = new Map();

numbersMap.set(1, "one");
numbersMap.set(2, "two");

console.log([...numbersMap.keys()]);
// [1, 2]

console.log(typeof [...numbersMap.keys()][0]);
// 'number'
```

#### Benefit 2: Using Objects as Keys

Maps shine when you need to associate some metadata or object-related data with a specific object, *without* mutating the original object by attaching new properties to it. 

```javascript
const foo = { name: "foo" };
const bar = { name: "bar" };

// Using objects themselves as the keys
const objectDataMap = new Map([
  [foo, "Foo related data"],
  [bar, "Bar related data"],
]);
```

> 📖 **Further Reading:** For a deeper dive into performance and specific use cases, check out: [Maps vs Plain Objects in JavaScript](https://dmitripavlutin.com/maps-vs-plain-objects-javascript/)

---
&nbsp;
<!-- PAGINATION_START -->

📁 [Data Structures](../../2.%20Data%20Structures/) → [Maps](../Maps/)

◀️ [Data Structures Arrays](../Arrays/)  

▶️ [Data Structures Maps Map Methods](02-map-methods.md)

<!-- PAGINATION_END -->
&nbsp;
