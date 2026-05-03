//////////////////////////////////////////////////////////////
// COMMON JS MODULES  ////////////////////////////////////////
//////////////////////////////////////////////////////////////

// It uses require() and module.exports.
// It is synchronous, meaning it loads files one by one.
// File extension is usually .js (or .cjs)

// IMP: In CommonJS (require), when you import a value,
// you get a copy of it. If the original file changes that
// value later, your copy stays the same.

//////////////////////////////////////////////////////////////
// Exporting File:
// mathUtils.js (The Provider)
const add = (a, b) => a + b;
const pi = 3.14;

// Different ways to export:
// 1.
module.exports = { add, pi };
// 2. aliases
module.exports = { add: addFn, pi };
// 3. exporting items individually using the "exports" keyword
exports.add = (a, b) => a + b;
exports.pi = 3.14;
// If we mix the "exports" keyword with "module.exports", the
// "module.exports" will overwrite the "exports" statement.

// Also, if we mistakenly add multiple "module.exports" in
// a the file, only the last one will be considered.
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// Importing File:
// app.js (The Consumer)
const math = require('./mathUtils.js');
// Aliases can be also used while importing as follows:
const { add: myAlias, pi } = require('./mathUtils.js');
// Since require returns an object, you can use JavaScript’s
// destructuring syntax with a colon : to specify an alias.

const result = math.add(5, 5);
console.log(result); // 10
//////////////////////////////////////////////////////////////
