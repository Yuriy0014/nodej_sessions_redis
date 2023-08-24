import express, {Request, Response} from 'express';
import session from 'express-session';
import redis from 'redis';
import connectRedis from 'connect-redis'


const app = express()
const port = 3000

const RedisStore = connectRedis(session);

// 1 Configure our redis

const redisClient = redis.createClient({
    url: 'rediss://localhost:6379'
})

app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: 'MySecret',
    saveUninitialized: false,
    cookie: {
        secure: false, // if true: only transmit cookie over https,
        httpOnly: true, // if true: prevents client side JS from reading cookie
        maxAge: 1000 * 60 * 30 // session max Age in ms
    }

}))

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})