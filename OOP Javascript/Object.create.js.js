//////////////////////////////////////////////////////////////
// OBJECT.create() ///////////////////////////////////////////
//////////////////////////////////////////////////////////////

// works differently than constructor functions and es6 classes.
const StudentProto = {
    age(){
        console.log(`Age : ${this.age}`);
    }
};


const s5 = Object.create(StudentProto);
console.log(s5);

s5.age = 20;
s5.age();

console.log(s5.__proto__ === StudentProto);
