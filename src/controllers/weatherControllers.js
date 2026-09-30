
import client from "../config/redis.js";

const weather_api = async (req, res) => {

    const { city } = req.params;
    
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${process.env.WEATHER_API_KEY}`);
    const data = await response.json();

    const essent = ({
            city: data.resolvedAddress,
            temperature: data.currentConditions.temp,
            conditions: data.currentConditions.conditions,
            humidity: data.currentConditions.humidity,
            windSpeed: data.currentConditions.windspeed,
            description: data.description
    })

    client.setEx(
        city,
        60,
        JSON.stringify(essent)
    )

    
    res.json(essent);

};

export default {
    weather_api
};