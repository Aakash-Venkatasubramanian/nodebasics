const request = require('request')

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

module.exports = weather