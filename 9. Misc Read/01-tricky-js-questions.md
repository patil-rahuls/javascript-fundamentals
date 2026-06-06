## Some Tricky Javascript Problems

> Problem 1:
Assign certain value to the variable `a` such that the following condition evaluates to `true`.
>
> `(a == 1 && a == 2 && a == 3)`

```javascript
let a = {
  value: 1,
  valueOf() {
    return this.value++;
  }
};

if(a == 1 && a == 2 && a == 3){
  console.log("YES");
}
// Output:
//  'Yes'
```

&nbsp;

> Problem 2:
What will be the output of this program?
```javascript
var count = 0;
(function test() {
  if(count == 0){
    var count = 1;
    console.log(count);
  }
  console.log(count);
})();
```
> Output:
>
>     undefined
>
> Explanation:
>
> The outer variable `count` won't be considered inside the IIFE because, inside the IIFE, there is another `var count` variable defined.
>
> Now, inside the IIFE, the `count` variable is moved to the top of its respective scope(IIFE scope) with value `undefined` because of `hoisting`.
>
> Hence, the condition `count == 0` would fail.
>
> The second `console.log` is evaluated, where the code finds that `count` is still `undefined`, hence prints `undefined`.

&nbsp;

> Problem 3:
Group Array items by a property.
```javascript
const users = [
  { name: "Rahul", city: "Pune"},
  { name: "Aajesh", city: "Bglre"},
  { name: "Hitesh", city: "Kentucky"},
];
```
> Solution:
```javascript
const grouped = users.reduce((acc, user)=>{
  if(!acc[user.city]){
    acc[user.city] = [];
  }
  acc[user.city].push(user);
  return acc;
}, {});

console.log(grouped);
```

&nbsp;

> Problem 4:
What will be the output of this program?
```javascript
const obj = {};
const a = { key: "a" };
const b = { key: "b" };

obj[a] = 123;
obj[b] = 456;

console.log(obj[a]);
```
> Solution:
>
>     456
>
> Explanation:
>
> When you pass an object like `a` or `b` as a property key, JavaScript forces it into a string by calling its `.toString()` method.
>
> For standard objects, `({}).toString()` always outputs the string `"[object Object]"`.
>
> Therefore, the code translates underneath to:
>
>     obj["[object Object]"] = 123;
>     obj["[object Object]"] = 456;
>     // Overwrites previous value!

&nbsp;

> Problem 5:
What will be the output of this program.
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 1000);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 1000);
}
```
> Solution:
>
>     "var: 3"
>     "var: 3"
>     "var: 3"
>     "let: 0"
>     "let: 1"
>     "let: 2"
>
> Explanation:
> Variables declared with `var` are `function-scoped` (or global if outside a function). By the time the timer finishes and executes `console.log`, the loop has already completed, leaving the shared global variable `i` sitting at `3`.
>
> Variables declared with `let` are `block-scoped`. Every single iteration of the loop creates a completely fresh binding/memory slot for `j`.
>
> Each timer securely captures its own unique value of `j` at that specific point in time.

&nbsp;

> Problem 6:
What will be the output of the following code?
```javascript
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);
console.log(0.1 + 0.5 === 0.6);
```
> Solution:
>
>     false
>     0.30000000000000004
>     true
>
> Explanation:
> In binary `(base-2)`, fractional numbers like `0.1` and `0.2` cannot be perfectly represented. They turn into repeating, infinite binary fractions (much like `1/3` becomes `0.3333...` in `base-10`)
>
> Numbers like `0.5` (1/2) can be cleanly represented in binary without any repeating trailing digits, which is why `0.1 + 0.5 === 0.6` miraculously evaluates to `true`.

&nbsp;

> Problem 7: ASI - Automatic Semicolon Insertion
>
> What will be the output of the following code?
```javascript
function foo() {
  return {
    status: "active"
  };
}

console.log(foo());
```
> Solution:
>
>     undefined
>
> Explanation:
> When the engine parses the `return` keyword and sees a line break immediately after it, it _`assumes you forgot a semicolon and inserts one automatically`_ right there.
>
> The code evaluates as:
>
>     function foo() {
>       return; <--- ASI strikes here!
>       // Following block becomes unreachable.
>       { status: "active" };
>     }

&nbsp;

> Problem 8:
What will be the output of the following code?
```javascript
(function() {
  let a = b = 5;
})();
console.log(typeof a);
console.log(typeof b);
```
> Solution:
>
>     "undefined"
>     "number"
>
> Explanation:
> Chained assignments evaluate from `right to left`.
>
> The expression breaks down to:
>
>     b = 5;     // Evaluated first(no 'let', 'const' or 'var')
>     let a = b; // Evaluated second, bound to 'let'
>
> Because `b = 5` is executed without a declaring keyword (`let`, `const`, or `var`), JavaScript assigns it directly to the `global` object unless you are explicitly running in `use strict` mode.
>
> Therefore, `a` dies with the function scope, but `b` leaks out and is accessible globally as a number.

---
