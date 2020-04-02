const path = require('path')
const express = require('express')

const app = express()

const handlebarsPath = path.join(__dirname, '../views')
const staticPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.set('views', handlebarsPath)
app.use(express.static(staticPath))

app.get('', (req, res) => {
    res.render('index', {
        title:'Index page',
        author:'Aakash Venkatasubramanian'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title:'About page'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title:'Help page',
        message:'This page is to help you'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location:'Chennai',
        forecast:'30 C'
    })
})

app.listen(3000, () => {
    console.log('Backend is up and running')
})