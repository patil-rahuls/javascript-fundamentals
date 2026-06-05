## ES6 Class's `getter` and `setter`

Just like Objects, Classes also have `getter` and `setter`

> IMP: They are "properties", not "methods"

```javascript
class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  // getter
  get info(){
    return this.name;
  }

  // setter must have exactly ONE parameter COMPULSORY.
  set info(nm){
    this.name = nm;
    this._name = nm;
  }
};

const s4 = new Student("Test", 20);

// Invoke setter
s4.info = "Hitesh";

// Invoke getter
s4.info;      // Hitesh
```

&nbsp;

> TIP: Real world usage - use `setters` for input validation.

Condition: the `setter` method name should be same as the parameter's name in contructor() which need to be validated.

Also, if valid, we need to set the value to new property, because we can't use the same property name because it will result in error.

```javascript
class User {
  constructor(username){
    this.username = username;
  }

  format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  set username(input){
    this.format.test(input)
        ? (this.username = input)
        : console.error("Username should have at least one special character.");
    // Error - "max stack call size exceed error"

    this.format.test(input)
        ? (this._username = input)
        : console.error("Username should have at least one special character.");
    // correct.
  }
};

const u1 = new User("Deepika");
const u2 = new User("Deepika@123");
```

In the above code(first `this.format.test...` line) will give error because, the same class variable `username` is being initialized by two methods: the constructor and the setter.

This results in "max stack call size exceed error".

Hence inside setter, we assign the value to a new variable `\_username` _(adding `_` is a convention to create a new variable)_.


> TIP: We can have more than one getters and setters in an ES6 class/Constructor function.

---
