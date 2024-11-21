//////////////////////////////////////////////////////////////
// STRINGS AND TEMPLATE LITERALS [ES6]////////////////////////
//////////////////////////////////////////////////////////////

// Literals represent values in javascript.
// These are fixed values not variables that you literally provide in your script.
// e.g. 
let name = "foo"        // "foo" is a string literal
let age = 29            // 29 is a number literal
let stu = { name, age}; // { name, age } is an Object Literal

// Template literals are literals delimited with backtick ( ` ) characters,
// allowing for multi-line strings, 

// Old way - 
const firstName = "Rahul";
const developmentExperience = 6;
console.log('String with \n\
multiple \n\
lines');

// Use template literal for multiline strings.
console.log(`String
multiple
lines`);

// String interpolation with embedded expressions i.e. using variables in a template literal string
const lastName = 'P';
const managemenExperience = 2;
const show = `Hello.
I am ${myName}.
I am a ${exp} years experienced IT Professional.`;

// TIP:
// Use template strings to create multiline HTML code snippets dynamically from code.
