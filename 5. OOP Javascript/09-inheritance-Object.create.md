## Inheritance - `Object.create()`

```javascript
// Create a prototype Object.
const ParentProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  initData(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const UserProto = Object.create(ParentProto);
// Now ParentProto is a
// prototype of UserProto.

// Let's define UserProto's
// own initData() method.
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

const user1 = Object.create(UserProto);
// And now UserProto is
// prototype of user1.

user1.initData("Rahul Patil", 92, "rahulp123");

user1.show();
// Name is "Rahul Patil",
// age is 92.
// Username is rahulp123
```

The prototype chain formed looks like this:

```
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

Observe that this method is also a lot simpler than using constructor functions.

---

---

<!-- PAGINATION_START -->

**Parent:** [5. OOP Javascript](..)
**Previous:** [Inheritance - `ES6 Classes`](08-inheritance-ES6-class.md)
**Next:** [Chaining Class Methods](10-chaining-class-methods.md)

<!-- PAGINATION_END -->
