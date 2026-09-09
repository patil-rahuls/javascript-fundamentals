## OOP Javascript > Chaining Class Methods

> 🎯 Chaining class methods allows you to call multiple methods sequentially on the same object instance in a single statement. This creates clean, fluent, and highly readable code.

---
&nbsp;

### 1. Returning `this` to Enable Chaining

> ⚠️ **Important:** You **must** return the current object instance (`this`) at the end of your methods to allow chaining. If a method doesn't return `this`, it returns `undefined` by default, causing any subsequent method calls in the chain to throw an error.

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

// Methods are chained together sequentially
user2.name().license();
// Name: Rahul.  
// License: Valid
```

---
&nbsp;
<!-- PAGINATION_START -->

📁 [5. OOP Javascript](../5.%20OOP%20Javascript/)

◀️ [Inheritance - **Object.create()**](09-inheritance-Object.create.md)

▶️ [**Asynchronous JavaScript**](../6.%20Asynchronous%20Javascript/)

<!-- PAGINATION_END -->
&nbsp;
