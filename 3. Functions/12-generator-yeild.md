## Generator Function `function*` <sup>_ES6_</sup>

Generator `function*`, are the modern, easier way to create iterators.

A generator function is a special type of function in JavaScript that allows pausing and resuming its execution during runtime.

Unlike regular functions, which run to completion, generator functions can be paused and resumed multiple times, making them particularly useful for dealing with asynchronous operations, handling large datasets, and writing custom iterators.

_Generator functions are defined using the `function*` syntax, and they use the `yield` keyword to pause the function's execution and produce(yeild) a value._

> **_When a generator function is called, it returns an iterator object, which can be used to control(pause/resume) the function's execution._**

> ```javascript
> function* generatorFunction() {
>   // Generator function body
>   yield value1;
>   yield value2;
>
>   // ...
> }
> ```
>
> _The function above returns an `iterator*` Object._
>
> The `iterator` object has two methods -
>
> - **next()**
> - **return()**

&nbsp;

### 1. `next()`

The `next()` method is used to resume the execution of a generator function from where it was paused.

It returns an object with two properties:

- **value** - _value produced by the `yield` statement._
- **done** - _a boolean indicating whether the generator has completed `true` or is still running `false`._

&nbsp;

> Example 1: `Iterator.next()`

```javascript
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// A generator fn generates an iterator.
const iterator1 = simpleGenerator();

console.log(iterator1.next());
// Output: { value: 1, done: false }

console.log(iterator1.next());
// Output: { value: 2, done: false }

console.log(iterator1.next());
// Output: { value: 3, done: false }

console.log(iterator1.next());
// Output: { value: undefined, done: true }
```

&nbsp;

### 2. `return()`

> Example 2: _`Iterator.return()`_

The `return()` method allows us to force a generator to complete before it reaches the end.

It can take an optional argument that will be returned as the final `value` of the generator.

```javascript
function* generatorWithReturn() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator2 = generatorWithReturn();

console.log(iterator2.next());
// Output: { value: 1, done: false }

console.log(iterator2.return("Finished!"));
// Output: { value: "Finished!", done: true }

// Any subsequent next() invokation
// after return(), will always result in:
// { value: undefined, done: true }

console.log(iterator2.next());
// Output: { value: undefined, done: true }

console.log(iterator2.next());
// Output: { value: undefined, done: true }
```

&nbsp;

> Example 3: Generator function for asynchronous tasks

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

const promise = iterator3.next().value;

promise.then((data) => {
  iterator3.next(data1).value.then((data) => {
    iterator3.next(data2).value.then((data) => {
      iterator3.next(data3);
    });
  });
});
```

&nbsp;

> Example 4: Infinite Generator Example

```javascript
function* counter() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

const iterator = counter();

console.log(iterator.next());
// Output: { value: 1, done: false }

console.log(iterator.next());
// Output: { value: 2, done: false }

console.log(iterator.next());
// Output: { value: 3, done: false }
...

```

---

---

<!-- PAGINATION_START -->

**Parent:** [3. Functions](../3.%20Functions/)  

**Previous:** ← [Iterators](11-iterators.md)  

**Next:** → [Decorator Functions](13-decorators.md)

<!-- PAGINATION_END -->
