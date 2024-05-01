#### NPM - Node Package Manager.
- Largest Package ecosystem in the world. It has package for almost all functionalities.
- Default package manager for the Node.js runtime environment, comes with Node.js installation.
- Provides a CLI interface to publish and download packages.

#### Package
- A directory with one or more modules bundled together.
- In Node, any application that we develop is also actually called a package.

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

#### the Package.JSON file
- All NPM packages/application require a package.json file.
- It is located in app's root directory.
- NPM uses 'package.json' to determine dependencies.
- It has app's meta data in the form of key value pairs. And should at least contain these two info.
    - 'app_name'
    - 'version_number'

#### Package installation
- Installing a package from npm
`npm install <packageName>` 
`npm i <packageName>`
`npm i <packageName>@10.2.2` (10.2.2 is the version)
- After running this command, 3 things happen.
    1. a 'package.json' file is updated. The installed package/dependency is listed in the 'dependencies' node.
    2. The code for the installed package/dependency is added to 'node-modules' folder. _('node-modules' is created if it doesn't exist.)_
    3. and a file called package-lock.json is created.

- Now to import/require the installed package in any file _(let's say we installed the package called 'validator')_
    `const validator = require('validator')` // observe that we didn't use './' in require statement.
    `console.log(validator.isEmail('rahul@gmail.com'))`
    - When we import/require a npm package, it checks that package's code in 'node_modules' folder.

    - This is useful because, suppose we delete that 'node_modules' folder, then the script will definately throw error.
    - To install all those dependencies back, we hit this command:
    `npm install`
    OR 
    `npm i`
    - This will, based on the context of 'package.json' and 'package-lock.json' (dependencies mentioned in these json files),
    recreate the packages required for our application in 'node_modules' folder.

    - Also, while shipping your code to your audience, you dont need to ship your project folder's 'node_modules' folder.
    Just the package.json and package-lock.json. That's it, and user will do npm install to start using your application.

#### Package Local & Global installation
1. Local installation.
    - Installing within your application.
    - Local install is NPM's default behaviour.
    `npm install <package_name>`
    - This command creates a dir named 'node_modules' and installs that package's code and dependencies there.
    - **IMP**
        - If there is no './node_modules/' folder in the current directory, then npm will search the ancestor directories until it finds one with 'node_modules/' in it. If it finds one, let's say in the grandparent directory, then <npm install packagename> will install <packagename> in that the grandparent directory. However if it searches up the file tree until it reaches the root and still does not find any 'node_modules/' folder, then npm will automatically generate that folder in the current directory and install the package there.

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
