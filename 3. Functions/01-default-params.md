## Functions > Default Parameters (ES6)

> 🎯 Default function parameters allow named parameters to be initialized with specific values if no value or `undefined` is passed during the function call. 

---
&nbsp;

### 1. Basic Default Parameters

It is a best practice to position parameters with default values at the end of the parameter list.

```javascript
function sum(x, y = 10) {
  return x + y;
}

console.log(sum(5));
// 15
```

### 2. `undefined` vs `null`

Default parameters are **only** triggered if an argument is strictly `undefined` (or completely missing). **`null`** is treated as a valid, deliberate value by JavaScript, so the default parameter will be ignored.

```javascript
function sum(x = 10, y) {
  return x + y;
}

// 'undefined' triggers the default value of 10 for 'x'
console.log(sum(undefined, 5));
// 15

// 'null' is accepted as a valid value (coerces to 0 in math operations)
console.log(sum(null, 5));
// 5
```

### 3. Expressions as Default Values

We can use an expression to dynamically compute a default value. In the following example, the default value for `nickName` is computed directly from `fullName` if not provided explicitly.

```javascript
function userName(fullName, nickName = fullName.split(" ")[0]) {
  console.log(`Nickname of ${fullName} is${nickName}`);
}

userName("Rahul Patil");
// "Nickname of Rahul Patil is Rahul"

userName("Hitesh Tiwari", "Lav");
// "Nickname of Hitesh Tiwari is Lav"

// Passing undefined manually also triggers the default expression
userName("Aajesh", undefined);
// "Nickname of Aajesh is Aajesh"
```

### 4. Implicit `undefined`

If default values are not provided in the function signature, the value of any missing parameter is intrinsically set to `undefined`.

```javascript
function show(a, b) {
  if (a) {
    console.log("this");
  }
  if (b) {
    console.log("that");
  }
}

show();
// (Prints nothing, as both 'a' and 'b' are undefined)

show(1);
// "this"

show(undefined, 1);
// "that"

show(1, 1);
// "this"
// "that"
```

---
&nbsp;

<!-- PAGINATION_START -->

📁 [3. Functions](../3.%20Functions/)  

◀️ [Data Structures](../2.%20Data%20Structures/)  

▶️ [Pass by Value and Pass by Reference](02-pass-by-value-and-reference.md)

<!-- PAGINATION_END -->
&nbsp;
