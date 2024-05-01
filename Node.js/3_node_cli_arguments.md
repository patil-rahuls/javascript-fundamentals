#### Command Line Arguments
- Getting input from user into your node js application via CLI.
- Remember we have may "global" objects. We see it by typing global inside node CLI terminal.
- One of those global objects is "process".
- There are several properties and methods of process object, like process.exit(), process.argv etc.

#### process.argv (argv - argument vector)
- argv is an array of the arguents supplied to the script while executing it.
- for e.g. let's say we have the following code in our app.js. 
    - `console.log(process.argv);`
- and we run it by passing some arguments:
    - `node app.js rahul`
- Output
    - `['path/to/the/node_js/executable/on/your/platform', 'path/to/your/node_js/application', 'rahul' ]`
- First 2 items in argv are always there. From 3rd onwards are our CLI arguments.

#### 'Yargs' a third party tool to create cli applications https://www.npmjs.com/package/yargs
- Argument Parsing with 'Yargs'
    - require('yargs');
    - console.log(yargs.argv); // This returns an Object and NOT an array.
    - `node main.js add --title='Travel Plan'`
    - // prints : { _ : ['add'] , title:'Travel Plan', '$0': 'main.js' }
    - _$0 is the path to our node js application._
    - anything we pass with two hyphens (--), is a property created inside yargs object. everything else is in '_' property of yargs Object.
    - yargs has a few inbuilt commands
        - `--help`
        - `--version`
    - We can use these to manually add our own help content and version.
        - eg. yargs.version('1.0.2');
        - so node main.js --version will print our version 1.0.2

    - We can set a command and set diff properties of it using yargs.
    - e.g. add command.

    ```
    yargs.command({
        command: 'add',
        describe: 'Add a note',
        builder: {
            title:{
                describe: 'Note title',
                demandOption: true, // required argument
                type: string
            },
        },
        handler: function(argv){
            console.log("adding a Note.", argv)
            // do the necessary stuff to save note.
            console.log("Title : ${argv.title}")
        }
    });
    ```
    - On running node nma.js add it will print 'adding a note'
    - yargs.parse() // parses the command line arguments and run the appropriate command handler.
