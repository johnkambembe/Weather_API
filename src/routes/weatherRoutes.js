
import express from 'express'
import controller from '../controllers/weatherControllers.js'

const router = express.Router()

router.get('/:city', controller.weather_api);

export default router;