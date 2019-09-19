const title = document.getElementById('title')
const button = document.getElementById('sendMe')
const input = document.getElementById('location')
const summary = document.getElementById('summary')
const temp = document.getElementById('temp')
const loc = document.getElementById('loc')
const display = document.getElementById('display')


button.addEventListener('click', async () => {



    summary.textContent = "Loading..."
    temp.textContent = ""

    let response = await fetch(`http://localhost:3004/weather?location=${input.value}`)
    let data = await response.json()
    
    // console.log(data)
    loc.textContent = data.placeData
    summary.textContent = data.weatherData.summary;
    temp.textContent = `${Math.floor((data.weatherData.temperature - 32) *5/9)}°C`
    if (summary.textContent ="partly cloudy"){
        display.src="./assets/cloudy.png"
    
    }
})



// if (summary.textContent = "sunny"){
    // display.src="./assets/sunny.png"
// }
// else if (summary.textContent ="partly cloudy"){
//     display.src="./assets/cloudy.png"
// }







// const getData = async () => {
//     let response = await fetch('http://localhost:3004/weather?location')
// }

// fetch('')