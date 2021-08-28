//////////////////////////////////////////////////////////////
// COMMON JS MODULES /////////////////////////////////////////
//////////////////////////////////////////////////////////////

// USED IN Node.JS FOR ALMOST ALL OF ITS IMPLEMENTATION.

// sometimes we need to write like this. like in node js.
const {addToCart} = require('./shoppingCart.js');

// this is same as import. Just the syntax difference.

// using npm and packages

// Sometimes, we need external libraries that make our work.
const state = {

    cart : [
        {product: 'bread' , qty:2},
        {product: 'eggs' , qty:10}
    ],

    user : {loggedIn : true},
};

// Suppose we need to create a deep copy of this object .
// Deep copy means, whatever changes we do in original, same should reflect in copied objs
// using javascript builtin method
const state2 = Object.create({} , state);

state.user.loggedIn = false;

console.log(state2);        // this still remains true. But we want it to change with changes done in "state" obj

import modules from './modules.js';
// so for this task we need to implement a function, but we already have a open source library called "lodash" which has lots of useful funcitons.

import cloneDeep from './node_modules/loadash-es/cloneDeep.js';
// THis is not practical however. because there are 1000s of unnecessary files that we dont use.

npm install
// It looks for package.json File, and looks for dependencies node and installs all the dependencies.

//////////////////////////////////////////////////////////////////////////////////////
// BUNDLER //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

// PARCEL - BUNDLING TOOL
npm install parcel --save-dev // this is a diff type of dependecny (dev dependency) not related to functionality. but related to build the project.
// so in package.json gets a new node devDependencies:{  "parcel" : "^1.2.4" } like that.

// this is a local isntallation. that means only valid for your project and not globally 
// to install parcel globally in node js so that it is available for all projects, we  something else. (later)

// using parcel :
npx parcel index.html 

// npx is way to run locally installed packages.

// index.htyml is entry point where we include out=r main j"avascript file
// this wil bundle all the modules used in our project together 
// it builds and starts a new dev server just to let user check if everything is working fine with this new build or not.

// sometimes u get file/folder permission errors, then use sudo

// also remove type="module" from the scirpt tags index.html,coz now its bundled as a single main file and its no longer a module.

// We get a new folder called "dist" which is the production ready folder.

// more stuff:

// Hot relaod
// In your main script.js we write this at the end
if (module.hot){
    module.hot.accept();
}
// This is only understood by parcel and has nothing to do with our js code.
// Also it reflects the changes in our website WITHOUT RELOADING THE WHOLE PAGE. 

// parcel + hot module reloading = AMAZING !!!
// it maintains the state. the data in objects remain same.

// adv of this is that u can simple use the modules names like this instead of full path.
import cloneDeep from 'lodash-es';  // parcel automatically finds it n node_modules folder.
// also works with commonjs modules.

// 


// scripts node in package.json
"scripts" : {
    "start" : "parcel index.html" // now this can be executed locally for the project. hence no "npx" command. 
}

// and then use this in terminal
npm run start // this runs the script defined above.

// use this method


// BUild the final bundle: 
"scripts" : {
    "start" : "parcel index.html" // now this can be executed locally for the project. hence no "npx" command. 
    "build" : "parcel build index.html"
}

npm run build
// This compresses the html, js css files, for production in dist folder.

// golobal installation 
npm install parcel -g
// But its advices to install the modules locally.



////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// transpiling to backward compatible code - BABEL /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// BABLE IS included in parcel

// but still there are some features which are not transpiled to older versions by babel
// like find(), Promise etc

// Hene we POLLYFILL them.
npm install core-js

// use this in code.
import "core-js/stable/" 
import 'core-js/fn/array'; // to import specific function in case we are sure no other new functions are not used in projct,

// Polyyfilling recreates the functions to be compatible with older js/browsers.



// ///////////////// Polifilling async functions ///////////////
//  for async functions we need to separately use another package
// REGENERATOR RUNTIME

npm i regenerator-runtime

// Polifilling async functions
import 'regenerator-runtime/runtime';


// these can be kept at the end of your script, anyway they are hoisted, but for simplicity they can be kept at the end,.
