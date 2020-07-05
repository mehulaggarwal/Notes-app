const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');


const command = process.argv[2];

// create add command

yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe : 'Note title',
            demandOptions:true,
            type :'string'
        },
        body:{
            describe:'Note body',
            demandOptions:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
})

// create remove command

yargs.command({
    command : 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'Note tile',
            demandOptions : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

// create list command

yargs.command({
    command : 'list',
    describe: 'list your notes',
    handler(){
        notes.listNotes();
    }
})

// create remove command

yargs.command({
    command : 'read',
    describe: 'read a note',
    builder:{
        title:{
            describe : 'Read a note',
            demandOptions : true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})
yargs.parse();

//console.log(yargs.argv);

