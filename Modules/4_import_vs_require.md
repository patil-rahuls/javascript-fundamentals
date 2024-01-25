//////////////////////////////////////////////////////////////
// IMPORT VS REQUIRE /////////////////////////////////////////
//////////////////////////////////////////////////////////////

Modules -
    Related encapsulated js code.
    Serves a single purpose.
    Can be a single file or a folder containing several files.
    Reusable.
    Helps in breaking down complex code into manageable chunks.

    Every JS file in Node JS is treated as a Module.
    Multiple modules can be grouped into a package.

//////////////////////////////////////////////////////////////
Packages & Specifications
    Packages - A directory with one or more Modules.
    Module Specifications - conventions and specs used to create packages in js code.
    Two types-
        Common JS
        ES
    By default node js treats any module as commonJS module.

//////////////////////////////////////////////////////////////
Differences -
                                Common JS               ES
        import a module         require()               import
        export from a module    module.exports          export

    1.  calling - require() can be called from anywhere in the code, whereas import can only be called at the begining.
    2.  require() can be called within conditionals and functions, whereas import cannot be called like that.
    3.  require() is bound dynamically. whereas, import is bound static
        This means, the binding errors are not identified untill run-time. For import the binding errors are identified at compile time.
    5.  require() are synchrounous in nature, means, modules will be loaded in sequence(linear fashion). import modules are asynchrounous. Import runs faster in large scale applications where we need to import a large no. modules.
    6. If the module is not found, require() will automatically scan 'node_modules' folder to find modules, but import won't.

//////////////////////////////////////////////////////////////
Example - require
    File-  msg.js
        module.exports = 'Hello World';
    File - main.js
        let msg = require('./msg.js');
        console.log(msg);

Example - import
    File-  msg.mjs  // observe the extension ".mjs"
        const i = 10;
        export { i as 'counter' };
    File - main.js
        import { counter } from './msg.mjs';
        console.log(counter);

//////////////////////////////////////////////////////////////
Why .mjs extension?
It indicates an ES6 module file.

Node.js's original module system is CommonJs (which uses *require* and *module.exports* ).

Since Node.js was created, the ECMAScript module system (which uses *import* and *export*) has become standard and Node.js has added support for it.

Node.js will treat *.cjs* files as CommonJS modules and *.mjs* files as ECMAScript modules.

IMP - It will treat *.js* files as whatever the *default module system for the project* is (which is CommonJS UNLESS package.json says "type": "module").

Hence, as long as Node JS doesn't consider *.js* files as import BY DEFAULT, we need to keep specifying
"type": "module" inside the package.json file of our project.
