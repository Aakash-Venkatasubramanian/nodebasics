console.log('Frontend script locked and loaded')

const weatherForm = document.querySelector('#weatherForm')
const search = document.querySelector('#location')
const errorMessage = document.querySelector('#errorMessage')
const fetchedData = document.querySelector('#fetchedData')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    errorMessage.textContent = 'Loading...'
    fetchedData.textContent = ''
    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                errorMessage.textContent = data.error
                fetchedData.textContent = ''
            } else {
                errorMessage.textContent = 'Location: ' + data.location + '\n' + 'Weather: ' + data.summary
                fetchedData.textContent = 'Temperature: ' + data.temperature + '\n' + 'Precipitation: ' + data.precipitation
            }
        })
    })
})