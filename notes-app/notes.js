const fs = require('fs')
const chalk = require('chalk')

//List all notes
const listNotes = () => {
    console.log(chalk.black.bgBlue('Your notes'))
    const notes = loadNotes()
    notes.forEach(note => console.log(note.title));
}

//Read a note
const readNote = (title) => {
    const notes = loadNotes()

    //Finding the note
    const foundNote = notes.find((note) => note.title === title)

    try {
        console.log(chalk.black.bgBlue(foundNote.title))
        console.log(foundNote.body)
    } catch(e) {
        console.log(chalk.black.bgRed('No note found with the name ' + title))
    }
}

//Remove a note
const removeNote = (title) => {
    const notes = loadNotes()

    //Check if there is a note in that name
    const present = notes.filter((note) => note.title !== title)

    if(present.length === notes.length) {
        console.log(chalk.black.bgRed('No such note'))
    } else {
        saveNotes(present)
        console.log(chalk.black.bgGreen('The note removed is ' + title))
    }
}

//Add notes
const addNotes = (title, body) => {
    const notes = loadNotes()

    //Check deplicates
    const duplicate = notes.find((note) => note.title === title)
    
    if(!duplicate) {
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.black.bgGreen('New note added succesfully'))
    } else {
        console.log(chalk.black.bgRed('Title already taken'))
    }
}

//Save the note
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//Load notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

//Export to another js file
module.exports = {
    listNotes:listNotes,
    addNotes:addNotes,
    removeNote:removeNote,
    readNote:readNote
}