## Inheritance - `ES6 Classes`

Earlier we saw how we deal with inheritance using constructor functions.

1. Create Parent constructor Fn.
2. Create Child constructor Fn. and Call Parent constructor inside Child.
3. Create/Instantiate Child obj.
4. Child.prototype is linked to Parent.prototype
5. And finally, reset our Child's constructor property.

With ES6 Classes, these steps are automatically taken care of.
**`extends` keword automatically sets up the prototype chain.**
Example:

```javascript
class Sofa extends Furniture {
  constructor(brand, margin, returnable) {
    // mandatory in parent class
    // or any regular ES6 class,
    // but can be omitted in child
    // class if child class need
    // to have exact same number
    // and name of parameters.
    super(brand, margin);
    // Needs to happen first
    // here in constructor fn.
  }

  // Overriding parent's function.
  getCommisionTax() {
    return 0.24 * this.margin;
  }
}

const s2 = new Sofa("Casacraft", 20, true);

s2.getCommisionTax();
// this will call the
// overridden method.
```


`constructor()` is mandatory in parent class or any regular ES6 class, but can be omitted in child class if child class need to have exact same number and name of parameters.

`super()` -> call to parent class' constructor function. It is necessary with extends.

---

---

<!-- PAGINATION_START -->

**Parent:** [5. OOP Javascript](..)
**Previous:** [Inheritance - Constructor Function](07-inheritance-constructor-fn.md)
**Next:** [Inheritance - `Object.create()`](09-inheritance-Object.create.md)

<!-- PAGINATION_END -->
