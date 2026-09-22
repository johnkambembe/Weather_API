
import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {

    const { city } = req.params;
    
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${process.env.WEATHER_API_KEY}`);
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

export default router;