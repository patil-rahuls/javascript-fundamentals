//////////////////////////////////////////////////////////////
// INHERITANCE USING ES6 CLASSES /////////////////////////////
//////////////////////////////////////////////////////////////

// extends keword automaticall set up the prototype chain for us.
class Sofa extends Furniture{
    constructor(brand, margin, returnable){ // mandatory in parent class or any regular es6 class, but can be omitted in child class if child class need to have exact same number and name of parameters.
        // Needs to happen first here in constructor fn.
        super(brand, margin);

    }

    getCommisionTax(){  // fn overriding
        return 0.24*this.margin;
    }
};

const s2 = new Sofa('Casacraft', 20, true);
s2.getCommisionTax(); // will call overridden method.

// AS SIMPLE AS THAT
// constructor() is mandatory in parent class or any regular es6 class, but can be omitted in child class if child class need to have exact same number and name of parameters.
// super() -> call to parent class' constructor function. necessary with extends.
