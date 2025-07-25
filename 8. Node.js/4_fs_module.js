//////////////////////////////////////////////////////////////
// FS MODULE /////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// The 'fs' module is used to interact with the file system. 
// It does not need to be installed because it is part of the Node.js core 
// and can simply be imported.

//  Example #1 - Read a file "synchronously" using the fs.readFileSync() method
import fs from 'fs';
try{
  const fileData = fs.readFileSync('2_npm.md', 'utf8');
  console.log(fileData);
}catch(err){
  console.error(err);
}

//  Example #2 - Read a file "asynchronously" usng async-await.
import fs from 'fs/promises';
try {
    const data = await fs.readFile('2_npm.md');
    console.log(Buffer.from(data));
} catch (error) {
    console.error('there was an error:', error.message);
}

//  Example #3 - Delete a file
import { unlink } from 'fs/promises';
try {
  await unlink('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (error) {
  console.error('there was an error:', error.message);
}


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
