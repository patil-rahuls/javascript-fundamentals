## Arrow Function [ES6]

```javascript
const calcAge = birthYear => 2037 - birthYear;
const age = calcAge(1990);
```
`calcAge` is the function name

`birthYear` is a parameter

the expression `2037-birthYear` is evaluated and returned.

The return happens implicitly in case of single line arrow function without `{ }`.

We need to explicitly return value from an arrow function when using function blocks `{ }`

```javascript
const fiveTimes = parameter => {
  const x = 5;
  // Explicitly return value
  return x*parameter;
}
console.log(fiveTimes(4));
// 20
```

&nbsp;

For more than one parameters we enclose them in parentheses

```javascript
// 3 parameters
const product = (x, y, parameter3) => {
  return x*y*parameter3;
}
console.log(product(4,5,7));
```

---
