import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()


const PORT = process.env.PORT || 5000;

app.get('/weather/:city', (req, res) => {

    const { city } = req.params;

    res.json({
        city : "kinshasa",
        temparature : 12,
        condition : 23,
        humidity : 77
    })
})

app.listen(PORT, () => {
    console.log(`the server is runnig on ${PORT}`)
})