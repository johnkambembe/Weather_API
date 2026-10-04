import express from "express";
import dotenv from "dotenv";

import router from "./src/routes/weatherRoutes.js";
import client from "./src/config/redis.js";

dotenv.config();

const app = express();

app.use("/weather/", router);

const PORT = process.env.PORT || 5000;

await client.connect();

console.log("Redis connected");

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});