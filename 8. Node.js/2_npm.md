#### NPM - Node Package Manager.

- Largest Package ecosystem in the world. It has package for almost all functionalities.
- Default package manager for the Node.js runtime environment, comes with Node.js installation.
- Provides a CLI interface to publish and download packages.

#### Package

- A directory with one or more modules bundled together.
- In Node, any application that we develop is also actually called a package.
- **npm init** is the command to initialize a new Node.js project or an npm package.
- Upon running **npm init**, the CLI interface prompts the user to provide some info about the project like Project name, Version, Description, Author, Entry Point, etc. On completing it, a file called **_'Package.json'_** is automatically created with the information provided.

#### Package management system

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

#### Package.JSON

- All NPM packages/application require a package.json file.
- It is located in app's root directory.
- NPM uses 'package.json' to determine dependencies.
- It has app's meta data in the form of key value pairs. And should at least contain these two info.
    - 'app_name'
    - 'version_number'

#### Package installation

- Installing a package from npm
    - `npm install <packageName>` 
    - `npm i <packageName>`
    - `npm i <packageName>@10.2.2` (10.2.2 is the version)
- After running this command, 3 things happen.
    - a 'package.json' file is updated. The installed package/dependency is listed in the 'dependencies' node.
    - The code for the installed package/dependency is added to 'node-modules' folder. _('node-modules' is created if it doesn't exist.)_
    - and a file called package-lock.json is created.

- Now to import/require the installed package in any file _(let's say we installed the package called 'validator')_
    - `const validator = require('validator')` // observe that we didn't use './' in the require statement.
    - `import validator from 'validator'` // Using import.
    - `console.log(validator.isEmail('rahul@gmail.com'))`
    - When we import/require a npm package, it checks that package's code in 'node_modules' folder.
    - This is useful because, suppose we delete that 'node_modules' folder, then the script will definately throw error.
    - To install all those dependencies back, we hit this command: `npm install` OR  `npm i`.
    - This will, based on the context of 'package.json' and 'package-lock.json' (dependencies mentioned in these json files),
    recreate the packages required for our application in 'node_modules' folder.
    - So, while shipping your code to your audience, you dont need to ship your project folder's 'node_modules' folder. Just the package.json and package-lock.json. That's it, and user will do npm install and start using your application.

#### Package Local & Global installation

1. Local installation(default).
    - Installing within your application.
    `npm install <package_name>`
    - This command creates a dir named 'node_modules' and installs that package's code and dependencies there.
    - **IMP**
        - If there is no './node_modules/' folder in the current directory, then npm will search the ancestor directories until it finds one with 'node_modules/' in it. If it finds one, let's say in the grandparent directory, then <npm install packagename> will install <packagename> in that the grandparent directory (in 'node_modules/'). However if it searches up the file tree until it reaches the root and still does not find any 'node_modules/' folder, then npm will automatically generate that folder in the current directory and install the package there.

2. Global Installation.
    - To install a package globally, use the -g flag:
    `npm install nodemom@1.18.5 -g`
    - Note that after this command finishes, nothing changes in package.json, package-lock.json and 'node_modules' folder of our project. This is because we installed the package globally on our node js server.
    
    - If you use the -g (global) option, the package is installed in a global location. This location varies per the OS.
    e.g. /usr/local/lib/node_modules/packagename on ubuntu.
    - If you’re installing something that you want to use in your shell, on the command line or something, install it globally, so that its binaries end up in your PATH environment variable.
    - Use cases
        - Usefull when you have different versions of your app on your machine, and they need to use one common package.
        - for example - nodemon

- NPM keeps dependencies' files separate from your app, and Node.js automatically searches the node_modules folder when you require/import something.

#### Types of Dependencies

1. Production dependency
    - Dependencies required to run our project.
2. Development dependency
    - Dependencies that are required for the project's development and not for 'running' the project.
        - `npm i --save-dev eslint prettier`
        - OR
        - `npm i -D eslint prettier`

#### NPX

- NPX stands for Node Package eXecute. It runs a javascript package/app without having to install it.
- NPX comes already with npm.
- For example
    - `npx create-react-app my-app`
    - The `create-react-app` is a javascript package. npx goes to the internet, downloading the package temporarily so it could execute it (npx).
    - One common way to use npx is to download and run a package temporarily or for trials.
    - `create-react-app` is an npm package that is expected to be run only once in a project's lifecycle. Hence, it is preferred to use npx to install and run it in a single step.
- From stackoverflow -
    - NPM - Manages packages but doesn't make life easy executing any.
    - NPX - A tool for executing Node packages.
- npM - Manager
- npX - Execute - easy to remember


#### package-lock.json

- _(WIP)_
