## npm

- Largest Package ecosystem in the world. It has package for almost all functionalities.
- Default package manager for the Node.js runtime environment, comes with Node.js installation.
- Provides a CLI interface to publish and download packages.

## Package

- A directory with one or more modules bundled together.
- In Node.js, any application that we develop is also actually called a `package`.

## Setup a Node.js project

`npm init`

  _Command used to scaffold a project. It shows a series of question that you can answer in order to setup your project._

  _Result: a `package.json` file is created._

## `package.json`

- All NPM packages/application require a `package.json` file.
- It is located in app's root directory.
- NPM uses `package.json` to determine dependencies.
- It has app's meta data in the form of key value pairs. And should at least contain these two properties:
  - `'app_name'`
  - `'version_number'`
- In the dependencies object, we often see symbols before the versions. _e.g. ^1.2.3, ~2.0.1, etc_:
  
  **_^ (Caret)_**: _Allows updates that do not change the first non-zero digit. `^1.2.3` allows `1.2.4` and `1.3.0`, but not `2.0.0`._
  
  **_~ (Tilde)_**: _Allows only patch-level updates (the third digit). `~1.2.3` allows `1.2.4`, but not `1.3.0`_

  **_NO SYMBOL_**: _Allows the exact version. 1.2.3 will only ever install 1.2.3._

  **_`>`, `<`, `>=`, `<=`_**: _Allows you to set boundaries. `>=1.2.3 <2.0.0` allows any version between `1.2.3(included)` to `2.0.0(excluded)`._

  **_\* (Latest)_**: _Always install the newest version. `"lodash": "*"` will always install the latest available package version._

  **_1.x or 1.\* (Minor Wildcard)_**: _Updates the Minor and Patch versions. `"express": "4.x"` or `"express": "4.*"` would install latest available `4.x.x` version._

## `package-lock.json`

- The `package-lock.json` file is generated automatically the moment you run `npm install`.
- It records exactly what was put in `package.json` file.
- It lists:
  - The exact version number

    _e.g., `1.2.3`, not just `^1.2.0`._

  - Where it was downloaded from.
  - A `hash` (a digital fingerprint) to prove the code hasn't been tampered with when downloaded.

- It is edited automatically by npm.
- Should be commited along with `package.json` file for team consistency.

  _Your project might only need one library (let's call it `A`)._

  _But library `A` needs library `B`, and `B` needs `C`._

  _You don't control those hidden libraries. If library `C` updates and breaks, your whole project breaks._

  _The `package-lock.json` locks down that entire "family tree" so nothing can change without you explicitly choosing to update it._

  ***With a `package-lock.json` file:***

  ***When your teammate runs `npm install`, npm looks at the `package-lock.json` and says: _"I don't care if there is a newer version available; the lock file says we must use exactly version 1.2.3."_ and just downloads it.***

## Package installation

- Installing a package from `npm`
  - `npm install <packageName>`
  - `npm i <packageName>`
  - `npm i <packageName>@10.2.2` _(10.2.2 is the version)_
- After running this command, 3 things happen.
  - _The `package.json` file is updated. The installed package/dependency is listed in the `dependencies` node._

  - _The code for the installed package/dependency is downloaded and added to `node-modules` folder. (`node-modules` is created if it doesn't exist.)_

  - _And a file called `package-lock.json` is created._

- We import/require the installed package in our main file _(let's say we installed the package called 'validator')_
  - `const validator = require('validator')`

    OR
  - `import validator from 'validator'`

    _Observe that we didn't use `./` in the require statement._

  
  - _When we import/require a npm package, it checks that package's code in `node_modules` folder. This is useful because, if we don't have the `node_modules` folder, then the script will throw error._
  
    _To install all those dependencies back, we hit this command: `npm install` OR `npm i`._
    
    _This will, based on the dependencies mentioned in the `package.json` and `package-lock.json` files, recreate the packages required for our application in `node_modules` folder._
  
    _So, while shipping your code to your audience, you dont need to ship your project folder's `node_modules` folder. Just the `package.json` and `package-lock.json`. That's it, and user will do `npm install` and start using your application._

&nbsp;
## Local & Global Package installation

- Local installation _(default)_.
  - Installing within your application.

    `npm install <package_name>`

  - This command creates a dir named `node_modules` if it doesn't exist and installs that package's code and dependencies there.
  
    _**IMP**: If there is no `node_modules` folder in the current directory, then npm will search the ancestor directories until it finds one with `node_modules` in it. If it finds one, let's say in the grandparent directory, then it will install the package in that the grandparent directory (in `node_modules`). However if it searches up the file tree until it reaches the root and still does not find any `node_modules` folder, then npm will automatically generate that folder in the current directory and install the package there._

2. Global Installation.
   - To install a package globally, use the `-g` flag:

     `npm install nodemom@1.18.5 -g`

      _Note that after this command finishes, nothing changes in `package.json`, `package-lock.json` and '`node_modules` folder of our project. This is because we installed the package globally on our machine._

   - If you use the `-g` (global) option, the package is installed in a global location. This location varies per the OS. _e.g. `/usr/local/lib/node_modules/packagename` on ubuntu._

   - If you’re installing something that you want to use in your shell, on the command line or something, install it globally, so that its binaries end up in your PATH environment variable.
   - Use cases of Global Installation:
     
      _Usefull when you have different versions of your app on your machine, and they need to use one common package. e.g. `nodemon`_

_NPM keeps dependencies' files separate from your app, and Node.js automatically searches the `node_modules` folder when you require/import something._

## Types of Dependencies

1. Production dependency
   - Dependencies required to run our project.

2. Development dependency
   - Dependencies that are required for the project's development and not for _running_ the project.
     
      `npm i --save-dev eslint prettier`
      
      OR
      
      `npm i -D eslint prettier`

## NPX

- NPX stands for `Node Package eXecute`. It runs a javascript package/app without having to install it.
- NPX comes already with npm.
- _For example_
  - _`npx tsc --init`_

    _The `tsc` is a javascript package. NPX goes to the internet, downloading the package temporarily so it could execute it._

&nbsp;
## Package management system _(Optional Read)_

- A set of tools to deal with modules and packages containing dependencies.
- Package manager's jobs are -
  - Finding packages,
  - Installing packages,
  - Upgrading packages,
  - Configuring packages,
  - Maintaining packages and
  - Removing packages.
- Package managers, maintain a db of dependencies and versioning.
- And they ensure the software has all correct dependencies.

---
---
<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Node.js](01-nodejs.md)  

**Next:** → [Node.js > libuv](03-libuv.md)

<!-- PAGINATION_END -->
