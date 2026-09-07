## Arrow Function (ES6)

> 🎯 Arrow functions provide a concise syntax for writing function expressions. 
> *   **Implicit Return:** If the function is a single expression without curly braces **`{ }`**, the value is returned automatically.
> *   **Explicit Return:** If you use a block body with **`{ }`**, you must explicitly use the **`return`** keyword.

---
&nbsp;

### 1. Implicit Return (Single Line)
For simple, one-line functions, you can omit the curly braces and the `return` keyword.

```javascript
const calcAge = (birthYear) => 2037 - birthYear;

const age = calcAge(1990);
```
*   **`calcAge`** is the function name (variable).
*   **`birthYear`** is the parameter.
*   **`2037 - birthYear`** is the expression that is evaluated and returned implicitly.

### 2. Explicit Return (Block Body)
When using curly braces **`{ }`** to write multiple lines of logic, the implicit return is disabled. You must explicitly return the value.

```javascript
const fiveTimes = (parameter) => {
  const x = 5;

  // Explicitly return value
  return x * parameter;
};

console.log(fiveTimes(4)); 
// 20
```

### 3. Multiple Parameters
For more than one parameter, you must enclose them in parentheses **`( )`**.

```javascript
const product = (x, y, parameter3) => {
  return x * y * parameter3;
};

console.log(product(4, 5, 7)); 
// 140
```
---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [Enhanced Object Literals [ES6]](08-enhanced-object-literals.md)  

▶️ [**for...in** Loop](10-for-in-loop.md)

<!-- PAGINATION_END -->
&nbsp;
