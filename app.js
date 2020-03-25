const notes = require('./notes')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

//Brings output from another js file
console.log(notes)

//Validates email
console.log(validator.isEmail('aakash@aakash.aakash'))

//Sets color flag
console.log(chalk.black.bgGreen('success'))

//Adding a note
yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title:{
            describe:'Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv) {
        console.log('Adding a new note...')
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

//Removing a note
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function() {
        console.log('Removing a note...')
    }
})

//Listing all notes
yargs.command({
    command:'list',
    describe:'List of notes',
    handler:function() {
        console.log('Listing all notes...')
    }
})

//Reading a note
yargs.command({
    command:'read',
    describe:'Read a note',
    handler:function() {
        console.log('Reading a note...')
    }
})

//Displays the output, do not remove
yargs.parse()