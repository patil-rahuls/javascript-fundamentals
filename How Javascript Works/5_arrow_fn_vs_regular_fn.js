//////////////////////////////////////////////////////////////
// ARROW Fn. VS REGULAR Fn. //////////////////////////////////
//////////////////////////////////////////////////////////////

// 'this' keyword in arrow function references its outer scope.

const obj = {
    name: 'Rahul',

    show: () => console.log(` Hi ${this.name} `),
};

obj.show();                 // 'Hi undefined'

// Because in arrow functions, the 'this' keyword DOES NOT points to current Object.
// It points to outer scope. (global object - window in this case)

var name = "Hitesh";
const obj = {
    name: 'Rahul',

    show: () => console.log(` Hi ${this.name} `),
};

obj.show();                 // 'Hi Hitesh'


// This is because in the first line "var name = "Hitesh";" we have declared a variable on global object (window object)
// That means now "name" is globally available. So below will work.
console.log(this);          // window { ... }
console.log(this.name);     // window { ... , name:Hitesh, ... }

// More Example:
const obj = {
    name: 'Rahul',

    show: function (){
        // ...   
        const innerFn = function(){
            // ...
            console.log(this.name);         // Cannot read property 'name' of undefined
        };
        innerFn();                          // Because it's called just like a regular function and not using an object.
    }
};

// Solution:
const obj = {
    name: 'Rahul',
    
    show: function (){
        // ...   
        const self = this;                  // We still have access to 'this' here
        const innerFn = function(){
            // ...
            console.log(self.name);
        };
        innerFn();                          // Now this will work.
    }
};

// ES6 Solution (Modern): - use arrow functions. Because 'this' in arrow function references its outer scope.
const obj = {
    name: 'Rahul',
    
    show: function (){
        // ...   
        // const self = this;                 // We dont need it now.
        innerFn = () => { console.log(this.name); };
        innerFn();                            // Now this will work too.
    }
};

// arguments keyword - not available in arrow function.
const sum = function(a , b ) {
    console.log(arguments);                    // Prints the arguments passed to this function
}

const sum = (a , b ) => {
    console.log(arguments);                    // ReferenceError: arguments is not defined.
}

