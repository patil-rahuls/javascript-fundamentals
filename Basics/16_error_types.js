//////////////////////////////////////////////////////////////
// ERROR TYPES              //////////////////////////////////
//////////////////////////////////////////////////////////////

// 1. Syntax errors
// These occur when the code contains a mistake in the structure or syntax of the language.
// Examples include missing punctuation, incorrect use of keywords, or mismatched parentheses.

// 2. Reference errors
// These occur when the code is trying to access a variable or function that has not been defined.
// This can happen when a variable has not been declared, or when a function is called before it has been defined.
// remember TDZ?

// 3. Type errors
// These occur when the code is trying to perform an operation on a variable of the wrong type.
// Examples include trying to use a string as a number, or trying to access a property of a non-object.
const x = 7;
console.log(x.toUpperCase());

// 4. Range errors
// These occur when the code is trying to access an index outside the range of an array, or
// when a value is too large or too small to be used.
const maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber + 1);
// Here, the code is trying to add 1 to the maximum safe integer value that JavaScript can represent,
// which exceeds the maximum value that can be represented and it will cause a range error.

// 5. Evaluation errors
// These occur when the code is trying to evaluate an expression that is not valid.
// Examples include dividing by zero or trying to access a property of undefined.
eval("hello world");
// Here, the code is trying to evaluate a string "hello world" which is not a valid JavaScript statement,
// so it causes an evaluation error.

// 6. URIError
// These occur when a malformed URI is passed to the encodeURI() or decodeURI() functions.
encodeURI("http://mywebsite.com/path?name=value#fragment");
// Here, the code is trying to encode the URI "http://mywebsite.com/path?name=value#fragment"
// which contains some reserved characters, that are not allowed to be encoded.
// It's important to note that the JavaScript interpreter will stop executing the code as soon as
// it encounters a URIError, so it's essential to check your code for URI errors before running
// it to ensure it will execute correctly.