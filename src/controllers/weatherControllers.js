
import client from "../config/redis.js";

const weather_api = async (req, res) => {

        try {
            const { city } = req.params;

    const cacheData = await client.get(city)

    //fetch data from redis
    if(cacheData) {
        return res.json(JSON.parse(cacheData))
    }
    
    //fech data from Visaulcrossing_Api
    const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${process.env.WEATHER_API_KEY}`

    );
    
    const data = await response.json();

    const essent = ({
            city: data.resolvedAddress,
            temperature: data.currentConditions.temp,
            conditions: data.currentConditions.conditions,
            humidity: data.currentConditions.humidity,
            windSpeed: data.currentConditions.windspeed,
            description: data.description
    })

    await client.setEx(
        city,
        300,
        JSON.stringify(essent)
    )

    res.json(essent);



        } catch(error) {
            
            res.status(500).json({message: "endpoint no found"})
            console.error(error)

        }

};

export default {
    weather_api
};