import redis from "redis";

const client = redis.createClient({
    url: `redis://localhost:${process.env.REDIS_PORT || 6379}`
});

client.on("error", (err) => {
    console.error("Redis error:", err);
});

export default client; 