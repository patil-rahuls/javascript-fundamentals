## Arrow Function (ES6)

```javascript
const calcAge = (birthYear) => 2037 - birthYear;

const age = calcAge(1990);

```
_calcAge_ is the function name.

_birthYear_ is a parameter.

_2037 - birthYear_ is the the expression which is evaluated and returned.

&nbsp;

The return happens implicitly in case of single line arrow function without **{ }**.

We need to explicitly return value from an arrow function when using function blocks **{ }**.

```javascript
const fiveTimes = (parameter) => {
  const x = 5;

  // Explicitly return value
  return x * parameter;
};

console.log(fiveTimes(4));
// 20

```

For more than one parameters we enclose them in parentheses.

```javascript
const product = (x, y, parameter3) => {
  return x * y * parameter3;
};

console.log(product(4, 5, 7));

```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Enhanced Object Literals [ES6]](08-enhanced-object-literals.md)  

▶️ [**for...in** Loop](10-for-in-loop.md)

<!-- PAGINATION_END -->
&nbsp;
