const fs = require('fs')

// const books = {
//     title:'Life of Aakash',
//     author:'Aakash',
//     publishedIn:'2019'
// }

// const booksJson = JSON.stringify(books)

// fs.writeFileSync('books.json', booksJson)

const buffer = fs.readFileSync('books.json')
const bufferString = buffer.toString()
const data = JSON.parse(bufferString)

data.title = 'Life of Ram'
data.author = 'Ram'
data.publishedIn = 2018

const updatedJson = JSON.stringify(data)

fs.writeFileSync('books.json', updatedJson)