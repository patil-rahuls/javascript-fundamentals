## Chaining Class Methods

We can chain the class methods.

> ***We need to return `this` from the methods to allow chaining.***

```javascript
class User {
  constructor(username, name, passkey, license) {
    this.username = username;
    this.name = name;
    this.passkey = passkey;
    this.license = license;
  }

  name() {
    console.log(`Name: ${this.name}.  `);

    // This is required for chaining to work.
    return this;
  }

  license() {
    console.log(`License: ${this.license}.`);

    // This is required for chaining to work.
    return this;
  }
}

const user2 = new User("rahul.p", "Rahul", 0, "Valid");

user2.name().license();
// Name: Rahul.  License: Valid
```

---

---

<!-- PAGINATION_START -->

**Parent:** [5. OOP Javascript](../5.%20OOP%20Javascript/)

**Previous:** ← [Inheritance - `Object.create()`](09-inheritance-Object.create.md)

**Next:** → [`Asynchronous JavaScript`](../6.%20Asynchronous%20Javascript/)

<!-- PAGINATION_END -->
