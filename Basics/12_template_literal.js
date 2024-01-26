//////////////////////////////////////////////////////////////
// STRINGS AND TEMPLATE LITERALS [ES6]////////////////////////
//////////////////////////////////////////////////////////////

// Literals represent values in JavaScript.
// These are fixed values not variables that you literally provide in your script.
// e.g. "foo", "bar", "1234" are string literals.

// Template literals are literals delimited with backtick ( ` ) characters,
// allowing for multi-line strings, string interpolation with embedded expressions.

const firstName = "Rahul";
const developmentExperience = 6;
console.log('String with \n\
multiple \n\
lines');

// Use template literal strings for multiline
console.log(`String
multiple
lines`);

// Using Variables in a template literal string
const lastName = 'P';
const managemenExperience = 2;
const show = `Hello.
I am ${myName}.
I am a ${exp} years experienced IT Professional.`;

// TIP:
// Use template strings to create multiline HTML code snippets dynamically from code.
