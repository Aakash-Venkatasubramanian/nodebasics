const fs = require('fs')

// const book = {
//     title:'Life of Ram',
//     author:'Ram',
//     published:'2018'
// }

// const bookjson = JSON.stringify(book)

// fs.writeFileSync('books.json', bookjson)

const bufferedReader = fs.readFileSync('books.json').toString()
const parsedData = JSON.parse(bufferedReader)

parsedData.title = 'Aakash living well'
parsedData.author = 'Aakash'

const booksJson = JSON.stringify(parsedData)
fs.writeFileSync('books.json', booksJson)

// console.log(parsedData.title)