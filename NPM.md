//////////////////////////////////////////////////////////////
// NPM - Node Package Manager ////////////////////////////////
//////////////////////////////////////////////////////////////

NPM - Node Package Manager.
    Default package manager for the Node.js runtime environment.
    Provides a CLI interface to publish and download packages.

Package
    A directory with one or more modules bundled together.

Package management system -
    A set of tools to deal with modules and packages containing dependencies.
    Package manager's jobs are -
        Finding,
        Installing,
        Upgrading,
        Configuring,
        Maintaining and
        Removing packages.
    Package managers, maintain a db of dependencies and versioning.
    And they ensure the software has all correct dependencies.

Package.JSON file
    All NPM packages require a package.json file.
    It is located in app's root directory.
    NPM uses 'package.json' to determine dependencies.
    It has app's meta data in the form of key value pairs. And should at least contain these two info.
        'app_name'
        'version_number'

Command - 'npm install'
    1. Local installation.
    Installing within your application.
    Local install is NPM's defaul behaviour.
        npm install <package_name>
        This command creates, a dir named 'node_modules' and installs that package there.

        IMP -
        If there is no './node_modules/' folder in the current directory, then npm will search the ancestor directories until it finds one with 'node_modules/' in it. If it finds one, let's say in the grandparent directory, then <npm install packagename> will install <packagename> in '../../node_modules/' directory. However if it searches up the file tree until it reaches the root and still does not find any 'node_modules/' folder, then npm will automatically generate that folder in the current directory and install the package there.

    2. Global Installation.
        npm install -g <package_name>
        If you use the -g (global) option, the package is installed in a global location. This location varies per OS, like /usr/local/lib/node_modules/packagename on ubuntu.

        If you’re installing something that you want to use in your shell, on the command line or something, install it globally, so that its binaries end up in your PATH environment variable.

        Use case-
            Usefull when you have different versions of your app on your machine, and they use the globally installed packages.

            nodemon is another package example to install globally.

NPM keeps dependencies' files separate from your app, and Node automatically searches the node_modules folder when you require/import something.
