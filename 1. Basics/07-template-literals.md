## Strings and Template Literals <sup>_ES6_</sup>

Literals represent values in javascript.

These are fixed values not variables that you literally provide in your script.

> Example 1: Literals

```javascript
let name = "foo";
// "foo" is a string literal

let age = 29;
// "29" is a number literal

let stu = { name, age };
// "{name, age}" is an object literal
```

&nbsp;

> Example 2: _Template Literals - are literals delimited with backtick ` `` ` allowing for multi-line strings._

```javascript
// Old way:
const firstName = "Rahul";
const developmentExperience = 6;
console.log(
  "String with \n\
multiple \n\
lines",
);

// Use Template Literal for multiline strings.
console.log(`String
multiple
lines`);
```

&nbsp;

> Example 3: _String interpolation with embedded expressions i.e. using variables in a template literal string._

```javascript
const lastName = "P";
const managemenExperience = 2;
const show = `Hello.
I am ${myName}.
I am a ${exp} years experienced IT Professional`;
```

**_Use template strings to create multiline HTML code snippets dynamically from code._**

---

---

<!-- PAGINATION_START -->

**Parent:** [1. Basics](../1.%20Basics/)  

**Previous:** ← [Nullish Coalescing Assignment Operator `??=`](06.5-nullish-coalescing-assignment.md)  

**Next:** → [Enhanced Object Literals [ES6]](08-enhanced-object-literals.md)

<!-- PAGINATION_END -->
