//////////////////////////////////////////////////////////////
// INHERITANCE - CONSTRUCT FUNCTION //////////////////////////
//////////////////////////////////////////////////////////////

// 1. Creating Objects using constructor functions.

// Create a constructor function.
const Furniture = function(brand, margin){
    this.brand = brand;
    this.margin = margin;
};
// Add a method to its prototype object.
Furniture.prototype.getCommisionTax = function(){
    console.log(.18*this.margin);
};

// A subclass 'Sofa' that will inherit Furniture.
const Sofa = function(brand, margin, returnable){
    // this.brand = brand;
    // this.margin = margin;

    // Calling Parent's constructor fn. using call method. Remember call(), apply() and bind() ?
    // Furniture(brand, margin); // not correct. because we cant call it like a regular fn. (it has 'this' keyword).
    Furniture.call(this, brand, margin);
    this.returnable = returnable;
};

Sofa.prototype.info = function(){
    console.log(`Product Sofa of Brand ${this.brand} has a commision margin of ${this.margin}
    and it is ${this.returnable?'returnable':'not returnable'}.`);
};

const s1 = new Sofa('Neelkamal', 15, false);

// Now we link the Sofa.prototype to Furniture.prototype object.

// Furniture.prototype
//      |
//      | [.__proto__]
//      |
//  Sofa.prototype
//      |
//      | [.__proto__]
//      |
//   Obj - s1

// So, we say Sofa.prototype is linked to Furniture.prototype, and we do that using Object.create

Sofa.prototype = Object.create(Furniture.prototype);
// Sofa.prototype = Furniture.prototype; // this is incorrect. If we do this,
// the constructor functions Furniture and Sofa will both share same prototype.
// This is because we are simply assigning an object to another. Remember obj1 = obj2; (only reference is copied, not the content)

// What we do here is that we LINK Sofa.prototype object using a Furniture prototype. (Furniture.prototype in this case.)
// Now, objects created using Sofa cnstructor fn, will have direct access to Furniture prototype methods.

s1.getCommisionTax(); // Sofa object accessing Furniture.prototype method.
// When we call a method using an object, it does a method lookup through prototype chain. it checks if it is available in object's prototype?(Sofa.prototype). if not then it checks in the prototype of object's prototype. i.e. prototype of Sofa.prototype.
// Hence making a chain of prototypes.

//  We can visualize it like this.
console.log(s1.__proto);            // Sofa.prototype
console.log(s1.__proto.__proto__);  // Furniture.prototype

// Another IMP point here:
// If we check the constructor property of Sofa.prototype object, it should point back to Sofa constructor.
// But because we have used Object.create(Furniture.prototype), it points to Furniture.

console.dir(Sofa.prototype.constructor); // Furniture

// Solution:
Sofa.prototype.constructor = Sofa; // As simple as that. All we are doing is that resetting back the '.constructor' property of Sofa.prototype.

// check
console.log(s1 instanceof Sofa);
//  true
console.log(s1 instanceof Furniture);
// true
// this is correct because Sofa has inherited from Furniture.

// Example:
const Car = function(make, currentSpeed){
    this.make = make;
    this.currentSpeed = currentSpeed;
};
Car.prototype.accelerate = function(){
    this.currentSpeed += 20;
    console.log( `${this.make} is going at ${this.currentSpeed} KM/H`);
};

const EV = function(this, make, charge){
    Car.call(this, make, currentSpeed);
    this.charge
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
};

EV.prototype.accelerate = function(){           // Fn overriding.
    this.currentSpeed += 20;
    this.charge--;
    return `${this.make} is going at ${this.currentSpeed} KM/H, with a charge of ${this.charge} %`;
};

// In the scope chain, "EV.prototype.accelerate" will come first, and it will be called. because as I said earlier,
// it does a method lookup through prototype chain, up till parent's prototype property.
