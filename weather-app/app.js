const request = require('request')

const weatherURL = 'https://api.darksky.net/forecast/c450c4ce68554b5df3581633fe44c4e9/37.8267,-122.4233?units=si'

request({url:weatherURL, json:true}, (error, response) => {
    if(error) {
        console.log('Unable to connect to internet')
    } else if(response.body.error) {
        console.log('Invalid coordinates')
    } else {
        const temperature = response.body.currently.temperature
        const precipitation = response.body.currently.precipProbability
        console.log('It is currently ' + temperature + ' degrees out. There is a ' + precipitation + '% chance of rain.')
    }
})

const geocoderURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWFrYXNoLXZlbmthdCIsImEiOiJjazhhZWdsdnIwMWQyM3BxdG55ZXF3b2FtIn0.vU4VeXTZ2TC6rAbvaj720Q&limit=1'

request({url:geocoderURL, json:true}, (error, response) => {
    if(error) {
        console.log('Unable to connect to internet')
    } else if(response.body.features.length === 0) {
        console.log('Place not found')
    } else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log('The place is ' + latitude + ',' + longitude)
    }
})