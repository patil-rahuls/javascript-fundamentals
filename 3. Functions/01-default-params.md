## Default function parameters [ES6]

> ***Always keep parameters with default values at the end while defining a function.***


```javascript
function sum(x, y = 10) {
  return x + y;
}

console.log(sum(5));
// 15
```

&nbsp;

### Default parameter is ignored when `null` is passed.
> ***Default parameters are only triggered if an argument is `undefined` (or missing).***

```javascript
function sum(x = 10, y) {
  return x + y;
}

console.log(sum(undefined, 5));
// 15

console.log(sum(null, 5));
// 5
// Default parameters are only triggered if an argument is undefined (or missing).

// null is treated as a valid deliberate value, so the default parameter is ignored.
```

&nbsp;

### We can provide an expression as a parameter's default value

```javascript
// We can have an expression to compute default value
function userName(fullName, nickName = fullName.split(' ')[0]) {
  console.log(`Nickname of ${fullName} is ${nickName}`);
}
// Here, the default value to nickName would be computed from fullName if not provided explicitly.

userName('Rahul Patil');
// Nickname of Rahul Ratil is Rahul

userName('Hitesh Tiwari', 'Lav');
// Nickname of Hitesh Tiwari is Lav

myFunc('Aajesh', undefined);
// Nickname of Aajesh is Aajesh

// Setting default param value as 'undefined' is the same as
// not setting the value.
// This means that parameters (without a default value) in a function are set to 'undefined' initialy.
```

&nbsp;

### By default, the value of a function parameter is undefined if default values are not provided.

```javascript
function show(a, b) {
  if(a){
    console.log('this');
  }
  if(b){
    console.log('that');
  }
}

show();
// undefined

show(1);
// this

show(undefined,1);
// that

show(1,1);
// this that
```

---
