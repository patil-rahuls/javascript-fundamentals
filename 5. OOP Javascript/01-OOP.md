## OOP Javascript > OOP Basics

> 🎯 Object-Oriented Programming (OOP) is a paradigm used to organize code, make it flexible, and easier to maintain. We use **Objects** to model real-world entities, where **properties** represent the state and **methods** represent the behavior.

---
&nbsp;

### 1. The 4 Pillars of OOP

When modeling real-world data into classes, we rely on four core principles:

*   **Abstraction:** Hiding the complex details of the implementation and showing only the essential features to the user.
*   **Encapsulation:** Keeping some properties and methods private inside a class so they are not accessible from the outside world. We only expose essential methods (the public API) to interact with the object.
*   **Inheritance:** Reusing properties and methods from parent classes to create specialized child classes.
*   **Polymorphism:** (*poly* = many, *morph* = forms) Reusing the same method names for different purposes, typically by overriding methods from a parent class. *(Note: JavaScript does not support function overloading like C++ or Java).*

### 2. Traditional OOP vs. JavaScript OOP

JavaScript does not have traditional classes. Instead, it relies on a concept called **Prototypal Inheritance**.

```text
Traditional OOP  |      Javascript OOP
                 |  
   Class         |      Prototype (Contains methods)
     |           |               ^
     |           |               |
     |           |               |
Instantiation    |  Prototypal Inheritance / Delegation
     |           |               ^
     |           |               |
     |           |               |
  Instance       |      Object (Can access methods)
```

In JavaScript, we say **"Objects are linked to a Prototype Object"**.

*   A **Prototype Object** contains properties and methods that are accessible to all objects linked to it.
*   **Delegation:** Behavior (methods) is delegated to the linked Prototype Object. In classic OOP, methods are physically copied from the class to every single instance. In JS, the instances simply look up the chain to the prototype.
*   *Example:* When you use an array method like `Array.prototype.map()`, `Array.prototype` is the Prototype Object. All arrays you create in JavaScript are linked to it, giving them access to those methods without copying them.

### 3. How Do We Create Prototype Objects?

There are three primary ways to implement prototypal inheritance in JavaScript:

1.  **Constructor Functions:**
    Creates objects from a standard function. This is how built-in objects like Arrays, Maps, or Sets are actually implemented under the hood (e.g., `new Array(...)`, `new Map(...)`).
2.  **ES6 Classes:**
    These work exactly like constructor functions but provide a cleaner, more modern syntax. They are *not* like traditional OOP classes found in Java or C++—they are simply "syntactic sugar" over constructor functions.
3.  **`Object.create()`:**
    The most straightforward way to link an object to a prototype. You directly create the Prototype Object and link the new object (instance) to it.

*Note: The 4 pillars of OOP are still completely valid and applicable when using JavaScript's prototypal inheritance.*

---
&nbsp;
<!-- PAGINATION_START -->

📁 [5. OOP Javascript](../5.%20OOP%20Javascript/)

◀️ [**How JavaScript Works**](../4.%20How%20Javascript%20Works/)

▶️ [Constructor Functions](02.1-contructor-function.md)

<!-- PAGINATION_END -->
&nbsp;
