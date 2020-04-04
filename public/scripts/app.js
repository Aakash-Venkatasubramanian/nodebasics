console.log('Frontend script locked and loaded')

const weatherForm = document.querySelector('#weatherForm')
const search = document.querySelector('#location')
const lineOne = document.querySelector('#lineOne')
const lineTwo = document.querySelector('#lineTwo')
const lineThree = document.querySelector('#lineThree')
const lineFour = document.querySelector('#lineFour')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    lineOne.textContent = 'Loading...'
    lineTwo.textContent = ''
    lineThree.textContent = ''
    lineFour.textContent = ''
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                lineOne.textContent = data.error
                lineTwo.textContent = ''
                lineThree.textContent = ''
                lineFour.textContent = ''
            } else {
                lineOne.textContent = 'Location: ' + data.location
                lineTwo.textContent = 'Weather: ' + data.summary
                lineThree.textContent = 'Temperature: ' + data.temperature
                lineFour.textContent = 'Precipitation: ' + data.precipitation
            }
        })
    })
})