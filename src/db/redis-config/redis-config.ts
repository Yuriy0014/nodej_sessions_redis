import RedisStore from "connect-redis"
import * as redis from 'redis';

// 1 Configure our redis
export const redisClient = redis.createClient({
    socket: {
        port: 6379,
        host: 'localhost'
    }
})
redisClient.connect().catch(console.error)

export const redisStore = new RedisStore({client: redisClient})