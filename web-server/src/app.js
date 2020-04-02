const path = require('path')
const express = require('express')

const app = express()
const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

app.get('/weather', (req, res) => {
    res.send({
        location:'Chennai',
        forecast:'30 C'
    })
})

app.listen(3000, () => {
    console.log('Backend is up and running')
})