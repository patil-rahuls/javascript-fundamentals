## Equality Operators (`==` and `===`)

### `==` Abstract/Loose Equality Operator

> **_Type Coercion is applied_**

```javascript
console.log("18" == 18);
// true
// because of implicit type coercion.
```

&nbsp;

### `===` Strict Equality Operator

> **_No Type Coercion occurs_**

```javascript
console.log("18" === 18);
// false
```

---

&nbsp;

### Object References

> _***Objects and Arrays are references in the HEAP and references are always different.***_

> Example 1

```javascript
var a = [1, 2, 3];
var b = [1, 2, 3];

a == b; // false
a === b; // false
// type is same, but values
// 'references' are different
```

&nbsp;

> Example 2

```javascript
var c = { x: 1, y: 2 };
var d = { x: 1, y: 2 };

c == d; // false
c === d; // false
// type is same, but values
// 'references' are different
```

&nbsp;

> Example 3: Strings with same resulting values are equal if they are primitive.

```javascript
var e = "text";
var f = "te" + "xt";
// "te" & "xt" are both primitive

e == f; // true
e === f; // true
```

&nbsp;

> Example 4: String primitive and String Object Comparision.

```javascript
// 'new String()' returns an Object
"abc" == new String("abc");
// true (value is same)

"abc" === new String("abc");
// false ('new String()' returns an Object)

new String("rahul") == new String("rahul");
// false

new String("rahul") === new String("rahul");
// false
```

&nbsp;

> Example 5: A handy way to compare two objects _(with same order of properties)_ in JS would be:

```javascript
JSON.stringify(a) === JSON.stringify(b);
// true
```

Read More here -
https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons

**_IMP - Switch stmt performs an `===` based comparison when matching the expression in a case._**

---

---

<!-- PAGINATION_START -->

**Parent:** [1. Basics](..)  
**Previous:** [Function Declaration & Expression - Differences](03.2-function-declaration-&-expression-diff.md)  
**Next:** [Falsy Values in JS](05-falsy-values.md)

<!-- PAGINATION_END -->
