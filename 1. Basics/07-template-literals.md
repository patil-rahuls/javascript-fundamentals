## Strings and Template Literals (ES6)

> 🎯 **Literals** represent fixed values in JavaScript. They are the actual values—not variables—that you *literally* provide in your script.

### 1. Understanding Literals
```javascript
let name = "foo";        
// "foo" is a string literal

let age = 29;            
// 29 is a number literal

let stu = { name, age }; 
// { name, age } is an object literal
```

### 2. Template Literals _(Multi-line Strings)_
Template literals are delimited with backticks (**`` ` ``**) and natively support multi-line strings without needing escape characters.

```javascript
// ❌ Old way (cumbersome):
console.log(
"String with \n\
multiple \n\
lines"
);

// ✅ New way (Template Literal):
console.log(`String
multiple
lines`);
```

### 3. String Interpolation _(Embedded Expressions)_
Template literals allow you to inject variables and expressions directly into a string using the **`${expression}`** syntax.

```javascript
const firstName = "Rahul";
const developmentExperience = 6;

const show = `Hello.
I am ${firstName}.
I am a ${developmentExperience} years experienced IT Professional.`;

console.log(show);
```

💡 **Common Use Case:** Template literals are heavily used to create multiline HTML code snippets dynamically from JavaScript.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Nullish Coalescing Assignment Operator **??=**](06.5-nullish-coalescing-assignment.md)  

▶️ [Enhanced Object Literals [ES6]](08-enhanced-object-literals.md)

<!-- PAGINATION_END -->
&nbsp;
