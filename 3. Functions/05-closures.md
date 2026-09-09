## Functions > Closures

> 🎯 A **closure** gives a function access to all the variables of its parent function, even after that parent function has finished executing and returned. It ensures that a function doesn't lose connection to the variables that existed in its creation scope.

---
&nbsp;

### Understanding Closures

When a function is returned from another function, it keeps a reference to its outer scope. This preserves the scope chain over time.

*   **Formal definition:** It is the closed-over variable environment of the execution context in which a function was created, and which exists even after that function's execution context is gone.
*   **Layman Explanation:** A closure is like a "backpack" that a function carries around wherever it goes. This backpack holds all the variables that were present in the environment where the function was created.

```javascript
const parentFn = function () {
  let users = 0;

  return function () {
    users++;
    console.log(users);
  };
};

// Here the parent function 'parentFn' has been called and returned.
const booker = parentFn();

booker(); // 1
booker(); // 2
booker(); // 3
```

*In the above example, `booker()` still has access to the variable `users` declared in `parentFn()`, even though `parentFn()` has already finished executing.*

### Properties of Closures

*   **Automatic:** We do not create closures manually. They are a built-in JavaScript feature that happens automatically.
*   **Inaccessible:** We don't have direct access to closed-over variables. We can't dive into a closure and read or write its variables directly.
*   **Introspection:** While not a tangible JS object, we can observe a closure using `console.dir()`.

```javascript
console.dir(booker);
```

*Viewing this in the console reveals the function details, including the `[[Scopes]]` property (the variable environment).*

```text
[[Scopes]] : Scopes[3]
// Double brackets [[...]] mean it's an internal JavaScript property.
>
0: Closure (parentFn) { users: ... }
>
```
*This output confirms that the variable `users` is available from `parentFn`’s execution context via a **Closure**.*

### Scenario 1: Re-assigning Functions

Closures work even when re-assigning a globally scoped variable to different functions.

```javascript
let f; // global scope

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46 (23 * 2)
console.dir(f); // Check the console to see the closure containing 'a'

// Re-assigning the 'f' function
h();
f(); // 1554 (777 * 2)
console.dir(f); // Check the console to see the new closure containing 'b'
```

### Scenario 2: Timer Functions

We don't always need to `return` a function to observe a closure. Timer callbacks are a great example.

```javascript
const test = function (n) {
  const twice = n * 2;

  setTimeout(function () {
    console.log(`The double of ${n} is${twice}.`);
  }, 2000);

  console.log(`Starting....`);
};

test(3);
```

*When `test(3)` runs:*
1. `twice` is initialized.
2. The `setTimeout` callback is registered and waits in the background.
3. The last `console.log` executes immediately.
4. The `test()` function finishes executing and is popped off the call stack.
5. After 2 seconds, the callback runs independently but still accesses `n` and `twice` because **closures have priority over the scope chain**.

### Scenario 4: IIFE and Event Listeners

Closures are extremely useful for maintaining state in event listeners attached inside Immediately Invoked Function Expressions (IIFEs).

```javascript
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  header.addEventListener("click", function () {
    this.style.color = "blue";
    // 'this' points to the 'header' element.
  });
})();
```

*The IIFE executes immediately and is gone. However, the event listener's callback function sits on the call stack waiting for a click. Even though the IIFE has finished, the callback still retains access to the `header` element via its closure.*

---
&nbsp;
<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [Optional Chaining [ES 2020]](04-optional-chaining.md)  

▶️ [Higher Order Functions](06-higher-order-fn.md)

<!-- PAGINATION_END -->
&nbsp;
