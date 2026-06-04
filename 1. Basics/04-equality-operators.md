## Equality Operators (`==` and `===`)

### `==` Abstract/Loose equality operator

Type Coercion occurs here.

```javascript
console.log('18' == 18);
// true
// because of implicit type coercion.
```

&nbsp;
### `===` Strict equality operator

No Type Coercion occurs.

```javascript
console.log('18' === 18);
// false
```

---
&nbsp;

### Object References
_***Objects and Arrays are references in the HEAP and references are always different***_


> Example 1

```javascript
var a = [1,2,3];
var b = [1,2,3];

a == b            // false
a === b           // false
// type is same, but values 'references' are different
```

&nbsp;
> Example 2

```javascript
var c = { x: 1, y: 2 };
var d = { x: 1, y: 2 };

c == d            // false
c === d           // false
// type is same, but values 'references' are different
```

&nbsp;
> A handy way to compare two objects in JS would be:

```javascript
JSON.stringify(a) === JSON.stringify(b);
// true
```

&nbsp;
> Strings with same resulting values are equal if they are primitive.

```javascript
var e = "text";
var f = "te" + "xt";
// "te" & "xt" are both primitive

e == f               // true
e === f              // true
```

&nbsp;
> String primitive and String Object Comparision.

```javascript
// 'new String()' returns an Object
"abc" == new String("abc")
// true (value is same)

"abc" === new String("abc")
// false ('new String()' returns an Object)

new String("rahul") == new String("rahul")
// false

new String("rahul") === new String("rahul")
// false
```

Read More here -
 https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons

_***IMP - Switch stmt performs an ‘===’ based comparison when matching the expression in the a case.***_

---
