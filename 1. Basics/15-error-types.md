## Error Types

> 🎯 JavaScript throws specific types of errors based on what went wrong during parsing or execution. Understanding these categories is crucial for debugging.

---
&nbsp;

### 1. Syntax Errors
These occur when the code contains a mistake in the **structure or syntax** of the language.
*   *Examples:* Missing punctuation, incorrect use of keywords, or mismatched parentheses.

### 2. Reference Errors
These occur when the code is trying to access a variable or function that has **not been defined**.
*   *Examples:* Using a variable that hasn't been declared, calling a function before it is defined, or accessing variables in the **Temporal Dead Zone (TDZ)**.

### 3. Type Errors
These occur when the code is trying to perform an operation on a variable of the **wrong type**.

*Example:* Trying to use a string as a number, or trying to access a property of a non-object (like a primitive number).

```javascript
const x = 7;

console.log(x.toUpperCase());
// ❌ TypeError (x is a number, not a string)
```

### 4. Range Errors
These occur when the code is trying to access an index **outside the allowed range**, or when a value is too large or too small to be used.

```javascript
const maxNumber = Number.MAX_SAFE_INTEGER;

console.log(maxNumber + 1);
```
*Here, the code is trying to add 1 to the maximum safe integer value that JavaScript can represent, which exceeds the maximum value that can be safely represented and causes a range error.*

### 5. Evaluation Errors
These occur when the code is trying to **evaluate an expression that is not valid**.

*Example:* Dividing by zero or trying to access a property of `undefined`.

```javascript
eval("hello world");
```
*Here, the code is trying to evaluate a string `"hello world"` which is not a valid JavaScript statement, so it causes an evaluation error.*

### 6. URIError
These occur when a **malformed URI** is passed to the `encodeURI()` or `decodeURI()` functions.

```javascript
encodeURI("[http://mywebsite.com/path?name=value#fragment](http://mywebsite.com/path?name=value#fragment)");
```
*Here, the code is trying to encode the URI which contains some reserved characters that are not allowed to be encoded.*

*⚠️ **Note:** The JavaScript interpreter will stop executing the code as soon as it encounters a `URIError`. It's essential to check your code for URI errors before running it to ensure it will execute correctly.*

---
&nbsp;
<!-- PAGINATION_START -->

📁 [1. Basics](../1.%20Basics/)  

◀️ [**"..."** Rest Operator [ES6]](14-rest-operator.md)  

▶️ [Console Methods](16-console.md)

<!-- PAGINATION_END -->
&nbsp;
