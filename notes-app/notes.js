const fs = require('fs')
const chalk = require('chalk')

//List all notes
const getNotes = () => 'Your notes...'

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
    const duplicate = notes.filter((note) => note.title === title)
    
    if(duplicate.length === 0) {
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
    getNotes:getNotes,
    addNotes:addNotes,
    removeNote:removeNote
}