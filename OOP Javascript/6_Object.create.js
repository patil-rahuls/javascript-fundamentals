//////////////////////////////////////////////////////////////
// OBJECT.create() ///////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Works differently than constructor functions and es6 classes.
// We directly create a prototype object ONLY, and link objects to the newly created prototype.

// prototype 'StudentProto' is created
const StudentProto = {
    showAge(){
        console.log(`Age : ${this.age}`);
    }
};
// How is this different than a constructor function? - Homework

// object 's5' is linked to the prototype 'StudentProto'
const s5 = Object.create(StudentProto);
console.log(s5);

// Now we can set the property of the individual objects
s5.age = 20;
s5.showAge();
// 20

console.log(s5.__proto__ === StudentProto);
// true

// Better way to set poperties in this case:
const StudentProto = {
    age(){
        console.log(`${this.name}'s age is ${this.age} years`);
    },
    // Notice the comma above. this is not an ES6 class.
    myFunc(name, age){
        this.name = name;
        this.age = age;
    }
};
const s6 = Object.create(StudentProto);
s6.myFunc("rahul", 27);
s6.age();

// The distinction here is that, we did not create any constructor function.
// The ".prototype" property which is automatically created in the case of constructor function,
// is what we manually create when using Object.create().
