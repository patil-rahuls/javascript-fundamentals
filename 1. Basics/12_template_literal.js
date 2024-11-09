//////////////////////////////////////////////////////////////
// STRINGS AND TEMPLATE LITERALS [ES6]////////////////////////
//////////////////////////////////////////////////////////////

// Literals represent values in JavaScript.
// These are fixed values not variables that you literally provide in your script.
// e.g. "foo", "bar", "1234" are string literals.

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
