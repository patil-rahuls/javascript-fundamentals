## Arrow Function <sup>_ES6_</sup>

> Example: _An Arrow Function_
> ```javascript
> const calcAge = (birthYear) => 2037 - birthYear;
>
> const age = calcAge(1990);
> ```
>
> _In the example above:_
>
> _`calcAge` is the function name._
>
> _`birthYear` is a parameter._
>
> _`2037-birthYear` is the the expression which is evaluated and returned._

The return happens implicitly in case of single line arrow function without `{ }`.

We need to explicitly return value from an arrow function when using function blocks `{ }`.

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
// parameters enclosed in parantheses
const product = (x, y, parameter3) => {
  return x * y * parameter3;
};

console.log(product(4, 5, 7));
```

---

---

<!-- PAGINATION_START -->

**Parent:** [1. Basics](../1.%20Basics/)  

**Previous:** ← [Enhanced Object Literals [ES6]](08-enhanced-object-literals.md)  

**Next:** → [`for...in` Loop](10-for-in-loop.md)

<!-- PAGINATION_END -->
