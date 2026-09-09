## Functions > Generator Function `function*` (ES6)

> 🎯 A **generator function** (`function*`) is the modern, easier way to create iterators. Unlike regular functions that run to completion, generators can be paused and resumed multiple times during runtime using the `yield` keyword. They are incredibly useful for handling large datasets, asynchronous operations, and writing custom iterators.

---
&nbsp;

### 1. The Basics and Syntax

Generator functions are defined using the `function*` syntax. When called, they do not execute their code immediately; instead, they return a special **iterator object** which gives you control over the function's execution.

```javascript
function* generatorFunction() {
  yield "value1";
  yield "value2";
}
```

The returned iterator object provides two primary methods to control execution: `next()` and `return()`.

### 2. The `next()` Method

The `next()` method resumes the execution of a generator from where it was last paused. It returns an object containing two properties:
*   **`value`**: The value produced by the `yield` statement.
*   **`done`**: A boolean indicating whether the generator has completed (`true`) or is still running (`false`).

```javascript
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// A generator function generates an iterator
const iterator1 = simpleGenerator();

console.log(iterator1.next());
// { value: 1, done: false }

console.log(iterator1.next());
// { value: 2, done: false }

console.log(iterator1.next());
// { value: 3, done: false }

console.log(iterator1.next());
// { value: undefined, done: true }
```

### 3. The `return()` Method

The `return()` method allows you to force a generator to complete prematurely, before it reaches its natural end. It accepts an optional argument that becomes the final `value` of the generator.

```javascript
function* generatorWithReturn() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator2 = generatorWithReturn();

console.log(iterator2.next());
// { value: 1, done: false }

console.log(iterator2.return("Finished!"));
// { value: "Finished!", done: true }

// Any subsequent next() invocation after return() will always result in: 
console.log(iterator2.next());
// { value: undefined, done: true }
```

### 4. Generator Functions for Asynchronous Tasks

Generators can simplify complex asynchronous workflows by yielding Promises and waiting for them to resolve before moving to the next step.

```javascript
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data fetched from ${url}`);
    }, 2000);
  });
}

function* fetchDataGenerator() {
  const data1 = yield fetchData(".../api/data1");
  console.log(data1);

  const data2 = yield fetchData(".../api/data2");
  console.log(data2);

  const data3 = yield fetchData(".../api/data3");
  console.log(data3);
}

const iterator3 = fetchDataGenerator();

// Manually resolving the yielded promises to drive the generator forward
iterator3.next().value.then((data1) => {
  iterator3.next(data1).value.then((data2) => {
    iterator3.next(data2).value.then((data3) => {
      iterator3.next(data3);
    });
  });
});
```

### 5. Infinite Generators

Because a generator yields control back to the caller instead of locking up the thread, you can safely write infinite loops (like an endless counter) without crashing your application.

```javascript
function* counter() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

const iterator = counter();

console.log(iterator.next());
// { value: 1, done: false }

console.log(iterator.next());
// { value: 2, done: false }

console.log(iterator.next());
// { value: 3, done: false }
```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [Iterators](11-iterators.md)  

▶️ [Decorator Functions](13-decorators.md)

<!-- PAGINATION_END -->
&nbsp;
