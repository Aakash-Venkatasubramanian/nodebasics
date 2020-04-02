const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

let address = ''

for (let index = 2; index < process.argv.length; index++) {
    address = address + ' ' + process.argv[index];
}

if(!address) {
    console.log('Please provide an address')
} else {
    geocode(address, (geocodeError, {latitude, longitude, location} = {}) => {
        if(geocodeError) {
            return console.log('gecoder error: ', geocodeError)
        } else {
            weather(latitude, longitude, (weatherError, {summary, temperature, precipitation} = {}) => {
                if(weatherError) {
                    return console.log('weather error: ', weatherError)
                } else {
                    console.log('Live weather in ' + location + '\n' + summary + '. It is ' + temperature + ' C outside with ' + precipitation + '% possibility of rain')
                }
            })
        }
    })
}