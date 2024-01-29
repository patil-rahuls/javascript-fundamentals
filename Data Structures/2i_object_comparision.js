//////////////////////////////////////////////////////////////
// DATA STRUCTURES - OBJECTS - COMPARISION ///////////////////
//////////////////////////////////////////////////////////////

// Consider these objects as an example.
const myObj = {
    firstName : 'Rahul',
    lastName : 'Patil',
    age : 2049-2021,
};

const yourObj = {
    firstName : 'test',
    lastName : 'Test',
    age : 2049-2021,
};

// A handy way to compare two objects in JS would be:
JSON.stringify(a) === JSON.stringify(b); // true
// Works when you have simple JSON-style objects without methods and DOM nodes inside

// Also, the ORDER of the properties IS IMPORTANT.
// Following objects comparision will return false.
x = {a: 1, b: 2};
y = {b: 2, a: 1};
JSON.stringify(x) === JSON.stringify(y); // false
