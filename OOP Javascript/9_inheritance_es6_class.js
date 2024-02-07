//////////////////////////////////////////////////////////////
// INHERITANCE - ES6 CLASSES /////////////////////////////////
//////////////////////////////////////////////////////////////

// Earlier we saw how we deal with inheritance using constructor functions.
// Create Parent constructor Fn.
// Create Child constructor Fn.
    // Call Parent constructor inside Child.
// Create/Instantiate Child obj.
// Child.prototype is linked to Parent.prototype
// And finally, reset our Child's constructor property.

// With ES6 Classes, these steps are automatically taken care of.

// extends keword automatically sets up the prototype chain for us.
class Sofa extends Furniture{
    constructor(brand, margin, returnable){ // mandatory in parent class or any regular ES6 class,
        // but can be omitted in child class if child class need to have exact same number and name of parameters.
        super(brand, margin);       // Needs to happen first here in constructor fn.
    }

    getCommisionTax(){  // Overriding parent's function.
        return 0.24*this.margin;
    }
};

const s2 = new Sofa('Casacraft', 20, true);
s2.getCommisionTax(); // this will call overridden method.

// AS SIMPLE AS THAT
// constructor() is mandatory in parent class or any regular ES6 class,
// but can be omitted in child class if child class need to have exact same number and name of parameters.
// super() -> call to parent class' constructor function. necessary with extends.
