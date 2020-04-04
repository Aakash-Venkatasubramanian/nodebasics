console.log('Frontend script locked and loaded')

fetch('http://localhost:3000/weather?address=saligramam').then((response) => {
    response.json().then((data) => {
        if(data.error) {
            return console.log(data.error)
        }
        console.log(data.location + '\n' + data.summary + '\n' + data.temperature + '\n' + data.precipitation)
    })
})