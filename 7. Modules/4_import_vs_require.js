//////////////////////////////////////////////////////////////
// IMPORT VS REQUIRE /////////////////////////////////////////
//////////////////////////////////////////////////////////////

/*
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
    Packages -
    A directory with one or more Modules.
    Module Specifications -
    conventions and specs used to create packages in js code.
    Two types-
        Common JS
        ES
    By default node js treats any module as commonJS module.

//////////////////////////////////////////////////////////////
Differences -

                        Common JS               ES
import a module         "require()"           "import"
export from a module    "module.exports"      "export"
                        "exports."

1.  Calling - "require()" can be called from anywhere in the
    code(including within conditionals and functions), whereas
    "import" can only be called at the begining.
3.  "require()" is bound dynamically. whereas, import is bound
    static.
    This means, for "require()" the binding errors are not
    identified untill run-time.
    For "import" the binding errors are identified at compile time.
    For "import" the engine "links" the variables before the
    code even runs.
    For "require()" it just executes the file and returns whatever
    object was assigned to module.exports at that specific moment.
4.  "require()" are synchrounous in nature, means, modules will
    be loaded in sequence(linear fashion).
    "imports" are asynchrounous. Import runs faster in large
    scale applications where we need to import a large number of
    modules in a file.
5.  If the relative file is not found, require() automatically
    scans 'node_modules' folder and project folders recursively
    to find modules, but import won't.

    "import" only scans 'node_modules' folder when we specify a
    bare specifier i.e. without '/' or './'
    e.g. import { add } from 'lodash';

    "require()" follows a aggresive algorithm to search for the
    file imported. e.g. it first checks if it is a core module,
    if not found, it checks for a file/folder with the same
    name in current directory, if found in a folder with the
    same name, it checks for index.js file in the found
    directory. If still not found, it checks in 'node_modules'
    folder in CURRENT directory. If it’s still not there, it
    moves up to the parent directory's node_modules, and
    the parent's parent, all the way up to the root of
    your hard drive.

    let today = require("./today");

    // The require statement above, will assume that the
    // script 'today' have a file ext of .js
    // If there is no 'today.js' file in the current directory,
    // it will assume that 'today' is a sub-directory
    // and it will search for 'index.js' in that directory.

//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
Why .mjs extension?
It indicates an ES6 module file.

Node.js's original module system is CommonJs
(which uses *require* and *module.exports* ).

Since Node.js was created, the ECMAScript module system
(which uses *import* and *export*) has become standard and
Node.js has added support for it.

Node.js will treat *.cjs* files as CommonJS modules and *.mjs*
files as ECMAScript modules.

IMP - It will treat *.js* files as whatever the *default module
system for the project* is (which is CommonJS UNLESS package.json
says "type": "module").

Hence, as long as Node JS doesn't consider *.js* files as
*ES Modules* BY DEFAULT, we need to keep specifying
"type": "module" inside the package.json file of our project.
*/
