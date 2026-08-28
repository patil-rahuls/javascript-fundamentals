## Strings and Template Literals (ES6)

Literals represent values in javascript.

These are fixed values not variables that you _literally_ provide in your script.

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

> Example 2: Template Literals - _delimited with backtick ` `` ` allowing for multi-line strings._

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

> Example 3: String interpolation with embedded expressions _i.e. using variables in a template literal string._

```javascript
const lastName = "P";
const managemenExperience = 2;
const show = `Hello.
I am ${myName}.
I am a ${exp} years experienced IT Professional`;

```

Template literals are used to create multiline HTML code snippets dynamically from code.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Nullish Coalescing Assignment Operator **??=**](06.5-nullish-coalescing-assignment.md)  

▶️ [Enhanced Object Literals [ES6]](08-enhanced-object-literals.md)

<!-- PAGINATION_END -->
&nbsp;
