## Arrow Function vs Regular Function

> **_`this` keyword in arrow function references its outer scope._**

> Example 1
>
> ```javascript
> const obj = {
>   name: "Rahul",
>   show: () => console.log(` Hi ${this.name} `),
> };
>
> obj.show();
> // 'Hi'
> ```
>
> _Because in arrow functions, the `this` keyword DOES NOT point to current Object._
>
> _It points to outer scope; global object in this case._

&nbsp;

> Example 2: _The fix_
>
> ```javascript
> var name = "Hitesh";
> const obj = {
>   name: "Rahul",
>   show: () => console.log(` Hi ${this.name} `),
> };
>
> obj.show();
> // 'Hi Hitesh'
> ```
>
> _This is because in the first line `var name = "Hitesh";` we have declared a variable on global object._
>
> _That means now `name` is globally available._
>
> ```
> console.log(this);
> // window { ... }
>
> console.log(this.name);
> // window { ... , name:Hitesh, ... }
>
> ```

&nbsp;

> Example 3

```javascript
const obj = {
  name: "Rahul",

  show: function () {
    const innerFn = function () {
      console.log(this.name);
      // Error: Cannot read property
      // 'name' of undefined
    };

    innerFn();
    // Fails because it has a
    // 'this' keyword which it is
    // not able refer to any object.
  },
};
```

> Solution:
>
> ```javascript
> const obj = {
>   name: "Rahul",
>
>   show: function () {
>     const self = this;
>     // We still have access to 'this' here
>
>     const innerFn = function () {
>       console.log(self.name);
>     };
>
>     innerFn();
>     // Now works.
>   },
> };
> ```

&nbsp;

> Example 4: _ES6 Solution (Modern): - use arrow functions._
>
> _Because `this` in arrow function references its outer scope._

```javascript
const obj = {
  name: "Rahul",
  show: function () {
    // We dont need this now.
    // const self = this;

    // Converted to arrow fn. so that the
    // 'this' points to the outer scope of
    // 'show' function scope.
    innerFn = () => {
      console.log(this.name);
    };

    innerFn();
    // Now this works too.
  },
};
```

&nbsp;

> Example 5: _`arguments` keyword is not available in arrow function._

```javascript
// Regular Fn.
const sum = function (a, b) {
  console.log(arguments);
  // Arguments: [1,3]
};

// Arrow Fn.
const sumArrow = (a, b) => {
  console.log(arguments);
  // ReferenceError: arguments is not defined.
};
```

---

---

<!-- PAGINATION_START -->

**Parent:** [4. How Javascript Works](..)  
**Previous:** [`this` Keyword](05-this-keyword.md)  
**Next:** [Hoisting and TDZ Temporal Dead Zone](07-hoisting-TDZ.md)

<!-- PAGINATION_END -->
