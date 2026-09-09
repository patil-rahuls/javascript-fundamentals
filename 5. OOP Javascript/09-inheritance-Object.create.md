## OOP Javascript > Inheritance > Object.create()

> 🎯 `Object.create()` provides a straightforward and explicit way to implement inheritance. It allows you to directly create a new object and set its prototype to an existing object, seamlessly delegating behavior without the need for constructor functions.

---
&nbsp;

### 1. Implementing the Prototype Chain

You can link objects together to inherit methods and properties. In this example, `ParentProto` becomes the prototype for `UserProto`, which then becomes the prototype for `user1`.

```javascript
// Create a base prototype Object.
const ParentProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  initData(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

// 1. Link UserProto to ParentProto
const UserProto = Object.create(ParentProto);
// Now ParentProto is a prototype of UserProto.

// 2. Define UserProto's own methods
UserProto.initData = function (fullName, birthYear, userName) {
  ParentProto.initData.call(this, fullName, birthYear);
  this.userName = userName;
};

UserProto.show = function () {
  console.log(`
    Name is ${this.fullName},
    age is ${2029 - this.birthYear}.
    Username is ${this.userName}`);
};

// 3. Link user1 to UserProto
const user1 = Object.create(UserProto);
// And now UserProto is the prototype of user1.

user1.initData("Rahul Patil", 92, "rahulp123");

user1.show();
// Name is "Rahul Patil",
// age is 92.
// Username is rahulp123
```

### 2. Visualizing the Structure

The prototype chain formed by the implementation above looks like this:

```text
ParentProto (prototype)
        ^
        |
        | [.__proto__]
        |
  UserProto (prototype)
        ^
        |
        | [.__proto__]
        |
      user1
```

> ⚠️ **Important:** Observe that this method of setting up inheritance (often called behavior delegation) is considerably simpler and more direct than using traditional constructor functions or ES6 Classes.

---
&nbsp;
<!-- PAGINATION_START -->

📁 [5. OOP Javascript](../5.%20OOP%20Javascript/)
  
◀️ [Inheritance - **ES6 Classes**](08-inheritance-ES6-class.md)  

▶️ [Chaining Class Methods](10-chaining-class-methods.md)

<!-- PAGINATION_END -->
&nbsp;
