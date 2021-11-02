//////////////////////////////////////////////////////////////
// INHERITANCE USING Object.create() /////////////////////////
//////////////////////////////////////////////////////////////

const ParentProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
};

const UserProto = Object.create(ParentProto);
// Now ParentProto is a prototype of UserProto.

// Let's define UserProto's own init() method.
UserProto.init = function(fullName, birthYear, userName){
    ParentProto.init.call(this, fullName, birthYear);
    this.userName = userName;
};

UserProto.show = function(){
    console.log(`Name is ${this.fullName}, age is ${2029-this.birthYear}. Username is ${this.userName}`);
};


const user1 = Object.create(UserProto);
// And now UserProto is prototype of user1.

user1.init("Rahul Patil", 92, 'rahulp123');
user1.show();

// The prototype chain formed looks like this:
ParentProto (prototype)
        |
        | [.__proto__]
        |
  UserProto (prototype)
        |
        | [.__proto__]
        |
      user1


