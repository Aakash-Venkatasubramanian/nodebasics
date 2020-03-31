const request = require('request')
const geocode = require('./utils/geocode')

// const weatherURL = 'https://api.darksky.net/forecast/c450c4ce68554b5df3581633fe44c4e9/37.8267,-122.4233?units=si'

// request({url:weatherURL, json:true}, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to internet')
//     } else if(response.body.error) {
//         console.log('Invalid coordinates')
//     } else {
//         const temperature = response.body.currently.temperature
//         const precipitation = response.body.currently.precipProbability
//         console.log('It is currently ' + temperature + ' degrees out. There is a ' + precipitation + '% chance of rain.')
//     }
// })

const weather = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c450c4ce68554b5df3581633fe44c4e9/' + latitude + ',' + longitude + '?units=si'
    request({url:url, json:true}, (error, response) => {
        if(error) {
            callback('Unable to connect to internet', undefined)
        } else if(response.body.error) {
            callback('Invalid coordinates', undefined)
        } else {
            const temperature = response.body.currently.temperature
            const precipitation = response.body.currently.precipProbability
            callback(undefined, {
                temperature:temperature,
                precipitation:precipitation
            })
        }
    })
}

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