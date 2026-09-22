import express from 'express'
import dotenv from 'dotenv'

import router from './src/routes/weatherRoutes.js'

dotenv.config()
const app = express()
app.use('/weather/api/:city', router)


const PORT = process.env.PORT || 5000; 

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`the server is runnig on ${PORT}`)
})