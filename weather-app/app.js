const request = require('request')
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

weather(13.09, 80.27, (error, data) => {
    if(data === undefined) {
        console.log('error: ', error)
    } else {
        console.log('data: ', data)
    }
})

geocode('Chennai', (error, data) => {
    if(data === undefined) {
        console.log('error: ', error)
    } else {
        console.log('data: ', data)
    }
})