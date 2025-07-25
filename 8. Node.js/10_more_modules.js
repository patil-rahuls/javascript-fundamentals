//////////////////////////////////////////////////////////////
// More Modules //////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// The querystring module provides methods to parse through the query string of a URL.
let qry = require('querystring');
let qryParams = qry.parse('lastName=Kent&firstName=Clark');
console.log(qryParams.firstName); //returns Clark

//////////////////////////////////////////////////////////////
// The URL module is used to divide up a web address into readable parts. 
// Here is a sample code that returns the value of the "firstName" query object from the given URL.
const url = require('url');
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
let qryObj = url.parse(webAddress, true);
let qrydata = qryObj.query; //returns an object: {lastName: 'Kent', firstName: 'Clark'}
console.log(qrydata.firstName); //outputs Clark

//////////////////////////////////////////////////////////////
// The path module allows you to retrieve and manipulate directory and file paths.
// The following code retrieves the last portion of a given file path and prints that value to the console:
const path = require('path');
let result = path.basename('/content/index/home.html');
console.log(result); //outputs home.html to the console
