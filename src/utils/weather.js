const request = require('request')

const weather = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c450c4ce68554b5df3581633fe44c4e9/' + latitude + ',' + longitude + '?units=si'
    request({url, json:true}, (error, {body}) => {
        if(error) {
            return callback('Unable to connect to internet', undefined)
        } else if(body.error) {
            return callback('Invalid coordinates', undefined)
        } else {
            callback(undefined, {
                summary:body.currently.summary,
                temperature:body.currently.temperature,
                precipitation:body.currently.precipProbability,
                high:body.daily.data[0].temperatureHigh,
                low:body.daily.data[0].temperatureLow
            })
        }
    })
}

module.exports = weather