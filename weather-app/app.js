const request = require('request')

const url = 'https://api.darksky.net/forecast/c450c4ce68554b5df3581633fe44c4e9/37.8267,-122.4233'

request({url:url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.timezone)
})