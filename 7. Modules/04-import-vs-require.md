## `import()` vs `require()`

### Difference between Common JS Module & ES Module

|                                     | Common JS Module                                                        | ES Module                                                     |
| :---------------------------------- | :---------------------------------------------------------------------- | :------------------------------------------------------------- |
| _import a module_                   | `require()`                                                             | `import`                                                       |
| _export from a module_              | `module.exports` and `exports.<data>`                                   | `export`                                                       |
| import nature                       | modules are loaded **synchronously**                                    | Modules are loaded **asynchronously**                          |
| Binding Error Checking              | Bound Dynamically _(Binding errors are not identified untill run-time)_ | Bound Static _(Binding errors are identified at compile time)_ |
| Default Module system in JavaScript | Yes                                                                     | No                                                             |
| Package search                      | Recursive search                                                        | Only scans 'node_modules' and current directory                |
| file extension                      | `.cjs`                                                                  | `.mjs`                                                         |
|                                     |                                                                         |

### 1. Calling

- `require()` can be called from anywhere in the cod (including within conditionals and functions), whereas
- `import` can only be called at the begining.

### 2. Binding Error Checking

- `require()` is bound dynamically. whereas,
- `import` is bound static.

  This means, for `require()` the binding errors are not identified untill run-time.

  For `import` the binding errors are identified at compile time.

  For `import` the engine "links" the variables before the code even runs.

  For `require()` it just executes the file and returns whatever object was assigned to module.exports at that specific moment.

### 3. synchronous or Asynchronous

- `require()` are synchronous in nature, means, modules will be loaded in sequence(linear fashion).
- `imports` are asynchronous. Import runs faster in large scale applications where we need to import a large number of modules in a file.

### 4. Searching for Modules

- If the relative file is not found:
- `require()` automatically scans the `node_modules` folder and project folders recursively to find modules.
- `import` won't scan the `node_modules` folder and project folders recursively.
- `import` only scans `node_modules` folder when we specify a bare specifier i.e. without `/` or `./`

  e.g.

  ```
  import { add } from 'lodash';

  ```

- `require()` follows a aggresive algorithm to search for the file imported. e.g. it first checks if it is a core module, if not found, it checks for a file/folder with the same name in current directory, if found in a folder with the same name, it checks for index.js file in the found directory. If still not found, it checks in `node_modules` folder in CURRENT directory. If it’s still not there, it moves up to the parent directory's `node_modules`, and then the parent's parent, all the way up to the root of your server.

  ```
  let today = require("./today");

  ```

- The `require` statement above, will assume that the script `today` have a file ext of `.js`.

- If there is no `today.js` file in the current directory, it will assume that `today` is a sub-directory and it will search for `index.js` in that directory.

&nbsp;

**Why .mjs extension?**

It indicates an ES Module file.

Node.js's original module system is CommonJs _(which uses `require` and `module.exports`)_.

Since Node.js was created, the ECMAScript module system _(which uses `import` and `export`)_ has become standard and Node.js has added support for it.

Node.js will treat `.cjs` files as `CommonJS` modules and `.mjs` files as `ECMAScript` modules.

_IMP - It will treat `.js` files as whatever the default module system for the project is (which is `CommonJS` UNLESS `package.json` says `"type": "module"`)._
_Hence, as long as Node JS doesn't consider `.js` files as `ES Modules` BY DEFAULT, we need to keep specifying `"type": "module"` inside the package.json file of our project._

---

---

<!-- PAGINATION_START -->

**Parent:** [7. Modules](..)
**Previous:** [ES Modules](03.2-modules-ES-live-bindings.md)
**Next:** [Module Patterns [ES6]](05-module-pattern.md)

<!-- PAGINATION_END -->
