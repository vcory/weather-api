const express = require('express')
const path = require('path')
const {main} = require('./lib/app')



const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.get('/weather',async (req,res) => {
    let data = await main(req.query.location)
    res.send(data)
    // console.log(req.query.name)
})
    

app.listen(3004, () => {
    console.log('Server is listening on port 3004')
})