## Closures

> ```javascript
> const parentFn = function () {
>   let users = 0;
>
>   return function () {
>     users++;
>     console.log(users);
>   };
> };
>
> const booker = parentFn();
> // Here the parent function 'parentFn'
> // has been called and returned.
>
> booker(); // 1
> booker(); // 2
> booker(); // 3
> ```
>
> _In the above example,_
>
> _`booker()` still has access to the variable `users` which was declared in parent function parentFn()._
>
> _And `parentFn()` has already been executed and has returned to `booker()`._

A closure gives a function access to all the variables of its parent function, even after that parent function has finished executing and returned.

The function keeps a reference to its outer scope, which preserves the scope chain throughout the time.

A closure ensures that a function doesn't lose connection to variables that existed at the function's creation scope.

> Formal definition:
>
> **_It is the closed-over variable environment of the execution context in which a function was created, and which exists even after that function execution context is gone._**

_Layman Explanation:
A closure is like a backpack that a function carries around wherever it goes(from wherever it is being called). This backpack has all the variables that were present in the environment where the function was created._

&nbsp;

### More about closures:
---

We do not create closures manually.

They are a javascript feature that happens automatically.

Also we don't have any access to closed-over variables. We can't go into a closure and read or write variables.

A closure is not a tangible js object.

But we can have a look at its properties:

> ```javascript
> console.dir(booker);
> ```
>
> _It gives the function details. where it shows the `'scopes'` property which is the variable environment._
>
> _We can see which variables exist in that VE and that the variables are changing in it based on the no. of times I am calling `booker()`._
>
> ```
> [[Scopes]] : Scopes[3]
> // Double brackets [[...]] means
> // its an internal JavaScript property.
>
> 0: Closure (parentFn) { users:... }
>
> ```
>
> _The last line means that the variable `users` is available from `parentFn`’s execution context via `Closure`._
>
> _In _`Scopes[3]`_, the number `3` is the times the child function has been called._

---

&nbsp;

### Some more scenarios:

> Example 1:
>
> ```javascript
> let f; // global scope
>
> const g = function () {
>   const a = 23;
>   f = function () {
>     console.log(a * 2);
>   };
> };
>
> const h = function () {
>   const b = 777;
>   f = function () {
>     console.log(b * 2);
>   };
> };
>
> g();
> f(); // 23*2
> console.dir(f); // Observe the o/p
>
> // re-assigning the f function
> h();
> f(); // 777*2
> console.dir(f);
> ```

&nbsp;

> Example 2: _Timer Function. We don't always need to return a function to observe a closure._
>
> ```javascript
> const test = function (n) {
>   const twice = n * 2;
>
>   setTimeout(function () {
>     console.log(`The double of ${n} is ${twice}.`);
>   }, 2000);
>
>   console.log(`Starting....`);
> };
>
> test(3);
> ```
>
> _On calling this, following events happen:_
>
> 1. _`const twice` is initialized._
> 2. _The timer callback fn is registered- it starts waiting for its execution for the given time in milliseconds._
> 3. _And the last `console.log` is executed. It won't wait for the timer’s callback._
> 4. _The `test()` function has now finished executing and its EC is popped-off the call stack._
> 5. _After 2 seconds, the callback function gets executed._
>
> _Observe that the callback function of the timer was executed completely independent of the `test()`._
>
> _But still the callback function was able to access all the variables which were created in the `test()`._
>
> _This happens because **closures have priority over scope chain.**_

&nbsp;

> Example 3: IIFE
>
> ```javascript
> (function () {
>   const header = document.querySelector("h1");
>   header.style.color = "red";
>
>   header.addEventListener("click", function () {
>     this.style.color = "blue";
>     // ‘this’ points to the 'header' element.
>   });
> })();
> ```
>
> _This is an IIFE, and it is invoked immediately._
>
> _But the eventlistner's callback function will be on call stack and waiting for the `click` event to occur and even though the IIFE has finished executing, the callback function will still have access to the `header` element._

---

---

<!-- PAGINATION_START -->

**Parent:** [3. Functions](../3.%20Functions/)  

**Previous:** ← [Optional Chaining [ES 2020]](04-optional-chaining.md)  

**Next:** → [Higher Order Functions](06-higher-order-fn.md)

<!-- PAGINATION_END -->
