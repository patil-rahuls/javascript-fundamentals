//////////////////////////////////////////////////////////////
// CURRYING //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Chain of function calls where each function returns another
// function untill final result is returned.
function sum(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}
const result = sum(1)(2)(3); // Currying
console.log(result);
// 6

// Real life use case:
// 1. Reusable Configuration (The "Logger" Pattern)
// Imagine you have a logging function.
// You don’t want to manually type "DEBUG" or "ERROR" every
// single time you log something in a specific module.

// Currying lets you create specialized versions of a
// generic function like logger.

const logger =
    (level) =>
        (message) =>
            `[${level}] ${new Date().toISOString()}: ${message}`;

// Create specialized loggers
const debugLog = logger("DEBUG");
const errorLog = logger("ERROR");

debugLog("User clicked the button");
// [DEBUG] 2026-03-19...: User clicked the button
errorLog("Failed to fetch data");
// [ERROR] 2026-03-19...: Failed to fetch data

// Dry Code:
//  You stop repeating the same first few arguments.
// Composition:
// It makes your functions easier to pipe into one another.
// Readability:
//  It clarifies intent. errorLog(msg) is much clearer
//  than log("ERROR", msg).
