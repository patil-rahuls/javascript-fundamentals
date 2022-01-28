//////////////////////////////////////////////////////////////
// OBJECT.create() ///////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Works differently than constructor functions and es6 classes.
// We directly create a prototype Object ONLY, and link objects to the newly created prototype.

// prototype 'StudentProto' is created 
const StudentProto = {
    age(){
        console.log(`Age : ${this.age}`);
    }
};

// object 's5' is linked to the prototype 'StudentProto'
const s5 = Object.create(StudentProto);
console.log(s5);

// Now we can set the property of the individual objects
s5.age = 20;
s5.age();

console.log(s5.__proto__ === StudentProto);

// Better way to set poperties in this case:
const StudentProto = {
    age(){
        console.log(`${this.name}'s age is ${this.age} years`);
    },                      // Notice the comma here. this is not an ES6 class.
    init(name, age){
        this.name = name;
        this.age = age;
    }
};
const s6 = Object.create(StudentProto);
s6.init("rahul", 27);
s6.age();

// The distinction here is that, we did not create any constructor function.
// The ".prototype" property which is automatically created in the case of constructor function, 
// is what we manually create when using Object.create().


