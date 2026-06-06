## Arrow Function vs Regular Function

> ***`this` keyword in arrow function references its outer scope.***

> Example 1
```javascript
const obj = {
  name: 'Rahul',
  show: () => console.log(` Hi ${this.name} `),
};

obj.show();
// 'Hi'
```

Because in arrow functions, the `this` keyword DOES NOT point to current Object.

It points to outer scope; global object in this case.

&nbsp;
> Example 2: _The fix_
```javascript
var name = "Hitesh";
const obj = {
  name: 'Rahul',
  show: () => console.log(` Hi ${this.name} `),
};

obj.show();
// 'Hi Hitesh'
```

This is because in the first line `var name = "Hitesh";` we have declared a variable on global object.

That means now `name` is globally available.
```
console.log(this);
// window { ... }

console.log(this.name);
// window { ... , name:Hitesh, ... }
```

&nbsp;
> Example 3
```javascript
const obj = {
  name: 'Rahul',

  show: function (){
    const innerFn = function(){
      console.log(this.name);
      // Cannot read property 'name' of undefined
    };

    innerFn();
    // Fails because it has a 'this' keyword which it is not able refer to any object.
  }
};
```
> Solution:
```javascript
const obj = {
  name: 'Rahul',

  show: function (){

    const self = this;
    // We still have access to 'this' here

    const innerFn = function(){
      console.log(self.name);
    };

    innerFn();
    // Now works.
  }
};
```
&nbsp;
> Example 4: ES6 Solution (Modern): - use arrow functions. Because `this` in arrow function references its outer scope.
```javascript
const obj = {
  name: 'Rahul',
  show: function (){
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
  }
};
```

&nbsp;
> Example 5: `arguments` keyword is not available in arrow function.
```javascript
// Regular Fn.
const sum = function(a , b ) {
  console.log(arguments);
  // Arguments: [1,3]
}


// Arrow Fn.
const sumArrow = (a , b ) => {
  console.log(arguments);
  // ReferenceError: arguments is not defined.
}
```
---
