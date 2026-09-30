import express from 'express'
import dotenv from 'dotenv'
import redis from 'redis'

import router from './src/routes/weatherRoutes.js'

dotenv.config()
const app = express()

app.use('/weather/api/', router)


const PORT = process.env.PORT || 5000; 
const REDIS_PORT = process.env.REDIS || 6379;

const client = redis.createClient(REDIS_PORT)


app.listen(PORT, () => {
    console.log(`the server is runnig on ${PORT}`)
})

export default client;