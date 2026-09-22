import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()


const PORT = process.env.PORT || 5000;

app.get('/weather/:city', async (req, res) => {

    const { city } = req.params;

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${process.env.WEATHER_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    res.json({
            city: data.resolvedAddress,
            temperature: data.currentConditions.temp,
            conditions: data.currentConditions.conditions,
            humidity: data.currentConditions.humidity,
            windSpeed: data.currentConditions.windspeed,
            description: data.description
        });

});

app.listen(PORT, () => {
    console.log(`the server is runnig on ${PORT}`)
})