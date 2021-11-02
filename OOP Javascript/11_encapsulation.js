//////////////////////////////////////////////////////////////
// ENCAPSULATION [ protected ] ///////////////////////////////
//////////////////////////////////////////////////////////////

// Proposal for this feature is not finished yet. Its at stage 3 of development.

// Protected Methods and Properties.

// just use underscore before the properties and methods and add a Comment.
// Encapsulation is not yet supported in JS. But letting developers know is a good idea.

class User {
    constructor(username, name, passkey, license){
        this.name = name;
        this.license = license;
        
        // Protected Property
        this._username = username;
        this._passkey = passkey;
        this._txns = [];
    }
};

// That's all we can do for now.

// Public fields and methods
// Private fields and methods

class User {

    // Public fields
    created_at = new Date();
    
    // Private Field
    // All private fields must be written outside the constructor() in the class.
    #username;
    #passkey;
    #txns = [];
    // That's it. syntaxt for private fields is append a # before the variable name EVERYWHERE IN THE CODE.

    constructor(username, name, passkey, license){
        this.name = name;
        this.license = license;
        
        // Protected Property
        // this._username = username;
        // this._passkey = passkey;
        this.#username = username;
        this.#passkey = passkey;
        // this._txns = [];
    }

    // public interface. as this method is public and is available to all instances of this class.
    someFn(){
        console.log(this.#txns);
    }

    // private method
    // But no browser supports this.
    #login(username, passkey){
        console.log("Loggin in ...");
    }
};

const user1 = new User('default', 'root', '---', false);
user1.#txns; // error.private fields should be declared inside a class definition. strange error because its still in development.
user1.#login();// error.

// IMP : 
// 1. All private fields must be written outside the constructor() in the class.
// 2. All fields (properties) in a class are instance properties and not prototype's.
// 3. However methods are linked to prototype property.
