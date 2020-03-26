const fs = require('fs')
const chalk = require('chalk')

//List all notes
const getNotes = function () {
    return 'Your notes...'
}

//Add notes
const addNotes = function(title, body) {
    const notes = loadNotes()

    //Check deplicates
    const duplicate = notes.filter(function(note) {
        return note.title === title
    })
    
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
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//Load notes
const loadNotes = function() {
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
    addNotes:addNotes
}