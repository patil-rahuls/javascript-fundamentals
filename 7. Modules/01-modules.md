## Modules - Types & Scopes

### What are Modules?

Modules are a way to organize code into separate files or units of functionality.
Benfits of Modules are, we get:

- Reusable code
- Maintainability
- Scalability

_One module should serve a single purpose. It should have related encapsulated js code._
  
_Every JS file in Node JS is treated as a Module._

_Multiple modules can be grouped into a package._

_Package: A directory with one or more Modules._

---

### Types of Modules?

There are two main types of modules in JavaScript based on the Ecmascript specifications:

1. **CommonJS modules:**
   This is the default module format used in Node.js FOR ALMOST ALL OF ITS IMPLEMENTATION.
   It uses the `require()` function to import modules and the `module.exports` object to export them.

2. **ES modules:**
   This is the module format introduced in ES6.
   It uses the `import` statement to import modules and the `export` keyword to export them.
   ES modules can be used both in Node.js and in modern web browsers that support them.

&nbsp;

_Functionally there are three types of modules:_

1.  Core modules:

    _Inbuilt modules in node js like `http`, `fs`, `os`, `util`, `url` and `querystring`, etc._

2.  Local modules:
    
    _Modules that are writen by developers as a part of creating their application._

3.  Third-party modules:

    _All those which are available online in the public domain. Like `AsyncJS`, `Axios`, and `Express` to name a few._

---
&nbsp;
### Scopes in Modules

In a Module, all top level variables are scoped to the Module.

In a Script, all top level variables are scoped Globally.

By default "strict mode" is used in Modules.

The top level `this` points to `undefined` in a Module, whereas in a script, it point to the global object i.e. `window`(Browser) / `global`(NodeJS).

We should write only 1 module per file.

Imports are the first thing that happen in a module.

Imports are hoisted.

In Node JS, every file that we create is considered as a Module.

---

---

<!-- PAGINATION_START -->

**Parent:** [7. Modules](..)
**Previous:** _None_
**Next:** [CommonJS Modules](02-modules-CommonJS.md)

<!-- PAGINATION_END -->
