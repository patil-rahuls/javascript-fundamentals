//////////////////////////////////////////////////////////////
// CHAINING CLASS METHODS ////////////////////////////////////
//////////////////////////////////////////////////////////////

class User {
    // Private fields
    #username;
    #passkey;
    #txns = [];

    constructor(username, name, passkey, license){
        this.name = name;
        this.license = license;
        this.#username = username;
        this.#passkey = passkey;
    }

    // private method
    #login(username, passkey){
        console.log("Loggin in ...");
    }

    name(){
        console.log(`My Name is ${this.name}.`);
        return this; // This is required for chaining to work.
    }

    license(){
        console.log(`My License is ${this.license}.`);
        return this; // This is required for chaining to work.
    }
};

const user2 = new User("rahul.p","Rahul",0,'Valid');
user2.name().license();
// My Name is Rahul.My License is Valid
