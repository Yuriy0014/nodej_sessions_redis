import express, {Request, Response} from 'express';
import session from 'express-session';
import redis from 'redis';

import RedisStore from "connect-redis"

const app = express()

// if you run behind the proxy (kubernetes, nginx)
app.set('trust proxy', 1)
const port = 3000

// 1 Configure our redis
const redisClient = redis.createClient({
    socket: {
        port: 6379,
        host: 'localhost'
    }
})
redisClient.connect().catch(console.error)


// 2 Configure our session MW
app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: 'MySecret',
    saveUninitialized: false,
    resave: false,
    cookie: {
        secure: false, // if true: only transmit cookie over https,
        httpOnly: true, // if true: prevents client side JS from reading cookie
        maxAge: 1000 * 60 * 30 // session max Age in ms
    }

}))


// 3 create a login endpoint (unprotected)

app.post('/login', (req: Request, res: Response) => {

    const {email, password} = req.body

    // Check if the credentials are correct
    //..

    // assume that credentials are correct

    //@ts-ignore   ПОЗЖЕ ПОПРАВИТЬ - если надо расширить тип :)
    req.session.clientId = 'abc123'
    //@ts-ignore
    req.session.myNum = 5

    res.json('you are now logged in')
})



app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})