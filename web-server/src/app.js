const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for static and dynamic pages - Express config
const handlebarsPath = path.join(__dirname, '../templates/views')
const partialHandlebarsPath = path.join(__dirname, '../templates/partials')
const staticPath = path.join(__dirname, '../public')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', handlebarsPath)
hbs.registerPartials(partialHandlebarsPath)

// Setup the static directory
app.use(express.static(staticPath))

app.get('', (req, res) => {
    res.render('index', {
        title:'Index page',
        author:'Aakash Venkatasubramanian'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title:'About page',
        author:'Aakash Venkatasubramanian'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title:'Help page',
        message:'This page is to help you',
        author:'Aakash Venkatasubramanian'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location:'Chennai',
        forecast:'30 C'
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        title:'404',
        author:'Aakash Venkatasubramanian',
        errorMessage:'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        title:'404',
        author:'Aakash Venkatasubramanian',
        errorMessage:'Not found'
    })
})

app.listen(3000, () => {
    console.log('Backend is up and running')
})