## Iterators

Iterator is an object that follows a specific protocol called _`iterator protocol`_.

_The protocol says that it must have a `next()` method. Every time you call `next()`, it returns an object with two pieces of information:_

- 1. **`value`**: actual data.
- 2. **`done`**: a boolean telling if you've reached the end of the stack.

> Example: A manual iterator function to see how it works

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
    },
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

**_Why do we use them? Why not just use a for loop?_**

_While for-loops are great, iterators provide some unique "superpowers":_

- **_Memory Efficiency:_**

  Imagine working with a large data-set of 1-million-items.

  You don't need to load an entire 1-million-item list into memory (as it would happen in the case of a loop).

  You can generate or fetch items one by one as needed _(this is called `Lazy Evaluation`)_.

- **_Custom Logic:_**

  You can create an iterator that never ends (like a "Clock" iterator) or one that skips every second item.

- **_Universal Interface:_**

  _Iterators are the engine behind the `for...of` loop and the Spread Operator `...`!_

  > When you write
  >
  > `for (let item of array){ ... }`
  >
  > JavaScript is actually using an iterator under the hood.

  Objects like Arrays, Strings, Maps, and Sets are called Iterables for the very same reason.

  _This just means they have a hidden method that automatically creates an iterator for them whenever a loop is used._

&nbsp;

**_The simplest way to create iterators is using the `generator functions`._**

---

---

<!-- PAGINATION_START -->

**Parent:** [3. Functions](..)  
**Previous:** [Polyfills](10-pollyfills.md)  
**Next:** [Generator Function `function*` [ES6]](12-generator-yeild.md)

<!-- PAGINATION_END -->
