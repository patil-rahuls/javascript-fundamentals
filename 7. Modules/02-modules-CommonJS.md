## CommonJS Modules


> It uses `require()` and `module.exports`.

> It is synchronous, meaning it loads files one by one.

> File extension is usually `.js`` (or `.cjs`)

> #### IMP: In CommonJS (require), when you import a value, you get a copy of it. If the original file changes that value later, your copy stays the same.

&nbsp;

> Exporting File: `mathUtils.js` (The Provider)
```javascript
const add = (a, b) => a + b;
const pi = 3.14;

// Different ways to export:
// 1.
module.exports = { add, pi };

// 2. Aliases
module.exports = { add: addFn, pi };

// 3. Individually using the "exports"
// keyword
exports.add = (a, b) => a + b;
exports.pi = 3.14;
```
If we mix the `exports` keyword with `module.exports`, the `module.exports` will overwrite the `exports` statement.

Also, if we mistakenly add multiple `module.exports` in a the file, only the last one will be considered.

&nbsp;

> Importing File: `app.js` (The Consumer)

```javascript
const math = require('./mathUtils.js');

const result = math.add(5, 5);
console.log(result);
// 10


// Aliases
const {
  add: sum,
  pi
} = require('./mathUtils.js');

const res = sum(1, 2);
console.log(res);
// 3

```

---
