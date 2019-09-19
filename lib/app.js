const {getWeather} = require('./getweather')
const {getLocation} = require('./getLocation')

app.use(express.static(path.join(__dirname, "public")))

const main = async (place) => {
    const location = await getLocation(place)
    const weather = await getWeather(location)
    return weather
}

main()

app.get('/weather', (req,res) => {
    
})












// request({url: `https://api.darksky.net/forecast/${apikey}/37.8267,-122.4233`, json: true}, (error, response) => {
//     if (error){
//         console.log(error)
//     } else {
//         const data = response.body
//         console.log({temp: data.currently.temperature, rain: data.currently.precipProbability})
//     }
// })