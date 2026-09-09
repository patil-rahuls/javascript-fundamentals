## Functions > Iterators (ES6)

> 🎯 An **iterator** is an object that follows a specific set of rules called the **iterator protocol**. The protocol dictates that the object must have a `next()` method, which, when called, returns an object containing two properties: `value` (the actual data) and `done` (a boolean indicating if the end of the sequence has been reached).

---
&nbsp;

### 1. The Iterator Protocol in Action

To understand how iterators work under the hood, we can build a manual iterator function. Every time you call `next()`, it retrieves the next piece of data until it runs out.

```javascript
function manualIterator(array) {
  let index = 0;

  return {
    next: function () {
      if (index < array.length) {
        return {
          value: array[index++],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    }
  };
}

const arr = ["Value 1", "Value 2"];
const itr = manualIterator(arr);

console.log(itr.next());
// { value: 'Value 1', done: false }

console.log(itr.next());
// { value: 'Value 2', done: false }

console.log(itr.next());
// { value: undefined, done: true }
```

### 2. Why Use Iterators Instead of a Standard `for` Loop?

While `for` loops are great for standard iterations, iterators provide unique "superpowers" for more complex scenarios:

*   **Memory Efficiency (Lazy Evaluation):** Imagine working with a massive dataset of 1 million items. Instead of loading the entire list into memory at once, an iterator allows you to generate or fetch items one by one strictly as needed.
*   **Custom Logic:** You can create custom rules, such as an iterator that never ends (like a continuous "Clock") or one that conditionally skips items.
*   **Universal Interface:** Iterators are the engine powering the `for...of` loop and the Spread Operator (`...`). 

*When you write `for (let item of array) { ... }`, JavaScript is actually utilizing an iterator under the hood.*

### 3. Iterables vs. Iterators

Objects like Arrays, Strings, Maps, and Sets are called **Iterables**. This simply means they possess a hidden built-in method that automatically creates and returns an iterator for them whenever a loop or spread operator is used.

*Note: The simplest and most modern way to create custom iterators is by using **Generator functions**.*

---
&nbsp;
<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [Polyfills](10-pollyfills.md)  

▶️ [Generator Function **function*** [ES6]](12-generator-yeild.md)

<!-- PAGINATION_END -->
&nbsp;
